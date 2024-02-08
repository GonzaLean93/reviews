//local reviews data
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/43/Foto_Perfil.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Foto_Perfil_.jpg",
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxzcqfpQSUfKfPjt4CmzjYdOJyiEF72_E-obKHmOiWa2NG0viek6RK6BY5k5PxCkxGnpQ&usqp=CAU",
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Trist%C3%A1n_Ulloa_Perfil.jpg/640px-Trist%C3%A1n_Ulloa_Perfil.jpg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati dolorem iste architecto laborum quaerat, aut eius vero nobis unde esse a sed molestias eos odit provident consectetur exercitationem"
    },
];

//select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

//set starting item

let currentItem = 0;

// load initial item

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

//show person based on item

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

// show next person 

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length-1) {
        currentItem = 0;
    }
    showPerson();
})

// show prev person

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length-1;
    }
    showPerson();
})

//show random person

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
})
