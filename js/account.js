/**
 * 个人中心
 * http://romel.wiki/account/
**/
switch (GLOBAL.userData.language) {
  // 简体中文
  case 'cn':
    GLOBAL.language.theName = {
      appStoreAlias: 'cn',
      navAbout: '会员功能介绍',
      navApp: '客户端下载',
      navAvatar: '更换头像',
      navProfile: '修改资料',
      navArticle: '我的文章',
      navRating: '去 App Store 评分',
      navServer: '更换语言',
      welcome: '<p>欢迎加入守爱百科~</p>'
    };
    break;

  // 繁體中文
  case 'tw':
    GLOBAL.language.theName = {
      appStoreAlias: 'tw',
      navAbout: '會員功能介紹',
      navApp: '客戶端下載',
      navAvatar: '更換頭像',
      navProfile: '修改資料',
      navArticle: '我的文章',
      navRating: '给软件评分',
      navServer: '更換語言',
      welcome: '<p>歡迎加入守愛百科~</p>'
    };
    break;

  // Korean
  case 'ko':
    GLOBAL.language.theName = {
      appStoreAlias: 'kr',
      navAbout: '회원 기능 소개',
      navApp: '앱 다운로드',
      navAvatar: '프로필 사진 변경',
      navProfile: '프로필 변경',
      navArticle: '내 글',
      navRating: 'Appstore 의 평가 및 리뷰',
      navServer: '언어 변경',
      welcome: '<p>수호백과에 오신 걸 환영합니다~</p>'
    };
    break;

  // Japanese
  case 'ja':
    GLOBAL.language.theName = {
      appStoreAlias: 'jp',
      navAbout: '会員機能紹介',
      navApp: ' 版をダウンロード',
      navAvatar: '画像を更新',
      navProfile: '資料変更',
      navArticle: '私の記事',
      navRating: 'Appstore 評価とレビュー',
      navServer: '言語を変更',
      welcome: '<p>Romel Wiki へようこそ</p>'
    };
    break;

  // Thai
  case 'th':
    GLOBAL.language.theName = {
      appStoreAlias: 'us',
      navAbout: 'About Member',
      navApp: 'Download',
      navAvatar: 'Change Avatar',
      navProfile: 'Change Profile',
      navArticle: 'My Articles',
      navRating: 'Ratings and Reviews in Appstore',
      navServer: 'Change Language',
      welcome: '<p>Welcome to Romel Wiki.</p>'
    };
    break;

  // English
  default:
    GLOBAL.language.theName = {
      appStoreAlias: 'us',
      navAbout: 'About Member',
      navApp: 'Download',
      navAvatar: 'Change Avatar',
      navProfile: 'Change Profile',
      navArticle: 'My Articles',
      navRating: 'Ratings and Reviews in Appstore',
      navServer: 'Change Language',
      welcome: '<p>Welcome to Romel Wiki.</p>'
    };
    break;
};

GLOBAL.language.theName.welcome += '<p>v'+GLOBAL.version+'</p>';
