import TopWaveDivider from "@/components/TopWaveDivider";
import WaveDivider from "@/components/WaveDivider";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <TopWaveDivider />
        <div className="items-center self-center mt-10">
          <h1 data-aos="fade-down" className="text-center font-naruto text-white text-6xl mb-2">Isshin</h1>
          <h1 data-aos="fade-up" className="text-center font-naruto text-red-500 text-6xl mb-3">Uzumaki</h1>
          <h2 data-aos="fade-up" className="text-center font-naruto text-white text-sm text-opacity-80 mb-20">fils de Ashina Uzumaki</h2>
        </div>
        <div className="!items-start flex">
          <div data-aos="fade-right" className="ml-10 pl-24 mt-40 w-1/2">
            <h1 className="font-sensei text-white text-5xl mb-10">L'histoire d'Isshin Uzumaki</h1>
            <p className="font-sensei text-white text-lg text-opacity-80">
              À 14 ans, Isshin Uzumaki est tout juste sorti de l'académie ninja, la tête remplie de rêves et d'aspirations. Comme la plupart des gamins de son âge dans le village caché de Konoha, il est super excité à l'idée de commencer sa vie de ninja. Mais Isshin n'est pas un gamin ordinaire. Avec l'héritage d'une des familles les plus balèzes, il sent le poids des attentes sur ses épaules.
            </p>
            <br />
            <p className="font-sensei text-white text-lg text-opacity-80">
              Depuis qu'il est gosse, il a grandi avec les histoires de son grand-père Katsuro, les aventures épiques de son père Ashina, et les visites mystérieuses de son oncle Solio. Ces récits ont façonné ses ambitions, mais aussi ses craintes. Isshin sait qu'il doit non seulement faire honneur à sa famille, mais aussi aller encore plus loin.
            </p>
            <br />
            <p className="font-sensei text-white text-lg text-opacity-80">
              Son cousin Koru, également diplômé de l'école, est toujours dans les parages. Ensemble, ils forment une équipe du tonnerre. Koru, avec sa détermination en acier, inspire souvent Isshin à ne jamais lâcher, même face aux défis les plus flippants. Leur compétition amicale continue de les pousser à être les meilleurs ninjas possibles.
            </p>
            <br />
            <p className="font-sensei text-white text-lg text-opacity-80">
              Alors que Isshin commence à faire ses premières missions, sa curiosité pour les enseignements interdits de son oncle Solio grandit. L'interdiction de son père de suivre les traces de Solio ne fait qu'alimenter sa fascination pour les secrets que celui-ci détient. Isshin commence à étudier en cachette les vieux artéfacts et les techniques de scellement que Solio avait laissés derrière lui.
            </p>
            <br />
            <p className="font-sensei text-white text-lg text-opacity-80">
              Sa première grosse galère arrive quand une mission apparemment simple tourne mal. Il se retrouve face à des ennemis qui reconnaissent le nom Uzumaki et qui le voient comme une cible de choix. Isshin doit puiser dans le courage et la sagesse de sa lignée pour protéger non seulement sa vie, mais aussi celle de ses coéquipiers.
            </p>
            <br />
            <p className="font-sensei text-white text-lg text-opacity-80">
              Au cours de ses premiers jours en tant que shinobi, Isshin saisit rapidement l'importance de la collaboration, du dévouement personnel et de l'équilibre entre l'honneur familial et ses convictions. Tout en jonglant entre les attentes et ses désirs personnels, Isshin commence à comprendre qu'il est possible de préserver l'héritage de sa famille tout en traçant sa propre trajectoire. Cette réalisation le guidera à travers les nombreux défis qui l'attendent.
            </p>
          </div>
          <div data-aos="fade-left" className="ml-40">
            <Image
              src="/Isshin.png"
              alt="Isshin Uzumaki"
              width={1200}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mb-20 mt-20 pl-24 pr-24">
          <h1 className="font-sensei text-white text-5xl mb-20">Les traits de caractères d'Isshin Uzumaki</h1>
          <div>
            <p className="font-sensei text-white text-xl text-opacity-80 mb-10">
              Shin Uzumaki est un personnage complexe ancré dans l'héritage de son clan. Voici quatre de ses traits principaux :
            </p>
            <br />
            <p className="font-sensei text-white text-xl text-opacity-80">
              • Déterminé et résolu : Shin est très déterminé lorsqu'il poursuit un objectif. Il ne laisse jamais les obstacles ou les échecs le détourner de son but.
            </p>
            <br />
            <p className="font-sensei text-white text-xl text-opacity-80">
              • Protecteur : Shin est très attaché à sa famille et à ses amis. Il est prêt à se mettre en danger pour les protéger, ce qui reflète la force et l'endurance de son clan.
            </p>
            <br />
            <p className="font-sensei text-white text-xl text-opacity-80">
              • Curieux et réfléchi : Shin a une curiosité naturelle pour les techniques ninja et les secrets de son clan. Il utilise son intelligence pour résoudre des énigmes complexes et comprendre le monde shinobi.
            </p>
            <br />
            <p className="font-sensei text-white text-xl text-opacity-80 mb-10">
              • Loyal mais indépendant : Shin est très loyal envers son clan et ses proches, mais il valorise aussi sa liberté de pensée et d'action. Il préfère souvent suivre son propre chemin plutôt que les traditions ou les attentes des autres.
            </p>
            <br />
            <p className="font-sensei text-white text-xl text-opacity-80">
              Ces traits font de Shin Uzumaki un ninja compétent, respecté et aimé par ceux qui le connaissent.
            </p>
          </div>
        </div>
        <WaveDivider />
        <TopWaveDivider />
        <div className="flex min-h-screen flex-col items-center justify-center mt-20">
          <div data-aos="fade-up" className="w-1/2 mb-20">
            <h1 className="font-sensei text-center text-white text-5xl mb-10">La capacité du clan Uzumaki</h1>
            <h1 className="font-sensei text-center text-white text-3xl mb-10">Le Fûinjutsu</h1>
            <p className="font-sensei text-center text-white text-lg text-opacity-80">
              Le clan Uzumaki est reconnu pour sa maîtrise du fūinjutsu, l'art du scellement. Cette technique, passée de génération en génération, permet aux Uzumaki de sceller presque tout, du chakra des bêtes à queues aux âmes, dans divers réceptacles. Ils produisent des sceaux puissants et variés, allant de simples barrières de protection à des mécanismes de défense sophistiqués et des pièges. Leur expertise en fūinjutsu fait des Uzumaki des acteurs importants dans le monde ninja, souvent engagés pour des missions nécessitant une grande confidentialité et sécurité.
            </p>
          </div>
          <div data-aos="fade-up">
            <Image
              src="/Fuinjutsu.png"
              alt="Fuinjutsu"
              width={800}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
        <WaveDivider />
        <TopWaveDivider />
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div data-aos="fade-up" className="w-1/3">
            <h1 className="font-sensei text-center text-white text-5xl mb-10">Histoire et généalogie du clan Uzumaki</h1>
            <h1 className="font-sensei text-center text-white text-3xl mb-10">L'héritage de la famille Uzumaki</h1>
            <p className="font-sensei text-center text-white text-lg text-opacity-80">
              Le clan Uzumaki est une famille ninja originaire du village caché d'Uzushiogakure. Ils sont connus pour leur longévité, leur chakra exceptionnellement puissant et leur maîtrise du fūinjutsu. Le clan Uzumaki a été décimé lors de la guerre contre le village caché de Kiri, mais quelques survivants ont été intégrés dans le village caché de Konoha.
            </p>
          </div>
          <div data-aos="fade-up" className="mt-12">
            <h1 className="font-sensei text-center text-white text-3xl">L'héritage de la famille Uzumaki</h1>
            <div>
              <Image
                src="/Arbre.png"
                alt="Arbre généalogique Uzumaki"
                width={1700}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <WaveDivider />
        <TopWaveDivider />
        <div className="flex min-h-fit flex-col items-center justify-center mb-20 mt-20">
          <div data-aos="fade-up" className="w-1/3">
            <h1 className="font-sensei text-center text-white text-5xl mb-10">Les objectifs d'Isshin</h1>
            <h1 className="font-sensei text-center text-white text-3xl mb-4">Le Fûinjutsu pour le bien commun</h1>
            <p className="font-sensei text-center text-white text-lg text-opacity-80 mb-10">
              Isshin étudie le fuinjutsu pour créer des solutions bénéfiques comme des techniques de guérison, des barrières protectrices et des méthodes de restauration environnementale.
            </p>
            <h1 className="font-sensei text-center text-white text-3xl mb-4">Défense de Konoha</h1>
            <p className="font-sensei text-center text-white text-lg text-opacity-80 mb-10">
              Isshin utilise son expertise en fuinjutsu pour développer des défenses avancées afin de garder Konoha en sécurité contre toutes les menaces. Il est très reconnaissant envers le village qui l'a accueilli et veut le protéger à tout prix.
            </p>
            <h1 className="font-sensei text-center text-white text-3xl mb-4">Recherche en Fûinjutsu</h1>
            <p className="font-sensei text-center text-white text-lg text-opacity-80 mb-10">
              En tant que ninja dévoué, Isshin cherche constamment de nouvelles avancées en fuinjutsu. Il travaille avec d'autres experts pour repousser les limites de ce que les techniques de scellement peuvent faire.
            </p>
          </div>
        </div>
        <WaveDivider />
        <TopWaveDivider />
        <div className="flex min-h-fit flex-col items-center justify-center mb-40 mt-20">
          <h1 className="font-sensei text-center text-white text-5xl mb-10">Partie HRP</h1>
          <div data-aos="fade-up" className="flex items-center justify-center">
            <div>
              <Image
                src="/Shin.png"
                alt="Shin Kazama"
                width={500}
                height={300}
              />
            </div>
            <div className="w-1/5 mt-10">
              <h1 className="font-sensei text-white text-3xl mb-4">Shin Kazama</h1>
              <p className="font-sensei text-white text-lg text-opacity-80">
                Actuellement Shin Kazama, chûnin de Konoha, Shin sera tué des mains de son Sensei Koda Ikkigai suite à une mission de rang S dans laquelle Shin deviendra fou dû à un sceau maudit.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="items-center justify-center">
            <p className="font-sensei text-white text-lg text-opacity-80 mt-20 pr-24 pl-24">
              - Je m'appelle Rayane, j'ai 24 ans et je suis en dernière année de Master. Je suis développeur web et j'ai une passion pour le RP.
            </p>
            <p className="font-sensei text-white text-lg text-opacity-80 pr-24 pl-24">
              - J'ai a peu près 150h de RP sur le serveur FOC.
            </p>
            <p className="font-sensei text-white text-lg text-opacity-80 pr-24 pl-24">
              - Je fais partie des douaniers.
            </p>
            <p className="font-sensei text-white text-lg text-opacity-80 pr-24 pl-24">
              - 1200h de RP sur Gmod / 4800h de RP sur Arma 3 / 2000h de RP sur FiveM.
            </p>
            <p className="font-sensei text-white text-lg text-opacity-80 pr-24 pl-24">
              - Mon pseudo discord c'est : rayane, oui c'est mon prénom.
            </p>
            <p className="font-sensei text-white text-lg text-opacity-80 pr-24 pl-24">
              - Je me suis pas occupé de la partie responsive, j'avais pas le temps x)
            </p>
          </div>
        </div>
        <WaveDivider />
        <TopWaveDivider />
        <div className="flex min-h-fit flex-col items-center justify-center mb-40 mt-20">
          <h1 className="font-sensei text-center text-white text-5xl mb-10 pr-24 pl-24">Mes motivations, pourquoi moi et pas un autre ?</h1>
          <div data-aos="fade-up" className="flex items-center justify-center">
            <div className="w-1/2 mt-10">
              <h1 className="font-sensei text-white text-3xl mb-4"></h1>
              <p className="font-sensei text-white text-lg text-opacity-80">
                J'ai une bonne connaissance de l'univers Naruto, ce qui me permettra de jouer Isshin de manière authentique. J'essaierai de jouer au maximum mes émotions pour le rendre réel afin d'améliorer l'expérience de jeu.
              </p>
              <br />
              <p className="font-sensei text-white text-lg text-opacity-80">
                Mon expérience RP: J'ai développé mon improvisation et mes réactions aux scénarios imprévus. Ca me sera très utile pour développer Isshin et interagir avec les autres joueurs.
              </p>
              <br />
              <p className="font-sensei text-white text-lg text-opacity-80">
                Je suis prêt à investir du temps et de l'énergie pour faire d'Isshin un personnage mémorable dans l'histoire du jeu. Je prends ce rôle très au sérieux.
              </p>
              <br />
              <p className="font-sensei text-white text-lg text-opacity-80">
                Ma compréhension du personnage: Je comprends bien les nuances d'Isshin, y compris ses conflits internes, sa loyauté, sa détermination, et son intérêt pour les techniques interdites. Cela me permet de développer son personnage de manière cohérente.
              </p>
              <br />
              <p className="font-sensei text-white text-lg text-opacity-80">
                Ma créativité: En envisageant de nouvelles techniques et de la narration qui peuvent améliorer l'expérience de jeu. J'essaie tout le temps d'ajouter des nouveaux éléments à mes personnages pour améliorer l'histoire au fur et à mesure.
              </p>
              <br />
              <p className="font-sensei text-white text-lg text-opacity-80">
                Je suis un joueur expérimenté, dévoué et créatif, qui attend que donner vie à Isshin Uzumaki.
              </p>
            </div>
          </div>
        </div>
        <WaveDivider />
      </main >
    </>
  );
}

