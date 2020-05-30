export function show(ele) {
    ele.classList.add("show");
    ele.classList.remove("hide");
}

export function hide(ele) {
    ele.classList.add("hide");
    ele.classList.remove("show");
}

// 开始封装自己的scrollTop
export function myScroll() {
    if (window.pageYOffset != null) { // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    } else if (document.compatMode === "CSS1Compat") { // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return { // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}


export default function ImageScale() {
    // 放大器组件 当鼠标放到左边的图片上, 右边生成局部放大图片
    // 技术点：onmouseenter==onmouseover 第一个不冒泡
    //技术点：onmouseleave==onmouseout  第一个不冒泡
    //步骤：
    // 1. 鼠标放上去显示盒子，移开隐藏盒子
    // 2. mouseover盒子跟随移动
    // 3. 右侧的大图片，等比例移动

    // 获取相关元素
    let box = document.querySelector("#box");
    let small = document.querySelector("#box #small");
    let big = document.querySelector("#box #big");
    let mask = document.querySelector("#mask");
    let bigImg = document.querySelector("#big img");

    // 作用: 显示鼠标在盒子中的坐标。
    // onmousemove:在事件源上移动便会触发
    // 1. 获取鼠标在整个页面的位置
    // 2. 获取盒子在整个页面的位置
    // 3. 用鼠标的位置减去盒子的位置赋值给盒子的内容。
    let contentX = document.querySelectorAll("#local span")[0];
    let contentY = document.querySelectorAll("#local span")[1];

    small.onmousemove = function (event) {
        event = event || window.event;
        // 获取鼠标在页面中的位置
        let pageX = event.pageX || myScroll().left + event.clientX;
        let pageY = event.pageY || myScroll().top + event.clientY;
        //console.log(pageX, pageY);
        // 获取图片左上角在页面中的位置
        let imgX = box.getBoundingClientRect().left;//box.offsetLeft;
        let imgY = box.getBoundingClientRect().top;//box.offsetTop;
        console.log(imgX, imgY)
        let x = pageX - imgX;
        let y = pageY - imgY;
        contentX.innerHTML = x;
        contentY.innerHTML = y;

        // 想移动mask, 必须知道鼠标在small中的位置.
        // local.js 引入contentX & contentY 为鼠标在盒子中的位置
        // 让鼠标在黄盒子最中间，减去黄盒子宽高的一半
        let maskX = x - mask.offsetWidth / 2;
        let maskY = y - mask.offsetHeight / 2;
        //console.log(maskX, maskY)
        //限制换盒子范围
        //left取值为大于0，小盒子的宽 - mask的宽。
        if (maskX < 0) {
            maskX = 0;
        }
        if (maskX > small.offsetWidth - mask.offsetWidth) {
            maskX = small.offsetWidth - mask.offsetWidth;
        }
        if (maskY < 0) {
            maskY = 0;
        }
        if (maskY > small.offsetHeight - mask.offsetHeight) {
            maskY = small.offsetHeight - mask.offsetHeight;
        }

        //移动mask
        mask.style.left = maskX + "px";
        mask.style.top = maskY + "px";
        // console.log(maskX, maskY);

        // 右侧的大图片, 等比例移动。
        // 大图片走的距离 / mask走的距离 = 大图片/小图片
        let ratio = bigImg.offsetWidth / small.offsetWidth;

        let rimgX = ratio * maskX;
        let rimgY = ratio * maskY;

        bigImg.style.marginTop = -rimgX + "px";
        bigImg.style.marginLeft = -rimgY + "px";
    }

    small.onmouseleave = function () {
        contentX.innerHTML = "";
        contentY.innerHTML = "";
    }

    //小盒子绑定事件: 鼠标放上去显示盒子，移开隐藏盒子
    small.onmouseenter = function () {
        show(mask);
        show(big);
    }
    small.onmouseleave = function () {
        hide(mask);
        hide(big);
    }
};
