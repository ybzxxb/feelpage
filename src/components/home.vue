<template>
    <div class="home" v-if="imageInfo">
      <!-- <advertisement></advertisement> -->
      <div class="home_center"> 
      <div class="resources_content">
        <div class="serachArea">
          <div class="selectContent">
          <img src="../assets/baidu.png" alt="百度搜索" class="bdsearch">
          <input type="text" class="searchInfo" placeholder="百度一下 你就知道" v-model="keyword" @keyup.enter="get($event)" @keydown.down.prevent="selectDown"
            @keydown.up.prevent="selectUp">
          <button @click="searchInput()">search</button>
          </div>
        </div>
        <!-- <transition name="silde-top">
          <router-view class="list_resources" ref="resourceslist" name="downloadlist" :keyword="searchKey" :selectedvalue="selected" :serchoptions="options"></router-view>
        </transition> -->
        <div class="page-container">
                        <div class="container">
                                <div class="row">

                                        <!-- start of page content -->
                                        <div class="col-xs-12 col-sm-8 page-content">

                                                <!-- Basic Home Page Template -->
                                                <div class="row separator">
                                                        <section class="span4 articles-list">
                                                                <h3>Featured Articles</h3>
                                                                <ul class="articles">
                                                                        <li class="article-entry standard">
                                                                                <h4><a href="single.html">Integrating WordPress with Your Website</a></h4>
                                                                                <span class="article-meta">25 Feb, 2013 in <a href="#" title="View all posts in Server &amp; Database">Server &amp; Database</a></span>
                                                                                <span class="like-count">66</span>
                                                                        </li>
                                                                        <li class="article-entry standard">
                                                                                <h4><a href="single.html">WordPress Site Maintenance</a></h4>
                                                                                <span class="article-meta">24 Feb, 2013 in <a href="#" title="View all posts in Website Dev">Website Dev</a></span>
                                                                                <span class="like-count">15</span>
                                                                        </li>
                                                                        <li class="article-entry video">
                                                                                <h4><a href="single.html">Meta Tags in WordPress</a></h4>
                                                                                <span class="article-meta">23 Feb, 2013 in <a href="#" title="View all posts in Website Dev">Website Dev</a></span>
                                                                                <span class="like-count">8</span>
                                                                        </li>
                                                                        <li class="article-entry image">
                                                                                <h4><a href="single.html">WordPress in Your Language</a></h4>
                                                                                <span class="article-meta">22 Feb, 2013 in <a href="#" title="View all posts in Advanced Techniques">Advanced Techniques</a></span>
                                                                                <span class="like-count">6</span>
                                                                        </li>
                                                                        <li class="article-entry standard">
                                                                                <h4><a href="single.html">Know Your Sources</a></h4>
                                                                                <span class="article-meta">22 Feb, 2013 in <a href="#" title="View all posts in Website Dev">Website Dev</a></span>
                                                                                <span class="like-count">2</span>
                                                                        </li>
                                                                        <li class="article-entry standard">
                                                                                <h4><a href="single.html">Validating a Website</a></h4>
                                                                                <span class="article-meta">21 Feb, 2013 in <a href="#" title="View all posts in Website Dev">Website Dev</a></span>
                                                                                <span class="like-count">3</span>
                                                                        </li>
                                                                </ul>
                                                        </section>


                                                        <section class="span4 articles-list">
                                                                <h3>Latest Articles</h3>
                                                                <ul class="articles">
                                                                        <li class="article-entry standard">
                                                                                <h4><a href="single.html">Integrating WordPress with Your Website</a></h4>
                                                                                <span class="article-meta">25 Feb, 2013 in <a href="#" title="View all posts in Server &amp; Database">Server &amp; Database</a></span>
                                                                                <span class="like-count">66</span>
                                                                        </li>
                                                                        <li class="article-entry standard">
                                                                                <h4><a href="single.html">Using Javascript</a></h4>
                                                                                <span class="article-meta">25 Feb, 2013 in <a href="#" title="View all posts in Advanced Techniques">Advanced Techniques</a></span>
                                                                                <span class="like-count">18</span>
                                                                        </li>
                                                                        <li class="article-entry image">
                                                                                <h4><a href="single.html">Using Images</a></h4>
                                                                                <span class="article-meta">25 Feb, 2013 in <a href="#" title="View all posts in Designing in WordPress">Designing in WordPress</a></span>
                                                                                <span class="like-count">7</span>
                                                                        </li>
                                                                        <li class="article-entry video">
                                                                                <h4><a href="single.html">Using Video</a></h4>
                                                                                <span class="article-meta">24 Feb, 2013 in <a href="#" title="View all posts in WordPress Plugins">WordPress Plugins</a></span>
                                                                                <span class="like-count">7</span>
                                                                        </li>
                                                                        <li class="article-entry standard">
                                                                                <h4><a href="single.html">WordPress Site Maintenance</a></h4>
                                                                                <span class="article-meta">24 Feb, 2013 in <a href="#" title="View all posts in Website Dev">Website Dev</a></span>
                                                                                <span class="like-count">15</span>
                                                                        </li>
                                                                        <li class="article-entry standard">
                                                                                <h4><a href="single.html">WordPress CSS Information and Techniques</a></h4>
                                                                                <span class="article-meta">24 Feb, 2013 in <a href="#" title="View all posts in Theme Development">Theme Development</a></span>
                                                                                <span class="like-count">1</span>
                                                                        </li>
                                                                </ul>
                                                        </section>
                                                </div>
                                        </div>
                                        <!-- end of page content -->


                                        <!-- start of sidebar -->
                                        <aside class="col-xs-12 col-sm-4 page-sidebar">

                                                <section class="widget">
                                                        <div class="support-widget">
                                                                <h3 class="title">Support</h3>
                                                                <p class="intro">Need more support? If you did not found an answer, contact us for further help.</p>
                                                        </div>
                                                </section>

                                                <section class="widget">
                                                        <div class="quick-links-widget">
                                                                <h3 class="title">Quick Links</h3>
                                                                <ul id="menu-quick-links" class="menu clearfix">
                                                                        <li><a href="index-2.html">Home</a></li>
                                                                        <li><a href="articles-list.html">Articles List</a></li>
                                                                        <li><a href="faq.html">FAQs</a></li>
                                                                        <li><a href="contact.html">Contact</a></li>
                                                                </ul>
                                                        </div>
                                                </section>

                                                <section class="widget">
                                                        <h3 class="title">Tags</h3>
                                                        <div class="tagcloud">
                                                                <a href="#" class="btn btn-mini">basic</a>
                                                                <a href="#" class="btn btn-mini">beginner</a>
                                                                <a href="#" class="btn btn-mini">blogging</a>
                                                                <a href="#" class="btn btn-mini">colour</a>
                                                                <a href="#" class="btn btn-mini">css</a>
                                                                <a href="#" class="btn btn-mini">date</a>
                                                                <a href="#" class="btn btn-mini">design</a>
                                                                <a href="#" class="btn btn-mini">files</a>
                                                                <a href="#" class="btn btn-mini">format</a>
                                                                <a href="#" class="btn btn-mini">header</a>
                                                                <a href="#" class="btn btn-mini">images</a>
                                                                <a href="#" class="btn btn-mini">plugins</a>
                                                                <a href="#" class="btn btn-mini">setting</a>
                                                                <a href="#" class="btn btn-mini">templates</a>
                                                                <a href="#" class="btn btn-mini">theme</a>
                                                                <a href="#" class="btn btn-mini">time</a>
                                                                <a href="#" class="btn btn-mini">videos</a>
                                                                <a href="#" class="btn btn-mini">website</a>
                                                                <a href="#" class="btn btn-mini">wordpress</a>
                                                        </div>
                                                </section>

                                        </aside>
                                        <!-- end of sidebar -->
                                </div>
                        </div>
                </div>
        </div>
        <tips v-if="globalInfo.isHigher768"></tips>
        <div class="home_set">
          <div class="set_list" v-if="imageInfo.type === 'home'" :class="index === 4 ? 'disabled' : ''" title="上一张壁纸" @click="defaultData(2)">
            <i class="icon-left"></i>
          </div>
          <div class="set_list" :title="isBingImage ? '设置默认壁纸' : '设置为Bing壁纸'" @click="getHomeImage">
            <i :class="isBingImage ? 'icon-imgsetting' : 'icon-bing'"></i>
          </div>
          <div class="set_list" v-if="imageInfo.type === 'home'" :class="index === 0 ? 'disabled' : ''" title="下一张壁纸" @click="defaultData(1)">
            <i class="icon-right"></i>
          </div>
          <div class="set_list" v-if="imageInfo.type === 'home'" @click="showAllList">
            <i class="text">图</i>
          </div>
          <div class="set_list" v-if="globalInfo.isHigher768" @click="toggleFullScreen">
            <i :class="isFullScreen ? 'icon-canclefullscreen' : 'icon-fullscreen'" :title="isFullScreen ? '取消全屏' : '全屏'"></i>
          </div>
        </div>
        <span class="tips" :title="bingImageDisc">每日一图由 {{bingImageDisc}} 提供 | Copyright © 2016~{{new Date().getFullYear()}} DAIWEI.ORG
          <span v-if="globalInfo.isHigher768">
            <router-link tag="a" to="/about/suggest" title="请提出你的意见">
              <span>意见建议</span>
            </router-link>
            <router-link tag="a" to="/about/friendship" title="希望能互换友链">
              <span>友情链接</span>
            </router-link>
            <a href="http://www.miitbeian.gov.cn/" target="_black" title="皖ICP备16011217号" style="width:100%;height:auto">皖ICP备16011217号</a>
          </span>
        </span>
      </div>
      <audio v-if="imageInfo.musicUrl" ref="homeAudio" style="display:none" loop="" :src="imageInfo.musicUrl"></audio>
      <coverhistory v-if="isShowAllList" @setStatus="hideAllList"></coverhistory>
    </div>
