/**
 * 建议及反馈
 * http://romel.wiki/feedback
**/
switch (GLOBAL.userData.groupArea) {
  // 简体中文
  case 0:
    GLOBAL.language.theName = {
      miss: '资料错误或遗漏',
      suggest: '建议',
      report: '举报',
      infoPlaceholder: '- 详细、准确的描述有助于我们解决问题；\n- 如对某个页面提出问题，请写明是哪个页面。',
      note: '<p>如果此处无法描述您的问题，可以<a data-app="1" class="link blue" href="' + GLOBAL.url.view + '/article/detail.html?id=contact&backurl=' + GLOBAL.url.view + '/default/feedback.html">联系我们</a></p>'
    };
    break;

  // 繁體中文
  case 2:
    GLOBAL.language.theName = {
      miss: '資料錯誤或遺漏',
      suggest: '建議',
      report: '舉報',
      infoPlaceholder: '- 詳細、準確的描述有助於我們解決問題；\n- 如對某個頁面提出問題，請寫明是哪個頁面。',
      note: '如果此處無法描述您的問題，可以<a data-app="1" class="link blue" href="' + GLOBAL.url.view + '/article/detail.html?id=contact&backurl=' + GLOBAL.url.view + '/default/feedback.html">聯繫我們</a>'
    };
    break;
    
  // Korean
  case 3:
    GLOBAL.language.theName = {
      miss: '정보 오류 또는 누락',
      suggest: '건의',
      report: '제보',
      infoPlaceholder: '- 문제를 정확하고 상세하게 알려주시면 해결하는데 큰 도움이 됩니다；\n- 특정 페이지에 관한 질문이라면 어떤 페이지인지 알려주세요.',
      note: '그 밖의 질문은 <a data-app="1" class="link blue" href="' + GLOBAL.url.view + '/article/detail.html?id=contact&backurl=' + GLOBAL.url.view + '/default/feedback.html">여기로 보내주세요</a>'
    };
    break;

  // Japanese
  case 6:
    GLOBAL.language.theName = {
      miss: '誤った情報',
      suggest: '提案',
      report: '報告書',
      infoPlaceholder: '',
      note: '<p>その他の質問については、お問い合わせください：ro@zhaiwuyu.com</p>'
    };
    break;

  // English
  default:
    GLOBAL.language.theName = {
      miss: 'Wrong or missing data',
      suggest: 'Suggest',
      report: 'Report',
      infoPlaceholder: 'Description',
      note: '<p>If you have any other questions, please contact us at: ro@zhaiwuyu.com</p>'
    };
    break;
};
