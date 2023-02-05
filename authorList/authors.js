
const mobilePov = document.querySelector('.mobileMenu');
const navMenu = document.querySelector('.ulList')
const active = document.querySelector('.active')
const body = document.querySelector('.body')
//Responsive menu
function homepage(){
    window.location.href='/index.html'
}
mobilePov.addEventListener('click',()=>{
    mobilePov.classList.toggle('active');
    navMenu.classList.toggle('active')
 })
 mobilePov.addEventListener('click',()=>{   
    body.classList.toggle('fixed')
    
})

   
fetch('author.json')
.then(response => response.json())
.then(data => showAuthor(data));


const authorName = document.querySelector('.name')
const authorTitle = document.querySelector('.authorTitle')
const aboutAuthor = document.querySelector('.aboutAuthor')

function showAuthor(data){
    authorName.append(data[0].author)
    authorTitle.append(data[0].title)
    aboutAuthor.append(data[0].about)
}