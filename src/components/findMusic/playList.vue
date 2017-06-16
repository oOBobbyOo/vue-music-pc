<template>
  <div class="playlist-container" :id="theme">
		<ul class="playlist-nav">
		  <li @click="$router.push({name: 'findMusic'})">个性推荐</li>
		  <li class="active">歌单</li>
		  <li @click="$router.push({name: 'rank'})"> 排行榜</li>
		  <li @click="$router.push({name: 'hotSinger'})">歌手</li>
		  <li @click="$router.push({name: 'newSong'})">最新音乐</li>
		</ul>
		<ul class="playlists">
		  <template v-for="item in playlists">
		    <li class="playlist">
		      <div class="listen-num">
		          <i class="fa fa-headphones"></i><span>{{formatCount(item.playCount)}}</span>
		      </div>
		      <div class="detail">
		        <img :src="item.coverImgUrl" class="item-img" @click="$router.push({name: 'songList', params:{id: item.id}})">
		        <span class="creator"><i class="fa fa-user-o fa-fw"></i>{{item.creator.nickname}}</span>
		      </div>
		      <div class="dec">
		        <span @click="$router.push({name: 'songList', params:{id: item.id}})">{{item.name}}</span>
		      </div>
		    </li>
		  </template>
		</ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
 
export default {
  computed: {
    ...mapState({
      theme: state => state.theme,
      playlists: state => state.playlists
    })
  },
  data () {
    return {
     
    }
  },
  mounted() {
    this.$store.dispatch('GET_PLAY_LIST')
  },
  methods: {
    formatCount(count) {
      return count < 100000 ? count : `${Math.floor(count / 10000)}万`
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/playList";
</style>
