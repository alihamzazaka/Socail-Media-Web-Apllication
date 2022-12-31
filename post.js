function ftech() {
  fetch("https://dummyapi.io/data/v1/post?limit=10", {
    headers: {
      "app-id": "637afb0084d988e691c42703",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.data);
      document.querySelector('.post').innerHTML=''
      const aly = data.data.map((item, i) => {
        console.log(item);
        return `<div class="post-container">
        <div class="inner-post-container">
        <div class="owner ">
        <img src=${item.owner.picture} alt"img" class="rounded-circle" >
        <p class="flname ">${item.owner.firstName}</p>
        <p class="flname">${item.owner.lastName}</p> 
        </div>
        <img src=${item.image} alt"img" class="post-image"><br>
        <div class="activity">
        <div>
        <i class="fa-solid fa-heart fa-2x activity"></i>
        <p class="activity">Like</p>
        </div>
        
        <div><i class="fa-regular fa-comment fa-2x activity" style="margin-left:10px;"></i><p style="margin-left:12px; cursor:pointer"  onClick="fetchComment(event, post${i})" >comment</p>
        
        </div>
  
  
       <div> <i class="fa-regular fa-share-from-square fa-2x activity "style="margin-left:5px;" ></i>
       <p class="activity">Share</p>
       </div>
       
       </div>
        <h5 class="border-0  likes"> </i> ${item.likes} Likes</h5>
        <div class="owner1">
        <p class="flname ">${item.owner.firstName}</p>
        <p class="flname">${item.owner.lastName}</p> 
        <p class="text-post">${item.text} </p>
        </div>
        <br>
        <div style="margin-left:20px">
        <button type="button" class="btn btn-outline-info button-post-tag ">${item.tags[0]}</button>
        <button type="button" class="btn btn-outline-info button-post-tag ">${item.tags[1]}</button>
        <button type="button" class="btn btn-outline-info button-post-tag ">${item.tags[2]}</button>
        </div>
        <div  id=post${i}>
            <input class="enter-comment" type="text"  placeholder="Enter Your Comment Here" >
             </div>
        
        <p class="time">${item.publishDate}</p><div>
        <div>
        </div>
        </div>
        </div>
        </div>       

        </div>
        `;
      })
    
      document.querySelector(".post").insertAdjacentHTML("afterbegin", aly);
    });
}

ftech();

function fetchComment(e, id) {
  fetch(
    "https://dummyapi.io/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10",
    {
      headers: { "app-id": "637afb0084d988e691c42703" },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.data);
      const comments = data.data.map((item) => {
        let alyy = `<div class="comment bg-white" style="width:350px;">

          ${item.message}
  
      </div>
   
      `;
        console.log(alyy);
        console.log(id);
        document;
        id.insertAdjacentHTML("beforebegin", alyy);
      });
      join();
    });
}
























// function ftchco(id) {
//   fetch(
//     "https://dummyapi.io/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10",
//     {
//       headers: {
//         "app-id": "637afb0084d988e691c42703",
//       },
//     }
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);

//       const alyy = data.data.map((item) => {
//         let hamza = `
//         <div>
//         <p >${item.message}</p>
//         </div>
        
//         `;
//         document;
//         id.insertAdjacentHTML("beforebegin", hamza);
//       });
//     });
// }
// ftchco();
