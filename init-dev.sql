-- Active: 1764232254939@@localhost@3306@lumya_dev

-- ------------------------------------------------------------
-- utilisateur  (mot de passe = Password123!)
-- ------------------------------------------------------------
INSERT INTO utilisateur (pseudo, email, motDePasseHash, dateNaissance, typeRole, nom, prenom, bio, pdp, dateCreation, suivi) VALUES
('lumya_admin',   'admin@lumya.fr',           '$2b$12$LIov/bsEAOGCqMdMoVMcLOQqBoCLmKBJl0JuLnhHGoRgq4yJkqmEu', '1990-03-15', 'admin',     'Martin',   'Sophie',  'Administratrice de la plateforme Lumya.',              'https://cdn.lumya.fr/pdp/sophie.jpg',   '2023-01-10 09:00:00', 0),
('creativJules',  'jules.fontaine@gmail.com', '$2b$12$LIov/bsEAOGCqMdMoVMcLOQqBoCLmKBJl0JuLnhHGoRgq4yJkqmEu', '1998-07-22', 'createur',  'Fontaine', 'Jules',   'Créateur de contenu bien-être & méditation.',          'https://cdn.lumya.fr/pdp/jules.jpg',    '2023-02-14 11:30:00', 0),
('marieLune',     'marie.lune@hotmail.fr',    '$2b$12$LIov/bsEAOGCqMdMoVMcLOQqBoCLmKBJl0JuLnhHGoRgq4yJkqmEu', '2000-11-05', 'createur',  'Delacour', 'Marie',   'Coach yoga & respiration. 🌙',                         'https://cdn.lumya.fr/pdp/marie.jpg',    '2023-03-01 14:00:00', 0),
('thibaud_zen',   'thibaud.zen@yahoo.fr',     '$2b$12$LIov/bsEAOGCqMdMoVMcLOQqBoCLmKBJl0JuLnhHGoRgq4yJkqmEu', '1995-04-18', 'utilisateur','Renard',  'Thibaud', 'Amateur de podcasts et de pleine conscience.',         'https://cdn.lumya.fr/pdp/thibaud.jpg',  '2023-04-20 08:45:00', 0),
('clara_bright',  'clara.b@protonmail.com',   '$2b$12$LIov/bsEAOGCqMdMoVMcLOQqBoCLmKBJl0JuLnhHGoRgq4yJkqmEu', '2001-09-30', 'utilisateur','Nguyen',  'Clara',   'Étudiante en psychologie, passionnée de mindfulness.', 'https://cdn.lumya.fr/pdp/clara.jpg',    '2023-05-05 16:20:00', 0),
('alexis_flow',   'alexis.flow@gmail.com',    '$2b$12$LIov/bsEAOGCqMdMoVMcLOQqBoCLmKBJl0JuLnhHGoRgq4yJkqmEu', '1993-12-12', 'utilisateur','Dupont',  'Alexis',  'Runner & méditant du dimanche.',                       'https://cdn.lumya.fr/pdp/alexis.jpg',   '2023-06-18 10:10:00', 0),
('lea_wellness',  'lea.w@lumya.fr',           '$2b$12$LIov/bsEAOGCqMdMoVMcLOQqBoCLmKBJl0JuLnhHGoRgq4yJkqmEu', '1988-02-28', 'moderateur','Bernard', 'Léa',     'Modératrice & coach de vie.',                          'https://cdn.lumya.fr/pdp/lea.jpg',      '2023-07-01 09:30:00', 0),
('noa_calm',      'noa.calm@gmail.com',       '$2b$12$LIov/bsEAOGCqMdMoVMcLOQqBoCLmKBJl0JuLnhHGoRgq4yJkqmEu', '2002-06-14', 'utilisateur','Petit',   'Noé',     'Lycéen curieux, découvre la méditation.',              'https://cdn.lumya.fr/pdp/noa.jpg',      '2023-08-22 17:00:00', 0),
('emilie_sol',    'emilie.sol@orange.fr',     '$2b$12$LIov/bsEAOGCqMdMoVMcLOQqBoCLmKBJl0JuLnhHGoRgq4yJkqmEu', '1997-10-03', 'createur',  'Soleil',  'Émilie',  'Thérapeute sonore & guide de relaxation.',             'https://cdn.lumya.fr/pdp/emilie.jpg',   '2023-09-10 12:00:00', 0),
('romain_mind',   'romain.mind@sfr.fr',       '$2b$12$LIov/bsEAOGCqMdMoVMcLOQqBoCLmKBJl0JuLnhHGoRgq4yJkqmEu', '1991-01-25', 'utilisateur','Leblanc', 'Romain',  'Intéressé par la neuroscience et le bien-être.',       'https://cdn.lumya.fr/pdp/romain.jpg',   '2023-10-15 14:50:00', 0);

