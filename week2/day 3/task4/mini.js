const ProductApp = (() => {

    // -------- STATE --------
    const state = {
        products: [
            "Laptop",
            "Smartphone",
            "Headphones",
            "Keyboard",
            "Mouse",
            "Monitor",
            "Tablet",
            "Smartwatch"
        ],
        filteredProducts: []
    };

    // -------- SELECTORS --------
    const searchInput = document.getElementById("searchInput");
    const productList = document.getElementById("productList");

    // -------- RENDER FUNCTION --------
    const renderProducts = (products) => {
        productList.innerHTML = "";

        if (products.length === 0) {
            productList.innerHTML = `<p class="no-results">No Results Found</p>`;
            return;
        }

        products.forEach(product => {
            const li = document.createElement("li");
            li.textContent = product;
            productList.appendChild(li);
        });
    };

    // -------- FILTER FUNCTION --------
    const filterProducts = (searchText) => {
        state.filteredProducts = state.products.filter(product =>
            product.toLowerCase().includes(searchText.toLowerCase())
        );

        renderProducts(state.filteredProducts);
    };

    // -------- EVENT HANDLER --------
    const handleEvents = (event) => {

        // Input Event for Real-Time Filtering
        if (event.target.id === "searchInput") {
            filterProducts(event.target.value);
        }

        // Event Delegation Example (Click on Product)
        if (event.target.tagName === "LI") {
            alert(`You selected: ${event.target.textContent}`);
        }
    };

    // -------- INIT FUNCTION --------
    const init = () => {
        state.filteredProducts = [...state.products];
        renderProducts(state.filteredProducts);

        document.addEventListener("input", handleEvents);
        productList.addEventListener("click", handleEvents);
    };

    return { init };

})();

ProductApp.init();