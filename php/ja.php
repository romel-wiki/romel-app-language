<?
/**
 * Japanese
 * ------------------------------ */
$FileName = strstr(basename(__FILE__), '.', true);

$Language = array(
  'appName' => 'Ro Masters Wiki',
  'appTitle' => 'Ragnarok Masters Wiki',
  'fileName' => $FileName,
  'languageName' => '日本語',

  // 通用类
  'common' => array(
    'emptyComment' => 'まだコメントはありません',
    'emptyData' => 'まだデータがありません',
    'emptySearch' => '一致するデータがありません',
    'notPermission' => '許可なし',
    'lostQuery' => 'パラメータがありません',
    'lessContent' => '少なすぎる内容',
    'endData' => '全てが表示されました',
    'history' => '歴史',
    'loadMore' => 'もっと読む',
    'origin' => '入手方法',
    'timeout' => 'タイムアウト',
    'unit' => '',
    'moneyUnit' => 'CNY',
    'condition' => '条件',
    'unrequired' => '無制限',

    'article' => '記事',
    'card' => 'カード',
    'detail' => '詳細',
    'draw' => '設計図',
    'dropItem' => 'ドロップ',
    'equip' => '装備',
    'equipPosition' => '部位',
    'fitJob' => '職業',
    'item' => 'アイテム',
    'job' => '職業',
    'level' => 'Lv',
    'name' => 'お名前',
    'needExp' => '経験値が必要',
    'number' => '数量',
    'map' => 'マップ',
    'material' => '材料',
    'monster' => 'モンスター',
    'more' => 'もっと',
    'option' => 'オプション',
    'price' => '価格',
    'rewardItem' => '報酬',
    'server' => 'サーバー',
    'skill' => 'スキル',
    'storage' => '存入',
    'storageAttr' => '存入',
    'unlock' => '解鎖',
    'unlockAttr' => '解鎖',
    'viewpoint' => '名所',

    // 地图
    'midgarts' => 'ミッドガルド',
    'asgard' => 'アースガルド',

    // 操作
    'readMake' => '製作材料',
    'readProcess' => '製作段階',
    'readUpgrade' => 'アップグレード',
    'readSkill' => 'スキル',

    // 制作、升级相关
    'makeMap' => 'マップ',
    'makeMaterial' => '必要材料',
    'upgradeStart' => '初始属性',
    'upgradeThe' => '',
    'upgradeStep' => '段階',

    // 料理相关
    'kitchenware' => '調理器具',
    'cookerAttr' => '料理 Lv.10',
    'tasterAttr' => '味わう Lv.10',

    // 地图相关
    'mapMonster' => 'モンスター',
    'mapPoint' => 'マップ',

    // 成就相关
    'achievementGetTitle' => '称号獲得',
    'achievementTitleAttr' => '効果',

    // 用户相关
    'login' => 'ログイン',
    'signup' => '登録',
    'needLogin' => 'ログインしてください',
    'forMember' => 'メンバーの機能',
    'loginRead' => 'メンバーの機能',


    // JavaScript File
    // --------------------
    'notSupportMobile' => 'モバイルブラウジングはサポートされていません',
    'closeWindow' => '現在のページを閉じますか？',
    'attr' => '効果',
    'buyPrice' => '取引所価格',
    'gotoLogin' => 'ログイン',
    'rank' => '品質',

    // 装备相关
    'canSolt' => '穴開け',
    'canUpgrade' => 'アップグレード',
    'canTrade' => '取引',
    'equipEveryAdd' => '強化每',
    'equipEveryRefine' => '精鍊每',
    'equipMaxRefine' => '精鍊最高',
    'equipSlotCost' => '穴開け費用',
    'forCompose' => '装備製作に使用',
    'forUpgrade' => 'アップグレードに使用',
    'suitAttr' => 'セット効果',

    // 料理相关
    'foodDuration' => '持久時間',
    'foodHeat' => 'カロリー備蓄',

    // 家具相关
    'score' => '得点',
    // --------------------
  ),

  // 时间单位
  'timeUnit' => array(
    'year' => '年',
    'month' => '月',
    'day' => '日',
    'hour' => '時',
    'minute' => '分',
    'second' => '秒'
  ),

  // 对话框
  // JavaScript File
  'dialog' => array(
    'default' => 'Tips',
    'error' => 'Error',
    'ok' => '決定する',
    'no' => 'キャンセル'
  ),

  // 页面标题
  'pageTitle' => array(
    'default' => 'Romel Wiki',
    'feedback' => 'フィードバック',
    'pay' => '支払う',

    'achievement' => '実績',
    'attrSimulator' => 'ポイントシミュレータ',
    'being' => 'ホムンクルス',
    'card' => 'カード',
    'costCalc' => 'コスト計算',
    'endlessTower' => 'エンドレスタワー',
    'endlessTowerLog' => '无限塔线路上报记录',
    'equip' => '装備',
    'equipUpgrade' => 'アップグレード',
    'exchange' => '取引所',
    'exchangeDetail' => '交易详情',
    'exchangeReport' => '交易所批量更新',
    'exp' => '経験値',
    'food' => '料理',
    'furniture' => '家具',
    'gem' => 'Gem',
    'greedyShop' => 'グリード商店',
    'guild' => 'ギルド',
    'hat' => '頭飾',
    'job' => '職業',
    'map' => 'マップ',
    'monster' => 'モンスター',
    'pet' => 'ペット',
    'petAdventure' => '冒険',
    'petCatch' => '捕獲',
    'petWork' => 'アルバイト',
    'plagiarismSkill' => 'クローンスキル',
    'prtMaze' => '迷宮の森ナビゲーション',
    'rune' => 'アース神の石碑',
    'search' => '検索',
    'skillSimulator' => 'スキルシミュレータ',
    'skillSimulatorT4' => '4次 スキルシミュレータ',
    'timer' => 'MVP & Mini タイマー',
    'valhalla' => 'ヴァルハラ遺跡ナビゲーション',
    'valhallaEditor' => '遗迹线路编辑器',
    'xo' => 'クエスト問題',

    // 注册登录
    'login' => '登録 / ログイン',

    // 个人中心
    'myAvatar' => 'アバターを変更する',
    'myProfile' => 'ファイルを編集',

    // JavaScript File
    'itemItem' => 'アイテムの詳細',
    'monsterItem' => 'モンスターの詳細'
  ),

  // 底部导航标题
  'footerTitle' => array(
    'card' => 'カード',
    'endlessTower' => 'エンドレスタワー',
    'equip' => '装備',
    'feedback' => 'フィードバック',
    'food' => '料理',
    'furniture' => '家具',
    'greedyShop' => 'グリード商店',
    'hat' => '頭飾',
    'home' => 'ホーム',
    'map' => 'マップ',
    'monster' => 'モンスター',
    'started' => '入門',
    'pet' => 'ペット',
    'valhalla' => 'ヴァルハラ遺跡'
  ),

  // 搜索项名称
  'searchTitle' => array(
    'adventureArea' => '地域',
    'attr' => '効果',
    'bookAttr' => '解放',
    'dropItem' => 'ドロップ',
    'isCompose' => '装備製作に属する',
    'isEquipHigh' => '魔力注入に属する',
    'keywork' => 'キーワード',
    'makeMaterial' => '製作材料',
    'myFavorite' => '私のコレクション',
    'name' => 'お名前',
    'origin' => '入手方法',
    'plagiarismSkill' => 'クローンスキル',
    'rank' => '品質',
    'refineStorage' => '預ける精錬',
    'tradeType' => '取引所',
    'transformSkill' => '変身スキル',
    'upgradeMaterial' => 'アップグレード材料',
  ),

  // 筛选工具
  'filterOptions' => array(
    'normal' => '全部',
    'have' => '含む',
    'not' => 'いいえ',
    'canTrade' => '取引可',
    'notTrade' => '取引不可',
  ),

  // JavaScript File
  // --------------------
  'filterNames' => array(
    'attr' => '効果',
    'cooker' => '料理',
    'hard' => '難易度',
    'job' => '職業',
    'kitchenware' => '調理器具',
    'level' => 'Lv',
    'monster' => 'モンスター',
    'nature' => '属性',
    'orderby' => 'ソート方法',
    'position' => '部位',
    'quality' => '品質',
    'race' => '種族',
    'reward' => '報酬',
    'save' => '存入',
    'size' => 'サイズ',
    'skillLevel' => 'スキル Lv',
    'taster' => '味わう',
    'theme' => 'テーマ',
    'type' => '種類',
    'unlock' => '解锁',
    'slot' => '穴開け'
  ),
  'orderbyOptions' => array(
    'default' => 'デフォルト',
    'hardAsc' => '難度低い順',
    'hardDesc' => '難度高い順',
    'idAsc' => 'ID 順',
    'levelAsc' => 'Lv 低い順',
    'levelDesc' => 'Lv 高い順',
    'priceAsc' => '価格低い順',
    'priceDesc' => '価格高い順',
    'scoreAsc' => '得点低い順',
    'scoreDesc' => '得点高い順'
  ),
  // --------------------

  // 表单类
  'buttonName' => array(
    'calc' => '計算',
    'calcCost' => '計算コスト',
    'calcAllCost' => '総費用を計算する',
    'clear' => '除去',
    'close' => '閉じる',
    'delete' => '削除',
    'edit' => '編集',
    'filter' => 'フィルター',
    'insert' => '挿入',
    'login' => 'ログイン',
    'logout' => '退出',
    'next' => '次のステップ',
    'pay' => '支払う',
    'preview' => 'プレビュー',
    'reset' => 'リセット',
    'signup' => '登録',
    'save' => '保存',
    'search' => '検索',
    'submit' => '提出'
  ),
  'placeholder' => array(
    'input' => '記入してください',
    'select' => '選んでください',
    'optional' => 'オプション',
    'notCaseSensitive' => '大文字と小文字を区別しない',
    'emailConfirm' => 'もう一度メールを入力してください',
    'pwdConfirm' => 'もう一度パスワードを入力してください',
    'pwdMin' => '6文字以上',
  ),
  'validation' => array(
    'emailEquals' => 'メールアドレスが2回入力されています',
    'pwdEquals' => 'パスワードが2回入力されています',
    'sex' => '性別を選択してください'
  ),

  // 账户
  'passport' => array(
    'email' => 'E-mail',
    'confirmEmail' => 'E-mail 確認',

    'password' => 'パスワード',
    'setPassword' => 'パスワード',
    'newPassword' => '新しいパスワード',
    'confirmPassword' => 'パスワード確認',
    'forgot' => 'パスワードを忘れた',
    'server' => 'サーバー',

    'captcha' => '確認コード',
    'inviteCode' => 'Invite Code',

    'name' => 'お名前',
    'sex' => '性別',
    'male' => '男',
    'female' => '女',
    'location' => '地域',

    'goodsName' => '商品名',
    'orderId' => '注文番号',
    'payMoney' => 'お支払い金額',
    'payType' => 'お支払い方法',

    'optionalTip' => 'オプションのコンテンツ',
  ),

  // 魔物面板相关
  // JavaScript File
  'panelMonster' => array(
    'attr' => 'パラメーター',
    'card' => 'カード',
    'item' => 'ドロップ',
    'map' => 'マップ',
    'skill' => 'スキル',
    'transformSkill' => '変身スクロールスキル',
    'plagiarismSkill' => 'クローンスキル',
  ),

  // 道具面板相关
  // JavaScript File
  'panelItem' => array(
    'refineCost' => '安全精錬コスト',
    'refineMaterialPrice' => '材料価格',
    'refineEquipPrice' => '装備価格',
    'refineUpdatePrice' => '報告価格',
    'refineCalcPrice' => 'コスト計算',
    'upgradeBuff' => '装備グレードアップ',
  ),

  // 无限塔
  'endlessTower' => array(
    'floor' => '',
    'floorName' => '階',
    'line' => '',
    'lineName' => '線'
  ),

  // 交易所
  'exchange' => array(
    'reportPrice' => '報告価格',

    // JavaScript File
    'tipCurServer' => '現在のサーバー：',
    'tipNotData' => '未報告のアイテム',
    'tipUpdateItem' => '価格のアップデート：',
    'tipUpdateBatch' => '上記を更新してよろしいですか？'
  ),
);
?>