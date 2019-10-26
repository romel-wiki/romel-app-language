/**
 * 家具
 * http://romel.wiki/item/furniture
**/
switch (GLOBAL.userData.groupArea) {
  // 简体中文
  case 0:
    GLOBAL.language.theName = {
      score: '分数'
    };
    break;

  // 繁體中文
  case 2:
    GLOBAL.language.theName = {
      score: '分數'
    };
    break;
    
  // Korean
  case 3:
    GLOBAL.language.theName = {
      score: '평점'
    };
    break;

  // Japanese
  case 6:
    GLOBAL.language.theName = {
      score: '得点'
    };
    break;

  // English
  default:
    GLOBAL.language.theName = {
      score: 'Score'
    };
    break;
};
