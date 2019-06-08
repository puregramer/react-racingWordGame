/***
 * file name : Responsive.js
 * description : Responsive Class
 * create date : 2018-06-20
 * creator : saltgamer
 ***/

export default class Responsive {
    constructor(target) {
        this.currentZoomRate = 0;
        this.target = target;
        this.baseContainer = {
            width: this.target.clientWidth,
            height: this.target.clientHeight
            // width: target.contentWindow.document.body.scrollWidth,
            // height: target.contentWindow.document.body.scrollHeight
        };


        this.update();
        this.setScaleElement();

        window.addEventListener('resize', this.resize.bind(this), false);
        console.log('| -> target: ', target);
        console.log('| -> baseContainer: ', this.baseContainer);


    }

    update() {
        this.screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        // console.log('-> response screenWidth: ', this.screenWidth);
        // console.log('-> response screenHeight: ', this.screenHeight);
    }

    setScaleElement() {
        console.log('--> setScaleElement... ');

        const zoomVertical = this.screenHeight / this.baseContainer.height,
            zoomHorizontal = this.screenWidth / this.baseContainer.width;

        if (this.baseContainer.width * zoomVertical > this.screenWidth) {
            this.setTransformCSS(zoomHorizontal);
            this.target.style.left = '0';
        } else {
            this.setTransformCSS(zoomVertical);
            this.target.style.left = ((this.screenWidth - (this.baseContainer.width * zoomVertical)) / 2)  + 'px';
        }

    }

    setTransformCSS(zoomRate) {
        this.currentZoomRate = zoomRate;

        /*  this.target.contentWindow.document.body.setAttribute('style', '-ms-transform: scale(' + zoomRate + ',' + zoomRate + ');'
              + '-webkit-transform: scale(' + zoomRate + ',' + zoomRate + ');' + 'transform: scale(' + zoomRate + ',' + zoomRate + ');'
              + 'transform-origin: 0% 0%; -webkit-transform-origin: 0% 0%; -ms-transform-origin: 0% 0%;');*/

        // const target = this.target.contentWindow.document.body;
        const target = this.target;

        console.log('~> setTransformCSS target: ', target);

        target.style.msTransform = 'scale(' + zoomRate + ', ' + zoomRate + ')';
        target.style.webkitTransform = 'scale(' + zoomRate + ', ' + zoomRate + ')';
        target.style.transform = 'scale(' + zoomRate + ', ' + zoomRate + ')';

        target.style.transformOrigin = '0% 0%';
        target.style.msTransformOrigin = '0% 0%';
        target.style.webkitTransformOrigin = '0% 0%';

        /* target.style.position = 'absolute';
         target.style.padding = '0';
         target.style.margin = '0';*/

    }

    resize() {
        this.update();
        this.setScaleElement();
    }


}