# Authentification et rôles des membres FCE

Le site public reste accessible sans compte. Les comptes internes sont créés uniquement par un administrateur à partir d’une liste fournie par le club. Il n’existe aucune inscription libre.

## Rôles et règles

| Rôle | Lecture publique | Lecture interne | Son ou ses pôles | Autres pôles | Membres et droits | Suppression définitive |
|---|---:|---:|---:|---:|---:|---:|
| Visiteur | Oui | Non | Non | Non | Non | Non |
| Responsable de pôle | Oui | Oui | Créer, modifier, publier, placer à la corbeille | Lecture interne | Non | Non |
| Administrateur | Oui | Oui | Contrôle total | Contrôle total | Oui | Oui |

La publication fait partie du rôle de responsable : aucun accord préalable de l’administrateur n’est requis. Un responsable ne peut publier que dans le ou les pôles qui lui sont attribués. Une personne peut être responsable de plusieurs pôles.

## Parcours recommandé

1. L’administrateur importe un CSV contenant `nom`, `email`, `role` et `poles`.
2. Le serveur normalise les e-mails, refuse les doublons et valide les rôles et pôles.
3. Un compte inactif est créé avec un jeton d’invitation aléatoire, à usage unique, valable 48 heures.
4. Le membre reçoit un lien d’activation. Aucun mot de passe provisoire n’est envoyé en clair.
5. Le membre choisit son mot de passe et le compte devient actif.
6. Toutes les sessions restent révocables par l’administrateur.

Si un mot de passe provisoire est imposé, il doit être à usage unique, expirer sous 48 heures et forcer un changement dès la première connexion.

## Données minimales

- `users` : identité, e-mail unique normalisé, état actif et dernière connexion ;
- `credentials` : condensat du mot de passe et date de changement ;
- `user_pole_roles` : utilisateur, rôle et pôle ;
- `invitations` : condensat du jeton, expiration, utilisation et auteur ;
- `sessions` : condensat du jeton, expiration et révocation ;
- `audit_log` : connexions, invitations, droits, archivages, publications et suppressions.

Les jetons et mots de passe ne sont jamais conservés en clair. Les cookies doivent être `HttpOnly`, `Secure` et `SameSite=Lax`.

La fonction `canAccess` de `lib/access-control.ts` est la source de vérité côté serveur. Masquer un bouton n’est jamais considéré comme une protection.

## Format attendu

```csv
nom,email,role,poles
Camille Martin,camille@example.fr,admin,
Alex Durand,alex@example.fr,pole_manager,sportif
Nora Meyer,nora@example.fr,pole_manager,"animations;buvette"
```

Les visiteurs ne sont pas importés : ils utilisent le lien public.

## Choix technique restant

Le VPS Hostinger cible PostgreSQL, tandis que le déploiement Sites de repli utilise D1. L’identité doit être branchée soit sur un service compatible avec les deux, soit sur PostgreSQL en assumant que l’espace privé ne sera actif que sur le VPS. Tant que ce choix et les secrets ne sont pas validés, l’écran de connexion reste volontairement désactivé.
