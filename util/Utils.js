/**
 * 将数组拆分成以num为一组的二维数组
 * @param arr
 * @param num
 * @returns {[]}
 */
import {IMG_BASE_URL} from './ConstConfig';

export function sliceArrByNum(arr, num) {
    let result = [];
    if (!arr || !arr.length || num < 1) return [];
    for (let i = 0; i < arr.length; i += num) {
        result.push(arr.slice(i, i + num));
    }
    return result;
}


export function getPicUrl(url) {
    if (!url) {
        return '/static/images/logo.png';
    }
    return `${IMG_BASE_URL}${url}`;
}
