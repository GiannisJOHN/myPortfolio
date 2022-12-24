import pageContent from "./page-content.js"

function render(page) {
    const view = document.querySelector('.view')
    view.innerHTML = pageContent[page]
}

const pageButtons = document.querySelectorAll('.nav-btn-container > li')

for (let i = 0; i < pageButtons.length; i++) {
    pageButtons[i].addEventListener('click', () => {
        render(pageButtons[i].innerText.toLowerCase())
    })
}