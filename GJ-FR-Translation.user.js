// ==UserScript==
// @name            Game Jolt French Translation
// @name:fr         Traduction française Game Jolt
// @author          Stormwindsky (Original par RushanM)
// @contributionURL https://boosty.to/rushanm
// @description     Résumé : Ce script est un fork créé par Stormwindsky pour fournir une version traduite en français de France. L'auteur original est RushanM (version russe).
// @description:fr  Résumé : Ce script est un fork créé par Stormwindsky pour fournir une version traduite en français de France. L'auteur original est RushanM (version russe).
// @downloadURL     https://github.com/Stormwindsky/Game-Jolt-French-Localization/raw/main/GameJolt-French-Translation.user.js
// @grant           none
// @homepageURL     https://github.com/Stormwindsky/Game-Jolt-French-Localization
// @icon            https://s.gjcdn.net/img/favicon.png
// @license         MIT
// @match           https://*.gamejolt.com/*
// @match           https://gamejolt.com/*
// @namespace       gjfrtranslation
// @supportURL      https://github.com/Stormwindsky/Game-Jolt-French-Localization/issues
// @updateURL       https://github.com/Stormwindsky/Game-Jolt-French-Localization/raw/main/GameJolt-French-Translation.user.js
// @version         1-B7-FR
// @author_url      https://github.com/Stormwindsky
// ==/UserScript==

