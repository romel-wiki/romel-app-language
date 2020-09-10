/**
 * 交易所
 * http://romel.wiki/exchange/
**/
switch (GLOBAL.userData.language) {
  // 简体中文
  case 'cn':
    GLOBAL.language.theName = {
      rule: '<p>已过滤道具：</p><ul><li>常规合成的卡片</li><li>通过 NPC 制作的装备</li></ul><p>详情查看<a data-app="1" href="' + GLOBAL.url.view + '/article/detail.html?id=33">《交易所功能使用说明》</a></p>',
      lastPrice: '最新价格',
      maxPrice: '近期最高价',
      minPrice: '近期最低价',
      reportPrice: '上报当前价格',
      reportNote: '<p>※ 请确保上报资料准确，每条上报系统都会记录，一经发现持续发布虚假资料，将关闭上报权限。</p>',
      batchReport: '使用批量上报工具'
    };
    break;

  // 繁體中文
  case 'tw':
    GLOBAL.language.theName = {
      rule: '<p>已過濾道具：</p><ul><li>常規合成的卡片</li><li>通過 NPC 製作的裝備</li></ul><p>詳情查看<a data-app="1" href="' + GLOBAL.url.view + '/article/detail.html?id=33">《交易所功能使用說明》</a></p>',
      lastPrice: '最新價格',
      maxPrice: '近期最高價',
      minPrice: '近期最低價',
      reportPrice: '回報當前價格',
      reportNote: '<p>※ 請確保回報資料準確，每條回報系統都會記錄，一經發現持續發佈虛假資料，將關閉回報權限。</p>',
      batchReport: '使用批量上報工具'
    };
    break;

  // Korean
  case 'ko':
    GLOBAL.language.theName = {
      rule: '<p>불포함 아이템：</p><ul><li>킹 포링 제작 카드</li><li>NPC 제작 장비</li></ul><p>상세 보기<a data-app="1" href="' + GLOBAL.url.view + '/article/detail.html?id=33">《거래소 기능 사용 설명서》</a></p>',
      lastPrice: '최신 가격',
      maxPrice: '최근 상한가',
      minPrice: '최근 하한가',
      reportPrice: '현재가 제보',
      reportNote: '<p>※ 제보 자료가 맞는지 다시 한 번 확인해주세요. 허위 제보시 제보 권한을 박탈할 수 있습니다.</p>',
      batchReport: '가격 일괄 제보'
    };
    break;

  // Japanese
  case 'ja':
    GLOBAL.language.theName = {
      rule: '<p>已过滤道具：</p><ul><li>合成したカード</li><li>NPC 製造の装備</li></ul>',
      lastPrice: '最新価格',
      maxPrice: '最近最高価格',
      minPrice: '最近最安価格',
      reportPrice: '現在の価格',
      reportNote: '<p>※ 提出した資料の真实性をご確認ください。噓の資料を見つければ、貴方の提出権限を禁止します。</p>',
      batchReport: '一括更新ツール'
    };
    break;

  // Thai
  case 'th':
    GLOBAL.language.theName = {
      rule: '<p>Filtered</p><ul><li>Producable Card</li><li>Producable Equip</li></ul>',
      lastPrice: 'Last Price',
      maxPrice: 'High Price',
      minPrice: 'Low Price',
      reportPrice: 'Report',
      reportNote: '<p>Please submit accurate information.</p>',
      batchReport: 'Batch report'
    };
    break;

  // English
  default:
    GLOBAL.language.theName = {
      rule: '<p>Filtered</p><ul><li>Producable Card</li><li>Producable Equip</li></ul>',
      lastPrice: 'Last Price',
      maxPrice: 'High Price',
      minPrice: 'Low Price',
      reportPrice: 'Report',
      reportNote: '<p>Please submit accurate information.</p>',
      batchReport: 'Batch report'
    };
    break;
};
