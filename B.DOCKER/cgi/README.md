
# CGI

## Executer le conteneur PHP

```
$ docker run -d --name apache-php7 -p 8080:80 nimmis/alpine-apache-php7
```

## Rajouter le 'Server Side' fichier

* Dans le container, modifier le repertoire /web/html en ajoutant info.php

```
<?php
phpipnfo()
?>
```

