import TopWaveDivider from "@/components/TopWaveDivider";
import WaveDivider from "@/components/WaveDivider";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col overflow-hidden">
        <TopWaveDivider />
        <div className="flex flex-col items-center justify-center mt-10 px-4 md:px-10 lg:mt-20">
          <h1 data-aos="fade-down" className="text-center text-3xl md:text-5xl lg:text-6xl font-naruto text-white mb-2">Isshin</h1>
          <h1 data-aos="fade-up" className="text-center text-3xl md:text-5xl lg:text-6xl font-naruto text-red-500 mb-3">Uzumaki</h1>
          <h2 data-aos="fade-up" className="text-center text-xs md:text-sm lg:text-base font-naruto text-white text-opacity-80 mb-10 lg:mb-20">fils d&apos;Ashina Uzumaki</h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-start mt-10 lg:mt-40">
          <div data-aos="fade-right" className="lg:ml-10 lg:pl-24 px-4 md:px-10 lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-sensei text-white mb-10">L&apos;histoire d&apos;Isshin Uzumaki</h1>
            <div className="lg:flex mb-10">
              <Image
                src="/isshin2.png"
                alt="Isshin Uzumaki"
                width={300}
                height={100}
                className="rounded-lg"
              />
              <p className="text-sm md:text-base lg:text-2xl font-sensei text-white text-opacity-80 mb-4 mt-10">
                À 14 ans, Isshin Uzumaki est tout juste sorti de l&apos;académie ninja, la tête remplie de rêves et d&apos;aspirations. Comme la plupart des gamins de son âge dans le village caché de Konoha, il est super excité à l&apos;idée de commencer sa vie de ninja. Mais Isshin n&apos;est pas un gamin ordinaire. Avec l&apos;héritage d&apos;une des familles les plus balèzes, il sent le poids des attentes sur ses épaules.
              </p>
            </div>
            <p className="text-sm md:text-base lg:text-2xl font-sensei text-white text-opacity-80 mb-4">
              Depuis qu&apos;il est gosse, il a grandi avec les histoires de son grand-père Katsuro, les aventures épiques de son père Ashina, et les visites mystérieuses de son oncle Solio. Ces récits ont façonné ses ambitions, mais aussi ses craintes. Isshin sait qu&apos;il doit non seulement faire honneur à sa famille, mais aussi aller encore plus loin.
            </p>
            <br />
            <br />
            <div className="lg:flex">
              <Image
                src="/isshincousin.png"
                alt="Isshin Uzumaki et son cousin Kuro"
                width={300}
                height={100}
                className="rounded-lg mr-10"
              />
              <p className="text-sm md:text-base lg:text-2xl font-sensei text-white text-opacity-80 mb-4 mt-10">
                Son cousin Koru, également diplômé de l&apos;école, est toujours dans les parages. Ensemble, ils forment une équipe du tonnerre. Koru, avec sa détermination en acier, inspire souvent Isshin à ne jamais lâcher, même face aux défis les plus flippants. Leur compétition amicale continue de les pousser à être les meilleurs ninjas possibles.
              </p>
            </div>
            <br />
            <p className="text-sm md:text-base lg:text-2xl font-sensei text-white text-opacity-80 mb-4">
              Alors que Isshin commence à faire ses premières missions, sa curiosité pour les enseignements interdits de son oncle Solio grandit. L&apos;interdiction de son père de suivre les traces de Solio ne fait qu&apos;alimenter sa fascination pour les secrets que celui-ci détient. Isshin commence à étudier en cachette les vieux artéfacts et les techniques de scellement que Solio avait laissés derrière lui.
            </p>
            <br />
            <p className="text-sm md:text-base lg:text-2xl font-sensei text-white text-opacity-80 mb-4">
              Sa première grosse galère arrive quand une mission apparemment simple tourne mal. Il se retrouve face à des ennemis qui reconnaissent le nom Uzumaki et qui le voient comme une cible de choix. Isshin doit puiser dans le courage et la sagesse de sa lignée pour protéger non seulement sa vie, mais aussi celle de ses coéquipiers.
            </p>
            <br />
            <div className="lg:flex">
              <Image
                src="/fuin.png"
                alt="Isshin Uzumaki Fuinjutsu"
                width={300}
                height={100}
                className="rounded-lg mr-10 mb-10"
              />
              <p className="text-sm md:text-base lg:text-2xl font-sensei text-white text-opacity-80 mb-4">
                Au cours de ses premiers jours en tant que shinobi, Isshin saisit rapidement l&apos;importance de la collaboration, du dévouement personnel et de l&apos;équilibre entre l&apos;honneur familial et ses convictions. Tout en jonglant entre les attentes et ses désirs personnels, Isshin commence à comprendre qu&apos;il est possible de préserver l&apos;héritage de sa famille tout en traçant sa propre trajectoire. Cette réalisation le guidera à travers les nombreux défis qui l&apos;attendent.
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className="lg:ml-40 mt-10 lg:mt-0 px-4 md:px-10">
            <Image
              src="/Isshin.png"
              alt="Isshin Uzumaki"
              width={1200}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mb-20 mt-40 px-4 md:px-24">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-sensei text-white mb-20">Les traits de caractères d&apos;Isshin Uzumaki</h1>
          <div>
            <p className="text-sm md:text-base lg:text-xl font-sensei text-white text-opacity-80 mb-4">
              Shin Uzumaki est un personnage complexe ancré dans l&apos;héritage de son clan. Voici quatre de ses traits principaux :
            </p>
            <br />
            <p className="text-sm md:text-base lg:text-xl font-sensei text-white text-opacity-80 mb-4">
              • Déterminé et résolu : Shin est très déterminé lorsqu&apos;il poursuit un objectif. Il ne laisse jamais les obstacles ou les échecs le détourner de son but.
            </p>
            <br />
            <p className="text-sm md:text-base lg:text-xl font-sensei text-white text-opacity-80 mb-4">
              • Protecteur : Shin est très attaché à sa famille et à ses amis. Il est prêt à se mettre en danger pour les protéger, ce qui reflète la force et l&apos;endurance de son clan.
            </p>
            <br />
            <p className="text-sm md:text-base lg:text-xl font-sensei text-white text-opacity-80 mb-4">
              • Curieux et réfléchi : Shin a une curiosité naturelle pour les techniques ninja et les secrets de son clan. Il utilise son intelligence pour résoudre des énigmes complexes et comprendre le monde shinobi.
            </p>
            <br />
            <p className="text-sm md:text-base lg:text-xl font-sensei text-white text-opacity-80 mb-4">
              • Loyal mais indépendant : Shin est très loyal envers son clan et ses proches, mais il valorise aussi sa liberté de pensée et d&apos;action. Il préfère souvent suivre son propre chemin plutôt que les traditions ou les attentes des autres.
            </p>
            <br />
            <p className="text-sm md:text-base lg:text-xl font-sensei text-white text-opacity-80 mb-4">
              Ces traits font de Shin Uzumaki un ninja compétent, respecté et aimé par ceux qui le connaissent.
            </p>
          </div>
        </div>
        <WaveDivider />
        <TopWaveDivider />
        <div className="flex flex-col items-center justify-center mt-20 mb-20 px-4 md:px-24">
          <div data-aos="fade-up" className="w-full md:w-2/3 lg:w-1/2 mb-20">
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-sensei text-white mb-10">La capacité du clan Uzumaki</h1>
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-sensei text-white mb-10">Le Fûinjutsu</h1>
            <p className="text-center text-sm md:text-base lg:text-lg font-sensei text-white text-opacity-80">
              Le clan Uzumaki est reconnu pour sa maîtrise du fūinjutsu, l&apos;art du scellement. Cette technique, passée de génération en génération, permet aux Uzumaki de sceller presque tout, du chakra des bêtes à queues aux âmes, dans divers réceptacles. Ils produisent des sceaux puissants et variés, allant de simples barrières de protection à des mécanismes de défense sophistiqués et des pièges. Leur expertise en fūinjutsu fait des Uzumaki des acteurs importants dans le monde ninja, souvent engagés pour des missions nécessitant une grande confidentialité et sécurité.
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
        <div className="flex min-h-fit flex-col items-center justify-center mb-20 mt-20 px-4 md:px-24">
          <div data-aos="fade-up" className="w-full md:w-2/3 lg:w-1/3 mx-auto text-center">
            <h1 className="font-sensei text-3xl md:text-4xl lg:text-5xl text-white mb-10">Histoire et généalogie du clan Uzumaki</h1>
            <h1 className="font-sensei text-xl md:text-2xl lg:text-3xl text-white mb-10">L&apos;héritage de la famille Uzumaki</h1>
            <p className="font-sensei text-sm md:text-base lg:text-lg text-white text-opacity-80">
              Le clan Uzumaki est une famille ninja originaire du village caché d&apos;Uzushiogakure. Ils sont connus pour leur longévité, leur chakra exceptionnellement puissant et leur maîtrise du fūinjutsu. Le clan Uzumaki a été décimé lors de la guerre contre le village caché de Kiri, mais quelques survivants ont été intégrés dans le village caché de Konoha.
            </p>
          </div>
          <div data-aos="fade-up" className="mt-12">
            <h1 className="font-sensei text-xl text-center md:text-2xl lg:text-3xl text-white mb-10">L&apos;arbre généalogique de la famille Uzumaki</h1>
            <div data-aos="fade-up" className="mt-12 px-4 md:px-0">
              <Image
                src="/Arbre.png"
                alt="Arbre généalogique Uzumaki"
                width={1700}
                height={300}
                layout="responsive"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <WaveDivider />
        <TopWaveDivider />
        <div className="flex flex-col items-center justify-center mb-20 mt-20 px-4 md:px-24">
          <div data-aos="fade-up" className="w-full md:w-2/3 lg:w-1/3 mx-auto">
            <h1 className="font-sensei text-3xl md:text-4xl lg:text-5xl text-center text-white mb-10">Les objectifs d&apos;Isshin</h1>
            <h1 className="font-sensei text-xl md:text-2xl lg:text-3xl text-center text-white mb-4">Le Fûinjutsu pour le bien commun</h1>
            <p className="font-sensei text-sm md:text-base lg:text-lg text-center text-white text-opacity-80 mb-10">
              Isshin étudie le fuinjutsu pour créer des solutions bénéfiques comme des techniques de guérison, des barrières protectrices et des méthodes de restauration environnementale.
            </p>
            <h1 className="font-sensei text-xl md:text-2xl lg:text-3xl text-center text-white mb-4">Défense de Konoha</h1>
            <p className="font-sensei text-sm md:text-base lg:text-lg text-center text-white text-opacity-80 mb-10">
              Isshin utilise son expertise en fuinjutsu pour développer des défenses avancées afin de garder Konoha en sécurité contre toutes les menaces. Il est très reconnaissant envers le village qui l&apos;a accueilli et veut le protéger à tout prix.
            </p>
            <h1 className="font-sensei text-xl md:text-2xl lg:text-3xl text-center text-white mb-4">Recherche en Fûinjutsu</h1>
            <p className="font-sensei text-sm md:text-base lg:text-lg text-center text-white text-opacity-80 mb-10">
              En tant que ninja dévoué, Isshin cherche constamment de nouvelles avancées en fuinjutsu. Il travaille avec d&apos;autres experts pour repousser les limites de ce que les techniques de scellement peuvent faire.
            </p>
          </div>
        </div>
        <WaveDivider />
        <TopWaveDivider />
        <div className="flex flex-col items-center justify-center mb-40 mt-20 px-4 md:px-24">
          <h1 className="font-sensei text-3xl md:text-4xl lg:text-5xl text-white mb-10 text-center">Partie HRP</h1>
          <div data-aos="fade-up" className="flex flex-col md:flex-row items-center justify-center w-full md:w-3/4 lg:w-1/2 mx-auto">
            <div className="md:w-1/2 lg:w-1/3">
              <Image
                src="/Shin.png"
                alt="Shin Kazama"
                width={500}
                height={300}
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-2/5 mt-10 md:mt-0 md:ml-10">
              <h1 className="font-sensei text-xl md:text-2xl lg:text-3xl text-white mb-4 text-center">Shin Kazama</h1>
              <p className="font-sensei text-sm md:text-base lg:text-lg text-white text-opacity-80 text-center">
                Actuellement Shin Kazama, chûnin de Konoha, Shin sera tué des mains de son Sensei Koda Ikkigai suite à une mission de rang S dans laquelle Shin deviendra fou dû à un sceau maudit.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="items-center justify-center mt-10">
            <p className="text-sm md:text-base lg:text-lg font-sensei text-white text-opacity-80 mb-4">
              - Je m&apos;appelle Rayane, j&apos;ai 24 ans et je suis en dernière année de Master. Je suis développeur web et j&apos;ai une passion pour le RP.
            </p>
            <p className="text-sm md:text-base lg:text-lg font-sensei text-white text-opacity-80 mb-4">
              - J&apos;ai a peu près 150h de RP sur le serveur FOC.
            </p>
            <p className="text-sm md:text-base lg:text-lg font-sensei text-white text-opacity-80 mb-4">
              - Je fais partie des douaniers.
            </p>
            <p className="text-sm md:text-base lg:text-lg font-sensei text-white text-opacity-80 mb-4">
              - 1200h de RP sur Gmod / 4800h de RP sur Arma 3 / 2000h de RP sur FiveM.
            </p>
            <p className="text-sm md:text-base lg:text-lg font-sensei text-white text-opacity-80 mb-4">
              - Mon pseudo discord c&apos;est : rayane, oui c&apos;est mon prénom.
            </p>
            <p className="text-sm md:text-base lg:text-lg font-sensei text-white text-opacity-80 mb-4">
              - Je me suis pas occupé de la partie responsive, j&apos;avais pas le temps x)
            </p>
          </div>
        </div>
        <WaveDivider />
        <TopWaveDivider />
        <div className="flex min-h-fit flex-col items-center justify-center mb-40 mt-20">
          <h1 className="font-sensei text-xl md:text-2xl lg:text-3xl text-white mb-4 text-center">Mes motivations, pourquoi moi et pas un autre ?</h1>
          <div data-aos="fade-up" className="flex items-center justify-center">
            <div className="w-1/2 mt-10">
              <h1 className="font-sensei text-white text-3xl mb-4"></h1>
              <p className="text-sm md:text-base lg:text-lg font-sensei text-white text-opacity-80 mb-4">
                J&apos;ai une bonne connaissance de l&apos;univers Naruto, ce qui me permettra de jouer Isshin de manière authentique. J&apos;essaierai de jouer au maximum mes émotions pour le rendre réel afin d&apos;améliorer l&apos;expérience de jeu.
              </p>
              <br />
              <p className="text-sm md:text-base lg:text-lg font-sensei text-white text-opacity-80 mb-4">
                Mon expérience RP: J&apos;ai développé mon improvisation et mes réactions aux scénarios imprévus. Ca me sera très utile pour développer Isshin et interagir avec les autres joueurs.
              </p>
              <br />
              <p className="text-sm md:text-base lg:text-lg font-sensei text-white text-opacity-80 mb-4">
                Je suis prêt à investir du temps et de l&apos;énergie pour faire d&apos;Isshin un personnage mémorable dans l&apos;histoire du jeu. Je prends ce rôle très au sérieux.
              </p>
              <br />
              <p className="text-sm md:text-base lg:text-lg font-sensei text-white text-opacity-80 mb-4">
                Ma compréhension du personnage: Je comprends bien les nuances d&apos;Isshin, y compris ses conflits internes, sa loyauté, sa détermination, et son intérêt pour les techniques interdites. Cela me permet de développer son personnage de manière cohérente.
              </p>
              <br />
              <p className="text-sm md:text-base lg:text-lg font-sensei text-white text-opacity-80 mb-4">
                Ma créativité: En envisageant de nouvelles techniques et de la narration qui peuvent améliorer l&apos;expérience de jeu. J&apos;essaie tout le temps d&apos;ajouter des nouveaux éléments à mes personnages pour améliorer l&apos;histoire au fur et à mesure.
              </p>
              <br />
              <p className="text-sm md:text-base lg:text-lg font-sensei text-white text-opacity-80 mb-4">
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

