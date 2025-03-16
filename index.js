document.addEventListener("DOMContentLoaded",()=>{

const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
 ];

 function displayRamens() {
    let topImage = document.querySelector("#ramen-menu");

    ramens.forEach(ramen => {
      let img = document.createElement("img");
      img.className="Top-Images"

      img.addEventListener("click", () => {
        //alert(`You clicked on: ${ramen.name} from ${ramen.restaurant}`);
        document.querySelector("#ramenName").innerHTML=ramen.name
        document.querySelector("#Resturant").innerHTML=ramen.restaurant
        document.querySelector("#Rating").innerHTML=`Rating:${ramen.rating}`
        document.querySelector("#Comment").innerHTML=`Comment:${ramen.comment}`


    });
      if (ramen.image) {
        img.src = ramen.image;
        img.id=ramen.id
      } else {
        img.src = "default.jpg";
      }

      img.alt = ramen.name;
      topImage.appendChild(img);
      console.log(img.id);
    });
  }



displayRamens();


//console.log(displayRamens());

console.log(ramens);
})
