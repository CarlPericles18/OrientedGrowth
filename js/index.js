
const mobilePov = document.querySelector('.mobileMenu');
const navMenu = document.querySelector('.ulList')
const articleTitle = document.querySelector('.articleTitle');
const articleTitle2 = document.querySelector('.articleTitle2');
const articleTitle3 = document.querySelector('.articleTitle3');
const articleTitle4 = document.querySelector('.articleTitle4');
const articleTitle5 = document.querySelector('.articleTitle5');
const articleTitle6 = document.querySelector('.articleTitle6');
const articleTitle7 = document.querySelector('.articleTitle7');
const articleTitle8 = document.querySelector('.articleTitle8');
const articleImage = document.querySelector('.article-Image');
const articleText = document.querySelector('.article-Text');
const body = document.querySelector('.body')
const active = document.querySelector('.active')


function homepage(){
    window.location.href='/index.html'
}

mobilePov.addEventListener('click',()=>{   
        body.classList.toggle('fixed')
        
})

const authorName= Array.from(document.querySelectorAll('.author-name'))
const date= Array.from(document.querySelectorAll('.date'))
fetch('./index.json')
.then(response => response.json())
.then(data => showInfo(data))
.catch((err)=>{
    console.log(err)
})


function showInfo(data){
    articleTitle.append(data[0].title)
    articleTitle2.append(data[1].title)
    articleTitle3.append(data[2].title)
    articleTitle4.append(data[3].title)
    articleTitle5.append(data[4].title)
    articleTitle6.append(data[5].title)
    articleTitle7.append(data[6].title)
    articleTitle8.append(data[7].title)
    authorName.forEach((Element)=>{
        Element.append(data[0].name)
    })
    date.forEach((Element)=>{
        Element.append(data[0].date)
    })

}

// LAZY LOAD
const targets = document.querySelectorAll('img');

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-img');

        img.setAttribute('src', src);

        observer.disconnect();
      }
    });
  });

  io.observe(target)
};

targets.forEach(lazyLoad);


//Responsive menu
mobilePov.addEventListener('click',()=>{
    mobilePov.classList.toggle('active');
    navMenu.classList.toggle('active')
 })
   