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
# pacman -S fontconfig ttf-dejavu adobe-source-code-pro-fonts ttf-liberation 
```

We will now install a display manager to login, I will personnaly use LightDM:
```bash
# pacman -S lightdm lightdm-gtk-greeter
# systemctl enable lightdm.service
```
We will now reboot the desktop to see if all go well.
Normally you will arrive to your greeter, put the login root and your password to access awesomeWM.

## Installation of the basic packages to use our desktop

We will now install some packages to use our desktop simply and usefully:
```bash
# pacman -S firefox vlc pulseaudio pamixer alsa-utils git
```
