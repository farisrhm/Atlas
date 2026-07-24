import {
  Feature,
  Service,
  MethodStep,
  Project,
  Testimonial,
  FAQItem,
} from "./types";

export const features: Feature[] = [
  {
    icon: "Smartphone",
    title: "Expertise Flutter",
    description:
      "Un seul code source pour iOS et Android, sans compromis sur la qualité ni les performances.",
  },
  {
    icon: "Layers",
    title: "iOS & Android natif",
    description:
      "Applications fluides, rapides et parfaitement intégrées aux standards de chaque plateforme.",
  },
  {
    icon: "Sparkles",
    title: "Intégration IA",
    description:
      "Chatbots, recommandations, génération de contenu : nous intégrons l'IA au cœur de votre produit.",
  },
  {
    icon: "Compass",
    title: "Accompagnement de A à Z",
    description:
      "De l'idée initiale à la mise en production, nous vous guidons à chaque étape du projet.",
  },
  {
    icon: "Rocket",
    title: "Publication garantie",
    description:
      "Nous gérons la mise en ligne sur l'App Store et le Google Play Store sans stress pour vous.",
  },
  {
    icon: "Gauge",
    title: "Performance & qualité",
    description:
      "Code testé, optimisé et documenté pour une application durable et évolutive.",
  },
];

export const services: Service[] = [
  {
    icon: "Zap",
    title: "MVP en quelques semaines",
    description:
      "Validez votre idée rapidement avec un produit minimum viable fonctionnel.",
    benefits: ["Livraison rapide", "Coût maîtrisé", "Feedback utilisateurs réel"],
  },
  {
    icon: "Briefcase",
    title: "Application métier",
    description:
      "Digitalisez vos processus internes avec une application sur mesure.",
    benefits: ["Gain de productivité", "Interface adaptée", "Sécurité renforcée"],
  },
  {
    icon: "ShoppingBag",
    title: "Marketplace",
    description:
      "Plateforme de mise en relation acheteurs/vendeurs, paiement inclus.",
    benefits: ["Paiement intégré", "Gestion multi-vendeurs", "Scalable"],
  },
  {
    icon: "Users",
    title: "Réseau social",
    description:
      "Application communautaire avec profils, interactions et fil d'actualité.",
    benefits: ["Temps réel", "Modération", "Engagement utilisateurs"],
  },
  {
    icon: "Brain",
    title: "IA générative",
    description:
      "Intégrez des fonctionnalités IA avancées : texte, image, recommandations.",
    benefits: ["Différenciation forte", "Automatisation", "Expérience unique"],
  },
  {
    icon: "Wrench",
    title: "Maintenance & évolution",
    description:
      "Nous assurons la pérennité et l'évolution de votre application dans le temps.",
    benefits: ["Support réactif", "Mises à jour régulières", "Évolutivité"],
  },
];

export const methodSteps: MethodStep[] = [
  { number: "01", title: "Découverte", description: "Nous échangeons sur votre vision, vos objectifs et vos contraintes." },
  { number: "02", title: "Cadrage", description: "Définition précise du périmètre, des fonctionnalités et du planning." },
  { number: "03", title: "UX/UI", description: "Conception des maquettes centrées sur l'expérience utilisateur." },
  { number: "04", title: "Développement", description: "Développement Flutter agile avec points d'étape réguliers." },
  { number: "05", title: "Tests", description: "Tests fonctionnels, de performance et de sécurité approfondis." },
  { number: "06", title: "Publication", description: "Mise en ligne sur l'App Store et le Google Play Store." },
  { number: "07", title: "Accompagnement", description: "Support, maintenance et évolutions post-lancement." },
];

export const projects: Project[] = [
  {
    id: "fittrack",
    title: "FitTrack",
    description:
      "Application de coaching sportif avec suivi personnalisé et recommandations IA.",
    image: "/images/project-fittrack.jpg",
    technologies: ["Flutter", "Firebase", "OpenAI API"],
    results: ["15K+ téléchargements", "4.8★ sur les stores", "MVP livré en 6 semaines"],
    category: "Santé & Sport",
  },
  {
    id: "marketflow",
    title: "MarketFlow",
    description:
      "Marketplace B2B connectant fournisseurs et commerçants locaux.",
    image: "/images/project-marketflow.jpg",
    technologies: ["Flutter", "Node.js", "Stripe"],
    results: ["200+ vendeurs actifs", "+35% de ventes en 3 mois", "Paiement intégré"],
    category: "Marketplace",
  },
  {
    id: "connectify",
    title: "Connectify",
    description:
      "Réseau social professionnel pour freelances avec messagerie temps réel.",
    image: "/images/project-connectify.jpg",
    technologies: ["Flutter", "Supabase", "WebSocket"],
    results: ["10K utilisateurs actifs", "Temps réel fluide", "Modération automatisée"],
    category: "Réseau social",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marie Dubois",
    role: "CEO",
    company: "FitTrack",
    content:
      "Une équipe réactive et experte. Notre application a été livrée dans les délais avec une qualité irréprochable. L'intégration IA a fait toute la différence.",
    avatar: "/images/avatar-1.jpg",
  },
  {
    id: "2",
    name: "Thomas Lefebvre",
    role: "Fondateur",
    company: "MarketFlow",
    content:
      "Un accompagnement de A à Z, du cadrage à la publication. Ils ont su comprendre nos enjeux business et proposer les bonnes solutions techniques.",
    avatar: "/images/avatar-2.jpg",
  },
  {
    id: "3",
    name: "Sarah Martin",
    role: "Product Manager",
    company: "Connectify",
    content:
      "Le meilleur choix que nous ayons fait pour notre app. Code propre, communication transparente, résultat au-delà de nos attentes.",
    avatar: "/images/avatar-3.jpg",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "Combien coûte une application mobile ?",
    answer:
      "Le prix dépend de la complexité du projet. Un MVP démarre généralement autour de 7 000 €, tandis qu'une application complète avec IA peut aller jusqu'à 20 000 € ou plus. Nous établissons toujours un devis détaillé après un premier échange gratuit.",
  },
  {
    question: "Combien de temps faut-il pour développer une application ?",
    answer:
      "Un MVP peut être livré en 4 à 6 semaines. Une application complète prend généralement entre 2 et 4 mois, selon les fonctionnalités et les intégrations souhaitées.",
  },
  {
    question: "Faites-vous aussi le développement backend ?",
    answer:
      "Oui, nous concevons des architectures backend complètes (API, base de données, authentification, paiement) adaptées à vos besoins, en plus du développement mobile Flutter.",
  },
  {
    question: "Travaillez-vous avec des startups ?",
    answer:
      "Absolument. Nous accompagnons aussi bien des startups en phase de validation d'idée que des PME souhaitant digitaliser leurs services. Nous adaptons notre approche à chaque contexte.",
  },
  {
    question: "Peut-on ajouter de l'intelligence artificielle à mon application ?",
    answer:
      "Oui, nous intégrons régulièrement des fonctionnalités IA : chatbots, recommandations personnalisées, génération de contenu, analyse de données. Nous étudions ensemble la pertinence pour votre projet.",
  },
];