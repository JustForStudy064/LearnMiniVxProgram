// pages/things/things.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title : ["衣服","裤子","傻子"],
    counter:0
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

  },
  handleTouchStart(){
    console.log("用户发生了点击");
  },
  handleTouchMove(){
    console.log("用户发生了触摸");
  },
  handleTouchEnd(){
    console.log("用户手指离开了");
  },
  handleTap(){
    console.log("用户做了啥玩意？")
  },
  handleLongpress(){
    console.log("长按")
  },
  handleClick(){
    console.log("点击了哈哈");
  },
  handleBindEvent(){
    console.log("点击了红色");
  },
  handleItemClick(event){
    console.log(event)
    const dataset = event.currentTarget.dataset;
    const title = dataset.item;
    const index = dataset.index;
    console.log(title,index);
  },
  handleCaptureView1(){
  console.log("handleCaptureView1");
  },
  handleBindView1(){
    console.log("handleBindView1");
  },
  handleCaptureView2(){
  console.log("handleCaptureView2");
  },
  handleBindView2(){
    console.log("handleBindView2");
  },
  handleCaptureView3(){
  console.log("handleCaptureView3");
  },
  handleBindView3(){
    console.log("handleBindView3");
  },
  handleIncrement(){
    console.log("踢皮球行为！")
    this.setData({
      counter:this.data.counter + 1
    })
  },
  handleIncrementCpn1(){
    console.log("监听一下")
    // 不太推荐
    // var obj = this.selectComponent("#num")
    // obj.setData({
    //   counter:obj.data.counter+1
    // })
    var obj = this.selectComponent("#num1")
    obj.incrementCounter(10)
  },
  handleIncrementCpn2(){
    console.log("监听两下")
    var obj = this.selectComponent("#num2")
    obj.incrementCounter(20)
  }
})