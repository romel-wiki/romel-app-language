/**
 * 素质点模拟器
 * http://ro.ciaoca.com/tool/attrPoint
**/
switch (GLOBAL.userData.groupArea) {
  // 简体中文
  case 0:
    GLOBAL.language.theName = {
      note: '<p>如需更详细的数据，请参考：<a class="link blue und" href="http://ro.xd.com/moniqi/" target="_blank">官方加点模拟器</a></p>'
    };
    break;

  // 繁體中文
  case 2:
    GLOBAL.language.theName = {
      note: '<p>如需更詳細的數據，請參考：<a class="link blue und" href="http://ro.xd.com/moniqi/" target="_blank">官方加點模擬器</a></p>'
    };
    break;

  // Japanese
  case 6:
    GLOBAL.language.theName = {
      note: '<p>もっと詳しくデータは「<a class="link blue und" href="http://ro.xd.com/moniqi/" target="_blank">公式ポイントシミュレータ</a>」をご参考ください。</p>'
    };
    break;

  // English
  default:
    GLOBAL.language.theName = {
      note: '<p>More detailed data, reference for <a class="link blue und" href="http://ro.xd.com/moniqi/" target="_blank">Official point simulator</a></p>'
    };
    break;
};
