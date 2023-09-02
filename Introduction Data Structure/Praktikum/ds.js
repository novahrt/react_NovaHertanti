    // Variabel untuk menghitung nomor produk
    let productNumber = 1005; 

    // Mengambil tombol Insert
    const insertBtn = document.getElementById("insertBtn");

    // Mengambil tombol Delete
    const deleteBtn = document.getElementById("deleteBtn");

    // Mengambil tombol Search
    const searchBtn = document.getElementById("searchBtn");

    // Mengambil input pencarian
    const searchInput = document.getElementById("search");

    // Mengambil tbody dari tabel
    const productTableBody = document.getElementById("productTableBody");

    // Menambahkan event listener untuk tombol Insert
    insertBtn.addEventListener("click", function () {
        // Membuat baris baru untuk produk yang akan ditambahkan
        const newRow = document.createElement("tr");

        // Menambahkan data produk baru ke dalam baris
        newRow.innerHTML = `
            <td>${productNumber}</td>
            <td>New Product</td>
            <td>Category</td>
            <td>Image</td>
            <td>Freshness</td>
            <td>Description</td>
            <td>Price</td>
        `;

        // Menambahkan baris produk baru ke dalam tabel
        productTableBody.appendChild(newRow);

        // Menambahkan 1 ke nomor produk untuk produk berikutnya
        productNumber++;
    });

    // Menambahkan event listener untuk tombol Delete
    deleteBtn.addEventListener("click", function () {
        // Mengambil semua baris dalam tbody
        const rows = productTableBody.querySelectorAll("tr");

        // Hapus baris terakhir (produk terakhir yang dimasukkan)
        if (rows.length > 0) {
            productTableBody.removeChild(rows[rows.length - 1]);
        }
    });

    // Menambahkan event listener untuk tombol Search
    searchBtn.addEventListener("click", function () {
        // Mengambil nilai pencarian dari input
        const searchTerm = searchInput.value.trim();

        // Mengambil semua baris dalam tbody
        const rows = productTableBody.querySelectorAll("tr");

        // Mengiterasi melalui baris dan menampilkan alert jika nama produk sesuai dengan pencarian
        let found = false;
        rows.forEach(function (row) {
            const productName = row.querySelector("td:nth-child(2)").textContent;
            if (productName.toLowerCase() === searchTerm.toLowerCase()) {
                found = true;
                alert(`Product found: ${productName}`);
            }
        });

        // Menampilkan pesan jika tidak ada produk yang ditemukan
        if (!found) {
            alert("Product not found.");
        }
    });