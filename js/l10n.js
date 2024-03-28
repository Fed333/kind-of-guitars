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
        learn_more: 'Learn more',
        electric: 'Electric guitars',
        paragraph_electric_guitar: `Electric guitars are a popular and versatile musical instrument that have been around since the 1930s. 
        They are played by musicians of many genres, from rock and pop to jazz and blues.
        An electric guitar works by converting the vibrations of its metal strings into electrical signals 
        that can be amplified and altered by a variety of pedals and effects amplifiers. 
        This allows guitarists to create a wide range of sounds and styles, from clean and soft tones 
        to harsh and distorted riffs. Electric guitars come in many shapes, sizes and styles, each with their own unique features and characteristics. 
        Whether you're a beginner or a seasoned player, there's an electric guitar that's perfect for you.`,
        accoustic: 'Acoustic guitars',
        paragraph_accoustic_guitar: `Acoustic guitars are a classic and versatile musical instrument that has been around for centuries. 
        They produce sound acoustically, that is, the sound is created by the vibration of the strings, which is then amplified by the body of the guitar. 
        This creates a warm, natural sound that's perfect for many genres of music, from folk and country to classical and pop. 
        Acoustic guitars come in a wide range of sizes and styles, each with its own unique sound and character. 
        They are often used for solo performances, small group performances and songwriting. 
        Whether you are a beginner or a seasoned player, an acoustic guitar can provide endless hours of enjoyment and creative expression.`,
        bass: 'Bass guitars',
        paragraph_bass_guitar: `The bass guitar is a unique and important instrument that serves as the foundation of many musical genres, 
        including rock, pop, funk, and jazz. It has a longer neck and thicker strings than a regular guitar, producing lower notes 
        that add depth and rhythm to the band's sound. The bass guitar can be played with the fingers, the pick, or a combination of both, 
        and often works in tandem with the drums to create the rhythmic foundation of the song. Bass guitars come in many shapes, sizes and styles, 
        each with its own sound and timbre. Whether you are a beginner or an experienced player, the bass guitar is an important and rewarding instrument 
        to learn and master.`,
        '12_string': '12-string guitars',
        paragraph_12_string_guitar: `The most common is, of course, the twelve-string guitar, which has ceased to be exotic, and its deep sound can conquer 
        the heart of a musician for many years. The sound of a twelve-string guitar is significantly different from the sound of a regular six-string: it is richer, 
        more melodic, and it is impossible not to fall in love with it. This sound is possible due to the fact that each of the six strings has another one added, 
        which is clamped together with it. Due to the greater number of overtones, the sound becomes more voluminous and diverse. 
        The principle of playing on a 12-string guitar is the same as on a 6-string. The application of chords is identical. 
        The instrument itself differs from the outside: the reinforced neck is wider than usual, the strings are located close to each other, so to avoid rattling, 
        you should press them more precisely.`,
        classic: 'Classical guitars',
        paragraph_classic_guitar: `The classical guitar with nylon strings, or as it is also called, the Spanish guitar, has existed in an almost unchanged form 
        since the second half of the 18th century, and is widespread throughout the world. Due to the ease of mastering, great performance possibilities and a variety of timbres, 
        it has taken a prominent place in modern music. The classical guitar is a full-fledged universal instrument that is actively used by professionals in a wide variety of genres. 
        An acoustic guitar has a completely different bridge and peg mechanism, and a metal anchor rod passes inside the neck, which compensates for the tension of the metal strings. 
        A classical guitar differs in its geometry (smaller dimensions, different body proportions, scale and distance between strings). Its sound is moderately loud, 
        and has a characteristic soft and clean timbre that cannot be confused with any other instrument.`,
        electroacoustic: 'Electroacoustic guitars',
        paragraph_electroacoustic_guitar: `An electro-acoustic guitar is a separate type of string plucked musical instruments, 
        the difference between this type of guitar and others is the use of built-in pickups. The sound pickups themselves can be piezoelectric or magnetic,
         such devices provide amplification of the reproduced sound and add post-effects to it when connected to sound amplification equipment. Most often, 
         the sound of an electroacoustic instrument is recorded by a piezoelectric sound pickup, which is built into the lower threshold. As a result, 
         the mechanical vibrations of the strings are converted into an electrical signal, which is then fed to the tone block. 
         After that, the signal is processed and sent to the sound reinforcement equipment using the guitar cord.`
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
        learn_more: 'Детальніше',
        electric: 'Електричні',
        paragraph_electric_guitar: `Електрогітари — популярний і універсальний музичний інструмент, який існує з 1930-х
        років. Їх грають музиканти багатьох жанрів, від року та поп-музики до джазу та блюзу.
        Електрогітара працює, перетворюючи вібрації своїх металевих струн в електричні сигнали,
        які можна посилювати та змінювати різноманітними педалями та підсилювачами ефектів. Це
        дозволяє гітаристам створювати широкий діапазон звуків і стилів, від чистих і м'яких
        тонів до суворих і спотворених рифів. Електрогітари бувають різних форм, розмірів і
        стилів, кожна зі своїми унікальними особливостями та характеристиками. Незалежно від
        того, новачок ви чи досвідчений гравець, у вас є електрогітара, яка ідеально підійде
        вам.`,
        acoustic: 'Акустичні',
        paragraph_acoustic_guitar: `Акустичні гітари — класичний і універсальний музичний інструмент, який існує вже багато
        століть. Вони виробляють звук акустично, тобто звук створюється вібрацією струн, яка
        потім посилюється корпусом гітари. Це створює теплий, природний звук, який ідеально
        підходить для багатьох жанрів музики, від фолку та кантрі до класики та поп-музики.
        Акустичні гітари представлені в широкому діапазоні розмірів і стилів, кожна зі своїм
        унікальним звучанням і характером. Їх часто використовують для сольних виступів,
        виступів малих груп і написання пісень. Незалежно від того, новачок ви чи досвідчений
        гравець, акустична гітара може подарувати нескінченні години насолоди та творчого
        самовираження.`,
        bass: 'Басові',
        paragraph_bass_guitar: `Бас-гітара — унікальний і важливий інструмент, який служить основою багатьох музичних
        жанрів, включаючи рок, поп, фанк і джаз. У неї довший гриф і товщі струни, ніж у
        звичайної гітари, що виробляє нижчі ноти, які додають глибини та ритму звучанню гурту.
        На бас-гітарі можна грати пальцями, медіатором або комбінацією обох, і часто вони
        працюють у парі з барабанами, щоб створити ритмічну основу пісні. Бас-гітара буває
        різних форм, розмірів і стилів, кожна зі своїм власним звуком і тембром. Незалежно від
        того, початківець ви чи досвідчений гравець, бас-гітара — це важливий і корисний
        інструмент для вивчення та опанування.`,
        '12_string': 'Дванадцятиструнні',
        'paragraph_12_string_guitar': `Найбільш поширеною є, звичайно, дванадцятиструнна гітара, яка вже перестала бути
        екзотикою, а її глибоке звучання здатне підкорити серце музиканта на довгі роки. Звук
        дванадцятиструнної гітари суттєво відрізняється від звуку звичної шестиструнки: він
        насичений, мелодійніший, у нього неможливо не закохатися. Таке звучання можливе завдяки
        тому, що до кожної із шести струн додано ще одну, яка затискається разом з нею. За
        рахунок більшої кількості обертонів звук стає об'ємнішим і різноманітнішим. Принцип гри
        на 12-струнній гітарі такий самий, як на 6-струнній. Аплікація акордів ідентична.
        Відрізняється зовні сам інструмент: посилений по товщині гриф ширший за звичайний,
        струни розташовані близько один одному, тому щоб уникнути брязкоту слід точніше
        натискати на них.`,
        classic: 'Класичні',
        paragraph_classic_guitar: `Класична гітара з нейлоновими струнами, або як її ще називають, іспанська гітара в
        практично незмінному вигляді існує з другої половини XVIII століття, і поширена в усьому
        світі. Завдяки простоті опанування, великим виконавським можливостям і різноманітності
        тембрів, вона посіла помітне місце в сучасній музиці. Класична гітара – це повноцінний
        універсальний інструмент, яким активно користуються професіонали в найрізноманітніших
        жанрах. В акустичної гітари зовсім інший бридж і кілковий механізм, а всередині грифа
        проходить металевий анкерний стержень, який компенсує натяг металевих струн. Класична
        гітара відрізняється своєю геометрією (меншими розмірами, іншими пропорціями корпусу,
        мензурою та відстанню між струнами). Її звук помірно гучний, і має характерний м'який і
        чистий тембр, який неможливо сплутати з жодним іншим інструментом.`,  
        electroacoustic: 'Електроакустичні',
        paragraph_electroacoustic_guitar:  `Окремим різновидом струнних щипкових музичних інструментів є електроакустична гітара,
        відмінність даного типу гітар від інших полягає у використанні вбудованих звукознімачів.
        Самі звукознімачі можуть бути п'єзоелектричними або магнітними, такі пристрої
        забезпечують посилення звуку, що відтворюється, і додають до нього постефекти при
        підключенні до звукопідсилювальної апаратури. Найчастіше звук електроакустичного
        інструменту знімається п'єзоелектричним звукознімачом, який вбудований у нижній поріжок.
        В результаті відбувається перетворення механічних коливань струн на електричний сигнал,
        який далі подається в темброблок. Після цього сигнал обробляється та надходить на
        звукопідсилювальне обладнання за допомогою гітарного шнура.`,
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