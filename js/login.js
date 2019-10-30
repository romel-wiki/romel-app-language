/**
 * 登录、注册
 * http://romel.wiki/passport/login
**/
switch (GLOBAL.userData.groupArea) {
  // 简体中文
  case 0:
    GLOBAL.language.theName = {
      getInviteCode: '获取邀请码',
      emailPlaceholder: '您正在使用的电子邮箱',
      namePlaceholder: '建议填写游戏中昵称（可更改）',
      regTip: '<p>※ 注册只需付款一次，请勿重复支付，如有问题，请联系客服。</p><p>※ E-mail 将用于登录及<strong>重置密码</strong>，请用可以正常使用的电子邮箱。</p>',

      getLoading: '获取中，请稍等',
      validError: '发生错误：',
      validFailure: '订单验证失败',
      contact: '联系客服',
      continuePay: '继续支付',
      retry: '重新尝试',
      repeatTip: '检测到您可能已付款，如已支付，请勿重复付款。',
      recoverTip: '发现上次未完成的购买记录<br>若未能恢复，请稍后再尝试',
      recoverOk: '尝试恢复',
    };
    break;

  // 繁體中文
  case 2:
    GLOBAL.language.theName = {
      getInviteCode: '獲取邀請碼',
      emailPlaceholder: '您正在使用的電子郵箱',
      namePlaceholder: '建議填寫遊戲中的暱稱（可更改）',
      regTip: '<p>※ 註冊只需付款一次，請勿重複支付，如有問題，請聯繫客服。</p><p>※ E-mail 將用於登入及<strong>重置密碼</strong>，請用可以正常使用的電子郵箱。</p>',

      getLoading: '獲取中，請稍等',
      validError: '發送錯誤：',
      validFailure: '訂單驗證失敗',
      contact: '聯繫客服',
      continuePay: '繼續支付',
      retry: '重新嘗試',
      repeatTip: '檢測到您可能已付款，如已支付，請勿重複付款。',
      recoverTip: '發現上次未完成的購買記錄<br>若未能恢復，請稍後嘗試',
      recoverOk: '嘗試恢復',
    };
    break;

  // Korean
  case 3:
    GLOBAL.language.theName = {
      getInviteCode: '초대 코드 얻기',
      emailPlaceholder: '사용할 E-mail 주소 입력',
      namePlaceholder: '게임 내에서의 이름 (변경 가능)',
      regTip: '<p>※ 가입시 단 한 번의 결제만 필요하므로, 이미 결제했다면 중복 결제하지 마세요. 문제가 있을 경우 운영자에게 연락해주세요.</p><p>※ 로그인이나 <strong>비밀번호 재설정</strong>시 E-mail 을 사용하므로 평소에 자주 쓰는 주소를 입력해주세요.</p>',

      getLoading: '잠시만 기다려주세요',
      validError: '오류：',
      validFailure: '주문을 확인할 수 없습니다',
      contact: '운영자에게 연락',
      continuePay: '결제 계속 진행',
      retry: '다시 시도',
      repeatTip: '이미 결제한 고객일 가능성이 있습니다. 이미 결제를 마쳤다면 다시 결제하지 말아주세요.',
      recoverTip: '지난 결제 기록 복구<br>복구되지 않을 경우, 나중에 다시 시도해주세요',
      recoverOk: '복구하기',
    };
    break;

  // Japanese
  case 6:
    GLOBAL.language.theName = {
      getInviteCode: '入手',
      emailPlaceholder: 'あなたのEメール',
      namePlaceholder: 'ゲーム内の名前',
      regTip: '※ ログインやパスワードの再設定にはEメールが使用されますので、通常使用できるEメールアドレスを使用してください。',

      getLoading: '待ってください',
      validError: 'エラーが発生しました：',
      validFailure: '注文の確認に失敗しました',
      contact: 'カスタマーサービスに連絡する',
      continuePay: '支払いを続ける',
      retry: '再試行',
      repeatTip: 'あなたはあなたが支払いをした可能性があることを発見しました、そしてあなたがすでに支払いをしたならば、支払いを繰り返さないでください。',
      recoverTip: '最後の未完成の購入記録を見つける<br>回復できない場合は、後でもう一度やり直してください',
      recoverOk: '回復しよう',
    };
    break;

  // English
  default:
    GLOBAL.language.theName = {
      getInviteCode: 'Get Code',
      emailPlaceholder: 'Your email',
      namePlaceholder: 'Your name in the game',
      regTip: '<p>※ Registered members only need to pay once, do not repeat payment, if there is any problem, please contact customer service.</p><p>※ E-mail will be used to log in and reset password, please make sure your email is working properly.</p>',

      getLoading: 'Please wait',
      validError: 'Error: ',
      validFailure: 'Order verification failed',
      contact: 'Contact us',
      continuePay: 'Continue to pay',
      retry: 'Try again',
      repeatTip: 'You have detected that you may have paid, and if you have already paid, do not repeat the payment.',
      recoverTip: 'Discover the last uncompleted purchase record<br>If you can\'t recover, please try again later',
      recoverOk: 'Try to recover',
    };
    break;
};

GLOBAL.language.theName.version = 'v'+GLOBAL.version;
