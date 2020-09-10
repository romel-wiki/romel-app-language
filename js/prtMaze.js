/**
 * 迷藏森林导航
 * http://romel.wiki/tool/prtMaze
**/
switch (GLOBAL.userData.language) {
  // 简体中文
  case 'cn':
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
  case 'tw':
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

  // Korean
  case 'ko':
    GLOBAL.language.theName = {
      note: '사용법：시작 지점을 클릭한 뒤, 목적 지점을 클릭하세요.',
      mapArea: '구역',
      monsterArea: '몬스터 분포',
      argiope: '아르지오프',
      chonchon: '촌촌',
      creamy: '크리미',
      fabre: '파브르',
      lunatic: '루나틱',
      mandragora: '만드라고라',
      rocker: '로커',
      poring: '포링',
      wolf: '울프',
      wilow: '윌로우',
      yoyo: '요요',
      bee: '호넷'
    };
    break;

  // Japanese
  case 'ja':
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

  // Thai
  case 'th':
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
