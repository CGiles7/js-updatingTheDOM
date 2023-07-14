import "./styles.css";

const allArticles = document.querySelectorAll("article")
/**
  Write the addheadings() function here
*/
function addHeadings() {
  allArticles.forEach((article) => {
  const heading = document.createElement('h2')
  const content = article.innerText
  heading.textContent = '${content}'
  article.prepend(heading) 
})
}

/**
  Write the styleTutorialsAndArticles() function here
*/
function styleTutorialsAndArticles() {
  allArticles.forEach((article) => {
  const content = article.innerText
  const word = 'tutorial'
  if (content.toLowerCase().includes(word)) {
    article.classList.add("tutorial")
  } else {
    article.classList.add("article")
  }
})
}

/**
  Write the separateAllTutorials() function here
*/
function separateAllTutorials() {
  const tutorials = [];
  allArticles.forEach((article) => {
    const title = article.textContent
    if (title.toLowerCase().includes('tutorial')) {
      tutorials.push(article)
      article.remove()
    } if (tutorials.length > 0) {
      const tutorialsSection = document.createElement('section')
      tutorialsSection.className = 'tutorials'
      tutorials.forEach((tutorial) => {
      tutorialsSection.appendChild(tutorial)
    })
    const containerDiv = document.querySelector('div.container')
    containerDiv.appendChild(tutorialsSection)
    }
  })
}




/**
  No need to edit the following
*/
function main() {
  addHeadings();
  styleTutorialsAndArticles();
  separateAllTutorials();
}

main();
