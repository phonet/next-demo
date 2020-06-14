import React, {useEffect, useState} from 'react';
import HtmlHead from '../components/HtmlHead';
import SearchArea from '../components/SearchArea';
import CarList from '../components/PageCar/CarList';
import {getCarListApi} from '../api/Api';


/**
 * 购物车
 * 2020/5/31 5:48 下午 BY TF
 */
const Car = () => {

    return (
        <>
            <HtmlHead title={'购物车'}/>
            <SearchArea/>
            <CarList/>
        </>
    );
};

Car.getInitialProps = async (props) => {
    /*let carList = [];
    try {
        const res = await getCarListApi();
        carList = res.code === 20000 ? res.data : {};
    } catch (e) {

    }
    return {
        carList
    };*/
};


export default Car;
