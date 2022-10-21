// pages/detail/detail.js
const util = require('../../utils/util')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        detail:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        let that = this
        wx.request({
          url: 'http://localhost:3001/data',
           success (res) {
               //console.log(new Date(res.data.showTime).getFullYear());
               //console.log(new Date(res.data.showTime).getMonth() + 1);
               //console.log(new Date(res.data.showTime).getDate());
               //console.log(new Date(res.data.showTime).getHours());
               //console.log(new Date(res.data.showTime).getMinutes());
               //console.log(new Date(res.data.showTime).getSeconds());
               //console.log(new Date(res.data.showTime).toLocaleDateString());/*得到本地时间*/
               //console.log(new Date(res.data.showTime).toLocaleTimeString());
               res.data.showTime = new Date(res.data.showTime).toLocaleDateString();
               that.setData({
                detail: res.data
               })
           }
        })
      },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})