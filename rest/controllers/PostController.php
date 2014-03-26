<?php
namespace app\controllers;

use yii\rest\ActiveController;

class PostController extends ActiveController
{
    public $modelClass = 'app\models\Post';

    public function actions()
    {
        $actions = parent::actions();

        return $actions;
    }

    public $authMethods = [
//        'yii\rest\HttpBearerAuth',
    ];
}