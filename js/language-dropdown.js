export {
    initLanguageDropdown
}

function initLanguageDropdown(wrapperId, switchLangCallback, supportedLanguages) {
    const dropdownWrapper = getDropdownWrapper(wrapperId);
    dropdownWrapper.innerHTML = renderDropdown(supportedLanguages);

    const dropdownArrow = getDropdownArrow(wrapperId);
    const dropdownContent = getDropdownContent(wrapperId);

    dropdownWrapper.addEventListener('mouseover', () => hoverArrowDown(dropdownArrow));
    dropdownWrapper.addEventListener('mouseout', () => unhoverArrowDown(dropdownArrow));
    
    dropdownWrapper.addEventListener('click', () => toggleDropdown(wrapperId));
    dropdownWrapper.addEventListener('focusout', () => collapseDropdown(wrapperId));

    dropdownContent.addEventListener('click', function(event){
        if (event.target.tagName.toLowerCase() === 'li') {
            const chosenLang = event.target.getAttribute('lang');
            const activeLang = document.documentElement.getAttribute('lang');
            
            if (chosenLang !== activeLang) {
                console.log("Changing language to: " + chosenLang);
                document.documentElement.setAttribute('lang', chosenLang);
                
                switchLangCallback(chosenLang);
            }
          }
    });
}

function renderDropdown(supportedLanguages) {
    const markup = `
    <div class="dropdown-button">
        <p class="l10n" l10n-key="language">Мова</p>
        <img class="dropdown-arrow" src="img/arrow_down.png" alt="" width="16"/>
        <ul class="dropdown-content">
            ${renderDropdownContent(supportedLanguages)}
        </ul>
    </div>`;
    return markup;
}

function renderDropdownContent(supportedLanguages) {
    let content = '';
    
    for (let lang in supportedLanguages) {
        content += `<li lang="${lang}">${supportedLanguages[lang]}</li>`;
    }
    return content;
}

function toggleDropdown(wrapperId) {
    const dropdownWrapper = getDropdownWrapper(wrapperId);
    const dropdownArrow = getDropdownArrow(wrapperId);
    
    dropdownWrapper.classList.toggle('dropdown-wrapper--open'); 
}

function hoverArrowDown(element) {
    element.setAttribute('src', 'img/arrow_down-hovered.png');
}
  
function unhoverArrowDown(element) {
    element.setAttribute('src', 'img/arrow_down.png');
}

function collapseDropdown(wrapperId) {
    const dropdownWrapper = getDropdownWrapper(wrapperId);
    dropdownWrapper.classList.remove('dropdown-wrapper--open');
}

function getDropdownWrapper(wrapperId) {
    return document.getElementById(wrapperId);
}

function getDropdownArrow(wrapperId) {
    return document.getElementById(wrapperId).querySelector('.dropdown-button > .dropdown-arrow');
}

function getDropdownContent(wrapperId) {
    return document.getElementById(wrapperId).querySelector('.dropdown-content');
}