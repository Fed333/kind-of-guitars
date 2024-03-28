export {
    initI18n
}

import { initLanguageDropdown} from './language-dropdown.js';
import { localizePage } from './l10n.js';

function initI18n() {
    initLanguageDropdown("langSwitch", switchLanguage);
    localizePage(localStorage.getItem('lang') || 'en');
}

function switchLanguage(lang) {
    localStorage.setItem('lang', lang);
    localizePage(lang);
}