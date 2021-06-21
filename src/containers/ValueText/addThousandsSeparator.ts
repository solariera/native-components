/**
 * addThousandsSeparator
 * 3桁区切りカンマに変換した数字(string型)を返す(e.g. 9,999,999)。
 * 引数はstringかnumberのどちらか(自動判定)が有効。
 * @param {string | number} value 変換する数字
 * @returns {string} 3桁区切りに変換された数字
 */
const addThousandsSeparator = (value: string | number): string => {
  // もしvalueが数値(number)のまま与えられたらstringに置き換える
  value = typeof value === 'number' ? value.toString() : value;

  // 数字を3桁区切りにして返す
  return value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
};

export { addThousandsSeparator };
