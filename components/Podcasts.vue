<template>
  <div :style="background" class="police-montserrat">
    <v-layout class="mx-2">
      <v-row align="center">

        <!--        VIDEOS-->
        <v-col cols="12" align="center">
          <v-card>
            <v-card-title class="align-center justify-center white--text" style="background-color: black"
                          v-text="'VIDEOS'"/>
            <v-divider></v-divider>
            <v-layout wrap>
              <v-flex
                  md4
                  v-for="item in videos"
                  v-bind:key="item"
              >
                <v-card
                    elevation="0"
                    width="80%"
                >
                  <v-card-title class="align-center justify-center" v-text="item.title"/>
                  <v-divider></v-divider>
                  <v-row>
                    <v-col cols="3" class="ml-10 mb-10 align-center">
                      <v-avatar tile
                                size="100px">
                        <v-img
                            style="cursor: pointer"
                            @click="goToURL(item.url)"
                            src="https://www.hackingwithswift.com/uploads/matrix.jpg"
                            lazy-src="https://www.hackingwithswift.com/uploads/matrix.jpg"
                        />
                        <template v-slot:placeholder>
                          <v-row
                              class="fill-height ma-0"
                              align="center"
                              justify="center"
                          >
                            <v-progress-circular
                                indeterminate
                                color="grey lighten-5"
                            ></v-progress-circular>
                          </v-row>
                        </template>
                      </v-avatar>
                    </v-col>

                    <v-col cols="8" @click="goToURL(item.url)" style="cursor: pointer">
                      <v-card-subtitle v-text="item.subtitle"/>
                    </v-col>
                  </v-row>

                  <v-divider class=""></v-divider>
                </v-card>
              </v-flex>
            </v-layout>
          </v-card>
        </v-col>

        <!--        PODCASTS-->
        <v-col cols="12" align="center">
          <v-card>
            <v-card-title class="align-center justify-center white--text" style="background-color: black"
                          v-text="'PODCASTS'"/>
            <v-divider></v-divider>
            <v-layout wrap>
              <v-flex
                  md4
                  v-for="item in podcasts"
                  v-bind:key="item"
              >
                <v-card
                    elevation="0"
                    width="80%"
                >
                  <v-card-title class="align-center justify-center" v-text="item.title"/>
                  <v-divider></v-divider>
                  <v-row>
                    <v-col cols="3" class="ml-10 mb-10 align-center">
                      <v-avatar tile
                                size="100px">
                        <v-img
                            style="cursor: pointer"
                            @click="goToURL(item.url)"
                            src="https://www.hackingwithswift.com/uploads/matrix.jpg"
                            lazy-src="https://www.hackingwithswift.com/uploads/matrix.jpg"
                        />
                        <template v-slot:placeholder>
                          <v-row
                              class="fill-height ma-0"
                              align="center"
                              justify="center"
                          >
                            <v-progress-circular
                                indeterminate
                                color="grey lighten-5"
                            ></v-progress-circular>
                          </v-row>
                        </template>
                      </v-avatar>
                    </v-col>

                    <v-col cols="8">
                      <v-card-subtitle v-text="item.subtitle"/>
                    </v-col>
                  </v-row>

                  <v-divider class=""></v-divider>
                </v-card>
              </v-flex>
            </v-layout>
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
  </div>
</template>

<script>

export default {
  name: 'Podcasts',
  components: {},
  data() {
    return {
      background: {
        backgroundColor: "white"
      },
      videosHeaders: [
        {text: 'image', align: 'start', value: 'image'},
        {text: 'title', align:'center', value: 'title'},
        {text: 'subtitle', align:'end', value: 'subtitle'},
      ],
      videos: [
        // {
        //   title: 'Omz - intro',
        //   subtitle: 'Premiere chanson du rappeur rennais, un clip super réalisé par Lucas Le Corbeau',
        //   image: "https://www.hackingwithswift.com/uploads/matrix.jpg",
        //   url: 'https://www.youtube.com/watch?v=7fEa6ytyLmE',
        // },
      ],

      podcasts: [],
    }
  },

  methods: {
    goToURL(url) {
      window.open(url, '_blank')
      // location.href='https://www.youtube.com/watch?v=7fEa6ytyLmE', ''
    },
  }
}
</script>

<style>

</style>