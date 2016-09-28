
# CGI

## Executer le conteneur PHP

```
$ docker run -d --name apache-php7 -p 8080:80 nimmis/alpine-apache-php7
```

## Rajouter le fichier 'Server Side'

* Dans le container, modifier le repertoire /web/html en ajoutant info.php

```
<?php
phpipnfo()
?>
```

* Copier manuellement les fichiers PHPs

```
$ docker cp *.php apache-php7:/web/html
```


