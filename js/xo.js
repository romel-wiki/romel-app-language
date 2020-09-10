/**
 * XO答题
 * http://romel.wiki/tool/xo
**/
switch (GLOBAL.userData.language) {
  // 简体中文
  case 'cn':
    GLOBAL.language.theName = {
      searchPlaceholder: '快速查找（支持拼音）'
    };
    break;

  // 繁體中文
  case 'tw':
    GLOBAL.language.theName = {
      searchPlaceholder: '快速查找（支持拼音）'
    };
    break;

  // Korean
  case 'ko':
    GLOBAL.language.theName = {
      searchPlaceholder: '검색'
    };
    break;

  // Japanese
  case 'ja':
    GLOBAL.language.theName = {
      searchPlaceholder: '検索'
    };
    break;

  // Thai
  case 'th':
    GLOBAL.language.theName = {
      searchPlaceholder: 'Search'
    };
    break;

  // English
  default:
    GLOBAL.language.theName = {
      searchPlaceholder: 'Search'
    };
    break;
};
