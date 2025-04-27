console.log("sucessful")

const loadCategories=() =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    //2 - convert promise to json
    .then((res) => res.json())
     //3 - send data to display
     .then((data) => displayCategories(data.categories));

}
const loadVideos=() =>{
    fetch(" https://openapi.programming-hero.com/api/phero-tube/videos")
    //2 - convert promise to json
    .then((res) => res.json())
     //3 - send data to display
     .then((data) => console.log(data.videos));

}

const displayVideos =(videos) =>{
    
}

const displayCategories =(categories)=>{
    const categoryContainer = document.getElementById("categories")
    categories.forEach((item) =>{
         console.log(item)

        //  create a button

        const button = document.createElement("button")
        button.classList="btn"
        button.innerText = item.category

        // add button to the category container

        categoryContainer.append(button);
    })
}

loadCategories();
loadVideos()