(function() {
    'use strict';

    // Chargement des polices
    const fontLinks = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Sans+Condensed:wght@600&display=swap'
    ];

    fontLinks.forEach(href => {
        const link = document.createElement('link');
        link.href = href;
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    });

    // Application des styles CSS
    const style = document.createElement('style');
    style.textContent = `
        body {
            font-family: 'Inter', sans-serif;
        }
        .use-fira {
            font-family: 'Fira Sans Condensed', sans-serif !important;
        }
        h2.-content-row-header small {
            font-family: 'Inter', sans-serif;
        }
    `;
    document.head.appendChild(style);

    // Tableau des remplacements
    const replacements = [
        {
            selector: 'div.-header-lead-text.-main-header-text',
            replacements: [{
                    oldText: 'Become a Game Jolt Creator',
                    newText: 'DEVENEZ UN CRÉATEUR GAME JOLT'
                },
                {
                    oldText: '',
                    newText: '',
                    addClass: 'use-fira'
                }
            ]
        },
        {
            selector: 'div.text-center > div',
            replacements: [
                { oldText: '', newText: '', addClass: 'use-fira' },
                { oldText: 'Be the FIRST one to like a post', newText: 'SOYEZ LE PREMIER À LIKER UN POST' },
                { oldText: 'Cast your vote on a poll', newText: 'VOTEZ À UN SONDAGE' },
                { oldText: 'Like 5 comments', newText: 'LIKEZ 5 COMMENTAIRES' },
                { oldText: 'DAILY QUEST', newText: 'QUÊTE QUOTIDIENNE' },
                { oldText: 'WEEKLY QUEST', newText: 'QUÊTE HEBDOMADAIRE' },
                { oldText: 'WORLD EVENT', newText: 'ÉVÉNEMENT MONDIAL' },
                { oldText: 'Like a post with 100 or more likes on it', newText: 'LIKEZ UN POST AYANT DÉJÀ 100 LIKES OU PLUS' },
                { oldText: 'Gift a sticker pack', newText: 'OFFREZ UN PACK DE STICKERS' },
                { oldText: 'React to 5 different comments', newText: 'RÉAGISSEZ À 5 COMMENTAIRES DIFFÉRENTS' },
                { oldText: 'Complete 10 daily quests', newText: 'TERMINEZ 10 QUÊTES QUOTIDIENNES' },
                { oldText: 'A Transmission From Beyond the Stars', newText: 'UNE TRANSMISSION VENUE DES ÉTOILES' },
                { oldText: 'June Login Streak', newText: 'SÉRIE DE CONNEXIONS DE JUIN' },
                { oldText: 'Jule Login Streak', newText: 'SÉRIE DE CONNEXIONS DE JUILLET' },
                { oldText: 'August Login Streak', newText: 'SÉRIE DE CONNEXIONS D\'AOÛT' },
                { oldText: 'September Login Streak', newText: 'SÉRIE DE CONNEXIONS DE SEPTEMBRE' },
                { oldText: 'Summon the Power of Lightning', newText: 'INVOQUEZ LE POUVOIR DE LA FOUDRE' }
            ]
        },
        {
            selector: 'div.sticker-charge-tooltip > p > span, div.sticker-charge-tooltip > div > span',
            replacements: [
                { oldText: 'Complete daily quests to fill your charge orbs. Each day you miss a daily quest, your charge goes down.', newText: 'Terminez des quêtes quotidiennes pour remplir vos orbes de charge. Chaque jour sans quête terminée, votre charge diminue.' },
                { oldText: 'Once all your charge orbs are full, you can support your favorite Game Jolt Creators by giving them a charged sticker! Every charged sticker uses 2 charge orbs and puts 💰💰💰 in their IRL pockets.', newText: 'Une fois vos orbes pleins, soutenez vos créateurs préférés avec un sticker chargé ! Chaque sticker utilise 2 orbes et met 💰💰💰 dans leurs poches réelles.' }
            ]
        },
        {
            selector: 'h4.-charge-text > span:first-child',
            replacements: [{ oldText: 'Charge', newText: 'Charge' }]
        },
        {
            selector: 'section.section > div',
            replacements: [{ oldText: 'Objectives', newText: 'Objectifs' }]
        },
        {
            selector: 'div.-details',
            replacements: [{ oldText: 'Like the post linked in the quest description', newText: 'Likez le post lié dans la description de la quête' }]
        },
        {
            selector: 'h4',
            replacements: [{ oldText: 'Daily Quests', newText: 'Quêtes quotidiennes' }]
        },
        {
            selector: 'div._subheading',
            replacements: [
                { oldText: 'Daily Quests', newText: 'QUÊTES QUOTIDIENNES' },
                { oldText: '', newText: '', addClass: 'use-fira' },
                { oldText: 'Active Quests', newText: 'QUÊTES ACTIVES' },
                { oldText: 'Available Quests', newText: 'QUÊTES DISPONIBLES' }
            ]
        },
        {
            selector: 'span.user-dogtag.tag.tag-highlight',
            replacements: [
                { oldText: 'Dev', newText: 'Dév' },
                { oldText: 'GMR', newText: 'Joueur' },
                { oldText: 'MOD', newText: 'Modo' },
                { oldText: 'GUY', newText: 'Gars' },
                { oldText: 'ELF', newText: 'Elfe' },
                { oldText: 'BUG', newText: 'Bug' },
                { oldText: 'She', newText: 'Elle' },
                { oldText: 'Her', newText: 'Sa/Elle' },
                { oldText: 'He', newText: 'Il' },
                { oldText: 'Him', newText: 'Lui' },
                { oldText: 'They', newText: 'Iels' },
                { oldText: 'Them', newText: 'Leur' }
            ]
        },
        {
            selector: 'span.tag.tag-highlight',
            replacements: [
                { oldText: 'Follows you', newText: 'Vous suit' },
                { oldText: 'Friend', newText: 'Ami' },
                { oldText: 'Online', newText: 'En ligne' }
            ]
        },
        {
            selector: 'span.tag',
            replacements: [{ oldText: 'Offline', newText: 'Hors ligne' }]
        },
        {
            selector: 'nav#shell-top-nav a strong',
            replacements: [
                { oldText: 'Discover', newText: 'DÉCOUVRIR' },
                { oldText: 'Store', newText: 'BOUTIQUE' }
            ]
        },
        {
            selector: 'div.-member-counts a',
            replacements: [{ oldText: 'members', newText: 'membres' }]
        },
        {
            selector: 'nav.-menu a span',
            replacements: [
                { oldText: 'Following', newText: 'Abonnements' },
                { oldText: 'For You', newText: 'Pour vous' }
            ]
        },
        {
            selector: 'div.-username',
            replacements: [{ oldText: 'Hey', newText: 'Salut, ' }]
        },
        {
            selector: 'div.-input',
            replacements: [
                { oldText: 'So, what\'s on your mind?', newText: 'À quoi pensez-vous ?' },
                { oldText: 'Share your creations!', newText: 'Partagez vos créations !' },
                { oldText: 'Keep it related to POPGOES!', newText: 'Gardez cela lié à POPGOES !' }
            ]
        },
        {
            selector: 'div.-message',
            replacements: [{ oldText: 'Game Jolt\'s Store is an open platform to share your games with the world.', newText: 'La boutique Game Jolt est une plateforme ouverte pour partager vos jeux avec le monde entier.' }]
        },
        {
            selector: 'label[for="search-input-1"] span',
            replacements: [{ oldText: 'Search', newText: 'Rechercher' }]
        },
        {
            selector: 'input#search-input-1',
            replacements: [{ oldText: 'Search', newText: 'Rechercher', attr: 'placeholder' }]
        },
        {
            selector: 'div.-hero-text',
            replacements: [{ oldText: 'Join a growing community of creators and gamers from around the world!', newText: 'Rejoignez une communauté croissante de créateurs et de joueurs du monde entier !' }]
        },
        {
            selector: 'span',
            replacements: [{ oldText: 'Sign up with Google', newText: 'S\'inscrire avec Google' }]
        },
        {
            selector: 'div.auth-line-thru',
            replacements: [{ oldText: 'or', newText: 'ou' }]
        },
        {
            selector: 'a',
            replacements: [{ oldText: 'Get App', newText: 'Installer l\'app' }]
        },
        {
            selector: 'h5.section-header',
            replacements: [
                { oldText: 'Games', newText: 'Jeux' },
                { oldText: 'Collaborators', newText: 'Collaborateurs' }
            ]
        },
        {
            selector: 'span',
            replacements: [{ oldText: 'Close', newText: 'Fermer' }]
        },
        {
            selector: 'a',
            replacements: [
                { oldText: 'Log in', newText: 'Connexion' },
                { oldText: 'Sign up', newText: 'Inscription' }
            ]
        },
        {
            selector: 'div.fill-offset > h2',
            replacements: [{ oldText: 'Pride Month 2024', newText: 'MOIS DES FIERTÉS 2024' }]
        },
        {
            selector: 'div.tooltip-inner',
            replacements: [
                { oldText: 'Notifications', newText: 'Notifications' },
                { oldText: 'Friend Requests', newText: 'Demandes d\'ami' }
            ]
        },
        {
            selector: '.timeline-list-item-title, .timeline-list-item-meta',
            replacements: [{ oldText: 'replied to your comment on', newText: 'a répondu à votre commentaire sur' }]
        },
        {
            selector: 'span',
            replacements: [{ oldText: 'Learn more', newText: 'En savoir plus' }]
        },
        {
            selector: 'span.text-muted',
            replacements: [
                { oldText: /(\d+)h/g, newText: '$1 h' },
                { oldText: /(\d+)w/g, newText: '$1 sem' },
                { oldText: /(\d+)d/g, newText: '$1 j' }
            ]
        },
        {
            selector: 'div.content-viewer.quest-stage-description-content p span',
            replacements: [
                { oldText: 'First! I gave the first like! It was me! Oh... You were first. Maybe next time!', newText: 'Premier ! J\'ai mis le premier like ! C\'était moi ! Oh... C\'était vous. Peut-être la prochaine fois !' },
                { oldText: 'Your choices will affect the outcome, good or bad, so choose carefully!', newText: 'Vos choix affecteront l\'issue, en bien ou en mal, alors choisissez avec soin !' },
                { oldText: 'Though a multitude, our hearts beat as one! Lend your support! Let\'s vanquish the darkness!', newText: 'Bien que nombreux, nos cœurs battent à l\'unisson ! Apportez votre soutien ! Vainquons les ténèbres !' },
                { oldText: 'In this land, there is an age-old custom of raising one\'s thumb in support of a good point. Let\'s honor this tradition!', newText: 'Dans cette contrée, il existe une coutume ancestrale consistant à lever le pouce pour soutenir une idée. Honorons cette tradition !' },
                { oldText: 'Seek out and complete quests to become the very best, like no one ever was!', newText: 'Cherchez et terminez des quêtes pour devenir le meilleur, comme personne ne l\'a jamais été !' },
                { oldText: '@TheGamingGoru is a Jolter to Watch!', newText: '@TheGamingGoru est un Jolter à suivre !' },
                { oldText: 'They post great fan art inspired by video games and cartoons!', newText: 'Iels publient de superbes fan arts inspirés de jeux vidéo et de dessins animés !' },
                { oldText: 'Follow them before the quest ends on October 29 and you\'ll get Coins!', newText: 'Suivez-les avant la fin de la quête le 29 octobre et vous recevrez des pièces !' },
                { oldText: 'Give your friend the gift of stickers!', newText: 'Offrez des stickers à vos amis !' },
                { oldText: 'Anyone can react to a comment. Can you react to 5 different ones?', newText: 'N\'importe qui peut réagir à un commentaire. Pouvez-vous réagir à 5 commentaires différents ?' },
                { oldText: 'You\'ve received a transmission from beyond the stars! An alien diplomat wants to introduce themselves to Earthlings.', newText: 'Vous avez reçu une transmission venue d\'au-delà des étoiles ! Un diplomate extraterrestre souhaite se présenter aux Terriens.' },
                { oldText: 'Send the alien our message of good will by liking', newText: 'Envoyez à l\'alien notre message de bonne volonté en likant ' },
                { oldText: 'this post', newText: 'ce post' },
                { oldText: '. If you do, they\'ll give you coins and stickers!', newText: '. Si vous le faites, iels vous donneront des pièces et des stickers !' },
                { oldText: 'Support your favorite Creators on Game Jolt with the power of lightning!', newText: 'Soutenez vos créateurs préférés avec le pouvoir de la foudre ! ' },
                { oldText: 'Place 22 charged stickers before the quest expires and you’ll get a trophy!', newText: 'Placez 22 stickers chargés avant la fin de la quête pour gagner un trophée !' },
                { oldText: 'GJ Pro-Tip:', newText: 'Conseil de pro GJ : ' },
                { oldText: 'You\'ll also get a Welcome to Game Jolt pack after you\'ve placed 11 charged stickers.', newText: 'Vous recevrez aussi un pack de bienvenue après avoir placé 11 stickers chargés.' }
            ]
        },
        {
            selector: 'div._details > div',
            replacements: [
                { oldText: '', newText: '', addClass: 'use-fira' },
                { oldText: 'What\'s Your Favorite Scary Movie?', newText: 'Quel est votre film d\'horreur préféré ?' },
                { oldText: 'Post Your Halloween Costume!', newText: 'Postez votre costume d\'Halloween !' },
                { oldText: 'Help Kikkerstein Save Halloween!', newText: 'Aidez Kikkerstein à sauver Halloween !' },
                { oldText: 'Trick or Treat 2024', newText: 'Un bonbon ou un sort 2024' },
                { oldText: 'Complete 10 daily quests', newText: 'Terminez 10 quêtes quotidiennes' },
                { oldText: 'Jolters to Watch: @TheGamingGoru', newText: 'Jolters à suivre : @TheGamingGoru' },
                { oldText: 'The Night of the Liking Dead', newText: 'La Nuit des Likes-Vivants' },
                { oldText: 'October Login Streak', newText: 'Série de connexions d\'octobre' }
            ]
        },
        {
            selector: 'h2.-content-row-header',
            replacements: [
                { oldText: 'Realms', newText: 'Royaumes' },
                { oldText: 'Game Jolt Creators', newText: 'Créateurs Game Jolt' }
            ]
        },
        {
            selector: 'h2.-content-row-header small',
            replacements: [
                { oldText: 'Realms bring all the content around a particular topic or interest into a single place for you to browse.', newText: 'Les royaumes regroupent tout le contenu lié à un sujet ou intérêt particulier en un seul endroit.' },
                { oldText: 'Follow and support your favorite creators on Game Jolt!', newText: 'Suivez et soutenez vos créateurs préférés sur Game Jolt !' }
            ]
        }
    ];

    function translateText() {
        replacements.forEach(group => {
            const elements = document.querySelectorAll(group.selector);
            if (!elements.length) return;

            elements.forEach(element => {
                group.replacements.forEach(rep => {
                    if (rep.oldText) {
                        if (rep.attr) {
                            if (element[rep.attr] && element[rep.attr].includes(rep.oldText)) {
                                element[rep.attr] = element[rep.attr].replace(rep.oldText, rep.newText);
                            }
                        } else {
                            if (element.textContent.includes(rep.oldText)) {
                                element.innerHTML = element.innerHTML.replace(rep.oldText, rep.newText);
                            }
                        }
                    }
                    if (rep.addClass) element.classList.add(rep.addClass);
                });
            });
        });

        // Remplacement titres de page
        const titleReplacements = {
            'Share your creations': 'Partagez vos créations',
            'Fan art, videos, guides, polls and more': 'Fan arts, vidéos, guides, sondages et plus'
        };

        Object.keys(titleReplacements).forEach(oldText => {
            if (document.title.includes(oldText)) {
                document.title = document.title.replace(oldText, titleReplacements[oldText]);
            }
        });

        handleSpecialReplacements();
    }

    function handleSpecialReplacements() {
        document.querySelectorAll('div.-title').forEach(element => {
            if (element.textContent.includes('CANCELLED')) {
                element.textContent = element.textContent.replace(/CANCELLED/gi, 'Annulé');
            }
        });
    }

    function replaceImage() {
        const imgSelector = 'img[src*="32981814-sd4xeihs-v4.webp"]';
        const img = document.querySelector(imgSelector);
        if (img && img.src !== 'https://i.imgur.com/sqNFMx6.png') {
            img.src = 'https://i.imgur.com/sqNFMx6.png';
        }
    }

    function init() {
        translateText();
        replaceImage();
    }

    document.addEventListener('DOMContentLoaded', init);

    const observer = new MutationObserver(() => {
        clearTimeout(observer.timeout);
        observer.timeout = setTimeout(init, 50);
    });

    observer.observe(document.body, { childList: true, subtree: true });

})();
