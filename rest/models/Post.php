<?php

namespace app\models;

use yii\base\Exception;

/**
 * This is the model class for table "tbl_post".
 *
 * @property integer $id
 * @property string $title
 * @property string $content
 * @property string $tags
 * @property integer $status
 * @property integer $create_time
 * @property integer $update_time
 * @property integer $author_id
 */
class Post extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'tbl_post';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['title', 'content', 'status'], 'required'],
            [['content', 'tags'], 'string'],
            [['status', 'create_time', 'update_time'], 'integer'],
            [['title'], 'string', 'max' => 128]
        ];
    }

    public function extraFields()
    {
        return [
            'comments',
        ];
    }

    public function fields()
    {
        return [
            'id',
            'title',
            'content',
            'tags',
            'status',
            'author'
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title' => 'Title',
            'content' => 'Content',
            'tags' => 'Tags',
            'status' => 'Status',
            'create_time' => 'Create Time',
            'update_time' => 'Update Time',
            'author_id' => 'Author ID',
        ];
    }

    public function beforeSave($insert)
    {
        if (parent::beforeSave($insert)) {

            if (\Yii::$app->user->isGuest)
                throw new Exception ('User is Guest');

            $this->author_id = (int)\Yii::$app->user->id;

            return true;

        } else {
            return false;
        }
    }

    public function getComments()
    {
        return $this->hasMany(Comment::className(), ['post_id' => 'id']);
    }

    public function getAuthor()
    {
        return $this->hasOne(User::className(), ['id' => 'author_id']);
    }
}
