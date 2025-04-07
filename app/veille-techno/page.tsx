'use client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React from "react";

const generateMonths = () => {
    const startDate = new Date(2023, 8); // Septembre 2023
    const endDate = new Date(2025, 5); // Juin 2025
    const months = [];
    const monthNames = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];

    const articles = [
        {
            title: "Septembre 2023 - OpenAI Refuse de Négocier avec les Syndicats de Médias Français",
            content: "OpenAI a refusé d’engager des négociations avec les syndicats de médias français concernant l’utilisation de leurs contenus pour entraîner ses modèles d’IA. Cette décision a provoqué des tensions au sein de l’industrie des médias.",
            link: "https://www.lemonde.fr/article-2023-septembre-openai-refuse-de-negocier-avec-les-syndicats",
            image: "/sept-2023.png"
        },
        {
            title: "Octobre 2023 - Google et l'IA dans les Appareils Mobiles",
            content: "Google a annoncé une nouvelle approche de l’IA pour ses appareils mobiles, en intégrant des modèles d’IA directement dans les smartphones pour offrir des services plus rapides et plus efficaces sans dépendre du cloud.",
            link: "https://www.lemonde.fr/economie/article/2024/09/13/intelligence-artificielle-openai-refuse-de-negocier-avec-les-syndicats-de-medias-francais-apig-et-sepm_6316785_3234.html?utm_source=chatgpt.com",
            image: "/oct-2023.png"
        },
        {
            title: "Novembre 2023 - L’IA générative est une affaire trop sérieuse pour la laisser dans les seules mains du capital",
            content: "La crise de gouvernance que vient de connaître OpenAI montre que les bonnes intentions éthiques ne seront pas suffisantes pour encadrer les avancées de l’intelligence artificielle.",
            link: "https://www.lemonde.fr/idees/article/2023/11/27/l-ia-generative-est-une-affaire-trop-serieuse-pour-la-laisser-dans-les-seules-mains-du-capital_6202603_3232.html",
            image: "/nov-2023.png"
        },
        {
            title: "Décembre 2023 -L’année 2023 sous le signe de l’intelligence artificielle",
            content: "Depuis le lancement de l’agent conversationnel ChatGPT, à la fin de l’année dernière, les innovations liées à l’IA croissent dans tous les domaines : médecine, chimie, physique, mathématiques ou encore économie. Un succès fulgurant qui engendre aussi interrogations et critiques.",
            link: "https://www.lemonde.fr/sciences/article/2023/12/25/l-annee-2023-sous-le-signe-de-l-intelligence-artificielle_6207616_1650684.html",
            image: "/dec-2023.png"
        },
        {
            title: "Janvier 2024 - Intelligence artificielle : malgré les critiques, la France maintient la pression sur l’AI Act",
            content: "Alors que les Etats membres de l’Union sont appelés à ratifier le projet de règlement européen, Paris y voit « encore quelques points qui posent problème », notamment sur le droit d’auteur.",
            link: "https://www.lemonde.fr/economie/article/2024/01/24/intelligence-artificielle-malgre-les-critiques-la-france-maintient-la-pression-sur-l-ai-act_6212773_3234.html",
            image: "jan-2024.png"
        },
        {
            title: "Février 2024 - Grâce à l'IA, nous avons conduit une voiture avec les yeux",
            content: "Avec son nouveau smartphone Magic6 Pro, Honor a mis en avant son système de suivi oculaire. Une technologie qui permet même de conduire une voiture d'un simple regard.",
            link: "https://www.bfmtv.com/tech/intelligence-artificielle/grace-a-l-ia-nous-avons-conduit-une-voiture-avec-les-yeux_AN-202402270544.html",
            image: "/feb-2024.png"
        },
        {
            title: "Mars 2024 - Intelligence artificielle : le Parlement européen adopte une législation unique pour encadrer son utilisation\n",
            content: "C’est la première loi contraignante au monde sur l’intelligence artificielle (IA). Le Parlement européen a adopté mercredi 13 mars des règles pour encadrer l’utilisation de cette technologie. Le texte, qui vise à protéger les droits et la sécurité, tout en soutenant l’innovation, a été voté à une très large majorité par les eurodéputés réunis en session plénière, par 523 voix pour et 46 voix contre.",
            link: "https://www.lemonde.fr/pixels/article/2024/03/13/intelligence-artificielle-le-parlement-europeen-adopte-une-legislation-unique-pour-encadrer-son-utilisation_6221784_4408996.html",
            image: "/mar-2024.png"
        },
        {
            title: "Avril 2024 - IA: LE FINANCIAL TIMES ET OPENAI SIGNENT UN ACCORD SUR LES CONTENUS",
            content: "Le prestigieux quotidien économique britannique et la société à l'initiative de ChatGPT ont signé un accord pour licencier des contenus du quotidien britannique pour OpenAI, qui est accusée par d'autres médias de violation du droit d'auteur.",
            link: "https://www.bfmtv.com/tech/intelligence-artificielle/ia-le-financial-times-et-open-ai-signent-un-accord-sur-les-contenus_AD-202404290881.html",
            image: "/apr-2024.png"
        },
        {
            title: "Mai 2024 - GOOGLE EXPLIQUE POURQUOI SON INTELLIGENCE ARTIFICIELLE PEUT RACONTER N'IMPORTE QUOI",
            content: "Aux Etats-Unis, l'IA a été intégrée en haut des résultats de recherche pour \"offrir une meilleure expérience\". Elle s'inspire donc des résultats en fonction de la recherche effectuée pour proposer un résumé sans avoir donc besoin - en théorie - d'aller sur un site internet, et donc de quitter Google.",
            link: "https://www.bfmtv.com/tech/intelligence-artificielle/google-explique-pourquoi-son-ia-recommande-de-mettre-de-la-colle-sur-une-pizza_AV-202405310306.html",
            image: "/mai-2024.png"
        },
        {
            title: "Juin 2024 - IA: L'AUTORITÉ DE LA CONCURRENCE PRÉOCCUPÉE PAR LA DOMINATION DES GÉANTS DU NUMÉRIQUE",
            content: "Dans un avis rendu public, le gendarme français de la concurrence émet des recommandations pour faire face aux \"potentielles dérives\" liées à cette domination.\n" +
                "L'Autorité de la concurrence a mis en garde vendredi face aux \"risques concurrentiels\" dans le secteur de l'intelligence artificielle (IA) générative liés à \"l'avantage immense\" dont disposent déjà les géants du secteur, comme Microsoft ou Alphabet, maison mère de Google.",
            link: "https://www.bfmtv.com/tech/intelligence-artificielle/ia-l-autorite-de-la-concurrence-preoccupee-par-la-domination-des-geants-du-numerique_AD-202406280413.html",
            image: "/jun-2024.png"
        },
        {
            title: "Juillet 2024 - Entrée en vigueur du règlement européen sur l’IA : les premières questions-réponses de la CNIL",
            content: "Depuis un an, la CNIL a lancé son plan d’action pour promouvoir une IA respectueuse des droits des personnes sur leurs données et sécuriser les entreprises innovant en la matière dans leur application du RGPD.",
            link: "https://www.cnil.fr/fr/entree-en-vigueur-du-reglement-europeen-sur-lia-les-premieres-questions-reponses-de-la-cnil",
            image: "/jul-2024.png"
        },
        {
            title: "Août 2024 -Entrée en vigueur du règlement sur l’IA",
            content: "Le règlement européen sur l’intelligence artificielle (IA) est entré en vigueur le 1er août 2024. Il vise à favoriser un développement et un déploiement responsables de l’intelligence artificielle dans l’UE. Proposé par la Commission en avril 2021 et approuvé par le Parlement européen et le Conseil en décembre 2023, le règlement sur l’IA traite les risques potentiels pour la santé, la sécurité et les droits fondamentaux des citoyens. Il établit pour les développeurs et les déployeurs des exigences et des obligations claires concernant les utilisations spécifiques de l’IA, tout en réduisant les charges administratives et financières pesant sur les entreprises.",
            link: "https://commission.europa.eu/news/ai-act-enters-force-2024-08-01_fr#:~:text=Le%20r%C3%A8glement%20europ%C3%A9en%20sur%20l,intelligence%20artificielle%20dans%20l'UE.",
            image: "/aug-2024.png"
        },
        {
            title: "Septembre 2024 - CHEZ VOTRE MÉDECIN, L'IA DE DOCTOLIB POURRA BIENTÔT ANALYSER VOS CONVERSATIONS",
            content: "Doctolib déploie mi-octobre sa nouvelle intelligence artificielle, capable de récolter les informations pertinentes lors d'une discussion entre un patient et son médecin.\n",
            link: "https://www.bfmtv.com/tech/intelligence-artificielle/chez-votre-medecin-une-ia-pourra-bientot-analyser-votre-conversation-si-vous-l-acceptez_AV-202409300540.html",
            image: "/sep-2024.png"
        },
        {
            title: "Octobre 2024 - OPENAI LANCE OFFICIELLEMENT SON PROPRE MOTEUR DE RECHERCHE POUR CONCURRENCER GOOGLE",
            content: "OpenAI a annoncé le lancement de ChatGPT Search, une extension de son IA ChatGPT. Elle est uniquement accessible aux abonnés payants pour le moment.",
            link: "https://www.bfmtv.com/tech/intelligence-artificielle/open-ai-lance-officiellement-son-propre-moteur-de-recherche-pour-concurrencer-google_AD-202410310761.html",
            image: "/oct-2024.png"
        },
        {
            title: "Novembre 2024 - VOTRE THÉRAPEUTE : POURQUOI IL VAUT MIEUX ÉVITER DE TROP SE CONFIER À CHATGPT",
            content: "Ce 30 novembre 2024, ChatGPT fête son second anniversaire. En deux ans, le chatbot d’OpenAI est devenu plus qu’une simple intelligence artificielle capable de répondre à des questions. Mais ce n’est pas pour autant qu’on peut tout lui dire.",
            link: "https://www.bfmtv.com/tech/intelligence-artificielle/votre-therapeute-pourquoi-il-vaut-mieux-eviter-de-trop-se-confier-a-chat-gpt_AV-202411300069.html",
            image: "/nov-2024.png"
        },
        {
            title: "Décembre 2024 - \"MANIPULER ET TRANSFORMER\": L'IA RISQUE DE \"TRANSFORMER\" NOS DÉCISIONS EN \"MARCHANDISES\", SELON UNE ÉTUDE",
            content: "Une IA pourrait glaner les données psychologiques et comportementales intimes d'un utilisateur, puis s'adapter à lui afin d'établir un haut niveau de confiance et l'influencer plus facilement.",
            link: "https://www.bfmtv.com/tech/intelligence-artificielle/manipuler-et-transformer-l-ia-risque-de-transformer-nos-decisions-en-marchandises-selon-une-etude_AD-202412300217.html",
            image: "/dec-2024.png"
        },
        {
            title: "Janvier 2025 - Intelligence artificielle : ce qu’il faut retenir de janvier 2025",
            content: "L’année 2025 démarre sur les chapeaux de roues pour l’intelligence artificielle. Alors que les grands modèles de langage se battent pour obtenir les meilleures notes sur les différentes évaluations, l’innovation se déplace vers l’intégration et l’utilisation concrète de l’IA dans des solutions spécialisées. Plutôt que de poursuivre une course effrénée aux benchmarks, les entreprises privilégient des applications pratiques qui maximisent l’impact de l’IA sur le terrain. Cette dynamique accélérée modifie profondément le paysage technologique et redéfinit la manière dont les organisations, y compris les municipalités, exploitent l’IA pour optimiser leurs services. Voici un tour d’horizon des tendances et avancées majeures observées en ce début d’année.",
            link: "https://activis.ca/intelligence-artificielle-ce-quil-faut-retenir-de-janvier-2025/",
            image: "/jan-2025.png"
        },
        {
            title: "Février 2025 - AI Act : Quelles obligations s'appliquent dès le 2 février 2025 ?",
            content: "Le règlement sur l'intelligence artificielle (RIA ou AI Act), premier cadre juridique complet sur l’intelligence artificielle en Europe, entrera progressivement en application à partir de 2025.",
            link: "https://www.dastra.eu/fr/article/ai-act-quelles-obligations-sappliquent-des-le-2-fevrier-2025/58851",
            image: "/feb-2025.png"
        },
        {
            title: "Mars 2025 - AI Act : Quelles obligations s'appliquent dès le 2 février 2025 ?",
            content: "Le règlement sur l'intelligence artificielle (RIA ou AI Act), premier cadre juridique complet sur l’intelligence artificielle en Europe, entrera progressivement en application à partir de 2025.",
            link: "https://www.dastra.eu/fr/article/ai-act-quelles-obligations-sappliquent-des-le-2-fevrier-2025/58851",
            image: ""
        },
    ];

    const currentDate = new Date(startDate);
    let articleIndex = 0;
    while (currentDate <= endDate) {
        months.push({
            year: currentDate.getFullYear(),
            label: `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`,
            value: `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`,
            title: articles[articleIndex]?.title || `Article générique pour ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}.`,
            content: articles[articleIndex]?.content || `Article générique pour ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}.`,
            link: articles[articleIndex]?.link || "#",
            image: articles[articleIndex]?.image || "https://via.placeholder.com/150?text=Image+Par+Défaut"
        });
        articleIndex++; // Passe à l'article suivant
        currentDate.setMonth(currentDate.getMonth() + 1);
    }

    return months;
};

