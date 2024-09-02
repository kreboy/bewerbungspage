document.addEventListener('DOMContentLoaded', function () {
    const cookieConsentModal = new bootstrap.Modal(document.getElementById('cookieConsentModal'));
    const acceptCookies = document.getElementById('acceptCookies');
    
    // Check if cookies are accepted
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieConsentModal.show();
    }

    // Accept cookies
    acceptCookies.addEventListener('click', function () {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieConsentModal.hide();
    });
});
