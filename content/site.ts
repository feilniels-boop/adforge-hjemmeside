/**
 * Central copy and content for StaticForge.
 * Edit this file to change Danish text, FAQ, portfolio examples, and pricing.
 */

export const brand = {
  name: "StaticForge",
  tagline: "3 gratis static koncepter til dit produkt",
} as const;

export const nav = {
  links: [
    { href: "#arbejde", label: "Arbejde" },
    { href: "#proces", label: "Proces" },
    { href: "#priser", label: "Priser" },
    { href: "#faq", label: "FAQ" },
  ],
  cta: { href: "#tilbud", label: "Få 3 gratis static koncepter" },
} as const;

export const hero = {
  eyebrow: "3 gratis static koncepter · inden for 48 timer",
  headline: "Få 3 gratis static koncepter til dit nuværende produkt",
  subheadline:
    "Tilmeld dig med webshop, produkt URL og lidt om dit tilbud. Vi laver tre konkrete annoncekoncepter baseret på det produkt, du sælger nu, så du kan se hook, vinkel og visuel retning før du køber mere.",
  primaryCta: { href: "#tilbud", label: "Send mit produkt og få 3 gratis koncepter" },
  secondaryCta: { href: "#arbejde", label: "Se eksempler" },
  trustLine:
    "Ingen binding. Du modtager preview koncepter med vandmærke, typisk inden for 48 timer.",
} as const;

/** Hero cards shown in the top visual stack. */
export const heroAdMocks = [
  {
    id: "hero-1",
    brandLabel: "HAGRO",
    angleLabel: "Produktfordel",
    hook: "Lys der samler bordet",
    ctaBadge: "Se koncept",
    accentHue: 42,
    imageSrc: "/portfolio/pf-02.png" as string | null,
  },
  {
    id: "hero-2",
    brandLabel: "WorkWalk",
    angleLabel: "Problemvinkel",
    hook: "Mindre siddetid. Mere gang.",
    ctaBadge: "Få 3 gratis",
    accentHue: 145,
    imageSrc: "/portfolio/pf-18.png",
  },
  {
    id: "hero-3",
    brandLabel: "Nordic Visual",
    angleLabel: "Tilbudsvinkel",
    hook: "Smart TV. Uden bøvl.",
    ctaBadge: "Se koncept",
    accentHue: 200,
    imageSrc: "/portfolio/pf-07.png",
  },
  {
    id: "hero-4",
    brandLabel: "Buello",
    angleLabel: "Klar besked",
    hook: "Mere ro i lænden",
    ctaBadge: "Få 3 gratis",
    accentHue: 30,
    imageSrc: "/portfolio/pf-08.png",
  },
] as const;

export const valuePropositionSection = {
  id: "hvorfor",
  title: "En reel smagsprøve — ikke en salgstale.",
  body: "Du sender dit produkt. Vi sender tre konkrete static koncepter tilbage. Ikke en lang pitch, ikke et uforpligtende møde først, bare en konkret retning du kan vurdere.",
  cards: [
    {
      title: "Baseret på dit produkt",
      body: "Vi tager udgangspunkt i din produkt URL, dit tilbud, din målgruppe og den kontekst du sender.",
    },
    {
      title: "Tre konkrete koncepter",
      body: "Du får tre forskellige retninger med hook, layout og annoncevinkel, så du kan se hvad der kunne testes på Meta.",
    },
    {
      title: "Næste skridt er frivilligt",
      body: "Kan du lide retningen, kan vi producere en færdig pakke. Hvis ikke, stopper det dér.",
    },
  ],
} as const;

export const portfolioSection = {
  id: "arbejde",
  eyebrow: "Udvalgt arbejde",
  title: "Statics der føles som rigtige paid social-kreativer",
  intro:
    "Et udsnit af retninger og formater i et uendeligt loop, så du hurtigt kan få en fornemmelse af stil og niveau.",
} as const;

