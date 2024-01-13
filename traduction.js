// translation.js

// Fonction pour obtenir la langue du navigateur
function getBrowserLanguage() {
    return navigator.language || navigator.userLanguage;
}

// Fonction pour rediriger l'utilisateur en fonction de la langue
function redirectToLanguage() {
    var browserLanguage = getBrowserLanguage().toLowerCase();
    
    console.log('Langue du navigateur détectée:', browserLanguage);

    // Ajoutez autant de cas que nécessaire pour chaque langue
    switch (browserLanguage) {
        case 'de':
            console.log('Redirection vers de.html');
            redirectToPage('de.html');
            break;
        case 'fr':
            console.log('Redirection vers index.html');
            redirectToPage('index.html');
            break;
        case 'en':
            console.log('Redirection vers en.html');
            redirectToPage('en.html');
            break;
        case 'es':
            console.log('Redirection vers es.html');
            redirectToPage('es.html');
            break;
        case 'pt':
            console.log('Redirection vers pt.html');
            redirectToPage('pt.html');
            break;
        case 'it':
            console.log('Redirection vers it.html');
            redirectToPage('it.html');
            break;
        default:
            console.log('Redirection par défaut vers en.html');
            // Redirection par défaut, par exemple, vers la version anglaise
            redirectToPage('en.html');
    }
}

// Fonction pour rediriger vers une page spécifique si différente de la page actuelle
function redirectToPage(targetPage) {
    var currentPage = window.location.pathname;

    console.log('Page actuelle:', currentPage);

    // Vérifier si la redirection est nécessaire
    if (currentPage !== '/' + targetPage) {
        console.log('Redirection vers:', targetPage);
        window.location.href = targetPage;
    }
}

// Appeler la fonction au chargement de la page
window.onload = redirectToLanguage;