-- ------------------------------------------------------------
-- theme
-- ------------------------------------------------------------
INSERT INTO theme (libelle) VALUES
('Méditation'),
('Yoga'),
('Respiration'),
('Sommeil'),
('Gestion du stress'),
('Pleine conscience'),
('Nutrition bien-être'),
('Mouvement & sport doux');

-- ------------------------------------------------------------
-- quiz
-- ------------------------------------------------------------
INSERT INTO quiz (titre, description) VALUES
('Quel est ton niveau de stress ?',       'Évalue ton niveau de stress quotidien et reçois des conseils personnalisés.'),
('Connais-tu ta chronobiologie ?',        'Découvre si tu es plutôt du matin ou du soir et adapte tes habitudes.'),
('Test de cohérence cardiaque',           'Explore les bases de la respiration et de la cohérence cardiaque.'),
('Méditation : débutant ou confirmé ?',   'Mesure ton expérience en méditation et trouve les pratiques adaptées.'),
('Sommeil & bien-être',                   'Analyse la qualité de ton sommeil et identifie les pistes d''amélioration.');

-- ------------------------------------------------------------
-- video
-- ------------------------------------------------------------
INSERT INTO video (titre, urlVideo, datePublication, nbVues, statutModeration, tags, idUser) VALUES
('Méditation guidée 10 min – Débutants',        'https://cdn.lumya.fr/videos/med_guided_10.mp4',   '2023-03-10 08:00:00', 15420, 1, '["méditation","débutant","guidé"]',          2),
('Salutation au soleil – Yoga matinal',          'https://cdn.lumya.fr/videos/yoga_soleil.mp4',     '2023-03-25 07:00:00', 9870,  1, '["yoga","matin","énergie"]',                  3),
('Cohérence cardiaque 5 min',                   'https://cdn.lumya.fr/videos/coherence_5min.mp4',  '2023-04-05 12:00:00', 22100, 1, '["respiration","cohérence","stress"]',        2),
('S\'endormir facilement – Relaxation profonde', 'https://cdn.lumya.fr/videos/sommeil_relax.mp4',   '2023-04-18 21:00:00', 18300, 1, '["sommeil","relaxation","nuit"]',             9),
('Body scan – Pleine conscience',               'https://cdn.lumya.fr/videos/body_scan.mp4',       '2023-05-02 18:00:00', 7650,  1, '["pleine conscience","body scan","calme"]',   3),
('Yoga nidra – Repos absolu',                   'https://cdn.lumya.fr/videos/yoga_nidra.mp4',      '2023-05-20 22:00:00', 11200, 1, '["yoga","nidra","sommeil"]',                  9),
('Gestion du stress au quotidien',              'https://cdn.lumya.fr/videos/stress_quotidien.mp4','2023-06-08 10:00:00', 6340,  1, '["stress","gestion","quotidien"]',             2),
('Alimentation intuitive – Introduction',       'https://cdn.lumya.fr/videos/alim_intuitive.mp4',  '2023-06-22 14:00:00', 4210,  1, '["nutrition","alimentation","intuition"]',    9),
('Marche méditative en forêt',                  'https://cdn.lumya.fr/videos/marche_foret.mp4',    '2023-07-10 09:00:00', 3990,  1, '["marche","plein air","pleine conscience"]',  3),
('Respiration 4-7-8 pour l\'anxiété',           'https://cdn.lumya.fr/videos/resp_478.mp4',        '2023-07-28 16:00:00', 13600, 1, '["respiration","anxiété","478"]',             2),
('Étirements doux avant le coucher',            'https://cdn.lumya.fr/videos/etirements_soir.mp4', '2023-08-14 20:30:00', 8760,  1, '["étirements","soir","souplesse"]',           3),
('Visualisation positive – Confiance en soi',   'https://cdn.lumya.fr/videos/visualisation.mp4',   '2023-09-01 11:00:00', 5120,  1, '["visualisation","confiance","positif"]',     9);

