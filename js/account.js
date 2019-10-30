/**
 * 个人中心
 * http://romel.wiki/account/
**/
switch (GLOBAL.userData.groupArea) {
  // 简体中文
  case 0:
    GLOBAL.language.theName = {
      navAbout: '会员功能介绍',
      navApp: '客户端下载',
      navAvatar: '更换头像',
      navProfile: '修改资料',
      navArticle: '我的文章',
      navServer: '更换服务器',
      welcome: '<p>欢迎加入守爱百科~</p>'
    };
    break;

  // 繁體中文
  case 2:
    GLOBAL.language.theName = {
      navAbout: '會員功能介紹',
      navApp: '客戶端下載',
      navAvatar: '更換頭像',
      navProfile: '修改資料',
      navArticle: '我的文章',
      navServer: '更換伺服器',
      welcome: '<p>歡迎加入守愛百科~</p>'
    };
    break;

  // Korean
  case 3:
    GLOBAL.language.theName = {
      navAbout: '회원 기능 소개',
      navApp: '앱 다운로드',
      navAvatar: '프로필 사진 변경',
      navProfile: '프로필 변경',
      navArticle: '내 글',
      navServer: '서버 변경',
      welcome: '<p>수호백과에 오신 걸 환영합니다~</p>'
    };
    break;

  // Japanese
  case 6:
    GLOBAL.language.theName = {
      navAbout: '会員機能紹介',
      navApp: ' 版をダウンロード',
      navAvatar: '画像を更新',
      navProfile: '資料変更',
      navArticle: '私の記事',
      navServer: 'サーバーを変更',
      welcome: '<p>Romel Wiki へようこそ</p>'
    };
    break;

  // English
  default:
    GLOBAL.language.theName = {
      navAbout: 'About Member',
      navApp: 'Download',
      navAvatar: 'Change Avatar',
      navProfile: 'Change Profile',
      navArticle: 'My Articles',
      navServer: 'Change Server',
      welcome: '<p>Welcome to Romel Wiki.</p>'
    };
    break;
};
