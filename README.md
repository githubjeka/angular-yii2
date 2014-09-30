#GET STARTED

```
$ git clone https://github.com/githubjeka/angular-yii2.git
$ cd angular-yii2
$ git submodule init
$ git submodule update
```

###Init client###
```
$ cd client-angular
$ bower update
```

###Init server:###
[![Build Status](https://travis-ci.org/githubjeka/yii2-rest.svg)](https://travis-ci.org/githubjeka/yii2-rest)
```
$ cd rest
$ composer install --prefer-dist
```
Create a new database and adjust the components['db'] configuration in environments/dev/common/config/main-local.php accordingly.
```
$ php yii init
$ php yii migrate
```

See more info https://github.com/githubjeka/yii2-rest/blob/master/README.md


## Test app yii2 rest Api and angular client side

Demo Client - [http://angularyii2.github.io/](http://angularyii2.github.io/)

Demo Server - [http://angular-yii2.tk/](http://angular-yii2.tk/)

