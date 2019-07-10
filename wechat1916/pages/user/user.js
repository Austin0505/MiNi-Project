// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:0,
    percent:0,
    checked:false,
    nodes:"<span style='color:red'>123</span>",
    color:['red', 'yellow', 'blue', 'green', 'red'],
    items: [
      { name: 'USA', value: '美国', checked: 'true'},
      { name: 'CHN', value: '中国' },
      { name: 'JPN', value: '日本', checked: 'true' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //绑定事件的有bind catch
  handleSwiper(event){
    console.log(event.detail.current)
  },
  changeSwiper(){
    this.setData({ //setdata来修改data里面的数据，并触发视图的更新 
      current: this.data.current+=1
    })
    this.setData({
      percent:60
    })
  },
  handleProgress(){
    console.log("完美")
  },
  handleUser({detail}){
    console.log(detail)
  },
  onShareAppMessage(){//配置自定义转发的内容
    return {
      title: '我的卖座',
      path: '/page/user/user?id=123',
      imageUrl:"https://pic.maizuo.com/usr/movie/73b25044a8c9756fa41d3a723ee6c2c2.jpg?x-oss-process=image/quality,Q_70"
    }
  },
  handleSwitch({ detail}){
       this.setData({
         checked:detail.value
       })
  },
  checkboxChange({ detail }){
    console.log(detail)
  },
  handleRadio({ detail }){
    console.log(detail)
  }

})