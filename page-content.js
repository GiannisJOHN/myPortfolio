const about = /*html*/`
            <div class='about'>
                <p>
                Hi, my name is Ioannis Mentesidis. I like coding and music production.
                </p>
                <div class='aboutImageContainer'>
                    <img class='aboutImage' src="./coding.svg" alt="">
                        <span>+</span>
                    <img class='aboutImage' src="./headphone.svg" alt="">
                </div>
            </div>
`

const projects = function (info) {
        let projects = info.map((eachItem) => {
            return /*html*/ `
                <div class="project">
                    <h3 class="project-title">${eachItem.projectName}</h3>
                    <p class="project-text">
                        ${eachItem.description}
                    </p>
                    <div class="project-btn-container">
                        <button class="btn btn-netlify">
                            <a href=${eachItem.netlifyLink} target="_blank" rel="noopener noreferrer"'>
                                <img src="./netlify.svg" alt="">
                                netlify
                            </a>
                        </button>
                        <button class="btn btn-github">
                            <a href=${eachItem.githubLink} target="_blank" rel="noopener noreferrer">
                                <img class="btn-img" src="./github.svg" alt="">
                                github
                            </a>
                        </button>
                    </div>
                </div>`
        })

        return /*html*/`
                <div class="project-container">
                ${
                    projects.reduce((accumulator, currentValue) => {
                        return accumulator + currentValue
                    }, '')
                }
                </div>`
}

const contact = /*html*/`
            <div>
                <p>The best and fastest way to contact me:</p>
                <br />
                <h2>- iomentesidis@gmail.com -</h2>
            </div>
`

const certifications = /*html*/`
            <ul class='certifications'>
                <li class='certifications-item'>
                    <i>Udacity:</i>
                    <a href="https://confirm.udacity.com/CYLXXQUL" target="_blank" rel="noopener noreferrer">
                     Intermediate JavaScript Nanodegree [LINK]</a>
                    <br>
                    <img style='max-width: 400px; width: 100%; margin-top: 10px;' src="./udacity.png" alt="">
                </li>
                <li class='certifications-item'>
                    <i>Sololearn:</i>
                    <a href="https://www.sololearn.com/certificates/course/en/21303874/1024/landscape/png" target="_blank" rel="noopener noreferrer">JavaScript [LINK]</a>
                    <br>
                    <img style='max-width: 400px; width: 100%; margin-top: 10px;' src="./sololearn-javascript.png" alt="">
                </li>
            </ul>
`
const projectsInfo = [
    {
    projectName: 'Planets',
    description: 'A single page application built with React.js.',
    netlifyLink: 'https://planets-by-ioannis.netlify.app/',
    githubLink: 'https://github.com/GiannisJOHN/planets'
    },
    {
    projectName: 'Shortly',
    description: 'A vanilla JavaSript + Bootstrap5 website.',
    netlifyLink: 'https://ioannis-shortly.netlify.app/',
    githubLink: 'https://github.com/GiannisJOHN/landing-page-Shortly'
    }
]


const pageContent = {
    about : about,
    projects : projects(projectsInfo),
    contact : contact,
    certifications : certifications
}

export default pageContent