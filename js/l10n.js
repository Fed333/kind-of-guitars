export {
    localizePage
}


const translationApiUrl = 'https://ncvn0l1s6f.execute-api.eu-central-1.amazonaws.com/dev/translations';

const supportedLanguages = ['en', 'uk']; // Pull it from AWS Lambda

async function localizePage(language) {
    
    if (!supportedLanguages.includes(language)) {
        console.log("Not supported language: " + language + ". Falling back to English.");
        language = 'en';
    }

    const elements = Array.from(document.querySelectorAll('.l10n'));

    const messageKeys = [];

    elements.map(element => messageKeys.push(element.getAttribute('l10n-key')));

    const languageTranslations = await fetchLanguageTranslations(language, messageKeys);

    console.log("Language translations: ", languageTranslations)

    elements.forEach(element => {
        const key = element.getAttribute('l10n-key');
        element.textContent = languageTranslations[key];
    });

    document.documentElement.setAttribute('lang', language);
}

async function fetchLanguageTranslations(language, messageKeys) {
    console.log(`Send ajax request to AWS Lambda with language: ${language} and messageKeys: ${messageKeys}`);
    const messageKeysString = messageKeys.join(',');
    const response = await $.ajax({
        url: `${translationApiUrl}/${language}?messageKeys=${messageKeysString}`,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log('Response from AWS Lambda:', data);
        },
    });
    return JSON.parse(response.body);
}
