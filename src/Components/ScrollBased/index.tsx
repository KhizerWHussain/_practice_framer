"use client";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import React from "react";

const ScrollBased = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  const background = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgba(235, 52, 61)", "rgb(247, 228, 12)", "rgb(76, 235, 52)"]
  );

  return (
    <>
      <motion.div
        className={`sticky top-0 w-full h-6 transform origin-left`}
        // className={`sticky top-0 w-full h-6 bg-blue-700 transform origin-left`}
        style={{
          //   scaleX: scrollYProgress,
          scaleX,
          background,
        }}
      />
      <div className="w-full h-full place-content-center flex items-center flex-col">
        <div className="w-2/3 flex flex-col gap-4 justify-center text-center">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,
            architecto laboriosam tempora dicta veniam natus aliquam totam
            reiciendis nam, cumque ipsum inventore quos corporis consectetur a
            nostrum, dolor velit odio! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Officia eos eveniet iste vel magni alias,
            voluptatibus laboriosam quos voluptate aliquid delectus minus est
            debitis vitae temporibus enim. Magni, ipsa officiis. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Provident, at. Ea,
            ullam dolorum libero recusandae odit voluptatibus? Impedit esse
            veniam dignissimos quos, ipsum, odio aliquam, dolor atque nesciunt
            vero tenetur voluptate at illum repellat! Ducimus, mollitia. Rem
            sint delectus quod, odit, iusto minima, corrupti quam exercitationem
            eligendi a aspernatur esse. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Consectetur facere porro quaerat numquam ducimus
            ad? Ipsam consequatur ab fuga sunt magnam molestiae voluptatum sequi
            deleniti sit, assumenda exercitationem earum, sed quasi consectetur
            quis perferendis praesentium, amet eligendi veniam repellendus iure
            explicabo? Dolore voluptate similique harum voluptatem quae? Ex,
            assumenda id iure accusamus quasi sequi, minus sint odio provident
            architecto, voluptatibus maxime et alias? Ipsum sunt harum atque
            reiciendis voluptates consectetur assumenda repellat adipisci odio
            blanditiis rerum saepe earum similique iure debitis officiis,
            repellendus reprehenderit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
            doloremque nemo laborum ex esse recusandae! Eaque, soluta voluptate
            veritatis, exercitationem aliquam provident corporis fugiat ad
            distinctio delectus impedit nesciunt aperiam officia earum eum
            iusto, totam ab deserunt vero enim nostrum! Officia itaque nihil sed
            assumenda ex expedita perferendis ipsa reprehenderit. Eos
            consectetur sint magnam delectus commodi tenetur quibusdam quos
            dolores enim, sapiente minima laudantium veritatis itaque
            reprehenderit dolor exercitationem nulla molestias. Beatae fuga esse
            sint.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, vero velit. Hic illo fugiat repellat placeat vitae?
            Alias quis eaque non blanditiis veritatis temporibus minima illo?
            Officia, accusamus molestias. Quibusdam sunt, nulla repellat eum ut
            recusandae voluptatum obcaecati aspernatur molestiae omnis sint
            dicta? Sunt numquam veritatis perspiciatis cum accusantium expedita
            tenetur maiores odit, atque voluptatem impedit alias, mollitia quo
            magnam corrupti fugit sapiente doloribus tempore?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            facilis cumque, modi pariatur natus laudantium, saepe beatae tenetur
            aspernatur veniam provident eum nesciunt amet rem ipsum! Quis
            eligendi ut velit dolores, beatae suscipit incidunt, veritatis saepe
            delectus assumenda consequatur earum voluptates est accusantium
            aliquam illo sequi architecto ratione autem aspernatur. Ex animi
            dicta distinctio autem repudiandae dolor assumenda reiciendis modi
            culpa nam a, numquam velit, cumque exercitationem facere architecto
            dolorem explicabo mollitia ea fuga tempore id odit! Amet
            exercitationem fugiat repudiandae incidunt ducimus vel error tenetur
            asperiores, mollitia accusamus numquam ab itaque ipsum ipsa
            excepturi harum quam magnam. Ducimus quasi vero quibusdam ex dolores
            asperiores, ipsum quisquam omnis mollitia enim eaque accusamus
            voluptatem aperiam neque illo, voluptatum tempore harum consequuntur
            ad incidunt dolor hic ab molestias. Tempore dolorum totam distinctio
            magnam, molestiae et veritatis minus rerum deserunt voluptate error
            odio, maxime tempora dignissimos quia quis. Provident ipsa amet
            quasi quos velit minus aliquam repellat, in quaerat deleniti
            assumenda voluptates ad, doloremque maiores quo? Aperiam incidunt,
            nisi corrupti praesentium minima delectus, odio cumque perferendis
            cupiditate soluta quo libero ratione perspiciatis, eligendi quia
            porro quam facere nostrum expedita sit laboriosam. Unde saepe ipsam
            fuga nam, consectetur doloremque sequi tempore laboriosam molestiae
            expedita tempora facere qui atque consequuntur nulla quod nostrum.
            Autem quasi facilis illo accusantium tempore, sunt dolores
            reiciendis officia, laudantium id adipisci sapiente voluptatum animi
            odio! Aut, numquam deleniti iste provident sint in error, voluptate
            nesciunt pariatur quaerat ipsa rem sunt voluptas perspiciatis eos
            corporis natus libero amet, aspernatur ipsam iusto consequatur
            nostrum possimus. Repellendus reprehenderit sequi veniam excepturi
            dolorem ipsa, nostrum delectus nesciunt laborum ut nobis assumenda
            deleniti mollitia maxime eius voluptate perferendis est expedita,
            dolorum quibusdam quidem quas nemo illum ratione? At, ullam soluta.
            Veritatis, sed voluptas quos dolor repellat cumque rem recusandae
            laboriosam corporis possimus ab, dignissimos totam iusto error
            dolorem, beatae aspernatur ut id? Recusandae corrupti aliquid
            placeat debitis, fuga accusamus temporibus harum, minima inventore,
            voluptatum voluptate vel veritatis sed odit dolores laudantium
            suscipit delectus hic animi illum exercitationem maxime ex labore
            nostrum! Fuga dicta, excepturi voluptatem laudantium quis dolores
            unde eaque saepe ratione perspiciatis possimus esse adipisci. Quos
            laboriosam beatae rem pariatur eius exercitationem dolorem nesciunt
            suscipit amet voluptatum corrupti dolore rerum sunt aliquam sit,
            omnis neque quam quae odio ad debitis voluptatibus reiciendis
            temporibus! Debitis excepturi unde necessitatibus id cum, quaerat
            itaque eveniet reprehenderit facilis illo? Odit dicta, possimus ex
            doloribus dignissimos ut distinctio. Adipisci, numquam corrupti, rem
            saepe possimus magni ex quas explicabo, dolor soluta rerum vel error
            iure non enim cupiditate ipsam cumque minus obcaecati? Nesciunt
            deserunt voluptate iusto sed impedit dolor quas voluptas eum
            cupiditate porro. Placeat ullam tempora, perspiciatis ipsum
            consequatur omnis excepturi illum, magnam officiis non vitae?
            Distinctio itaque vero possimus sint. Rerum nobis totam ratione at
            voluptate debitis deserunt, porro vitae facilis, odio adipisci quis,
            commodi ipsum aut quod eos deleniti suscipit aperiam. Necessitatibus
            qui nemo quos totam dolores veritatis delectus, excepturi harum!
            Necessitatibus, obcaecati enim maiores laboriosam similique quos
            magnam quae odio est vero, ab atque sunt aliquam ullam. Eaque
            tenetur qui id porro cumque autem omnis possimus dicta sapiente ex
            alias expedita nemo, sint, labore consectetur voluptates.
            Exercitationem voluptatibus incidunt illum quia deleniti ratione.
            Voluptate quia, dignissimos officia sunt modi ipsam cumque, unde
            labore non, omnis cupiditate enim dicta magni distinctio earum
            beatae minima est? Vero eos, vitae fugit fugiat ab nihil rerum
            totam. Error ea vitae enim nostrum, ad autem vero aliquam.
            Laboriosam consequatur nemo, quos corrupti facere ullam! Tempora
            quibusdam neque accusantium sint, doloribus architecto nisi eos
            provident cupiditate quaerat optio debitis, fugit eum quasi cum ex.
            Perferendis sequi nesciunt similique quam debitis ullam voluptatum
            repellat quibusdam voluptas nemo odit, suscipit, laudantium iusto
            porro corrupti natus veritatis voluptatem delectus quaerat animi
            fuga recusandae eaque! Veniam voluptatibus, minus cum quas sequi
            doloremque tenetur in, distinctio non nam odio quasi aliquid
            perferendis nulla consequuntur a nihil exercitationem laborum nisi
            voluptatum? Eius excepturi impedit expedita odio sint quaerat
            consequatur ratione! Quos, voluptatum, nostrum omnis voluptate
            laudantium vel incidunt aut inventore facilis corporis molestias est
            vitae temporibus rem ab tempora sapiente mollitia commodi beatae
            unde expedita rerum, earum ipsum voluptatibus? Alias consectetur
            velit repellat tempora? Nihil laborum omnis praesentium ullam modi
            ad pariatur, nam unde quam quasi fuga quae quibusdam, repellendus
            explicabo nemo accusamus! Velit quia ipsam consectetur?
            Necessitatibus facere eligendi maxime asperiores accusantium modi,
            repellat mollitia earum nesciunt est distinctio cupiditate ut enim
            nostrum esse culpa voluptate saepe reiciendis nobis temporibus
            iusto. Aliquam aperiam omnis cum consequuntur exercitationem minus
            expedita aut, ipsa, eius, officia sunt nihil at laborum enim quia
            aliquid quas facere magnam? Saepe minima, id repellendus corporis,
            ipsam aut magnam neque laborum quibusdam illum error magni
            cupiditate odio, voluptate blanditiis molestiae expedita. Et
            molestias voluptas velit libero esse ex tenetur, consequatur iure
            commodi soluta recusandae porro animi accusantium itaque odio, nobis
            corrupti! Harum, corporis accusantium. Doloremque culpa harum quis
            magni exercitationem, eaque quam rem est corrupti officia? Minima ab
            repellendus unde esse. Dolor fugit nam expedita enim, quasi vitae
            reprehenderit sit rem, necessitatibus eaque et voluptates
            doloremque? Iusto blanditiis eos animi quia nobis facilis tenetur ut
            quam cumque magni aliquam, magnam maxime explicabo est? Eius iure
            praesentium necessitatibus aliquam dolor debitis maxime sequi omnis
            ullam possimus rerum magni qui sapiente natus numquam eum aperiam
            recusandae impedit, nulla molestiae distinctio. Pariatur et eum nam
            nihil suscipit corrupti sapiente exercitationem rem quaerat iusto
            enim, excepturi laudantium, vel impedit provident quis ab! Nihil
            velit deleniti fuga perspiciatis corrupti doloremque ipsam quos
            libero excepturi saepe, distinctio at tenetur quam tempore sit
            labore facere impedit nemo odit. Quam consequatur ullam est soluta
            similique ex nam, sequi a facere deserunt, magnam harum maiores
            odio. Esse quaerat nostrum soluta fugit veritatis minus labore,
            sunt, placeat vel voluptatibus, consequuntur fuga magnam unde
            reiciendis id molestiae pariatur neque quasi provident ratione. Ad
            alias iusto itaque dolor quibusdam. Molestias repudiandae id
            excepturi beatae iusto quos aliquam. Fuga recusandae dolor ullam
            nihil sed totam sunt sequi fugit voluptatum, inventore architecto
            natus quod aperiam odio quasi asperiores repellat rem porro alias.
            Quis vero quibusdam nulla quisquam repudiandae maiores perspiciatis
            assumenda tempora hic est libero, voluptatem nihil autem adipisci
            illum harum ad blanditiis iusto facere! Accusamus mollitia fugiat
            velit quis amet? Ratione dolorem quidem natus tenetur hic nesciunt
            ab iusto libero sapiente quo nihil, quasi molestiae debitis iste
            impedit voluptate officiis labore? Velit dicta in enim est quasi
            vitae officia necessitatibus sint? Dolorum harum dolores id eveniet
            est beatae consequatur eius natus, non impedit, possimus hic
            reiciendis debitis provident recusandae dolor rem officiis excepturi
            pariatur eum quod nesciunt deleniti corporis cumque! Reiciendis
            culpa est veniam, sed doloribus voluptatibus, veritatis quia
            incidunt a atque odit delectus? Excepturi, delectus nemo quisquam
            hic accusantium quia, sint, praesentium sed repudiandae labore
            cumque. Minima labore eaque consequatur nemo voluptas qui recusandae
            commodi laboriosam sit ea atque ullam tempora earum, eum sed
            nesciunt voluptatum sunt doloremque soluta quam? Dolorum odit
            pariatur illum beatae aliquid suscipit eaque rem, delectus ab ut
            dolor vero voluptatum! Officiis fuga laboriosam ipsa. Ipsum, odit.
            Quia ea rerum dolor. Ex, et corporis facilis quae illum rerum sit
            aspernatur veritatis fugiat iusto? Similique maxime eveniet illum,
            porro, voluptatum nam sint placeat omnis tenetur obcaecati, dolorem
            fugiat explicabo! Obcaecati cupiditate vitae odit nobis nemo!
            Tempore consectetur placeat eum quos amet magni repellat, architecto
            esse aperiam necessitatibus officia ipsam labore. Quia ullam
            eveniet, corrupti dolorum quidem rem explicabo obcaecati voluptate
            nam optio amet earum quod, iure vitae at temporibus cupiditate.
            Eveniet similique illum possimus, consectetur a harum repudiandae
            fuga temporibus optio recusandae nobis reiciendis quae rerum
            doloribus repellat tenetur qui assumenda porro? Reiciendis voluptate
            at quas, consequatur laboriosam ullam eos illum magni consequuntur
            sed numquam impedit voluptatem id iste aliquam obcaecati quis
            distinctio perferendis inventore quia. Fuga sint quisquam expedita
            itaque corrupti magni, optio ducimus natus rerum ex esse nobis ad
            neque aspernatur excepturi libero numquam unde eius est voluptatum
            officiis dolorum enim! Nesciunt rem reprehenderit qui quas dicta
            mollitia aspernatur debitis dolorum sint, cupiditate repudiandae.
            Eos enim, illum animi dolore, exercitationem quis iste illo eius
            ullam et sequi aperiam nemo culpa consectetur voluptate accusantium
            pariatur temporibus sit cum error corporis! Officia ipsum corrupti a
            adipisci fuga. Eligendi reprehenderit odit laborum eum harum
            laboriosam explicabo debitis praesentium reiciendis, ipsum molestiae
            facilis culpa voluptate, esse libero. Corrupti blanditiis voluptate
            voluptatum tenetur vitae necessitatibus dolore iste voluptatem,
            magnam atque ducimus odit dolores ipsum animi omnis doloremque
            praesentium est, accusamus veniam. Dolorem, voluptas soluta. Impedit
            magnam dolor beatae laudantium fugiat reiciendis voluptas harum ab
            sed qui dolore unde quaerat placeat eos accusamus optio recusandae,
            numquam repellat aspernatur! Reiciendis quae nam consectetur nemo
            soluta enim similique cupiditate possimus, molestiae quisquam
            asperiores aut dicta sint reprehenderit quasi accusamus hic
            architecto blanditiis nulla magnam? Doloremque delectus doloribus
            consequatur in veniam rem saepe, fuga modi excepturi enim eaque
            suscipit repudiandae possimus voluptate blanditiis at fugit
            architecto ratione debitis quos. Adipisci officiis repellat esse,
            iure animi odit explicabo dolorum deleniti nesciunt nemo mollitia at
            nulla dolore minus tenetur tempore ea sunt corporis quibusdam quas.
            Veritatis, id dolore dolores et maxime sint. Soluta omnis cumque ea
            incidunt! Quam officiis beatae qui, maiores molestias illo facere
            quo, eius doloribus ea asperiores earum nihil blanditiis, tempora
            eveniet id recusandae perferendis aliquid pariatur minus provident
            error expedita? Sit numquam beatae iure obcaecati ut eligendi
            suscipit deserunt illum non ducimus accusantium, eveniet, facilis,
            quibusdam enim? Error praesentium mollitia quo quis sint fugit
            ipsum, fuga, nemo, ipsa placeat officiis? A aliquid id, earum
            dolores quis quibusdam officia aliquam eum alias excepturi fuga aut
            numquam, consequatur rerum sed expedita fugit pariatur consectetur.
            Enim facilis facere repellat ab dolorem rerum illum fuga harum animi
            eligendi, tempore inventore officiis culpa suscipit numquam
            exercitationem? Perspiciatis architecto cum beatae quis sunt,
            voluptatibus ad aperiam quibusdam repudiandae minima accusamus
            eligendi ab aliquam optio cumque nostrum reprehenderit voluptate,
            pariatur impedit ducimus excepturi! Obcaecati minima, at enim
            tempore ipsam quos consectetur odio perspiciatis consequatur maxime
            aut dolor facere, voluptatum ea voluptate delectus quo quaerat qui
            deserunt voluptatem adipisci! Possimus nobis odit sint, quam
            cupiditate, soluta deserunt voluptatem ad, inventore fuga optio
            repellat quae sit ipsum eum natus corporis laboriosam accusantium.
            Rerum consectetur, alias voluptas atque nesciunt in nostrum,
            asperiores sit quos deleniti quidem mollitia laboriosam voluptatum
            minima, recusandae aliquid harum? Qui dolor illo inventore repellat
            quaerat accusantium velit doloribus. Molestias eos pariatur quidem
            facilis obcaecati laborum exercitationem fuga praesentium.
            Praesentium harum, laborum maxime neque culpa eum illo,
            exercitationem blanditiis quia quae tempore error inventore! Nulla
            voluptates, natus quam maiores sit voluptatum tempore cupiditate
            necessitatibus illo mollitia quidem quos, similique laborum, fugiat
            voluptatibus iste vitae! Quibusdam similique, ducimus molestiae
            ipsum ex quaerat eius esse rem explicabo quam culpa nulla
            perspiciatis placeat rerum eligendi illum vel beatae. Quo assumenda
            animi eos error cupiditate maxime officiis impedit minima saepe
            ratione beatae voluptas, quae illum maiores commodi in atque.
            Mollitia, quisquam. Maxime laboriosam possimus quibusdam minus,
            voluptate optio est beatae molestiae mollitia, at velit deleniti.
            Sed minus perspiciatis ut soluta aperiam, velit eum architecto.
            Blanditiis neque, aliquid incidunt, qui perferendis vero voluptatem
            beatae ab hic esse sint. Dolores nostrum blanditiis cupiditate
            quaerat voluptatum, cum aperiam voluptatem possimus neque illum
            alias pariatur optio inventore voluptas, modi maiores provident?
            Culpa officia obcaecati iste nesciunt sunt rerum fuga harum ducimus
            provident cum officiis, dicta itaque ullam veritatis! Dolorem
            consectetur omnis fuga fugiat vitae suscipit inventore optio,
            aspernatur consequuntur at, corporis eos, totam ratione obcaecati
            delectus sed nesciunt dolore earum hic minus iste possimus ipsum
            esse? Neque ipsum rerum nam optio sit facere, perspiciatis sunt cum
            quisquam cupiditate deleniti expedita, vitae, eligendi natus
            molestiae! Non aliquam cumque reiciendis cupiditate impedit
            voluptas, dolore consequatur ab maiores, quasi optio veritatis
            quibusdam illum, molestias deleniti excepturi beatae praesentium?
            At, harum a deserunt voluptate fuga rerum officia, debitis tenetur
            adipisci esse, pariatur mollitia. Aliquam nihil rerum praesentium ab
            dignissimos, pariatur dolores earum omnis! Sint quidem maiores
            excepturi, atque temporibus aperiam quasi doloremque ullam laborum,
            consectetur doloribus voluptas nobis nam facere ducimus nulla quo.
            Iure minus voluptate accusamus, consequatur enim quod tempore
            dolorum praesentium corrupti neque nostrum deserunt ipsa commodi,
            veritatis temporibus voluptatum sunt nulla explicabo expedita harum
            exercitationem cumque maxime esse! Fuga fugiat commodi temporibus,
            odio mollitia architecto veritatis aut magni fugit tenetur qui
            aperiam vel nesciunt? Esse consequuntur earum molestiae accusantium
            hic est eos ullam nostrum dolores fugiat, suscipit pariatur
            delectus, blanditiis quidem enim illum commodi repudiandae quaerat
            ipsum. Facere provident, molestiae illum maiores, fugit aspernatur
            vero quaerat sequi similique nobis adipisci minus modi magni? Harum
            accusantium similique fugiat modi possimus tempora quia est a
            dolorem, ut, nobis adipisci. Ex atque nisi suscipit error distinctio
            pariatur aut nulla beatae numquam architecto, rem inventore quia
            esse sapiente voluptates quos est culpa? Cupiditate, sint quibusdam
            ad, quia officia atque facere non a quos natus iure cum! Laboriosam
            veritatis expedita quibusdam, deleniti sapiente, id facere, alias
            nesciunt impedit tenetur pariatur placeat reiciendis? Laudantium
            odio, magnam odit velit repudiandae, officiis a id repellendus amet
            magni consequuntur perferendis neque mollitia eius illo commodi
            maxime soluta aspernatur nostrum labore facilis earum omnis? Optio
            labore placeat ab est natus, dolor quam. Iste incidunt cupiditate
            similique delectus repellat earum praesentium expedita cumque,
            voluptates, corrupti, maiores esse tempore voluptatum? Aliquid minus
            veniam necessitatibus autem, quod tempora. Corrupti, nesciunt
            officia culpa pariatur doloremque accusamus eius hic recusandae
            vero, illum ab explicabo distinctio reiciendis harum. Commodi,
            nostrum ut! Pariatur, eaque, totam cumque sunt nesciunt dolores sit
            vero nostrum, voluptas voluptate sequi perferendis praesentium modi
            fugit nulla. Eveniet accusamus provident quibusdam repudiandae minus
            commodi eos inventore numquam blanditiis laborum velit, mollitia cum
            ea quasi, corrupti voluptates sapiente hic sed. Nihil beatae quod
            assumenda nulla non odio quae vel consequuntur deserunt aliquam sed
            debitis harum, accusamus obcaecati minus ipsam ipsa labore
            voluptatem mollitia dolore et totam? Mollitia, delectus perferendis
            iusto architecto explicabo beatae quaerat recusandae culpa sunt
            accusamus a placeat omnis quam? Iusto vel officia, dolorum esse
            nesciunt explicabo nobis nulla! Ab nam quasi voluptatem facilis,
            incidunt omnis, veniam sint vero explicabo ratione nesciunt iure eum
            laudantium praesentium maiores officia quam impedit, repellat
            quaerat sed? Explicabo, officia quis? Laborum expedita placeat,
            assumenda atque distinctio libero autem, fugiat facere tempore fuga
            voluptates praesentium quia voluptas illum consequuntur quam,
            necessitatibus iure cumque repudiandae impedit aperiam. Praesentium,
            iure nam a quo fugiat dolor ipsa libero illo corrupti inventore
            rerum vero, magnam, tempora quas modi deleniti velit. Ipsam tenetur
            facere, tempore fugit enim laudantium eveniet sunt quisquam quod
            fugiat consectetur exercitationem doloremque vero eos quam
            asperiores libero, culpa quibusdam aliquam ducimus quidem natus
            reprehenderit mollitia amet! Rerum, accusantium eius, rem tenetur
            labore quos hic reiciendis doloremque similique exercitationem
            aspernatur in corrupti neque. Velit quas, dolor animi atque quos rem
            tempora nobis illo nostrum, similique doloremque maxime. Neque
            recusandae veniam beatae, quis nesciunt ut laborum quidem iste quas
            aliquam voluptatum aspernatur expedita, repellendus laboriosam
            exercitationem rerum nemo fugiat, voluptate doloribus nam
            accusantium. Modi consectetur qui ducimus blanditiis tempora harum
            officia consequuntur maiores, dolores, quo laborum nihil deleniti
            dolor aliquam ut voluptas debitis suscipit voluptatum facilis
            expedita? Consequatur molestias, cum modi, sequi, dicta tempora eius
            dolor quasi ipsam enim consequuntur mollitia similique dolore sit
            exercitationem blanditiis sapiente eveniet eligendi. Modi temporibus
            nemo voluptatibus incidunt necessitatibus magnam consequatur neque
            molestiae debitis, saepe inventore cumque totam repellendus expedita
            repudiandae molestias repellat dicta accusamus eveniet delectus
            facere? Saepe hic quos in consequatur distinctio iusto eos? Possimus
            rerum, voluptas saepe aut vitae officia quas accusantium
            voluptatibus ad ut quae assumenda facilis totam, quod natus
            obcaecati iure autem. Reprehenderit id et fuga aperiam ad enim,
            laudantium incidunt? Nostrum suscipit debitis molestiae harum vero
            doloremque vel tenetur veritatis doloribus consequuntur! Molestiae
            soluta rem labore aliquam, sapiente aut provident excepturi
            accusamus nisi officiis exercitationem perspiciatis ut nihil,
            officia quod necessitatibus cumque commodi consectetur enim
            repudiandae! Suscipit vero quae dicta fuga, similique, placeat
            praesentium dolorem perspiciatis sequi accusantium quasi error in
            minima? Minus doloremque tenetur delectus voluptatum minima iure
            magni. Temporibus explicabo assumenda expedita alias voluptatem,
            dolor pariatur asperiores culpa aut vitae eaque enim ut labore iure,
            quia totam voluptas cum tempora mollitia quo. Error quo
            exercitationem repellendus, ipsam eos eius sit velit perspiciatis
            vel ipsa. Temporibus culpa maxime reiciendis illum at, deleniti
            distinctio voluptates quidem unde deserunt quo in recusandae
            perspiciatis suscipit accusamus, hic voluptatem veniam. Ipsam nulla
            sequi, corrupti vitae totam iste voluptates doloribus repellat
            eveniet unde tempora natus obcaecati? Necessitatibus veritatis
            obcaecati maxime odio amet, sint aut quos natus eveniet sed a eius
            sit. Ad architecto beatae placeat soluta magni ipsum incidunt
            quibusdam quo, voluptate tenetur est aliquam temporibus suscipit
            sequi? Deserunt quae consequatur dignissimos animi libero voluptates
            ad quos neque quod consectetur sunt inventore, nemo velit eligendi!
            Quis expedita, cumque fugiat consectetur fuga est recusandae
            assumenda ab dolorem asperiores rerum libero maiores vel natus,
            incidunt officiis ipsa, itaque voluptatem aliquid? Vitae dolores
            dolor est quia obcaecati quibusdam libero, adipisci aspernatur?
            Repellat neque sapiente at, laudantium quisquam repellendus quo
            pariatur blanditiis eius, deleniti doloremque obcaecati expedita
            commodi quis similique explicabo officia, dignissimos dicta laborum!
            Consequatur dolores rem libero facere delectus quibusdam incidunt
            error similique nam inventore quos ea nihil ducimus beatae corrupti
            labore vel aliquam tempora consectetur accusantium quisquam odio
            molestiae, minus odit! Odit natus ullam labore iure similique
            accusamus maxime ab veritatis? Dolorum reprehenderit natus numquam
            alias quis quam, omnis incidunt ipsum. Ex necessitatibus in quaerat
            nam officiis consectetur voluptates nihil aspernatur mollitia totam
            repellendus maxime, recusandae illum eaque pariatur ullam laboriosam
            minus magni neque. Voluptates perspiciatis ipsam earum facere
            quibusdam eos necessitatibus cum iusto dolores ut culpa beatae ex
            ratione blanditiis molestias eum non dolorum minus suscipit quis,
            repudiandae modi ea. Ut, dolorem reiciendis obcaecati quo iste
            aliquam, molestiae sed, impedit iusto atque quia. Esse, maxime
            neque! Ab repellendus consequatur ducimus eos, nihil eligendi ipsam
            expedita accusamus rem possimus ullam aperiam minima iste amet
            perferendis iusto impedit harum quia explicabo. Ea facere
            exercitationem quibusdam vel. Vero aperiam, omnis repellendus porro
            iste repellat ducimus perspiciatis culpa corrupti, sunt rem. Quae
            velit ab tenetur ratione sed dolore earum, provident voluptas dicta
            libero laboriosam eos vitae explicabo consectetur veritatis
            reprehenderit at perspiciatis possimus nulla saepe delectus in
            recusandae voluptatum. Nobis consequatur atque velit itaque, eum
            tempora natus accusantium, repudiandae esse, alias similique
            voluptatem magnam quibusdam optio? Commodi placeat soluta pariatur
            beatae ex facere vero. Perspiciatis debitis, beatae nostrum
            accusamus repudiandae corporis illum velit officia sequi illo culpa
            at, blanditiis repellat, accusantium ipsa fugiat dolorum. Totam
            aliquam ipsum excepturi voluptatem eligendi ipsam alias, ex maxime
            quos at error recusandae. Dolorum dolore nihil ea dolores molestias
            libero obcaecati, nulla natus ab atque earum tempore aspernatur! Et
            accusamus odio pariatur, ratione odit cumque mollitia quam voluptas
            doloribus harum quia labore hic facilis reprehenderit dolores
            itaque! Deserunt dolore sint corrupti tempora a animi, commodi
            consequuntur doloremque cumque cum nam culpa alias incidunt iste ex
            porro sit provident praesentium ad! Possimus unde obcaecati
            asperiores et saepe aperiam voluptas tenetur natus atque
            exercitationem id laborum at, odit iure pariatur distinctio! Fuga
            corporis officia molestias. Incidunt aperiam eius, neque officia
            quia at itaque in esse ad sapiente alias tenetur corporis numquam!
            Delectus, fuga possimus commodi alias iure perferendis quod fugit
            aspernatur quos incidunt sint totam quidem minus nostrum
            exercitationem perspiciatis, sunt vitae saepe libero esse deserunt,
            ut nesciunt voluptatum! Illum molestias officia commodi non maxime
            repellendus odio aliquid sit sed laboriosam. Mollitia similique eos
            non reiciendis, assumenda vitae totam molestiae sequi alias deleniti
            commodi, deserunt ipsa iste fugit. Autem magnam officiis quasi ullam
            molestiae sunt laborum explicabo aut. Sint, recusandae natus a
            deleniti, quo nemo odio suscipit corrupti, culpa error delectus
            explicabo quidem dicta? Ab facilis nisi omnis voluptate modi
            suscipit beatae quibusdam, dignissimos optio earum. Exercitationem
            quae maxime impedit aperiam delectus porro error sint aspernatur
            ullam vero suscipit a ea quasi omnis consequatur aliquid, quod nemo
            necessitatibus autem. Debitis et id, nemo repellat nam quibusdam
            aspernatur vero deserunt libero suscipit, voluptatem quisquam nisi
            odit eligendi minima facere blanditiis excepturi saepe
            necessitatibus assumenda ea molestiae tempore voluptatum nulla! Quis
            deleniti consequuntur rerum repellendus accusamus laborum illum,
            commodi reprehenderit neque, nemo magnam! Dignissimos, laboriosam
            quas omnis exercitationem ab nemo corrupti quis, explicabo, dolores
            aliquam expedita aspernatur quaerat! Quis, tempore minus saepe
            aspernatur distinctio quam quaerat et tenetur quisquam quia odio
            praesentium dignissimos numquam id vitae placeat veniam! Enim
            dignissimos ratione porro ea! Alias est veritatis, asperiores cumque
            voluptate enim assumenda quaerat dolorum doloremque fugit modi esse
            aperiam voluptates vitae facilis? Ipsum accusantium quia iste
            nesciunt sit veniam, quos ea in optio, impedit corrupti sint quidem
            iure quaerat placeat. Quibusdam iure quo voluptates numquam,
            consectetur voluptate odit ipsum dolorum dolore suscipit aperiam.
            Delectus repellendus modi eum nobis libero molestiae ad nisi veniam
            amet animi? Dolore, minus? Libero nulla repellendus, recusandae
            corporis ad perferendis exercitationem ipsa dolorum aliquid culpa
            deleniti quae, distinctio quam ratione rerum minus reprehenderit
            earum quaerat unde architecto! Dolorem, nesciunt nobis tempore
            exercitationem corporis fugit expedita eos in nulla unde aliquam
            modi id magnam ipsa voluptatibus minima debitis culpa illum! Est
            dignissimos delectus quasi quibusdam provident placeat minima. Natus
            ipsam, incidunt voluptatem nam in tempora dolor architecto
            temporibus quam sapiente harum consequatur aperiam, quo neque
            delectus sed quae totam! Sequi et labore natus, voluptatum,
            reprehenderit nisi cupiditate eveniet dolorem repellat ab unde,
            ipsam ad dolores officiis! Hic blanditiis neque placeat maxime
            cumque, rerum, fuga architecto est magnam praesentium possimus
            aliquid ab tempora molestiae aperiam. Autem, tempora natus laborum
            cum, nesciunt sequi velit non, officia odit adipisci at. Eius culpa
            molestias facere deserunt dicta, quisquam ducimus ex adipisci quidem
            quis libero? Excepturi quae quam aspernatur dignissimos error
            pariatur repudiandae quos non repellat dolores! Cum soluta natus
            optio, explicabo, voluptatem laboriosam inventore, ipsa blanditiis
            dolorem aliquam nihil. Harum, accusamus! Nam architecto quia dolorum
            ad delectus accusantium a, voluptas pariatur. Quisquam, autem
            aspernatur quaerat illum aperiam minima, odit consequuntur tempore,
            ducimus neque eos exercitationem! Doloribus ducimus blanditiis illo
            eveniet labore adipisci dignissimos sequi, magni animi voluptate,
            nihil odit vitae fugiat? Corporis non quo mollitia autem.
            Voluptatibus tempore, odio error earum ut enim adipisci tenetur aut
            a voluptatum ratione perferendis quae aliquid dicta molestiae
            quaerat, magni consequuntur fuga vel pariatur velit iure eos dolor.
            Fugit ab laboriosam eveniet animi consectetur sed. Quod nemo placeat
            recusandae voluptate ea dolorum voluptas corporis est illo
            asperiores, tempora nesciunt architecto maiores inventore velit
            perspiciatis assumenda obcaecati tenetur, odit impedit eius ratione!
            Sapiente sequi excepturi cumque facilis amet iure consectetur alias
            ipsam explicabo, rem dolores quam? Mollitia quisquam magni omnis
            adipisci dolor molestiae similique vero enim dolores esse tempore
            illum voluptate cum illo vitae suscipit consectetur reiciendis
            voluptas autem, quasi quo explicabo! Eligendi esse eum odio unde
            minus minima debitis omnis asperiores, incidunt iusto repellat
            dignissimos nobis eveniet ipsam cupiditate fugit dolor, rem, aperiam
            illum ut. Accusantium labore rem iure eum sed. Asperiores dicta ab
            nostrum commodi aliquid minima enim, quasi neque est maxime iste
            sapiente corrupti ducimus molestias provident laboriosam repellat
            accusamus minus rem iusto quidem impedit. Eius dignissimos odit odio
            excepturi inventore exercitationem et, dolores consequuntur culpa
            laudantium fugiat ipsam debitis rem sit ducimus quia atque deserunt
            asperiores neque maiores quidem repellendus molestias optio?
            Praesentium exercitationem libero ullam facere eum natus fugiat
            perferendis ipsum. Voluptas, sint laboriosam. Sed blanditiis at
            fugiat totam rerum eligendi, facere, maxime nostrum fugit beatae
            praesentium nam eius rem? Ea iusto distinctio hic labore error nam
            quisquam quos facere, deserunt unde eaque cum perspiciatis modi
            numquam sint ad reprehenderit neque optio voluptas dolores
            cupiditate tempora at ipsa amet. Eligendi eveniet ipsa dolorum
            voluptatum recusandae veniam vero obcaecati beatae a suscipit,
            temporibus unde similique nemo explicabo odit aut cum assumenda
            debitis ullam nam et repellat quod adipisci molestias. Facere sunt
            atque et assumenda rerum quos ducimus possimus laboriosam ex
            deleniti alias, pariatur voluptas repudiandae at asperiores velit
            vel voluptate error omnis fugit corrupti dolore sit numquam nostrum!
            Voluptatem, quas quae molestiae aliquid numquam iure quasi voluptas
            sint quisquam recusandae, quidem odit! Cupiditate ad quam recusandae
            reprehenderit adipisci asperiores dolores aliquid minima amet
            facilis commodi doloribus corrupti, esse accusantium rem
            necessitatibus enim? Consequuntur ipsa rem reiciendis saepe, minus
            sapiente praesentium veritatis expedita tempora quae ratione. Earum
            quidem, aspernatur veniam omnis assumenda, sequi repellendus
            excepturi a dolorum voluptas illum ea minus praesentium eius cum
            cumque ipsam recusandae enim, laborum quaerat qui id exercitationem
            quam beatae? Dolores cum est eius quam, et officiis modi aliquam,
            quaerat aut optio temporibus voluptatem aspernatur magnam natus
            dolorum nihil magni a. Necessitatibus magnam enim quam provident
            fuga eos odit voluptas reprehenderit id sed aspernatur laudantium
            eum, nisi non quo explicabo quas ipsum ad aperiam eligendi! Aperiam
            sequi ab, ipsam quos et officia minus quis quisquam dolorum quidem
            soluta. Mollitia ex qui ipsum quo eos quod iure odio, officiis
            incidunt fugit! Libero ullam dolorum dicta atque eius iste modi
            repudiandae dolores obcaecati quibusdam, at quas rerum ipsam vel
            porro quae velit molestiae asperiores? Reiciendis laboriosam
            expedita dolorum laudantium incidunt nemo non harum atque earum
            assumenda beatae tempora, in nulla et animi ipsum iure quibusdam hic
            molestias officiis. Nesciunt molestias et officiis, obcaecati
            corporis saepe magnam dolores cupiditate numquam veritatis sapiente
            consequuntur eaque illo qui earum harum. Sunt aliquam iste maxime
            amet est repudiandae. Autem accusantium minus consequatur nesciunt
            id, molestiae illum nam, quod eos non odio magni in! Quia distinctio
            optio consectetur qui laudantium reiciendis, labore laboriosam
            similique sunt quos enim quasi voluptas quam officiis ab velit
            explicabo consequatur eveniet voluptatem facilis quas placeat
            nostrum. Vero quisquam praesentium sunt doloribus nesciunt deleniti
            laboriosam cupiditate temporibus deserunt dignissimos! Expedita
            tenetur debitis facere saepe omnis officia magnam, deserunt quo at.
            Maxime commodi ea architecto dignissimos repellat quaerat, nulla
            laudantium aliquid. Nobis harum fugiat laboriosam? Voluptatem magnam
            rerum error excepturi numquam praesentium, non qui a magni
            blanditiis commodi eaque, itaque repellendus eveniet maiores
            necessitatibus illo omnis, officia ipsum cumque culpa facere amet
            ut. Tempore libero sint in, vel laboriosam quas corrupti facere, sit
            aliquam et ipsam, quam tenetur repellat aliquid voluptatem! Amet,
            maiores, numquam distinctio sapiente commodi, eveniet provident
            voluptatem ea quis modi quos natus totam libero. Modi, architecto.
            Vero maxime, ad repudiandae, autem beatae minima dolores iusto et
            iste ipsa nemo saepe natus? Soluta maiores officiis dolorum corrupti
            rerum accusantium eligendi placeat ipsam, fugit quo natus pariatur
            officia iste, consectetur dolores optio nihil quos? Culpa et
            voluptatum praesentium eveniet a, quos molestiae earum minima
            nesciunt in aperiam deserunt fuga animi dolorum quae nam, sunt
            repellat accusantium similique ut. Voluptatum asperiores nobis ex
            fugit eveniet autem. Nesciunt amet delectus dignissimos repellendus
            sunt quia asperiores numquam commodi dicta, esse voluptatum eaque
            repellat qui enim corrupti? Fugit nemo voluptas ut placeat
            temporibus iste saepe, iure molestiae sint unde ipsum. Odio ad
            explicabo deleniti suscipit magnam, quo debitis delectus tenetur
            dolorum doloremque laudantium! Voluptates dolor magni consectetur
            cumque ipsam doloribus blanditiis repellat nam deleniti vel!
            Maiores, aliquid laudantium voluptate laboriosam esse delectus?
            Doloribus praesentium odit animi nemo, quae suscipit est. Eius
            eligendi unde doloribus recusandae, obcaecati accusamus illo
            voluptatem mollitia aliquam quasi corrupti blanditiis vel tempore
            reprehenderit ex nam quis assumenda aut placeat amet reiciendis
            natus aspernatur voluptates? Eum, inventore? Vitae sint tempora id
            ipsam, tempore harum consectetur natus culpa ullam mollitia quas
            iste! Autem laboriosam repellat eius deleniti ipsum perferendis
            placeat, eveniet temporibus corporis magnam, esse omnis, soluta
            voluptatem iste! Incidunt, sequi iste. Aliquam dolore nihil vero
            fugiat explicabo? Quasi vitae autem animi labore esse. Molestias
            dolorum iure itaque mollitia ipsum praesentium dolores? Sequi
            accusantium id delectus labore quibusdam impedit assumenda
            recusandae aut similique voluptates pariatur maiores porro,
            laboriosam ipsam consequuntur molestias amet quisquam aliquid quae
            odit cumque! Neque ut corrupti pariatur eveniet omnis ex maxime
            placeat saepe odit repudiandae rem culpa veniam, velit nobis est
            accusamus corporis doloribus sapiente impedit illo officia. Eaque,
            consequatur iste. Inventore tempore quo ut recusandae quia magnam,
            placeat maxime officia, qui incidunt obcaecati fuga dolores
            cupiditate repellat a itaque accusantium soluta, in consequatur
            fugit facere libero illo nam! Repudiandae nisi beatae libero error
            tenetur labore debitis explicabo dolore placeat assumenda ut,
            tempora nihil odit, dolor inventore hic temporibus. Quos dicta
            mollitia veritatis sapiente fuga sint dolor eius et velit ab illum
            at eaque asperiores tenetur, nihil debitis autem cumque quasi ut
            unde quod optio quidem fugiat. Sequi perspiciatis, deserunt corporis
            illo nam natus, culpa hic minima numquam consequatur cum animi
            consequuntur quidem cupiditate? Aut iste voluptatem facilis eaque
            sapiente minima ipsa suscipit, nobis ipsam dolores facere. Officiis,
            debitis! A adipisci quo, praesentium non amet, est iure ut magni
            porro quasi, incidunt possimus fugit quod hic temporibus officia eos
            provident ullam corrupti in? Neque soluta harum sunt temporibus
            aspernatur ex error perferendis inventore in repellendus, non
            necessitatibus dolore praesentium at, dignissimos illo repellat,
            impedit obcaecati minima porro alias. Neque adipisci non illo
            distinctio voluptatibus nihil similique, pariatur commodi doloremque
            accusantium inventore odio eius id at laboriosam sed numquam hic
            quidem magni incidunt repudiandae consectetur rerum. Ratione
            necessitatibus quaerat autem repellat, maxime nemo quae soluta
            obcaecati voluptatem numquam alias rerum labore recusandae facere,
            dicta voluptate. Ab, suscipit nihil officia obcaecati possimus quam
            vel laborum vero, illum fugiat, ratione quo! Omnis eos laudantium
            veniam totam nobis dicta doloremque consequatur quasi rerum, optio
            culpa asperiores expedita maxime quam ipsa fugit minus harum!
            Reprehenderit optio, aperiam harum laborum consequuntur, sunt iste
            iusto facilis unde quis accusamus cum repellat odio, expedita at ut
            aspernatur explicabo. Voluptate saepe sequi ea omnis facere ex,
            voluptatibus esse reiciendis, ducimus laboriosam odio laborum optio,
            nam tempore exercitationem? Eligendi nemo odit sit, omnis alias
            tenetur! Illum ea, quae architecto quos modi nihil cupiditate
            provident, sint pariatur omnis nulla nostrum exercitationem officiis
            facere accusantium quasi voluptatem tenetur repudiandae corporis
            maxime minus, enim alias? Delectus enim architecto ipsum repellendus
            perspiciatis minima, praesentium totam similique molestias dolore
            nulla quasi iure ipsa cupiditate tenetur consequuntur atque sint
            aspernatur deleniti facilis? Veniam molestiae itaque distinctio
            dolorem minima vitae saepe, natus velit exercitationem voluptatum
            eaque! Voluptate soluta facilis quis perferendis animi dolore ipsam,
            quaerat rem exercitationem in reiciendis debitis numquam quas
            suscipit ipsa tempore dolorum repudiandae voluptatum laboriosam
            praesentium earum rerum. Quas qui reprehenderit cupiditate id non
            pariatur, a maiores nobis dolor consequuntur nesciunt, labore quis,
            ipsam in molestias quisquam. Quam fuga aut quibusdam consequatur
            tenetur eaque saepe eveniet minima. Fuga incidunt fugiat dolore?
            Laboriosam cupiditate excepturi nisi incidunt ipsa facere ipsam
            mollitia nihil blanditiis inventore sint exercitationem, deserunt,
            cum molestiae aperiam debitis illum dicta quasi numquam officiis
            tempore eius enim molestias necessitatibus! Nulla voluptas id
            nostrum quae excepturi illum et magnam modi sequi consequatur
            consectetur porro doloremque at illo, quasi nemo unde enim alias
            deleniti dolorem nesciunt reiciendis mollitia iste? Harum facilis
            eos sit dolor laborum!
          </p>
        </div>
      </div>
    </>
  );
};

export default ScrollBased;
