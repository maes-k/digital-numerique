# Digital Numérique

Site vitrine en HTML, CSS et JavaScript pur — version du 24 novembre 2026.

## Utilisation locale

Décompressez le ZIP et ouvrez le dossier dans Visual Studio Code.
Ouvrez index.html avec Live Server, ou directement dans un navigateur.
Aucune installation npm, aucun serveur applicatif et aucune base de données ne sont nécessaires.

## Mise sur GitHub

Placez les fichiers extraits dans votre dépôt : index.html doit se trouver à la racine, aux côtés des fichiers CSS, JavaScript et du dossier assets.
Ne déposez pas seulement le ZIP : son contenu doit être extrait dans le dépôt.
Le fichier .nojekyll est fourni pour un hébergement statique sur GitHub Pages.

Si votre dépôt Git est déjà configuré, depuis le dossier du projet :

```bash
git add .
git commit -m "Ajout du site Digital Numerique"
git push
```

## Pages

- index.html : Accueil
- services.html : Nos services
- objets-personnalises.html : Objets personnalisés
- realisations.html : Nos créations
- a-propos.html : L’agence
- contact.html : Contact et devis
- informations.html : Informations et confidentialité

## Demandes de devis

Les boutons conduisent directement à contact.html#contact-form.
Les liens de produits et de prestations conservent leur sélection.
Le formulaire prépare un message pour WhatsApp au +225 05 06 08 32 39.
Le visiteur doit appuyer sur Envoyer dans WhatsApp pour transmettre sa demande.
Le formulaire ne transmet pas de demande à une base de données du site.
Le fichier devis-whatsapp.js contient le numéro destinataire.
Un brouillon temporaire est conservé dans l’onglet du navigateur avec sessionStorage.

## Images et polices

Les images optimisées et leurs versions mobiles sont incluses dans assets.
Les illustrations ne constituent pas des références clients.
Les polices sont chargées depuis Google Fonts ; des polices de remplacement sont prévues si la connexion est indisponible.

## Contenu de l’archive

Version statique autonome, sans fichiers de déploiement propres à l’aperçu ChatGPT, sans identifiants, sans historique Git et sans base de données.
