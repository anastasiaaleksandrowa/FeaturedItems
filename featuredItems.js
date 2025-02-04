document.addEventListener("DOMContentLoaded", () => {
    const featuredItemsContainer = document.getElementById("featured-items");

    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                const itemDiv = document.createElement("div");
                itemDiv.classList.add("featured-item");
                itemDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.title}" />
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>
                    <button>Add to Cart</button>
                `;
                featuredItemsContainer.appendChild(itemDiv);
            });
        })
        .catch(error => console.error('Error loading products:', error));
});