const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
console.log(posts);


// contenitore dei post
const containerElement = document.getElementById('container');

posts.forEach((post) => {
    let immagineProfilo;
    /*   let imgProv; */
    if (post.author.image === null) {
        /*  immagineProfilo = imgProv */
        immagineProfilo = genereteImgProv(post.author.name)
    } else {
        immagineProfilo = `<img class="profile-pic" src="${post.author.image}" alt="Phil Mangione">`  
    }
    let user_Name = post.author.name
    let likes = post.likes
    let data = post.created
    let descrizione = post.content
    let media = post.media
    let id = post.id
    
    containerElement.insertAdjacentHTML('beforeend', generetePost(immagineProfilo, user_Name, likes, data, descrizione, media, id))
});

function generetePost(icon, name, likes, data, descrizione, media, id) {
    const markup = `<div class="post">
    <div class="post__header">
    <div class="post-meta">                    
        <div class="post-meta__icon">
            ${icon}                 
            </div>
        <div class="post-meta__data">
        <div class="post-meta__author">${name}</div>
        <div class="post-meta__time">${data}</div>
        </div>                    
    </div>
</div>
<div class="post__text">${descrizione}</div>
<div class="post__image">
<img src="${media}" alt="">
</div>
<div class="post__footer">
<div class="likes js-likes">
<div class="likes__cta">
<a class="like-button  js-like-button" href="#" data-postid="${id}">
<i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
<span class="like-button__label">Mi Piace</span>
</a>
</div>
<div class="likes__counter">
Piace a <b id="${id}" class="js-likes-counter">${likes}</b> persone
</div>
</div> 
</div>            
</div>`
    return markup
}

function genereteImgProv(nomeUtente) {
    // nomeUtente = "Luca Formicola"
    // generare un array tramite metodo slpit
    const nome = nomeUtente.split(' ');
    // creare variabile nome e variabile cognome 
    let userName = nome[0]
    // userName='Luca'
    let lastName = nome[1]
    // prendere la prima lettera della scriga sia di username che llast name e salvarla in un variabile ciascuno
    /*  console.log(userName);
     console.log(lastName); */
    const fistChartName = userName.charAt(0);
    console.log(fistChartName);
    const lastChartName = lastName.charAt(0);
    console.log(lastChartName);

    let fistCaracter = `<div class="profile-pic">${fistChartName} ${lastChartName}</div>`
    console.log(fistCaracter);
    return fistCaracter

}











//destrutturazione elemento post
//destrutturazione proprietà author
/* const { name: nameAuthor } = author; */
/*    //author name
   elementHTML.querySelector('.post-meta__author').innerHTML = nameAuthor;
   //date
   console.log('created', created)
   const createdAt = newDate.toLocaleDateString()(created);
   elementHTML.querySelector('.post-meta__time').innerHTML = createdAt;
   //description
   elementHTML.querySelector('.post__text').innerHTML = content;
   //image
   elementHTML.querySelector('.post__image > img').src = media;
   //likes
   const elementLikeCounter = elementHTML.querySelector('.js-likes-counter');
   elementLikeCounter.id = `like-counter-1${id}`;
   elementLikeCounter.innerHTML = likes; */