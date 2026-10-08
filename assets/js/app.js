let brands = {};

async function switchBrand(brandKey) {
    const brand = brands[brandKey];
    if (!brand) return;
    applyTheme(brand.theme);
    renderBrandData(brand);
}

document.addEventListener("DOMContentLoaded", async () => {
    brands = await loadBrandsData();

    if (brands && brands.coffee) {
        switchBrand("coffee");
    }
});