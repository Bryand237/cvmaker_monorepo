# CV Maker Monorepo

Générateur de CV en ligne : une application permettant de créer, personnaliser et exporter des CV professionnels facilement.

## ✨ Fonctionnalités

- Création et édition de CV via une interface frontend
- API backend pour la gestion des données de CV
- Bibliothèques et outils partagés réutilisables entre les applications

## 🛠️ Stack technique

- **Monorepo** géré avec [Turborepo](https://turbo.build/) et **pnpm workspaces**
- **TypeScript** sur l'ensemble du projet

## 📁 Structure du projet

```
cvmaker_monorepo/
├── apps/               # Frontend et backend
├── packages/
│   └── utils/          # Fonctions et outils partagés
├── package.json
├── pnpm-workspace.yaml
├── tsconfig.base.json
└── turbo.json
```

## 🚀 Installation

Prérequis : Node.js ≥ 18 et [pnpm](https://pnpm.io/).

```bash
git clone https://github.com/Bryand237/cvmaker_monorepo.git
cd cvmaker_monorepo
pnpm install
```

## ▶️ Lancer le projet en développement

```bash
pnpm dev
```

## 🗺️ Roadmap

- [ ] Modèles de CV supplémentaires
- [ ] Export PDF et Word
- [ ] Sauvegarde et partage de CV en ligne

## 👤 Auteur

Djounkam Pandong Géraud Bryand — [@Bryand237](https://github.com/Bryand237)
