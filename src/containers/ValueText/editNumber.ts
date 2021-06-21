import { addThousandsSeparator } from './addThousandsSeparator';

/**
 * arrangeNumber
 * 数値を引数にして、表示用の数字(string型)を返す。
 * valueの値がlimitValueを超える場合は、上限表示をさせる(e.g. 9999+)。
 * commmaがtrueの場合は、3桁カンマ区切りに変換する(e.g. 9,999)。
 * @param {number} value 表示形式に変換する数値
 * @param {number} limit 上限表示させるしきい値
 * @param {boolean} comma 3桁カンマ区切り有効フラグ(trueで有効 デフォルト: false)
 * @param {string} mark 上限表示させるときのマーク(デフォルト: +)
 * @returns {string} 表示形式に変換された数字
 */
const editNumber = (value: number, limit: number | undefined, comma = false, mark = '+'): string => {
  // limitが存在しない場合は、valueの値を与える(上限越え表示させない)。
  // 指定がない場合は、そのまま表示させる。そのためにlimitにvalueを入れる。
  limit = limit === undefined ? (limit = value) : limit;

  /**
   * valueを文字列に変換する。
   * valueがlimitValueを超えた場合は、末尾にmark(デフォルト+)を付ける。
   */
  const valueString: string = value > limit ? limit + mark : value.toString();

  // カンマオプションがあった場合は、数字部に3桁区切りを加える。
  return comma ? addThousandsSeparator(valueString) : valueString;
};

export { editNumber };
