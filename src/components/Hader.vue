<template>
  <v-navigation-drawer v-model="sidebar" app>
    <v-list>
      <v-list-item v-for="item in menuItems" :key="item.title" :to="item.path">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar>
    <v-container>
      <v-toolbar app color="white">
        <span class="hidden-sm-and-up">
          <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon
          >MIN IT
        </span>
        <v-toolbar-title class="hidden-xs">
          <router-link to="/" style="cursor: pointer">
            <v-img
              :width="150"
              aspect-ratio="16/9"
              cover
              src="https://i.postimg.cc/FRdHpghP/MIN-IT-PNG.png"
            ></v-img>
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs">
          <v-btn flat v-for="item in menuItems" :key="item.title">
            <v-icon left dark>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      sidebar: false,
      menuItems: [
        { title: "Home", path: "/home", icon: "home" },
        { title: "About", path: "#about", icon: "face" },
        { title: "Services", path: "#services", icon: "lock_open" },
        { title: "Portfolio", path: "#portfolio", icon: "lock_open" },
        { title: "Clients", path: "#clients", icon: "lock_open" },
        { title: "Teams", path: "#teams", icon: "lock_open" },
        { title: "Contact", path: "#contact", icon: "lock_open" },
      ],
    };
  },
};
</script>
<style>
</style>
