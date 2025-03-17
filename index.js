document.addEventListener("DOMContentLoaded", () => {
  const ramens = [
    {
      id: 1,
      name: "Shoyu Ramen",
      restaurant: "Ichiran",
      image: "shoyu.jpg",
      rating: 5,
      comment: "Delicious!",
    },
    {
      id: 2,
      name: "Miso Ramen",
      restaurant: "Menya",
      image: "miso.jpg",
      rating: 4,
      comment: "Very flavorful!",
    },
    {
      id: 3,
      name: "Tonkotsu Ramen",
      restaurant: "Ramen-ya",
      image: "tonkotsu.jpg",
    },
    {
      id: 4,
      name: "Spicy Miso Ramen",
      restaurant: "Ippudo",
      image: "naruto.jpg",
      rating: 4,
      comment: "Rich and spicy broth!",
    },
    {
      id: 5,
      name: "Shio Ramen",
      restaurant: "Santouka",
      image: "gyukotsu.jpg",
      rating: 5,
      comment: "Light and perfectly balanced!",
    },
    {
      id: 6,
      name: "Tantanmen",
      restaurant: "Afuri",
      image: "",
      rating: 4,
      comment: "Nutty and flavorful!",
    },
    {
      id: 7,
      name: "Tsukemen",
      restaurant: "Rokurinsha",
      image: "tsukemen.png",
      rating: 5,
      comment: "Thick noodles, amazing dipping sauce!",
    },
  ];

  ramenArray = [...ramens];
  let currentramen;
  function displayRamens() {
    document.querySelector("#ramen-menu-images").innerHTML = "";
    let topImage = document.querySelector("#ramen-menu-images");
    ramenArray.forEach((ramen) => {
      let img = document.createElement("img");
      img.className = "Top-Images";

      let deletebtn = document.querySelector("#deletebtn");
      let editbtn = document.querySelector("#editbtn");

      img.addEventListener("click", () => {
        document.querySelector(
          "#featured"
        ).style.backgroundImage = `url(holder.png)`;
        currentramen = ramen;

        document.querySelector("#ramenName").innerHTML = ramen.name;
        document.querySelector("#Resturant").innerHTML = ramen.restaurant;
        if (ramen.rating) {
          document.querySelector(
            "#Rating"
          ).innerHTML = `Rating:<br>${ramen.rating}/5`;
        } else {
          document.querySelector("#Rating").innerHTML = `Rating not available`;
        }
        if (ramen.comment) {
          document.querySelector(
            "#Comment"
          ).innerHTML = `Comment:<br>${ramen.comment}`;
        } else {
          document.querySelector(
            "#Comment"
          ).innerHTML = `Comment not available`;
        }

        document.querySelector(
          "#featured"
        ).style.backgroundImage = `url(${ramen.image})`;
      });
      if (ramen.image) {
        img.src = ramen.image;
        img.id = ramen.id;
      } else {
        img.src = "holder.png";
      }

      img.alt = ramen.name;
      topImage.appendChild(img);
      console.log(img.id);
    });
  }

  function addSubmitListener() {
    document.addEventListener("submit", () => {
      event.preventDefault();
      let newRamen = {};
      (newRamen.id = ramenArray.length + 1),
        (newRamen.name = document.querySelector("#formName").value);
      newRamen.restaurant = document.querySelector("#formResturant").value;
      newRamen.image = document.querySelector("#formImage").value;
      newRamen.rating = document.querySelector("#formRating").value;
      newRamen.comment = document.querySelector("#formComment").value;
      //console.log(newRamen);
      //console.log([...ramenArray,newRamen])
      ramenArray = [...ramenArray, newRamen];
      console.log(ramenArray);
      displayRamens();
    });
  }

  deletebtn.addEventListener("click", () => {
    if (currentramen) {
      if (window.confirm(`Are you sure you want to delete this?`)) {
        ramenArray = ramenArray.filter((ramen) => ramen.id !== currentramen.id);
        displayRamens();
      }
    } else alert("You have not selected a ramen");
    displayRamens();
  });

  editbtn.addEventListener("click", () => {});

  function main() {
    displayRamens();
    addSubmitListener();
  }

  main();
});
