/**
 * alignDigit
 * 数値・文字列の桁揃えを行う
 * @param {string | number} value 変換する数字
 * @param {number} digit 揃える桁数
 * @param {string} [replacer] 置き換える文字列(デフォルト=0)
 * @param {boolean} [backward] 後方補完オプション(デフォルト=無効:前方補完)
 * @returns {string} 桁揃えされた文字列
 */
export const alignDigit = (value: number | string, digit: number, replacer = '0', backward = false): string => {
  // 数字を3桁区切りにして返す
  return backward
    ? (value + Array(digit).join(replacer)).slice(digit)
    : (Array(digit).join(replacer) + value).slice(-digit);
};
