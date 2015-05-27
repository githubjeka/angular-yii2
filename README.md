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

See more info https://github.com/AngularYii2/angularyii2.github.io

###Init server:###
[on GitHub](https://github.com/githubjeka/yii2-rest)
[![Build Status](https://travis-ci.org/githubjeka/yii2-rest.svg)](https://travis-ci.org/githubjeka/yii2-rest)

```
$ cd rest
$ composer install --prefer-dist
```

Create a new database and adjust the components['db'] configuration in /common/config/main-local.php accordingly.
```
$ php init
$ php yii migrate
```

## Test app yii2 rest Api and angular client side

Demo Client - [http://angularyii2.github.io/](http://angularyii2.github.io/)

Demo Server - [https://yii2-rest-githubjeka.c9.io/rest/web/](https://yii2-rest-githubjeka.c9.io/rest/web/)

Not Found (#404) is OK, because rules is
```php
[
'urlManager' => [
            'enablePrettyUrl' => true,
            'enableStrictParsing' => true,
            'showScriptName' => false,
            'rules' => [
                ['class' => 'yii\rest\UrlRule', 'controller' => ['v1/post', 'v1/comment', 'v2/post']],
                'v1/user/login' => 'v1/user/login',
                'POST v2/user/login' => 'v2/user/login',
                'OPTIONS v2/user/login' => 'v2/user/login',
            ],
        ],
 ]
 ```
 
### Additional sources of knowledge

- [:link: How To Create Single Page Application in minutes! with AngularJs 1.3 and Yii 2.0 ](https://github.com/hscstudio/angular1-yii2) 
