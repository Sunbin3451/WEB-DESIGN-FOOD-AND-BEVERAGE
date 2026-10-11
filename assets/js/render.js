function renderBrandData(brand) {
    if (!brand) return;

    // Tiêu đề tab trình duyệt
    const pageTitle = document.getElementById("page-title");
    if (pageTitle) pageTitle.textContent = `${brand.brandName}`;

    // Header
    const brandLogo = document.getElementById("brand-logo");
    if (brandLogo) brandLogo.textContent = brand.brandName;

    const navCta = document.getElementById("nav-cta");
    if (navCta) navCta.textContent = brand.nav.ctaText;

    const navLinks = document.getElementById("nav-links");
    if (navLinks) {
        navLinks.innerHTML = "";
        brand.nav.links.forEach((l) => {
            const a = document.createElement("a");
            a.href = l.target;
            a.className = "nav-link";
            a.textContent = l.label;
            navLinks.appendChild(a);
        });
    }

    // Hero Section
    const heroBackdrop = document.getElementById("hero-backdrop");
    if (heroBackdrop) heroBackdrop.style.backgroundImage = `url('${brand.hero.image}')`;

    const heroBadge = document.getElementById("hero-badge");
    if (heroBadge) heroBadge.textContent = brand.hero.badge;

    const heroTitle = document.getElementById("hero-title");
    if (heroTitle) heroTitle.textContent = brand.hero.title;

    const heroDesc = document.getElementById("hero-desc");
    if (heroDesc) heroDesc.textContent = brand.hero.description;

    const heroPrimaryCta = document.getElementById("hero-primary-cta");
    if (heroPrimaryCta) heroPrimaryCta.textContent = brand.hero.primaryCta;

    const heroSecondaryCta = document.getElementById("hero-secondary-cta");
    if (heroSecondaryCta) heroSecondaryCta.textContent = brand.hero.secondaryCta;

    // Brand Story
    const storyTagline = document.getElementById("story-tagline");
    if (storyTagline) storyTagline.textContent = brand.story.tagline;

    const storyTitle = document.getElementById("story-title");
    if (storyTitle) storyTitle.textContent = brand.story.title;

    const storyDesc = document.getElementById("story-desc");
    if (storyDesc) storyDesc.textContent = brand.story.desc;

    const statsGrid = document.getElementById("story-stats");
    if (statsGrid) {
        statsGrid.innerHTML = "";
        brand.story.stats.forEach((s) => {
            const div = document.createElement("div");
            div.className = "stat-item";
            div.innerHTML = `<h3>${s.value}</h3><p>${s.label}</p>`;
            statsGrid.appendChild(div);
        });
    }

    // Menu Section
    const menuTitle = document.getElementById("menu-title");
    const menuDesc = document.getElementById("menu-desc");
    if (menuTitle && brand.menu.title) menuTitle.textContent = brand.menu.title;
    if (menuDesc && brand.menu.desc) menuDesc.textContent = brand.menu.desc;

    const menuContainer = document.getElementById("menu-container");
    if (menuContainer) {
        menuContainer.innerHTML = "";
        const menuItems = Array.isArray(brand.menu) ? brand.menu : (brand.menu.items || []);
        menuItems.forEach((dish) => {
            const card = document.createElement("div");
            card.className = "menu-card";
            card.innerHTML = `
                <div class="menu-card-img-wrapper">
                    <img src="${dish.image}" alt="${dish.name}" loading="lazy">
                    <span class="menu-tag">${dish.tag}</span>
                </div>
                <div class="menu-card-body">
                    <h3>${dish.name}</h3>
                    <p>${dish.desc}</p>
                    <div class="price">${dish.price}</div>
                </div>
            `;
            menuContainer.appendChild(card);
        });
    }

    // Space Section
    const spaceTagline = document.getElementById("space-tagline");
    if (spaceTagline && brand.space.tagline) spaceTagline.textContent = brand.space.tagline;

    const spaceTitle = document.getElementById("space-title");
    if (spaceTitle) spaceTitle.textContent = brand.space.title;

    const spaceDesc = document.getElementById("space-desc");
    if (spaceDesc) spaceDesc.textContent = brand.space.desc;

    const spaceGallery = document.getElementById("space-gallery");
    if (spaceGallery && brand.space.items) {
        spaceGallery.innerHTML = "";
        brand.space.items.forEach((item) => {
            const card = document.createElement("div");
            card.className = `space-card ${item.featured ? "featured" : ""}`;
            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <div class="space-card-overlay">
                    <span class="space-badge">${item.tag}</span>
                    <div class="space-info">
                        <h3>${item.name}</h3>
                        <p>${item.desc}</p>
                    </div>
                </div>
            `;
            spaceGallery.appendChild(card);
        });
    }

    // Reviews Section
    const reviewsTitle = document.getElementById("reviews-title");
    const reviewsDesc = document.getElementById("reviews-desc");
    if (reviewsTitle && brand.reviews.title) reviewsTitle.textContent = brand.reviews.title;
    if (reviewsDesc && brand.reviews.desc) reviewsDesc.textContent = brand.reviews.desc;

    const reviewsContainer = document.getElementById("reviews-container");
    if (reviewsContainer) {
        reviewsContainer.innerHTML = "";
        const reviewItems = Array.isArray(brand.reviews) ? brand.reviews : (brand.reviews.items || []);
        reviewItems.forEach((rev) => {
            const card = document.createElement("div");
            card.className = "review-card";
            card.innerHTML = `
                <div class="stars">${"★".repeat(rev.rating)}</div>
                <p class="comment">"${rev.comment}"</p>
                <p class="author"><strong>— ${rev.author}</strong></p>
            `;
            reviewsContainer.appendChild(card);
        });
    }

    // Booking Section
    const bookingTitle = document.getElementById("booking-title");
    if (bookingTitle) bookingTitle.textContent = brand.booking.title;

    const bookingDesc = document.getElementById("booking-desc");
    if (bookingDesc) bookingDesc.textContent = brand.booking.desc;

    // Footer Section
    const footerInitial = document.getElementById("footer-logo-initial");
    if (footerInitial) footerInitial.textContent = brand.brandName.charAt(0);

    const footerBrandTitle = document.getElementById("footer-brand-title");
    if (footerBrandTitle) footerBrandTitle.textContent = brand.brandName;

    const footerBrandDesc = document.getElementById("footer-brand-desc");
    if (footerBrandDesc) footerBrandDesc.textContent = brand.footer.brandDesc;

    const footerCta = document.getElementById("footer-cta-btn");
    if (footerCta) footerCta.textContent = brand.nav.ctaText;

    // Đồng bộ danh sách menu chân trang theo đúng danh sách nav của brand
    const footerNavList = document.getElementById("footer-nav-list");
    if (footerNavList) {
        footerNavList.innerHTML = "";
        brand.nav.links.forEach((l) => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="${l.target}">${l.label}</a>`;
            footerNavList.appendChild(li);
        });
    }

    const footerAddress = document.getElementById("footer-address-text");
    if (footerAddress) footerAddress.textContent = brand.footer.address;

    const footerParking = document.getElementById("footer-parking-info");
    if (footerParking) footerParking.textContent = brand.footer.parking;

    const footerPhone = document.getElementById("footer-phone-link");
    if (footerPhone) {
        footerPhone.href = `tel:${brand.footer.phone.replace(/\s+/g, "")}`;
        footerPhone.textContent = brand.footer.phone;
    }

    const footerEmail = document.getElementById("footer-email-text");
    if (footerEmail) footerEmail.textContent = brand.footer.email;

    const footerHours = document.getElementById("footer-hours-list");
    if (footerHours) {
        footerHours.innerHTML = "";
        brand.footer.hours.forEach((h) => {
            const p = document.createElement("p");
            p.textContent = h;
            footerHours.appendChild(p);
        });
    }

    const footerSocials = document.getElementById("footer-social-links");
    if (footerSocials) {
        footerSocials.innerHTML = "";
        brand.footer.socials.forEach((s) => {
            const a = document.createElement("a");
            a.href = s.url;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.textContent = s.name;
            footerSocials.appendChild(a);
        });
    }
}