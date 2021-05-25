<template>
  <div>
    <h1 class=" text-center">Choose a file</h1>
    <v-row>
        <v-col lg="4" cols="sm" class="pb-2">
          <v-hover v-slot="{ hover }">
            <nuxt-link to="/library">
              <v-card :elevation="hover ? 12 : 2">
                <v-card-title>
                  Open Folder
                </v-card-title>
                <!-- <v-card-actions>
                  <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="reserve"
                  >
                    Reserve
                  </v-btn>
                </v-card-actions> -->
              </v-card>
            </nuxt-link>
          </v-hover>
        </v-col>
        <v-col lg="4" cols="sm" class="pb-2">
            <v-card>
                <v-row class="no-gutters">
                    <div class="col-auto">
                        <div class="primary fill-height">&nbsp;</div>
                    </div>
                    <div class="col pa-3 py-4 primary--text">
                        <h5 class="text-truncate text-uppercase">Growth</h5>
                        <h1>23%</h1>
                    </div>
                </v-row>
            </v-card>
        </v-col>
        <v-col lg="4" cols="sm" class="pb-2">
            <v-card>
                <v-row class="no-gutters">
                    <div class="col-auto">
                        <div class="success fill-height">&nbsp;</div>
                    </div>
                    <div class="col pa-3 py-4 success--text">
                        <h5 class="text-truncate text-uppercase">Calls</h5>
                        <h1>213</h1>
                    </div>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
  </div>
</template>

<script>
import { remote, shell } from 'electron'
import SystemInformation from '@/components/SystemInformation.vue'

export default {
  components: {
    SystemInformation
  },
  data () {
    return {
      externalContent: ''
    }
  },
  methods: {
    openURL (url) {
      shell.openExternal(url)
    }
  }
}
</script>