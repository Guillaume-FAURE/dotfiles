# Part1: Arch Linux System Basic Installation

Official site: https://wiki.archlinux.org/title/installation_guide

## Set the console keyboard layout

To print all the possible keyboards:
```shell
# ls /usr/share/kbd/keymaps/**/*.map.gz
```
Here, we will want the us international keyboards alias us-acentos, to load it:
```shell
# loadkeys us-acentos
```

## Verify the boot mode

To verify if the computer is booted in UEFI mode:
```shell
# ls /sys/firmware/efi/efivars
```
If there is no error, then everything fine.

## Connect to the internet

Here we will connect to the wifi:
```shell
# iwctl
```
You will enter in a new shell, to list possible device we want to connect:
```shell
# device list
```
Here, I only have the wlan0 device, I will make the following command to connect to the wifi with this device:
```shell
# station wlan0 scan
# station wlan0 get-networks
```
Normally it will print the possible Wifi you can connect to. When you find the one you want to connect to (here Freebox-4F8362):
```shell
# station wlan0 connect Freebox-4F8362
```
If a password is needed, provide it.
If there is no error, exit this shell and verify your well connected with the command:
```shell
# ping archlinux.org
```
It will print the time of connection if you're well connected to the wifi. Exit with Ctrl+C.

## Update the system clock

To print the current system clock:
```shell
# timedatectl
```
Set ntp to true and set the timezone appropriate with your Region and City here Europe and Paris:
```shell
# timedatectl set-ntp true
# timedatectl set-timezone Europe/Paris
```
Verify the clock in synchronized and the local time is yours with timedatectl.

## Partition the disks

Here, we have a disks of 476G and a RAM of 16G so we want 4 differents partitions:
* EFI partition 512M
* SWAP partition 20G : For more info about swap see the appropriate section
* ROOT partition 80G : To be sure there is enough place for all the packages, my precedent one with 40G wasn't enough
* HOME partition rest(376G): Where my files will be located

To known the disk to partition:
```shell
# fdisk -l
```
Usually it will be /dev/sda, here on the Lenovo Thinkpad P14 G2, it's /dev/nvme0n1.
Be sure there is not already some partitions and let's begin the partitioning:
```shell
# fdisk /dev/nvme0n1
```
Normally, you will enter a new shell, you can tap m to print all the possible commands
```shell
g : to create a new GPT disklabel
n : to create our EFI partition
1 : partition number (possible to just tap enter)
2048 : first sector (possible to just tap enter)
+512M : size of our EFI partition
```
Same thing with the 3 others partitions:
```shell
n
enter
enter
+20G
n
enter
enter
+80G
n
enter
enter
enter
```
To see the partition table created, you can tap p (for print).
Now we will give partition type to the different partitions:
```shell
t : to change type of a partition
1 : our first partition
1 : type EFI System
t
2
19 : type Linux swap
t
3
23 : type Linux root (x86-64) : not necessary, Linux filesystem is fine
t
4
28 : type Linux home : not necessary, Linux filesystem is fine
```
If you're satisfied with your partition table, write it with:
```shell
w
```

### Swap Partition

Complete page : https://opensource.com/article/18/9/swap-space-linux-systems 
In my case, with a RAM of 8G, to be sure to have enough swap place and with an external hard disk to store important data, a swap file of 1.75x my amount of RAM seems appropriate to allow hibernation without problem.
Swap Partition : 14G 

## Format the partitions

We will now format each partitions
```shell
# mkfs.ext4 /dev/nvme0n1p4
# mkfs.ext4 /dev/nvme0n1p3
# mkswap /dev/nvme0n1p2
# mkfs.fat -F 32 /dev/nvme0n1p1
```

## Mount the file System

