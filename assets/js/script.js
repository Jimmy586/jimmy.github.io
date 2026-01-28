function filterProjects() {
    const selectedTech = document.getElementById("tech-filter").value;
    const experienceSections = document.querySelectorAll(".experience-section");

    experienceSections.forEach(section => {
        const techStack = section.getAttribute("data-tech").toLowerCase();

        if (selectedTech === "all" || techStack.includes(selectedTech.toLowerCase())) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
}

function filterEducation() {
    const selectedEdu = document.getElementById("edu-filter").value;
    const educationSections = document.querySelectorAll(".education-section");

    educationSections.forEach(section => {
        const eduTag = section.getAttribute("data-edu");

        if (selectedEdu === "all" || eduTag === selectedEdu) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
}

// Modal logic
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("imageModal");
    const img = document.getElementById("clickableImage");
    const modalImg = document.getElementById("modalImage");
    const span = document.getElementsByClassName("close")[0];

    if (img && modal && modalImg) {
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    }

    if (span) {
        span.onclick = function () {
            modal.style.display = "none";
        }
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