-- ------------------------------------------------------------
-- traiter  (association thème <-> vidéo)
-- ------------------------------------------------------------
INSERT INTO traiter (idTheme, idVideo) VALUES
(1, 1), (6, 1),
(2, 2), (8, 2),
(3, 3), (5, 3),
(4, 4), (6, 4),
(6, 5), (1, 5),
(2, 6), (4, 6),
(5, 7), (6, 7),
(7, 8),
(6, 9), (8, 9),
(3, 10), (5, 10),
(2, 11), (4, 11),
(1, 12), (6, 12);

-- ------------------------------------------------------------
-- abonnement
-- ------------------------------------------------------------
INSERT INTO abonnement (typeAbo, dateDebut, dateFin, statutPaiement, idUser) VALUES
(1, '2023-02-15 00:00:00', '2024-02-15 00:00:00', 1, 2),
(2, '2023-03-01 00:00:00', '2026-03-01 00:00:00', 1, 3),
(1, '2023-05-01 00:00:00', '2024-05-01 00:00:00', 1, 4),
(1, '2023-06-10 00:00:00', '2024-06-10 00:00:00', 1, 5),
(0, '2023-07-01 00:00:00', NULL,                  1, 6),
(2, '2023-07-15 00:00:00', '2026-07-15 00:00:00', 1, 9),
(1, '2023-09-20 00:00:00', '2024-09-20 00:00:00', 0, 8),
(1, '2023-10-01 00:00:00', '2024-10-01 00:00:00', 1, 10);

-- ------------------------------------------------------------
-- commentaire
-- ------------------------------------------------------------
INSERT INTO commentaire (contenuCommentaire, datePost, idVideo, idUser) VALUES
('Vraiment top pour commencer la journée !',                          '2023-03-11 08:45:00', 1, 4),
('La voix est super apaisante, merci beaucoup.',                      '2023-03-12 20:10:00', 1, 5),
('Je fais cette méditation chaque matin depuis 2 semaines. ❤️',      '2023-04-01 07:30:00', 1, 6),
('Excellent enchaînement, j\'adore la séquence finale.',              '2023-03-27 09:00:00', 2, 8),
('Parfait pour réduire le stress au bureau !',                        '2023-04-06 13:15:00', 3, 4),
('J\'ai réussi à m\'endormir en moins de 20 min grâce à cette vidéo.','2023-04-20 22:30:00', 4, 10),
('Le body scan change vraiment la façon de percevoir son corps.',     '2023-05-04 19:00:00', 5, 6),
('Yoga nidra = la meilleure invention de l\'humanité 😂',             '2023-05-22 23:15:00', 6, 5),
('Super conseils pratiques, facile à appliquer.',                     '2023-06-10 11:00:00', 7, 8),
('La marche méditative est sous-estimée, merci !',                   '2023-07-12 10:30:00', 9, 10),
('Le 4-7-8 m\'a sauvé lors d\'une réunion stressante 😅',            '2023-07-30 17:20:00', 10, 4),
('Hâte d\'avoir plus de vidéos sur la nutrition !',                   '2023-06-25 15:45:00', 8, 5),
('Ces étirements avant le coucher sont devenus mon rituel du soir.',  '2023-08-16 21:00:00', 11, 6),
('La visualisation m\'aide vraiment avant mes présentations.',        '2023-09-03 12:10:00', 12, 8);

