# 📝 Underreacted — Blog Project in React.js

Bienvenue dans **Underreacted**, un petit blog éducatif codé en **React.js**, destiné à l’apprentissage des concepts fondamentaux de React (JSX, composants, hooks, props, state, etc.).

## 🚀 Fonctionnalités

- ✅ Affichage d’une liste d’articles (title, preview, date, durée)
- ✅ Affichage du contenu complet à la demande ("View article")
- ✅ Masquer le contenu avec le bouton "Hide article"
- ✅ Bouton **"J’aime / Je n’aime plus"** avec ❤️ 🤍 💔
- ✅ Persistance du j’aime avec **`localStorage`**
- ✅ Barre de recherche pour **filtrer les articles par titre**

## 🛠️ Technologies utilisées

- React.js (avec JSX)
- Hooks : `useState`, `useEffect`
- CSS (personnalisé)
- `localStorage` pour persister les interactions utilisateur

## 📁 Structure du projet

```bash
src/
├── assets/
│   └── logo.png
├── components/
│   ├── App.jsx
│   ├── Header.jsx
│   ├── About.jsx
│   ├── ArticleList.jsx
│   ├── Article.jsx
│   └── DisplayMinutes.js
├── data/
│   └── blog.js
└── index.css

# Installer les dépendances
npm install

# Démarrer le projet
npm run dev


👨‍💻 Auteur
Projet réalisé par Joseph Tancrede Fils Charles dans le cadre de l'apprentissage de React.js.
