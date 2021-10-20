<template>
  <div :style="background" class="police-montserrat">
    <v-row class="mx-3 justify-center">
      <v-col xs="12">
        <v-card class="elevation-0" max-width="720">
          <v-card-title
              class="justify-center align-center font-weight-bold text_medium"
              v-text="selectedArticle.title"
          ></v-card-title>
          <v-col cols="12" class="justify-center align-center text-center">
            <v-img
                :src="selectedArticle.src"
                :lazy-src="selectedArticle.src"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0">
                  <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-card>
      </v-col>

      <v-col md6 class="mt-4 mr-8">
        <div
            class="font-weight-bold text_big text-center"
            v-text="'Derniers articles'"
        ></div>
        <v-spacer class="mt-8"></v-spacer>
        <v-card
            v-for="(item) in lastThreeArticles()"
            v-bind:key="item"
            xs12
            @mouseover="selectArticle(item)"
            @mouseleave="unselectArticle(item)"
            @click="goToArticle(item.id)"
            dark
            max-height="8000"
            max-width="780"
        >
          <v-card-title
              class="text_medium"
              v-text="item.title"

          ></v-card-title>
          <v-divider></v-divider>
          <v-card-subtitle v-if="!item.hover" v-text="abbreviateDescription(item.subtitle)"></v-card-subtitle>
          <v-card-subtitle v-else style="cursor: pointer" v-text="(item.subtitle)"></v-card-subtitle>
          <v-divider></v-divider>
        </v-card>
      </v-col>
    </v-row>

    <v-divider class="mt-15 mb-15"></v-divider>
    <!--      bande avec humeur de la semaine-->

    <v-row class="mb-8 mx-15">
      <v-col cols="12" class="text-center">
        <v-btn elevation="0">
          EDITORIAL
        </v-btn>
      </v-col>
      <v-col lg="2" md="2" sm="0" xs="0"></v-col>
      <v-col lg="4" md="4" cols="12" class="text-justify">
        Chambre Noire. Deux mots apparemment innocents qui, ici, portent pourtant en eux une triple connotation.
        La chambre noire, c’est d’abord cet instrument optique, lointain ancêtre de la photographie, qui permettait de projeter une lumière externe au sein d’une boîte trouée.
        La chambre noire renvoie aussi de façon plus primitive à l’enfance et plus particulièrement à cette pièce que nous nous plaisions tous à rejoindre avant de nous endormir.
      </v-col>
      <v-col lg="4" md="4" cols="12" class="text-justify">
        Cette pièce-refuge où l’imagination d’histoires nous réconfortait face à l’aridité du monde réel.
        La chambre noire, c’est enfin la salle obscure de cinéma, véritable temple cinéphile où tant de passions, de déceptions et de sentiments s’affrontent.
        A l’heure où l’avenir des salles de cinéma est plus que jamais menacé, nous tenons à célébrer toutes ces chambres noires à travers la création de ce site.
      </v-col>
      <v-col lg="2" md="2" sm="0" xs="0"></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},

  created() {
    this.selectedArticle = this.articles[this.articles.length - 1]
  },
  data() {
    return {
      background: {
        backgroundColor: "white"
      },
      drawer: false,
      hover: false,
      selectedArticle: {},
      articles: [
        {
          title: 'Mank : Vérités et mensonges chez David Fincher',
          id: 1,
          src: require('@/assets/image/Mank (Copyright Netflix).jpg'),
          hover: false,
          subtitle: "Risquons-nous à un aphorisme : tout cinéphile connaît Orson Welles. Sa filmographie est fabuleusement imparfaite, sa personnalité est hors-norme, et son Citizen Kane est considéré comme un des meilleurs films de l’histoire du cinéma. Herman J. Mankiewicz est beaucoup moins connu : co-auteur du scénario du premier film de Welles, il a une carrière discrète bien qu’importante. C’est un scénariste de studio, qui a signé et co-signé des dizaines de scripts, étant crédité ou non au générique, en plein âge d’or hollywoodien. En 1940, il s’agit donc d’une figure vieillissante et oubliée, face à un jeune Orson Welles en pleine ascension. Ce dernier est d’ailleurs présenté comme un imposteur, colérique et tortionnaire, qui profite du génie de Herman Mank’ pour s’accaparer le feu des projecteurs…\n"
        },
        {
          title: 'Préparez vos mouchoirs : “le mec à la caméra, c’est pas un manchot !',
          id: 2,
          src: require('@/assets/image/Préparez vos mouchoirs (Copyright Studio Canal).jpg'),
          hover: false,
          subtitle:
              "1974: Les Valseuses n’est pas le premier film de Bertrand Blier, mais il marque à la fois le début du style inégalable du cinéaste et la révélation de deux acteurs parmi les plus talentueux de leur génération, Patrick Dewaere et Gérard Depardieu. Trois années seulement se sont écoulées quand Préparez vos mouchoirs sort en salles, mais la carrière des trois hommes a bien évolué entre-temps. Blier a sorti Calmos, excellente farce politiquement incorrecte, mais à l’époque très mal perçue par la critique et le public. Dewaere est désormais reconnu pour son talent, tournant notamment aux côtés d’un Lino Ventura vieillissant (dans Adieu Poulet d’Yves Boisset), tandis que Depardieu est devenu une star internationale, tournant chez Claude Sautet comme chez\n"
              + "..."
        },
        {
          title: 'Masques : le carnaval bourgeois de Noiret',
          id: 3,
          src: require('@/assets/image/Masques (Copyright MK2).png'),
          hover: false,
          subtitle:
              "Scruter l’hypocrisie bourgeoise est un exercice qui s’est imposé comme le maître mot de la filmographie de Claude Chabrol. Qu’il collabore avec Philippe Noiret, fidèle représentant d’une certaine idée de la bourgeoisie française, s’impose comme une évidence, bien que les deux hommes n’aient tourné ensemble qu’une seule fois. Masques ne compte pas parmi les plus mémorables œuvres de son auteur, mais joue brillamment avec l’image que peut avoir le spectateur de Noiret.\n"
              + "..."
        },
        {
          title: 'Le désert des Tartares : souvenirs rêvés d’un cinéma européen [...]',
          id: 4,
          src: require('@/assets/image/Le desert des Tartares (Copyright Pathe).png'),
          hover: false,
          subtitle:
              "La filmographie de Valério Zulini symbolise la flamboyance d’un certain cinéma européen, qui brille dans les années 60 et 70. Il n’est alors pas rare de voir d’immenses acteurs français dirigés par les plus prestigieux auteurs italiens : Alain Delon, Jean-Louis Trintignant, Philippe Noiret, et bien d’autres, au sein de films ne sont plus tant français ou italiens, qu’européens. Le Désert des Tartares, dernière œuvre de Valério Zulini, s’inscrit dans cette tradition, dans ce qu’elle a de meilleur. Dès le générique, difficile de ne pas être frappé par la diversité du casting :  Jacques Perrin, Jean-Louis Trintignant et Philippe Noiret, tous trois français, \n "
              + "...",
        },
        {
          title: 'Police Story III : Supercop – La géopolitique du coup de poing',
          id: 5,
          src: require('@/assets/image/Police Story III - Supercop (Copyright Swift productions).jpg'),
          hover: false,
          subtitle:
              "Police Story est une saga culte du cinéma hongkongais : après un premier opus remarqué, en 1985, la série aura trois suites, un spin-off et deux reboots[1]. Sans avoir la fraîcheur de Police Story ni autant de moments de bravoure que Police Story 2, le troisième volet est pourtant un sympathique film d’action doublé d’un passionnant objet politique."
              + "...",
        },
        {
          title: 'Toute la mémoire du monde : fragments d’un récit universel',
          id: 6,
          src: require('@/assets/image/Toute la mémoire du monde (copyright Les films de la Pléiade).jpg'),
          hover: false,
          subtitle:
              '« Parce que leur mémoire est courte, les hommes amassent d’innombrables penses-bêtes ». C’est avec cette citation non dénuée d’un certain humour qu’Alain Resnais ouvre Toute la mémoire du monde, un documentaire d’une vingtaine de minutes consacré à la Bibliothèque Nationale de France. En 1956, le cinéaste est déjà l’auteur d’une dizaine de courts et de moyens-métrages, formats qu’il délaissera peu à peu pour se consacrer à la réalisation de longs-métrages. En ressort une filmographie longue et cohérente, placée sous un thème en particulier, celui de la mémoire. Il en est d’ailleurs question dans les deux documentaires qui précèdent Toute la mémoire du monde : la mémoire de la Shoah dans Nuit et brouillard, et la mémoire patrimoniale volée aux pays africains colonisés, dans Les Statues meurent aussi.\n' +
              'La bibliothèque nationale,'
              + "...",
        },
        {
          title: 'Retour sur la prétendue « leçon de cinéma » de Mathieu \nKassovitz',
          id: 101,
          src: require('@/assets/image/Retour sur la prétendue _leçon de cinéma_ de Mathieu Kassovitz (crédits _ Konbini).jpg'),
          hover: false,
          subtitle:
              'Cela fait désormais plus de deux ans que le média en ligne Konbini propose sur sa chaîne youtube ses video club. Inspirées par les Closet Picks de Criterion, ces capsules vidéo mettent en scène un réalisateur ou un acteur du secteur cinématographique en train de déambuler entre les rayons d’une boutique de location de DVD pour y cueillir certaines œuvres afin d’en partager l’intérêt ou non. Des artistes de renom ont ainsi ou se prêter au jeu de Konbini : Claire Denis, Gaspar Noé, Charlotte Gainsbourg ou même Nicolas Winding Refn.\\n\' +\n' +
              '              \'Le 22 novembre 20',
        },
      ],
    }
  },

  methods: {

    abbreviateDescription(str) {
      let num = 250
      if (str.length > num) {
        return str.slice(0, num) + " [...]";
      } else {
        return str;
      }
    },

    selectArticle(article) {
      this.selectedArticle = article
      article.hover = true
    },

    unselectArticle(article) {
      article.hover = false
    },

    goToArticle(id) {
      if (id < 100) {
        this.$router.push({name: 'article', params: {id: id}, props: {id: id}})
      }
      if (id > 100) {
        id -= 100
        this.$router.push({name: 'dossier', params: {id: id}, props: {id: id}})
      }
    },

    lastThreeArticles() {
      let last = this.articles.length - 1
      let lastArticle = []
      let i = 0

      for (i = 0; i < 3; i++) {
        lastArticle[i] = this.articles[last - i]
      }
      return lastArticle
    }
  }
}
</script>

<style>

.text_big {
  font-size: 20px;
}

.text_medium {
  font-size: 16px;
  word-break: break-word;
}
</style>
