import {IMG_BASE_URL} from './ConstConfig';
import {get} from 'lodash';

/**
 * 将数组拆分成以num为一组的二维数组
 * @param arr
 * @param num
 * @returns {[]}
 */
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


export const getGoodsCategory = obj => {
    if (!obj || !Object.keys(obj).length) return '';
    let text = '';
    const one = get(obj, 'name');
    const two = get(obj, 'parentNode.name');
    const three = get(obj, 'parentNode.parentNode.name');
    if (one) text = one;
    if (two) text = `${two}>${text}`;
    if (three) text = `${three}>${text}`;
    return text;
};

export const getSkuNum = (skus) => {
    if (!skus || !skus.length) {
        return {salePrice: 0, marketPrice: 0, saleVolume: 0, taxexAndDues: 0};
    }
    return {
        salePrice: Math.min(...skus.map(o => (o.salePrice * 1).toFixed(2))),//销售价
        marketPrice: Math.max(...skus.map(o => (o.marketPrice * 1).toFixed(2))),//市场价
        saleVolume: Math.max(...skus.map(o => o.saleVolume * 1)),//销量
        taxexAndDues: Math.min(...skus.map(o => (o.taxexAndDues * 1).toFixed(2))), //税费
    };
};
