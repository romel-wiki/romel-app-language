/**
 * 贪婪商店
 * http://romel.wiki/tool/greedyShop
**/
switch (GLOBAL.userData.groupArea) {
  // 简体中文
  case 0:
    GLOBAL.language.theName = {
      logAll: '全部记录',
      logMember: '只看会员',
      submitPosition: '提交位置',
      guestTip: '※ 仅支持「1线」的商人位置，不要误发。',
      note: '<p>贪婪商人每次最多存在 2 小时，灰色时间为失效记录；</p><p>若一个记录都没有，希望你能一起加入更新；</p><p><a data-app="1" class="link blue" href="' + GLOBAL.url.view + '/default/feedback.html?backurl=' + GLOBAL.url.view + '/tool/greedy-shop.html">如发现有人恶意发布，请举报 &raquo;</a></p>',
      confirmTip: '<p>确定更新贪婪商店的位置吗？</p><p><strong style="color:#4a89dc;">「{{server}} - {{line}} 线</strong>」</p><p><strong style="color:#da4453;">请不要跨服、跨线提交</strong></p>',
      removeTip: '<p>要删除这条记录吗？</p>'
    };
    break;

  // 繁體中文
  case 2:
    GLOBAL.language.theName = {
      logAll: '全部記錄',
      logMember: '只看會員',
      submitPosition: '提 交',
      guestTip: '※ 僅支持「1a線」的商人位置。',
      note: '<p>貪婪商人每次最多存在 2 小時，灰色時間為失效記錄；</p><p>若一個記錄都沒有，希望你能一起加入更新；</p><p><a data-app="1" class="link blue" href="' + GLOBAL.url.view + '/default/feedback.html?backurl=' + GLOBAL.url.view + '/tool/greedy-shop.html">如發現有人惡意發佈，請舉報 &raquo;</a></p>',
      confirmTip: '<p>確定更新貪婪商店的位置嗎？</p><p><strong style="color:#4a89dc;">「{{server}} - {{line}} 線</strong>」</p><p><strong style="color:#da4453;">清不要跨服、跨線提交</strong></p>',
      removeTip: '<p>要刪除這條記錄嗎？</p>'
    };
    break;
    
  // Korean
  case 3:
    GLOBAL.language.theName = {
      logAll: '모든 기록',
      logMember: '회원만',
      submitPosition: '제보하기',
      guestTip: '※ 1채널만 지원합니다.',
      note: '<p>탐욕상인은 출현 후 최대 2시간만 존재하며, 유효기간이 지난 제보는 회색으로 표시됩니다；</p><p>기록이 없다면 제보해주세요；</p><p><a data-app="1" class="link blue" href="' + GLOBAL.url.view + '/default/feedback.html?backurl=' + GLOBAL.url.view + '/tool/greedy-shop.html">악의적인 가짜 제보 발견시 신고해주세요. &raquo;</a></p>',
      confirmTip: '<p>탐욕상점 위치를 제보할까요？</p><p><strong style="color:#4a89dc;">「{{server}} - {{line}} 線</strong>」</p><p><strong style="color:#da4453;">등록할 서버를 다시 한 번 확인해주세요</strong></p>',
      removeTip: '<p>이 기록을 지울까요？</p>'
    };
    break;

  // Japanese
  case 6:
    GLOBAL.language.theName = {
      logAll: '全レコード',
      logMember: '会員のみ',
      submitPosition: '提出',
      guestTip: '※ チャンネル1aのみをサポート',
      note: '<p>有効期間は2時間です。</p><p>記録がない場合は、アップデートに一緒に参加できることを願っています。</p><p><a data-app="1" class="link blue" href="' + GLOBAL.url.view + '/default/feedback.html?backurl=' + GLOBAL.url.view + '/tool/greedy-shop.html">悪意のあるコンテンツを見つけた場合は、報告してください。</a></p>',
      confirmTip: '<p>店舗の場所は正しいですか？</p><p><strong style="color:#4a89dc;">「{{server}} - {{line}}</strong>」</p></p>',
      removeTip: '<p>このレコードを削除しますか？</p>'
    };
    break;

  // English
  default:
    GLOBAL.language.theName = {
      logAll: 'All records',
      logMember: 'Member',
      submitPosition: 'Submit',
      guestTip: '※ Only support: 1a',
      note: '<p>Gray time: more than 2 hours.</p><p>If there is no record, I hope you can join the update together.</p><p><a data-app="1" class="link blue" href="' + GLOBAL.url.view + '/default/feedback.html?backurl=' + GLOBAL.url.view + '/tool/greedy-shop.html">If you find malicious content, please report it.</a></p>',
      confirmTip: '<p>Are you sure update</p><p>greedy shop location?</p><p><strong style="color:#4a89dc;">「{{server}} - {{line}}」</strong></p><p><strong style="color:#da4453;">Do not submit across regions</strong></p>',
      removeTip: '<p>Delete this record?</p>'
    };

    // note for SEA
    if ([4,7].indexOf(GLOBAL.userData.dbArea) >= 0) {
      GLOBAL.language.theName.guestTip = '※ Support: EN-1 / TH-1 / PH-1 / ID-1 / CN-1 / VN-1';

    // note for NA
    } else if (GLOBAL.userData.dbArea === 5) {
      GLOBAL.language.theName.guestTip = '※ Support: NA-1 / BR-1 / LA-1 / OC-1 / IN-1';
    };
    break;
};
