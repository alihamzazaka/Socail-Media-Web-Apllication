

function ftech() {
  fetch("https://dummyapi.io/data/v1/tag?limit=10", {
    headers: {
      "app-id": "637afb0084d988e691c42703",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);

      const aly = data.data.map((item) => {
        return `
        

        <button type="button" class="btn btn-transparent" onclick="fetchtag()">${item}</button>
        
        `;
         join();
      });

      document.querySelector(".tags").innerHTML = aly.slice(4,30);
    });
   
}

ftech();
//postbytag
function fetchtag() {
  fetch("https://dummyapi.io/data/v1/tag/water/post?limit=10", {
    headers: {
      "app-id": "637afb0084d988e691c42703",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);

      const aly = data.data.map((item) => {
        return `<div class="post-container">
        <div class="inner-post-container">
        <div class="owner ">
        <img src=${item.owner.picture} alt"img" class="rounded-circle" >
        <p class="flname ">${item.owner.firstName}</p>
        <p class="flname">${item.owner.lastName}</p> 
        </div>
        
        <img src=${item.image} alt"img" class="post-image"><br>
        <div class="activity">
        <i class="fa-solid fa-heart fa-2x "></i>
        <div>
        <button onclick="ftchco()">
        eheheheh</button>
        </div>
        <i class="fa-regular fa-comment fa-2x activity "></i>
       
        
        <i class="fa-regular fa-share-from-square fa-2x activity"></i>
        </div>
        <h5 class="border-0  likes"> </i> ${item.likes} Likes</h5>
        <div class="owner1">
                <p class="flname ">${item.owner.firstName}</p>
        <p class="flname">${item.owner.lastName}</p> 
         <p class="text-post">${item.text} </p>
        </div>
        
        <br>
        
        <button type="button" class="btn btn-transparent ">${item.tags}</button>
        <p class="time">${item.publishDate}</p><div>
        <div class="comments"></div>
        </div>
         </div>       

        </div>
        `;
           join();
      });
      document.querySelector(".postbytag").innerHTML = aly;
    });
 
}
fetchtag();
