

Page({
  /**
   * 页面的初始数据
   */
  data: {
    currenIndex : 0,
    // 保存首页导航数据
    navList: [],

    swiperList: [],

    videoList: []
  },


  activeNav(event) {
    this.setData({
      currenIndex:event.target.dataset.index
    })
  },


  


  getvideList() {
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/videoList',
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        if (result.data.code === 0) {
          this.setData({
            videoList : result.data.data.videoList
          })
        }
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },


  getSwiperList() {
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/swiperList',
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        if (result.data.code === 0) {
          this.setData({
            swiperList : result.data.data.swiperList
          })
        }
      },
      fail: ()=>{},
      complete: ()=>{}
    });    
  },

  getNavList() {


    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/navList',
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        this.setData({
          navList:result.data.data.navList
        })
      },
      fail: ()=>{
      },
      complete: ()=>{}
    });

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList(),
    this.getSwiperList(),
    this.getvideList()
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