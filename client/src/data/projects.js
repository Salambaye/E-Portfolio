export const projects = [
  {
    title: 'Sneaker Collection – Web Application',
    description:
      "Application web dédiée à la gestion et à la visualisation d’une collection de sneakers, avec une interface simple et intuitive.",
    tech: ['C#', 'ASP.NET Core MVC', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Affichage et gestion d’une collection de sneakers',
      'Interface utilisateur claire et ergonomique',
      'Logique métier côté backend en C#',
      'Séparation frontend / backend'
    ],
    // period: 'Septembre 2025',
    link: 'https://github.com/Salambaye/SneakerCollection'
  },

  {
    title: 'Système de gestion de livraison',
    description: 'Simulateur de livraison multi-transport avec optimisation en temps réel utilisant des goroutines et channels pour la gestion concurrente.',
    tech: ['Go', 'Gin', 'Goroutines', 'Channels', 'JSON', 'GitHub'],
    features: [
      'Transport multimodal (camion, drone, bateau)',
      'Optimisation en temps réel',
      'Architecture concurrente avec goroutines',
      'Gestion des livraisons avec channels'
    ],
    // period: 'Mars 2025',
    link: null
  },

  {
    title: 'Tukki Teranga – Restaurant',
    description:
      "Application web vitrine pour un restaurant, permettant de présenter le concept, le menu et les informations pratiques à travers une interface moderne et responsive.",
    tech: ['React', 'JavaScript', 'HTML', 'CSS', 'Vercel'],
    features: [
      'Présentation du restaurant et de son concept',
      'Affichage du menu et des plats',
      'Interface responsive adaptée mobile et desktop',
      'Navigation fluide et expérience utilisateur soignée',
      // 'Déploiement en ligne sur Vercel'
    ],
    // period: 'Novembre 2024',
    link: 'https://tukki-teranga.vercel.app/'
  },

    {
    title: 'API de gestion de logements',
    description: 'Conception et développement d\'une API RESTful complète avec authentification et autorisation sécurisée pour la gestion de logements et utilisateurs.',
    tech: ['Python', 'Django Rest Framework', 'Angular', 'SQLite', 'Postman'],
    features: [
      'CRUD complet pour les logements',
      'Authentification JWT sécurisée',
      'Frontend Angular avec échanges JSON',
      'Documentation API complète'
    ],
    // period: 'Octobre 2023',
    link: null
  }
];
