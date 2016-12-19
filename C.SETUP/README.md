# SETUP

## Project
* [Installation](INSTALL.md)
* Vérifier les [versions](VERSIONS.md)
* Lancer les [simulateurs](EMULATORS.md) 

### (Eventuellement) Créer 
```
$ tns create mon-projet --template angular
```

### Compiler l'application mobile
```
$ tns install
```

### Faire tourner l'application mobile
```
$ tns run <platform>
```

### developper de facon incrementale (apres avoir installer l'application avec tns run)
```
$ tns livesync --emulator --watch
```

### Nettoyer en cas de probleme 

```
$ rm -rf node_modules hooks lib platforms
```
