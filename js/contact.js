
const mobilePov = document.querySelector('.mobileMenu');
const navMenu = document.querySelector('.ulList')
const articleTitle = document.querySelector('.articleTitle');
const articleImage = document.querySelector('.article-Image');
const articleText = document.querySelector('.article-Text');
const body = document.querySelector('.body')
const active = document.querySelector('.active')
const mainLogo = document.querySelector(".mainLogo")
const submit = document.querySelector(".sub")

function homepage(){
    window.location.href='/index.html'
}


    mobilePov.addEventListener('click',()=>{   
        body.classList.toggle('fixed')
        
})








//SENDING EMAIL CODE
function sendMail(){
    let params ={
        from_name : document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    };
const serviceId = "service_qxgsdwm"
const templateId = "template_v2moqep"

emailjs.send(serviceId, templateId,params)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res)
        alert('MESSAGE SEND')
    })
    .catch((err)=>{
        console.log(err)
    })
};







//Responsive menu
mobilePov.addEventListener('click',()=>{
    mobilePov.classList.toggle('active');
    navMenu.classList.toggle('active')
 })
   




