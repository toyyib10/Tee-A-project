let imageUrl;
let product_name;
let product_image;
let product_price;
let quantity_available;
let product_detail;
let category;

const preview = (e) => {
  preView.type ="button";
  product_name = productName.value;
  product_image = productImage.value;
  product_price = productPrice.value;
  quantity_available = quantityAvailable.value;
  product_detail = productDetails.value;
  category = cat.value;
  if (product_name != "" && product_image != "" && product_price != "" && quantity_available != "" && product_detail != ""){
    e.preventDefault()
    preView.type ="button";
    previewName.innerText = product_name;
    previewPrice.innerText = product_price;
    previewQuantity.innerText = `${quantity_available} item left`;
    previewImage.src = imageUrl;
    nothingDisp.style.display = "none";
    productPreview.style.display = "block";
  } 
  else {
    if(category == ""){
      preView.type = "button"
      nothingDisp.innerText = "Choose a category"
    }
    else{
      preView.type = "submit";
      nothingDisp.style.display = "none"
      productPreview.style.display = "block";
    }
  }
}

const change = (event) => {
  imageUrl = URL.createObjectURL(event.target.files[0]);
}