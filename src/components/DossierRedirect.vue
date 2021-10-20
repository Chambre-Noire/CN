<template>
    <span class="bigger-text police-montserrat">
      <v-row v-for="dossier in dossiers" v-bind:key="dossier">
        <v-row v-if="$route.params.id === dossier.id" align-center>
          <v-col cols="3" class="text-center mt-4">
            <router-link to="/dossiers">
              <v-btn>
                <v-icon>mdi-arrow-left</v-icon>
                retour aux dossiers
                </v-btn>
            </router-link>
          </v-col>
          <v-col cols="6" class="justify-center text-center mt-4">
            <span class="bigger-text-title mt-4">
                {{ dossier.title }}
              </span>
              <v-spacer class="mb-3"></v-spacer>
            <v-row class="mb-1 mt-4 justify-center">
                <v-img
                    :src="dossier.src"
                    max-height="400px"
                    max-width="550px"
                />
              <v-card-text v-text="dossier.copyright" class="copyright font-italic"></v-card-text>
            </v-row>
            <v-row>
              <v-row v-for="text in formatText(dossier.text)" v-bind:key="text">
                <v-card-text v-text="text" class="text-justify bigger-text"/>
              </v-row>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-row v-for="text in formatText(dossier.subtext)" v-bind:key="text">
                <v-card-text v-text="text" class="text-justify"/>
              </v-row>
            </v-row>

          </v-col>
          <v-col cols="3"/>
        </v-row>
      </v-row>
        <v-btn
            v-scroll="onScroll"
            v-show="fab"
            fab
            dark
            fixed
            right
            bottom
            @click="toTop"
            class="mb-8 mr-16"
        >
          <v-icon>mdi-arrow-up</v-icon>
        </v-btn>
    </span>
</template>

<script>

