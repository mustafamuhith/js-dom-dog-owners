
console.log(Object.keys(data[0]))

console.log(data[1].isGoodDog)
// Show names of dogs

const dogList = document.querySelector(".dogs-list");
const dogSection = document.querySelector('.main__dog-section');
const h2 = document.querySelector('h2');
const image = document.createElement('img');
const bio = document.createElement('p');
const p = document.createElement('p');
const isGoodDog = document.createElement('button');



function showDogs(){
    data.forEach(dog => {
        const li = document.createElement("li");
        li.classList.add('dogs-list__button');
        li.innerText = dog.name;
        li.addEventListener('click', ()=>{
            // render data with dog variable
            renderData(dog);           
        }) 
        dogList.appendChild(li);
    });
     
}

showDogs()

function renderData(dog){
    h2.innerText = dog.name;
    bio.innerText = dog.bio;
    image.setAttribute('src', dog.image);
    image.setAttribute('width', '150');
    image.setAttribute('height', '150');
    // div.appendChild(isGoodDog)
    dogSection.appendChild(image);
    dogSection.appendChild(bio);
    dogSection.appendChild(p);
    dogSection.appendChild(isGoodDog);
    dogQuality(dog)
}

function dogQuality(dog){
    
    if (dog.isGoodDog){
            p.innerText = "is naughty? no";
            isGoodDog.innerText = "Good Dog";
            isGoodDog.addEventListener('click', ()=>{
                isGoodDog.innerHTML="Bad Dog"
                p.innerText = "is naughty? yes";
            })
        }
        else{
            p.innerText = "is naughty? yes";
            isGoodDog.innerText = "Bad Dog";
            isGoodDog.addEventListener('click', ()=>{
                isGoodDog.innerHTML="Good Dog"
                p.innerText = "is naughty? no";
            })
        }    
}

