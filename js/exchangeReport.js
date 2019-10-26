/**
 * 交易所批量更新
 * http://romel.wiki/exchange/report
**/
switch (GLOBAL.userData.groupArea) {
  // 简体中文
  case 0:
    GLOBAL.language.theName = {
      itemPurple: '紫色材料',
      itemBlue: '蓝色材料',
      cardBlue: '卡片扭蛋 - 蓝卡',
      cardGreen: '卡片扭蛋 - 绿卡',
      cardWhite: '卡片扭蛋 - 白卡',
      cardSpecial: '其他卡片',
      reportIntro: '<p>1. 从上方选择模板，使用说明：<a data-app="1" class="link red" href="' + GLOBAL.url.view + '/article/detail.html?id=78&backurl=' + GLOBAL.url.view + '/exchange/report.html">《交易所批量更新介绍》</a>；</p><p>2. 请填写要更新的道具的价格；不需要更新的，请留空。</p>',
      reportNote: '<p>※ 请确保上报资料准确，每条上报系统都会记录，一经发现持续发布虚假资料，有权撤销上报权限。</p>'
    };
    break;

  // 繁體中文
  case 2:
    GLOBAL.language.theName = {
      itemPurple: '紫色材料',
      itemBlue: '藍色材料',
      cardBlue: '卡片扭蛋 - 藍卡',
      cardGreen: '卡片扭蛋 - 綠卡',
      cardWhite: '卡片扭蛋 - 白卡',
      cardSpecial: '其他卡片',
      reportIntro: '<p>1. 從上方選擇模板，使用說明：<a data-app="1" class="link red" href="' + GLOBAL.url.view + '/article/detail.html?id=78&backurl=' + GLOBAL.url.view + '/exchange/report.html">《交易所批量更新介紹》</a>；</p><p>2. 請填寫要更新的道具的價格；不需要更新的，請留空。</p>',
      reportNote: '<p>※ 請確保回報資料準確，每條回報系統都會記錄，一經發現持續發佈虛假資料，有權撤銷回報權限。</p>'
    };
    break;
    
  // Korean
  case 3:
    GLOBAL.language.theName = {
      itemPurple: '보라색 재료 (보스)',
      itemBlue: '파란색 재료 (고급)',
      cardBlue: '파란색 카드',
      cardGreen: '녹색 카드',
      cardWhite: '하얀색 카드',
      cardSpecial: '기타 카드',
      reportIntro: '<p>1. 먼저 위에서 양식을 선택해주세요. 사용 방법：<a data-app="1" class="link red" href="' + GLOBAL.url.view + '/article/detail.html?id=78&backurl=' + GLOBAL.url.view + '/exchange/report.html">《거래소 일괄 갱신 소개》</a>；</p><p>2. 아이템의 단가를 입력해주세요；갱신하지 않을 아이템은 빈 칸으로 둡니다.</p>',
      reportNote: '<p>※ 제보 자료가 맞는지 다시 한 번 확인해주세요. 허위 제보시 제보 권한을 박탈할 수 있습니다.</p>'
    };
    break;

  // Japanese
  case 6:
    GLOBAL.language.theName = {
      itemPurple: '紫材料',
      itemBlue: '青材料',
      cardBlue: 'カードガチャ - 青カード',
      cardGreen: 'カードガチャ - 緑カード',
      cardWhite: 'カードガチャ - 白カード',
      cardSpecial: 'その他カード',
      reportIntro: '<p>1. 上のテンプレートをご選択ください；</a>；</p><p>2. 道具の単価を入力してください。更新したくないものを空白してください。</p>',
      reportNote: '<p>※ 提出した資料の真实性をご確認ください。噓の資料を見つければ、貴方の提出権限を禁止します。</p>'
    };
    break;

  // English
  default:
    GLOBAL.language.theName = {
      itemPurple: 'Violet Material',
      itemBlue: 'Blue Material',
      cardBlue: 'Card Capsule - Blue',
      cardGreen: 'Card Capsule - Green',
      cardWhite: 'Card Capsule - White',
      cardSpecial: 'Other Card',
      reportIntro: '<p>1. Choose template, <a data-app="1" class="link red" href="' + GLOBAL.url.view + '/article/detail.html?id=78&backurl=' + GLOBAL.url.view + '/exchange/report.html">how to use?</a>；</p><p>2. Fill in the price, you can leave it blank.</p>',
      reportNote: '<p>※ Please submit accurate information.</p>'
    };
    break;
};
