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
  { href: "/what-we-do", key: "whatWeDo" },
  { href: "/team", key: "team" },
  { href: "/join", key: "join" }
] as const;

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
      title: "Emilia Lab | AI concreta per il mercato italiano",
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
          "Rendiamo l'AI più concreta, accessibile e utile per il mercato italiano attraverso contenuti, prototipi, benchmark e sperimentazione.",
        primaryCta: "Unisciti al lab",
        secondaryCta: "Cosa facciamo",
        signal: "Focus mercato italiano",
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
        "Tre anime complementari: costruire, misurare e far arrivare le idee alle persone giuste.",
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
          title: "Social & Growth",
          description:
            "Trasformiamo ricerca e prototipi in contenuti accessibili, format social e community building.",
          points: ["Content strategy", "Distribuzione", "Partnership"]
        }
      ],
      why: {
        title: "Perché esiste Emilia Lab",
        items: [
          {
            icon: "lightbulb",
            title: "AI meno astratta",
            description:
              "Portiamo l'AI fuori dalle buzzword, con esempi, test e applicazioni vicine a studenti, aziende e creator italiani."
          },
          {
            icon: "flask",
            title: "Metodo da laboratorio",
            description:
              "Ogni idea viene osservata, provata e documentata: meno hype, più esperimenti chiari."
          },
          {
            icon: "users",
            title: "Crescita condivisa",
            description:
              "Un posto per imparare lavorando su progetti reali, con ruoli chiari e spazio per iniziativa personale."
          }
        ]
      },
      teamPreview: {
        title: "Un team leggero, operativo e multidisciplinare",
        body:
          "Leadership, engineering, ricerca, growth e creatività lavorano come un piccolo studio AI: pochi livelli, molta responsabilità e output concreti.",
        roles: ["Leadership", "Prototyping", "Research", "Social & Growth", "Creative"]
      },
      finalCta: {
        title: "Vuoi costruire Emilia Lab con noi?",
        body:
          "Stiamo cercando persone curiose, affidabili e pronte a trasformare idee AI in contenuti, benchmark e prototipi reali.",
        primary: "Vedi come partecipare",
        secondary: "Segui gli aggiornamenti"
      }
    },
    about: {
      pageTitle: "About Emilia Lab",
      pageIntro:
        "Un'iniziativa studentesca nata per rendere l'intelligenza artificiale più concreta, accessibile e rilevante nel contesto italiano.",
      body:
        "Emilia Lab esplora trend, strumenti e applicazioni reali dell'AI attraverso contenuti, prototipi, benchmarking e sperimentazione. L'obiettivo è creare un ambiente dove studenti e giovani builder possano imparare, costruire e condividere idee con standard seri ma spirito aperto.",
      manifesto: [
        "Partiamo da problemi reali, non da parole di moda.",
        "Costruiamo prototipi abbastanza piccoli da essere veloci e abbastanza solidi da insegnare qualcosa.",
        "Rendiamo i risultati leggibili per chi vuole capire l'AI senza rumore."
      ],
      principlesTitle: "Principi",
      principles: [
        {
          icon: "sparkles",
          title: "Concretezza",
          description:
            "Ogni contenuto o prototipo deve aiutare qualcuno a capire, decidere o costruire meglio."
        },
        {
          icon: "chart",
          title: "Credibilità",
          description:
            "Separiamo opinioni, test e risultati. Quando misuriamo qualcosa, rendiamo chiaro il metodo."
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
        "Emilia Lab lavora su contenuti, prototipi e ricerca applicata per rendere l'AI utile nel presente.",
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
            "Direzione, priorità, standard editoriali e coordinamento delle aree.",
          members: [{ name: "Nicolò Campagnoli", role: "Founder & Lead" }]
        },
        {
          title: "Engineering - Prototyping",
          description:
            "Sviluppo di demo, automazioni, strumenti interni e prototipi AI.",
          members: [{ name: "Open role", role: "Prototype Builder" }]
        },
        {
          title: "Engineering - Research & Benchmarking",
          description:
            "Ricerca applicata, test comparativi, report e framework di valutazione.",
          members: [{ name: "Open role", role: "AI Research Analyst" }]
        },
        {
          title: "Social & Growth",
          description:
            "Distribuzione, community, partnership e crescita dei canali.",
          members: [{ name: "Open role", role: "Growth & Community" }]
        },
        {
          title: "Creative",
          description:
            "Identità visiva, format, editing, storytelling e contenuti.",
          members: [{ name: "Open role", role: "Creative Editor" }]
        }
      ],
      note:
        "I nomi sono placeholder finché il team non sarà definito. La struttura è pensata per crescere in modo modulare."
    },
    join: {
      pageTitle: "Join Us",
      pageIntro:
        "Se vuoi imparare costruendo e contribuire a un progetto AI credibile, Emilia Lab è aperto a nuovi profili.",
      lookingForTitle: "Profili che cerchiamo",
      lookingFor: [
        "Studenti e giovani builder con curiosità forte per l'AI.",
        "Persone capaci di portare avanti piccoli output con affidabilità.",
        "Profili engineering, ricerca, social, growth, design o contenuto."
      ],
      contactTitle: "Partecipa o segui il progetto",
      contactBody:
        "Per ora usiamo canali placeholder. Sostituiscili con form, email o profili social appena saranno pronti.",
      primary: "Scrivici",
      secondary: "Segui Emilia Lab",
      email: "hello@emilialab.ai"
    },
    footer: {
      tagline: "AI concreta, accessibile e rilevante per il contesto italiano.",
      location: "Student-led. Built in Italy.",
      linksTitle: "Navigazione"
    }
  },
  en: {
    meta: {
      title: "Emilia Lab | Concrete AI for the Italian market",
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
          "We make AI more concrete, accessible, and relevant for the Italian market through content, prototypes, benchmarking, and experimentation.",
        primaryCta: "Join the lab",
        secondaryCta: "What we do",
        signal: "Italian market focus",
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
        "Three connected tracks: build, measure, and bring ideas to the right people.",
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
          title: "Social & Growth",
          description:
            "We turn research and prototypes into accessible content, social formats, and community growth.",
          points: ["Content strategy", "Distribution", "Partnerships"]
        }
      ],
      why: {
        title: "Why Emilia Lab exists",
        items: [
          {
            icon: "lightbulb",
            title: "Less abstract AI",
            description:
              "We move AI beyond buzzwords with examples, tests, and applications close to Italian students, companies, and creators."
          },
          {
            icon: "flask",
            title: "A lab mindset",
            description:
              "Every idea is observed, tested, and documented: less hype, clearer experiments."
          },
          {
            icon: "users",
            title: "Shared growth",
            description:
              "A place to learn by working on real projects, with clear roles and room for personal initiative."
          }
        ]
      },
      teamPreview: {
        title: "A lean, hands-on, multidisciplinary team",
        body:
          "Leadership, engineering, research, growth, and creative work like a small AI studio: few layers, real ownership, concrete outputs.",
        roles: ["Leadership", "Prototyping", "Research", "Social & Growth", "Creative"]
      },
      finalCta: {
        title: "Want to build Emilia Lab with us?",
        body:
          "We are looking for curious, reliable people ready to turn AI ideas into real content, benchmarks, and prototypes.",
        primary: "See how to join",
        secondary: "Follow updates"
      }
    },
    about: {
      pageTitle: "About Emilia Lab",
      pageIntro:
        "A student-led initiative created to make artificial intelligence more concrete, accessible, and relevant in the Italian context.",
      body:
        "Emilia Lab explores trends, tools, and real-world AI applications through content, prototypes, benchmarking, and experimentation. The goal is to create an environment where students and young builders can learn, build, and share ideas with serious standards and an open spirit.",
      manifesto: [
        "We start from real problems, not buzzwords.",
        "We build prototypes small enough to move fast and solid enough to teach us something.",
        "We make results readable for people who want to understand AI without noise."
      ],
      principlesTitle: "Principles",
      principles: [
        {
          icon: "sparkles",
          title: "Concrete value",
          description:
            "Every piece of content or prototype should help someone understand, decide, or build better."
        },
        {
          icon: "chart",
          title: "Credibility",
          description:
            "We separate opinions, tests, and results. When we measure something, we make the method clear."
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
        "Emilia Lab works on content, prototypes, and applied research to make AI useful now.",
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
            "Direction, priorities, editorial standards, and coordination across areas.",
          members: [{ name: "Nicolò Campagnoli", role: "Founder & Lead" }]
        },
        {
          title: "Engineering - Prototyping",
          description:
            "Development of demos, automations, internal tools, and AI prototypes.",
          members: [{ name: "Open role", role: "Prototype Builder" }]
        },
        {
          title: "Engineering - Research & Benchmarking",
          description:
            "Applied research, comparative tests, reports, and evaluation frameworks.",
          members: [{ name: "Open role", role: "AI Research Analyst" }]
        },
        {
          title: "Social & Growth",
          description:
            "Distribution, community, partnerships, and channel growth.",
          members: [{ name: "Open role", role: "Growth & Community" }]
        },
        {
          title: "Creative",
          description:
            "Visual identity, formats, editing, storytelling, and content.",
          members: [{ name: "Open role", role: "Creative Editor" }]
        }
      ],
      note:
        "Names are placeholders until the team is defined. The structure is designed to grow modularly."
    },
    join: {
      pageTitle: "Join Us",
      pageIntro:
        "If you want to learn by building and contribute to a credible AI project, Emilia Lab is open to new profiles.",
      lookingForTitle: "Who we are looking for",
      lookingFor: [
        "Students and young builders with strong curiosity for AI.",
        "People who can move small outputs forward reliably.",
        "Engineering, research, social, growth, design, or content profiles."
      ],
      contactTitle: "Join or follow the project",
      contactBody:
        "For now we use placeholder channels. Replace them with a form, email, or social profiles as soon as they are ready.",
      primary: "Write to us",
      secondary: "Follow Emilia Lab",
      email: "hello@emilialab.ai"
    },
    footer: {
      tagline: "Concrete, accessible, relevant AI for the Italian context.",
      location: "Student-led. Built in Italy.",
      linksTitle: "Navigation"
    }
  }
} as const;

export type SiteContent = (typeof siteContent)[Language];
export type IconName = keyof typeof iconMap;
