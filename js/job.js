/**
 * 职业资料
 * http://romel.wiki/job/
 * http://romel.wiki/job/baseExp
 * http://romel.wiki/job/jobExp
 * http://romel.wiki/job/rune
 * http://romel.wiki/job/gem
**/
switch (GLOBAL.userData.groupArea) {
  // 简体中文
  case 0:
    GLOBAL.language.theName = {
      jobT1: '一转等级',
      jobT2: '二转等级',
      jobA2: '进阶二转等级',
      jobPeak: '巅峰等级',
      jobT3: '三转等级',
      tipChooseJob: '请选择职业',

      aboutMore: '<a data-app="1"  class="button green radius" href="vote.html">职业优势</a><a data-app="1"  class="button green radius" href="' + GLOBAL.url.view + '/tool/skill.html">技能模拟器</a>',

      runeNote: '<p>神碑模拟器推荐：<a class="link blue" href="https://romelde.github.io/RuneBFS/" target="_blank">*β*ROMEL Rune BFS</a></p><p style="color:#aaa;">※ 模拟器使用 PC 打开效果较好。</p>',

      gemAtk: '攻击属性符文',
      gemDef: '防御属性符文',
      gemBuff: '增益属性符文'
    };
    break;

  // 繁體中文
  case 2:
    GLOBAL.language.theName = {
      jobT1: '一轉等級',
      jobT2: '二轉等級',
      jobA2: '進階二轉等級',
      jobPeak: '巔峰等級',
      jobT3: '三轉等級',
      tipChooseJob: '請選擇職業',

      aboutMore: '<a data-app="1"  class="button green radius" href="' + GLOBAL.url.view + '/tool/skill.html">技能模擬器</a>',

      runeNote: '<p>神碑模擬器推薦：<a class="link blue" href="https://romelde.github.io/RuneBFS/" target="_blank">*β*ROMEL Rune BFS</a></p><p style="color:#aaa;">※ 模擬器使用 PC 打開效果較好。</p>',

      'gemAtk': '攻擊屬性符文',
      'gemDef': '防禦屬性符文',
      'gemBuff': '增益屬性符文'
    };
    break;

  // Korean
  case 3:
    GLOBAL.language.theName = {
      jobT1: '1차 전직',
      jobT2: '2차 전직',
      jobA2: '3차 전직',
      jobPeak: '3차 초월',
      jobT3: '4차 전직',
      tipChooseJob: '직업을 선택해주세요',

      aboutMore: '<a data-app="1"  class="button green radius" href="' + GLOBAL.url.view + '/tool/skill.html">스킬 시뮬레이터</a>',

      runeNote: '<p>아스신의 비석 시뮬레이터：<a class="link blue" href="https://romelde.github.io/RuneBFS/" target="_blank">*β*ROMEL Rune BFS</a></p><p style="color:#aaa;">※ PC 브라우저를 이용해주세요.</p>',

      'gemAtk': '공격 스탯 룬',
      'gemDef': '방어 스탯 룬',
      'gemBuff': '특수 스탯 룬'
    };
    break;

  // Japanese
  case 6:
    GLOBAL.language.theName = {
      jobT1: '一次転職',
      jobT2: '二次職業',
      jobA2: '上級二次職業',
      jobPeak: 'ピークレベル',
      jobT3: '三次転職',
      tipChooseJob: '職業を選択してください',

      aboutMore: '<a class="button green radius" href="' + GLOBAL.url.view + '/tool/skill.html">スキルシミュレータ</a>',

      runeNote: '<p>シミュレータの推奨：<a class="link blue" href="https://romelde.github.io/RuneBFS/" target="_blank">*β*ROMEL Rune BFS</a></p><p style="color:#aaa;">※ PCのブラウザをご利用ください。</p>',

      'gemAtk': '攻击属性符文',
      'gemDef': '防御属性符文',
      'gemBuff': '增益属性符文'
    };
    break;

  // English
  default:
    GLOBAL.language.theName = {
      jobT1: 'T1 Level',
      jobT2: 'T2 Level',
      jobA2: 'Advancement T2 Level',
      jobPeak: 'Peak Level',
      jobT3: 'T3 Level',
      tipChooseJob: 'Choose Job',

      aboutMore: '<a data-app="1"  class="button green radius" href="' + GLOBAL.url.view + '/tool/skill.html">Skill Simulator</a>',

      runeNote: '<p>Aeisr monument simulator recommendation: <a class="link blue" href="https://romelde.github.io/RuneBFS/" target="_blank">*β*ROMEL Rune BFS</a></p><p style="color:#aaa;">※ It is recommended to use PC to open</p>',

      'gemAtk': '攻击属性符文',
      'gemDef': '防御属性符文',
      'gemBuff': '增益属性符文'
    };
    break;
};
