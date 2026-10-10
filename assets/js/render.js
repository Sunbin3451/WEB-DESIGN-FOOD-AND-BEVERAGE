function renderBrandData(brand) {
    if (!brand) return;

    // 1. Header Navigation
    document.getElementById("brand-logo").textContent = brand.brandName;
    document.getElementById("nav-cta").textContent = brand.nav.ctaText;

    const navContainer = document.getElementById("nav-links");
    navContainer.innerHTML = "";
    brand.nav.links.forEach((link, index) => {
        const a = document.createElement("a");
        a.href = link.target;
        a.textContent = link.label;
        a.className = "nav-link";
        if (index === 0) a.classList.add("active"); // Mặc định kích hoạt mục đầu tiên
        navContainer.appendChild(a);
    });

    // 2. Hero Section
    document.getElementById("hero-badge").textContent = brand.hero.badge;
    document.getElementById("hero-title").textContent = brand.hero.title;
    document.getElementById("hero-desc").textContent = brand.hero.description;
    document.getElementById("hero-primary-cta").textContent = brand.hero.primaryCta;
    document.getElementById("hero-secondary-cta").textContent = brand.hero.secondaryCta;

    // Gán ảnh nền cho Hero full backdrop
    const backdropEl = document.getElementById("hero-backdrop");
    if (backdropEl) {
        backdropEl.style.backgroundImage = `url('${brand.hero.image}')`;
    }

    // 3. Story Section
    document.getElementById("story-tagline").textContent = brand.story.tagline;
    document.getElementById("story-title").textContent = brand.story.title;
    document.getElementById("story-desc").textContent = brand.story.desc;

    const statsContainer = document.getElementById("story-stats");
    statsContainer.innerHTML = "";
    brand.story.stats.forEach(stat => {
        const div = document.createElement("div");
        div.className = "stat-item";
        div.innerHTML = `<h3>${stat.value}</h3><p>${stat.label}</p>`;
        statsContainer.appendChild(div);
    });

    // 4. Menu Section (Tạo card có ảnh động)
    const menuContainer = document.getElementById("menu-container");
    menuContainer.innerHTML = "";
    brand.menu.forEach(item => {
        const card = document.createElement("div");
        card.className = "menu-card";
        card.innerHTML = `
      <div class="menu-card-img-wrapper">
        <img src="${item.image}" alt="${item.name}">
        <span class="menu-tag">${item.tag}</span>
      </div>
      <div class="menu-card-body">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="price">${item.price}</div>
      </div>
    `;
        menuContainer.appendChild(card);
    });

    // 5. Space Gallery
    document.getElementById("space-title").textContent = brand.space.title;
    document.getElementById("space-desc").textContent = brand.space.desc;
    const galleryContainer = document.getElementById("space-gallery");
    galleryContainer.innerHTML = "";
    brand.space.images.forEach(imgUrl => {
        const img = document.createElement("img");
        img.src = imgUrl;
        img.alt = "Không gian quán";
        galleryContainer.appendChild(img);
    });

    // 6. Reviews Section
    const reviewsContainer = document.getElementById("reviews-container");
    reviewsContainer.innerHTML = "";
    brand.reviews.forEach(review => {
        const card = document.createElement("div");
        card.className = "review-card";
        const stars = "★".repeat(review.rating);
        card.innerHTML = `
      <div class="stars">${stars}</div>
      <p>"${review.comment}"</p>
      <div class="review-author">— ${review.author}</div>
    `;
        reviewsContainer.appendChild(card);
    });

    // 7. Booking
    document.getElementById("booking-title").textContent = brand.booking.title;
    document.getElementById("booking-desc").textContent = brand.booking.desc;

    // 8. Footer (Đổ dữ liệu 4 cột)
    if (brand.footer) {
        document.getElementById("footer-logo-initial").textContent = brand.brandName.charAt(0);
        document.getElementById("footer-brand-title").textContent = brand.brandName;
        document.getElementById("footer-brand-desc").textContent = brand.footer.brandDesc;
        document.getElementById("footer-address-text").textContent = brand.footer.address;
        document.getElementById("footer-parking-info").textContent = brand.footer.parking;

        const phoneLink = document.getElementById("footer-phone-link");
        phoneLink.textContent = brand.footer.phone;
        phoneLink.href = `tel:${brand.footer.phone.replace(/\s+/g, '')}`;

        document.getElementById("footer-email-text").textContent = brand.footer.email;

        const hoursContainer = document.getElementById("footer-hours-list");
        hoursContainer.innerHTML = "";
        brand.footer.hours.forEach(hour => {
            const p = document.createElement("p");
            p.textContent = hour;
            hoursContainer.appendChild(p);
        });

        const socialContainer = document.getElementById("footer-social-links");
        socialContainer.innerHTML = "";
        brand.footer.socials.forEach(soc => {
            const a = document.createElement("a");
            a.href = soc.url;
            a.target = "_blank";
            a.textContent = soc.name;
            socialContainer.appendChild(a);
        });
    }
}