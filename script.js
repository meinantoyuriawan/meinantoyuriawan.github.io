const button = document.getElementsByClassName('bulb');
const nav = document.querySelector('nav')
const navFont = document.getElementsByClassName('nav-main')
const h1 = document.getElementsByTagName('h1')
const p = document.getElementsByTagName('p')
const cv = document.getElementsByClassName('cv')
const proj = document.getElementsByClassName('proj-container')
const contact = document.getElementsByClassName('contact-size')

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

const darkTheme = ()=> {
    nav.classList.toggle('lightBack');
    for (let i=0; i< navFont[0].getElementsByTagName('a').length; i++){
        console.log(i)
        navFont[0].getElementsByTagName('a')[i].classList.toggle('darkfont')
    }
    button[0].classList.toggle('darkfont')
    // jumbo
    // bigtext[0].classList.toggle('lightfont')
    document.body.classList.toggle('darkBack')
    for (let i=0; i< h1.length; i++){
        h1[i].classList.toggle('lightfont')
    }
    for (let i=0; i< p.length; i++){
        p[i].classList.toggle('lightfont')
    }
    cv[0].getElementsByTagName('a')[0].classList.toggle('lightfont')

    for (let i=0; i< proj[0].getElementsByTagName('li').length; i++){
        proj[0].getElementsByTagName('li')[i].classList.toggle('darkProj')
    }
    for (let i=0; i< contact.length; i++) {
        contact[i].classList.toggle('lightfont')
    }
    app.classList.toggle('lightfont')
}
button[0].addEventListener("click", darkTheme)


typewriter.typeString('Hi, I am Ato')
    .pauseFor(2000)
    .deleteAll()
    .typeString('안녕 아토입니다')
    .pauseFor(2000)
    .deleteAll()
    .start();