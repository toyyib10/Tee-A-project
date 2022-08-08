let imageUrl;
let product_name;
let product_image;
let product_price;
let quantity_available;
let product_detail;
let category;
let item = [];

const preview = (e) => {
  preView.type ="button";
  product_name = productName.value;
  product_image = productImage.value;
  product_price = productPrice.value;
  quantity_available = quantityAvailable.value;
  product_detail = productDetails.value;
  category = cat.value;
  if (product_name != "" && product_image != "" && product_price != "" && quantity_available != "" && product_detail != "" && category != ""){
    e.preventDefault()
    preView.type ="button";
    previewName.innerText = product_name;
    previewPrice.innerText = product_price;
    previewQuantity.innerText = `${quantity_available} item left`;
    previewImage.src = imageUrl;
    nothingDisp.style.display = "none";
    productPreview.style.display = "block";
    addItem.style.display = "block";
  } 
  else {
    if(category == ""){
      preView.type = "button";
      productPreview.style.display = "none";
      addItem.style.display = "none";
      nothingDisp.innerText = "Choose a category";
      nothingDisp.style.display = "block";
    }
    else{
      preView.type = "submit";
      nothingDisp.style.display = "none"
      productPreview.style.display = "block";
    }
  }
}

const itemAdd = () => {
  unsaved_item = {
    product_name,
    product_image : imageUrl,
    product_detail,
    product_price,
    quantity_available,
    category
  }
  item.unshift(unsaved_item)
  localStorage.saved_item = JSON.stringify(unsaved_item)
}
const change = (event) => {
  imageUrl = URL.createObjectURL(event.target.files[0]);
}