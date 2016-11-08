# Emulators

## iOS
XCode 7+
``` 
$ open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app
```
or add to .bash_profile
```
alias simulator='open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app'
```

## Android
``` 
$ android avd
```


Note:   
Make sure $ANDROID_HOME is set  
and set the path to
``` 
$ export PATH=$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools
```


