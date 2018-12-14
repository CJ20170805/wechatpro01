//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    temPath: []
  },
  choseImg ()  {
    let that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths[0]
        that.setData({
          temPath: tempFilePaths
        })
        console.log(tempFilePaths)
      }
    })
  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  scan () {
    wx.scanCode({
      success (res) {
        console.log(res)
      }
    })
  },
  login () {
    wx.login({
      success: function (res) {
        console.log(res.code)
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },
  getLocal () {
    wx.getLocation({
      success: function(res) {
        console.log(res)
      },
    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    }),
    wx.getBatteryInfo({
      success: function (res) {
        console.log(res)
      },
      fail: function (err) {
        console.log(err)
      }
    })
    // wx.hideTabBar({
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })
  }
})