Now we will create the appropriate directory and mount everything in /mnt, we will also activate our swap partition:
```shell
# mount /dev/nvme0n1p3 /mnt
# mkdir /mnt/boot
# mkdir /mnt/boot/efi
# mkdir /mnt/home
# mount /dev/nvme0p1p1 /mnt/boot
# mount /dev/nvme0p1p4 /mnt/home
# swapon /dev/nvme0p1p2
```
If there is no error, we can continue.

## Selection of the appropriate mirrors

The list of the mirror pacman will connect you to is located at /etc/pacman.d/mirrorlist. Normally there is no problem with this list. However, you can edit it if you're not happy with it.

## Install essential packages

We will know install all the basic tools we will need with pacstrap
```
# pacstrap /mnt base linux linux-firmware vim networkmanager man-db
```
It might take a while.

## Fstab

Generate the fstab file with:
```shell
# genfstab -U /mnt >> /mnt/etc/fstab
```

## Chroot

We will now chroot into the new system created:
```shell
# arch-chroot /mnt
```
Normally it will change your shell

## Basic configuration of the system

We will now set the time zone:
```shell
# ln -sf /usr/share/zoneinfo/Europe/Paris /etc/localtime
# hwclock --systohc
```

## Edit system file

We will now edit some files to define our language, keymap and hostname
```shell
# vim /etc/locale.gen : uncomment your language with i or d (vim keybinding), I will uncomment the en_US.UTF-8 and save the file with :wq
# locale-gen
# vim /etc/locale.conf : add your language here : LANG=en_US.UTF-8
# vim /etc/vconsole.conf : add your keyboard : KEYMAP=us-acentos
# vim /etc/hostname : add your hostname : epistelmoz
```
add : 
127.0.0.1        localhost
::1              localhost
127.0.1.1        myhostname
To the file /etc/hosts

## Root Password

We will now set up our root password (we will create users when we will be in the system):
```shell
# passwd
```
Care to have a solid password obviously, it's the key to everything in your computer.

## Boot Loader

For our boot loader, we will use GRUB, for another one see the site: https://wiki.archlinux.org/title/Arch_boot_process#Boot_loader
So we will install the grub and efibootmgr as weel as amd-ucode because I got an AMD CPU with pacman:
```shell
# pacman -S grub efibootmgr amd-ucode
```
Create the EFI directory in the boot directory where you mounted the EFI partition
```shell
# mkdir /boot/EFI
```
Install the GRUB:
```shell
# grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=arch_grub --recheck
```

## Reboot the system

Normally the system is built, we can exit it and reboot the system :
```shell
# exit
# umount -R /mnt
# reboot
```

# Part2: Configuration of the system and the Window Manager

Normally after the reboot, you have access to the ArchLinux system, if you arrive on a grub shell, reinstall arch and care to where you mount your EFI partition and at your grub-install command.
Now you can login to your root user with the password you set up.

## Connection to wifi through NetworkManager

To connect to wifi, we need to activate NetworkManager with systemd.
```shell
# systemctl enable NetworkManager.service
# systemctl start NetworkManager.service
```
Now we can use nmcli and nmtui, we will use nmtui, more intuitive
```shell
# nmtui
```
You will arrive on a 'page', select activate a connection, choose you're wifi and tap the password
To verify that you're well connected to the wifi, ping google.com.

## Installation of a WM and a DM : AwesomeWM and LightDM

For now we are on a terminal the tty1, we will install a window manager to use our desktop easily. I prefere AmesomeWM but you can install the window manager you want, normally it won't affect the following of this tutorial except what is directly link to AwesomeWM.
We will install awesome, xorg and xorg-xinit with pacman:
```bash
# pacman -S awesome xorg xorg-xinit
```
Now to launch our first session of awesomeWM we will need to edit the .xinitrc:
```bash
# cp /etc/X11/xinit/xinitrc ~/.xinitrc
# vim .xinitrc
```
And replace the last block of command by 'exec awesome'.
Then just tap 'startx'
Normally, a session of awesomeWM will start.
To open your terminal do Super+Enter. The super key will depend on the keyboard but it's usually the windows button.

