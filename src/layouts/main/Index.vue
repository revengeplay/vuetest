<template>
    <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-app-bar-nav-icon @click="drawer = !drawer" ></v-app-bar-nav-icon>
    <site-title :title="title" ></site-title>
    <v-spacer/>
    <user-info></user-info>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <site-menu></site-menu>
    </v-navigation-drawer>
    <v-content>
<router-view/>
    </v-content>
  </v-app>
</template>

<script>
import SiteTitle from '../main/SiteTitle.vue'
import SiteMenu from '../main/SiteMenu'
import UserInfo from '../main/UserInfo'

export default {
  name: 'App',
  components: {
    SiteTitle,
    SiteMenu,
    UserInfo
  },
  data () {
    return {
      drawer: false,
      items: [],
      title: '나의 타이틀'
    }
  }
}
</script>
