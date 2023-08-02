/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
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

});


// Make ribbon appear only if user scrolls
window.addEventListener('scroll', function() {
    var ribbon = document.getElementById('ribbon');
    if (window.scrollY > 0) {
        ribbon.style.display = 'block';
    } else {
        ribbon.style.display = 'none';
    }
});


// Retrieve Portfolio elements (title + image and display them once click instead of rewriting them in html code
// Get the elements to be clicked
const portfolioItems = document.querySelectorAll('.portfolio-item');
// Add click event listener to each element
portfolioItems.forEach(item => {
    item.addEventListener('click', function() {
        // Get the image and text from the clicked portfolio item
        const imageSrc = this.querySelector('img').getAttribute('src');
        const projectTitle = this.querySelector('.project-title').textContent;
        const projectTools = this.querySelector('.project-tools').textContent;
        const projectDesc = this.querySelector('.project-desc').textContent;

        // Print the image source and text in the browser console
        //console.log('Image Source:', additionalInfoContent);
        //console.log('Project Title:', projectTitle);
        //console.log('Project Tools:', projectTools);
        //console.log('Project Description:', projectDesc);

        // Set the retrieved data to the portfolio-modal with ID portfolioModal1
        const portfolioModalImage = document.getElementById('portfolioModalImage');
        portfolioModalImage.setAttribute('src', imageSrc);

        // Set title
        const portfolioModalTitle = document.getElementById('portfolioModalTitle');
        portfolioModalTitle.innerHTML = projectTitle;

        const portfolioModalDesc = document.getElementById('portfolioModalDesc');
        portfolioModalDesc.innerHTML = projectDesc;


    });
});
