import React from "react";
import HtmlHead from "../components/HtmlHead";
import SearchArea from "../components/SearchArea";
import CarList from "../components/PageCar/CarList";

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
    )
}


export default Car;
