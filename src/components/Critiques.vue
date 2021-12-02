<template>
  <div class="align-center justify-center police-montserrat">
    <v-row class="mt-4 align-center justify-center big-text">
      CRITIQUES
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
                <router-link :to="{name: 'article', params: {id: item.id}, props:{id: item.id}}">
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
  name: 'Critiques',
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
          title: 'Le désert des Tartares : souvenirs rêvés d’un cinéma européen flamboyant',
          id: 4,
          src: require('@/assets/image/Le desert des Tartares (Copyright Pathe).png'),
          hover: false,
          subtitle:
              "La filmographie de Valério Zulini symbolise la flamboyance d’un certain cinéma européen, qui brille dans les années 60 et 70. Il n’est alors pas rare de voir d’immenses acteurs français dirigés par les plus prestigieux auteurs italiens : Alain Delon, Jean-Louis Trintignant, Philippe Noiret, et bien d’autres, au sein de films ne sont plus tant français ou italiens, qu’européens. Le Désert des Tartares, dernière œuvre de Valério Zulini, s’inscrit dans cette tradition, dans ce qu’elle a de meilleur. Dès le générique, difficile de ne pas être frappé par la diversité du casting :  Jacques Perrin, Jean-Louis Trintignant et Philippe Noiret, tous trois français, \n " +
              + "...",
        },
        {
          title: 'Police Story III : Supercop – La géopolitique du coup de poing',
          id: 5,
          src: require('@/assets/image/Police Story III - Supercop (Copyright Swift productions).jpg'),
          hover: false,
          subtitle:
              "Police Story est une saga culte du cinéma hongkongais : après un premier opus remarqué, en 1985, la série aura trois suites, un spin-off et deux reboots[1]. Sans avoir la fraîcheur de Police Story ni autant de moments de bravoure que Police Story 2, le troisième volet est pourtant un sympathique film d’action doublé d’un passionnant objet politique.\n" +
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
          title: 'Cry Macho : Le dernier Géant a désormais le dos courbé',
          id: 7,
          src: require('@/assets/image/Cry Macho (Copyright Warner Bros France).jpeg'),
          hover: false,
          subtitle:
          'Le dernier Géant a désormais le dos courbé, la diction moins fluide, le regard plus doux. Dans Cry Macho, il raconte plus ou moins la même histoire que depuis 30 ans, celle d’un héros blessé, rangé loin du monde, qui se redécouvre une humanité au contact des autres. Cette fois-ci, c’est au Mexique qu’il va récupérer le fils d’un ami, pour le ramener au Texas. Une proposition des plus simples, claire comme un aller-retour, qui n’est évidemment qu’un argument : ce que veut le spectateur, c’est voir le beau visage ridé d’Eastwood, et Clint le sait bien. Tout n’est que prétexte à voir une légende tenir debout, continuer d’avancer et de se battre – contre l’injustice, contre la tristesse, contre le temps. D’aucuns reprocheront qu’ici, on a du mal à croire que ce personnage assomme un voyou d’un coup de poing. Lors d’une scène équestre, on voit clairement que ce n’est pas lui sur le cheval. Et pourtant, qu’importe : nous ne sommes pas venu pour voir le Callahan de l’Inspecteur Harry, nous sommes venu voir un homme âgé vivre comme s’il avait dix ans de moins.'
              + "...",
        },
        {
          title: 'La Passion selon Scorsese : mort et renaissance du cinéma dans Casino',
          id: 8,
          src: require('@/assets/image/Casino1 - Copyright © Universal Pictures.jpg'),
          hover: false,
          subtitle:
          'Martin Scorsese est un cinéaste animé d’une pulsion morbide. Ses protagonistes sont empreints d’une violence débordante, toute sa filmographie est animée d’une vitesse enivrante, comme si le cinéaste avait peur de perdre le moindre instant, la moindre image. Même dans des œuvres moins survoltées, la mort rôde toujours, que ce soit dans les conventions de grands-messes bourgeoises du Temps de l’innocence ou les centaines de cadavres habillés de pourpre que le jeune dalaï-lama de Kundun déplore.'
          + "..."
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
      for (let i = 0; i < this.articles.length; i++) {
        reverse[i] = this.articles[this.articles.length - 1 - i]
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