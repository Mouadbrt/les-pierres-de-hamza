# Les Pierres de Hamza — Site premium React

Site vitrine complet pour **Les Pierres de Hamza**, spécialiste de la pierre naturelle de Taza au Maroc.

## Stack

- React + Vite
- Tailwind CSS
- React Router DOM
- Framer Motion
- React Icons

## Installation

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
npm run preview
```

## Configuration contact / WhatsApp

Modifiez une seule fois :

```text
src/data/businessInfo.js
```

Renseignez `phone`, `whatsapp`, `email`, `instagram` et `facebook`. Ces valeurs sont réutilisées dans tout le site.

## Produits

Les produits, descriptions, applications et galeries sont centralisés dans :

```text
src/data/stones.js
```

Pour remplacer une image temporaire, changez simplement son URL dans le tableau `images` du produit correspondant.

## Projets

Les réalisations sont centralisées dans :

```text
src/data/projects.js
```

## Déploiement Vercel

Le fichier `vercel.json` inclus gère les routes React Router en production. Importez le projet dans Vercel, laissez la commande de build `npm run build` et le dossier de sortie `dist`.
