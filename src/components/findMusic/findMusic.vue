<template>
  <div class="index-container">
    <ul class="find-music-nav">
      <li class="active">个性推荐</li>
      <li @click="$router.push({name: 'playList'})">歌单</li>
      <li @click="$router.push({name: 'rank'})">排行榜</li>
      <li @click="$router.push({name: 'hotSinger'})">歌手</li>
      <li @click="$router.push({name: 'newSong'})">最新音乐</li>
    </ul>
	  <v-banner
      :imgs="[
        'http://p3.music.126.net/09hujI6_LSJD6DWK02qXwQ==/18964376555989719.jpg',
        'http://p4.music.126.net/j_cH-yjz5tTLIDFmz4sSiQ==/18833534674063637.jpg',
        'http://p4.music.126.net/I1zKnPl4g9snKbAA5zJi3Q==/18623527953173535.jpg',
        'http://p4.music.126.net/x9KxmTxNEXHQJS9n-oWRLw==/18623527953173527.jpg',
        'http://p3.music.126.net/U3y3VH4_3cX8pXECLFsHjA==/18624627464801303.jpg',
        'http://p4.music.126.net/F7yr2uUq982rTIWlwvaThg==/18964376555989729.jpg',
        'http://p4.music.126.net/qADzamZDC3c5whBibC_rAQ==/18906102439712983.jpg',
        'http://p3.music.126.net/tw17cN9NJfa5FmFDyS0A_g==/18624627464801294.jpg'
      ]"
    ></v-banner>
    <div class="recommend-list">
      <p>推荐歌单</p>
      <ul>
        <li class="day-commend">
          <div class="copywrite" :class="{'show-copywrite': -1 === showIndex}"
            @mouseover="showCopywrite(-1)"
            @mouseout="showCopywrite(-2)"
            @click="$router.push({name: 'day'})">
            根据您的音乐口味生成每日更新
          </div>
          <div class="content" @mouseover="showCopywrite(-1)" @mouseout="showCopywrite(-2)" @click="$router.push({name: 'day'})">
            <div>
              <span class="week">{{week}}</span><br>
              <span class="day">{{day}}</span>
            </div>
          </div>
          <div class="dec" @click="$router.push({name: 'day'})"><span>每日歌曲推荐</span></div>
        </li>
        <template v-for="(item, index) in commendList">
          <li class="commend-item">
            <div class="copywrite">
              <div>{{item.copywrite}}</div>
            </div>
            <div class="listen-num">
              <i class="fa fa-headphones"></i><span></span>
            </div>
            <div 
              class="item-img"
              :style="{background: `url(${item.backgroundUrl}) no-repeat`,
                      'background-size': 'cover',
                      'background-position': 'center center'
              }"
            >
              <div class="play-btn">

              </div>
            </div>
            <div class="dec">
              <span>{{item.name}}</span>
            </div>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import vBanner from './banner'

export default {
  data() {
    return {
      weekArr: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
      showIndex: -2
    }
  },
  mounted() {
    this.$store.dispatch('GET_COMMEND_LIST')
  },
  computed: {
    commendList() {
      return this.$store.state.commendList.commendList
    },
    week() {
      return this.weekArr[new Date().getDay()]
    },
    day() {
      return new Date().getDate()
    }
  },
  methods: {
    showCopywrite(index) {
      this.showIndex = index
    }
  },
  components: {
    vBanner
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/index';
</style>

