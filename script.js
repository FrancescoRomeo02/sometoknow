const container = document.querySelector('.container')
const card = document.querySelector('.card')

const title = document.querySelector('.title')
const plant = document.querySelector('.plant img')
const info = document.querySelector('.info h3')
const buy = document.querySelector('.buy button')
const colors = document.querySelector('.colors')

const color = document.getElementsByClassName('color')
const arraycolors = ['--red','--blue','--green', '--pink' ]
//change color
function get_id(btn){
    for (let index = 0; index <= 3; index++) {
        color[parseInt(index)].classList.remove('active')    
    }
    color[parseInt(btn.id)].classList.add('active')
    color[parseInt(btn.id)].style.active.background = `var(${arraycolors[btn.id]})`
}


container.addEventListener('mousemove', (e) => {
    let xAsix = (window.innerWidth / 2 - e.pageX) /25;
    let yAsix = (window.innerHeight / 2 -e.pageY)/25;
    card.style.transform = `rotateY(${xAsix}deg) rotateX(${yAsix}deg)`;

});

//text animate in
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    //pop out
    plant.style.transform = 'translateZ(150px) rotateZ(-10deg)';
    title.style.transform = 'translateZ(125px)';
    info.style.transform = 'translateZ(100px)';
    colors.style.transform = 'translateZ(75px)';
    buy.style.transform = 'translateZ(150px)';


});

//text animate Out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    plant.style.transform = 'translateZ(0px) rotateX(0)';
    title.style.transform = 'translateZ(0)';
    info.style.transform = 'translateZ(0)';
    colors.style.transform = 'translateZ(0)';
    buy.style.transform = 'translateZ(0)';
});


