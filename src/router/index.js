import Vue from 'vue'
import Router from 'vue-router'
import findMusic from '@/components/findMusic/findMusic'
import playList from '@/components/findMusic/playList'
import rank from '@/components/findMusic/rank'
import hotSinger from '@/components/findMusic/hotSinger'
import newSong from '@/components/findMusic/newSong'
import singer from '@/components/singer'
import album from '@/components/album'
import search from '@/components/search'
import songList from '@/components/songList'
import day from '@/components/day'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'findMusic',
      component: findMusic
    },
    {
      path: '/singer/:id',
      name: 'singer',
      component: singer
    },
    {
      path: '/album/:id',
      name: 'album',
      component: album
    },
    {
      path: '/search/:keywords',
      name: 'search',
      component: search
    },
    {
      path: '/songList/:id',
      name: 'songList',
      component: songList
    },
    {
      path: '/playList',
      name: 'playList',
      component: playList
    },
    {
      path: '/rank',
      name: 'rank',
      component: rank
    },
    {
      path: '/hotSinger',
      name: 'hotSinger',
      component: hotSinger
    },
    {
      path: '/newSong',
      name: 'newSong',
      component: newSong
    },
    {
      path: '/day',
      name: 'day',
      component: day
    }
  ]
})
