console.log("sucessful")

const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    //2 - convert promise to json
    .then((res) => res.json())
    //3 - send data to display
    .then((data) => displayCategories(data.categories));

}
const loadVideos = () => {
  fetch(" https://openapi.programming-hero.com/api/phero-tube/videos")
    //2 - convert promise to json
    .then((res) => res.json())
    //3 - send data to display
    .then((data) => displayVideos(data.videos));

}

const loadCategoryVideos = (id) => {
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    //2 - convert promise to json
    .then((res) => res.json())
    //3 - send data to display
    .then((data) => displayVideos(data.category));
}

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos")
  videoContainer.innerHTML="";

  if(videos.length == 0){
    videoContainer.classList.remove("grid")
    videoContainer.innerHTML=`
    <div class="min-h-[300px] flex flex-col gap-5 justify-center items-center">
       <img src="assets/Icon.png"  />
    </div>
    <h2 class="text-center text-xl font-bold">No Content Here In This Category</h2>
    
    `;
    return; 
  }
  else{
    videoContainer.classList.add("grid")
  }
  videos.forEach((video) => {
    console.log(video)
    const card = document.createElement("div")
    card.classList = "card "
    card.innerHTML =
      `
        
      <figure class="h-[200px] relative">
    <img
      src=${video.thumbnail}
      class="h-full w-full object-cover"
      alt="Shoes" />
      ${video.others.posted_date?.length == 0 ? "" : `
        <span class="absolute  right-2  bottom-2 rounded text-white bg-black p-1">${video.others.posted_date}</span>
        `
      }
       
  </figure>
      <div
        class="px-0 py-2 flex gap-2">
        <div>
        <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture}/>
        </div>
        <div>
        <h2 class="font-bold">
          ${video.title}
        </h2>
        <div class="flex items-center gap-2">
        <p class="text-gray-400">${video.authors[0].profile_name}</p>
        ${video.authors[0].verified == true ? `<img class="h-5 w-5" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" />
          `: ""}
        
        </div>
      </div>
      </div>

       `
    videoContainer.append(card);
  })
}

const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories")
  categories.forEach((item) => {
    console.log(item)

    //  create a button
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
        <button  onclick="loadCategoryVideos(${item.category_id})"   class="btn">
         ${item.category}
        </button>
        
        `

    // const button = document.createElement("button")
    // button.classList="btn"
    // button.innerText = item.category

    // add button to the category container

    categoryContainer.append(buttonContainer);

  })
}

loadCategories();
loadVideos()