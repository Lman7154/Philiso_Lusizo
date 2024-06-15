import './style.css'

document.querySelector('#app').innerHTML = `
   <header class="header-section">
        <div class="intro">
            <h1>Hi, I'm <span class="name">Lusizo</span></h1>
            <p>I'm a Computer Science undergraduate</p>
        </div>
        <div class="photo">
            <div class="profile-picture">
                <img src="https://media.licdn.com/dms/image/D4D03AQGaXaEv7jbpJw/profile-displayphoto-shrink_800_800/0/1700684102082?e=1722470400&v=beta&t=UqItis_ng3panqahc4QP5GqpXZcGISIVMUdhpETs9L0" alt="Profile Picture">
            </div>
        </div>
    </header>

    <nav class="navbar">
        <a href="/index.html" class="nav-link home-button">Home</a>
        <a href="/src/projects/projects.html" class="nav-link projects-button">Projects</a>
        <a href="/src/cv/cv.html" class="nav-link cv-button">CV</a>
    </nav>

    <section class="overview">
        <h2>Overview.</h2>
        <p>I am a dedicated Computer Science student with a strong foundation in coding, data analysis, and academic excellence. Recognized for outstanding performance with the Dean’s Merit Award and Golden Key International Honour Society membership, I have proven skills in data visualization and collaborative problem-solving. As a Computer Science tutor, I am eager to leverage my expertise in a professional setting to further develop my skills in computer science and statistics.</p>
        <div class="skills">
            <div class="skill">
                <img src="https://w7.pngwing.com/pngs/76/944/png-transparent-globe-globel-world-international-logistic-transport-search-find-flat-icon.png" alt="Web">
                <progress max="100" value="45"></progress>
                <p>Web</p>
            </div>
            <div class="skill">
                <img src="https://static.vecteezy.com/system/resources/previews/000/352/930/non_2x/setting-mobile-application-vector-icon.jpg" alt="App">
                <progress max="100" value="65"></progress>
                <p>App</p>
            </div>
            <div class="skill">
                <img src="https://cdn.iconscout.com/icon/free/png-256/data-science-46-1170621.png" alt="Data Science">
                <progress max="100" value="55"></progress>
                <p>Data Science</p>
            </div>
            <div class="skill">
                <img src="https://barrierreefpools.com/wp-content/uploads/comprehensive-warranty-icon.png" alt="Cyber Security">
                <progress max="100" value="50"></progress>
                <p>Cyber Security</p>
            </div>
        </div>
    </section>

    <section class="contact">
        <h2>Contact Me</h2>
        <div class="contact-links">
            <a href="https://www.linkedin.com/in/lusizo-philiso-845407220/" target="_blank">LinkedIn</a>
            <a href="https://github.com/Lman7154" target="_blank">GitHub</a>
            <a href="mailto:4138912@myuwc.ac.za">Email Me</a>
        </div>
    </section>

    <footer>
        <p>&copy; 2024 Lusizo Philiso</p>
    </footer>
`

document.querySelector('.home-button').addEventListener('click', () => {
  window.location.href = 'index.html'; // Update this URL as needed
});

document.querySelector('.projects-button').addEventListener('click', () => {
  window.location.href = 'projects.html'; // Update this URL as needed
});

document.querySelector('.cv-button').addEventListener('click', () => {
  window.location.href = 'cv.html'; // Update this URL to your actual CV location
});
