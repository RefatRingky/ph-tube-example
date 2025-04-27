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
     .then((data) => displayVideos(data.videos));

}

const displayVideos =(videos) =>{
    const videoContainer = document.getElementById("videos")
    videos.forEach((video) =>{
       console.log(video)
       const card=document.createElement("div")
       card.classList ="card "
       card.innerHTML=
       `
        
      <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>

       `
       videoContainer.append(card);
    })
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