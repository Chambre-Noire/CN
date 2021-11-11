<template>
  <div class="align-center justify-center police-montserrat">
    <v-row class="mt-4 align-center justify-center big-text">
      DOSSIERS
    </v-row>
    <v-row align="center">
      <v-col cols="12" align="center">

        <v-card
            v-for="item in reversedArticles()"
            v-bind:key="item"
            elevation="12"
            width="70%"
            xs12
        >
          <v-card-title class="align-center justify-center text-break" v-text="item.title"/>
          <v-divider></v-divider>
          <v-row class="mb-7 mx-3">
            <v-col lg="4" md="5" cols="12">
                <v-img
                    :src="item.src"
                    :lazy-src="item.src"
                />
            </v-col>

            <v-col lg="8" md="7" sm="12">
              <v-card-subtitle v-text="abbreviateDescription(item.subtitle)"/>
              <router-link :to="{name: 'dossier', params: {id: item.id}, props:{id: item.id}}">
                <v-btn dark>
                  LIRE PLUS
                </v-btn>
              </router-link>
            </v-col>
          </v-row>

          <v-divider class="mb-4"></v-divider>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  name: 'Dossiers',
  components: {
  },
  data() {
    return {
      background: {
        backgroundColor: "black"
      },
      drawer: false,
      hover: false,
      selectedArticle: {},
      dossiers: [
        {
          title: 'Retour sur la prétendue « leçon de cinéma » de Mathieu Kassovitz',
          id: 1,
          src: require('@/assets/image/Retour sur la prétendue _leçon de cinéma_ de Mathieu Kassovitz (crédits _ Konbini).jpg'),
          hover: false,
          subtitle:
          "Depuis trois ans que Konbini invite dans ses video club des acteurs et réalisateurs plus ou moins éminents du secteur cinématographique, rares sont les chevilles à s’être autant prises dans le tapis que celles de Mathieu Kassovitz..."
        },
      ],
    }
  },

  methods: {

    abbreviateDescription(str) {
      let num = 300
      if (str.length > num) {
        return str.slice(0, num) + "...";
      } else {
        return str;
      }
    },

    expandArticle() {
    },

    reversedArticles() {
      let reverse = []
      for (let i = 0; i < this.dossiers.length; i++) {
        reverse[i] = this.dossiers[this.dossiers.length - 1 - i]
      }
      return reverse
    }
  },
}
</script>

<style>
.big-text {
  font-size: 30px;
  font-weight: bold;
}
</style>