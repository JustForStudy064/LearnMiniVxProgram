//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    students:[
      {id: 110, name: 'kobe', age: 30},
      {id: 120, name:'james', age: 30},
      {id: 130, name: 'curry', age: 18},
      {id: 140, name: 'why', age: 18}
    ],
    age:17,
    counter:0,
    price:25.666
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    setInterval(()=>{
      this.setData({
        nowTime:new Date().toLocaleString()
      })
    },1000)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  handleBtnClick_01(){
    console.log("点击了增加按钮")
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleBtnClick_02(){
    console.log("点击了减小按钮")
    this.setData({
       counter: this.data.counter - 1
    })
  }
})
