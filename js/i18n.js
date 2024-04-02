export {
    initI18n
}

import { initLanguageDropdown} from './language-dropdown.js';
import { localizePage } from './l10n.js';
import { fetchSupportedLanguages } from './l10n.js';

async function initI18n() {
    const supportedLanguages = await fetchSupportedLanguages();

    initLanguageDropdown("langSwitch", switchLanguage, supportedLanguages);
    localizePage(localStorage.getItem('lang') || 'en');
}

function switchLanguage(lang) {
    localStorage.setItem('lang', lang);
    localizePage(lang);
}