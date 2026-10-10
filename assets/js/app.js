let brands = {};
let scrollObserver = null;

async function switchBrand(brandKey) {
    const brand = brands[brandKey];
    if (!brand) return;

    applyTheme(brand.theme, brand.typography);
    renderBrandData(brand);
    initScrollspy();
}

// Hàm khởi tạo Scrollspy bằng IntersectionObserver thuần
function initScrollspy() {
    if (scrollObserver) {
        scrollObserver.disconnect();
    }

    const navLinks = document.querySelectorAll(".nav-menu .nav-link");
    if (!navLinks.length) return;

    // 1. Chỉ theo dõi những section thực sự có link hiển thị trên navbar
    const navTargets = Array.from(navLinks)
        .map((link) => link.getAttribute("href"))
        .filter((href) => href && href.startsWith("#"));

    const sections = navTargets
        .map((id) => document.querySelector(id))
        .filter((el) => el !== null);

    // vùng nhận diện khi section xuất hiện trên màn hình (rootMargin điều chỉnh vị trí nhận diện)
    const observerOptions = {
        root: null,
        rootMargin: "-35% 0px -45% 0px",
        threshold: 0
    };

    scrollObserver = new IntersectionObserver((entries) => {
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

    // 3. Sửa đúng tên biến scrollObserver
    sections.forEach((sec) => scrollObserver.observe(sec));
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