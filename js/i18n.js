/**
 * Phare numérique — i18n FR / EN / RU
 * Détection : BY, UA, RU → ru · FR → fr · ailleurs → en
 */
(function () {
  const STORAGE_KEY = "phare_lang";
  const CIS = ["BY", "UA", "RU"];

  const T = {
    fr: {
      "meta.index.title": "Phare numérique — Développement web & mobile à distance",
      "meta.index.desc": "WordPress, Elementor, PHP et Flutter. Sites sur mesure, migrations, apps — à distance.",
      "meta.works.title": "Travaux — Phare numérique",
      "meta.works.desc": "Études de cas WordPress, migrations et Flutter — Phare numérique.",
      "meta.mobile.title": "Phare numérique — mobile",
      "meta.mobile.desc": "Version mobile — WordPress, Flutter, à distance.",
      "meta.meetnsing.title": "Meet'n'Sing — Étude de cas · Phare numérique",
      "meta.meetnsing.desc": "Application Flutter multifonction — karaoké, social, reconnaissance musicale.",
      "meta.equilibre.title": "Fruchart Équilibre — Étude de cas · Phare numérique",
      "meta.equilibre.desc": "Migration Wix → WordPress · mu-plugins PHP · SMTP o2switch · site coach minceur.",
      "meta.horloge.title": "Horloge Houriez — Étude de cas · Phare numérique",
      "meta.horloge.desc": "Horloge bureau Windows — Tauri, Rust, WebView2. Heure locale exacte, quel que soit le pays.",
      "meta.about.title": "À propos — Phare numérique",
      "meta.about.desc": "Développeur web & mobile à distance — WordPress, Flutter.",
      "meta.contact.title": "Contact — Phare numérique",
      "meta.contact.desc": "Formulaire de contact — projet web, migration WordPress ou application Android.",
      "meta.contactSent.title": "Message envoyé — Phare numérique",
      "meta.contactSent.desc": "Votre message a bien été envoyé — réponse sous 48 h.",
      "meta.tarifs.title": "Tarifs — Phare numérique",
      "meta.tarifs.desc": "Fourchettes indicatives — intervention, chantier WordPress, app sur mesure. Remote, devis après brief.",

      "common.skip": "Aller au contenu",
      "common.menu": "Menu",
      "common.navLabel": "Principale",
      "common.langLabel": "Langue",
      "brand.line1": "Phare",
      "brand.line2": "numérique",
      "brand.hero": "Phare<br /><em>numérique</em>",
      "brand.full": "Phare numérique",
      "nav.home": "Accueil",
      "nav.works": "Travaux",
      "nav.about": "À propos",
      "nav.contact": "Contact",
      "nav.pricing": "Tarifs",
      "common.study": "Étude →",
      "common.read": "Lire →",
      "common.footerTag": "© Phare numérique — WordPress · Flutter · à distance",
      "common.footerShort": "© Phare numérique",
      "common.mobileVersion": "Version mobile",
      "common.desktopVersion": "Version bureau",
      "common.contactLink": "Contact",
      "common.discuss": "Discuter d'un projet",
      "common.backWorks": "← Travaux",

      "index.hero.title": "Développement web & mobile à distance",
      "index.hero.lead": "WordPress sur mesure, migrations propres, apps Flutter — du brief à la prod, depuis loin mais présent.",
      "index.cta.works": "Voir les travaux",
      "index.cta.contact": "Me contacter",
      "index.strip.eyebrow": "Sélection",
      "index.strip.title": "Trois chantiers qui montrent le craft",
      "index.w1.title": "Fruchart Équilibre",
      "index.w1.meta": "Migration Wix → WordPress · mu-plugins PHP · formulaires & SEO",
      "index.w2.title": "Meet'n'Sing",
      "index.w2.meta": "Application Flutter · livraison end-to-end",
      "index.w3.title": "Horloge Houriez",
      "index.w3.meta": "Horloge bureau Tauri · heure locale · exe Windows",

      "works.title": "Travaux",
      "works.lead": "Trois études de cas réelles — migration WordPress, application Flutter, horloge bureau Tauri. Pas de fausses vitrines.",
      "works.w1.meta": "Migration Wix → WordPress / Elementor · PHP mu-plugins · SMTP · Schema.org · PC & mobile",
      "works.w2.meta": "App mobile Flutter — parcours utilisateur, écrans, livraison",
      "works.w3.meta": "Horloge bureau Tauri · heure locale · exe Windows",

      "about.title": "À propos",
      "about.lead": "Phare numérique — développement web et mobile à distance, du site vitrine à l'application complète.",
      "about.p1": "Je conçois et développe des sites WordPress sur mesure, des migrations propres et des applications Flutter — en remote, avec un dialogue clair et des livrables qui tiennent la route.",
      "about.p2": "Je travaille avec des clients qui veulent un interlocuteur technique fiable, pas une usine à templates.",

      "contact.title": "Parlons de votre projet",
      "contact.lead": "Décrivez où vous en êtes — je réponds sous 48 h.",
      "contact.filter": "Projets web et logiciels sur mesure — pas d'assistance informatique (PC, Word, Outlook, imprimante…).",
      "contact.field.prenom": "Prénom",
      "contact.field.email": "E-mail",
      "contact.field.need": "Votre besoin",
      "contact.field.project": "Votre projet",
      "contact.need.placeholder": "Choisissez…",
      "contact.need.migration": "Migration ou refonte de site web",
      "contact.need.wordpress": "Site WordPress sur mesure",
      "contact.need.android": "Application Android",
      "contact.need.desktop": "Petit logiciel Windows (scope simple)",
      "contact.need.other": "Autre projet web ou Android",
      "contact.project.placeholder": "Ex. : migrer mon site Wix (6 pages) vers WordPress · app Android type catalogue · petit exe Windows",
      "contact.submit": "Envoyer ma demande",
      "contact.trust": "Réponse sous 48 h · sans engagement · FR / EN / RU",
      "contact.success": "Message envoyé. Je reviens vers vous sous 48 h.",
      "contact.fileWarning": "Le formulaire ne fonctionne pas en double-clic sur le fichier HTML. Testez via GitHub Pages ou lancez un serveur local dans le dossier Portfolio : python -m http.server 8080 puis http://localhost:8080/contact.html",
      "contact.alt": "Ou par e-mail :",
      "contact.form.aria": "Formulaire de contact",
      "contact.email": "frucharthadrien@gmail.com",
      "contact.note": "Réponse sous 48 h · français, anglais, russe.",

      "contactSent.eyebrow": "Envoyé",
      "contactSent.title": "Message bien reçu",
      "contactSent.lead": "Merci — je lis chaque demande et je reviens vers vous sous 48 h.",
      "contactSent.note": "Pensez à vérifier les spams si vous ne voyez pas ma réponse.",
      "contactSent.cta.works": "Voir les travaux",
      "contactSent.cta.home": "Retour à l'accueil",

      "pricing.eyebrow": "Modalités",
      "pricing.title": "Tarifs",
      "pricing.lead": "Fourchettes indicatives · 100 % remote · devis affiné après brief. On cadrer le périmètre ensemble avant de démarrer — pas de mauvaise surprise.",
      "pricing.cards.aria": "Formules",
      "pricing.c1.kicker": "Ponctuel",
      "pricing.c1.title": "Intervention",
      "pricing.c1.from": "à partir de",
      "pricing.c1.unit": "/ demi-journée",
      "pricing.c1.desc": "Audit, bug, module isolé, reprise technique sur l'existant.",
      "pricing.c1.li1": "Diagnostic & proposition",
      "pricing.c1.li2": "Correctif ciblé ou petit livrable",
      "pricing.c1.li3": "Idéal : débloquer un site ou un formulaire",
      "pricing.c2.kicker": "Le plus demandé",
      "pricing.c2.title": "Chantier web",
      "pricing.c2.from": "à partir de",
      "pricing.c2.unit": "/ jour · forfait fréquent",
      "pricing.c2.desc": "WordPress sur mesure, migration Wix, formulaires, SEO de base, mise en prod.",
      "pricing.c2.li1": "Forfait ou régie selon le projet",
      "pricing.c2.li2": "Livrables clairs, jalons définis",
      "pricing.c2.li3": "Ex. : migration type Fruchart Équilibre",
      "pricing.c3.kicker": "Sur mesure",
      "pricing.c3.title": "App & bureau",
      "pricing.c3.price": "Sur devis",
      "pricing.c3.unit": "à partir de 500 € / jour",
      "pricing.c3.desc": "Flutter, Tauri, produit complet — de l'idée au livrable installable.",
      "pricing.c3.li1": "Brief & chiffrage détaillé",
      "pricing.c3.li2": "Design + dev + packaging",
      "pricing.c3.li3": "Ex. : app mobile, exe Windows",
      "pricing.h2.included": "Inclus (dans le périmètre convenu)",
      "pricing.inc1": "Brief & cadrage initial",
      "pricing.inc2": "Code livré, propre et versionné",
      "pricing.inc3": "Mise en production si prévue au contrat",
      "pricing.inc4": "Échanges en français, anglais ou russe",
      "pricing.h2.extra": "En supplément",
      "pricing.ext1": "Rédaction ou reprise de contenu intégrale",
      "pricing.ext2": "Traductions, SEO avancé, photos pro",
      "pricing.ext3": "Hébergement, domaine, licences tierces",
      "pricing.ext4": "<strong>Maintenance</strong> — 65 € / h (min. 1 h) · forfait mensuel possible",
      "pricing.note": "Tarifs indicatifs HT · acompte au démarrage, solde à la livraison · devis gratuit après échange sur votre besoin.",
      "pricing.cta": "Discuter de votre projet →",

      "mns.kicker": "Application mobile",
      "mns.lead": "App sociale autour de la musique et du karaoké — conçue et développée en Flutter, de l'idée à l'interface que tu vois ici.",
      "mns.tag.maps": "Cartes & géoloc",
      "mns.tag.chat": "Messagerie",
      "mns.tag.audio": "Reconnaissance audio",
      "mns.stats.lines": "lignes de code",
      "mns.stats.screens": "écrans",
      "mns.stats.langs": "langues (FR · EN · RU)",
      "mns.stats.aria": "En chiffres",
      "mns.preview.aria": "Aperçu principal",
      "mns.hero.caption": "Accueil — hub de l'app",
      "mns.hero.alt": "Écran d'accueil Meet'n'Sing — tableau de bord avec navigation principale",
      "mns.gallery.eyebrow": "Captures",
      "mns.gallery.title": "Un produit complet, pas une démo",
      "mns.cap.echo": "<strong>Écho</strong> — identifier un titre en un geste (type Shazam)",
      "mns.cap.hathor": "<strong>Hathor</strong> — assistant & playlists guidées",
      "mns.cap.detect": "<strong>Détections</strong> — historique & bibliothèque",
      "mns.cap.affiche": "<strong>L'Affiche</strong> — tendances & nouveautés par pays",
      "mns.cap.profil": "<strong>Profil</strong> — styles, langues, géolocalisation",
      "mns.cap.lampe": "<strong>Lampe</strong> — parcours ludique intégré",
      "mns.alt.echo": "Écran Écho — reconnaissance musicale",
      "mns.alt.hathor": "Assistant Hathor — playlist guidée",
      "mns.alt.detect": "Historique des détections musicales",
      "mns.alt.affiche": "L'Affiche — découverte musicale",
      "mns.alt.profil": "Profil utilisateur personnalisable",
      "mns.alt.lampe": "Mini-jeu lampe magique Hathor",
      "mns.h2.what": "Ce que fait l'app (en clair)",
      "mns.p1": "Meet'n'Sing, c'est une <strong>application mobile multifonction</strong> pour les amateurs de chant et de karaoké : trouver des lieux près de chez soi, découvrir des titres, échanger avec d'autres membres, organiser des événements, et même reconnaître une musique qui passe à la radio.",
      "mns.p2": "Tout est pensé pour tenir sur un téléphone : interface soignée, plusieurs langues, compte sécurisé, notifications, messagerie entre membres.",
      "mns.h2.built": "Ce que j'ai construit",
      "mns.li1": "<strong>Tableau de bord</strong> — navigation vers tous les modules (profil, karaokés, chansons, messages…)",
      "mns.li2": "<strong>Karaokés sur carte</strong> — repérage des bars et salles (Google Maps ou Yandex selon le pays)",
      "mns.li3": "<strong>Catalogue local</strong> — milliers de titres consultables hors ligne sur le téléphone",
      "mns.li4": "<strong>Écho</strong> — enregistre un extrait audio et retrouve le morceau",
      "mns.li5": "<strong>L'Affiche</strong> — page découverte avec les hits et nouveautés par pays",
      "mns.li6": "<strong>Social</strong> — profils, filtres membres, chat, événements, crédits de contact",
      "mns.li7": "<strong>Hathor</strong> — expérience narrative pour composer des playlists",
      "mns.h2.tech": "Sous le capot (version courte)",
      "mns.p3": "Développée en <strong>Flutter</strong> (Android & iOS), avec <strong>Firebase</strong> pour les comptes, la base de données, le stockage fichiers et les notifications. Backend cloud pour la reconnaissance musicale et la mise à jour des tendances. Interface traduite en français, anglais et russe.",
      "mns.p4": "Projet abouti sur plusieurs mois — architecture modulaire, des dizaines de services métier, polish visuel (thèmes, animations, assets sur mesure).",
      "mns.back": "← Retour aux travaux",

      "fe.kicker": "Site WordPress métier",
      "fe.lead": "Migration complète depuis Wix — refonte, codage PHP (mu-plugins), formulaires sur mesure et mise en production chez o2switch avec envoi SMTP fiable.",
      "fe.tag.wp": "WordPress",
      "fe.tag.php": "PHP mu-plugins",
      "fe.tag.smtp": "SMTP o2switch",
      "fe.tag.seo": "SEO & Schema.org",
      "fe.stats.pages": "pages principales",
      "fe.stats.plugins": "mu-plugins PHP",
      "fe.stats.forms": "formulaires métier",
      "fe.stats.aria": "En chiffres",
      "fe.preview.aria": "Aperçu principal",
      "fe.hero.caption": "Accueil — menu, vidéo, méthode RAISON",
      "fe.hero.alt": "Page d'accueil Fruchart Équilibre — coach minceur et naturopathe",
      "fe.gallery.eyebrow": "Captures",
      "fe.gallery.title": "Un site complet en production",
      "fe.cap.form": "<strong>Formulaire</strong> — évaluation personnalisée, champs structurés, envoi SMTP",
      "fe.cap.method": "<strong>Méthode</strong> — parcours en 5 étapes vers le formulaire",
      "fe.cap.articles": "<strong>Articles</strong> — hub éditorial nutrition & minceur",
      "fe.alt.form": "Page formulaire d'évaluation — coordonnées et descriptif",
      "fe.alt.method": "Page méthode — schéma des étapes du parcours client",
      "fe.alt.articles": "Page articles — liste des publications",
      "fe.live": "Voir le site live →",
      "fe.h2.what": "Le chantier (en clair)",
      "fe.p1": "Fruchart Équilibre, c'est le site d'un <strong>coach minceur & naturopathe</strong> : méthode RAISON, vidéo explicative, articles, témoignages, tarifs et formulaire d'évaluation. Tout partait de <strong>Wix</strong> — il fallait repartir sur une base saine, sans export magique du code Wix.",
      "fe.p2": "Refonte totale : structure WordPress + Elementor pour la mise en page, avec le cœur technique <strong>codé en dur</strong> (menu mobile escalier, formulaires, SEO).",
      "fe.h2.built": "Ce que j'ai livré",
      "fe.li1": "<strong>Migration contenu</strong> — reprise fidèle page par page depuis le live Wix (textes intégraux, pas de résumés)",
      "fe.li2": "<strong>Code métier en PHP</strong> — styles et scripts toujours actifs, indépendants d'Elementor",
      "fe.li3": "<strong>Menu mobile escalier</strong> — déploiement diagonal, animation séquentielle",
      "fe.li4": "<strong>Formulaire d'évaluation</strong> — validation et envoi par e-mail en production",
      "fe.li5": "<strong>Témoignages</strong> — module dédié, envoi et affichage structuré",
      "fe.li6": "<strong>SEO</strong> — titres, meta, Schema.org par page",
      "fe.li7": "<strong>Production o2switch</strong> — déploiement, SSL, formulaires opérationnels",
      "fe.h2.tech": "Mise en production",
      "fe.p3": "Site en ligne chez <strong>o2switch</strong> avec SSL. Les formulaires (évaluation et témoignages) passent par la boîte <strong>contact@fruchartequilibre.com</strong> — envoi SMTP de l'hébergeur, messages reçus en conditions réelles.",
      "fe.back": "← Retour aux travaux",

      "hh.kicker": "Application bureau",
      "hh.lead": "Horloge Windows au design sur mesure — cadran spiralé, aiguilles animées en temps réel. L'heure affichée suit l'horloge système de l'utilisateur, correcte dans son pays et son fuseau.",
      "hh.tag.tauri": "Tauri",
      "hh.tag.rust": "Rust",
      "hh.tag.webview": "WebView2",
      "hh.tag.ui": "HTML · CSS · JS",
      "hh.stats.exe": "exe Windows",
      "hh.stats.hands": "aiguilles animées",
      "hh.stats.tz": "fuseaux couverts",
      "hh.stats.aria": "En chiffres",
      "hh.preview.aria": "Aperçu principal",
      "hh.hero.caption": "Capture live — l'horloge tourne réellement",
      "hh.hero.alt": "Horloge Houriez — cadran spiralé avec étoiles dorées et aiguilles en temps réel",
      "hh.h2.story": "L'histoire (en bref)",
      "hh.story": "En 1959, Christian Hourriez — élève à l'École Boulle — remporte un concours de la RTF avec un cadran original : les heures réparties sur une spirale, surnommée la « pendule escargot ». Diffusée à l'antenne de l'ORTF de 1959 à 1974, elle servait de mire : les téléspectateurs réglaient leur montre devant la télé. Un horloger fabriqua ensuite une version domestique — la célèbre pendule Trophy.",
      "hh.story2": "C'est un ami qui m'a donné l'idée de la recréer en application bureau.",
      "hh.h2.what": "Ce que c'est (en clair)",
      "hh.p1": "Une <strong>horloge de bureau Windows</strong> livrée en exécutable autonome (<code>HorlogeHouriez.exe</code>). Le cadran reprend le design iconique : spirale, étoiles aux points cardinaux, billes le long des orbites, boîtier aux formes arrondies — comme la pendule Trophy ORTF d'origine.",
      "hh.p2": "<strong>Elle marche.</strong> Les trois aiguilles tournent en continu (heures, minutes, secondes). L'heure affichée est celle de l'horloge système de la machine — donc l'heure locale exacte de l'utilisateur, <strong>quel que soit son pays</strong>, sans réglage manuel ni serveur distant.",
      "hh.h2.built": "Ce que j'ai construit",
      "hh.li1": "<strong>Interface sur mesure</strong> — cadran spiralé, assets visuels, animation des aiguilles",
      "hh.li2": "<strong>Temps réel</strong> — synchronisation sur l'horloge OS (fuseau local automatique)",
      "hh.li3": "<strong>Packaging bureau</strong> — exécutable Windows prêt à lancer, fenêtre dédiée",
      "hh.li4": "<strong>Stack Tauri</strong> — Rust côté natif, frontend web embarqué via WebView2",
      "hh.h2.tech": "Sous le capot (version courte)",
      "hh.p3": "L'app est compilée avec <strong>Tauri 2</strong> (Rust + WebView2). Le cadran est rendu en HTML/CSS/JS dans une WebView embarquée ; l'heure vient de l'API <code>Date</code> JavaScript, calée sur l'horloge système Windows — même principe qu'une horloge de bureau classique, avec ce design spiralé.",
      "hh.p4": "Projet compact, orienté craft visuel et fiabilité : une horloge qui se lance, tourne, et affiche la bonne heure partout où Windows connaît le fuseau local.",
      "hh.back": "← Retour aux travaux"
    },

    en: {
      "meta.index.title": "Digital Beacon — Remote web & mobile development",
      "meta.index.desc": "WordPress, Elementor, PHP and Flutter. Custom sites, migrations, apps — remote.",
      "meta.works.title": "Work — Digital Beacon",
      "meta.works.desc": "WordPress, migration and Flutter case studies — Digital Beacon.",
      "meta.mobile.title": "Digital Beacon — mobile",
      "meta.mobile.desc": "Mobile version — WordPress, Flutter, remote.",
      "meta.meetnsing.title": "Meet'n'Sing — Case study · Digital Beacon",
      "meta.meetnsing.desc": "Full-featured Flutter app — karaoke, social, music recognition.",
      "meta.equilibre.title": "Fruchart Équilibre — Case study · Digital Beacon",
      "meta.equilibre.desc": "Wix → WordPress migration · PHP mu-plugins · o2switch SMTP · coaching site.",
      "meta.horloge.title": "Horloge Houriez — Case study · Digital Beacon",
      "meta.horloge.desc": "Windows desktop clock — Tauri, Rust, WebView2. Accurate local time, wherever the user is.",
      "meta.about.title": "About — Digital Beacon",
      "meta.about.desc": "Remote web & mobile developer — WordPress, Flutter.",
      "meta.contact.title": "Contact — Digital Beacon",
      "meta.contact.desc": "Contact form — web project, WordPress migration or Android app.",
      "meta.contactSent.title": "Message sent — Digital Beacon",
      "meta.contactSent.desc": "Your message was sent — reply within 48 h.",
      "meta.tarifs.title": "Pricing — Digital Beacon",
      "meta.tarifs.desc": "Indicative ranges — intervention, WordPress project, custom app. Remote, quote after brief.",

      "common.skip": "Skip to content",
      "common.menu": "Menu",
      "common.navLabel": "Main",
      "common.langLabel": "Language",
      "brand.line1": "Digital",
      "brand.line2": "Beacon",
      "brand.hero": "Digital<br /><em>Beacon</em>",
      "brand.full": "Digital Beacon",
      "nav.home": "Home",
      "nav.works": "Work",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.pricing": "Pricing",
      "common.study": "Case →",
      "common.read": "Read →",
      "common.footerTag": "© Digital Beacon — WordPress · Flutter · remote",
      "common.footerShort": "© Digital Beacon",
      "common.mobileVersion": "Mobile version",
      "common.desktopVersion": "Desktop version",
      "common.contactLink": "Contact",
      "common.discuss": "Discuss a project",
      "common.backWorks": "← Work",

      "index.hero.title": "Remote web & mobile development",
      "index.hero.lead": "Custom WordPress, clean migrations, Flutter apps — from brief to production, far away but present.",
      "index.cta.works": "View work",
      "index.cta.contact": "Contact me",
      "index.strip.eyebrow": "Selection",
      "index.strip.title": "Three projects that show the craft",
      "index.w1.title": "Fruchart Équilibre",
      "index.w1.meta": "Wix → WordPress migration · PHP mu-plugins · forms & SEO",
      "index.w2.title": "Meet'n'Sing",
      "index.w2.meta": "Flutter application · end-to-end delivery",
      "index.w3.title": "Horloge Houriez",
      "index.w3.meta": "Tauri desktop clock · local time · Windows exe",

      "works.title": "Work",
      "works.lead": "Three real case studies — WordPress migration, Flutter app, Tauri desktop clock. No fake portfolios.",
      "works.w1.meta": "Wix → WordPress / Elementor migration · PHP mu-plugins · SMTP · Schema.org · desktop & mobile",
      "works.w2.meta": "Flutter mobile app — user flows, screens, delivery",
      "works.w3.meta": "Tauri desktop clock · local time · Windows exe",

      "about.title": "About",
      "about.lead": "Digital Beacon — remote web and mobile development, from showcase sites to full applications.",
      "about.p1": "I design and build custom WordPress sites, clean migrations and Flutter applications — remotely, with clear communication and solid deliverables.",
      "about.p2": "I work with clients who want a reliable technical partner, not a template factory.",

      "contact.title": "Let's talk about your project",
      "contact.lead": "Tell me where you're at — I reply within 48 h.",
      "contact.filter": "Custom web and software projects — no IT helpdesk (PC, Word, Outlook, printer…).",
      "contact.field.prenom": "First name",
      "contact.field.email": "Email",
      "contact.field.need": "Your need",
      "contact.field.project": "Your project",
      "contact.need.placeholder": "Choose…",
      "contact.need.migration": "Website migration or redesign",
      "contact.need.wordpress": "Custom WordPress site",
      "contact.need.android": "Android application",
      "contact.need.desktop": "Small Windows software (simple scope)",
      "contact.need.other": "Other web or Android project",
      "contact.project.placeholder": "E.g. migrate my Wix site (6 pages) to WordPress · Android catalogue app · small Windows utility",
      "contact.submit": "Send my request",
      "contact.trust": "Reply within 48 h · no commitment · FR / EN / RU",
      "contact.success": "Message sent. I'll get back to you within 48 h.",
      "contact.fileWarning": "The form does not work when opening the HTML file directly. Use GitHub Pages or run a local server in Portfolio: python -m http.server 8080 then http://localhost:8080/contact.html",
      "contact.alt": "Or by email:",
      "contact.form.aria": "Contact form",
      "contact.email": "frucharthadrien@gmail.com",
      "contact.note": "Reply within 48 h · French, English, Russian.",

      "contactSent.eyebrow": "Sent",
      "contactSent.title": "Message received",
      "contactSent.lead": "Thank you — I read every request and reply within 48 h.",
      "contactSent.note": "Check spam if you don't see my reply.",
      "contactSent.cta.works": "View work",
      "contactSent.cta.home": "Back to home",

      "pricing.eyebrow": "Terms",
      "pricing.title": "Pricing",
      "pricing.lead": "Indicative ranges · 100% remote · refined quote after brief. We scope together before starting — no nasty surprises.",
      "pricing.cards.aria": "Plans",
      "pricing.c1.kicker": "One-off",
      "pricing.c1.title": "Intervention",
      "pricing.c1.from": "from",
      "pricing.c1.unit": "/ half-day",
      "pricing.c1.desc": "Audit, bug fix, isolated module, technical rescue on existing code.",
      "pricing.c1.li1": "Diagnosis & proposal",
      "pricing.c1.li2": "Targeted fix or small deliverable",
      "pricing.c1.li3": "Ideal: unblock a site or form",
      "pricing.c2.kicker": "Most requested",
      "pricing.c2.title": "Web project",
      "pricing.c2.from": "from",
      "pricing.c2.unit": "/ day · fixed price common",
      "pricing.c2.desc": "Custom WordPress, Wix migration, forms, basic SEO, production deploy.",
      "pricing.c2.li1": "Fixed price or day rate",
      "pricing.c2.li2": "Clear deliverables, defined milestones",
      "pricing.c2.li3": "E.g. Fruchart Équilibre-style migration",
      "pricing.c3.kicker": "Custom",
      "pricing.c3.title": "App & desktop",
      "pricing.c3.price": "On quote",
      "pricing.c3.unit": "from €500 / day",
      "pricing.c3.desc": "Flutter, Tauri, full product — from idea to installable deliverable.",
      "pricing.c3.li1": "Brief & detailed estimate",
      "pricing.c3.li2": "Design + dev + packaging",
      "pricing.c3.li3": "E.g. mobile app, Windows exe",
      "pricing.h2.included": "Included (within agreed scope)",
      "pricing.inc1": "Initial brief & scoping",
      "pricing.inc2": "Clean, versioned code delivery",
      "pricing.inc3": "Production deploy if in contract",
      "pricing.inc4": "Communication in French, English or Russian",
      "pricing.h2.extra": "Extra",
      "pricing.ext1": "Full content writing or migration",
      "pricing.ext2": "Translations, advanced SEO, pro photos",
      "pricing.ext3": "Hosting, domain, third-party licenses",
      "pricing.ext4": "<strong>Maintenance</strong> — €65 / h (min. 1 h) · monthly retainer possible",
      "pricing.note": "Indicative rates excl. tax · deposit on start, balance on delivery · free quote after discussing your needs.",
      "pricing.cta": "Discuss your project →",

      "mns.kicker": "Mobile application",
      "mns.lead": "A social app around music and karaoke — designed and built in Flutter, from idea to the interface you see here.",
      "mns.tag.maps": "Maps & geolocation",
      "mns.tag.chat": "Messaging",
      "mns.tag.audio": "Audio recognition",
      "mns.stats.lines": "lines of code",
      "mns.stats.screens": "screens",
      "mns.stats.langs": "languages (FR · EN · RU)",
      "mns.stats.aria": "By the numbers",
      "mns.preview.aria": "Main preview",
      "mns.hero.caption": "Home — app hub",
      "mns.hero.alt": "Meet'n'Sing home screen — dashboard with main navigation",
      "mns.gallery.eyebrow": "Screenshots",
      "mns.gallery.title": "A full product, not a demo",
      "mns.cap.echo": "<strong>Echo</strong> — identify a track in one gesture (Shazam-like)",
      "mns.cap.hathor": "<strong>Hathor</strong> — assistant & guided playlists",
      "mns.cap.detect": "<strong>Detections</strong> — history & library",
      "mns.cap.affiche": "<strong>The Billboard</strong> — trends & new releases by country",
      "mns.cap.profil": "<strong>Profile</strong> — styles, languages, geolocation",
      "mns.cap.lampe": "<strong>Lamp</strong> — built-in playful journey",
      "mns.alt.echo": "Echo screen — music recognition",
      "mns.alt.hathor": "Hathor assistant — guided playlist",
      "mns.alt.detect": "Music detection history",
      "mns.alt.affiche": "The Billboard — music discovery",
      "mns.alt.profil": "Customizable user profile",
      "mns.alt.lampe": "Hathor magic lamp mini-game",
      "mns.h2.what": "What the app does (in plain words)",
      "mns.p1": "Meet'n'Sing is a <strong>full-featured mobile app</strong> for singing and karaoke fans: find venues nearby, discover tracks, connect with other members, organize events, and even recognize music playing around you.",
      "mns.p2": "Everything is built for the phone: polished UI, multiple languages, secure accounts, notifications, member messaging.",
      "mns.h2.built": "What I built",
      "mns.li1": "<strong>Dashboard</strong> — navigation to every module (profile, karaoke, songs, messages…)",
      "mns.li2": "<strong>Karaoke map</strong> — find bars and venues (Google Maps or Yandex depending on country)",
      "mns.li3": "<strong>Local catalogue</strong> — thousands of tracks browsable offline on the device",
      "mns.li4": "<strong>Echo</strong> — record a snippet and find the track",
      "mns.li5": "<strong>The Billboard</strong> — discovery page with hits and new releases by country",
      "mns.li6": "<strong>Social</strong> — profiles, member filters, chat, events, contact credits",
      "mns.li7": "<strong>Hathor</strong> — narrative experience to build playlists",
      "mns.h2.tech": "Under the hood (short version)",
      "mns.p3": "Built with <strong>Flutter</strong> (Android & iOS) and <strong>Firebase</strong> for accounts, database, file storage and push notifications. Cloud backend for music recognition and trend updates. UI in French, English and Russian.",
      "mns.p4": "Months of work — modular architecture, dozens of business services, visual polish (themes, animations, custom assets).",
      "mns.back": "← Back to work",

      "fe.kicker": "Business WordPress site",
      "fe.lead": "Full migration from Wix — redesign, hand-coded PHP (mu-plugins), custom forms and o2switch production deploy with reliable SMTP.",
      "fe.tag.wp": "WordPress",
      "fe.tag.php": "PHP mu-plugins",
      "fe.tag.smtp": "o2switch SMTP",
      "fe.tag.seo": "SEO & Schema.org",
      "fe.stats.pages": "main pages",
      "fe.stats.plugins": "PHP mu-plugins",
      "fe.stats.forms": "business forms",
      "fe.stats.aria": "By the numbers",
      "fe.preview.aria": "Main preview",
      "fe.hero.caption": "Home — menu, video, RAISON method",
      "fe.hero.alt": "Fruchart Équilibre home page — weight-loss & naturopathy coach",
      "fe.gallery.eyebrow": "Screenshots",
      "fe.gallery.title": "A full site in production",
      "fe.cap.form": "<strong>Form</strong> — personalised assessment, structured fields, SMTP delivery",
      "fe.cap.method": "<strong>Method</strong> — 5-step journey to the evaluation form",
      "fe.cap.articles": "<strong>Articles</strong> — nutrition & weight-loss editorial hub",
      "fe.alt.form": "Evaluation form page — contact details and profile",
      "fe.alt.method": "Method page — client journey diagram",
      "fe.alt.articles": "Articles page — publication list",
      "fe.live": "View live site →",
      "fe.h2.what": "The project (in plain words)",
      "fe.p1": "Fruchart Équilibre is a <strong>weight-loss & naturopathy coach</strong> site: RAISON method, explainer video, articles, testimonials, pricing and an evaluation form. Everything started on <strong>Wix</strong> — we needed a clean rebuild, with no magic Wix code export.",
      "fe.p2": "Full redesign: WordPress + Elementor for layout, with the technical core <strong>hand-coded</strong> (diagonal mobile menu, forms, SEO).",
      "fe.h2.built": "What I delivered",
      "fe.li1": "<strong>Content migration</strong> — faithful page-by-page copy from live Wix (full text, no summaries)",
      "fe.li2": "<strong>Hand-coded PHP</strong> — always-on styles and scripts, independent of Elementor",
      "fe.li3": "<strong>Diagonal mobile menu</strong> — staggered unfold, sequential animation",
      "fe.li4": "<strong>Evaluation form</strong> — validation and production e-mail delivery",
      "fe.li5": "<strong>Testimonials</strong> — dedicated module, structured submit and display",
      "fe.li6": "<strong>SEO</strong> — titles, meta, Schema.org per page",
      "fe.li7": "<strong>o2switch production</strong> — deploy, SSL, working forms",
      "fe.h2.tech": "Production launch",
      "fe.p3": "Live on <strong>o2switch</strong> with SSL. Forms (evaluation and testimonials) send via <strong>contact@fruchartequilibre.com</strong> — host SMTP, messages received in real conditions.",
      "fe.back": "← Back to work",

      "hh.kicker": "Desktop application",
      "hh.lead": "Custom Windows clock — spiral dial, animated hands in real time. Display follows the user's system clock, accurate in their country and timezone.",
      "hh.tag.tauri": "Tauri",
      "hh.tag.rust": "Rust",
      "hh.tag.webview": "WebView2",
      "hh.tag.ui": "HTML · CSS · JS",
      "hh.stats.exe": "Windows exe",
      "hh.stats.hands": "animated hands",
      "hh.stats.tz": "timezones covered",
      "hh.stats.aria": "By the numbers",
      "hh.preview.aria": "Main preview",
      "hh.hero.caption": "Live capture — the clock actually runs",
      "hh.hero.alt": "Horloge Houriez — spiral dial with golden stars and real-time hands",
      "hh.h2.story": "The story (short)",
      "hh.story": "In 1959, Christian Hourriez — a student at the École Boulle — won an RTF competition with an original dial: hours laid out on a spiral, nicknamed the « snail clock ». Broadcast on ORTF from 1959 to 1974, it served as a test card: viewers set their watches in front of the TV. A clockmaker later produced a domestic version — the famous Trophy clock.",
      "hh.story2": "A friend gave me the idea to recreate it as a desktop app.",
      "hh.h2.what": "What it is (in plain words)",
      "hh.p1": "A <strong>Windows desktop clock</strong> shipped as a standalone executable (<code>HorlogeHouriez.exe</code>). The dial follows the iconic design: spiral, stars at the cardinal points, spheres along the orbits, rounded TV-style frame — like the original ORTF Trophy clock.",
      "hh.p2": "<strong>It works.</strong> All three hands run continuously (hours, minutes, seconds). The time shown is the machine's system clock — the user's exact local time, <strong>wherever they are</strong>, with no manual setup or remote server.",
      "hh.h2.built": "What I built",
      "hh.li1": "<strong>Custom interface</strong> — spiral dial, visual assets, animated hands",
      "hh.li2": "<strong>Real time</strong> — synced to the OS clock (automatic local timezone)",
      "hh.li3": "<strong>Desktop packaging</strong> — ready-to-run Windows executable, dedicated window",
      "hh.li4": "<strong>Tauri stack</strong> — Rust native layer, embedded web frontend via WebView2",
      "hh.h2.tech": "Under the hood (short version)",
      "hh.p3": "The app is built with <strong>Tauri 2</strong> (Rust + WebView2). The dial is rendered in HTML/CSS/JS inside an embedded WebView; time comes from JavaScript's <code>Date</code> API, tied to the Windows system clock — same principle as a classic desktop clock, with this spiral design.",
      "hh.p4": "A compact project focused on visual craft and reliability: a clock that launches, runs, and shows the correct time wherever Windows knows the local timezone.",
      "hh.back": "← Back to work"
    },

    ru: {
      "meta.index.title": "Цифровой маяк — Веб и мобильная разработка на расстоянии",
      "meta.index.desc": "WordPress, Elementor, PHP и Flutter. Сайты на заказ, миграции, приложения — удалённо.",
      "meta.works.title": "Работы — Цифровой маяк",
      "meta.works.desc": "Кейсы WordPress, миграции и Flutter — Цифровой маяк.",
      "meta.mobile.title": "Цифровой маяк — мобильная версия",
      "meta.mobile.desc": "Мобильная версия — WordPress, Flutter, удалённо.",
      "meta.meetnsing.title": "Meet'n'Sing — Кейс · Цифровой маяк",
      "meta.meetnsing.desc": "Многофункциональное Flutter-приложение — караоке, соцсеть, распознавание музыки.",
      "meta.equilibre.title": "Fruchart Équilibre — Кейс · Цифровой маяк",
      "meta.equilibre.desc": "Миграция Wix → WordPress · PHP mu-plugins · SMTP o2switch · сайт коуча.",
      "meta.horloge.title": "Horloge Houriez — Кейс · Цифровой маяк",
      "meta.horloge.desc": "Настольные часы Windows — Tauri, Rust, WebView2. Точное локальное время в любой стране.",
      "meta.about.title": "О нас — Цифровой маяк",
      "meta.about.desc": "Веб и мобильный разработчик — WordPress, Flutter.",
      "meta.contact.title": "Контакт — Цифровой маяк",
      "meta.contact.desc": "Форма связи — веб-проект, миграция WordPress или приложение Android.",
      "meta.contactSent.title": "Сообщение отправлено — Цифровой маяк",
      "meta.contactSent.desc": "Сообщение отправлено — ответ в течение 48 ч.",
      "meta.tarifs.title": "Тарифы — Цифровой маяк",
      "meta.tarifs.desc": "Ориентировочные цены — разовая работа, WordPress, приложение на заказ. Удалённо, смета после брифа.",

      "common.skip": "Перейти к содержанию",
      "common.menu": "Меню",
      "common.navLabel": "Основное",
      "common.langLabel": "Язык",
      "brand.line1": "Цифровой",
      "brand.line2": "маяк",
      "brand.hero": "Цифровой<br /><em>маяк</em>",
      "brand.full": "Цифровой маяк",
      "nav.home": "Главная",
      "nav.works": "Работы",
      "nav.about": "О нас",
      "nav.contact": "Контакт",
      "nav.pricing": "Тарифы",
      "common.study": "Кейс →",
      "common.read": "Читать →",
      "common.footerTag": "© Цифровой маяк — WordPress · Flutter · удалённо",
      "common.footerShort": "© Цифровой маяк",
      "common.mobileVersion": "Мобильная версия",
      "common.desktopVersion": "Версия для ПК",
      "common.contactLink": "Контакт",
      "common.discuss": "Обсудить проект",
      "common.backWorks": "← Работы",

      "index.hero.title": "Веб и мобильная разработка на расстоянии",
      "index.hero.lead": "WordPress на заказ, чистые миграции, приложения Flutter — от брифа до продакшена, далеко, но на связи.",
      "index.cta.works": "Смотреть работы",
      "index.cta.contact": "Написать мне",
      "index.strip.eyebrow": "Подборка",
      "index.strip.title": "Три проекта, которые показывают мастерство",
      "index.w1.title": "Fruchart Équilibre",
      "index.w1.meta": "Миграция Wix → WordPress · PHP mu-plugins · формы и SEO",
      "index.w2.title": "Meet'n'Sing",
      "index.w2.meta": "Приложение Flutter · полный цикл",
      "index.w3.title": "Horloge Houriez",
      "index.w3.meta": "Настольные часы Tauri · локальное время · exe Windows",

      "works.title": "Работы",
      "works.lead": "Три реальных кейса — миграция WordPress, Flutter-приложение, настольные часы Tauri. Без фальшивых витрин.",
      "works.w1.meta": "Миграция Wix → WordPress / Elementor · PHP mu-plugins · SMTP · Schema.org · ПК и мобильные",
      "works.w2.meta": "Мобильное приложение Flutter — сценарии, экраны, сдача",
      "works.w3.meta": "Настольные часы Tauri · локальное время · exe Windows",

      "about.title": "О нас",
      "about.lead": "Цифровой маяк — веб и мобильная разработка на расстоянии, от витрины до полноценного приложения.",
      "about.p1": "Я создаю сайты WordPress на заказ, аккуратные миграции и приложения Flutter — удалённо, с понятным диалогом и надёжным результатом.",
      "about.p2": "Я работаю с клиентами, которым нужен надёжный технический партнёр, а не конвейер шаблонов.",

      "contact.title": "Обсудим ваш проект",
      "contact.lead": "Опишите, где вы сейчас — отвечу в течение 48 ч.",
      "contact.filter": "Веб и ПО на заказ — не IT-поддержка (ПК, Word, Outlook, принтер…).",
      "contact.field.prenom": "Имя",
      "contact.field.email": "E-mail",
      "contact.field.need": "Ваш запрос",
      "contact.field.project": "Ваш проект",
      "contact.need.placeholder": "Выберите…",
      "contact.need.migration": "Миграция или редизайн сайта",
      "contact.need.wordpress": "WordPress на заказ",
      "contact.need.android": "Приложение Android",
      "contact.need.desktop": "Небольшая программа Windows (простой scope)",
      "contact.need.other": "Другой веб- или Android-проект",
      "contact.project.placeholder": "Напр.: миграция Wix (6 стр.) на WordPress · Android-каталог · небольшой exe для Windows",
      "contact.submit": "Отправить запрос",
      "contact.trust": "Ответ в течение 48 ч · без обязательств · FR / EN / RU",
      "contact.success": "Сообщение отправлено. Отвечу в течение 48 ч.",
      "contact.fileWarning": "Форма не работает при открытии HTML двойным щелчком. Используйте GitHub Pages или локальный сервер в Portfolio: python -m http.server 8080, затем http://localhost:8080/contact.html",
      "contact.alt": "Или по e-mail:",
      "contact.form.aria": "Форма связи",
      "contact.email": "frucharthadrien@gmail.com",
      "contact.note": "Ответ в течение 48 ч · французский, английский, русский.",

      "contactSent.eyebrow": "Отправлено",
      "contactSent.title": "Сообщение получено",
      "contactSent.lead": "Спасибо — я читаю каждый запрос и отвечаю в течение 48 ч.",
      "contactSent.note": "Проверьте спам, если не видите ответ.",
      "contactSent.cta.works": "Смотреть работы",
      "contactSent.cta.home": "На главную",

      "pricing.eyebrow": "Условия",
      "pricing.title": "Тарифы",
      "pricing.lead": "Ориентировочные цены · 100 % удалённо · точная смета после брифа. Сначала согласуем объём — без сюрпризов.",
      "pricing.cards.aria": "Форматы",
      "pricing.c1.kicker": "Разово",
      "pricing.c1.title": "Интервенция",
      "pricing.c1.from": "от",
      "pricing.c1.unit": "/ полдня",
      "pricing.c1.desc": "Аудит, баг, отдельный модуль, техподдержка существующего кода.",
      "pricing.c1.li1": "Диагностика и предложение",
      "pricing.c1.li2": "Точечное исправление или малый результат",
      "pricing.c1.li3": "Идеально: разблокировать сайт или форму",
      "pricing.c2.kicker": "Чаще всего",
      "pricing.c2.title": "Веб-проект",
      "pricing.c2.from": "от",
      "pricing.c2.unit": "/ день · часто фикс",
      "pricing.c2.desc": "WordPress на заказ, миграция Wix, формы, базовое SEO, продакшен.",
      "pricing.c2.li1": "Фикс или понедельная оплата",
      "pricing.c2.li2": "Чёткие результаты и этапы",
      "pricing.c2.li3": "Напр. миграция как Fruchart Équilibre",
      "pricing.c3.kicker": "На заказ",
      "pricing.c3.title": "Приложение и desktop",
      "pricing.c3.price": "По смете",
      "pricing.c3.unit": "от 500 € / день",
      "pricing.c3.desc": "Flutter, Tauri, полный продукт — от идеи до установки.",
      "pricing.c3.li1": "Бриф и детальная смета",
      "pricing.c3.li2": "Дизайн + разработка + сборка",
      "pricing.c3.li3": "Напр. мобильное приложение, exe Windows",
      "pricing.h2.included": "Включено (в согласованный объём)",
      "pricing.inc1": "Бриф и первичное согласование",
      "pricing.inc2": "Чистый код с версионированием",
      "pricing.inc3": "Деплой в продакшен, если в договоре",
      "pricing.inc4": "Общение на FR · EN · RU",
      "pricing.h2.extra": "Дополнительно",
      "pricing.ext1": "Полная редакция или перенос контента",
      "pricing.ext2": "Переводы, продвинутое SEO, фото",
      "pricing.ext3": "Хостинг, домен, лицензии",
      "pricing.ext4": "<strong>Поддержка</strong> — 65 € / ч (мин. 1 ч) · абонement возможен",
      "pricing.note": "Цены ориентировочные, без НДС · аванс при старте, остаток при сдаче · бесплатная смета после обсуждения.",
      "pricing.cta": "Обсудить проект →",

      "mns.kicker": "Мобильное приложение",
      "mns.lead": "Социальное приложение про музыку и караоке — задумано и разработано на Flutter, от идеи до интерфейса на скриншотах.",
      "mns.tag.maps": "Карты и геолокация",
      "mns.tag.chat": "Сообщения",
      "mns.tag.audio": "Распознавание аудио",
      "mns.stats.lines": "строк кода",
      "mns.stats.screens": "экранов",
      "mns.stats.langs": "языка (FR · EN · RU)",
      "mns.stats.aria": "В цифрах",
      "mns.preview.aria": "Главный обзор",
      "mns.hero.caption": "Главная — центр приложения",
      "mns.hero.alt": "Главный экран Meet'n'Sing — панель с навигацией",
      "mns.gallery.eyebrow": "Скриншоты",
      "mns.gallery.title": "Готовый продукт, не демо",
      "mns.cap.echo": "<strong>Эхо</strong> — узнать трек одним жестом (как Shazam)",
      "mns.cap.hathor": "<strong>Hathor</strong> — ассистент и плейлисты",
      "mns.cap.detect": "<strong>Распознавания</strong> — история и библиотека",
      "mns.cap.affiche": "<strong>Афиша</strong> — тренды и новинки по странам",
      "mns.cap.profil": "<strong>Профиль</strong> — стили, языки, геолокация",
      "mns.cap.lampe": "<strong>Лампа</strong> — игровой сценарий",
      "mns.alt.echo": "Экран Эхо — распознавание музыки",
      "mns.alt.hathor": "Ассистент Hathor — плейлист",
      "mns.alt.detect": "История распознаваний",
      "mns.alt.affiche": "Афиша — музыкальные открытия",
      "mns.alt.profil": "Настраиваемый профиль",
      "mns.alt.lampe": "Мини-игра с волшебной лампой Hathor",
      "mns.h2.what": "Что делает приложение (простыми словами)",
      "mns.p1": "Meet'n'Sing — <strong>многофункциональное мобильное приложение</strong> для любителей пения и караоке: найти места рядом, открыть новые треки, общаться с участниками, организовывать события и даже узнавать музыку из эфира.",
      "mns.p2": "Всё для телефона: аккуратный интерфейс, несколько языков, защищённый аккаунт, уведомления, переписка между участниками.",
      "mns.h2.built": "Что я построил",
      "mns.li1": "<strong>Панель</strong> — доступ ко всем разделам (профиль, караоке, песни, сообщения…)",
      "mns.li2": "<strong>Караоке на карте</strong> — бары и залы (Google Maps или Yandex по стране)",
      "mns.li3": "<strong>Локальный каталог</strong> — тысячи треков офлайн на устройстве",
      "mns.li4": "<strong>Эхо</strong> — запись фрагмента и поиск композиции",
      "mns.li5": "<strong>Афиша</strong> — хиты и новинки по странам",
      "mns.li6": "<strong>Социальное</strong> — профили, фильтры, чат, события, кредиты контактов",
      "mns.li7": "<strong>Hathor</strong> — сюжетный опыт для плейлистов",
      "mns.h2.tech": "Под капотом (кратко)",
      "mns.p3": "Разработка на <strong>Flutter</strong> (Android и iOS) и <strong>Firebase</strong> — аккаунты, база, файлы, push. Облачный бэкенд для распознавания музыки и трендов. Интерфейс на французском, английском и русском.",
      "mns.p4": "Месяцы работы — модульная архитектура, десятки сервисов, визуальная полировка (темы, анимации, свои ресурсы).",
      "mns.back": "← Назад к работам",

      "fe.kicker": "Сайт WordPress для бизнеса",
      "fe.lead": "Полная миграция с Wix — редизайн, PHP mu-plugins, формы на заказ и продакшен на o2switch с надёжным SMTP.",
      "fe.tag.wp": "WordPress",
      "fe.tag.php": "PHP mu-plugins",
      "fe.tag.smtp": "SMTP o2switch",
      "fe.tag.seo": "SEO и Schema.org",
      "fe.stats.pages": "основных страниц",
      "fe.stats.plugins": "mu-plugins PHP",
      "fe.stats.forms": "бизнес-формы",
      "fe.stats.aria": "В цифрах",
      "fe.preview.aria": "Главный обзор",
      "fe.hero.caption": "Главная — меню, видео, метод RAISON",
      "fe.hero.alt": "Главная Fruchart Équilibre — коуч по похудению и натуропатии",
      "fe.gallery.eyebrow": "Скриншоты",
      "fe.gallery.title": "Полноценный сайт в продакшене",
      "fe.cap.form": "<strong>Форма</strong> — персональная оценка, поля, отправка SMTP",
      "fe.cap.method": "<strong>Метод</strong> — путь из 5 шагов к форме",
      "fe.cap.articles": "<strong>Статьи</strong> — хаб про питание и похудение",
      "fe.alt.form": "Страница формы оценки — контакты и описание",
      "fe.alt.method": "Страница метода — схема этапов",
      "fe.alt.articles": "Страница статей — список публикаций",
      "fe.live": "Открыть live-сайт →",
      "fe.h2.what": "Проект (простыми словами)",
      "fe.p1": "Fruchart Équilibre — сайт <strong>коуча по похудению и натуропатии</strong>: метод RAISON, видео, статьи, отзывы, тарифы и форма оценки. Всё начиналось на <strong>Wix</strong> — нужна была чистая пересборка без «магического» экспорта кода.",
      "fe.p2": "Полный редизайн: WordPress + Elementor для вёрстки, ядро <strong>закодировано</strong> (мобильное меню-лесенка, формы, SEO).",
      "fe.h2.built": "Что сделано",
      "fe.li1": "<strong>Миграция контента</strong> — точное копирование с live Wix (полные тексты)",
      "fe.li2": "<strong>PHP-код</strong> — стили и скрипты always-on, независимо от Elementor",
      "fe.li3": "<strong>Мобильное меню-лесенка</strong> — диагональное раскрытие, пошаговая анимация",
      "fe.li4": "<strong>Форма оценки</strong> — валидация и отправка e-mail в продакшене",
      "fe.li5": "<strong>Отзывы</strong> — модуль отправки и отображения",
      "fe.li6": "<strong>SEO</strong> — title, meta, Schema.org",
      "fe.li7": "<strong>Продакшен o2switch</strong> — деплой, SSL, рабочие формы",
      "fe.h2.tech": "Запуск в продакшен",
      "fe.p3": "Сайт на <strong>o2switch</strong> с SSL. Формы (оценка и отзывы) через <strong>contact@fruchartequilibre.com</strong> — SMTP хостинга, письма приходят в реальных условиях.",
      "fe.back": "← Назад к работам",

      "hh.kicker": "Настольное приложение",
      "hh.lead": "Часы Windows с авторским дизайном — спиральный циферблат, стрелки в реальном времени. Время берётся из системных часов пользователя — верно в его стране и часовом поясе.",
      "hh.tag.tauri": "Tauri",
      "hh.tag.rust": "Rust",
      "hh.tag.webview": "WebView2",
      "hh.tag.ui": "HTML · CSS · JS",
      "hh.stats.exe": "exe Windows",
      "hh.stats.hands": "анимированные стрелки",
      "hh.stats.tz": "часовых поясов",
      "hh.stats.aria": "В цифрах",
      "hh.preview.aria": "Главный обзор",
      "hh.hero.caption": "Живой скриншот — часы действительно идут",
      "hh.hero.alt": "Horloge Houriez — спиральный циферблат со звёздами и стрелками в реальном времени",
      "hh.h2.story": "История (кратко)",
      "hh.story": "В 1959 году Christian Hourriez — ученик École Boulle — выиграл конкурс RTF с оригинальным циферблатом: часы на спирали, «улитка». С 1959 по 1974 год она шла в эфире ORTF как эталон: зрители сверяли часы перед телевизором. Часовщик выпустил домашнюю версию — знаменитые Trophy.",
      "hh.story2": "Идею сделать настольное приложение подал друг.",
      "hh.h2.what": "Что это (простыми словами)",
      "hh.p1": "<strong>Настольные часы Windows</strong> в виде автономного exe (<code>HorlogeHouriez.exe</code>). Циферблат повторяет культовый дизайн: спираль, звёзды по сторонам света, шары на орбитах, скруглённый корпус — как оригинальные Trophy ORTF.",
      "hh.p2": "<strong>Они работают.</strong> Три стрелки крутятся непрерывно (часы, минуты, секунды). Показывается системное время машины — точное локальное время пользователя, <strong>в любой стране</strong>, без ручной настройки и без удалённого сервера.",
      "hh.h2.built": "Что я сделал",
      "hh.li1": "<strong>Интерфейс на заказ</strong> — спиральный циферблат, визуальные ассеты, анимация стрелок",
      "hh.li2": "<strong>Реальное время</strong> — синхронизация с часами ОС (локальный пояс автоматически)",
      "hh.li3": "<strong>Десктоп-сборка</strong> — готовый exe для Windows, отдельное окно",
      "hh.li4": "<strong>Стек Tauri</strong> — Rust нативно, веб-фронтенд через WebView2",
      "hh.h2.tech": "Под капотом (кратко)",
      "hh.p3": "Приложение собрано на <strong>Tauri 2</strong> (Rust + WebView2). Циферблат — HTML/CSS/JS во встроенной WebView; время из API <code>Date</code> JavaScript, привязано к системным часам Windows — как у обычных настольных часов, но со спиральным дизайном.",
      "hh.p4": "Компактный проект с упором на визуал и надёжность: часы запускаются, идут и показывают правильное время везде, где Windows знает локальный пояс.",
      "hh.back": "← Назад к работам"
    }
  };

  function t(lang, key) {
    return T[lang] && T[lang][key] != null ? T[lang][key] : T.fr[key] || key;
  }

  function langFromBrowser() {
    const nav = (navigator.language || "en").toLowerCase();
    if (nav.startsWith("fr")) return "fr";
    if (nav.startsWith("ru") || nav.startsWith("be") || nav.startsWith("uk")) return "ru";
    return "en";
  }

  async function detectLang() {
    const param = new URLSearchParams(window.location.search).get("lang");
    if (param && T[param]) return param;

    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && T[saved]) return saved;

    try {
      const ctrl = new AbortController();
      const timer = setTimeout(function () { ctrl.abort(); }, 3500);
      const res = await fetch("https://ipapi.co/country_code/", { signal: ctrl.signal });
      clearTimeout(timer);
      if (res.ok) {
        const cc = (await res.text()).trim().toUpperCase();
        if (CIS.includes(cc)) return "ru";
        if (cc === "FR") return "fr";
        return "en";
      }
    } catch (e) { /* fallback */ }

    return langFromBrowser();
  }

  function flagSvg(code) {
    var svgs = {
      fr: '<svg class="lang-flag" viewBox="0 0 24 16" aria-hidden="true" focusable="false"><rect width="8" height="16" fill="#002395"/><rect x="8" width="8" height="16" fill="#ffffff"/><rect x="16" width="8" height="16" fill="#ED2939"/></svg>',
      en: '<svg class="lang-flag" viewBox="0 0 24 16" aria-hidden="true" focusable="false"><rect fill="#012169" width="24" height="16"/><path d="M0 0l24 16M24 0L0 16" stroke="#ffffff" stroke-width="2.6"/><path d="M0 0l24 16M24 0L0 16" stroke="#C8102E" stroke-width="1.3"/><path d="M12 0v16M0 8h24" stroke="#ffffff" stroke-width="4.2"/><path d="M12 0v16M0 8h24" stroke="#C8102E" stroke-width="2.4"/></svg>',
      ru: '<svg class="lang-flag" viewBox="0 0 24 16" aria-hidden="true" focusable="false"><rect width="24" height="5.333" fill="#ffffff"/><rect y="5.333" width="24" height="5.333" fill="#0039A6"/><rect y="10.666" width="24" height="5.334" fill="#D52B1E"/></svg>'
    };
    return svgs[code] || "";
  }

  function injectLangSwitch() {
    const inner = document.querySelector(".site-header__inner");
    if (!inner || inner.querySelector(".lang-switch")) return;

    const wrap = document.createElement("div");
    wrap.className = "lang-switch";
    wrap.setAttribute("role", "group");
    wrap.setAttribute("aria-label", t(document.documentElement.lang || "fr", "common.langLabel"));

    [
      { code: "fr", label: "Français" },
      { code: "en", label: "English" },
      { code: "ru", label: "Русский" }
    ].forEach(function (item) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "lang-switch__btn lang-switch__btn--" + item.code;
      btn.dataset.lang = item.code;
      btn.title = item.label;
      btn.setAttribute("aria-label", item.label);
      btn.innerHTML = flagSvg(item.code);
      btn.addEventListener("click", function () {
        applyLang(item.code, true);
      });
      wrap.appendChild(btn);
    });

    const navBar = inner.querySelector(".nav-bar");
    const toggle = inner.querySelector("[data-nav-toggle]");
    if (navBar) inner.insertBefore(wrap, navBar);
    else if (toggle) inner.insertBefore(wrap, toggle);
    else inner.appendChild(wrap);
  }

  function applyLang(lang, save) {
    if (!T[lang]) lang = "fr";
    document.documentElement.lang = lang === "ru" ? "ru" : lang === "fr" ? "fr" : "en";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(lang, el.getAttribute("data-i18n"));
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(lang, el.getAttribute("data-i18n-html"));
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      el.alt = t(lang, el.getAttribute("data-i18n-alt"));
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.placeholder = t(lang, el.getAttribute("data-i18n-placeholder"));
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(lang, el.getAttribute("data-i18n-aria")));
    });

    const page = document.body.dataset.page;
    if (page) {
      const titleKey = "meta." + page + ".title";
      const descKey = "meta." + page + ".desc";
      if (T[lang][titleKey]) document.title = t(lang, titleKey);
      var meta = document.querySelector('meta[name="description"]');
      if (meta && T[lang][descKey]) meta.setAttribute("content", t(lang, descKey));
    }

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      var on = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });

    var switchEl = document.querySelector(".lang-switch");
    if (switchEl) switchEl.setAttribute("aria-label", t(lang, "common.langLabel"));

    if (save !== false) localStorage.setItem(STORAGE_KEY, lang);
  }

  async function init() {
    injectLangSwitch();
    var lang = await detectLang();
    applyLang(lang, false);
    if (!localStorage.getItem(STORAGE_KEY)) localStorage.setItem(STORAGE_KEY, lang);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.PhareI18n = { applyLang: applyLang, t: t };
})();
