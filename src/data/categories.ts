import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4-kitchen.jpg";
import hero5 from "@/assets/hero-5-hands.jpg";
import wide1 from "@/assets/wide-1.jpg";
import wide2 from "@/assets/wide-2.jpg";
import portrait from "@/assets/about-portrait.jpg";

export type GalleryImage = { src: string; alt: string };

export type Category = {
  id: string;
  n: string;
  title: string;
  description: string;
  coverImage: string;
  gallery: GalleryImage[];
};

const IK = "https://ik.imagekit.io/b8gd4wfofi";

export const categories: Category[] = [
  {
    id: "kuhinje-po-meri",
    n: "01",
    title: "Kuhinje po meri",
    description:
      "Kuhinja je srce doma — zato jo načrtujemo natanko po vaših navadah, prostoru in okusu. Od masivnih front in kamnitih delovnih plošč do skritih predalov in premišljene osvetlitve: vsak detajl je izdelan v naši delavnici in postavljen tako, da bo služil desetletja.",
    coverImage: `${IK}/Kuhinje/naslovna%20k.jpeg`,
    gallery: [
      { src: `${IK}/Kuhinje/k1.jpeg`, alt: "Kuhinja po meri — slika 1" },
      { src: `${IK}/Kuhinje/k2.jpeg`, alt: "Kuhinja po meri — slika 2" },
      { src: `${IK}/Kuhinje/k3.jpeg`, alt: "Kuhinja po meri — slika 3" },
      { src: `${IK}/Kuhinje/k4.jpeg`, alt: "Kuhinja po meri — slika 4" },
      { src: `${IK}/Kuhinje/k5.jpeg`, alt: "Kuhinja po meri — slika 5" },
      { src: `${IK}/Kuhinje/k6.jpeg`, alt: "Kuhinja po meri — slika 6" },
      { src: `${IK}/Kuhinje/k7.jpeg`, alt: "Kuhinja po meri — slika 7" },
      { src: `${IK}/Kuhinje/naslovna%20k.jpeg`, alt: "Kuhinja po meri — naslovna slika" },
      { src: `${IK}/Kuhinje/k8.jpeg`, alt: "Kuhinja po meri — slika 8" },
      { src: `${IK}/Kuhinje/k9.jpeg`, alt: "Kuhinja po meri — slika 9" },
      { src: `${IK}/Kuhinje/k10.jpeg`, alt: "Kuhinja po meri — slika 10" },
      { src: `${IK}/Kuhinje/k11.jpeg`, alt: "Kuhinja po meri — slika 11" },
    ],
  },
  {
    id: "kopalnice",
    n: "02",
    title: "Kopalnice",
    description:
      "Kopalniško pohištvo mora prenesti vlago in vsakodnevno rabo, a hkrati ostati mirno in lepo. Uporabljamo obstojne finiše, kakovosten okov in materiale, ki se v vlažnem prostoru ne krivijo — od omaric pod umivalnikom do visokih omar in ogledal po meri.",
    coverImage: `${IK}/Kopalnice/naslov%20kop.jpeg`,
    gallery: [
      { src: `${IK}/Kopalnice/o1.jpeg`, alt: "Kopalnica po meri — slika 1" },
      { src: `${IK}/Kopalnice/o2.jpeg`, alt: "Kopalnica po meri — slika 2" },
      { src: `${IK}/Kopalnice/o3.jpeg`, alt: "Kopalnica po meri — slika 3" },
      { src: `${IK}/Kopalnice/naslov%20kop.jpeg`, alt: "Kopalnica po meri — naslovna slika" },
      { src: `${IK}/Kopalnice/o4.jpeg`, alt: "Kopalnica po meri — slika 4" },
      { src: `${IK}/Kopalnice/o5.jpeg`, alt: "Kopalnica po meri — slika 5" },
      { src: `${IK}/Kopalnice/o6.jpeg`, alt: "Kopalnica po meri — slika 6" },
      { src: `${IK}/Kopalnice/o7.jpeg`, alt: "Kopalnica po meri — slika 7" },
      { src: `${IK}/Kopalnice2/o8.jpeg`, alt: "Kopalnica po meri — slika 8" },
      { src: `${IK}/Kopalnice2/o9.jpeg`, alt: "Kopalnica po meri — slika 9" },
      { src: `${IK}/Kopalnice2/o10.jpeg`, alt: "Kopalnica po meri — slika 10" },
      { src: `${IK}/Kopalnice2/o11.jpeg`, alt: "Kopalnica po meri — slika 11" },
      { src: `${IK}/Kopalnice2/o12.jpeg`, alt: "Kopalnica po meri — slika 12" },
      { src: `${IK}/Kopalnice2/o13.jpeg`, alt: "Kopalnica po meri — slika 13" },
      { src: `${IK}/Kopalnice2/o14.jpeg`, alt: "Kopalnica po meri — slika 14" },
      { src: `${IK}/Kopalnice2/o15.jpg`, alt: "Kopalnica po meri — slika 15" },
    ],
  },
  {
    id: "vgradne-omare",
    n: "03",
    title: "Vgradne omare",
    description:
      "Vgradne omare izkoristijo prav vsak centimeter prostora — tudi poševne strope, niše in nenavadne kote. Notranjost načrtujemo skupaj z vami: police, predali, drogovi in predelki so razporejeni po tem, kar zares shranjujete.",
    coverImage: `${IK}/VgradneOmare/naslov%202.jpeg`,
    gallery: [
      { src: `${IK}/VgradneOmare/naslov%202.jpeg`, alt: "Vgradna omara — naslovna slika" },
      { src: `${IK}/VgradneOmare/naslov%20vgr.jpeg`, alt: "Vgradna omara — slika 2" },
      { src: `${IK}/VgradneOmare/q1.jpeg`, alt: "Vgradna omara — slika 3" },
      { src: `${IK}/VgradneOmare/q2.jpeg`, alt: "Vgradna omara — slika 4" },
      { src: `${IK}/VgradneOmare/q3.jpeg`, alt: "Vgradna omara — slika 5" },
      { src: `${IK}/VgradneOmare/q4.jpeg`, alt: "Vgradna omara — slika 6" },
      { src: `${IK}/VgradneOmare/q5.jpeg`, alt: "Vgradna omara — slika 7" },
      { src: `${IK}/VgradneOmare/q6.jpeg`, alt: "Vgradna omara — slika 8" },
      { src: `${IK}/VgradneOmare/q7.jpeg`, alt: "Vgradna omara — slika 9" },
    ],
  },
  {
    id: "predsobe",
    n: "04",
    title: "Predsobe",
    description:
      "Predsoba je prvi vtis doma. Ustvarimo mirno, urejeno vstopno točko — s prostorom za obutev, oblačila in vsakodnevne drobnarije, ki naj ostanejo skrite, a vedno pri roki.",
    coverImage: `${IK}/Predsobe/naslov%20predso.jpeg`,
    gallery: [
      { src: `${IK}/Predsobe/naslov%20predso.jpeg`, alt: "Predsobno pohištvo po meri — naslovna slika" },
      { src: `${IK}/Predsobe/r1.jpeg`, alt: "Predsobno pohištvo po meri — slika 1" },
      { src: `${IK}/Predsobe/r2.jpeg`, alt: "Predsobno pohištvo po meri — slika 2" },
      { src: `${IK}/Predsobe/r3.jpeg`, alt: "Predsobno pohištvo po meri — slika 3" },
      { src: `${IK}/Predsobe/r4.jpeg`, alt: "Predsobno pohištvo po meri — slika 4" },
      { src: `${IK}/Predsobe/r5.jpeg`, alt: "Predsobno pohištvo po meri — slika 5" },
      { src: `${IK}/Predsobe/r6.jpeg`, alt: "Predsobno pohištvo po meri — slika 6" },
      { src: `${IK}/Predsobe/r7.jpeg`, alt: "Predsobno pohištvo po meri — slika 7" },
      { src: `${IK}/Predsobe/r8.jpeg`, alt: "Predsobno pohištvo po meri — slika 8" },
      { src: `${IK}/Predsobe/r9.jpeg`, alt: "Predsobno pohištvo po meri — slika 9" },
      { src: `${IK}/Predsobe/r10.jpeg`, alt: "Predsobno pohištvo po meri — slika 10" },
      { src: `${IK}/Predsobe/r11.jpeg`, alt: "Predsobno pohištvo po meri — slika 11" },
      { src: `${IK}/Predsobe/r12.jpeg`, alt: "Predsobno pohištvo po meri — slika 12" },
      { src: `${IK}/Predsobe/r13.jpeg`, alt: "Predsobno pohištvo po meri — slika 13" },
      { src: `${IK}/Predsobe/r14.jpeg`, alt: "Predsobno pohištvo po meri — slika 14" },
      { src: `${IK}/Predsobe/r15.jpeg`, alt: "Predsobno pohištvo po meri — slika 15" },
      { src: `${IK}/Predsobe/r16.jpeg`, alt: "Predsobno pohištvo po meri — slika 16" },
      { src: `${IK}/Predsobe/r17.jpeg`, alt: "Predsobno pohištvo po meri — slika 17" },
      { src: `${IK}/Predsobe/r18.jpeg`, alt: "Predsobno pohištvo po meri — slika 18" },
      { src: `${IK}/Predsobe/r19.jpeg`, alt: "Predsobno pohištvo po meri — slika 19" },
      { src: `${IK}/Predsobe/r20.jpeg`, alt: "Predsobno pohištvo po meri — slika 20" },
      { src: `${IK}/Predsobe/r21.jpeg`, alt: "Predsobno pohištvo po meri — slika 21" },
    ],
  },
  {
    id: "postelje",
    n: "05",
    title: "Postelje",
    description:
      "Postelja po meri pomeni pravo velikost, pravo višino in zgradbo, ki ne škripa. Vzglavja oblazinimo ali izdelamo iz masivnega lesa, pod ležiščem pa po želji skrijemo prostoren predal za shranjevanje.",
    coverImage: `${IK}/Postelje/naslv%20postleja.jpeg`,
    gallery: [
      { src: `${IK}/Postelje/naslv%20postleja.jpeg`, alt: "Postelja po meri — naslovna slika" },
      { src: `${IK}/Postelje/p1.jpeg`, alt: "Postelja po meri — slika 1" },
      { src: `${IK}/Postelje/p2.jpeg`, alt: "Postelja po meri — slika 2" },
      { src: `${IK}/Postelje/p3.jpeg`, alt: "Postelja po meri — slika 3" },
      { src: `${IK}/Postelje/p4.jpeg`, alt: "Postelja po meri — slika 4" },
      { src: `${IK}/Postelje/p5.jpeg`, alt: "Postelja po meri — slika 5" },
      { src: `${IK}/Postelje/p6.jpeg`, alt: "Postelja po meri — slika 6" },
    ],
  },
  {
    id: "dnevne-otroske-sobe",
    n: "06",
    title: "Pohištvo za dnevne in otroške sobe",
    description:
      "Za dnevne in otroške sobe izdelujemo pohištvo, ki raste z družino — TV omarice, knjižne stene, pisalne mize in shrambne rešitve, ki so trdne, varne in dovolj prilagodljive za spreminjajoče se potrebe.",
    coverImage: project6,
    gallery: [
      { src: project6, alt: "Pohištvo za dnevno sobo po meri" },
      { src: project3, alt: "Knjižna stena v dnevni sobi" },
      { src: wide1, alt: "TV omarica iz masivnega lesa" },
      { src: project1, alt: "Pisalna miza po meri v otroški sobi" },
      { src: hero3, alt: "Police in shramba v otroški sobi" },
      { src: project4, alt: "Detajl lesene površine v dnevnem prostoru" },
    ],
  },
  {
    id: "stopnice",
    n: "07",
    title: "Stopnice",
    description:
      "Stopnice so konstrukcijski in oblikovni izziv hkrati. Izdelujemo masivne, lebdeče in obložene stopnice — natančno izmerjene, statično preverjene in zaključene s finišem, ki prenese vsakodnevno hojo.",
    coverImage: project2,
    gallery: [
      { src: project2, alt: "Lebdeče stopnice iz masivnega oreha" },
      { src: wide1, alt: "Stopnišče z leseno oblogo" },
      { src: project5, alt: "Detajl stopnice in ograje" },
      { src: hero2, alt: "Masivne lesene stopnice v hiši" },
      { src: project3, alt: "Stopnišče z vgradno shrambo" },
      { src: hero5, alt: "Ročna obdelava stopniške plošče" },
    ],
  },
  {
    id: "3d-izrisi",
    n: "08",
    title: "3D izrisi",
    description:
      "Preden se dotaknemo lesa, projekt vidite v 3D. Izris pokaže razmerja, materiale in barve v vašem prostoru — tako se odločitve sprejemajo mirno in brez presenečenj pri montaži.",
    coverImage: project4,
    gallery: [
      { src: project4, alt: "3D izris pohištva po meri" },
      { src: project1, alt: "Vizualizacija kuhinje pred izdelavo" },
      { src: hero4, alt: "3D pogled na kuhinjski prostor" },
      { src: wide2, alt: "Vizualizacija kopalniškega pohištva" },
      { src: project6, alt: "3D načrt dnevne sobe" },
      { src: hero1, alt: "Tehnični izris pohištva po meri" },
    ],
  },
];

export const getCategory = (id: string) => categories.find((c) => c.id === id);
