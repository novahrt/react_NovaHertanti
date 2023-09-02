function showErrorField(element) {
    element.style.border = "1px solid red";
    const errorIcon = document.createElement("i");
    errorIcon.className = "bi bi-x-circle-fill text-danger";
    element.insertAdjacentElement("afterend", errorIcon);
}

function clearErrorField(element) {
    element.style.border = "";
    const errorIcon = element.nextElementSibling;
    if (errorIcon && errorIcon.className.includes("bi-x-circle-fill")) {
        errorIcon.remove();
    }
}

function validateForm() {
    let productName = document.getElementById("productName");
    let productCategory = document.getElementById("productCategory");
    let productPrice = document.getElementById("productPrice");
    let selectedFreshness = document.querySelector('input[name="freshness"]:checked');
    let additionalDescription = document.getElementById("additionalDescription");

    if (productName.value.match(/[#@\/{}]/)) {
        alert("Name must not contain symbols.");
        showErrorField(productName);
        return false;
    }

    if (productName.value.length < 10 || productName.value.length > 25) {
        alert("Last Name must not exceed 25 characters and cannot be empty.");
        showErrorField(productName);
        return false;
    }

    if (!productName.value.trim()) {
        alert("Product Name cannot be empty.");
        showErrorField(productName);
        return false;
    }

    clearErrorField(productName);

    if (productCategory.value === "choose") {
        alert("Please select a Product Category.");
        showErrorField(productCategory);
        return false;
    }

    clearErrorField(productCategory);

    if (!selectedFreshness) {
        alert("Please select one Product Freshness option.");
        freshnessOptions.forEach(option => showErrorField(option));
        return false;
    }

    freshnessOptions.forEach(option => clearErrorField(option));

    if (!additionalDescription.value.trim()) {
        alert("Additional Description cannot be empty.");
        showErrorField(additionalDescription);
        return false;
    }

    clearErrorField(additionalDescription);

    if (!/^\d+$/.test(productPrice.value)) {
        alert("Product Price must be a number and cannot be empty");
        showErrorField(productPrice);
        return false;
    }

    if (!productPrice.value.trim()) {
        alert("Product Price cannot be empty.");
        showErrorField(productPrice);
        return false;
    }

    clearErrorField(productPrice);

    return true;
}

const freshnessOptions = document.querySelectorAll('input[name="freshness"]');
freshnessOptions.forEach(option => {
    option.addEventListener("click", function() {
        freshnessOptions.forEach(otherOption => {
            otherOption.checked = false;
            clearErrorField(otherOption);
        });
        this.checked = true;
        clearErrorField(this);
    });
});

submitButton.addEventListener("click", function(event) {
event.preventDefault(); // Mencegah pengiriman form langsung
if (validateForm()) {
// Jika validasi sukses, lanjutkan dengan mengirimkan form ke server
// document.querySelector("form").submit();

// Ambil semua data yang diisi
const productName = document.getElementById("productName").value;
const productCategory = document.getElementById("productCategory").value;
const selectedFreshness = document.querySelector('input[name="freshness"]:checked').value;
const additionalDescription = document.getElementById("additionalDescription").value;
const productPrice = document.getElementById("productPrice").value;

// Tampilkan data dengan alert
const alertMessage = `Product Name: ${productName}\nProduct Category: ${productCategory}\nProduct Freshness: ${selectedFreshness}\nAdditional Description: ${additionalDescription}\nProduct Price: ${productPrice}`;
alert(alertMessage);
}
});