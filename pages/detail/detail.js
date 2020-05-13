// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo : null,
    otherList : [],
    commentData : null
  },

  getCommentList() {
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/commentList',
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        if (result.data.code === 0) {
          this.setData({
            commentData : result.data.data.commentData
          })
        }
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  getOtherList() {
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/otherList',
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        if (result.data.code === 0) {
          this.setData({
            otherList : result.data.data.otherList
          })
        }
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },


  getCurrentVideo(viderId) {
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/videoDetail?id=' + viderId,
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        if (result.data.code === 0) {
          this.setData({
            videoInfo : result.data.data.videoInfo
          })
        }
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let videoId = options.id;
    this.getCurrentVideo(videoId);
    this.getOtherList();
    this.getCommentList();
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