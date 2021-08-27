const reviews=[
  {
    id:1,
    name:"Susan Smith",
    job:"Web Developer",
    img:
    "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
    "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
},
{
  id:2,
  name:"Anna Johnson",
  job:"Web Designer",
  img:
  "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
  text:
  "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
},
{
  id:3,
  name:"Peter Johnson",
  job:"Intern",
  img:
  "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  text:
  "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
},
{
  id:4,
  name:"Bill Anderson",
  job:"CEO",
  img:
  "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  text:
  "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
}
];

/***select items */

const img=document.getElementById('person-id');
const nameOfPerson=document.getElementById('person-name');
const job=document.getElementById('job');
const info=document.getElementById('info');

const nextBtn=document.getElementById('next-button');
const preBtn=document.getElementById('prev-button');
const randomBtn=document.getElementById('random-btn');

/**set starting item */

let curruntItem=0;


/**Loading Items */

loadItems(nameOfPerson);

/**load initial items */

function loadItems(){
  let items=reviews[curruntItem];

  
  img.src=items.img;
  job.innerHTML=items.job;
  nameOfPerson.innerHTML=items.name;
  info.innerHTML=items.text;


}

/**show next person */

nextBtn.addEventListener('click',()=>{
  curruntItem++;

  if(curruntItem> reviews.length-1){
    curruntItem=reviews.length-1;
  }loadItems(curruntItem);

});


/**show previos item */

preBtn.addEventListener('click',()=>{
  curruntItem--;
  if(curruntItem<0){
    curruntItem=0;
  }loadItems(curruntItem);
});

/**random click users */

randomBtn.addEventListener('click',()=>{
  curruntItem=Math.floor(Math.random() * reviews.length);
  loadItems(curruntItem);
});