</template>

<script>
import store from 'store'
import tips from 'components/common/tips/tips.vue'
import coverhistory from 'components/common/coverhistory/coverhistory'
// import advertisement from 'components/common/advertisement/advertisement'

// 引入背景请求的api  getBingInfo
import { getBingInfo, getMineBgByIndex } from 'common/api/background.js'

export default {
  data() {
    return {
      showHomeContent: false,
      isFullScreen: false,
      isPlay: false,
      index: 0,
      isShowAllList: false,
      myData: [],
      keyword: '',
      now: -1
    }
  },
  computed: {
    bingImageDisc() {
      return store.getters.getGlobalInfo.showBingImage ? 'bing' : 'yuan'
    },
    imageInfo() {
      return store.getters.getFixedImageInfo
    },
    globalInfo() {
      return store.getters.getGlobalInfo
    },
    getAudioIsPlay() {
      return store.getters.getAudioIsPlay
    },
    isBingImage() {
      return store.getters.getGlobalInfo.showBingImage
    }
  },
  // components: {
  //   advertisement
  // },
  methods: {
    toggleFullScreen() {
      if (this.isFullScreen) {
        this.exitFullscreen()
      } else {
        this.fullScreen()
      }
    },

    get: function(event) {
      if (event.keyCode == 38 || event.keyCode == 40) return
      if (event.keyCode == 13) {
        window.open('https://www.baidu.com/s?wd=' + this.keyword)
        this.keyword = ''
      }
      this.$http
        .jsonp(
          'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
          {
            wd: this.keyword
          },
          {
            jsonp: 'cb'
          }
        )
        .then(
          function(res) {
            this.myData = res.data.s
          },
          function() {}
        )
    },
    searchInput:function(){
      window.open('https://www.baidu.com/s?wd=' + this.keyword)
    },

    hideAllList() {
      this.isShowAllList = false
    },

    showAllList() {
      this.isShowAllList = true
    },

    playpause() {
      var globalAudioEle = store.getters.getAudioEle
      if (!globalAudioEle.paused) {
        globalAudioEle.pause()
        store.commit('setAudioIsPlay', !globalAudioEle.paused)
      }

      var musicEle = this.$refs.homeAudio
      if (musicEle.paused) {
        musicEle.play()
        this.isPlay = true
      } else {
        musicEle.pause()
        this.isPlay = false
      }
    },

    getHomeImage() {
      if (this.isBingImage) {
        this.$msg('切换至自定义壁纸...')
        this.defaultData(0)
      } else {
        this.$msg('切换至Bing每日壁纸...')
        this.getBingImageInfo()
      }
    },

    // 设置壁纸的信息   0 则是默认的壁纸  索引为0  1 则是索引 --     2 则是 ++    根据 limit(index, 1) 来获取数据
    defaultData(type) {
      // 如果有播放器 需要设置暂停状态
      this.isPlay = false
      if (type === 1) {
        this.index--
        if (this.index < 0) {
          this.index = 0
          return
        }
      }

      if (type === 2) {
        this.index++
        if (this.index > 4) {
          this.index = 4
          return
        }
      }

      if (type === 0) {
        this.index = 0
      }

      var index = this.index

      const url =
        'http://www.daiwei.org/vue/server/home.php?inAjax=1&do=getHomeImage'
      getMineBgByIndex(url, index).then(res => {
        var globalData = store.getters.getGlobalInfo
        globalData.showBingImage = false
        // 全局设置
        store.dispatch({
          type: 'set_GlobalInfo',
          data: globalData
        })

        // 设置图片索引
        store.getters.getFixedBgIndex
        localStorage.setItem(
          'globalInfo',
          JSON.stringify(store.getters.getGlobalInfo)
        )
      })
    },

    getBingImageInfo() {
      var getbingApi =
        'http://www.daiwei.org/vue/server/home.php?inAjax=1&do=getImageByBingJson'
      getBingInfo(getbingApi, 0).then(res => {
        var globalData = store.getters.getGlobalInfo
        globalData.showBingImage = true
        store.dispatch({
          type: 'set_GlobalInfo',
          data: globalData
        })
        localStorage.setItem('globalInfo', JSON.stringify(globalData))
      })
    },

    formatDate(data, fmt) {
      var o = {
        'M+': data.getMonth() + 1, // 月份
        'd+': data.getDate(), // 日
        'h+': data.getHours(), // 小时
        'm+': data.getMinutes(), // 分
        's+': data.getSeconds(), // 秒
        'q+': Math.floor((data.getMonth() + 3) / 3), // 季度
        S: data.getMilliseconds() // 毫秒
      }
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          (data.getFullYear() + '').substr(4 - RegExp.$1.length)
        )
      }
      for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length === 1
              ? o[k]
              : ('00' + o[k]).substr(('' + o[k]).length)
          )
        }
      }
      return fmt
    },

    getRoutePath() {
      // return this.$route.path
      // if (this.$route.path.indexOf('/about'))
      // 进入子页面的时候  路由路径的长度  来判断实在子路由还是父路由中
      if (this.$route.path === '/home') {
        // 进入home
        return
      } else {
        this.isPlay = false
      }
    },

    fullScreen() {
      // W3C
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      }
      // FireFox
      if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      }
      // Chrome等
      if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen()
      }
      // IE11
      if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen()
      }
      this.isFullScreen = true
    },
    exitFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
      if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      }
      if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      }
      if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
      this.isFullScreen = false
    },
    screenChangeEvent() {
      const _this = this
      const eventList = [
        'webkitfullscreenchange',
        'mozfullscreenchange',
        'fullscreenchange',
        'msfullscreenchange'
      ]
      for (let i = 0; i < eventList.length; i++) {
        document.addEventListener(eventList[i], function() {
          // 全屏显示的网页元素
          const fullscreenElement =
            document.fullscreenElement ||
            document.mozFullScreenElement ||
            document.webkitFullscreenElement ||
            document.msFullscreenElement

          if (fullscreenElement) {
            _this.isFullScreen = true
          } else {
            _this.isFullScreen = false
          }
        })
      }
    }
  },
  components: {
    tips,
    coverhistory
  },
  watch: {
    $route: 'getRoutePath'
  },
  mounted() {
    this.showHomeContent = true
    this.screenChangeEvent()
    const fixedImageBg = localStorage.getItem('fixedImageBg')
    this.index = fixedImageBg
      ? JSON.parse(fixedImageBg).index
      : store.getters.getFixedImageInfo.index
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../common/stylus/global.styl';
@import '../common/style.css'

.home {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;

  .pic_bg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    right: 0;
    z-index: -1;
  }

  .home_center {
    max-width: 1240px;
    border-radius: 12px;
    backgoround: #fff;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .home_content {
      padding: 0 20px 50px 20px;
      position: relative;

      .title {
        font-size: 22px;
        color: #fff;

        span {
          font-size: 14px;
          vertical-align: bottom;
          font-weight: normal;
          margin-left: 20px;

          &.playpause {
            background: #fff;
            display: inline-block;
            color: #F55021;
            width: auto;
            vertical-align: middle;
            height: 24px;
            font-weight: 600;
            font-size: 12px;
            line-height: 24px;
            padding: 0 8px;
            border-radius: 4px;
            cursor: pointer;

            i {
              vertical-align: middle;
              display: inline-table;
              padding-bottom: 2px;
            }
          }
        }
      }

      .disc {
        font-size: 14px;
        color: #fff;
      }
    }

    .home_set {
      position: absolute;
      right: 30px;
      bottom: 60px;
      color: $text_color;
      width: auto;
      font-size: 0;

      .set_list {
        display: inline-block;
        width: 40px;
        height: 40px;
        font-size: 16px;
        vertical-align: top;
        border: 2px solid #fff;
        border-radius: 50%;
        text-align: center;
        box-sizing: border-box;
        margin-left: 25px;
        cursor: pointer;

        i {
          color: #fff;
          vertical-align: baseline;

          &.text {
            display: flex;
            align-items: center;
            justify-content: center;
            font-style: normal;
            width: 100%;
            height: 100%;
          }
        }

        &.disabled {
          cursor: default;
          border: 2px solid rgba(233, 233, 233, 0.46);

          i {
            color: rgba(233, 233, 233, 0.46);
          }
        }
      }
    }

    .tips {
      position: absolute;
      right: 30px;
      left: 30px;
      bottom: 0;
      color: $text_color;
      height: 40px;
      line-height: 40px;
      font-size: 10px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      text-align: right;

      a {
        color: $text_color;
        margin-left: 10px;
        text-decoration: none;
      }
    }

    @media screen and (min-width: 992px) {
      .home_content {
        padding: 0 80px 50px 80px;
        position: relative;
      }
    }
  }
}

