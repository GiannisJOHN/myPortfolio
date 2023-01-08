import pageContent from "./page-content.js"
const pageButtons = document.querySelectorAll('.nav-btn-container > li')

function render(page) {
    const view = document.querySelector('.view')
    view.innerHTML = pageContent[page]
}

window.addEventListener('load', () => {
    render('projects')
})

for (let i = 0; i < pageButtons.length; i++) {
    pageButtons[i].addEventListener('click', () => {
        render(pageButtons[i].innerText.toLowerCase())
    })
}












