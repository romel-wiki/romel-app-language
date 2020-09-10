/**
 * 家具
 * http://romel.wiki/item/furniture
**/
switch (GLOBAL.userData.language) {
  // 简体中文
  case 'cn':
    GLOBAL.language.theName = {
      score: '分数'
    };
    break;

  // 繁體中文
  case 'tw':
    GLOBAL.language.theName = {
      score: '分數'
    };
    break;

  // Korean
  case 'ko':
    GLOBAL.language.theName = {
      score: '평점'
    };
    break;

  // Japanese
  case 'ja':
    GLOBAL.language.theName = {
      score: '得点'
    };
    break;

  // Thai
  case 'th':
    GLOBAL.language.theName = {
      score: 'Score'
    };
    break;

  // English
  default:
    GLOBAL.language.theName = {
      score: 'Score'
    };
    break;
};
