<template>
  <div>
    <v-card v-for="item in items" v-bind:key="item">
      <v-card-title>{{ item }}</v-card-title>
    </v-card>
  </div>
</template>

<script>
import fs from 'fs'
export default {
  data: () => ({
    items: fs.readdirSync('/Volumes/GoogleDrive/')
  })
}
</script>