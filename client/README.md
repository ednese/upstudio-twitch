Readme a compléter

# Projectoi Manager (v2)

## Prérequis

Pour faire fonctionner le projet, il vous faudra :
- Node.JS (Une version récente de préférence)
- NPM / Yarn (Nous n'utilisons pas yarn dans ce projet mais libre à vous de l'utiliser)


## Installation

Clonez le projet dans le dossier de votre choix puis installez les modules du projet :
```bash
git clone https://github.com/Antoine-Bergerault/Projectoi-managerv2.git
cd Projectoi-managerv2
npm install
```

Une fois l'installation des modules effectuée, vous pouvez maintenant lancer le manager :
```bash
npm run react-start
```

Celui-ci sera lancé sur l'url `localhost:3000`.

## Utilisation

### Les devs intégrateurs

A compléter

[Figma](https://www.figma.com/file/8gHNJoZYciPjlnl8xfHAnZ/Projectoi-Espace-client)

Inserer lien vers doc composants / charte graphique

### Les devs fronts

A compléter

[Api postman](https://documenter.getpostman.com/view/7000471/SzYdRvjS?version=latest)

### Les devs backs

A compléter


Le framework est un dérivé du framework utilisé originellement.
Nous utilisons cette version : [Pickle API](https://github.com/Antoine-Bergerault/Pickle-api-framework)

[Documentation framework classique](https://antoine-bergerault.github.io/pickle-doc/index.html)

## Les bonnes pratiques

### L'ajout d'une nouvelle fonctionnalité

Le développement d'une nouvelle fonctionnalité / d'un ajout quelconque au manager doit suivre le process suivant :
Dans un premier temps, création d'une branche dédiée à la nouvelle fonctionnalité
```bash
git checkout master
git checkout -b nom_de_ma_branche
git push --set-upstream origin nom_de_ma_branche
```

N'hésitez pas par ailleurs à mettre un lien vers votre branche github sous la carte Trello qui vous est assignée pour que les autres membres de la team puissent voir votre avancée / intervenir sur votre branche pour venir en aide.

Vous pouvez maintenant développer la nouvelle fonctionnalité sur cette même branche.
Une fois terminée, ouvrez une pull request sur github / demande de merge de votre branche vers la branche `master` ou `dev` (a voir avec @Antoine), une session de review sera alors ouvert pour que les différents développeurs du projet donnent des retours sur votre travail et des éventuelles pistes d'améliorations permettant de garder un projet propre et fonctionnel.

Lors de l'ajout d'une nouvelle page, essayez de réutiliser au maximum les composants déjà existant dans notre librairie interne (`src/pages/components`), une documentation à été mise en place pour faciliter l'usage de ceux-ci par @Antoine

[Documentation](https://zeroheight.com/758f636cc)

Dans le cas ou le composant que vous cherchez à utiliser n'existe pas, si celui-ci risque d'être réutilisé n'hésitez pas à en créer un nouveau par initiative et par la suite contacter Antoine pour l'ajouter à la doc.
