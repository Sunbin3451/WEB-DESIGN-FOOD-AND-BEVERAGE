let brands = {};

async function switchBrand(brandKey) {
    const brand = brands[brandKey];
    if (!brand) return;

    applyTheme(brand.theme);
    renderBrandData(brand);
}

document.addEventListener("DOMContentLoaded", async () => {
    brands = await loadBrandsData();

    if (brands && brands.steakhouse) {
        switchBrand("steakhouse");
    }

    // Xử lý sự kiện gửi form đặt bàn
    const bookingForm = document.getElementById("reservation-form");
    if (bookingForm) {
        bookingForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Cảm ơn quý khách! Yêu cầu đặt bàn đã được gửi thành công. Nhà hàng sẽ liên hệ xác nhận trong 15 phút.");
            bookingForm.reset();
        });
    }
});