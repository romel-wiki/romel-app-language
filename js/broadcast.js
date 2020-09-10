/**
 * 广播
**/
switch (GLOBAL.userData.language) {
  // 简体中文
  case 'cn':
    GLOBAL.language.theName = {
      infoPlaceholder: '广播内容，最多 100 个字符',
      period: '时间段',
      gotolink: '链接地址',
      note: '<p>1. 订单提交后，内容不可修改；</p><p>2. 只可以发布与仙境传说相关的内容，发布无关内容，一律屏蔽；</p><p>3. 下单后请尽快支付，<strong>超过 5 分钟未支付，订单将失效。</strong></p>',
      orderList: '订单记录',
      orderStatusUnpay: '待支付',

      validTimeTip: '请选择时间',

      getLoading: '获取中，请稍等',
      validError: '发生错误：',
      validFailure: '订单验证失败',
      retry: '重新尝试',
      unPayTip: '有未支付的订单',
      continuePay: '继续支付',
      retryTip: '未能完成支付，请重试',
      finishTip: '已完成，请查看订单记录',
      backHome: '返回首页',
    };
    break;

  // 繁體中文
  case 'tw':
    GLOBAL.language.theName = {
      infoPlaceholder: '廣播內容，最多 100 個字符',
      period: '時間段',
      gotolink: '鏈接地址',
      note: '<p>1. 訂單提交后，內容不可修改；</p><p>2. 只可以發佈與仙境傳說相關的內容，發佈無關內容，一律屏蔽；</p><p>3. 下單后清盡快支付，<strong>超過 5 分鐘未支付，訂單將失效。</strong></p>',
      orderList: '訂單記錄',
      orderStatusUnpay: '未支付',

      validTimeTip: '請選擇時間',

      getLoading: '獲取中，請稍等',
      validError: '發送錯誤：',
      validFailure: '訂單驗證失敗',
      recoverOk: '嘗試恢復',
      unPayTip: '有未支付的訂單',
      continuePay: '繼續支付',
      retryTip: '未能完成支付，請重試',
      finishTip: '已完成，請查看訂單記錄',
      backHome: '返回首頁',
    };
    break;

  // Japanese
  case 'ja':
    GLOBAL.language.theName = {
      infoPlaceholder: 'コンテンツ、最大100文字',
      period: '時間',
      gotolink: 'リンク',
      note: '<p>1.注文が送信された後、コンテンツを変更することはできません。</p><p>2.ラグナロク関連のコンテンツのみを公開し、関連性のないコンテンツを公開してブロックする。</p><p>3.<strong>ご注文後できるだけ早くお支払いください5分以内にお支払いいただけない場合、ご注文は無効となります。</strong></p>',
      orderList: '注文記録',
      orderStatusUnpay: '未払い',

      validTimeTip: '時間を選択してください',

      getLoading: '待ってください',
      validError: 'エラーが発生しました：',
      validFailure: '注文の確認に失敗しました',
      recoverOk: '回復しよう',
      unPayTip: '未払いの注文がある',
      continuePay: '支払いを続ける',
      retryTip: '支払いを完了できませんでした。もう一度お試しください',
      finishTip: '完了しました、注文記録を確認してください',
      backHome: 'ホーム',
    };
    break;

  // Thai
  case 'th':
    GLOBAL.language.theName = {
      infoPlaceholder: 'Content, up to 100 characters',
      period: 'Time',
      gotolink: 'Link',
      note: '<p>1. After the order is submitted, the content cannot be modified;</p><p>2. Only publish content related to Ragnarok, publish irrelevant content, and block it;</p><p>3. Please pay as soon as possible after placing the order. <strong>If it is not paid within 5 minutes, the order will be invalid.</strong></p>',
      orderList: 'Order',
      orderStatusUnpay: 'unpaid',

      validTimeTip: 'Please select time',

      getLoading: 'Please wait',
      validError: 'Error: ',
      validFailure: 'Order verification failed',
      recoverOk: 'Try to recover',
      unPayTip: 'Have unpaid orders',
      continuePay: 'Pay',
      retryTip: 'Failed to complete payment, please try again',
      finishTip: 'Completed, please check the order record',
      backHome: 'Home',
    };
    break;

  // English
  default:
    GLOBAL.language.theName = {
      infoPlaceholder: 'Content, up to 100 characters',
      period: 'Time',
      gotolink: 'Link',
      note: '<p>1. After the order is submitted, the content cannot be modified;</p><p>2. Only publish content related to Ragnarok, publish irrelevant content, and block it;</p><p>3. Please pay as soon as possible after placing the order. <strong>If it is not paid within 5 minutes, the order will be invalid.</strong></p>',
      orderList: 'Order',
      orderStatusUnpay: 'unpaid',

      validTimeTip: 'Please select time',

      getLoading: 'Please wait',
      validError: 'Error: ',
      validFailure: 'Order verification failed',
      recoverOk: 'Try to recover',
      unPayTip: 'Have unpaid orders',
      continuePay: 'Pay',
      retryTip: 'Failed to complete payment, please try again',
      finishTip: 'Completed, please check the order record',
      backHome: 'Home',
    };
    break;
};
