<template>
	<div class="new-song-container" :id="theme">
    <ul class="new-song-nav">
      <li @click="$router.push({name: 'findMusic'})">个性推荐</li>
      <li @click="$router.push({name: 'playList'})">歌单</li>
      <li @click="$router.push({name: 'rank'})">排行榜</li>
      <li @click="$router.push({name: 'hotSinger'})">歌手</li>
      <li class="active">最新音乐</li>
    </ul>
    <ul class="new-song">
      <li v-for="(item, index) in list.musicData" @dblclick="$store.commit('setMusicList', list); $store.commit('setPlayIndex', index)">
        <span class="index">{{index + 1 > 9 ? index + 1 : `0${index + 1}`}}</span>
        <img :src="item.imgUrl">
        <span class="song-name">{{item.name}}<span class="alias" v-if="item.isAlias">({{item.alias}})</span></span>
        <span class="singer" @click="singer(item.singerId)">{{item.singer}}</span>
        <span class="album" @click="$router.push({name: 'album', params: {id: item.albumId}})">{{item.albumName}}<span class="alias" v-if="item.isAlbumAlias">({{item.albumAlias}})</span></span>
        <span class="duration">{{formatTime(item.duration)}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState({
			theme: state => state.theme,
			list: state => state.list
		})
	},
	data() {
	  return {
	    
	  }
	},
	mounted() {
		this.$store.dispatch('GET_NEWSONG_LIST')
	},
	methods: {
		singer(id) {
			this.$router.push({name: 'singer', params: {id: id}})
		},
	  formatTime(time) {
	    time = Math.floor(time / 1000)
	    let second = time % 60
	    let min = (time - second) / 60
	    second = second > 9 ? second : `0${second}`
	    min = min > 9 ? min : `0${min}`
	    return `${min}:${second}`
	  }
	}
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/newSong'; 
</style>