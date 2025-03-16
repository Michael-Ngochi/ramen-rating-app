document.addEventListener("DOMContentLoaded",()=>{

const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
 ];

 ramenArray=[...ramens]
 function displayRamens() {
    let topImage = document.querySelector("#ramen-menu-images");

    ramenArray.forEach(ramen => {
      let img = document.createElement("img");
      img.className="Top-Images"

      img.addEventListener("click", () => {
        //alert(`You clicked on: ${ramen.name} from ${ramen.restaurant}`);
        document.querySelector("#ramenName").innerHTML=ramen.name
        document.querySelector("#Resturant").innerHTML=ramen.restaurant
        document.querySelector("#Rating").innerHTML=`Rating:${ramen.rating}`
        document.querySelector("#Comment").innerHTML=`Comment:${ramen.comment}`
        document.querySelector("#featured").style.backgroundImage= `url(${ramen.image})`
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

document.addEventListener("submit",()=>{
   event.preventDefault();
   //alert(ramens.length+1);
   let newRamen={}
    newRamen.id=ramenArray.length+1,
    newRamen.name=document.querySelector("#formName").value
    newRamen.resturant=document.querySelector("#formResturant").value
    newRamen.image=document.querySelector("#formName").value
    newRamen.rating=document.querySelector("#formRating").value
    newRamen.comment=document.querySelector("#formComment").value
console.log(newRamen);
console.log([...ramenArray,newRamen])

ramenArray=[...ramenArray,newRamen]
})



displayRamens();


//console.log(displayRamens());

console.log(ramens);
})