Install some basic fonts:
```bash
# pacman -S fontconfig ttf-dejavu 
```

We will now install a display manager to login, I will personnaly use LightDM:
```bash
# pacman -S lightdm lightdm-gtk-greeter
# systemctl enable lightdm.service
```
We will now reboot the desktop to see if all go well.
Normally you will arrive to your greeter, put the login root and your password to access awesomeWM.

## Creation of a new user

We won't navigate in our desktop with our root user, it's not a good habit and some program won't allow you to do that. So we will create our new user but first to allow our future users to use some root command without switching of user we will install the base-devel package that include multiple building package including sudo:
```bash
# pacman -S base-devel
```
We will create a new group sudo:
```bash
# groupadd sudo
```
And we will add to the file /etc/sudoers
```shell
%sudo ALL=(ALL:ALL) ALL
```
That way all users in the sudo group will have the possibility to use '$ sudo command' to have the root privileges for one command.
We will know create a new user, epistelmoz:
```bash
# useradd -m epistelmoz
```
And we will add the basic groups(to know all possibles group use '# cat /etc/group' to epistelmoz:
```bash
# usermod -aG sudo,wheel,audio,video,users epistelmoz
```
To verify that the groups was well added use:
```bash
# groups epistelmoz
```
For that to take effect, reboot one time and login with your new user, we won't use the root user anymore.

## Installation of the basic packages to use our desktop

We will now install some packages to use our desktop simply and usefully:
```bash
# pacman -S firefox vlc pulseaudio pamixer git zsh 
```
Check the pacman wiki page for all the commands and tips and tricks with pacman: https://wiki.archlinux.org/title/Pacman
With this we will have the possibility to navigate on the internet, to import repository, to play audio and video and to manipulate sound
For now we only have the possibility to install officialy packages, to install AUR (Arch User Repository) we will need paru:
```bash
$ git clone https://aur.archlinux.org/paru.git
$ cd paru
$ makepkg -si
```
It will install paru and rust (used in paru). We will now use paru to install all the packages, it give access to AUR (you can always use pacman to install official packages if you want). There is no need to use the tag sudo before paru but it will ask the password.
I will now install the rest of the packages I need for everyday and work:
```bash
$ paru -S acpi zsh-autosuggestions htop neofetch picom udiskie exa rofi ristretto zsh-completions lutris gaupol steam npm shutter graphicsmagick clementine obs-studio yt-dlp audacity nodejs mupdf mupdf-tools typescript gimp docker discord signal-desktop libreoffice-fresh zoom postman figma-linux 
```
Packages:
* acpi : Client for power, battery and thermal readings
* zsh-autosuggestions : in the name
* htop : Interactive process viewer
* neofetch : A CLI system information tool
* picom : X compositor
* udiskie : Removable disk automounter using udisks
* exa : ls replacement
* rofi : A window switcher, application launcher and dmenu replacement
* ristretto : A fast and lightweight picture viewer
* zsh-completions : Additional completion definitions for Zsh
* lutris : Open Gaming Platform
* gaupol : Editor for text-based subtitles
* steam : Valve's digital software delivery system
* npm : A package manager for javascript
* shutter : The feature-rich screenshot tool
* graphicsmagick : Image processing system
* clementine : A modern music player and library organizer
* obs-studio : Free, open source software for live streaming and recording
* yt-dlp : A youtube-dl fork with additional features and fixes
* audacity : A program that lets you manipulate digital audio waveforms
* nodejs : Evented I/O for V8 javascript
* mupdf :  Lightweight PDF and XPS viewer
* mupdf-tools
* typescript : TypeScript is a language for application scale JavaScript development
* gimp : GNU Image Manipulation Program
* docker : Pack, ship and run any application as a lightweight container
* discord : All-in-one voice and text chat for gamers that's free and secure.
* signal-desktop : Signal Private Messenger for Linux
* libreoffice-fresh : LibreOffice branch which contains new features and program enhancements
* zoom : Visio tool
* postman-bin
* figma-linux

N.B.: 
* Some packages are multilib only so we need to enable it, to do that remove the # before [multilib] and the line just below it.
* Steam is a windows based app, so it need the appropriate font, install ttf-liberation to use it without font problem.

## Terminal customization

Normally after the precedent part, you can use your desktop in the everyday life without problem. There is no access to sound or backlight through keybinding but we will see that later.
For now, we will do some customization of our terminal. Personnaly, I use kitty, alacritty is also a good choice.
We will install use zsh, oh-my-zsh and the kitty conf file.

## Backlight

All information about backlight : https://wiki.archlinux.org/title/Backlight
Install the package xorg-xbacklight or acpilight if the command xbacklight return "No outputs have backlight property", it was my case so I installed acpilight:
```bash
# paru -S acpilight
``` 
Then test if xbacklight works well and set it how you want.
For now, you will need to use your terminal to change your backlight but we will quickly see for the keybinding.
To extraSaturate the computer, you can use xrandr, it can be used also to change the resolution of the monitor
```bash
$ xrandr --listactivemonitors //to get your monitor, for me eDP-1
$ xrandr --output eDP-1 --brightness 2
```

## Sound

To activate our sound and modify it, we will use pulseaudio and pamixer.
The easiest way to activate sound is to use systemd and activate the service pulseaudio.
```bash
# systemd --user enable pulseaudio.service
# systemd --user start pulseaudio.service
```
Now that the pulseaudio daemon have been activated, we can modulate our sound with pamixer:
```bash
$ pamixer -i 1
$ pamixer -d 1
$ pamixer --get-volume
```
As for the backlight, it begin with the terminal but we will soon use keybinding to modulate this things 
If you have other problem with sound or microphone, I advice you to install pavucontrol:
```bash
# paru -S pavucontrol
```
The GUI interface is more intuitive and will often resolve your problems.

## Wallpaper : AwesomeWM and LightDM

### AwesomwDM

Now we will see how to change our background of our WM and of our DM.
There are some tools to easily change your wallpaper but for now I will simply use what AwesomeWM provide me.
First of all copy your awesome configuration to your .config directory:
```bash
$ mkdir -p ~/.config/awesome/
$ cp /etc/xdg/awesome/rc.lua ~/.config/awesome/
``` 
And add to your themes/default/themes.lua:
theme.wallpaper = themes_path.."default/wallpaperIChoose.png"

### LightDM

Install one of the greeter, we will take the lightdm-webkit-theme-litarvan:
```bash
# paru -S lightdm-webkit2-greeter lightdm-webkit-theme-litarvan
```
If not already done, edit /etc/lightdm/lightdm.conf and set greeter-session=lightdm-webkit2-greeter

## Git

git config --global user.email "faureg0717@gmail.com"
git config --global user.name "Guillaume-FAURE"
git config pull.rebase true
git config --global init.defaultBranch main

## Zsh

To switch from bash to zsh in your default shell:
```shell
# chsh -s /bin/zsh root
# chsh -s /bin/zsh epistelmoz
```

## Udiskie : automount

Add to .xinitrc:
udiskie &

## Docker

To use docker as non-root user, add you to the docker group:
```shell
# usermod -aG docker user
```
You will need to reboot to apply the group changing.
To start docker daemon at boot (recommanded):
```shell
# systemctl enable docker.service   
# systemctl enable containerd.service
```

## Hakuneko

Hakuneko is surely the most powerful manga downloader app you can download. MangaKakalot is one of the best mirror
I created I program to make the manga downloaded this way portable to kobo and optimize to take less space while being in nearly the same quality : https://github.com/Guillaume-FAURE/mangaOptimization 

## Battery


To optimize the battery : https://wiki.archlinux.org/title/Tp-battery-mode 

