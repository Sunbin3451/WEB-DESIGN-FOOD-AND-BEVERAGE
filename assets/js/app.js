let brands = {};

async function switchBrand(brandKey) {
    const brand = brands[brandKey];
    if (!brand) return;

    applyTheme(brand.theme);
    renderBrandData(brand);
    initScrollspy(); // Khởi tạo lại scrollspy cho các link mới
}

// Hàm khởi tạo Scrollspy bằng IntersectionObserver thuần
function initScrollspy() {
    const sections = document.querySelectorAll("section[id], footer[id]");
    const navLinks = document.querySelectorAll(".nav-menu .nav-link");

    const observerOptions = {
        root: null,
        rootMargin: "-25% 0px -65% 0px", // Nhận diện khi phần tử nằm ở 1/3 trên của màn hình
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                navLinks.forEach((link) => {
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach((sec) => observer.observe(sec));
}

document.addEventListener("DOMContentLoaded", async () => {
    brands = await loadBrandsData();

    if (brands && brands.steakhouse) {
        switchBrand("steakhouse");
    }

    // Xử lý Form đặt bàn
    const bookingForm = document.getElementById("reservation-form");
    if (bookingForm) {
        bookingForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Cảm ơn quý khách! Yêu cầu đặt bàn đã được gửi thành công.");
            bookingForm.reset();
        });
    }
});