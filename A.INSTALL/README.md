## Set your environment Variables

```
$ source ~/Developer/canarie.ca/collège-boréal-openrc-quebec.sh
```

## Create the Docker Machine on OpenStack

```
$ docker-machine --debug \
  create --driver openstack \
         --openstack-flavor-name m1.tiny \
         --openstack-image-name "Ubuntu 14.04" \
         --openstack-ssh-user ubuntu \
         --openstack-sec-groups default \
    INF1045-<your name>
```
