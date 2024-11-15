const canvas = document.getElementById('figure');

class ClothingItem {
  constructor(src, x, y, scale) {
    this.image = new Image();
    this.image.src = src;
    this.x = x;
    this.y = y;
    this.scale = scale;
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.image.width * this.scale, this.image.height * this.scale);
  }
}

// Create clothing items
const hat = new ClothingItem("http://www.pngall.com/wp-content/uploads/2017/05/Topper-Hat-PNG-Image-File.png", 100, 50, 0.1);
const shirt = new ClothingItem("https://www.pngarts.com/files/5/Plain-Red-T-Shirt-Transparent-Image.png", 100, 100, 0.1);
const pants = new ClothingItem("http://www.pngmart.com/files/7/Denim-Jean-PNG-Transparent-Image.png", 100, 150, 0.1);

// Array to store clothing items
const clothingItems = [hat, shirt, pants];

const imageElement = new Image(); // Create a new Image object
imageElement.src = "https://howtodrawforkids.com/wp-content/uploads/2022/12/7-stickman-drawing-tutorial.jpg"; // Set image source

const clothingGrid = document.querySelector('.tabs-content');



//ON LOAD DO THIS!! 
imageElement.onload = function() { // Handle image loading
  const canvas = document.getElementById('figure');
  const ctx = canvas.getContext('2d');

  // Draw the image onto the canvas
  ctx.drawImage(imageElement, 0, 0, canvas.width, canvas.height);

  clothingItems.forEach(item => { // Use forEach with correct spelling
    const clothingItemElement = document.createElement('div');
    clothingItemElement.classList.add('clothing-item');
  
    // Add image to the clothing item element
    const imageElement = document.createElement('img');
    imageElement.style.width = '100px';
    imageElement.style.height = '100px';
    imageElement.src = item.image.src;
    clothingItemElement.appendChild(imageElement);
  
    clothingGrid.appendChild(clothingItemElement);
  });


  clothingGrid.addEventListener('click', (event) => {
    const clickedItem = event.target.closest('.clothing-item');
    console.log("clickGrid");
    console.log(clickedItem)
    if (clickedItem) {
      const itemIndex = Array.from(clothingGrid.children).indexOf(clickedItem);
      const selectedItem = clothingItems[itemIndex];
  
      // Get the canvas context
      const canvas = document.getElementById('figure');
      const ctx = canvas.getContext('2d');
  
      // Calculate position for clothing item on character
      const x = 90; // Adjust the x-coordinate
      const y = 0; // Adjust the y-coordinate

  
      // Draw the selected clothing item on top
      ctx.drawImage(selectedItem.image, x, y, 100, 100);
    }
  });
}

