<template>
  <v-app class="police-montserrat">
    <v-container fluid>
      <v-row>
          <v-col lg="2" md="2" sm="10" cols="12">
            <router-link :to="'/home'">
              <v-img
                  src="./assets/chambre-noire.png"
                  max-width="200"
              />
            </router-link>
          </v-col>
          <v-col lg="10" md="10" cols="12">
            <v-app-bar
                dark
            >
              <v-row v-resize="buttons">
                <router-link
                      v-for="(button) in buttons"
                      v-bind:key="button"
                      :to="button.path">
                      <glowing-buttons>
                        <div class="white--text mx-2 ma-2 police-montserrat">
                          {{ button.name }}
                        </div>
                      </glowing-buttons>
                    </router-link>
                </v-row>

              <v-row justify="end">
                <v-col lg="4" md="4" xs="12">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                          v-bind="attrs"
                          v-on="on"
                          icon
                      >
                        <v-icon>
                          mdi-magnify
                        </v-icon>
                      </v-btn>
                    </template>
                    <span>Rechercher</span>
                  </v-tooltip>
                </v-col>
              </v-row>
          </v-app-bar>
          </v-col>
      </v-row>
      <v-divider></v-divider>

      <!--    components-->
      <v-main>
        <router-view/>
      </v-main>

      <v-footer
          dark
          class="police-montserrat"
          absolute
      >
        Chambre Noire All Rights Reserved ©
        <v-spacer></v-spacer>
        Developed by Omz
      </v-footer>

    </v-container>
  </v-app>
</template>

<script>
import GlowingButtons from "@/components/GlowingButtons";
export default {
  name: 'App',

  components: {
    GlowingButtons,
  },

  data() {
    return {
      buttons: [
        {name: "Accueil", path: '/home'},
        {name: "Critiques", path: '/critiques'},
        {name: "Dossiers", path: '/dossiers'},
        {name: "Vidéos/Podcasts", path: '/podcasts'},
        {name: "Contact", path: '/qui'}
      ],
    }
  },

  methods: {

  },
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap');

.police-montserrat {
  font-family: 'Montserrat', cursive;
}

a {
  text-decoration: none;
  /*//disable link underline*/
}

</style>
