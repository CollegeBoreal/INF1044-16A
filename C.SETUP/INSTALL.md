# Prérequis

## node.js

https://nodejs.org/en/download/

## Nativescript (Telerik NativeScript)
```
$ sudo npm install -g nativescript@2.3.0
```
## Angular CLI
```
$ sudo npm install -g angular-cli
```
# Supplement

## Générer du code pour l'iOS

Pour compiler et générer du code Swift (ou Objective C) sous MacOS,  
Telerik utilise Ruby et le projet xcodeproj (similaire a Graddle pour Android)   
Le projet xcodeproj requiert la librairie cocoapods

* Installer le `xcodeproj ruby gem` :   
```
$ sudo gem install xcodeproj
$ sudo gem install cocoapods
```

* ERROR:  Error installing xcodeproj:   
	activesupport requires Ruby version >= 2.2.2.   
```
$ sudo gem install activesupport -v 4.2.6
```
-- Reference:  
https://docs.nativescript.org/start/ns-setup-os-x   


## Accélérateur pour l'Android

Installer l'accélérateur  (Intel® HAXM) et utiliser le CPU/ABI Intel Atom (x86_64)
https://software.intel.com/en-us/android/articles/intel-hardware-accelerated-execution-manager


## Installer Java et Android SDK
