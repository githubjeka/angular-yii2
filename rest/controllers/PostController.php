<?php
namespace app\controllers;

use yii\rest\ActiveController;

class PostController extends ActiveController
{
    public $modelClass = 'app\models\Post';

    public function actions()
    {
        $actions = parent::actions();

        $actions['create'] = [
            'class' => 'app\controllers\actions\CreateAction',
            'modelClass' => $this->modelClass,
            'checkAccess' => [$this, 'checkAccess'],
            'scenario' => $this->createScenario,
            'transactional' => $this->transactional,
        ];

        $actions['update'] = [
            'class' => 'app\controllers\actions\UpdateAction',
            'modelClass' => $this->modelClass,
            'checkAccess' => [$this, 'checkAccess'],
            'scenario' => $this->updateScenario,
            'transactional' => $this->transactional,
        ];

        return $actions;
    }

    public $authMethods = [
//        'yii\rest\HttpBearerAuth',
    ];
}