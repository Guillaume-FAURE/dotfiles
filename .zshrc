#ZSHCONFIG
export ZSH="/home/epistelmoz/.oh-my-zsh"
ZSH_THEME="fukyuu"
CASE_SENSITIVE="true"
zstyle ':omz:update' mode reminder  # just remind me to update when it's time
COMPLETION_WAITING_DOTS="true"
HIST_STAMPS="dd/mm/yyyy"
plugins=(battery git colored-man-pages common-aliases emoji sudo zsh-autosuggestions)
source $ZSH/oh-my-zsh.sh

#ALIASES
alias pacupg='sudo pacman -Syu'
alias pacin='sudo pacman -S'
alias pacins='sudo pacman -U'
alias pacre='sudo pacman -R'
alias pacrem='sudo pacman -Rns'
alias pacrep='pacman -Si'
alias pacreps='pacman -Ss'
alias pacloc='pacman -Qi'
alias paclocs='pacman -Qs'
alias pacinsd='sudo pacman -S --asdeps'
alias pacmir='sudo pacman -Syy'
alias paclsorphans='sudo pacman -Qdt'
alias pacrmorphans='sudo pacman -Rs $(pacman -Qtdq)'
alias pacfileupg='sudo pacman -Fy'
alias pacfiles='pacman -F'
alias pacls='pacman -Ql'
alias pacown='pacman -Qo'
alias pacupd="sudo pacman -Sy"
alias upgrade='sudo pacman -Syu'
alias sd='shutdown now'

#PROGRAMS
neofetch

#PATH
export PATH=$PATH:~/bin
export MALIN_ROOT=/home/epistelmoz/projects/malin

