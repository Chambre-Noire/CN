<template>
    <span class="bigger-text police-montserrat">
      <v-row v-for="article in articles" v-bind:key="article">
        <v-row v-if="$route.params.id === article.id" align-center>
          <v-col lg="3" md="3" cols="12" class="text-center mt-4">
            <router-link to="/critiques">
              <v-btn>
                <v-icon>mdi-arrow-left</v-icon>
                retour aux critiques
                </v-btn>
            </router-link>
          </v-col>
          <v-col cols="12" class="justify-center text-center mt-4">
            <span class="bigger-text-title mt-4">
                {{ article.title }}
            </span>
            <v-spacer class="mb-3"></v-spacer>
              <v-row class="mb-1 mt-4  justify-center align-center text-center">
                <v-img
                    :src="article.src"
                    max-width="450px"
                />
              </v-row>
              <v-col col="10">
                <v-card-text v-text="article.copyright" class="copyright font-italic"></v-card-text>
              </v-col>
            <v-row class="justify-center">
              <v-col cols="10" v-for="text in formatText(article.text)" v-bind:key="text">
                <v-card-text v-text="text" class="justify-center text-center text-justify bigger-text break-words"/>
              </v-col>
            </v-row>
             <v-row class="justify-center">
              <v-col cols="10">
                <v-card-text v-text="article.author" class="text-justify bigger-text break-words"/>
              </v-col>
             </v-row>
            <v-divider></v-divider>
            <v-row class="justify-center">
              <v-col cols="10" v-for="text in formatText(article.subtext)" v-bind:key="text">
                <v-card-text v-text="text" class="text-justify break-words"/>
              </v-col>
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
// import article1 from '!raw-loader!/src/assets/articles/helloworld.txt';

