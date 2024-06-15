const projects = {
    1: {
        id: 1,
        title: "Lusizo Portfolio",
        readme: "This project involves creating a portfolio written in HTML, CSS, and JavaScript. It showcases web development skills and is highly inspired by Ajin Gupta. You can find detailed setup instructions, features, and technologies used below.",
        languages: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/Lusizo/Portfolio",
        liveLink: "https://lusizo.github.io/Portfolio",
        image: "/mnt/data/image.png"
    },
    2: {
        id: 2,
        title: "Cryptway Home",
        readme: "This project is a website that sells solar geysers. It's built with Tailwind CSS and JavaScript. Check out the detailed setup instructions, features, and technologies used below.",
        languages: ["HTML", "Tailwind CSS", "JavaScript"],
        githubLink: "https://github.com/Lusizo/Cryptway",
        liveLink: "https://lusizo.github.io/Cryptway",
        image: "/mnt/data/image.png"
    },
    3: {
        id: 3,
        title: "Q2A Poll plugin",
        readme: "This plugin for Q2A adds polls to questions and is written in PHP and JavaScript. Explore the detailed setup instructions, features, and technologies used below.",
        languages: ["PHP", "JavaScript"],
        githubLink: "https://github.com/Lusizo/Q2A-Poll-Plugin",
        liveLink: "https://lusizo.github.io/Q2A-Poll-Plugin",
        image: "/mnt/data/image.png"
    }
};

const modal = document.getElementById("project-modal");
const modalContent = modal.querySelector(".modal-body");
const closeButton = modal.querySelector(".close-button");

document.querySelectorAll(".project").forEach(project => {
    project.addEventListener("click", () => {
        const projectId = project.dataset.project;
        const projectDetails = projects[projectId];

        const languageButtons = projectDetails.languages.map(lang => `<span class="language">${lang}</span>`).join(' ');

        modalContent.innerHTML = `
            <h2>${projectDetails.title}</h2>
            <img src="${projectDetails.image}" alt="${projectDetails.title}" class="project-modal-image">
            <div class="languages">${languageButtons}</div>
            <a href="${projectDetails.githubLink}" class="button">View on GitHub</a>
            <a href="${projectDetails.liveLink}" class="button">Live Demo</a>
            <div class="readme">${projectDetails.readme}</div>
        `;
        modal.style.display = "block";
    });
});

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

document.getElementById('filterButton').addEventListener('click', function() {
    const filterValue = document.getElementById('filterInput').value.toLowerCase();
    const filteredProjects = Object.values(projects).filter(project => {
        const titleMatch = project.title.toLowerCase().includes(filterValue);
        const languagesMatch = project.languages.some(lang => lang.toLowerCase().includes(filterValue));
        const readmeMatch = project.readme.toLowerCase().includes(filterValue);

        return titleMatch || languagesMatch || readmeMatch;
    });

    const projectsContainer = document.querySelector('.projects-container');
    projectsContainer.innerHTML = '';
    filteredProjects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.dataset.project = project.id;
        projectElement.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-details">
                <h2>${project.title}</h2>
            </div>
        `;
        projectsContainer.appendChild(projectElement);
    });

    document.querySelectorAll(".project").forEach(project => {
        project.addEventListener("click", () => {
            const projectId = project.dataset.project;
            const projectDetails = projects[projectId];

            const languageButtons = projectDetails.languages.map(lang => `<span class="language">${lang}</span>`).join(' ');

            modalContent.innerHTML = `
                <h2>${projectDetails.title}</h2>
                <img src="${projectDetails.image}" alt="${projectDetails.title}" class="project-modal-image">
                <div class="languages">${languageButtons}</div>
                <a href="${projectDetails.githubLink}" class="button">View on GitHub</a>
                <a href="${projectDetails.liveLink}" class="button">Live Demo</a>
                <div class="readme">${projectDetails.readme}</div>
            `;
            modal.style.display = "block";
        });
    });
});
