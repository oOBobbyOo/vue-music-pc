<template>
	<div class="hot-singer-container" :id="theme">
	  <ul class="hot-singer-nav">
	    <li @click="$router.push({name: 'findMusic'})">个性推荐</li>
	    <li @click="$router.push({name: 'playList'})">歌单</li>
	    <li @click="$router.push({name: 'rank'})">排行榜</li>
	    <li class="active">歌手</li>
	    <li @click="$router.push({name: 'newSong'})">最新音乐</li>
	  </ul>
    <ul class="singers">
      <li v-for="item in hotSingerList">
        <img :src="item.imgUrl" @click="$router.push({name: 'singer', params:{id: item.id}})">
        <p><span class="name" @click="$router.push({name: 'singer', params:{id: item.id}})">{{item.name}}</span></p>
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
			hotSingerList: state => state.hotSingerList
		})
	},
	data() {
		return {

		}
	},
	mounted() {
		this.$store.dispatch('GET_HOTSINGER_LIST')		
	}
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/hotSinger'; 
</style>