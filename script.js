// script.js
document.getElementById("form-daftar").addEventListener("submit", function(event) {
    event.preventDefault();

    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var pesanError = document.getElementById("pesan-error");

    if (!nama || !email) {
        pesanError.textContent = "Semua kolom harus diisi!";
    } else {
        pesanError.textContent = "";
        alert("Pendaftaran berhasil! Terima kasih telah mendaftar.");
        // Anda dapat menambahkan logika untuk mengirim data formulir ke server di sini
    }
});
// JavaScript untuk validasi formulir
document.getElementById('form-pendaftaran').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah formulir dari pengiriman langsung

    // Ambil nilai dari input
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();

    let valid = true;

    // Validasi Nama
    const namaError = document.getElementById('nama-error');
    if (nama === "") {
        namaError.textContent = "Nama tidak boleh kosong!";
        valid = false;
    } else {
        namaError.textContent = "";
    }

    // Validasi Email
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email === "") {
        emailError.textContent = "Email tidak boleh kosong!";
        valid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = "Format email tidak valid!";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Kirim formulir jika valid
    if (valid) {
        alert("Pendaftaran berhasil!");
        // Tambahkan kode untuk pengiriman formulir ke server jika diperlukan
        document.getElementById('form-pendaftaran').reset();
    }
});
