function foo() {
  console.log("Hello, World!");
  if (document.getElementById("myButton")) {
    document.getElementById("myButton").innerHTML = "Button Clicked!";
    console.log("Button was clicked!");
  }
}

let productsList = [];
function loadProducts() {
  productsList = [
    {
      name: "Apple",
      price: "65k",
      location: "New York",
    },
    {
      name: "Samsung",
      price: "80k",
      location: "Los Angeles",
    },
  ];
}

function loadData() {
  loadProducts();
  document.getElementById("data").innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Index</th>
        <th>Product</th>
        <th>Price</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      ${productsList
        .map(
          (product, index) =>
            `
      <tr>
        <td>${index + 1}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.location}</td>
      </tr>
      `
        )
        .join("")}
    </tbody>
  </table>
  `;
}

loadData();