function Page() {
    const months = generateMonths();
    const years = [2023, 2024, 2025];

    return (
        <div className="flex flex-col space-y-6">
            <div className="p-4 rounded-lg shadow">
                <h1 className="text-2xl font-bold mb-2 ml-10">Veille Technologique sur l&apos;Intelligence Artificielle</h1>
                <p className="text-gray-700">
                    L&apos;intelligence artificielle (IA) est un domaine en constante évolution qui transforme de nombreux secteurs,
                    de la santé à l&apos;industrie en passant par la création numérique. Afin de rester informé des dernières avancées,
                    j&apos;ai suivi chaque mois les actualités majeures sur l&apos;IA et ses impacts. Cette veille technologique regroupe
                    les événements, recherches et innovations les plus marquants de septembre 2023 à aujourd&apos;hui.
                </p>

            </div>

            <div className="flex space-x-4">
                {years.map((year) => (
                    <div key={year} className="border p-4 rounded-lg shadow-md flex-1">
                        <h2 className="text-xl font-bold text-center">{year}</h2>
                        <Accordion type="single" collapsible>
                            {months.filter(month => month.year === year).map((month) => (
                                <AccordionItem key={month.value} value={month.value}>
                                    <AccordionTrigger>{month.label}</AccordionTrigger>
                                    <AccordionContent>
                                        <h3 className="text-lg font-semibold mb-2">{month.title}</h3>
                                        <a href={month.link} target="_blank" rel="noopener noreferrer">
                                            <img src={month.image} alt={month.label} className="mb-4 rounded" />
                                        </a>
                                        <p>{month.content}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Page;
