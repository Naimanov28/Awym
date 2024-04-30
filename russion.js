



const block = document.getElementById('block');
const title = document.getElementById('title');
const slogan = document.getElementById('slogan');
const text = document.getElementById('text');


const titles = ['Technology', 'impressive', 'inspiring', 'marketing'];
const slogans = ['for Your Success', 'design', 'development', 'for Your Success'];
const texts = [
    `
    We will help you to promote your business online 
    and reach new heights in the field of marketing.
    
    `,

    `
    We offer creative solutions and high-tech 
    services to help your business thrive.
    `,

    `
    Our designers create unique and captivating visual 
    solutions that will leave your customers amazed.
    `,

    `
    Our programmers have the skills and experience to turn your ideas 
    into functional and efficient web products.
    `,

    `
    We will help you to promote your business online 
    and reach new heights in the field of marketing.
    `,
];

function changeContent(i) {
    title.textContent = titles[i];
    slogan.textContent = slogans[i];
    text.textContent = texts[i];
}

function animateContent() {
   let i = 0;

   function showNextContent() {
    changeContent(i);

    title.classList.add('show');
    slogan.classList.add('show');
    text.classList.add('show');

    setTimeout(() => {
        title.classList.remove('show');
        slogan.classList.remove('show');
        text.classList.remove('show');

        i = (i + 1) % titles.length;
        setTimeout(showNextContent, 2000);

    })

   }

   showNextContent();
}


animateContent();







const blocks = document.querySelector('.services_blocks');

const BLOCK_DATA = [
{svg: './svg/website.svg', title: 'WEBSITE DESIGN', id: 1, text: 'Наши креативные дизайнеры создадут уникальный и визуально привлекательный вид вашего веб-проекта, который оставит неизгладимое впечатление на ваших клиентов.'},
{svg: './svg/logocreate.svg', title: 'LOGO DESIGN AND BRANDING', id: 2, text: 'Мы создадим отличительный логотип для вашего бренда и разработаем брендбук, который поможет вам сохранить единый стиль и индивидуальность.'},
{svg: './svg/development.svg', title: 'WEBSITE DEVELOPMENT AND CODING', id: 3, text: 'Наши программисты создадут функциональный и адаптивный веб-сайт, отвечающий вашим потребностям и целям.'},
{svg: './svg/mobile.svg', title: 'MOBILE APP DEVELOPMENT', id: 4, text: 'Мы специализируемся на разработке мобильных приложений, которые сделают ваш бизнес более доступным для пользователей смартфонов.'},
{svg: './svg/bot.svg', title: 'Telegram Bot Development', id: 5, text: 'Наши специалисты создадут чат-ботов, которые улучшат ваше общение с клиентами через Telegram.'},
{svg: './svg/menejment.svg', title: 'TURNKEY PROJECT DEVELOPMENT', id: 6, text: 'Мы предлагаем комплексные услуги по разработке проектов, начиная от идеи и заканчивая продвижением, что позволяет вам сосредоточиться на важных аспектах вашего бизнеса.'},
{svg: './svg/marketing.svg', title: 'WEBSITE PROMOTION AND MARKETING', id: 7, text: 'Наша команда маркетологов поможет вам продвинуть ваш бизнес в Интернете, привлечь аудиторию и добиться лидирующих позиций на рынке.'},
{svg: './svg/made.svg', title: 'MADE BY ORDER', id: 8, text: 'Мы работаем с различными секторами бизнеса и готовы помочь вам добиться успеха в Интернете. Если у вас есть какие-либо особые требования или идеи относительно наших услуг, пожалуйста, не стесняйтесь обращаться к нам.'},
];


BLOCK_DATA.forEach(block => {
const blockElement = document.createElement('div');
blockElement.classList.add('block');
blockElement.innerHTML = `
    <img class="block-image" src="${block.svg}" alt="${block.svg}">
    <h2 class="block-title">${block.title}</h2>
    <p class="block-text">${block.text}</p>
  `;

  blocks.appendChild(blockElement);
});



/// portfolio

const train = document.querySelector('.portfolio-train');

for (let i = 0; i < 14; i++) {
const h3 = document.createElement('h3');
h3.classList.add('portfolio-titles');

h3.textContent = 'PORTFOLIO';
train.appendChild(h3);
}


// portfolio blocks

document.addEventListener('DOMContentLoaded', function () {
const portfolioBlocks = document.querySelector('.portfolio-blocks');
const design = document.querySelector('#design');
const web = document.querySelector('#web');
const mobile = document.querySelector('#mobile');

const chertaWeb = document.querySelector('.web');
const chertaDesign = document.querySelector('.design');
const chertaMobile = document.querySelector('.mobile');

const grow_block = document.querySelector('.grow-block')

const mobile_block = [
    './image/mobile01.jpg',
    './image/mobile02.jpg',
    './image/mobil03.jpg',
    './image/mobile04.jpg',
];

const web_block = [
    './image/web1.jpg',
    './image/web2.jpg',
    './image/web3.jpg',
    './image/web4.jpg',
    './image/web5.jpg',
    './image/web6.jpg',
    './image/web7.jpg',
    './image/web8.jpg',
];

const design_block = [
    './image/mobile01.jpg',
    './image/mobile02.jpg',
    './image/mobil03.jpg',
    './image/mobile04.jpg',
    './image/web1.jpg',
    './image/web2.jpg',
    './image/web3.jpg',
    './image/web4.jpg',
];



const arrays = [mobile_block, web_block, design_block];

function activateButton(button, cherta) {
    // Удаляем класс 'pult' у всех кнопок
    mobile.classList.remove('pult');
    web.classList.remove('pult');
    design.classList.remove('pult');
    
    chertaMobile.classList.remove('pult');
    chertaWeb.classList.remove('pult');
    chertaDesign.classList.remove('pult');
    // Добавляем класс 'pult' только к активной кнопке
    cherta.classList.add('pult');
    button.classList.add('pult');
  }

function changeImages (array) {
    portfolioBlocks.innerHTML = '';

    array.forEach(res => {
        const designBlock = document.createElement('div');
    
        designBlock.classList.add('portfolio-block');
    
        designBlock.innerHTML = `
            <a href="https://t.me/awymportfolio" class="design-image_link">
                <img class="design-image" src="${res}" alt="${res}">
            </a>
        `
    
        portfolioBlocks.appendChild(designBlock);
    
    });
}

mobile.addEventListener('click', function () {
    activateButton(mobile, chertaMobile);
    currentArray = mobile_block;
    changeImages(currentArray);
  });

  web.addEventListener('click', function () {
    activateButton(web, chertaWeb);
    currentArray = web_block;
    changeImages(currentArray);
  });

  design.addEventListener('click', function () {
    activateButton(design, chertaDesign);
    currentArray = design_block;
    changeImages(currentArray);
  });

});




