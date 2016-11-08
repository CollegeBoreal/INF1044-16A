# Simulateurs

XCode et Android Studio sont requis pour lancer les simulateurs

## iOS
XCode 7+
``` 
$ open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app
```
or ajouter à .bash_profile
```
alias simulator='open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app'
```

## Android
``` 
$ android avd
```


Note:   
Vérifier que $ANDROID_HOME est présent  
et que le chemin est mis sur   
``` 
$ export PATH=$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools
```


