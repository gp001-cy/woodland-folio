import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import wide1 from "@/assets/wide-1.jpg";
import wide2 from "@/assets/wide-2.jpg";

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  location: string;
  material: string;
  cover: string;
  gallery: string[];
  intro: string;
  story: string[];
};

export const projects: Project[] = [
  {
    slug: "kuhinja-oak-island",
    title: "Kuhinjski otok iz masivnega hrasta",
    category: "Kuhinja",
    year: "2024",
    location: "Ljubljana",
    material: "Masivni evropski hrast, medeninasti detajli",
    cover: project1,
    gallery: [project1, wide2, project3],
    intro:
      "Osrednji element odprte kuhinje — otok iz enega kosa hrasta, brez vidnih vijakov, s tradicionalnimi mizarskimi vezmi.",
    story: [
      "Naročnika sta si želela kos, ki bo trajal več generacij. Izbrali smo počasi sušen slovenski hrast in ga obdelali z naravnim oljem, ki poudari letnice.",
      "Vsi predali tečejo na nemški mehaniki, medeninasti gumbi so ročno kovani v Škofji Loki. Detajli se odkrivajo počasi — natanko tako, kot smo si zamislili.",
    ],
  },
  {
    slug: "lebdece-stopnice-orehove",
    title: "Lebdeče orehove stopnice",
    category: "Stopnice",
    year: "2024",
    location: "Bled",
    material: "Ameriški oreh, brušeno jeklo",
    cover: project2,
    gallery: [project2, project5, wide1],
    intro:
      "Konzolno vpete stopnice v beton — vsaka stopnica iz enega kosa lameliranega oreha.",
    story: [
      "Statični izziv smo rešili s skritim jeklenim jedrom, ki nosi stopnico brez vidnih nosilcev. Vizualno delujejo, kot da lebdijo.",
      "Površina je zaključena z UV utrjenim oljem — mat, prijeten na dotik, odporen na vsakodnevno rabo.",
    ],
  },
  {
    slug: "knjizna-stena",
    title: "Knjižna stena z lestvijo",
    category: "Notranja oprema",
    year: "2023",
    location: "Kranj",
    material: "Masivni hrast, medenina",
    cover: project3,
    gallery: [project3, wide2, project1],
    intro:
      "Knjižnica po meri, od stene do stene, s premično lestvijo na medeninastih tirnicah.",
    story: [
      "Stena je bila projektirana skupaj z arhitekti — vsaka polica je usklajena z višino specifičnih zbirk knjig naročnika.",
      "Lestev drsi tiho po bronu tirnici; ročaji so ročno spolirani in bodo z leti pridobili patino.",
    ],
  },
  {
    slug: "miza-orehova-plosca",
    title: "Miza iz masivne orehove plošče",
    category: "Miza",
    year: "2023",
    location: "Vipavska dolina",
    material: "Slovenski oreh, žive robove",
    cover: project4,
    gallery: [project4, project6, wide1],
    intro:
      "Ena plošča, dva metra osemdeset. Živi rob je ostal takšen, kot ga je oblikovalo drevo.",
    story: [
      "Ploščo smo sušili tri leta v naši sušilnici, preden smo jo obdelali. Skulpturalna noga je iz istega debla.",
      "Nekatere reči se ne dajo pohiteti. Ta miza je ena od njih.",
    ],
  },
  {
    slug: "kopalniska-omarica",
    title: "Kopalniška omarica z lončenim umivalnikom",
    category: "Kopalnica",
    year: "2024",
    location: "Portorož",
    material: "Hrast, mat črn okov",
    cover: project5,
    gallery: [project5, project1, wide2],
    intro:
      "Zaobljena omarica, ki mehča strogo geometrijo kopalnice v obmorski hiši.",
    story: [
      "Robovi so rezkani s CNC in nato ročno pobrušeni — kombinacija natančnosti in obrti.",
      "Vodoodporen finiš je razvit za morsko klimo; les diha, a se ne krivi.",
    ],
  },
  {
    slug: "recepcija-hotel",
    title: "Recepcija butičnega hotela",
    category: "Poslovni prostor",
    year: "2023",
    location: "Bohinj",
    material: "Hrast, medenina",
    cover: project6,
    gallery: [project6, wide1, project3],
    intro:
      "Recepcijski pult, ki naročniku hotela postavi mirno, dostojanstveno prvo obrazložitev.",
    story: [
      "Pult je zasnovan kot skulptura — sprednji panel je iz enega kosa, medeninasti okvir je delo lokalnega kovača.",
      "Vgrajena LED linija se prižge počasi ob mraku in poudari teksturo lesa.",
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
