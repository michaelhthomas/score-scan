<template>
  <v-app>
    <v-app-bar
      app
      clipped-left
      dark
      dense
      height="40"
      style="-webkit-app-region: drag"
    >
      <v-toolbar-title class="nav-centered"><b>Score</b>Scan</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  <!-- 
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      mini-variant
      width="200"
    >
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <v-main>
      <v-container fluid>
        <div class="pa-10 my-auto">
          <nuxt />
        </div>
      </v-container>
    </v-main>

    <v-footer>
      <v-btn
        class="mx-4"
        depressed
        v-if="step !== 1"
      >
        Back
      </v-btn>
      <v-btn
        class="mx-4 ml-auto"
        color="primary"
      >
        Next
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      step: 1,
      steps: [
        {
          name: "Pick File",
          route: "/"
        }
      ]
    }
  },
}
</script>

<style scoped>
  .nav-centered {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
</style>