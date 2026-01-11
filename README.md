# Portfolio - Salamata Nourou MBAYE

Portfolio professionnel moderne créé avec React, Vite et Tailwind CSS.

## 🚀 Démarrage rapide

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation

1. **Clonez le repository**
```bash
git clone https://github.com/Salambaye/portfolio.git
cd portfolio
```

2. **Installez les dépendances**
```bash
npm install
```

3. **Lancez le serveur de développement**
```bash
npm run dev
```

4. **Ouvrez votre navigateur**
```
http://localhost:5173
```

## 📦 Build pour la production

```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`.

## 🌐 Déploiement

### Sur Vercel (Recommandé)

1. Installez Vercel CLI
```bash
npm i -g vercel
```

2. Déployez
```bash
vercel
```

### Sur Netlify

1. Connectez votre repository GitHub à Netlify
2. Configurez les paramètres de build :
   - Build command: `npm run build`
   - Publish directory: `dist`

## 📁 Structure du projet

```
portfolio/
├── src/
│   ├── components/          # Composants React
│   │   ├── Navigation.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── EducationSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── data/               # Données du portfolio
│   │   ├── experiences.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── education.js
│   ├── App.jsx            # Composant principal
│   └── main.jsx           # Point d'entrée
├── public/                # Fichiers statiques
├── package.json
└── README.md
```

## ✏️ Personnalisation

### Modifier vos informations

1. **Données personnelles** : Éditez les fichiers dans `src/data/`
   - `experiences.js` - Vos expériences professionnelles
   - `projects.js` - Vos projets
   - `skills.js` - Vos compétences
   - `education.js` - Votre formation

2. **Informations de contact** : Modifiez `src/components/ContactSection.jsx`

3. **Couleurs et styles** : Les couleurs principales sont dans les classes Tailwind (indigo/blue)

## 🛠️ Technologies utilisées

- ⚛️ React 18
- ⚡ Vite
- 💨 Tailwind CSS
- 🎨 Lucide React (icônes)

## 📝 Licence

MIT License - Libre d'utilisation

## 👤 Contact

**Salamata Nourou MBAYE**
- Email: msalamatanourou@gmail.com
- GitHub: [@Salambaye](https://github.com/Salambaye)
<!-- - Portfolio: [mon-portfolio-2sfc.vercel.app](https://mon-portfolio-2sfc.vercel.app) -->

