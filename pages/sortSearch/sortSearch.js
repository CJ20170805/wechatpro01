Page({

  /**
   * 页面的初始数据
   */
  data: {
    navItems: [
      {
        name: '热销商品',
        id : 1
      },
      {
        name: '女装内衣',
        id: 2
      },
      {
        name: '男装内衣',
        id: 3
      },
      {
        name: '个护清洁',
        id: 4
      },
      {
        name: '食品酒水',
        id: 5
      },
      {
        name: '居家生活',
        id: 6
      },
      {
        name: '厨房配件',
        id: 7
      },
      {
        name: '手机数码',
        id: 8
      },
      {
        name: '家用电器',
        id: 9
      },
      {
        name: '医药保健',
        id: 10
      },
      {
        name: '食品鲜花',
        id: 11
      },
      {
        name: '时尚鞋包',
        id: 12
      },
      {
        name: '京东自营',
        id: 13
      }
    ],
    selectedId: ''
  },
  selectSort: function (e) {
    var id = e.currentTarget.dataset.id
    console.log(id)
    this.setData({
      "selectedId" : id
    })
  },
  sortChange: function (e) {
    var curSort = e.detail.current
    console.log('sort:', curSort)
    this.setData({
      "selectedId": curSort + 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      "selectedId": 1
    })
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