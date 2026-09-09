
# Wordle Clone

Clone de Wordle développé avec React, TypeScript et Vite. Le joueur compose un mot de
5 lettres, le valide en cliquant sur `Entrée` ou en appuyant sur la touche `Enter`,
puis les cases sont colorees selon la position des lettres dans le mot cible.

## Prerequis

- Node.js et npm
- Le backend du projet lance sur `http://localhost:3000`
- Une route `GET /api/word?lang=fr` qui renvoie un objet contenant un mot de 5 lettres

Exemple de réponse attendue :

```json
{
  "word": "arbre",
  "language": "fr",
  "date": "2026-09-09"
}
```

Le frontend envoie egalement l'en-tete `x-api-key: secret_api_key`. Le backend doit
autoriser les requetes provenant du serveur Vite, generalement `http://localhost:5173`.

## Installation

```bash
npm install
```

## Lancement en developpement

Demarrer d'abord le backend, puis lancer le frontend :

```bash
npm run dev
```

Vite affiche l'URL locale dans le terminal, generalement `http://localhost:5173`.

## Scripts disponibles

| Commande | Description |
| --- | --- |
| `npm run dev` | Lance le serveur de developpement Vite avec rechargement automatique |
| `npm run build` | Verifie TypeScript et genere le build de production |
| `npm run lint` | Analyse le code avec Oxlint |
| `npm run preview` | Sert localement le build de production |

## Architecture

```text
src/
├── App.tsx                  # Etat de la partie et orchestration generale
├── Row.tsx                  # Ligne d'essai et calcul des couleurs
├── Case.tsx                 # Case individuelle de la grille
├── Clavier.tsx              # Clavier AZERTY et boutons d'action
├── Touche.tsx               # Touche reutilisable du clavier
├── Consigne.tsx              # Modal des regles du jeu
├── Victoire.tsx              # Modal de victoire
├── *.module.css              # Styles scopes des composants
├── index.css                 # Styles globaux
└── main.tsx                  # Point d'entree React
```

### Flux principal

1. `App` recupere le mot cible aupres du backend au montage du composant.
2. Les lettres peuvent venir du clavier visuel ou du clavier physique.
3. `App` conserve le mot en cours et les essais valides dans son etat React.
4. Une validation n'est acceptee que si le mot contient 5 lettres et qu'il reste
  des essais.
5. `Row` compare chaque essai au mot cible et fournit une couleur a `Case` :
  `green` pour une lettre bien placee, `orange` pour une lettre presente ailleurs,
  `red` pour une lettre absente et `grey` pour une case vide ou non validee.

## Depannage

Si les essais sont acceptes mais restent gris, verifier que le backend repond bien
sur `http://localhost:3000/api/word?lang=fr`. Sans mot cible, l'application ne peut
pas comparer les lettres.

Si la validation ne fait rien, verifier que le mot en cours contient exactement
5 lettres et que le nombre maximal de 6 essais n'est pas atteint.
