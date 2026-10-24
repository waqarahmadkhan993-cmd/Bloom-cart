const products = [
  {id:1, title:"Classic Red Roses", category:"Roses", price:45, rating:4.9, img:"https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600"},
  {id:2, title:"White Lily Bouquet", category:"Lilies", price:38, rating:4.8, img:"https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600"},
  {id:3, title:"Sunflower Bliss", category:"Sunflowers", price:32, rating:4.7, img:"https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=600"},
  {id:4, title:"Pink Tulip Gift Box", category:"Tulips", price:52, rating:4.9, img:"https://images.unsplash.com/photo-1497582343816-155d699dba79?w=600"},
  {id:5, title:"Orchid Elegance", category:"Orchids", price:65, rating:5.0, img:"https://images.unsplash.com/photo-1561120150-6d060a2d5c39?w=600"},
  {id:6, title:"Mixed Spring Gift", category:"Gift", price:29, rating:4.6, img:"https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=600"},
];

const grid = document.getElementById('productGrid');
const badge = document.getElementById('cartBadge');
const searchInput = document.getElementById('searchInput');
let cartCount = 0;

function render(list){
  grid.innerHTML = list.map(p=>`
    <div class="card">
      <img src="${p.img}" alt="${p.title}" loading="lazy">
      <div class="card-body">
        <span class="category">${p.category}</span>
        <div class="title">${p.title}</div>
        <div class="meta">
          <span class="price">$${p.price}</span>
          <span class="rating">★ ${p.rating}</span>
        </div>
        <button class="add-btn" onclick="addToCart()">Add to Cart</button>
      </div>
    </div>
  `).join('');
}

function addToCart(){
  cartCount++;
  badge.textContent = cartCount;
  badge.style.transform = 'scale(1.3)';
  setTimeout(()=>badge.style.transform='scale(1)',150);
}
window.addToCart = addToCart;

searchInput.addEventListener('input', ()=>{
  const q = searchInput.value.toLowerCase();
  const filtered = products.filter(p=> p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  render(filtered);
});

render(products);