const portfolioBlocks = document.querySelector('.portfolio-blocks');

const design_blockStart = [
'./image/mobile01.jpg',
'./image/mobile02.jpg',
'./image/mobil03.jpg',
'./image/mobile04.jpg',
'./image/web1.jpg',
'./image/web2.jpg',
'./image/web3.jpg',
'./image/web4.jpg',
];



design_blockStart.forEach(res => {
    const designBlock = document.createElement('div');

    designBlock.classList.add('portfolio-block');

    designBlock.innerHTML = `
        <a href="https://t.me/awymportfolio" class="design-image_link">
            <img class="design-image" src="${res}" alt="${res}">
        </a>
    `

    portfolioBlocks.appendChild(designBlock);

});


/// grow 


const grow = document.querySelector('.grow-text_container');


const growData = [
{title: 'Backend Developer', slogan: 'Требования:', text: `
     
Опыт разработки, знание языков программирования.
`},

{title: 'Frontend Internship', slogan: 'Требования:', text: `
    
Желание учиться и развиваться в веб-разработке.
`},

{title: 'Client Acquisition Manager', slogan: 'Требования:', text: `
    
Активный поиск новых клиентов, хорошие коммуникативные навыки, способность решать проблемы.
`},
];


growData.forEach(data => {
const dataBlock = document.createElement('div');
dataBlock.classList.add('grow-block');

dataBlock.innerHTML = `
    <h2 class="grow-block_title">${data.title}</h2>
    <p class="grow-block_text">${data.slogan} </br> ${data.text}</p>
`;



grow.prepend(dataBlock);
});



//////   application 



const form = document.getElementById('form');
const TOKEN = '6900481976:AAG05hyMRiQCLFRyFnieydIJcmZyGzZ1UZQ';
const CHAT_ID = '6455973385';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;


form.addEventListener('submit', (event) => {
event.preventDefault()
;

if(form.name.value === '' || form.email.value === '' || form.message.value === '') {
alert('Заполните все поле ввода');
}else {
alert('Ваше заявление успешно отправлено');

let message1 = `<b>Заявка с сайта</b>\n`
message1 += `<b>name: </b> ${form.name.value}\n`
message1 += `<b>email: </b> ${form.email.value}\n`
message1 += `<b>message: </b> ${form.message.value}\n`

axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message1
}).then(response => {
    console.log('Сообщение успешно отправлено в Telegram:', response.data);
    // Дополнительные действия при успешной отправке
})
.catch(error => {
    console.error('Ошибка при отправке сообщения в Telegram:', error);
    // Дополнительные действия при ошибке
});
}
});


///// power show images

const POWERIMAGES = [
'image/imageawym1.png',
'image/imageawym2.png',
'image/imageawym3.png',
'image/imageawym4.png',
'image/imageawym5.png',
];

const powerImage = document.querySelector('.power-image');

function changeImageInPowerImage (img) {
powerImage.src = POWERIMAGES[img];
}


function animateImage () {
let i = 0;

function showImageContent () {
    changeImageInPowerImage(i);

    powerImage.classList.add('image-show');


    setTimeout(() => {
        powerImage.classList.remove('image-show');


        i = (i + 1) % POWERIMAGES.length;
        setTimeout(showImageContent, 2000);

    })
}

showImageContent();

}

animateImage();



////// komanda 

const komanda = [
{
    name: 'Калматов Бообек',
     text: `frontend developer senior`,
     img: './image/komanda1.png'
},

{
    name: 'Калматов Бообек',
     text: `frontend developer senior`,
     img: './image/komanda2.png'
},

{
    name: 'Калматов Бообек',
     text: `frontend developer senior`,
     img: './image/komanda3.png'
},

{
    name: 'Калматов Бообек',
     text: `frontend developer senior`,
     img: './image/komanda4.png'
},
];


const komandaContainer = document.querySelector('.komanda-container');

komanda.forEach(res => {
const komandaBlock = document.createElement('div');
komandaBlock.classList.add('komanda-block');
komandaBlock.innerHTML = `
    <img class="komanda-block_img" src="${res.img}" alt="${res.img}"/>
    <h3 class="komanda-block_name">${res.name}</h3>
    <p class="komanda-block_text">${res.text}</p>
`

komandaContainer.appendChild(komandaBlock);
});




////// 


const anchers = document.querySelectorAll('a[href*="#"]');

for (let ancher of anchers) {
ancher.addEventListener('click', function (e) {
    e.preventDefault();

    const blockId = ancher.getAttribute('href');
    document.querySelector('' + blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})
}