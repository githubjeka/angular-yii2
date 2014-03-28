<?php
namespace app\controllers;

use app\models\LoginForm;
use yii\rest\ActiveController;
use Yii;

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
    }

    public function actionIndex()
    {
        if (Yii::$app->user->isGuest) {
            throw new \HttpHeaderException();
        }
        return Yii::$app->user->getId();
    }

}