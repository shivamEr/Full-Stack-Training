const names = document.getElementById('name');
const category = document.getElementById('category');
const price = document.getElementById('price');
const stock = document.getElementById('stock');
const brand = document.getElementById('brand');
const description = document.getElementById('description');

const tableBody = document.getElementById('productList');

document.getElementById('productForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const product = {
        name: names.value,
        price: Number(price.value),
        stock: Number(stock.value),
        brand: brand.value,
        category: category.value,
        description: description.value
    };

    // Clear the form fields
    names.value = "";
    price.value = "";
    stock.value = "";
    brand.value = "";
    category.value = "";
    description.value = "";

    await addProduct(product);
});

document.getElementById('searchInput').addEventListener('input', function (e) {
    const keyword = e.target.value.toLowerCase();
    const rows = document.querySelectorAll("#productList tr");

    rows.forEach(row => {
        const nameCell = row.children[0].innerText.toLowerCase();
        row.style.display = nameCell.includes(keyword) ? "" : "none";
    });
});

// Add product to backend
const addProduct = async (product) => {
    try {
        const response = await fetch('http://localhost:3000/api/product/add', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });

        if (!response.ok) {
            throw new Error('Failed to add product');
        }

        const data = await response.json();
        console.log("Product added:", data);

        addToTable(data);
    } catch (error) {
        console.error("Error adding product:", error.message);
    }
};

const getAllProduct = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/product/');
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        const products = await response.json();
        console.log("Products fetched:", products);

        products.forEach(product => addToTable(product));
    } catch (error) {
        console.error("Error fetching products:", error.message);
    }
};

// Add a single product to the table
const addToTable = (product) => {
    const row = document.createElement('tr');
    row.setAttribute('id', product._id);

    row.innerHTML = `
        <td class="p-3 border-b">${product.name}</td>
        <td class="p-3 border-b">${product.category}</td>
        <td class="p-3 border-b">₹${product.price}</td>
        <td class="p-3 border-b">${product.stock}</td>
        <td class="p-3 border-b">
            <button class="text-indigo-600 hover:underline mr-3" onclick="editProduct('${product._id}')">Edit</button>
            <button class="text-red-600 hover:underline" onclick="deleteProduct('${product._id}')">Delete</button>
        </td>
    `;

    tableBody.appendChild(row);
};


// Delete krega from both backend and frontend's table
const deleteProduct = async (productId) => {
    try {
        const response = await fetch(`http://localhost:3000/api/product/delete/${productId}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            alert("Failed to delete product.");
            return;
        }

        // Remove the row from the DOM
        const row = document.getElementById(productId);
        if (row) {
            row.remove();
        }

        console.log(`Product with ID ${productId} deleted successfully.`);
    } catch (error) {
        console.error("Error deleting product:", error.message);
    }
};


const editProduct = async (productId) => {
    try {
        const product = {
            name: names.value,
            price: Number(price.value),
            stock: Number(stock.value),
            brand: brand.value,
            category: category.value,
            description: description.value
        };

        // Clear the form fields
        names.value = "";
        price.value = "";
        stock.value = "";
        brand.value = "";
        category.value = "";
        description.value = "";

        const apiEdit = `http://localhost:3000/api/product/update/${productId}`;

        const response = await fetch(apiEdit, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });

        if (!response.ok) {
            throw new Error("Failed to edit product.");
        }

        const data = await response.json();

        // Remove the row from the DOM
        const row = document.getElementById(productId);
        if (row) {
            row.remove();
        }

        addToTable(data);

        console.log("Product edited successfully");
    } catch (error) {
        console.error("Error editing product:", error);
        alert("An error occurred while editing the product. Please try again.");
    }
};


// Initaily run hoga
getAllProduct();
