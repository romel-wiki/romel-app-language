/**
 * XO答题
 * http://romel.wiki/tool/xo
**/
switch (GLOBAL.userData.groupArea) {
  // 简体中文
  case 0:
    GLOBAL.language.theName = {
      searchPlaceholder: '快速查找（支持拼音）'
    };
    break;

  // 繁體中文
  case 2:
    GLOBAL.language.theName = {
      searchPlaceholder: '快速查找（支持拼音）'
    };
    break;

  // Japanese
  case 6:
    GLOBAL.language.theName = {
      searchPlaceholder: '検索'
    };
    break;

  // English
  default:
    GLOBAL.language.theName = {
      searchPlaceholder: 'Search'
    };
    break;
};