export type PortfolioAngle =
  | "Tilbudsvinkel"
  | "Problemvinkel"
  | "Review-vinkel"
  | "Før/efter-vinkel"
  | "Produktfordel";

export type PortfolioItem = {
  id: string;
  brandLabel: string;
  angleLabel: PortfolioAngle;
  hook: string;
  ctaBadge: string;
  imageSrc: string | null;
  accentHue: number;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "pf-01",
    brandLabel: "HAGRO",
    angleLabel: "Produktfordel",
    hook: "Pendel over spisebord — varmt lys og tilbud",
    ctaBadge: "—",
    imageSrc: "/portfolio/pf-01.png",
    accentHue: 38,
  },
  {
    id: "pf-02",
    brandLabel: "HAGRO",
    angleLabel: "Tilbudsvinkel",
    hook: "Belysning til hjemmet med rabat-badge",
    ctaBadge: "—",
    imageSrc: "/portfolio/pf-02.png",
    accentHue: 35,
  },
  {
    id: "pf-03",
    brandLabel: "HAGRO",
    angleLabel: "Produktfordel",
    hook: "Lampe i stuen — stemning og produktfokus",
    ctaBadge: "—",
    imageSrc: "/portfolio/pf-03.png",
    accentHue: 42,
  },
  {
    id: "pf-04",
    brandLabel: "HAGRO",
    angleLabel: "Før/efter-vinkel",
    hook: "Før og efter — samme rum, nyt lys",
    ctaBadge: "—",
    imageSrc: "/portfolio/pf-04.png",
    accentHue: 33,
  },
  {
    id: "pf-05",
    brandLabel: "Buello",
    angleLabel: "Problemvinkel",
    hook: "Ryggen og lænden — varme og massage",
    ctaBadge: "—",
    imageSrc: "/portfolio/pf-05.png",
    accentHue: 32,
  },
  {
    id: "pf-06",
    brandLabel: "Nordic Visual",
    angleLabel: "Produktfordel",
    hook: "Projektor — biograf på væggen",
    ctaBadge: "—",
    imageSrc: "/portfolio/pf-06.png",
    accentHue: 210,
  },
  {
    id: "pf-07",
    brandLabel: "Nordic Visual",
    angleLabel: "Produktfordel",
    hook: "Smart TV uden bøvl — hjemmebio",
    ctaBadge: "—",
    imageSrc: "/portfolio/pf-07.png",
    accentHue: 200,
  },
  {
    id: "pf-08",
    brandLabel: "Buello",
    angleLabel: "Review-vinkel",
    hook: "Trådløst varmebælte — testimonial og ikoner",
    ctaBadge: "—",
    imageSrc: "/portfolio/pf-08.png",
    accentHue: 28,
  },
  {
    id: "pf-09",
    brandLabel: "HAGRO",
    angleLabel: "Produktfordel",
    hook: "Udendørs stemning — lamper på terrassen",
    ctaBadge: "—",
    imageSrc: "/portfolio/pf-09.png",
    accentHue: 30,
  },
  {
    id: "pf-10",
    brandLabel: "Buello",
    angleLabel: "Før/efter-vinkel",
    hook: "Ledning vs. frihed — infrarød løsning",
    ctaBadge: "—",
    imageSrc: "/portfolio/pf-10.png",
    accentHue: 26,
  },
  {
    id: "pf-11",
    brandLabel: "Nordic Visual",
    angleLabel: "Produktfordel",
    hook: "Tag projektoren med — kompakt og flytbar",
    ctaBadge: "—",
    imageSrc: "/portfolio/pf-11.png",
    accentHue: 205,
  },
  {
    id: "pf-12",
    brandLabel: "HAGRO",
    angleLabel: "Tilbudsvinkel",
    hook: "Lampe på skænk — tekstur og pris",
    ctaBadge: "—",
    imageSrc: "/portfolio/pf-12.png",
    accentHue: 40,
  },
  {
    id: "pf-13",
    brandLabel: "HAGRO",
    angleLabel: "Produktfordel",
    hook: "Udvalgt belysning — tryg handel og USPs",
    ctaBadge: "—",
    imageSrc: "/portfolio/pf-13.png",
    accentHue: 34,
  },
  {
    id: "pf-14",
    brandLabel: "HAGRO",
    angleLabel: "Produktfordel",
    hook: "Pendel og lifestyle — kollage-layout",
    ctaBadge: "—",
    imageSrc: "/portfolio/pf-14.png",
    accentHue: 36,
  },
  {
    id: "pf-15",
    brandLabel: "WorkWalk",
    angleLabel: "Tilbudsvinkel",
    hook: "Walking pad — kompakt, enkel, klar",
    ctaBadge: "—",
    imageSrc: "/portfolio/pf-15.png",
    accentHue: 140,
  },
  {
    id: "pf-16",
    brandLabel: "Nordic Visual",
    angleLabel: "Produktfordel",
    hook: "Projektor lifestyle — stue og par",
    ctaBadge: "—",
    imageSrc: "/portfolio/pf-16.png",
    accentHue: 208,
  },
  {
    id: "pf-17",
    brandLabel: "Buello",
    angleLabel: "Problemvinkel",
    hook: "Smerte vs. ro — split og budskab",
    ctaBadge: "—",
    imageSrc: "/portfolio/pf-17.png",
    accentHue: 30,
  },
  {
    id: "pf-18",
    brandLabel: "WorkWalk",
    angleLabel: "Review-vinkel",
    hook: "WorkWalk Classic — Trustpilot og rabat",
    ctaBadge: "—",
    imageSrc: "/portfolio/pf-18.png",
    accentHue: 135,
  },
  {
    id: "pf-19",
    brandLabel: "Nordic Visual",
    angleLabel: "Produktfordel",
    hook: "Projektor på farten — sommerhus og soveværelse",
    ctaBadge: "—",
    imageSrc: "/portfolio/pf-19.png",
    accentHue: 212,
  },
  {
    id: "pf-20",
    brandLabel: "HAGRO",
    angleLabel: "Produktfordel",
    hook: "Lampe over bordet — collage og closeups",
    ctaBadge: "—",
    imageSrc: "/portfolio/pf-20.png",
    accentHue: 37,
  },
  {
    id: "pf-21",
    brandLabel: "WorkWalk",
    angleLabel: "Produktfordel",
    hook: "Passer ind i hjemmet — lav profil",
    ctaBadge: "—",
    imageSrc: "/portfolio/pf-21.png",
    accentHue: 142,
  },
  {
    id: "pf-22",
    brandLabel: "HAGRO",
    angleLabel: "Før/efter-vinkel",
    hook: "Hvis bordet føles fladt — lysløsning",
    ctaBadge: "—",
    imageSrc: "/portfolio/pf-22.png",
    accentHue: 44,
  },
  {
    id: "pf-23",
    brandLabel: "HAGRO",
    angleLabel: "Produktfordel",
    hook: "Pendel — arkitektur og stemning i ét static",
    ctaBadge: "—",
    imageSrc: "/portfolio/pf-23.png",
    accentHue: 39,
  },
  {
    id: "pf-24",
    brandLabel: "StaticForge",
    angleLabel: "Produktfordel",
    hook: "Tre telefon-formater — sneakers, audio og ur",
    ctaBadge: "—",
    imageSrc: "/portfolio/pf-24.png",
    accentHue: 24,
  },
  {
    id: "pf-25",
    brandLabel: "HydraSerum",
    angleLabel: "Produktfordel",
    hook: "Fra produktside til tre square koncepter",
    ctaBadge: "—",
    imageSrc: "/portfolio/pf-25.png",
    accentHue: 88,
  },
  {
    id: "pf-26",
    brandLabel: "StaticForge",
    angleLabel: "Problemvinkel",
    hook: "Headline, benefit og problem/løsning på ét produkt",
    ctaBadge: "—",
    imageSrc: "/portfolio/pf-26.png",
    accentHue: 210,
  },
  {
    id: "pf-27",
    brandLabel: "StaticForge",
    angleLabel: "Produktfordel",
    hook: "Lifestyle, close-up og benefit-layout til samme SKU",
    ctaBadge: "—",
    imageSrc: "/portfolio/pf-27.png",
    accentHue: 215,
  },
  {
    id: "ls-01",
    brandLabel: "Lumi Smile",
    angleLabel: "Problemvinkel",
    hook: "Kaffepletter sidder i belægningen — badeværelse",
    ctaBadge: "—",
    imageSrc: "/portfolio/lumi-smile-01.png",
    accentHue: 205,
  },
  {
    id: "ls-02",
    brandLabel: "Lumi Smile",
    angleLabel: "Før/efter-vinkel",
    hook: "Gule tænder og biofilm — split før/efter",
    ctaBadge: "—",
    imageSrc: "/portfolio/lumi-smile-02.png",
    accentHue: 200,
  },
  {
    id: "ls-03",
    brandLabel: "Lumi Smile",
    angleLabel: "Problemvinkel",
    hook: "Kaffepletter på marmor — LED og ren rutine",
    ctaBadge: "—",
    imageSrc: "/portfolio/lumi-smile-03.png",
    accentHue: 212,
  },
  {
    id: "ls-04",
    brandLabel: "Lumi Smile",
    angleLabel: "Før/efter-vinkel",
    hook: "12 år med gule kaffetænder — forsvundet på 76 dage",
    ctaBadge: "—",
    imageSrc: "/portfolio/lumi-smile-04.png",
    accentHue: 198,
  },
  {
    id: "ls-05",
    brandLabel: "Lumi Smile",
    angleLabel: "Før/efter-vinkel",
    hook: "Før/efter i cirkler — badeværelse og blåt LED",
    ctaBadge: "—",
    imageSrc: "/portfolio/lumi-smile-05.png",
    accentHue: 202,
  },
  {
    id: "ls-06",
    brandLabel: "Lumi Smile",
    angleLabel: "Produktfordel",
    hook: "Årsagen, ikke kun farven — pris og USPs",
    ctaBadge: "—",
    imageSrc: "/portfolio/lumi-smile-06.png",
    accentHue: 208,
  },
  {
    id: "ls-07",
    brandLabel: "Lumi Smile",
    angleLabel: "Tilbudsvinkel",
    hook: "Pletterne kommer tilbage — tilbud og garanti",
    ctaBadge: "—",
    imageSrc: "/portfolio/lumi-smile-07.png",
    accentHue: 204,
  },
  {
    id: "hg-08",
    brandLabel: "HAGRO",
    angleLabel: "Review-vinkel",
    hook: "Facebook-testimonial — terrasse før og efter solcellelamper",
    ctaBadge: "—",
    imageSrc: "/portfolio/hagro-08.png",
    accentHue: 36,
  },
  {
    id: "hg-09",
    brandLabel: "HAGRO",
    angleLabel: "Før/efter-vinkel",
    hook: "Ingen ledninger — trådløs lampe før og efter",
    ctaBadge: "—",
    imageSrc: "/portfolio/hagro-09.png",
    accentHue: 34,
  },
  {
    id: "hg-10",
    brandLabel: "HAGRO",
    angleLabel: "Produktfordel",
    hook: "Solcellelamper — Trustpilot, returret og udsalg",
    ctaBadge: "—",
    imageSrc: "/portfolio/hagro-10.png",
    accentHue: 40,
  },
  {
    id: "hg-11",
    brandLabel: "HAGRO",
    angleLabel: "Før/efter-vinkel",
    hook: "Terrasse værd at invitere gæster ud på — trådløse solcellelamper",
    ctaBadge: "—",
    imageSrc: "/portfolio/hagro-11.png",
    accentHue: 38,
  },
  {
    id: "hg-12",
    brandLabel: "HAGRO",
    angleLabel: "Tilbudsvinkel",
    hook: "Gør terrassen klar til sommeraftener — op til 50% rabat",
    ctaBadge: "—",
    imageSrc: "/portfolio/hagro-12.png",
    accentHue: 42,
  },
  {
    id: "hg-13",
    brandLabel: "HAGRO",
    angleLabel: "Tilbudsvinkel",
    hook: "Udendørslamper — 399 kr og sommeraftener på terrassen",
    ctaBadge: "—",
    imageSrc: "/portfolio/hagro-13.png",
    accentHue: 37,
  },
  {
    id: "hg-14",
    brandLabel: "HAGRO",
    angleLabel: "Før/efter-vinkel",
    hook: "Automatisk lys i haven — før og efter",
    ctaBadge: "—",
    imageSrc: "/portfolio/hagro-14.png",
    accentHue: 33,
  },
];

