/**
 * 计时器
 * http://romel.wiki/tool/timer
**/
switch (GLOBAL.userData.groupArea) {
  // 简体中文
  case 0:
    GLOBAL.language.theName = {
      skip: '筛选',
      merge: 'MVP / MINI 合并显示',
      order: '时间排序',
      remindAudio: '声音提示',
      remindVibrate: '震动提示',
      remindNotify: '通知提示',
      remindTime: '提醒时间',
      timeUnit: '秒前',
      note: '<p>【通知提示】说明：</p><p>※ 需要系统允许通知权限。</p>',
      tipUnableNotify: '未能获取到通知权限，无法开启',
      tipNotTime: '缺少时间',
      tipErrorTime: '时间值错误'
    };
    break;

  // 繁體中文
  case 2:
    GLOBAL.language.theName = {
      skip: '篩選',
      merge: 'MVP / MINI 合併顯示',
      order: '時間排序',
      remindAudio: '聲音提示',
      remindVibrate: '震動提示',
      remindNotify: '通知提示',
      remindTime: '提醒時間',
      timeUnit: '秒前',
      note: '<p>【通知提示】說明：</p><p>1. 需要系統允許通知權限。</p>',
      tipUnableNotify: '未能獲取到通知權限，無法開啟',
      tipNotTime: '缺少時間',
      tipErrorTime: '時間值錯誤'
    };
    break;

  // Japanese
  case 6:
    GLOBAL.language.theName = {
      skip: 'フィルター',
      merge: 'MVP / MINI 合併',
      order: '時間ソート',
      remindAudio: '音声プロンプト',
      remindVibrate: '振動プロンプト',
      remindNotify: '通知プロンプト',
      remindTime: 'カウントダウン',
      timeUnit: '秒前',
      note: '<p>【通知プロンプト】説明：</p><p>1. ブラウザの許可が必要；</p><p>2. httpsをサポートする必要があるかもしれません；</p><p>3. ページが閉じられても通知されません。</p>',
      tipUnableNotify: '通知許可を取得できませんでした、開くことができません',
      tipNotTime: '時間がない',
      tipErrorTime: '誤った時間値'
    };
    break;

  // English
  default:
    GLOBAL.language.theName = {
      skip: 'Filter',
      merge: 'MVP / MINI Merge',
      order: 'Last Time Order',
      remindAudio: 'Audio Remind',
      remindVibrate: 'Vibrate Remind',
      remindNotify: 'Notify Remind',
      remindTime: 'Notify at',
      timeUnit: 'Second',
      note: '<p>[Notify Remind] Note: </p><p>※ Need system to allow notification permission.</p>',
      tipUnableNotify: 'Failed to get notification permission.',
      tipNotTime: 'Lack Time',
      tipErrorTime: 'Time Error'
    };
    break;
};
