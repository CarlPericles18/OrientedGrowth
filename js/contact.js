
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

  
 const validEmail = (email) =>{
    let formatEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return formatEmail.test(String(email).toLowerCase());
}

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
    })
    .catch((err)=>{
        console.log(err)
    })
};

function mailErrors(){
    let emailValues = formEmail.value;
    if((formName.value === '' || formEmail.value === '' || formSubject.value === '' || formMessage.value === '')){
        errors.innerHTML = 'Please fill up the information above'
        errors.style.color = 'red' 
        messageError.innerHTML = ''
    }else if(validEmail(emailValues)){
        sendMail()
        errors.innerHTML = ''
        messageError.innerHTML = ''
    }else{
        errors.innerHTML = ''
        messageError.innerHTML = 'Invalid Email'
        messageError.style.color = 'red'
    }
}

submit.addEventListener('click',()=>{
    mailErrors()
})


// Close popupBtn 
function closeBtn(){
    thankYouDrop.style.display = 'none';
    body.style.position =''
};