export const credibility = {
  title: "Bygget omkring dit produkt",
  items: [
    {
      title: "Hurtig første leverance",
      body: "Vi sigter efter at sende dine tre statics inden for 48 timer, så du ikke sidder og venter på bureau-ugeplan.",
    },
    {
      title: "Dit produkt, dine URLs",
      body: "Vi tager udgangspunkt i den konkrete vare og shop, du linker til — ikke et tilfældigt stock-produkt.",
    },
    {
      title: "Klar til flere statics",
      body: "Kan du lide retningen, hjælper vi med pakker, månedlige leverancer og flere formater til Meta.",
    },
  ],
} as const;

export const processSection = {
  id: "proces",
  title: "Sådan fungerer det",
  steps: [
    {
      title: "Tilmeld med dit produkt",
      body: "Send webshop URL, produkt URL og kort kontekst om hvad du sælger.",
    },
    {
      title: "Vi finder vinklerne",
      body: "Vi kigger på produkt, målgruppe, tilbud og hvilke budskaber der kan stoppe scrollen.",
    },
    {
      title: "Du får 3 koncepter",
      body: "Typisk inden for 48 timer modtager du tre preview koncepter med hook, layout og visuel retning.",
    },
    {
      title: "Du vælger næste skridt",
      body: "Vil du have dem produceret som færdige annoncefiler, sender vi et tilbud. Hvis ikke, er der ingen binding.",
    },
  ],
} as const;

