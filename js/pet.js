/**
 * 宠物资料
 * http://romel.wiki/pet/
 * http://romel.wiki/pet/adventure
 * http://romel.wiki/pet/work
**/
switch (GLOBAL.userData.groupArea) {
  // 简体中文
  case 0:
    GLOBAL.language.theName = {
      catchItem: '捕捉道具',
      compose: '融合素材',
      minLevel: '最低等级',
      unit: '只',

      adventureArea: '冒险区域',
      adventureBox: '宝箱条件',
      adventureDispatch: '最多派遣',

      workFrequency: '工作效率',
      workMaxReward: '最多奖励',
      workUnlock: '解锁条件',
      workLimit: '不可参与',
    };
    break;

  // 繁體中文
  case 2:
    GLOBAL.language.theName = {
      catchItem: '捕捉道具',
      compose: '融合素材',
      minLevel: '最低等級',
      unit: '隻',

      adventureArea: '冒險區域',
      adventureBox: '寶箱條件',
      adventureDispatch: '最多派遣',

      workFrequency: '工作效率',
      workMaxReward: '最多獎勵',
      workUnlock: '解鎖條件',
      workLimit: '不可參與',
    };
    break;

  // Korean
  case 3:
    GLOBAL.language.theName = {
      catchItem: '포획 아이템',
      compose: '펫 융합',
      minLevel: '요구레벨',
      unit: '마리',

      adventureArea: '모험구역',
      adventureBox: '상자조건',
      adventureDispatch: '최대파견',

      workFrequency: '작업효율',
      workMaxReward: '최대보상',
      workUnlock: '해제조건',
      workLimit: '작업불가',
    };
    break;

  // Japanese
  case 6:
    GLOBAL.language.theName = {
      catchItem: '捕獲道具',
      compose: 'ペット融合',
      minLevel: '必要 Lv',
      unit: '体',

      adventureArea: '冒険したエリア',
      adventureBox: '宝箱条件',
      adventureDispatch: '最大派遣',

      workFrequency: '作業効率',
      workMaxReward: '最大獲得',
      workUnlock: '条件',
      workLimit: '参加不可',
    };
    break;

  // English
  default:
    GLOBAL.language.theName = {
      catchItem: 'Captured Items',
      compose: 'Compose',
      minLevel: 'Min Level',
      unit: '',

      adventureArea: 'Adventure Area',
      adventureBox: 'Box',
      adventureDispatch: 'Dispatch',

      workFrequency: 'Frequency',
      workMaxReward: 'Max Box',
      workUnlock: 'Unlock',
      workLimit: 'Limit',
    };
    break;
};