.resources_content {
  position: fixed;
  top: 50px;
  bottom: 0;
  left: 50%;
  max-width: 1240px;
  width: 100%;
  transform: translate3d(-50%, 0, 0);
  margin: 0 auto;
  overflow-y: auto;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
  padding: 15px;
  box-sizing: border-box;
  opacity: 1;
  transition: all 0.5s 0.3s;
}

.serachArea {
  position: absolute;
  top: 0;
  height: 50px;
  padding: 7px 0;
  width: 100%;
  left: 0;
  box-sizing: border-box;

  .selectContent {
    width: 70%;
    min-width: 300px;
    max-width: 500px;
    margin: 0 auto;
    height: 36px;
    font-size: 0;
    color: $text_color;
    position: relative;
  }

  .searchInfo {
    display: inline-block;
    vertical-align: top;
    height: 36px;
    width: calc(100% - 70px);
    font-size: 14px;
    padding: 0;
    text-indent: 5px;
    color: $text_color;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px 0 0 4px;
    border: 1px solid $text_color;
    border-right: 0 none;
    outline: 0 none;
    margin: 0;
    box-sizing: border-box;
  }
  .bdsearch{
    position:relative;
    width:100px;
    left:35%;
    margin:0 auto
  }

  .serachType {
    position: absolute;
    top: 5px;
    bottom: 5px;
    right: 74px;
    width: 80px;
    background: rgba(0, 0, 0, 0.1);
    outline: none;
    color: $text_color;
    padding: 0 2px;

    option {
      background: rgba(0, 0, 0, 0.6);
    }
  }

  button {
    display: inline-block;
    vertical-align: top;
    height: 36px;
    width: 66px;
    font-size: 14px;
    color: $text_color;
    border-radius: 0 4px 4px 0;
    border: 1px solid $text_color;
    background: rgba(0, 0, 0, 0.1);
    padding: 0;
    outline: 0 none;
    margin: 0;
    cursor: pointer;

    &:hover {
      background: rgba(0, 0, 0, 0.3);
    }
  }
}

.list_resources {
  position: absolute;
  top: 80px;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
}
</style>

