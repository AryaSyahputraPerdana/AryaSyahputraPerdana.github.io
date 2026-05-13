// 1. ANIMASI SCROLL
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("active");
    });
}, { threshold: 0.15 });
reveals.forEach(reveal => observer.observe(reveal));

// 2. IMAGE CAROUSEL CONTROLLER
const slides = document.querySelectorAll(".carousel-slide");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
let currentIndex = 0;

// PENGECEKAN: Fungsi carousel HANYA berjalan jika elemen tombol dan slide ditemukan di halaman
if (prevBtn && nextBtn && slides.length > 0) {
    
    // Fungsi untuk menampilkan slide berdasarkan indeks
    function showSlide(index) {
        // Hilangkan class 'active' dari semua gambar
        slides.forEach(slide => {
            slide.classList.remove("active");
        });
        
        // Tambahkan class 'active' hanya pada gambar yang dituju
        slides[index].classList.add("active");
    }

    // Tombol Mundur
    prevBtn.addEventListener("click", () => {
        // Jika di gambar pertama, kembali ke gambar paling akhir
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    });

    // Tombol Maju
    nextBtn.addEventListener("click", () => {
        // Jika di gambar terakhir, kembali ke gambar paling awal
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    });
}