export const leadSection = {
  id: "tilbud",
  title: "Få 3 gratis static koncepter til dit produkt",
  body: "Udfyld formularen, så laver vi tre preview koncepter baseret på din vare, webshop og kontekst.",
  bullets: [
    "Tre konkrete retninger med hook, vinkel og layout.",
    "Koncepterne er lavet som preview med vandmærke og er ikke færdige annoncefiler til upload.",
  ],
  submitLabel: "Send — jeg vil have mine 3 gratis koncepter",
  formNote:
    "Ingen binding. Du modtager preview koncepter med vandmærke. De gratis koncepter er ikke færdige annoncefiler til upload.",
  successMessage:
    "Tak. Vi har modtaget dit produkt. Du får svar hurtigst muligt med dine 3 koncepter.",
} as const;

export const adSpendOptions = [
  { value: "0-5000", label: "0 til 5.000 kr" },
  { value: "5000-25000", label: "5.000 til 25.000 kr" },
  { value: "25000-100000", label: "25.000 til 100.000 kr" },
  { value: "100000+", label: "100.000 kr plus" },
] as const;

export const metaAdsStatusOptions = [
  { value: "ja", label: "Ja" },
  { value: "nej", label: "Nej" },
  { value: "planlaegger", label: "Planlægger at starte" },
] as const;

