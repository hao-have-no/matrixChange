let app = document.getElementById('app');
let urls = [
  'http://bgcdn.acohome.cn/100965.jpg',
  'http://bgcdn.acohome.cn/1501505.jpg',
  'http://bgcdn.acohome.cn/1501655.jpg',
  'http://bgcdn.acohome.cn/286477.jpg',
  'http://bgcdn.acohome.cn/328845.jpg'
];

let move = mChange.makeMatrixChange(app, {
  images: urls,
  row: 6,
  col: 6
});

function getRandom(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

move.movePoint(mChange.mode[0]);

new Vue({
  el: '#option',
  data: {
    inSelect: 'rollIn',
    inList: [
      'flash',
      'rubberBand',
      'shake',
      'headShake',
      'swing',
      'tada',
      'wobble',
      'jello',
      'bounceIn',
      'bounceInDown',
      'bounceInLeft',
      'bounceInRight',
      'bounceInUp',
      'fadeIn',
      'fadeInDown',
      'fadeInDownBig',
      'fadeInLeft',
      'fadeInLeftBig',
      'fadeInRight',
      'fadeInRightBig',
      'fadeInUp',
      'fadeInUpBig',
      'flipInX',
      'flipInY',
      'lightSpeedIn',
      'rotateIn',
      'rotateInDownLeft',
      'rotateInDownRight',
      'rotateInUpLeft',
      'rotateInUpRight',
      'rollIn',
      'zoomIn',
      'zoomInDown',
      'zoomInLeft',
      'zoomInRight',
      'zoomInUp',
      'slideInDown',
      'slideInLeft',
      'slideInRight',
      'slideInUp'
    ],
    outSelect: 'hinge',
    outList: [
      'flash',
      'rubberBand',
      'shake',
      'headShake',
      'swing',
      'tada',
      'wobble',
      'jello',
      'bounceOut',
      'bounceOutDown',
      'bounceOutLeft',
      'bounceOutRight',
      'bounceOutUp',
      'fadeOut',
      'fadeOutDown',
      'fadeOutDownBig',
      'fadeOutLeft',
      'fadeOutLeftBig',
      'fadeOutRight',
      'fadeOutRightBig',
      'fadeOutUp',
      'fadeOutUpBig',
      'flipOutX',
      'flipOutY',
      'lightSpeedOut',
      'rotateOut',
      'rotateOutDownLeft',
      'rotateOutDownRight',
      'rotateOutUpLeft',
      'rotateOutUpRight',
      'hinge',
      'rollOut',
      'zoomOut',
      'zoomOutDown',
      'zoomOutLeft',
      'zoomOutRight',
      'zoomOutUp',
      'slideOutDown',
      'slideOutLeft',
      'slideOutRight',
      'slideOutUp'
    ]
  },
  methods: {
    start() {
      let num=getRandom(0, mChange.mode.length - 1);
      move.movePoint(mChange.mode[getRandom(0, mChange.mode.length - 1)], {
        animate: true,
        classNameIn: 'animated ' +this.inList[num],
        classNameOut: 'animated ' + this.outList[num]
      });
    }
  },
  created:function () {
    var that=this;
    setInterval(function(){
      that.start();
    },8000)
  }
});
