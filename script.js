let products = [];

fetch('products.json')
  .then(res => res.json())
  .then(data => {
    products = data;
    render(products);
  });

function render(list) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  list.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p class="price">${p.price}₫</p>
        <button onclick="contact()">Liên hệ</button>
      </div>
    `;
  });
}

document.getElementById("search").addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(keyword)
  );
  render(filtered);
});

function contact() {
  window.open("https://zalo.me/0342508034", "_blank");
}