export const biggestChallengeOptions = [
  { value: "creatives", label: "Mangler bedre creatives" },
  { value: "cpa", label: "For dyre køb" },
  { value: "clicks", label: "For få klik" },
  { value: "angles", label: "Ved ikke hvilke vinkler jeg skal teste" },
  { value: "other", label: "Andet" },
] as const;

export const pricingSection = {
  id: "priser",
  title: "Når du vil have koncepterne produceret færdigt",
  intro:
    "De tre gratis koncepter viser retningen. Skal du bruge færdige annoncefiler, volumen eller faste leverancer, laver vi et tilbud efter behov.",
  cards: [
    {
      name: "Testpakke",
      description: "For brands der vil teste statics uden at binde sig",
      highlighted: false,
      features: [
        "5 til 10 statics",
        "1 produkt",
        "Fokus på hurtig validering",
        "Pris efter scope",
      ],
      cta: { href: "#tilbud", label: "Få pris på testpakke" },
    },
    {
      name: "Månedlig produktion",
      description: "For webshops der vil teste nye vinkler løbende",
      features: [
        "10 til 30 statics pr. måned",
        "Flere kreative vinkler",
        "Løbende optimering",
        "Pris efter behov",
      ],
      cta: { href: "#tilbud", label: "Få månedligt tilbud" },
      highlighted: true,
    },
    {
      name: "Custom",
      description: "For brands med flere produkter eller større kampagner",
      highlighted: false,
      features: [
        "Flere produkter",
        "Flere formater",
        "Kreativ research",
        "Fast levering",
      ],
      cta: { href: "#tilbud", label: "Kontakt os" },
    },
  ],
} as const;

