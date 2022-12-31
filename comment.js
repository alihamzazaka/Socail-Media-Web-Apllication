// function ftech() {
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

//       const aly = data.data.map((item) => {
//         return `
//         <div>
//       <p >${item.message}</p>
//         </div>
//         `;
//       });
//       document.querySelector(".comment").innerHTML = aly;
//     });
// }
