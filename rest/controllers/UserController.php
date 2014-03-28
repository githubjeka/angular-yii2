<?php
namespace app\controllers;

use app\models\LoginForm;
use yii\base\ErrorHandler;
use yii\rest\ActiveController;
use Yii;
use yii\web\Cookie;

class UserController extends ActiveController
{
    public $modelClass = 'app\models\User';

    public function actionLogin()
    {
        if (\Yii::$app->user->isGuest) {

            $model = new LoginForm();

            if (!$model->load(Yii::$app->getRequest()->getBodyParams(), '') || !$model->login()) {
                $model->validate();
                return $model;
            }
        }

        echo Yii::$app->user->identity->token;
    }

    public function actionLogout()
    {
        Yii::$app->user->logout();
        return $this->goHome();
    }

}