<?php

$params = require(__DIR__ . '/params.php');
$db = require(__DIR__ . '/db.php');

$config = [
    'id' => 'basic',
    'language' => 'ru',
    'basePath' => dirname(__DIR__),
    'extensions' => require(__DIR__ . '/../vendor/yiisoft/extensions.php'),
    'components' => [
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
        'user' => [
            'identityClass' => 'app\models\User',
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
        'mail' => [
            'class' => 'yii\swiftmailer\Mailer',
            'useFileTransport' => true,
        ],
        'log' => [
            'targets' => [
                'file' => [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['trace', 'info'],
                    'categories' => ['yii\*'],
                ],
            ],
        ],
        'request' => [
            'class' => '\yii\web\Request',
            'parsers' => [
                'application/json' => 'yii\web\JsonParser',
            ],
        ],
        'urlManager' => [
            'enablePrettyUrl' => true,
            'enableStrictParsing' => true,
            'showScriptName' => false,
            'rules' => [
                ['class' => 'yii\rest\UrlRule', 'controller' => 'user'],

                'OPTIONS user/logout' => 'user/options',
                'OPTIONS user/login' => 'user/options',
                'GET user/login' => 'user/login',
                'GET user/logout' => 'user/logout',
                'POST user/login' => 'user/login',

                'OPTIONS <controller:\w+>' => '<controller>/options',
                'OPTIONS <controller:\w+>/<id:\d+>' => '<controller>/options',
                'GET <controller:\w+>' => '<controller>/index',
                'GET <controller:\w+>/<id:\d+>' => '<controller>/view',
                'POST <controller:\w+>' => '<controller>/create',
                'PUT,PATCH <controller:\w+>/<id:\d+>' => '<controller>/update',
                'DELETE <controller:\w+>/<id:\d+>' => '<controller>/delete',
            ],
        ],
        'db' => $db,
    ],
    'params' => $params,
];

return $config;
