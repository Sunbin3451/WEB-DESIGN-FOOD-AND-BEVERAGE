function renderBrandData(brand) {
    if (!brand) return;

    // Render Header & Hero
    const logoEl = document.getElementById("brand-logo");
    const navCtaEl = document.getElementById("nav-cta");
    const badgeEl = document.getElementById("hero-badge");
    const titleEl = document.getElementById("hero-title");
    const descEl = document.getElementById("hero-desc");
    const heroCtaEl = document.getElementById("hero-cta");
    const heroImgEl = document.getElementById("hero-img");

    if (logoEl) logoEl.textContent = brand.brandName;
    if (navCtaEl) navCtaEl.textContent = brand.hero.ctaText;
    if (badgeEl) badgeEl.textContent = brand.hero.badge;
    if (titleEl) titleEl.textContent = brand.hero.title;
    if (descEl) descEl.textContent = brand.hero.description;
    if (heroCtaEl) heroCtaEl.textContent = brand.hero.ctaText;
    if (heroImgEl) heroImgEl.src = brand.hero.image;

    // Render Danh sách Menu
    const menuContainer = document.getElementById("menu-container");
    if (menuContainer && Array.isArray(brand.menu)) {
        menuContainer.innerHTML = "";
        brand.menu.forEach(item => {
            const card = document.createElement("div");
            card.className = "menu-card";
            card.innerHTML = `
        <h3>${item.name}</h3>
        <p style="margin-top: 6px; font-size: 0.95rem; opacity: 0.85;">${item.desc}</p>
        <div class="price">${item.price}</div>
      `;
            menuContainer.appendChild(card);
        });
    }
}