export default {
  name: "ArticleRedirect",

  data: function () {
    return {
      // letter: article1.split("\n\n")
      articles: [
        {id: 0,},
        {
          id: 1,
          title: "Mank : Vérités et mensonges chez David Fincher",
          text:
          'Risquons-nous à un aphorisme : tout cinéphile connaît Orson Welles. Sa filmographie est fabuleusement imparfaite, sa personnalité est hors-norme, et son Citizen Kane est considéré comme un des meilleurs films de l’histoire du cinéma. Herman J. Mankiewicz est beaucoup moins connu : co-auteur du scénario du premier film de Welles, il a une carrière discrète bien qu’importante. C’est un scénariste de studio, qui a signé et co-signé des dizaines de scripts, étant crédité ou non au générique, en plein âge d’or hollywoodien. En 1940, il s’agit donc d’une figure vieillissante et oubliée, face à un jeune Orson Welles en pleine ascension. Ce dernier est d’ailleurs présenté comme un imposteur, colérique et tortionnaire, qui profite du génie de Herman Mank’ pour s’accaparer le feu des projecteurs…\n' +
              'Seulement, dans les faits, Mankiewicz n’était pas vraiment vieillissant : à l’époque, il est au début de la quarantaine, contrairement à celui qui l’incarne, Gary Oldman, âgé de plus de soixante ans. Mais qu’importe la différence d’âge, l’acteur est impeccable, à son habitude. Quant à Orson Welles, il a beau être un personnage plus grand que nature, il n’était peut-être pas si détestable. Pas plus qu’il n’était l’usurpateur qu’on décèle sous la caméra de Fincher… En effet, l’argument principal de Mank est que le scénario du film culte est tout droit sorti de l’imagination de Mankiewicz, Welles s’étant contenté d’enlever certains éléments du script. Un procès d’intention plus qu’une vérité historique, puisque cette théorie est exclusivement basée sur un article de Pauline Kael, « Raising Kane », paru en 1971 dans le New Yorker. Et bien que Kael ait été une critique importante pour le cinéma américain des années 1970, n’oublions pas qu’elle n’avait ni parole d’évangile, ni même une éthique proprement journalistique[1] !\n' +
              'En effet, de nombreux historiens du cinéma et proches de Welles ont démontré, sources à l’appui, que la relation entre Mankiewicz et le cinéaste n’était pas aussi manichéenne que Kael voulait bien nous le faire croire[2]. Le fait que Fincher ne remette pas en cause cette pseudo-vérité est ainsi assez déstabilisant : il nous a habitué à traiter le mensonge avec brio, en mettant la question de la vérité au cœur du nœud dramatique de la plupart de ces films, de Fight Club à Gone Girl, de The Game à The Social Network. Dans Mank, pourtant, on trouve assez peu de contrepoints au récit qui nous est raconté : le film ressemble peut-être trop à un simple biopic, éminemment sympathique certes, mais trop classique pour exalter le spectateur.\n' +
              'L’écriture de Citizen Kane n’est d’ailleurs que la partie émergée de l’iceberg Mank : David Fincher passe une grande partie du film à explorer la vie du scénariste. C’est avec un certain plaisir qu’on évolue ainsi dans les grands studios de l’âge d’or de ce cinéma, en partant à la rencontre de grands noms tels Josef Stenberg et David O. Selznick. On sent la méticulosité et l’amour du cinéma de Fincher quand il est question de se rendre sur le tournage d’un western, ou encore quand le nabab Louis B. Mayer implore (hypocritement, il en va de soi) ses employés à baisser leurs salaires pour que le studio puisse encaisser la crise économique sereinement. Tout au long de ces épisodes de la vie de « Mank », on apprend ainsi un peu scolairement ce qui l’a inspiré pour forger le personnage odieux de Charles Foster Kane – en l’occurrence, un magnat de la presse bien réel, William Randolph Hearst. Plus qu’un hommage à Mankiewicz, c’est peut-être finalement un hommage à son père que Fincher met en scène. Jack Fincher, décédé en 2003, n’a en effet signé qu’un seul script pour le cinéma, celui de Mank. Et dans le sillage d’un Mankiewicz au talent occulté par la machine hollywoodienne, peut-être peut-on déceler un Jack Fincher qui n’aura jamais pu intégrer le cinéma de son vivant…\n' +
              'Et du côté de l’aspect « écriture » en lui-même, Mank s’avère très bien écrit, tant dans ses dialogues – on pense notamment à un chassé-croisé d’opinions politiques lors d’une fête donnée chez William R. Hearst – que dans sa construction. Mais du côté pure mise-en-scène, David Fincher semble tiraillé entre deux perspectives : d’un côté une forme minutieuse, discrète mais rudement efficace, de l’autre une patine vintage quelque peu excentrique. Cette discrétion s’avère surprenante pour un réalisateur connu, entre autres, pour son extrême méticulosité des cadres, bien qu’elle ait le mérite de mettre en valeur la belle lumière échancrée du film. Mais surtout, certains effets font « too-much » et ont de quoi décontenancer : citons les indications typographiques mimant (jusqu’au son) une machine à écrire, ou bien des fausses brûlures de cigarettes présentent tout au long du film. En somme, des clins d’œil qui font tâche dans un film entièrement filmé en numérique, et s’assumant comme tel[3].\n' +
              'A la fin de la projection (domestique), on se retrouve ainsi nous-même dans une position un peu inconfortable : Mank est incontestablement un bon film, mais loin d’être le plus excitant de la filmographie de son réalisateur. Il est d’ailleurs amusant de le mettre en parallèle au Ave Cesar des frères Coen : tous deux sont des essais qui se passionnent à filmer une industrie dont le fonctionnement a radicalement muté. Mais une fois terminé l’agréable voyage dans un âge d’or révolu, le spectateur reste un peu sur sa faim…\n',
          author: ' Nicolas Santaliestra',
          subtext:
          '[1] Ses critiques étaient avant tout des papiers éminemment subjectifs, tantôt élégiaques, tantôt assassins. Parmi ses bêtes noires, on retrouvait d’ailleurs Stanley Kubrick, envers qui Kael s’était forgé une opinion bien précise. Dans sa critique de l’époque, elle qualifiait ainsi 2001 : l’odyssée de l’espace de daube commerciale, film réalisé par un amateur sans imagination. On peut retrouver son article « Raising Kane » sur le site du New Yorker : https://www.newyorker.com/magazine/1971/02/20/raising-kane-i\n' +
              '[2] Voir notamment cette excellente vidéo, en anglais : https://www.youtube.com/watch?v=tnB8DscXraw\n' +
              '[3] Même si, évidemment, les « brûlures de cigarettes » qui indiquaient aux projectionnistes la nécessité de changer de bobine de pellicule font irrémédiablement penser chez Fincher à une scène de son culte Fight Club, dans lequel le personnage de Tyler Durden expliquait leur utilité.',
          src: require('@/assets/image/Mank (Copyright Netflix).jpg'),
          copyright: 'Copyright © Netflix',
        },
        {
          id: 2,
          title: "Préparez vos mouchoirs : “le mec à la caméra, c’est pas un manchot !",
          text:
            '1974 : Les Valseuses n’est pas le premier film de Bertrand Blier, mais il marque à la fois le début du style inégalable du cinéaste et la révélation de deux acteurs parmi les plus talentueux de leur génération, Patrick Dewaere et Gérard Depardieu. Trois années seulement se sont écoulées quand Préparez vos mouchoirs sort en salles, mais la carrière des trois hommes a bien évolué entre-temps. Blier a sorti Calmos, excellente farce politiquement incorrecte, mais à l’époque très mal perçue par la critique et le public. Dewaere est désormais reconnu pour son talent, tournant notamment aux côtés d’un Lino Ventura vieillissant (dans Adieu Poulet d’Yves Boisset), tandis que Depardieu est devenu une star internationale, tournant chez Claude Sautet comme chez Bernardo Bertolucci.\n' +
              ' \n' +
              'Pour autant, Préparez vos mouchoirs n’est pas une resucée du succès des Valseuses, mais une brillante affirmation du style d’un cinéaste à l’univers absurde et fantasque. Cette fois-ci, Gérard Depardieu et Patrick Dewaere ne sont plus les symboles d’une jeunesse désabusée, mais deux hommes qui ne comprennent rien à l’amour ; leur liberté, amoureuse et sexuelle, n’est plus un doigt d’honneur à la société, mais s’inscrit dans une volonté de comprendre l’autre. En l’occurrence, l’autre est ici une femme, Solange, interprétée par l’actrice canadienne Carole Laure. Si Bertrand Blier, dès Les Valseuses et encore plus avec Calmos, a été régulièrement taxé de misogynie, le procès d’intention est maladroit. En effet, dans Préparez vos mouchoirs, les protagonistes ne méprisent pas les femmes, loin de là : ils ne les comprennent pas, et c’est cette incompréhension qui mène ainsi à l’absurde, ligne directrice de la touche Blier.\n' +
              'Reprenons du début : dans une brasserie, Raoul / Gérard Depardieu se désole que sa femme Solange soit si triste avec lui. Pour remédier à cette tristesse existentielle, il décide de l’ “offrir” à Stéphane / Patrick Dewaere, un inconnu qui attend son plat à une table voisine… Ou plutôt, il « offre » Stéphane à sa femme, qui semble plus intéressée par l’inconnu que par son ennuyeux mari ! Dès cette première scène, la magie de Blier opère : les dialogues sonnent profondément justes alors même qu’ils illustrent une situation totalement décalée, et une banale scène de repas conjugal prend une tournure inattendue. Les premières minutes d’un film de Bertrand Blier sont souvent primordiales dans le sens où le cinéaste rechigne à une quelconque exposition, préférant installer les paradoxales règles absurdes qui vont régir toutes les scènes suivantes. Ici, c’est une passante prise à partie par Depardieu qui marque la rapide bascule du film dans une diégèse à l’inquiétante étrangeté ; plus tard, un voisin se plaignant d’un tapage nocturne va finir par intégrer la bande, presque naturellement Car chez Blier, on ne sait jamais où la scène suivante va nous emmener, et c’est là la grande force de son cinéma… ainsi que sa plus grande faiblesse. A force de découdre le fil de son récit, pour en faire une toile aux possibilités multiples, il arrive au cinéaste de se perdre. C’est le défaut flagrant de son dernier film en date, Convoi exceptionnel, qui n’arrivait en rien à retrouver la magie de sa filmographie, en exécutant une formule à l’image des deux acteurs principaux (Gérard Depardieu, encore lui, et Christian Clavier) : fatiguée. Au contraire, Préparez vos mouchoirs est d’une épatante limpidité, du début à la fin, mais l’exercice est réalisé avec une telle maestria que le spectateur n’est pas laissé sur le côté.\n' +
              'Ainsi, au bout d’une heure de film, la perspective change tout à fait : on passe du point de vue de Raoul & Stéphane à celui d’un enfant de 13 ans, auprès duquel Solange retrouve peu à peu le sourire. Un garçon tout juste adolescent ans qui tombe amoureux d’une femme qui approche la trentaine : il y a de quoi choquer, aujourd’hui encore plus qu’hier. Et pourtant ! La tournure que prend le film n’est pas choquante, car elle n’a pas une once de perversité en elle. Dérangeante et troublante, elle l’est : lorsque Christian déshabille Solange, le spectateur a de quoi être désarçonné, mais la scène, du point de vue de l’enfant, est exécutée avec un certaine douceur et curiosité qui empêche l’histoire de tomber dans le grivois. Car Solange arrive à conserver son contrôle sur l’adolescent, et la figure trouble de l’enfant surdoué  n’est au final là que pour renvoyer à l’échec de Raoul & Stéphane / Depardieu & Dewaere. Les deux hommes, empreints d’une telle masculinité, se révèlent profondément sensibles, maladroits même, et finissent par se faire damer le pion par un enfant au final plus mature qu’eux : quelle ironie !\n' +
              'Gérard Depardieu et Patrick Dewaere, eux qui apparaissent si confiants, si libres et irrévérencieux dans Les Valseuses, essaient ici de comprendre le monde. Cependant, loin d’avoir la froideur et le caractère calculateur de l’enfant surdoué, ils sont constamment ramenés à l’ordre par leurs émotions, presque malgré eux : l’un transi par l’admiration envers sa femme, l’autre constamment bouleversé par Mozart[1]. L’écoute du compositeur met le duo à nu, provoque des dialogues brillants de sincérité et de décalage (« Putain, le mec à la clarinette, c’est pas un manchot ! »)  et souligne ce qui fait le charme des deux interprètes. Car au final, ce qui nous touche dans Préparez vos mouchoirs, c’est peut-être aussi la sensibilité à fleur de peau des deux compères, l’implication émotive qu’ils mettent au service de leurs rôles respectifs. Acteurs et personnages finissent par se confondre, et une réplique de Patrick Dewaere, mort à 35 ans, n’en est que plus touchante : « tu parles… [Mozart,] le pauvre mec il est mort à 35 ans ! 35 ans, tu te rends compte de la perte … ».',
          author: ' Nicolas Santaliestra',
          subtext:
              '[1] Saluons d’ailleurs la belle partition de George Delerue, qui rythme la grande majorité du film. Un non-initié tel que l’auteur de ces lignes a d’ailleurs cru que la bande-originale du film était entièrement constituée de musiques de ce cher Amadeus.\n',
          src: require('@/assets/image/Préparez vos mouchoirs (Copyright Studio Canal).jpg'),
          copyright: 'Copyright © StudioCanal',
        },
        {
          id: 3,
          title: "Masques : le carnaval bourgeois de Noiret",
          text:
              'Scruter l’hypocrisie bourgeoise est un exercice qui s’est imposé comme le maître mot de la filmographie de Claude Chabrol. Qu’il collabore avec Philippe Noiret, fidèle représentant d’une certaine idée de la bourgeoisie française, s’impose comme une évidence, bien que les deux hommes n’aient tourné ensemble qu’une seule fois. Masques ne compte pas parmi les plus mémorables œuvres de son auteur, mais joue brillamment avec l’image que peut avoir le spectateur de Noiret.\n' +
              'Il est question d’une histoire des plus classiques, dans la droite lignée de beaucoup de Chabrol. Le long-métrage est ainsi une enquête, se déroulant en grande majorité au sein du manoir d’un célèbre présentateur de télévision, le bien nommé Christian Legagneur. Sous couvert d’écrire la biographie de ce dernier, un homme va enquêter sur la disparition d’une jeune fille s’étant évanouie dans la nature après un séjour dans le manoir… Héritage, huis clos, faux-semblants : pas de doute, on est dans la droite lignée d’un roman criminel à la Agatha Christie[1]. Chabrol, habitué du genre, en maîtrise avec brio les codes, signant ainsi un film peu original mais rudement efficace. Visuellement, on sent l’amour du cinéaste pour Hitchcock[2], multipliant les mouvements amples et les plans à la symbolique limpide, faisant ici aussi preuve d’efficacité, sans évidemment atteindre les sommets du maître.\n' +
              'Ce qui nous intéresse, dans Masques, c’est donc avant tout le traitement de la persona de Philippe Noiret[3]. Le personnage de Christian Legagneur, tel qu’il nous est présenté au début du film, rejoint ainsi en tout point la persona de Noiret : un grand gaillard éminemment sympathique, apprécié par des spectateurs, alliant une élégance bourgeoise et un côté « bon vivant ». La proximité se lit jusqu’à des éléments dont on ignore s’ils sont volontaires ou pas, certains pouvant être fortuits, d’autres semblant évidents. Citons ainsi la présence, dans un des rôles secondaires, de Monique Chaumette, actrice qui aussi est mariée à Noiret depuis les années 1960, et interprète ici la servante et assistante de Legagneur, complice de ses méfaits.\n' +
              'Une fois cette proximité établie entre le présentateur et son interprète, Claude Chabrol se fait un plaisir d’aller creuser sous le masque de Legagneur, pour en révéler l’hypocrisie. Le personnage principal cherche ainsi à démasquer cette figure aimée par tous, en menant son enquête, avançant narrativement par quelques poncifs et via une histoire d’amour en laquelle on ne croit pas un instant. Mais qu’importe le chemin, puisque le plaisir de Masques réside entièrement en Noiret. Lui qui excelle dans son registre habituel est tout aussi talentueux quand il s’agit de briser le vernis de la sympathie. Bertrand Tavernier, son plus fidèle collaborateur, l’a d’ailleurs bien compris : non content d’offrir à son « double de cinéma » parmi ses plus beaux rôles, il l’utilise souvent à contre-emploi, tel que dans l’incroyable Coup de Torchon, qui voit un sympathique et laconique « shérif » éliminer peu à peu ceux qu’il ne supporte plus.\n' +
              'Rarement l’acteur aura ainsi joué un rôle si inquiétant que dans Masques : là où dans Coup de Torchon il bénéficiait encore de la sympathie du public, il se révèle en véritable « méchant » chez Chabrol. On finit par craindre de le voir apparaître dans le reflet du moindre miroir, et même lorsqu’il n’est pas physiquement dans le cadre, Chabrol nous fait sentir son emprise par d’habiles astuces de mise-en-scène, que ce soit à travers une chaise vide ou au son d’un magnétophone.\n' +
              'Lorsqu’il se lance dans une ultime tirade, qui conclut le film, le personnage de Legagneur apparaît dans toute son antipathie, sans plus aucun masque. Pour Noiret, c’est un retour aux sources, ou plutôt à la source, celle du théâtre, lui qui a arpenté les planches pendants des années avant de les déserter pour se consacrer exclusivement au cinéma. En prononçant la dernière réplique, « je vous emmerde », on ressent presque la joie de l’acteur d’être revenu au jeu originel, à la fois théâtral et ludique. Et que le public se rassure : tout cela n’était que spectacle, comme l’indique l’écran de télévision qui s’éteint sur le visage du présentateur hagard, avant de laisser place au générique de fin.\n',
          author: ' Nicolas Santaliestra',
          subtext:
              '[1] Notons que l’autrice apparaît brièvement au détour d’une couverture de roman, Chabrol ne cachant pas son admiration / inspiration !\n' +
              '[2] Rappelons que dans les années 1950, Claude Chabrol, jeune journaliste aux Cahiers du cinéma, était tout aussi admiratif d\'Hitchcock que son collègue François Truffaut, les deux hommes ayant co-signé un long article ayant servi de prémisses au fameux Hitchcock / Truffaut.\n' +
              '[3] Comprendre : l’image de l’acteur auprès du public, générée au fil de sa carrière par sa filmographie comme par ses apparitions médiatiques.\n',
          src: require('@/assets/image/Masques (Copyright MK2).png'),
          copyright: 'Copyright © MK2',
        },
        {
          id: 4,
          title: "Le désert des Tartares : souvenirs rêvés d’un cinéma européen flamboyant",
          text:
              '\n' +
              'La filmographie de Valério Zulini symbolise la flamboyance d’un certain cinéma européen, qui brille dans les années 60 et 70. Il n’est alors pas rare de voir d’immenses acteurs français dirigés par les plus prestigieux auteurs italiens : Alain Delon, Jean-Louis Trintignant, Philippe Noiret, et bien d’autres, au sein de films ne sont plus tant français ou italiens, qu’européens. Le Désert des Tartares, dernière œuvre de Valério Zulini, s’inscrit dans cette tradition, dans ce qu’elle a de meilleur. Dès le générique, difficile de ne pas être frappé par la diversité du casting :  Jacques Perrin, Jean-Louis Trintignant et Philippe Noiret, tous trois français, mais aussi l’italien Vittorio Gassman, l’espagnol Fernando Rey, le suédois Max von Sydow ou encore l’allemand Helmut Griem… Qu’importe la nationalité des comédiens, puisque dans ce désert, il est question d’un empire européen fantasmé, et des fantômes d’ennemis rêvés…\n' +
              'Du western, le Désert des Tartares n’en a pas l’esthétique, mais il en possède l’âme : la frontière n’est ici pas à repousser jusqu’aux confins du désert, elle à conserver, immuable et déliquescente comme un empire en fin de vie. Le fort de Bastiano est ainsi désigné comme la frontière sud d’un « état du nord », seule limite qui sépare la civilisation de la barbarie. Ces barbares, justement, on ne les voit jamais, mais on les ressent constamment : il en est permanence question, dans les dialogues de soldats coincés dans ce fort. Ils cherchent à se convaincre de leur existence, tant pour se rassurer que pour jouer à se faire peur. L’arrivée des Tartares signerait un risque que l’Empire s’effondre, et donc qu’un rêve universel prenne fin. Mais à bien y réfléchir, quelle est la pire situation : craindre que la frontière tombe, ou se rendre compte que ladite frontière – et donc ceux qui la garde – n’a aucune raison d’être ?\n' +
              'Tout le long-métrage est ainsi placé sous le signe du trouble, de l’étrangeté, et donc par extension de l’onirisme. L’empire qui y est décrit n’a pas existé, mais demeure vraisemblable ; c’est un empire universel, sorti tout droit d’un rêve napoléonien. Tous les indices portent à confusion : ça et là sont disposés des portraits historiques, de Napoléon et d’un Empereur d’Autriche, tandis que la caserne aborde fièrement les couleurs du drapeau d’un empire passé, l’Autriche-Hongrie. La plupart des incidents qui rythment la vie du Fort Bastiano ont d’ailleurs un caractère mystérieux, si ce n’est mystique : un cheval venu du désert sans fin, ou une terrible maladie provoquée par l’ennui. Les différents personnages qui vont croiser le chemin du héros, un soldat gradé pensant n’être que de passage au fort , sont pour leur part introduits au loin, ou dans l’ombre. Ils existent bel et bien, mais au final sont comme coincés dans un rêve : ce sont des militaires qui ne font pas la guerre, piégés dans une citadelle hors du temps. Les repas qui se veulent festifs n’en sont que plus inquiétants, le raffinement des mets et les costumes d’un blanc immaculé venant se heurter à la déliquescence du fort – et par extension de l’Empire.\n' +
              'Tout cela ne serait rien sans l’élégance de la mise-en-scène, qui rejoint la tradition d’une certaine ampleur italienne : qu’ils filment des drames, des rêves ou des fresques historiques, des cinéastes comme Visconti, Fellini ou De Sica arrivent à insuffler du grandiose dans leurs œuvres. Il en est de même ici, Zulini donnant à chacun de ses plans une puissance visuelle, bien aidé de décors inédits sur grand écran. Le désert lui-même n’est pas celui auquel on est habitué au cinéma, il ne s’agit ni les sables du Sahara et du désert d’Arabie, ni du désert Américain. Tourné en Iran, Le Désert des Tartares profite des ruines d’une cité Perse pour sublimer les alentours du fort, renforçant là encore sa symbolique d’Empire à la fois immuable et hors du temps. Ne manque plus à l’addition que des dialogues concis, récités avec brios par un casting énuméré plus haut, et enfin une bande-originale riche en cuivres, signée par la seule personne à laquelle on peut penser dans de telles circonstances : Ennio Morricone, comme une évidence…\n',
          author: ' Nicolas Santaliestra',
          subtext: '\n',
          src: require('@/assets/image/Le desert des Tartares (Copyright Pathe).png'),
          copyright: 'Copyright © Pathé',
        },
        {
          id: 5,
          title: "Police Story III : Supercop – La géopolitique du coup de poing",
          text:
          'Police Story est une saga culte du cinéma hongkongais : après un premier opus remarqué, en 1985, la série aura trois suites, un spin-off et deux reboots[1]. Sans avoir la fraîcheur de Police Story ni autant de moments de bravoure que Police Story 2, le troisième volet est pourtant un sympathique film d’action doublé d’un passionnant objet politique.\n' +
              'Il faut dire que Police Story s’inscrit dans un paysage politique et culturel assez unique au monde. Hong Kong est un territoire relativement petit (moins de 8 millions d’habitants pour 1000km²), une ancienne colonie rétrocédée à la Chine en 1997 et restant plus ou moins autonome vis-à-vis de celle-ci jusqu’en 2050. La réalité est beaucoup plus complexe, mais retenons qu’il s’agit d’une sorte de cité-état à la culture singulière, possédant notamment un cinéma qui rayonne dans le monde à partir des années 1970. Avec le  premier Police Story, sorti en 1985, le cinéma hongkongais sort de ses traditionnels studios pour aller tourner dans les rues de la ville, l’année-même où Hong Kong élit son premier gouvernement libre. Le film, et sa suite, sont d’ailleurs de pures œuvres urbaines, qui explorent le territoire en toute liberté.\n' +
              'En 1992, pour Police Story III, on change à la fois de réalisateur - Jackie Chan laissant la place à Stanley Tong mais gardant la double casquette d’acteur-producteur - et de lieux. L’inspecteur Chan Ka kui, condamné à travailler dans la police routière pour avoir fait trop de zèle lors des précédents opus, est appelé à la rescousse par une hiérarchie qui a besoin de déjouer un trafic de drogue international, avec l’aide d’Interpol. Chan, talentueux mais assez maladroit, est ainsi envoyé en Chine continentale, aux côtés d’une inspectrice de la police chinoise, Jessica Yang (Michelle Yeoh). Dès le début du film, le héros est mis face à un monde à la fois étranger et familier : le géant chinois possède une armée nombreuse, un paysage plus rural, et les différences culturelles sont un terreau fertile à l’humour. Parmi celles-ci, une des plus importantes est le fait que Hong Kong et la Chine ne parlent littéralement pas la même langue ; en tout cas, la langue « officielle » n’est pas la même, Cantonais pour l’un et Mandarin pour l’autre. C’est ainsi tout un aspect du film qui risque donc de passer sous les radars d’un public non averti.\n' +
              'Visuellement, on passe de deux films purement citadins – Hong Kong oblige - à une excursion rurale qui se poursuit dans la jungle vietnamienne, avant de se conclure en revenant dans un environnement citadin, la capitale malaisienne alors en plein essor, Kuala Lumpur. Cet enchaînement d’actions et de lieux, dans un film d’à peine une heure et demi, permet un rythme implacable, sans une minute d’ennui ou de trop longue exposition… Un rythme malheureusement sacrifié sur l’autel de la facilité scénaristique, puisque le passage d’un décor à l’autre est souvent maladroit, avec des ellipses qui donnent l’impression que des pans entiers du film ont été coupés pour faire rentrer le long-métrage dans le format du « 90 min », douche comprise. Sans temps mort, on retrouve donc avec grand plaisir le burlesque de Jackie Chan dans la plupart des combats, y compris au cœur d’une scène située en pleine jungle, dont le côté  « guerrier » dénote quelque peu avec le ton du reste du film. Ici, on est dans de l’action pure et dure, qui prouve que Police Story III est résolument un film de son époque : en lorgnant du côté d’Une balle dans la tête (dans lequel deux ans plus tôt, John Woo situait son action en pleine Guerre du Vietnam) le troisième volet de la franchise de Jackie Chan s’essaie au grandiloquent le temps d’une scène. Le résultat est cependant plus proche du côté bourrin d’un Rambo II que du ballet des fusillades d’un John Woo…\n' +
              'Après ce passage bourrin, le film retrouve assez vite son ton général : celui de la comédie d’action. Certes, tout n’est pas d’une grande subtilité, mais c’est dans ce genre que Jackie Chan brille, jouant avec son corps à la manière d’un Buster Keaton. Il n’est cette fois-ci pas seul, puisqu’il partage équitablement le temps d’écran avec Michelle Yeoh, qui connaît alors une ascension fulgurante dans le cinéma asiatique. Mais malgré ce duo de vedettes, et les qualités citées plus haut, le long-métrage possède résolument moins de moments de bravoure que les deux précédents volets. Ici, c’est une action en particulier qui sert de climax au film, et qui est mise en avant dans le générique de fin[2] : l’acteur s’accroche à l’échelle d’un hélicoptère survolant Kuala Lumpur. Une référence explicite au Guignolo de Georges Lautner, où Belmondo effectuait la même prouesse en iconique caleçon à pois, qui s’inscrit ainsi au cœur d’un film imparfait, mais au ton résolument réjouissant… Un peu à l’image de ces multiples « Bebel » qui avaient le vent en poupe dans les années 1980, donc. De quoi affirmer sans sourciller : Jackie Chan – Belmondo, même combat !\n',
          author: ' Nicolas Santaliestra',
          subtext:
            '[1] De quoi s’y perdre, surtout que les titres varient parfois à l’international : le spin-off centré sur le personnage interprété par Michelle Yeoh et introduit dans Police Story III, est distribué selon les pays sous le nom de Supercop, Supercop II, Police Story III part 2 ou encore Project S !\n' +
              '[2] Chez Jackie Chan, le générique de fin est traditionnellement un moyen de montrer les coulisses de ses exploits physiques : un exercice aux frontières du bêtisier, du making-of, et de la démonstration de force.\n',
          src: require('@/assets/image/Police Story III - Supercop (Copyright Swift productions).jpg'),
          copyright: 'Copyright © Swift Productions',
        },
        {
          id: 6,
          title: "Toute la mémoire du monde : fragments d’un récit universel",
          text:
          '« Parce que leur mémoire est courte, les hommes amassent d’innombrables penses-bêtes ». C’est avec cette citation non dénuée d’un certain humour qu’Alain Resnais ouvre Toute la mémoire du monde, un documentaire d’une vingtaine de minutes consacré à la Bibliothèque Nationale de France. En 1956, le cinéaste est déjà l’auteur d’une dizaine de courts et de moyens-métrages, formats qu’il délaissera peu à peu pour se consacrer à la réalisation de longs-métrages. En ressort une filmographie longue et cohérente, placée sous un thème en particulier, celui de la mémoire. Il en est d’ailleurs question dans les deux documentaires qui précèdent Toute la mémoire du monde : la mémoire de la Shoah dans Nuit et brouillard, et la mémoire patrimoniale volée aux pays africains colonisés, dans Les Statues meurent aussi.\n' +
              'La citadelle silencieuse que représente la BNF est ainsi un sujet de choix pour Resnais : il en énumère toutes les richesses – livres, iconographies, médailles, périodiques… - avec une admiration teintée de dévotion, au moyen de lents travellings qui nous permettent de contempler le lieu et ses trésors. En plus de faire preuve d’une grande inventivité dans ses cadres, il ne se contente pas de filmer des rayonnages infinis de livres : les humains sont captés comme les indispensables rouages d’une machine tentaculaire qui ne cesse de s’agrandir, dans ses collections comme dans son architecture, tandis que les statues sont personnifiées, perçues comme les témoins centenaires d’un travail universel, la sauvegarde de la mémoire. Mais le but de Resnais n’est pas seulement de montrer l’effervescence d’une institution en constante ébullition depuis plus de quatre siècles, c’est aussi un outil pédagogique adressé au plus grand nombre. On y suit ainsi le trajet d’un livre, de son acquisition par dépôt légal à sa classification sur une petite fiche à première vue noyée dans un océan de tiroirs, mais parfaitement identifiée par une armée de talentueux bibliothécaires.\n' +
              'La bibliothèque nationale, rappelons-le accessible à tout le monde, devient finalement l’icône d’une valeur républicaine (terme pourtant galvaudé et maltraité de nos jours) : l’égalité. La BNF est là pour conserver les témoins de son époque, dans la démarche la plus exhaustive possible, ce qui induit de traiter un roman de gare sur le même pied d’égalité qu’un ouvrage prestigieux. Quand il se demande : « qui sait ce qui demain témoignera de notre civilisation ? », le cinéaste, admirateur du format, fait ainsi un gros plan sur un comics, une audace pour les années 1950 !\n' +
              'En à peine 20 minutes, Resnais réussit donc l’exploit d’être dans un même temps pédagogue et esthète, historien et témoin. Une dualité loin de toute rigueur universitaire, faisant de l’institution un chantier universel, pour laquelle la mémoire n’est pas une fin en soi, mais le moyen d’atteindre un but qui est, lui aussi universel : « le bonheur ».\n',
          author: ' Nicolas Santaliestra',
          subtext: '',
          src: require('@/assets/image/Toute la mémoire du monde (copyright Les films de la Pléiade).jpg'),
          copyright: 'Copyright © Les films de la Pléiade',
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
      if (typeof window === 'undefined')
        return
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

.break-words {
  word-break: break-word;
}

.copyright {
  font-size: 10px;
}
</style>