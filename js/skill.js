/**
 * 技能模拟器
 * http://romel.wiki/tool/skill
**/
switch (GLOBAL.userData.groupArea) {
  // 简体中文
  case 0:
    GLOBAL.language.theName = {
      series: '系',
      highTip: '高级职业中已学习技能',
      preTip: '有技能与该技能关联',
      superTip: '巅峰技能在用完进阶二转技能点后才可提升'
    };
    break;

  // 繁體中文
  case 2:
    GLOBAL.language.theName = {
      series: '系',
      highTip: '高級職業中已學習技能',
      preTip: '有技能與該技能關聯',
      superTip: '巔峰技能在用完進階二轉技能點后才可提升'
    };
    break;

  // Korean
  case 3:
    GLOBAL.language.theName = {
      series: '계',
      highTip: 'Advance job already studied.',
      preTip: '조작 무효. 이 스킬과 관련된 스킬을 확인해주세요.',
      superTip: '스킬 초월은 초월 이전까지의 스킬 포인트를 전부 사용해야만 가능합니다.'
    };
    break;

  // Japanese
  case 6:
    GLOBAL.language.theName = {
      series: ' シリーズ',
      highTip: '高度なスキルを学びました',
      preTip: '操作無効。関連するスキルを確認してください。',
      superTip: '現在のスキルポイントを実際に投入した後でピークスキルポイントを使用することができます。'
    };
    break;

  // English
  default:
    GLOBAL.language.theName = {
      series: ' Series',
      highTip: 'Advance job already studied.',
      preTip: 'Invalid operation, please check the related skill.',
      superTip: 'You must actually use your current skill points before you can use peak skill points.'
    };
    break;
};
