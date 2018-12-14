// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginValue: "暂无"
  },
  toLogin: function () {

    // wx-login 

    wx.login({
      success: function(res) {

        console.log('suc:', res)

        var code = res.code
        if(code){

          // wx - userInfo

          wx.getUserInfo({
            withCredentials: true,
            success: function(res) {
              console.log('userInfo:', res)

              // request to server

              wx.request({
                url: 'https://www.huibohehe.com/miniApi/login.php',
                data: {
                  'code': res
                },
                header: {
                  'content-type': 'application/x-www-form-urlencoded'
                },
                method: 'POST',
                dataType: 'json',
                responseType: 'text',
                success: function(res) {
                  console.log('serverData:', res)
                },
                fail: function(res) {
                  console.log('serverError')
                }
              })
            },
            fail: function(res) {
              console.log('userInfoErr:', res);
            }
          })
        }
      },
      fail: function(res) {
        console.log('err:', res)
      }
    })
  },
  getuserinfos: function (e) {
    console.log(e)
  },
  getInfo: function () {
    wx.authorize({
      scope: 'scope.record',
      success: function(res) {},
      fail: function(res) {}
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})