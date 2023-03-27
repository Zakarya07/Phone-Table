let products = document.querySelectorAll("table tbody tr");
let image_container = document.querySelector("div.image_show");
let image_procuct = document.querySelector("div.image_show img");
let hashtag = document.querySelector(".hashtag p");
const cardContainer = document.querySelector(".basket_container");
const productNumber = document.querySelector("span.product_number");
const cardMessage = document.querySelector("span.message");
let table = document.querySelector("table");
const sound = new Audio();


products.forEach(product => {

    let productPositionY = product.getBoundingClientRect().top;

    product.addEventListener("click", function () {


        // Set the position of the div that hang the image of product based on the top of the clicked <tr> (using getBoundingClientRect native object js)
        image_container.style = `top:${productPositionY + 30}px;`;
        // Get the value of the dataset property  & Set the attribute (src) of the image with the dataset that we get
        image_procuct.setAttribute("src", `${this.dataset.url}`);
        // Add the class active that set the opacity to 1, unabling the visibility of the current image
        image_container.classList.add("active");

        // Get the value of the dataset property  & insert it in the hashtag div that is made for
        hashtag.textContent = `#${this.dataset.phoneBrand}`;
        //Set the opacity back to 1
        hashtag.parentElement.style = "opacity:1;";
        // Check if the brand is known or not => if not, insert the below message error "unknown phone"
        if (this.dataset.phoneBrand == undefined) {
            hashtag.textContent = "#BACKZ ! (uknw phn) 🤔";
        }
    })

    product.addEventListener("dblclick", () => {
        sound.src = "sounds/SoundCardAdd.mp3";
        sound.play();
        addToBasket();
    })

})


let count = 0;

function addToBasket() {
    count++;
    productNumber.textContent = count;
    if (count !== 5) {
        cardMessage.textContent = "Produit ajouté au panier";
        console.log(count);
    }
    if (count == 5) {
        cardMessage.textContent = "Et de 5 !";
    } else if (count == 10) {
        cardMessage.textContent = "C'est une GROOOOOOSSE commande que vous faites la !";
    }

    setTimeout(() => {
        cardMessage.textContent = "";
    }, 5000);

}