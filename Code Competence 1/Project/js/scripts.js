/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Fungsi untuk menampilkan form "Contact Us" saat tautan "Contact" diklik
        function showContactForm() {
            var contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Menambahkan event listener untuk tautan "Contact"
        var contactLink = document.querySelector('a[href="#contact"]');
        if (contactLink) {
            contactLink.addEventListener('click', showContactForm);
        }

        // Mendengarkan peristiwa pengiriman formulir
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Menghentikan perilaku bawaan pengiriman formulir

    // Mendapatkan data dari formulir
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Menampilkan alert dengan data yang dimasukkan
    var alertMessage = `Username: ${username}\nEmail: ${email}\nMessage: ${message}`;
    alert(alertMessage);
});
});



