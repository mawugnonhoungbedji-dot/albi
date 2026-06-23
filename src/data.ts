export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  bgColor: string;
  textColor: string;
  badge?: string;
  accentColor?: string;
}

export interface InvolvementOption {
  id: string;
  title: string;
  description: string;
  isExpandedByDefault?: boolean;
}

export const NAV_LINKS = [
  { label: "Programmes", href: "#projects", icon: "folder" },
  { label: "Histoire & Vision", href: "#philosophy", icon: "newspaper" },
  { label: "Sensibilisation", href: "#campaigns", icon: "megaphone" }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "prevention",
    title: "Distribution de Crèmes Solaires",
    subtitle: "Notre action phare pour prévenir les brûlures graves et le cancer cutanique en équipant les familles vulnérables de filtres protecteurs indice SPF 50+.",
    description: "En l'absence de mélanine pour filtrer les rayons UV, la peau des albinos subit rapidement des brûlures graves. Nos campagnes régulières permettent d'équiper les familles démunies pour faire de la prévention cutanée directe. L'association offre un accès suivi pour 1200+ bénéficiaires enregistrés.",
    image: "/src/assets/images/albi_prevention_care_1781884154813.jpg",
    bgColor: "#F2F0F2",
    textColor: "#73330E",
    badge: "Santé & Protection"
  },
  {
    id: "education",
    title: "Distribution de Kits Scolaires",
    subtitle: "Soutenir l'accès et le maintien d'enfants atteints d'albinisme dans le système scolaire béninois. L'association prépare et distribue des fournitures scolaires adaptées pour compenser leurs difficultés d'apprentissage liées à la déficience visuelle.",
    description: "À l'approche de chaque rentrée scolaire, AlbiInternational soutient les parents vulnérables en fournissant cartables, cahiers de haute qualité, stylos et loupes de grossissement pour atténuer les contraintes de vue en classe et écarter l'exclusion éducative prématurée.",
    image: "/src/assets/images/albi_applying_sunscreen_1781884143114.jpg",
    bgColor: "#F2BF5E",
    textColor: "#73330E",
    badge: "Éducation Inclusive",
    accentColor: "#BF681B"
  },
  {
    id: "christmas",
    title: "Noël des Enfants Albis",
    subtitle: "Organisé chaque 23 décembre de l'année, cet événement amène de la joie et de l'inclusion sous forme de célébrations festives, de cadeaux et de distributions de chapeaux à larges bords et de crèmes.",
    description: "Le Noël des enfants atteints d'albinisme est un havre de rire, de jeux, de cadeaux personnalisés, de denrées et d'encouragements. Un moment fort de communion familiale béninoise pour restaurer la dignité d'exister.",
    image: "/src/assets/images/albi_applying_sunscreen_1781884143114.jpg",
    bgColor: "#BF681B",
    textColor: "#F2F0F2",
    badge: "Joie & Solidarité",
    accentColor: "#73330E"
  }
];

export const INVOLVEMENT_OPTIONS: InvolvementOption[] = [
  {
    id: "volunteer",
    title: "Vous pouvez devenir bénévole",
    description: "Rejoignez notre réseau de solidarité au Bénin. Aidez lors des distributions de kits en milieu rural, à animer nos ateliers éducatifs pour déconstruire les préjugés et mythes populaires, ou à accompagner les familles dans le besoin."
  },
  {
    id: "share",
    title: "Vous pouvez partager l'information",
    description: "Aidez-nous à faire reculer la stigmatisation. L'albinisme est une condition génétique héréditaire parfaitement expliquée par la science, et non une malédiction divine ou un pouvoir mystique. Partagez nos messages d'espoir !",
    isExpandedByDefault: true
  },
  {
    id: "donation",
    title: "Soutenir par un don financier ou de matériel",
    description: "Chaque don sert à acheter des crèmes solaires SPF 50+, des chapeaux à larges bords, des paires de lunettes UV ou à financer le Noël récréatif. L'association propose un versement bancaire sécurisé et des dons logistiques directs."
  },
  {
    id: "campaigns",
    title: "Participer à la JISA (Journée Nationale)",
    description: "Chaque mois de juin, mobilisez-vous avec Albi International pour célébrer les droits des albinos, interpeler les décideurs politiques pour le droit à la santé, et célébrer la diversité humaine !"
  }
];

