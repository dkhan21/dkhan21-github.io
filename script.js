document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the homeButton
    document.addEventListener('click', function(event) {
        // Check if the clicked element has a class of "aboutButton"
        if (event.target.classList.contains('homeButton')) {
            // Scroll to the top of the "about" section
            var aboutSections = document.getElementsByClassName('dots');
            if (aboutSections.length > 0) {
                var aboutSection = aboutSections[0]; // Assuming there's only one "about" section
                var yOffset = aboutSection.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: yOffset, behavior: 'smooth' });
            }
        }
    });

    document.addEventListener('click', function(event) {
        // Check if the clicked element has a class of "aboutButton"
        if (event.target.classList.contains('aboutButton')) {
            // Scroll to the top of the "about" section
            var aboutSections = document.getElementsByClassName('about');
            if (aboutSections.length > 0) {
                var aboutSection = aboutSections[0]; // Assuming there's only one "about" section
                var yOffset = aboutSection.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: yOffset, behavior: 'smooth' });
            }
        }
    });

    document.addEventListener('click', function(event) {
        // Check if the clicked element has a class of "aboutButton"
        if (event.target.classList.contains('experienceButton')) {
            // Scroll to the top of the "about" section
            var aboutSections = document.getElementsByClassName('experience');
            if (aboutSections.length > 0) {
                var aboutSection = aboutSections[0]; // Assuming there's only one "about" section
                var yOffset = aboutSection.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: yOffset, behavior: 'smooth' });
            }
        }
    });  

    document.addEventListener('click', function(event) {
        // Check if the clicked element has a class of "aboutButton"
        if (event.target.classList.contains('skillsButton')) {
            // Scroll to the top of the "about" section
            var aboutSections = document.getElementsByClassName('skills');
            if (aboutSections.length > 0) {
                var aboutSection = aboutSections[0]; // Assuming there's only one "about" section
                var yOffset = aboutSection.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: yOffset, behavior: 'smooth' });
            }
        }
    }); 

    document.addEventListener('click', function(event) {
        // Check if the clicked element has a class of "aboutButton"
        if (event.target.classList.contains('projectsButton')) {
            // Scroll to the top of the "about" section
            var aboutSections = document.getElementsByClassName('projects');
            if (aboutSections.length > 0) {
                var aboutSection = aboutSections[0]; // Assuming there's only one "about" section
                var yOffset = aboutSection.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: yOffset, behavior: 'smooth' });
            }
        }
    });

    document.addEventListener('click', function(event) {
        // Check if the clicked element has a class of "aboutButton"
        if (event.target.classList.contains('educationButton')) {
            // Scroll to the top of the "about" section
            var aboutSections = document.getElementsByClassName('education');
            if (aboutSections.length > 0) {
                var aboutSection = aboutSections[0]; // Assuming there's only one "about" section
                var yOffset = aboutSection.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: yOffset, behavior: 'smooth' });
            }
        }
    });

    document.addEventListener('click', function(event) {
        // Check if the clicked element has a class of "aboutButton"
        if (event.target.classList.contains('personalButton')) {
            // Scroll to the top of the "about" section
            var aboutSections = document.getElementsByClassName('personal');
            if (aboutSections.length > 0) {
                var aboutSection = aboutSections[0]; // Assuming there's only one "about" section
                var yOffset = aboutSection.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: yOffset, behavior: 'smooth' });
            }
        }
    });

  

    document.getElementById("p1").addEventListener("click", function() {
        window.open("https://codeharbordnd.netlify.app/", "_blank"); // Replace "your-url-here" with the URL you want to open
    });

    document.getElementById("p2").addEventListener("click", function() {
        window.open("https://github.com/dkhan21/HousePricePredictor_App", "_blank"); // Replace "your-url-here" with the URL you want to open
    });

    document.getElementById("p3").addEventListener("click", function() {
        window.open("https://github.com/dkhan21/Weather_App_JavaScript", "_blank"); // Replace "your-url-here" with the URL you want to open
    });
    
    document.getElementById("p4").addEventListener("click", function() {
        window.open("https://github.com/dkhan21/Hospital-Database-SQL", "_blank"); // Replace "your-url-here" with the URL you want to open
    });

});
