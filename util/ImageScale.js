export default function ImageScale() {
    let small = document.getElementById("small");
    let mask = document.querySelector("#small .mask");
    let large = document.getElementById("large");
    let largeImg = document.querySelector("#large img");

    //缩略图添加鼠标移入事件，鼠标移入后，让遮罩层和大图显示
    small.onmouseover = function() {
        mask.style.display = 'block';
        large.style.display = 'block';
    }

    //鼠标在缩略图上移动的时候，让遮罩层跟着鼠标走
    small.onmousemove = function(e) {
        //声明变量l,t存储遮罩层mask的left和top

        let l = e.clientX - mask.offsetWidth / 2 - small.offsetLeft;
        let t = e.clientY - mask.offsetHeight / 2 - small.offsetTop;

        //处理遮罩层的位置：
        //限制遮罩层在X轴上的移动范围
        if(l < 0) {
            //遮罩层是相对于父级定位的，如果left小于0代表已经超出父级的左边，赋值为0
            l = 0;
        } else if(l > small.offsetWidth - mask.offsetWidth) {
            //遮罩层在X轴上能够走的最大的距离是父级的宽度减去自己的宽度
            l = small.offsetWidth - mask.offsetWidth;
        }

        //限制遮罩层在Y轴上的移动范围
        if(t < 0) {
            t = 0;
        } else if(t > small.offsetHeight - mask.offsetHeight) {
            t = small.offsetHeight - mask.offsetHeight;
        }

        //处理大图显示的位置：
        /*
         * l											现在走的距离
         * small.offsetWidth-mask.offsetWidth			总距离
         *
         * 比例＝l/(small.offsetWidth-mask.offsetWidth)
         */
        let scaleX = l / (small.offsetWidth - mask.offsetWidth);
        let scaleY = t / (small.offsetHeight - mask.offsetHeight);

        /*
         * 已知右侧图片最大的移动距离（总距离）、比例
         *
         * 比例＝走的距离/总距离;
         * 走的距离=比例*总距离;
         */

        largeImg.style.left = -scaleX * (largeImg.offsetWidth - large.offsetWidth) + 'px';
        largeImg.style.top = -scaleY * (largeImg.offsetHeight - large.offsetHeight) + 'px';

        mask.style.left = l + 'px';
        mask.style.top = t + 'px';
    }

    //缩略图添加鼠标移出事件，鼠标移出后，让遮罩层和大图不显示
    small.onmouseout = function() {
        mask.style.display = 'none';
        large.style.display = 'none';
    }

};
