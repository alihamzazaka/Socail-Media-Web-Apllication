function ftech() {
  fetch("https://dummyapi.io/data/v1/user?limit=10", {
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
        console.log(item);
        return `
 
        <div class="owner2 ">
        <img src=${item.picture} alt"img" class="rounded-circle" >
        <p class="flname2 ">${item.firstName}</p>
        <p class="flname2">${item.lastName}</p> 
        </div>
        `;
      });
      document.querySelector(".friend").innerHTML = aly.slice(2);
    });
}

ftech();






