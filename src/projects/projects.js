import "/src/projects/projects.css"

const projects = {
    1: {
        id: 1,
        title: "Lusizo Portfolio",
        readme: `
        <p>The portfolio showcases projects, skills, and professional experience. The website is designed to be responsive and user-friendly, providing visitors with a seamless browsing experience on any device.</p>
        <p>Features:</p>
        <ul>
            <li>Responsive Design: Ensures the portfolio looks great on devices of all sizes.</li>
            <li>Dynamic Project Display: Showcases various projects with descriptions and images.</li>
            <li>Contact Information: Includes contact details and links to social media profiles.</li>
            <li>Clean UI/UX: Simple and intuitive user interface for easy navigation.</li>
            <li> Portfolio Section: Displays selected works with images and descriptions.</li>
        </ul>
        <p>Technologies Used:</p>
        <ul>
            <li> HTML: Structure of the website.</li>
            <li>CSS: Styling the website.</li>
            <li>JavaScript: Adding interactive elements.</li>
            <li>Vite: Build tool for frontend development.</li>
            <li>Vercel: Hosting and deployment of the website.</li>
        </ul>
        <p>Setup Instructions:</p>
        <ul>
            <li>Node.js</li>
            <li>npm (Node Package Manager)</li>
        </ul>
        <p>Usage:</p>
        <ul>
            <li>Navigating the Portfolio: Browse through different sections like Home, Projects, and CV.</li>
            <li>Viewing Projects: Click on project images or links to view detailed descriptions and technologies used.</li>
             <li>Contact Information: Use the contact details to reach out via email or social media.</li>
        </ul>
        <p>This was my first web development project and is highly inspired by Ajin Gupta portfolio.</p>`,
        languages: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/Lman7154/Philiso_Lusizo",
        liveLink: "https://philiso-lusizo.vercel.app/",
        image: "/Images/overviewimage.png", //When deploying to Vercel, static files should be placed in a public directory at the root level, and then they can be accessed directly
    },
    2: {
        id: 2,
        title: "Nine Soldiers",
        readme: `
        <p>The portfolio showcases projects, skills, and professional experience.</p>
        <p>Features:</p>
        <ul>
            <li>Responsive Design</li>
            <li>Dynamic Project Display</li>
            <li>Contact Information</li>
        </ul>
        <p>Technologies Used:</p>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
        <p>Setup Instructions:</p>
        <ul>
            <li>Node.js</li>
            <li>npm</li>
        </ul>
        <p>It showcases web development skills and is highly inspired by Ajin Gupta.</p>`,
        languages: ["HTML", "Tailwind CSS", "JavaScript"],
        githubLink: "https://github.com/Lusizo/Cryptway",
        liveLink: "https://lusizo.github.io/Cryptway",
        image: "/Images/testing image modal rendering in vercel 3.png",
    },
    3: {
        id: 3,
        title: "Q2A Poll plugin",
        readme: `
        <p>The portfolio showcases projects, skills, and professional experience.</p>
        <p>Features:</p>
        <ul>
            <li>Responsive Design</li>
            <li>Dynamic Project Display</li>
            <li>Contact Information</li>
        </ul>
        <p>Technologies Used:</p>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
        <p>Setup Instructions:</p>
        <ul>
            <li>Node.js</li>
            <li>npm</li>
        </ul>
        <p>It showcases web development skills and is highly inspired by Ajin Gupta.</p>`,
        languages: ["PHP", "JavaScript"],
        githubLink: "https://github.com/Lusizo/Q2A-Poll-Plugin",
        liveLink: "https://lusizo.github.io/Q2A-Poll-Plugin",
        image: "/Images/testing image modal rendering in vercel.png",
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
            <div class="button-container">
                <a href="${projectDetails.githubLink}" class="button">View on GitHub</a>
                <a href="${projectDetails.liveLink}" class="button">Live Demo</a>
            </div>
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
