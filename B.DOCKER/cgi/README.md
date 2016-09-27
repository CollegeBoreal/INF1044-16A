
# CGI

Modifier dans le container le repertoire /web/html en ajoutant info.php

```
<?php
phpipnfo()
?>
```

```
$ docker run -d --name apache-php7 -p 8080:80 nimmis/alpine-apache-php7
```
