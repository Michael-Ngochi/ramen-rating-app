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
      image: "https://img.freepik.com/free-photo/delicious-ramen-dark-surface_1150-41971.jpg?t=st=1742242207~exp=1742245807~hmac=ec7cff413e24e9399f551f1e9e2be8d87906e4f9c63b162208e92eeb6d1a26fc&w=996",
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

  ramenArray = [...ramens]; //main array for displaying
  let currentramen; //traking current ramen

  //function to display to UI
  function displayRamens() {
    document.querySelector("#ramen-menu-images").innerHTML = "";
    document.querySelector(
      "#featured"
    ).style.backgroundImage = `url(holder.png)`;
    let topImage = document.querySelector("#ramen-menu-images");
    ramenArray.forEach((ramen) => {
      let img = document.createElement("img");
      img.className = "Top-Images";

      let deletebtn = document.querySelector("#deletebtn");
      let editbtn = document.querySelector("#editbtn");

      img.addEventListener("click", () => {
        switchtoCreatenew();
        document.querySelector(
          "#featured"
        ).style.backgroundImage = `url(holder.png)`;
        currentramen = ramen;

        document.querySelector("#ramenName").innerHTML = ramen.name;
        document.querySelector("#Resturant").innerHTML = ramen.restaurant;
        if (ramen.rating) {
          document.querySelector(
            "#Rating"
          ).innerHTML = `Rating<br>${ramen.rating}/5`;
        } else {
          document.querySelector("#Rating").innerHTML = `Rating not available`;
        }
        if (ramen.comment) {
          document.querySelector(
            "#Comment"
          ).innerHTML = `Comment<br>${ramen.comment}`;
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
      //console.log(img.id);
    });
  }

//function to add a new ramen object
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
      
      ramenArray = [...ramenArray, newRamen];
      console.log(ramenArray);
      document.getElementById("rateForm").reset();
      displayRamens();
    });
  }

//function to remove current ramen object
  deletebtn.addEventListener("click", () => {
    if (currentramen) {
      if (window.confirm(`Are you sure you want to delete ${currentramen.name}?`)) {
        ramenArray = ramenArray.filter((ramen) => ramen.id !== currentramen.id);
        displayRamens();
        document.getElementById("rateForm").reset();
      }
    } else alert("You have not selected a ramen");
    displayRamens();
  });

  editbtn.addEventListener("click", () => {
    if(currentramen){
      document.getElementById("formName").value=currentramen.name
      document.getElementById("formResturant").value=currentramen.restaurant
      document.getElementById("formImage").value=currentramen.image
      document.getElementById("formRating").value=currentramen.rating
      document.getElementById("formComment").value=currentramen.comment
      document.getElementsByClassName("new-ramen").innerHTML="Edit this ramen"
// function to hide submit button and show edit button
      function switchtoedit(){
      document.getElementById("submitbtn").style.display="none";
      document.getElementById("submit-edit-btn").style.display="block";
      }


      for(let ramen of ramenArray){
        if (ramen.id===currentramen.id){
          switchtoedit();
          let sumbitChange=document.querySelector("#submit-edit-btn")
           //console.log(ramen)
          sumbitChange.addEventListener("click",()=>{
            event.preventDefault();
            ramen.name=document.querySelector("#formName").value;
            ramen.restaurant=document.querySelector("#formResturant").value;
            ramen.image=document.querySelector("#formImage").value;
            ramen.rating=document.querySelector("#formRating").value;
            ramen.comment=document.querySelector("#formComment").value;
            switchtoCreatenew();
            displayRamens();
          })

        }
        console.log(ramen)
      }
   console.log(currentramen.name)}
   else alert ("You have not selected a Ramen");
  });

  //function to hide edit button, show submit button and reset the form fields
  function switchtoCreatenew(){
    document.getElementById("submitbtn").style.display="block";
    document.getElementById("submit-edit-btn").style.display="none";
    document.getElementById("rateForm").reset();
    }

  function main() {
    displayRamens();
    addSubmitListener();
  }

  main();
});