-- ------------------------------------------------------------
-- likes  (sur vidéos et commentaires)
-- ------------------------------------------------------------
-- Likes sur vidéos (idCommentaire = NULL)
INSERT INTO likes (idUser, idVideo, idCommentaire) VALUES
(4,  1,  NULL),
(5,  1,  NULL),
(6,  1,  NULL),
(8,  2,  NULL),
(10, 2,  NULL),
(4,  3,  NULL),
(6,  3,  NULL),
(10, 4,  NULL),
(8,  4,  NULL),
(5,  5,  NULL),
(4,  6,  NULL),
(6,  7,  NULL),
(10, 9,  NULL),
(5,  10, NULL),
(8,  12, NULL);

-- Likes sur commentaires (idVideo = NULL)
INSERT INTO likes (idUser, idVideo, idCommentaire) VALUES
(5,  NULL, 1),
(6,  NULL, 2),
(4,  NULL, 3),
(10, NULL, 5),
(8,  NULL, 6),
(5,  NULL, 11);

-- ------------------------------------------------------------
-- humeur  (humeur de 1=très mal à 5=très bien)
-- ------------------------------------------------------------
INSERT INTO humeur (dateSuivi, humeurs, idUser) VALUES
('2023-10-01 20:00:00', 3, 4),
('2023-10-02 20:00:00', 4, 4),
('2023-10-03 20:00:00', 4, 4),
('2023-10-04 20:00:00', 5, 4),
('2023-10-05 20:00:00', 3, 4),
('2023-10-01 21:00:00', 2, 5),
('2023-10-02 21:00:00', 3, 5),
('2023-10-03 21:00:00', 3, 5),
('2023-10-04 21:00:00', 4, 5),
('2023-10-05 21:00:00', 5, 5),
('2023-10-01 19:30:00', 4, 6),
('2023-10-02 19:30:00', 4, 6),
('2023-10-03 19:30:00', 5, 6),
('2023-10-01 22:00:00', 3, 8),
('2023-10-02 22:00:00', 2, 8),
('2023-10-03 22:00:00', 3, 8),
('2023-10-01 20:30:00', 5, 10),
('2023-10-02 20:30:00', 4, 10),
('2023-10-03 20:30:00', 5, 10);

-- ------------------------------------------------------------
-- passer  (résultats de quiz)
-- ------------------------------------------------------------
INSERT INTO passer (idUser, idQuiz, scoreObtenu, datePassage, recommandation) VALUES
(4,  1, 72, '2023-10-05', 'Ton niveau de stress est modéré. Essaie la cohérence cardiaque quotidienne.'),
(4,  3, 85, '2023-10-06', 'Tu maîtrises bien les bases de la respiration, passe aux exercices avancés !'),
(5,  1, 45, '2023-10-03', 'Stress faible, continue tes bonnes habitudes.'),
(5,  4, 60, '2023-10-04', 'Tu débutes en méditation. Commence par 5 min par jour.'),
(6,  2, 78, '2023-10-07', 'Tu es plutôt du soir. Évite les écrans après 22h.'),
(6,  5, 55, '2023-10-08', 'Ton sommeil est perturbé. Essaie la relaxation guidée avant de te coucher.'),
(8,  1, 88, '2023-10-02', 'Stress élevé détecté. Consulte notre programme anti-stress en 7 jours.'),
(8,  4, 35, '2023-10-03', 'Grande débutante en méditation. Nos vidéos guidées sont faites pour toi !'),
(10, 3, 90, '2023-10-09', 'Excellent ! Tu peux explorer la respiration holotropique.'),
(10, 5, 70, '2023-10-10', 'Sommeil globalement bon, quelques ajustements possibles sur ta routine du soir.');