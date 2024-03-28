export {
    localizePage
}


const translations = {
    en: {
        kinds_of_guitars: 'Kinds of guitars',
        accessories: 'Accessories',
        about_us: 'About us',
        language: 'Language',
        ukrainian:  'Ukrainian',
        english: 'English',
        discover_the_world_of_guitars: 'Discover the world of guitars',
        give_your_inner_musician: 'unleash your inner musician!',
        learn_more_about_us: 'learn more about us',
        series: 'Series',
        see_all: 'See all',
        text_about_us_1: `Welcome to our site dedicated to all things guitar! 
        Our mission is to provide you with reliable information on guitar brands, models, accessories and everything in between. 
        Whether you're a beginner or a seasoned player, we've got you covered with our expertly curated content, reviews and buying guides.`,
        text_about_us_2: `Our team of guitar enthusiasts are eager to share their knowledge and love of this versatile instrument, 
        and we hope to inspire and guide you on your guitar journey.`,
        created_by_author: '@Created by Roman Kovalchuk 1PI-20B',
        learn_more: 'Learn more'
    },
    uk: {
        kinds_of_guitars: 'Види гітар',
        accessories: 'Аксесуари',
        about_us: 'Про нас',
        language: 'Мова',
        ukrainian:  'Українська',
        english: 'Англійська',
        discover_the_world_of_guitars: 'Відкрийте для себе світ гітар',
        give_your_inner_musician: 'дайте волю своєму внутрішньому музиканту!',
        learn_more_about_us: 'дізнайтеся більше про нас',
        series: 'Серії',
        see_all: 'Дивитись всі',
        text_about_us_1: `Ласкаво просимо на наш сайт, присвячений усьому, що стосується гітар! Наша місія — надати вам
        достовірну інформацію про бренди гітар, моделі, аксесуари та все, що між ними. Незалежно від
        того, початківець ви чи досвідчений гравець, ми допоможемо вам із нашим експертно підібраним
        вмістом, оглядами та посібниками з купівлі.`,
        text_about_us_2: `Наша команда ентузіастів гри на гітарі прагне поділитися своїми знаннями та любов’ю до цього
        універсального інструменту, і ми сподіваємось надихнути та скерувати вас у вашій гітарній
        подорожі.`,
       
        created_by_author: '@Cтворено Романом Ковальчуком 1ПІ-20Б',
        learn_more: 'Детальніше'
    }
}

const supportedLanguages = ['en', 'uk'];

function localizePage(language) {
    
    if (!supportedLanguages.includes(language)) {
        console.log("Not supported language: " + language + ". Falling back to English.");
        language = 'en';
    }

    const elements = document.querySelectorAll('.l10n');

    elements.forEach(element => {
        const key = element.getAttribute('l10n-key');
        element.textContent = translations[language][key];
    });
    
    document.documentElement.setAttribute('lang', language);
}