<?php
namespace app\controllers;

use yii\rest\ActiveController;

class UserController extends ActiveController
{
    public $supportedVersions = ['1.0','2.0'];

    public $modelClass = 'app\models\User';

    public $authMethods = [
//        'yii\rest\HttpBasicAuth',
//        'yii\rest\QueryParamAuth',
        'yii\rest\HttpBearerAuth',
    ];

}