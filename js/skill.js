/**
 * 技能模拟器
 * http://romel.wiki/tool/skill
**/
switch (GLOBAL.userData.language) {
  // 简体中文
  case 'cn':
    GLOBAL.language.theName = {
      highTip: '高级职业中已学习技能',
      preTip: '有技能与该技能关联',
      superTip: '巅峰技能在用完进阶二转技能点后才可提升'
    };
    break;

  // 繁體中文
  case 'tw':
    GLOBAL.language.theName = {
      highTip: '高級職業中已學習技能',
      preTip: '有技能與該技能關聯',
      superTip: '巔峰技能在用完進階二轉技能點后才可提升'
    };
    break;

  // Korean
  case 'ko':
    GLOBAL.language.theName = {
      highTip: '高級職業中已學習技能',
      preTip: '조작 무효. 이 스킬과 관련된 스킬을 확인해주세요.',
      superTip: '스킬 초월은 초월 이전까지의 스킬 포인트를 전부 사용해야만 가능합니다.'
    };
    break;

  // Japanese
  case 'ja':
    GLOBAL.language.theName = {
      highTip: '高度なスキルを学びました',
      preTip: '操作無効。関連するスキルを確認してください。',
      superTip: '現在のスキルポイントを実際に投入した後でピークスキルポイントを使用することができます。'
    };
    break;

  // Thai
  case 'th':
    GLOBAL.language.theName = {
      highTip: 'Advance job already studied.',
      preTip: 'Invalid operation, please check the related skill.',
      superTip: 'You must actually use your current skill points before you can use peak skill points.'
    };
    break;

  // English
  default:
    GLOBAL.language.theName = {
      highTip: 'Advance job already studied.',
      preTip: 'Invalid operation, please check the related skill.',
      superTip: 'You must actually use your current skill points before you can use peak skill points.'
    };
    break;
};
