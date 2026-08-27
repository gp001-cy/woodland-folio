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
import wide1 from "@/assets/wide-1.jpg";
import wide2 from "@/assets/wide-2.jpg";

export type GalleryImage = { src: string; alt: string };

export type Category = {
  id: string;
  n: string;
  title: string;
  description: string;
  cover: string;
  gallery: GalleryImage[];
};

export const categories: Category[] = [
  {
    id: "kuhinje",
    n: "01",
    title: "Kuhinje po meri",
    description:
      "Kuhinja je srce doma — zato jo načrtujemo natanko po vaših navadah, prostoru in okusu. Od masivnih front in kamnitih delovnih plošč do skritih predalov in premišljene osvetlitve: vsak detajl je izdelan v naši delavnici in postavljen tako, da bo služil desetletja.",
    cover: project1,
    gallery: [
      { src: project1, alt: "Kuhinja po meri z masivnim hrastovim otokom" },
      { src: hero4, alt: "Kuhinjske fronte iz masivnega lesa" },
      { src: wide2, alt: "Delovna plošča in vgradni elementi kuhinje" },
      { src: project3, alt: "Visoki kuhinjski elementi po meri" },
      { src: hero1, alt: "Detajl kuhinjskega predala z ročno obdelavo" },
      { src: project6, alt: "Odprta kuhinja povezana z dnevnim prostorom" },
    ],
  },
  {
    id: "kopalnice",
    n: "02",
    title: "Kopalnice",
    description:
      "Kopalniško pohištvo mora prenesti vlago in vsakodnevno rabo, a hkrati ostati mirno in lepo. Uporabljamo obstojne finiše, kakovosten okov in materiale, ki se v vlažnem prostoru ne krivijo — od omaric pod umivalnikom do visokih omar in ogledal po meri.",
    cover: wide2,
    gallery: [
      { src: wide2, alt: "Kopalniška omarica z lončenim umivalnikom" },
      { src: project5, alt: "Zaobljena kopalniška omarica iz hrasta" },
      { src: hero2, alt: "Kopalniško pohištvo z mat črnim okovom" },
      { src: project4, alt: "Ogledalo in polica po meri v kopalnici" },
      { src: hero3, alt: "Detajl vodoodpornega finiša na lesu" },
      { src: wide1, alt: "Visoka kopalniška omara po meri" },
    ],
  },
];

export const getCategory = (id: string) => categories.find((c) => c.id === id);
