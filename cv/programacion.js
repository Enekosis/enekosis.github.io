window.addEventListener('DOMContentLoaded', function () {
    var profileImage = document.getElementById('imagen-perfil');

    profileImage.addEventListener('mouseover', function () {
        profileImage.src = 'madok-frente.jpg';
        profileImage.style.opacity = '1';
    });

    profileImage.addEventListener('mouseout', function () {
        profileImage.src = 'madok-perfil.jpg';
    });
});