# Déploiement FCE sur Hostinger KVM 2

Cette cible exécute le site FCE dans un conteneur indépendant de n8n. Le site
écoute sur le port interne `3000`, avec une limite initiale de 1 Go de mémoire
et 0,75 vCPU afin de préserver les ressources du VPS.

Le déploiement Sites actuel reste inchangé et sert de solution de repli.

## Cible Hostinger confirmée

Informations communiquées par le panneau Hostinger le 22 août 2026 :

- formule : VPS KVM 2 ;
- serveur : `srv1298719.hstgr.cloud` ;
- échéance du VPS : 26 janvier 2027 ;
- domaine principal FCE : `animations-fce.fr` ;
- application du marché aux puces conservée sur `animations-fce.online` ;
- échéance du domaine : 16 février 2027 ;
- capacité visée : environ 500 membres, avec une fréquentation simultanée modérée.

Cette capacité est suffisante pour lancer le site public puis une application de
gestion d'activités, d'inscriptions et de calendriers. Le dimensionnement dépend
surtout des connexions simultanées, des traitements n8n, des fichiers envoyés et
du volume de médias, et non du seul nombre de membres enregistrés.

## Architecture retenue

- un seul site FCE ;
- quatre pôles organisés comme des modules du même site ;
- un conteneur distinct pour FCE ;
- n8n reste dans son propre projet Docker ;
- Traefik assure le domaine et le certificat HTTPS sans conflit de ports ;
- une base de données et un stockage de médias pourront être ajoutés plus tard.

Il n'est pas utile de créer quatre sites maintenant. Si un pôle devient
autonome, son module pourra ensuite être déplacé vers un sous-domaine sans
changer l'hébergement des autres pôles.

## 1. Test local sur le VPS

Depuis le gestionnaire Docker Hostinger, l'option **Composer à partir d'une
URL** peut utiliser directement ce fichier public :

```text
https://raw.githubusercontent.com/azizensisheim-del/fce-site/main/deploy/compose.hostinger-url.yaml
```

Choisir `fce-site` comme nom de projet. Cette cible utilise une image Node
standard, récupère le code depuis GitHub dans un volume Docker dédié, construit
le site au démarrage et le publie temporairement sur le port `3001`. Elle sert
au premier test avant la création de l'image de production, le raccordement de
Traefik et celui du domaine.

Pour une installation par terminal, depuis la racine du projet `site-fce` :

```bash
cp deploy/kvm2.example .env.kvm2
docker compose --env-file .env.kvm2 -f deploy/compose.yaml up -d --build
curl http://127.0.0.1:3001/api/health
```

La réponse attendue est :

```json
{"status":"ok","service":"fce-site"}
```

Pour consulter les journaux :

```bash
docker compose --env-file .env.kvm2 -f deploy/compose.yaml logs --tail=100 site
```

## 2. Raccordement au domaine avec Traefik Hostinger

Cette étape suppose que le projet Traefik de Hostinger est déjà installé et que
le réseau Docker externe `traefik-proxy` existe.

1. Faire pointer les enregistrements DNS web de `animations-fce.fr` et `www` vers l'adresse IP du VPS, sans modifier les enregistrements MX/TXT de messagerie.
2. Vérifier `FCE_HOST` dans `.env.kvm2`.
3. Lancer le site avec la surcouche Traefik :

```bash
docker compose --env-file .env.kvm2 \
  -f deploy/compose.yaml \
  -f deploy/compose.hostinger-traefik.yaml \
  up -d --build
```

Traefik route alors `animations-fce.fr` vers le conteneur FCE, demande le
certificat Let's Encrypt et redirige `www.animations-fce.fr` vers le domaine
principal. Le port 3001 reste lié à `127.0.0.1` et n'est pas exposé à Internet.

## 3. Mise à jour du site

Après récupération d'une nouvelle version du projet :

```bash
docker compose --env-file .env.kvm2 \
  -f deploy/compose.yaml \
  -f deploy/compose.hostinger-traefik.yaml \
  up -d --build
```

## Contrôles utiles

```bash
docker compose --env-file .env.kvm2 -f deploy/compose.yaml ps
docker stats --no-stream
df -h
```

Une montée vers KVM 4 ne devient pertinente que si la mémoire reste durablement
au-dessus de 70 %, si le VPS utilise régulièrement le swap, ou si les exécutions
n8n ralentissent pendant les pointes du site. Il faut aussi surveiller l'espace
disque si les membres envoient des photos ou des documents ; les vidéos et les
archives volumineuses devront de préférence utiliser un stockage d'objets séparé.
