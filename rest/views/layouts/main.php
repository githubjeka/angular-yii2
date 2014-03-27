<?php
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;

/**
 * @var \yii\web\View $this
 * @var string $content
 */
AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="iejs/html5shiv.js"></script>
    <script src="iejs/respond.min.js"></script>
    <![endif]-->
</head>
<body>

<?php $this->beginBody() ?>
<div class="wrap">
    <div class="container-fluid">
        <!--[if lt IE 8]>
        <div class="alert alert-danger">
            Вы пользуетесь устаревшей версией браузера Internet Explorer. Данная версия <br>
            браузера не поддерживает многие современные технологии, из-за чего многие страницы отображаются медленно и
            некорректно,<br>
            а главное — на сайтах могут работать не все функции.<br>
            <strong>Обновите свой браузер, за помощью можете обратитется к системному администратору.</strong>
        </div>
        <![endif]-->
        <?=
        Breadcrumbs::widget([
            'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
        ]) ?>
        <?= $content ?>
    </div>
</div>

<footer class="footer">
    <div class="container">

        <section>
            Информацию на сайте предоставляет <a href="http://10.178.4.2/str_pto.html">служба ПТО.</a><br>
            <strong>
                Если у вас есть пожелания или замечания по работе сайта, то обращайтесь в <a
                    href="http://10.178.4.2/str_asu1.html">Лаборатории АСУ</a>, филиал &laquo;Витебские тепловые
                сети&raquo;
            </strong>
        </section>

    </div>
</footer>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
