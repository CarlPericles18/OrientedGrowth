
const mobilePov = document.querySelector('.mobileMenu');
const navMenu = document.querySelector('.ulList')
const articleTitle = document.querySelector('.articleTitle');
const articleImage = document.querySelector('.article-Image');
const articleText = document.querySelector('.article-Text');
const body = document.querySelector('.body')
const active = document.querySelector('.active')
const mainLogo = document.querySelector(".mainLogo")
const thankYouDrop = document.querySelector(".thankYouDrop")

function homepage(){
    window.location.href='/index.html'
}


    mobilePov.addEventListener('click',()=>{   
        body.classList.toggle('fixed')
        
})

//Responsive menu
mobilePov.addEventListener('click',()=>{
    mobilePov.classList.toggle('active');
    navMenu.classList.toggle('active')
 })
   



 
 const formName = document.getElementById("name");
 const formEmail = document.getElementById("email")
 const formSubject = document.getElementById("subject")
 const formMessage = document.getElementById("message")
 const nameError = document.querySelector('.nameError')
 const emailError = document.querySelector('.emailError')
 const subjectError = document.querySelector('.subjectError')
 const messageError = document.querySelector('.messageError')
 const submit = document.querySelector(".sub")
 const errors = document.querySelector('.errors');

// function mailErrors(){
    
//     if(formName.value === ''){
//         const el = document.createElement('p')
//         el.innerText  = 'Please enter a name'
//         el.style.color = 'RED'
//         nameError.append(el)
//     }else if(formEmail.value === ''){
//         const el = document.createElement('p')
//         el.innerText  = 'Please enter a valid Email'
//         el.style.color = 'red'
//         emailError.append(el)
//     }else if(formSubject === ''){
//         el.innerText  = 'Please enter a subject'
//         el.style.color = 'red'
//         subjectError.append(el)
//     }else if(formMessage === ''){
//         el.innerText  = 'Please enter a message'
//         el.style.color = 'red'
//         messageError.append(el)
//     }else{
//         el.innerText  ='Please fill the information above'
//         el.style.color = 'red'
//         // nameError.append(el)
//     }

// }

// SENDING EMAIL CODE
function sendMail(){
    let params ={
        from_name: formName.value,
        email_id: formEmail.value,
        subject: formSubject.value,
        message: formMessage.value
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
        thankYouDrop.style.display = 'block';
        body.style.position ='fixed'
    })
    .catch((err)=>{
        console.log(err)
    })
};

submit.addEventListener('click',()=>{
    sendMail()
})


// Close popupBtn 
function closeBtn(){
    thankYouDrop.style.display = 'none';
    body.style.position =''
}








