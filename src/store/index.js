import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(axios)
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
	  musicList: {'musicData': []},
	  theme: 'red',
	  isPlaying: false,
	  nowPlayIndex: 0,
	  showMiniAudio: true,
	  commendList: {'commendList': []},
	  curTimeNum: 0,
	  showPlay: false,
	  showAbout: false,
	  showLogin: false,
	  day: {'musicData': []},
	  playlists : [],
	  list: {'musicData': []},
	  hotSingerList: []
	},
	mutations: {
		get_music_data(state, object){
			axios.get('http://localhost:8080/static/music-data.json')
				.then((res) => {
				  state.musicList = res.data.musicData
			})
		},
		get_commend_list(state, object){
			axios.get('http://localhost:8080/static/commend-list.json')
				.then((res) => {
				  state.commendList = res.data.commendList
			})
		},
		get_play_list(state, object){
			axios.get('http://localhost:8080/static/play-list.json')
				.then((res) => {
				  state.playlists = res.data.playlists
			})
		},
		get_newsong_list(state, object){
			axios.get('http://localhost:8080/static/newsong.json')
				.then((res) => {
					res.data.result.forEach(item => {
		        let obj = {
		          id: item.song.id,
		          imgUrl: item.song.album.picUrl,
		          name: item.song.name,
		          duration: item.song.duration,
		          singer: item.song.artists[0].name,
		          singerId: item.song.artists[0].id,
		          albumName: item.song.album.name,
		          albumId: item.song.album.id
		        }
		        if (item.song.alias.length > 0) {
		          obj.isAlias = true
		          obj.alias = item.song.alias[0]
		        } else {
		          obj.isAlias = false
		          obj.alias = ''
		        }
		        if (item.song.album.alias.length > 0) {
		          obj.isAlbumAlias = true
		          obj.albumAlias = item.song.album.alias[0]
		        } else {
		          obj.isAlbumAlias = false
		          obj.albumAlias = ''
		        }
		        state.list.musicData.push(obj)
		      })
			})
		},
		get_hotsinger_list(state, object){
			axios.get('http://localhost:8080/static/hotSinger.json')
				.then((res) => {
					res.data.artists.forEach(item => {
			      let obj = {
			        imgUrl: item.picUrl,
			        id: item.id,
			        name: item.name
			      }
			      state.hotSingerList.push(obj)
			    })
			})
		}
	},
	actions: {
		GET_MUSIC_DATA (context, object) {
		  context.commit('get_music_data', object)
		},
		GET_COMMEND_LIST (context, object) {
		  context.commit('get_commend_list', object)
		},
		GET_PLAY_LIST (context, object) {
		  context.commit('get_play_list', object)
		},
		GET_NEWSONG_LIST (context, object) {
		  context.commit('get_newsong_list', object)
		},
		GET_HOTSINGER_LIST (context, object) {
		  context.commit('get_hotsinger_list', object)
		}
	}
})

export default store