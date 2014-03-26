<?php
namespace app\controllers;

use app\models\LoginForm;
use yii\rest\ActiveController;
use Yii;

class UserController extends ActiveController
{
//    public $supportedVersions = ['1.0','2.0'];
//
    public $modelClass = 'app\models\User';

    public $authMethods = [
//        'yii\rest\HttpBasicAuth',
//        'yii\rest\QueryParamAuth',
//        'yii\rest\HttpBearerAuth',
    ];

    public function actionLogin()
    {
        if (!\Yii::$app->user->isGuest) {
            return Yii::$app->user->identity->token;
        }

        $model = new LoginForm();
        if ($model->load(Yii::$app->getRequest()->getBodyParams(), '') && $model->login()) {
            return Yii::$app->user->identity->token;
        } else {
            $model->validate();
            return $model;
        }
    }

    public function actionLogout()
    {
        Yii::$app->user->logout();
        return $this->goHome();
    }

}