export default {
  name: "DossierRedirect",

  data: function () {
    return {
      dossiers: [
        {id: 0,},
        {
          id: 1,
          title: "Retour sur la prétendue « leçon de cinéma » de Mathieu Kassovitz",
          text:
          '\n' +
              'Cela fait désormais plus de deux ans que le média en ligne Konbini propose sur sa chaîne youtube ses video club. Inspirées par les Closet Picks de Criterion, ces capsules vidéo mettent en scène un réalisateur ou un acteur du secteur cinématographique en train de déambuler entre les rayons d’une boutique de location de DVD pour y cueillir certaines œuvres afin d’en partager l’intérêt ou non. Des artistes de renom ont ainsi ou se prêter au jeu de Konbini : Claire Denis, Gaspar Noé, Charlotte Gainsbourg ou même Nicolas Winding Refn.\n' +
              'Le 22 novembre 2020, la chaîne youtube de Konbini publie un nouvel épisode de video club au titre grinçant : « Mathieu Kassovitz nous donne une leçon de cinéma ». Il ne s’agira pas ici de critiquer la figure de Mathieu Kassovitz. Qu’on apprécie l’homme ou pas, force est de constater sa qualité d’acteur et l’importante place qu’il occupe au sein du paysage audiovisuel français, si ce n’est mondial (l’acteur révèle d’ailleurs au cours de l’épisode qu’il jouera dans le prochain film de Terrence Malick : The Way of the Wind). En cela, son apparition dans l’émission n’est pas surprenante. Le problème se trouve plutôt dans le propos qu’il avance et dans la manière avec laquelle ce discours devient, par le truchement éditorial de Konbini, parole d’évangile.\n' +
              'Sur les 41 minutes qui composent l’épisode, Matthieu Kassovitz en passe approximativement 30 à défendre sa conception d’un cinéma artisanal, épargné du digital (c\'est ainsi qu’il appelle le numérique) et de ses effets spéciaux informatiques. Au cours d’un manichéisme affolant, l’acteur français balaie d’un coup de main tout un pan du cinéma pour en idolâtrer un autre. A l’entendre, tout film utilisant la CGI se transformerait automatiquement en une soupe numérique imbuvable. D’ailleurs, Mathieu Kassovitz ne s’épargne pas non plus lui-même et avoue ressentir une grande honte en repensant à une scène de La Haine ayant eu recours au numérique pour effacer une ombre d’hélicoptère sur un bâtiment.\n' +
              'N\'est-ce pas là un constat bien précipité ? S’il est flagrant que les effets numériques sont au cœur de nombreuses bouillies visuelles toutes plus laides et fades les unes que les autres (Avengers Endgame), le digital est-il pour autant dépourvu de tout intérêt ? A en croire Kassovitz, un trucage physique raté vaudrait mieux qu’un effet numérique réussi uniquement parce qu’il proviendrait d’une réelle volonté artisanale et artistique. A cela, deux réponses. Premièrement, moult auteurs se sont prêtés au jeu du numérique pour faire naître leur art. L’Ad Astra de James Gray, que Matthieu Kassovitz dénigre sans réel argument, est un exemple parmi tant d’autres de films qui utilisent l’évolution digitale pour faire avancer leur récit. Deuxièmement, la création d’effets spéciaux numériques sur ordinateurs n’est-elle pas aussi une forme d’artisanat ? Au-delà de la boutade de Kassovitz sur la carte graphique au cours de laquelle la question de la faisabilité d’un effet spécial est réduite à l’utilisation ou non d’une carte graphique suffisante, il est évident que le responsable des effets spéciaux numériques d’un film doit redoubler de savoir-faire, d’ingéniosité, de patience et de contrôle. Mathieu Kassovitz l’avoue d’ailleurs lui-même lorsqu’il explique comment les Wachowski ont réussi à tourner la scène du bullet-time dans Matrix. Le réalisateur de Babylon A.D. serait-il donc en train de feindre de croire que l’ordinateur et la carte graphique ne font pas tout ? Certes, cet artisanat a peut-être moins de charme et les anecdotes sur la fabrication du film n’en sont que moins alléchantes. Mais son utilisation est toujours liée à une direction artistique précise. Le numérique est un moyen et non une fin en soi, tout comme le dessin n’est pas un genre mais une technique.\n' +
              'Cela nous amène au point le plus important de notre développement. Pour Mathieu Kassovitz, un film est bon lorsque l’on se demande, en plein visionnage, comment le réalisateur a fait pour filmer une scène. Un plan, peu importe sa place dans l’intrigue ou sa portée émotionnelle, sera un bon plan s’il a été dur à faire ou, encore mieux, s’il n’a jamais été fait.\n' +
              'Bien triste vision du septième art que celle-ci. Depuis la fin du XIXème siècle, le cinéma est l’art de l’illusion. Nous croyons voir du mouvement là où ne sont projetées devant nous qu’une succession rapide d’images fixes (24 images par seconde précisément). Au cinéma, tout est faux, nous le savons. « Le cinéma, c’est le mensonge 24 fois par seconde » disait Brian de Palma. Il est donc vain, en tant que spectateur, d’essayer de comprendre comment ce qui se passe sous nos yeux a été fabriqué. Le public de cinéma est de toute façon toujours dupé. Mais cette tromperie existe en ce qu’elle favorise l’immersion du spectateur dans le film. D’illusion, le cinéma devient alors un art d’émotion et c’est en cela qu’il est si puissant. Frank Capra disait vrai en affirmant qu’il n’y a que le cinéma pour accaparer l’attention d’un public silencieux dans le noir pendant deux heures. Échapper à la dure réalité pendant quelques instants, telle est la magnifique possibilité proposée par le septième art. Pourquoi donc Mathieu Kassovitz veut-il y insuffler des interrogations pragmatiques et techniques ?\n' +
              'Il est bien sûr enrichissant d’aborder ces aspects techniques après le visionnage du film et cette glose forme d’ailleurs le cœur de l’analyse filmique et d’une certaine critique où il devient passionnant de comprendre comment le réalisateur a fait pour faire passer telle ou telle émotion. On essaie alors de mettre des mots sur ce que l’on vient de ressentir et sur les moyens techniques qui ont été employés.\n' +
              'Mais pendant le film, laissons-nous porter. Laissons-nous être impressionnés, déçus, énervés, surpris, attendris, ennuyés, vexés, amoureux..\n' +
              'En fait, la vision du cinéma de Mathieu Kassovitz est celle d’un technicien. Et celui-ci ne s’en cache pas : « J’ai 80% de moi qui voit les films comme un ingénieur et 20% comme un artiste » (27min04), assène-t-il fièrement au journaliste. Aveu terrible qui résume toute la vidéo. Pour Kassovitz le cinéma n’est pas un art, ou tout au plus un art forain, un parc d’attractions, pour reprendre les termes de Martin Scorsese à propos des films Marvel. Entre « l’art et l’industrie » qu’André Malraux conjuguait à propos du cinéma, Mathieu Kassovitz semble avoir choisi son camp.\n' +
              'De toute évidence, Mathieu Kassovitz ne croit plus au cinéma, en témoigne sa dernière sortie sur le plateau de BFMTV au cours de laquelle il compare la future extinction des tigres à celles des cinémas, comme s’il n’était pas possible de se battre pour que l’un et l’autre survivent.\n' +
              'Au début du vidéo club, l’acteur et réalisateur français avoue d’ailleurs ne plus regarder de films actuels. Mathieu Kassovitz a bien évidemment le droit d’avoir cette approche du cinéma, nous ne remettons pas cela en cause. Mais à partir du moment où celui-ci avoue ne plus s’y intéresser, quelle est sa légitimité à nous « donner la leçon » ?\n' +
              'Lucas Créac’h',
          subtext: '',
          src: require('@/assets/image/Retour sur la prétendue _leçon de cinéma_ de Mathieu Kassovitz (crédits _ Konbini).jpg'),
          copyright: 'Copyright © Konbini',
        },
      ],
      fab: false,
    }
  },
  created() {
  },

  methods: {
    formatText(text) {
      console.log(text)
      return text.split("\n")
    },
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop() {
      this.$vuetify.goTo(0)
    },
  }
}


</script>

<style>
.bigger-text-title {
  font-size: 27px;
  font-weight: bold;
}

.bigger-text {
  font-size: 17px;
}

.copyright {
  font-size: 10px;
}
</style>