/** Dedicated URL after successful lead form submit (e.g. Google Ads, Meta Event Setup Tool on URL). */
export const thankYouPage = {
  path: "/tak",
  redirectSeconds: 20,
  redirectTo: `/#${pricingSection.id}`,
  headline: "Tak — vi har modtaget det",
  supporting:
    "Du modtager typisk svar inden for 48 timer med dine tre preview koncepter. Om lidt sender vi dig videre til priserne, når du vil have koncepterne produceret færdigt.",
  ctaLabel: "Se priser nu",
} as const;

export const founderSection = {
  title: "Direkte, hurtigt og bygget til performance",
  body: "Det her er ikke et klassisk bureau setup med lange møder og langsom levering. Fokus er simpelt: find bedre vinkler, lav flere statics og gør det nemmere for dig at teste på Meta.",
  imageSrc: null as string | null,
  imageAlt: "Founder",
  placeholderCaption: "Team / founder — tilføj foto når du er klar.",
} as const;

export const faqSection = {
  id: "faq",
  title: "Ofte stillede spørgsmål",
  items: [
    {
      q: "Hvad får jeg helt konkret?",
      a: "Du får tre preview koncepter med hook, layout og annoncevinkel baseret på dit produkt. De leveres med vandmærke og er lavet til vurdering, ikke som færdige annoncefiler til upload.",
    },
    {
      q: "Er de tre gratis koncepter det samme som en betalt pakke?",
      a: "Nej. De gratis koncepter er en smagsprøve på retningen og kvaliteten. En betalt pakke er færdigproducerede annoncefiler uden vandmærke, klar til brug i dine kampagner.",
    },
    {
      q: "Hvor hurtigt får jeg dem?",
      a: "Vi sigter efter at sende dem inden for 48 timer.",
    },
    {
      q: "Hvad skal I bruge fra mig?",
      a: "Din webshop URL, produkt URL og lidt kontekst om produkt, målgruppe, tilbud og eventuelle brandregler.",
    },
    {
      q: "Jeg kører ikke Meta endnu — giver det mening?",
      a: "Ja. Det kan være en god måde at se hvilke vinkler du kunne starte med, før du bruger penge på annoncering.",
    },
    {
      q: "Hvad koster det bagefter?",
      a: "Det afhænger af antal statics, produkter og kompleksitet. Hvis du kan lide retningen, får du et konkret tilbud.",
    },
  ],
} as const;

export const finalCta = {
  headline: "Klar til dine 3 gratis static koncepter?",
  button: { href: "#tilbud", label: "Tilmeld med mit produkt" },
} as const;

export const footer = {
  note: `${brand.name} · 3 gratis static koncepter til dit produkt`,
  links: [
    { href: "#tilbud", label: "3 gratis static koncepter" },
    { href: "#faq", label: "FAQ" },
  ],
} as const;
