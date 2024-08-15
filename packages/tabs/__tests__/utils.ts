import sampleSize from 'lodash/sampleSize';

/**
 * @description 获取任意长度的随机数字字母组合字符串
 * @param {*} len 随机字符串的长度
 */
export const randomString = (len = 10) => {
  const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return sampleSize(charSet, len).join('');
};
