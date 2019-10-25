/**
 * 迷藏森林导航
 * http://romel.wiki/tool/prtMaze
**/
switch (GLOBAL.userData.groupArea) {
  // 简体中文
  case 0:
    GLOBAL.language.theName = {
      note: '说明：先选择起点，再选择终点。',
      mapArea: '区域',
      monsterArea: '魔物分布',
      argiope: '艾吉欧蜈蚣',
      chonchon: '苍蝇',
      creamy: '克瑞米',
      fabre: '绿棉虫',
      lunatic: '疯兔',
      mandragora: '曼陀罗魔花',
      rocker: '蝗虫',
      poring: '波利',
      wolf: '狼',
      wilow: '树精',
      yoyo: '溜溜猴',
      bee: '蜂兵'
    };
    break;

  // 繁體中文
  case 2:
    GLOBAL.language.theName = {
      note: '說明：先選擇起點，再選擇終點。',
      mapArea: '區域',
      monsterArea: '魔物分佈',
      argiope: '艾吉歐蜈蚣',
      chonchon: '蒼蠅',
      creamy: '克瑞米',
      fabre: '綠棉蟲',
      lunatic: '瘋兔',
      mandragora: '曼陀羅魔花',
      rocker: '蝗蟲',
      poring: '波利',
      wolf: '狼',
      wilow: '樹精',
      yoyo: '溜溜猴',
      bee: '蜂兵'
    };
    break;

  // Japanese
  case 6:
    GLOBAL.language.theName = {
      note: '説明：最初に始点を、次に終点を選択します。',
      mapArea: 'エリア',
      monsterArea: 'モンスター',
      argiope: 'アルギオペ',
      chonchon: 'チョンチョン',
      creamy: 'クリーミー',
      fabre: 'ファブル',
      lunatic: 'ルナティック',
      mandragora: 'マンドラゴラ',
      rocker: 'ロッカー',
      poring: 'ポリン',
      wolf: 'ウルフ',
      wilow: 'ウィロー',
      yoyo: 'ヨーヨー',
      bee: 'ホーネット'
    };
    break;

  // English
  default:
    GLOBAL.language.theName = {
      note: 'Description: First select the starting point and then the ending point.',
      mapArea: 'Area',
      monsterArea: 'Monster',
      argiope: 'Argiope',
      chonchon: 'Chon Chon',
      creamy: 'Creamy',
      fabre: 'Fabre',
      lunatic: 'Lunatic',
      mandragora: 'Mandragora',
      rocker: 'Rocker',
      poring: 'Poring',
      wolf: 'Wolf',
      wilow: 'Willow',
      yoyo: 'Yoyo',
      bee: 'Hornet'
    };
    break;
};
