
let app = getApp()
Page({ //初始数据、生命周期回调、事件处理函数等。

  /**
   * 页面的初始数据
   */
  data: {
    msg:"菁菁很喜欢睡觉！",
    id:"CD001",
    bool:true,
    like:'tt',
    fours:[{
      name:"精典汽车",
      benz:false
    }, {
        name: "三和汽车",
        benz: true
      }, {
        name: "中升汽车",
        benz: true
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.url)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")
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
       console.log("刷新啦！")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      console.log("到底啦！")
  },
  onPageScroll(){
      console.log("滚动中...")
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
  , onTabItemTap(item){
    console.log(item.pagePath)
  }
})