import {
  Bot,
  ChartNoAxesCombined,
  FlaskConical,
  Lightbulb,
  Megaphone,
  PenTool,
  Rocket,
  SearchCheck,
  Sparkles,
  UsersRound
} from "lucide-react";

export type Language = "it" | "en";

export const languages: Record<Language, string> = {
  it: "IT",
  en: "EN"
};

export const navItems = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/team", key: "team" },
  { href: "/join", key: "join" }
] as const;

export const applicationFormUrl = "https://forms.gle/QRecJSFUnqPtNsZt9";

export const iconMap = {
  bot: Bot,
  chart: ChartNoAxesCombined,
  flask: FlaskConical,
  lightbulb: Lightbulb,
  megaphone: Megaphone,
  pen: PenTool,
  rocket: Rocket,
  search: SearchCheck,
  sparkles: Sparkles,
  users: UsersRound
};

export const siteContent = {
  it: {
    meta: {
      title: "Emilia Lab | AI per il mercato italiano",
      description:
        "Emilia Lab è un'iniziativa studentesca sull'intelligenza artificiale, con focus su contenuti, prototipi, benchmark e sperimentazione per il contesto italiano."
    },
    nav: {
      home: "Home",
      about: "About",
      whatWeDo: "Cosa facciamo",
      team: "Team",
      join: "Join us"
    },
    common: {
      joinCta: "Candidati",
      followCta: "Segui il progetto",
      learnMore: "Scopri di più",
      exploreWork: "Esplora le aree",
      backHome: "Torna alla home"
    },
    home: {
      hero: {
        eyebrow: "Student-led AI initiative",
        title: "Emilia Lab",
        subtitle:
          "Esploriamo come l'AI può essere capita e usata nel contesto italiano attraverso contenuti, prototipi, benchmark e sperimentazione.",
        primaryCta: "Unisciti al lab",
        secondaryCta: "Cosa facciamo",
        signal: "Focus mercato italiano",
        location: "Bologna",
        proof: ["AI applicata", "Prototipi rapidi", "Benchmark indipendenti"]
      },
      intro: {
        label: "In breve",
        title: "Un laboratorio studentesco per capire, costruire e condividere AI.",
        body:
          "Emilia Lab nasce come spazio operativo per studenti e giovani builder: analizziamo trend, testiamo strumenti, creiamo prototipi e trasformiamo l'AI in casi d'uso comprensibili per il contesto italiano."
      },
      focusTitle: "Le aree di lavoro",
      focusSubtitle:
        "Quattro anime complementari: costruire, misurare, raccontare e far crescere una community attiva.",
      focusAreas: [
        {
          icon: "rocket",
          title: "Engineering - Prototyping",
          description:
            "Costruiamo demo, micro-prodotti e workflow per validare rapidamente idee e applicazioni AI.",
          points: ["MVP e agenti", "Tool interni", "Demo per contenuti"]
        },
        {
          icon: "search",
          title: "Engineering - Research & Benchmarking",
          description:
            "Testiamo modelli, tool e pattern applicativi con benchmark chiari e riproducibili.",
          points: ["Valutazioni pratiche", "Comparazioni di tool", "Report tecnici"]
        },
        {
          icon: "megaphone",
          title: "Social & Content",
          description:
            "Trasformiamo ricerca e prototipi in contenuti accessibili, storytelling e format visuali.",
          points: ["Copy e storytelling", "Format visuali", "Output editoriali"]
        },
        {
          icon: "users",
          title: "Growth, Community & Events",
          description:
            "Facciamo crescere la community, costruiamo partnership e organizziamo momenti di incontro con studenti, builder e realtà dell'ecosistema AI.",
          points: ["Community building", "Partnership", "Eventi e meetup"]
        }
      ],
      why: {
        title: "Perché esiste Emilia Lab",
        items: [
          {
            icon: "lightbulb",
            title: "AI nel contesto italiano",
            description:
              "Raccogliamo esempi, test e applicazioni che possano essere utili a studenti, team e creator che guardano al contesto italiano."
          },
          {
            icon: "flask",
            title: "Metodo di lavoro",
            description:
              "Ogni idea viene osservata, provata e documentata, così da rendere il percorso più leggibile e discutibile."
          },
          {
            icon: "users",
            title: "Percorso condiviso",
            description:
              "Un posto per imparare lavorando insieme, con ruoli chiari e spazio per iniziativa personale."
          }
        ]
      },
      teamPreview: {
        title: "Un team leggero, operativo e multidisciplinare",
        body:
          "Leadership, engineering, contenuto, community e partnership lavorano come un piccolo studio AI: pochi livelli, responsabilità distribuita e lavoro visibile.",
        roles: [
          "Leadership",
          "Prototyping",
          "Research & Benchmarking",
          "Social & Content",
          "Growth & Partnerships"
        ]
      },
      finalCta: {
        title: "Vuoi costruire Emilia Lab con noi?",
        body:
          "Stiamo cercando persone curiose, affidabili e interessate a contribuire con contenuti, benchmark, prototipi e community.",
        primary: "Vedi come partecipare",
        secondary: "Segui gli aggiornamenti"
      }
    },
    about: {
      pageTitle: "About Emilia Lab",
      pageIntro:
        "Un'iniziativa studentesca che studia l'intelligenza artificiale nel contesto italiano attraverso contenuti, prototipi e sperimentazione.",
      body:
        "Emilia Lab esplora trend, strumenti e applicazioni dell'AI attraverso contenuti, prototipi, benchmarking e sperimentazione. L'obiettivo è creare un ambiente dove studenti e giovani builder possano imparare, costruire e condividere idee in modo aperto e ordinato.",
      manifesto: [
        "Partiamo da domande e casi d'uso chiari.",
        "Costruiamo prototipi abbastanza piccoli da essere rapidi da testare e utili da discutere.",
        "Cerchiamo di rendere i risultati leggibili per chi vuole capire meglio l'AI."
      ],
      principlesTitle: "Principi",
      principles: [
        {
          icon: "sparkles",
          title: "Chiarezza",
          description:
            "Ogni contenuto o prototipo dovrebbe aiutare qualcuno a capire meglio un tema, uno strumento o un caso d'uso."
        },
        {
          icon: "chart",
          title: "Metodo",
          description:
            "Separiamo opinioni, test e risultati. Quando misuriamo qualcosa, proviamo a rendere chiaro il metodo."
        },
        {
          icon: "users",
          title: "Approccio studentesco",
          description:
            "Veloci, curiosi e ambiziosi, ma con processi semplici e responsabilità chiare."
        }
      ]
    },
    whatWeDo: {
      pageTitle: "Cosa facciamo",
      pageIntro:
        "Emilia Lab lavora su contenuti, prototipi e ricerca applicata per esplorare usi pratici dell'AI.",
      sections: [
        {
          icon: "rocket",
          title: "Prototipi",
          description:
            "Sperimentiamo con agenti, automazioni, interfacce e workflow per validare casi d'uso AI in modo rapido.",
          details: ["Demo interne", "Proof of concept", "Esperimenti con tool e API"]
        },
        {
          icon: "search",
          title: "Benchmarking",
          description:
            "Confrontiamo modelli e strumenti su task pratici, con criteri leggibili anche fuori da un contesto accademico.",
          details: ["Test replicabili", "Valutazioni qualitative", "Report sintetici"]
        },
        {
          icon: "megaphone",
          title: "Media e community",
          description:
            "Creiamo format editoriali, contenuti social e opportunità di collaborazione con altri studenti e builder.",
          details: ["Short-form content", "Guide pratiche", "Eventi e collaborazioni"]
        },
        {
          icon: "users",
          title: "Growth, partnership ed eventi",
          description:
            "Sviluppiamo la rete intorno a Emilia Lab attraverso community, partnership con realtà dell'ecosistema e momenti dal vivo o online.",
          details: ["Community", "Partnership di ecosistema", "Eventi e meetup"]
        }
      ],
      rhythmTitle: "Ritmo operativo",
      rhythm:
        "Lavoriamo in cicli brevi: scegliamo un tema, costruiamo o testiamo qualcosa, sintetizziamo i risultati e pubblichiamo ciò che può essere utile alla community."
    },
    team: {
      pageTitle: "Team",
      pageIntro:
        "Una struttura chiara per permettere a persone diverse di contribuire senza appesantire il progetto.",
      groups: [
        {
          title: "Leadership",
          description:
            "Definisce visione e direzione di Emilia Lab, coordina i diversi team, stabilisce priorità e assicura coerenza tra tutte le attività. Rappresenta l'iniziativa verso l'esterno e prende le decisioni strategiche finali.",
          members: [{ name: "Nicolò Campagnoli", role: "Founder & Lead" }]
        },
        {
          title: "Engineering - Prototyping",
          description:
            "Costruisce demo AI, prototipi, agenti e piccoli strumenti sperimentali. Trasforma le idee in proof of concept tangibili e supporta la parte tecnica dell'iniziativa con sviluppo rapido e iterazione continua.",
          members: [{ name: "Open role", role: "Prototype Builder" }]
        },
        {
          title: "Engineering - Research & Benchmarking",
          description:
            "Valuta modelli, strumenti e workflow attraverso benchmark, test e confronti strutturati. Produce note tecniche, report e risultati utili a guidare esperimenti e contenuti.",
          members: [{ name: "Open role", role: "AI Research Analyst" }]
        },
        {
          title: "Social & Content",
          description:
            "Crea e gestisce l'output editoriale di Emilia Lab. Trasforma il lavoro tecnico in contenuti accessibili e coinvolgenti attraverso post, copy, storytelling e format visuali.",
          members: [{ name: "Open role", role: "Content & Storytelling" }]
        },
        {
          title: "Growth, Community & Ecosystem Partnerships",
          description:
            "Sviluppa la presenza di Emilia Lab, costruisce una community coinvolta, cura collaborazioni e partnership di ecosistema e aiuta a mantenere attiva la rete intorno al progetto.",
          members: [{ name: "Open role", role: "Growth & Partnerships" }]
        }
      ]
    },
    join: {
      pageTitle: "Join Us",
      pageIntro:
        "Se vuoi imparare costruendo e contribuire al progetto, Emilia Lab è aperto a nuovi profili.",
      lookingForTitle: "Profili che cerchiamo",
      lookingFor: [
        "Studenti e giovani builder con curiosità forte per l'AI.",
        "Persone capaci di portare avanti piccoli output con affidabilità.",
        "Profili engineering, ricerca, social, growth, design o contenuto."
      ],
      contactTitle: "Partecipa o segui il progetto",
      contactBody:
        "Compila il form per raccontarci chi sei, quale area ti interessa e come vorresti contribuire.",
      primary: "Candidati",
      secondary: "Segui Emilia Lab",
      email: "nicolocampagnoli20@icloud.com"
    },
    footer: {
      tagline: "Contenuti, prototipi e sperimentazione AI per il contesto italiano.",
      location: "Student-led. Built in Italy.",
      linksTitle: "Navigazione"
    }
  },
  en: {
    meta: {
      title: "Emilia Lab | AI for the Italian market",
      description:
        "Emilia Lab is a student-led artificial intelligence initiative focused on content, prototypes, benchmarks, and experimentation for the Italian context."
    },
    nav: {
      home: "Home",
      about: "About",
      whatWeDo: "What we do",
      team: "Team",
      join: "Join us"
    },
    common: {
      joinCta: "Apply",
      followCta: "Follow the project",
      learnMore: "Learn more",
      exploreWork: "Explore the areas",
      backHome: "Back home"
    },
    home: {
      hero: {
        eyebrow: "Student-led AI initiative",
        title: "Emilia Lab",
        subtitle:
          "We explore how AI can be understood and used in the Italian context through content, prototypes, benchmarking, and experimentation.",
        primaryCta: "Join the lab",
        secondaryCta: "What we do",
        signal: "Italian market focus",
        location: "Bologna",
        proof: ["Applied AI", "Rapid prototypes", "Independent benchmarks"]
      },
      intro: {
        label: "In short",
        title: "A student lab to understand, build, and share AI.",
        body:
          "Emilia Lab is an operating space for students and young builders: we analyze trends, test tools, create prototypes, and translate AI into understandable use cases for the Italian context."
      },
      focusTitle: "Focus areas",
      focusSubtitle:
        "Four connected tracks: build, measure, communicate, and grow an active community.",
      focusAreas: [
        {
          icon: "rocket",
          title: "Engineering - Prototyping",
          description:
            "We build demos, micro-products, and workflows to validate AI ideas and applications quickly.",
          points: ["MVPs and agents", "Internal tools", "Content demos"]
        },
        {
          icon: "search",
          title: "Engineering - Research & Benchmarking",
          description:
            "We test models, tools, and applied patterns with clear and reproducible benchmarks.",
          points: ["Practical evaluations", "Tool comparisons", "Technical reports"]
        },
        {
          icon: "megaphone",
          title: "Social & Content",
          description:
            "We turn research and prototypes into accessible content, storytelling, and visual formats.",
          points: ["Copy and storytelling", "Visual formats", "Editorial output"]
        },
        {
          icon: "users",
          title: "Growth, Community & Events",
          description:
            "We grow the community, build partnerships, and create moments for students, builders, and AI ecosystem players to meet.",
          points: ["Community building", "Partnerships", "Events and meetups"]
        }
      ],
      why: {
        title: "Why Emilia Lab exists",
        items: [
          {
            icon: "lightbulb",
            title: "AI in the Italian context",
            description:
              "We collect examples, tests, and applications that can be useful for students, teams, and creators working in the Italian context."
          },
          {
            icon: "flask",
            title: "A working method",
            description:
              "Every idea is observed, tested, and documented so the process stays easier to read, discuss, and improve."
          },
          {
            icon: "users",
            title: "A shared path",
            description:
              "A place to learn by working together, with clear roles and room for personal initiative."
          }
        ]
      },
      teamPreview: {
        title: "A lean, hands-on, multidisciplinary team",
        body:
          "Leadership, engineering, content, community, and partnerships work like a small AI studio: few layers, distributed responsibility, and visible work.",
        roles: [
          "Leadership",
          "Prototyping",
          "Research & Benchmarking",
          "Social & Content",
          "Growth & Partnerships"
        ]
      },
      finalCta: {
        title: "Want to build Emilia Lab with us?",
        body:
          "We are looking for curious, reliable people interested in contributing to content, benchmarks, prototypes, and community.",
        primary: "See how to join",
        secondary: "Follow updates"
      }
    },
    about: {
      pageTitle: "About Emilia Lab",
      pageIntro:
        "A student-led initiative focused on studying artificial intelligence in the Italian context through content, prototypes, and experimentation.",
      body:
        "Emilia Lab explores trends, tools, and AI applications through content, prototypes, benchmarking, and experimentation. The goal is to create an environment where students and young builders can learn, build, and share ideas in an open and structured way.",
      manifesto: [
        "We try to start from clear questions and use cases.",
        "We build prototypes that are small enough to test quickly and useful enough to discuss.",
        "We try to present results in a way that helps people understand AI more clearly."
      ],
      principlesTitle: "Principles",
      principles: [
        {
          icon: "sparkles",
          title: "Clarity",
          description:
            "Each piece of content or each prototype should help someone understand a topic, a tool, or a use case more clearly."
        },
        {
          icon: "chart",
          title: "Method",
          description:
            "We separate opinions, tests, and results. When we measure something, we try to make the method explicit."
        },
        {
          icon: "users",
          title: "Student-led energy",
          description:
            "Fast, curious, and ambitious, with simple processes and clear ownership."
        }
      ]
    },
    whatWeDo: {
      pageTitle: "What we do",
      pageIntro:
        "Emilia Lab works on content, prototypes, and applied research to explore practical uses of AI.",
      sections: [
        {
          icon: "rocket",
          title: "Prototypes",
          description:
            "We experiment with agents, automations, interfaces, and workflows to validate AI use cases quickly.",
          details: ["Internal demos", "Proofs of concept", "Tool and API experiments"]
        },
        {
          icon: "search",
          title: "Benchmarking",
          description:
            "We compare models and tools on practical tasks, with criteria readable beyond an academic setting.",
          details: ["Replicable tests", "Qualitative evaluations", "Concise reports"]
        },
        {
          icon: "megaphone",
          title: "Media and community",
          description:
            "We create editorial formats, social content, and collaboration opportunities with other students and builders.",
          details: ["Short-form content", "Practical guides", "Events and collaborations"]
        },
        {
          icon: "users",
          title: "Growth, partnerships, and events",
          description:
            "We develop the network around Emilia Lab through community, ecosystem partnerships, and live or online moments.",
          details: ["Community", "Ecosystem partnerships", "Events and meetups"]
        }
      ],
      rhythmTitle: "Operating rhythm",
      rhythm:
        "We work in short cycles: choose a topic, build or test something, synthesize the results, and publish what can help the community."
    },
    team: {
      pageTitle: "Team",
      pageIntro:
        "A clear structure that lets different people contribute without making the project heavy.",
      groups: [
        {
          title: "Leadership",
          description:
            "Define the vision and direction of Emilia Lab, coordinate the different teams, set priorities, and ensure consistency across all activities. Represent the initiative externally and make final strategic decisions.",
          members: [{ name: "Nicolò Campagnoli", role: "Founder & Lead" }]
        },
        {
          title: "Engineering - Prototyping",
          description:
            "Build AI demos, prototypes, agents, and small experimental tools. Turn ideas into tangible proof-of-concepts and support the technical side of the initiative through rapid development and iteration.",
          members: [{ name: "Open role", role: "Prototype Builder" }]
        },
        {
          title: "Engineering - Research & Benchmarking",
          description:
            "Evaluate models, tools, and workflows through benchmarks, testing, and structured comparisons. Produce technical notes, reports, and findings that can guide experiments and content.",
          members: [{ name: "Open role", role: "AI Research Analyst" }]
        },
        {
          title: "Social & Content",
          description:
            "Create and manage the editorial output of Emilia Lab. Transform technical work into accessible, engaging content through posts, copy, storytelling, and visual content formats.",
          members: [{ name: "Open role", role: "Content & Storytelling" }]
        },
        {
          title: "Growth, Community & Ecosystem Partnerships",
          description:
            "Grow the visibility of Emilia Lab, foster an engaged community, develop collaborations and ecosystem partnerships, and help keep the project connected to the wider AI landscape.",
          members: [{ name: "Open role", role: "Growth & Partnerships" }]
        }
      ]
    },
    join: {
      pageTitle: "Join Us",
      pageIntro:
        "If you want to learn by building and contribute to the project, Emilia Lab is open to new profiles.",
      lookingForTitle: "Who we are looking for",
      lookingFor: [
        "Students and young builders with strong curiosity for AI.",
        "People who can move small outputs forward reliably.",
        "Engineering, research, social, growth, design, or content profiles."
      ],
      contactTitle: "Join or follow the project",
      contactBody:
        "Fill out the form to tell us who you are, which area interests you, and how you would like to contribute.",
      primary: "Apply",
      secondary: "Follow Emilia Lab",
      email: "nicolocampagnoli20@icloud.com"
    },
    footer: {
      tagline: "Content, prototypes, and AI experimentation for the Italian context.",
      location: "Student-led. Built in Italy.",
      linksTitle: "Navigation"
    }
  }
} as const;

export type SiteContent = (typeof siteContent)[Language];
export type IconName = keyof typeof iconMap;
