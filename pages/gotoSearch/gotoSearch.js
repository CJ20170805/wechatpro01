Component({
  methods: {
    gotoSearch: function () {
      console.log('123');
      wx.navigateTo({
        url: '../search/search',
      })
    }
  }
})