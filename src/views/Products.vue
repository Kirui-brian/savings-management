<template>
    <div>
        <h1>Savings Product Management</h1>

        <h2>Create Product</h2>
        <form @submit.prevent="createProduct">
            <label for="productName">Product Name:</label>
            <input type="text" id="productName" v-model="newProduct.name" required>

            <label for="productDescription">Product Description:</label>
            <input type="text" id="productDescription" v-model="newProduct.description" required>

            <button type="submit">Create</button>
        </form>

        <h2>Edit Products</h2>
        <ul>
            <li v-for="product in products" :key="product.id">
                <h3>{{ product.name }}</h3>
                <p>{{ product.description }}</p>
                <button @click="editProduct(product.id)">Edit</button>
                <button @click="deleteProduct(product.id)">Delete</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Products',
    data() {
        return {
            newProduct: {
                name: "",
                description: ""
            },
            products: [
                // Sample data - you can fetch products from backend or use an API to manage them
                { id: 1, name: "Education Savings", description: "Save for educational expenses" },
                { id: 2, name: "Personal Savings", description: "Save for personal goals" },
                { id: 3, name: "Vacation Savings", description: "Save for your dream vacation" }
            ]
        };
    },
    methods: {
        createProduct() {
            // Generate a unique ID for the new product
            const newProductId = this.products.length + 1;

            // Create a new product object
            const newProduct = {
                id: newProductId,
                name: this.newProduct.name,
                description: this.newProduct.description
            };

            // Save the new product to your data store
            this.products.push(newProduct);

            // Reset the form
            this.newProduct.name = "";
            this.newProduct.description = "";
        },
        editProduct(productId) {
            // Redirect or implement the logic for editing a specific product
            // You can navigate to a separate page or show a modal for editing
            console.log("Edit product with ID:", productId);
        },
        deleteProduct(productId) {
            // Find the index of the product with the given ID
            const productIndex = this.products.findIndex(product => product.id === productId);

            // If the product exists, remove it from the products array
            if (productIndex !== -1) {
                this.products.splice(productIndex, 1);
            }
        }
    }
};
</script>
