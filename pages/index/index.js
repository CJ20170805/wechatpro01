//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    navItem: [
      {
        name: 'xx',
        data: 'xx'
      },
      {
        name: '鞋包',
        data: 1
      },
      {
        name: '家电',
        data: 2
      },
      {
        name: '服饰',
        data: 3
      },
      {
        name: '数码',
        data: 4
      },
      {
        name: '手机',
        data: 5
      },
      {
        name: '家居',
        data: 6
      }
    ],
    banners: [
      { img: 'http://www.huibohehe.com/miniApi/imgs/banner1.jpg'},
      { img: 'http://www.huibohehe.com/miniApi/imgs/banner2.jpg'}
    ],
    switchClass: {
      activeName: ''
    },
    currentContent: 0,
    // tab 切换 swiper
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 100
  },
  //事件处理函数
  // switchT: function () {
  //   wx.switchTab({
  //     url: '../sortSearch/sortSearch',
  //     success: function(res) {},
  //     fail: function(res) {},
  //     complete: function(res) {},
  //   })
  // },
  switchPage: function (e) {
    var navName = e.currentTarget.dataset.navname
    this.setData({
      'switchClass.activeName' : navName,
       'currentContent' : navName
    })
    console.log(navName)
  },
  swiperChange: function (e) {
    console.log('swiper', e)
    var curr = e.detail.current;
    this.setData({
      'switchClass.activeName': curr,
    })
  },
  onLoad: function () {
    // 设置“精选”为默认选择状态
    this.setData({
      'switchClass.activeName': '0'
    })
    // wx.hideTabBar()
  }
})
