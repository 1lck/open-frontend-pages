/**
 * copyright 2024 3A
 */

document.addEventListener('DOMContentLoaded', function () {
    var item = document.getElementById('continer');
    setTimeout(function () {
        item.style.display = 'block';
    }, 1000);
});
window.onload = function () {
    var delay = 4000;
    var redirectUrl = "../index.html";
    setTimeout(function () {
        window.location.href = redirectUrl;
    }, delay);
};
