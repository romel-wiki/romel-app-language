/**
 * 头饰
 * http://romel.wiki/item/hat
**/
switch (GLOBAL.userData.groupArea) {
  // 简体中文
  case 0:
    GLOBAL.language.theName = {
      note: '<p>如需查找【加伤】可以搜索：加伤、增伤、对</p><p>如需查找【减伤】可以搜索：减伤、减免、受到</p>'
    };
    break;

  // 繁體中文
  case 2:
    GLOBAL.language.theName = {
      note: '<p>如需查找【加傷】可以搜索：加傷、增傷、對</p><p>如需查找【減傷】可以搜索：減傷、減免、受到</p>'
    };
    break;

  // English
  default:
    GLOBAL.language.theName = {
      note: ''
    };
    break;
};
