console.log(Object.keys(data[0]))
// Show names of dogs

const dogList = document.querySelector(".dogs-list");

function showDogs(){
    data.forEach(dog => {
        const li = document.createElement("li");
        li.classList.add('dogs-list__button');
        li.innerText = dog.name;
        li.addEventListener('click', ()=>{
            console.log(dog.name)
            // delete the previous do profile
            // render data with dog variable
            renderData(dog)
        })
        dogList.appendChild(li);
    });
     
}

showDogs()

function renderData(dog){
    const dogSection = document.querySelector('.main__dog-section')
    const h2 = document.querySelector('h2');
    const image = document.createElement('img');
    const bio = document.createElement('p')
    const isGoodDog = document.createElement('button')
    // data.forEach(dog => {
        h2.innerText = dog.name;
        bio.innerText = dog.bio;
        isGoodDog.innerText = dog.isGoodDog;
        image.setAttribute('src', dog.image);
        image.setAttribute('width', '150')
        image.setAttribute('height', '150')
        dogSection.appendChild(image);
        dogSection.appendChild(bio);
        dogSection.appendChild(isGoodDog)
    // });
}

// renderData()

dogList.addEventListener('click', () => {
    // const dogName = document.querySelector('.dogs-list__button')
    // console.log(dogName.textContent)

});
