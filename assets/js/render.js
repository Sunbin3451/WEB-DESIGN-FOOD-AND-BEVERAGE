function renderBrandData(brand) {
    if (!brand) return;

    // Header & Nav links
    document.getElementById("brand-logo").textContent = brand.brandName;
    document.getElementById("nav-cta").textContent = brand.nav.ctaText;

    const navLinksContainer = document.getElementById("nav-links");
    navLinksContainer.innerHTML = "";
    brand.nav.links.forEach(link => {
        const a = document.createElement("a");
        a.href = link.target;
        a.textContent = link.label;
        navLinksContainer.appendChild(a);
    });

    // Hero Section
    document.getElementById("hero-badge").textContent = brand.hero.badge;
    document.getElementById("hero-title").textContent = brand.hero.title;
    document.getElementById("hero-desc").textContent = brand.hero.description;
    document.getElementById("hero-primary-cta").textContent = brand.hero.primaryCta;
    document.getElementById("hero-secondary-cta").textContent = brand.hero.secondaryCta;
    document.getElementById("hero-img").src = brand.hero.image;

    // Story Section
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

    // Menu Section
    const menuContainer = document.getElementById("menu-container");
    menuContainer.innerHTML = "";
    brand.menu.forEach(item => {
        const card = document.createElement("div");
        card.className = "menu-card";
        card.innerHTML = `
      <span class="menu-tag">${item.tag}</span>
      <h3>${item.name}</h3>
      <p style="margin-top:6px; opacity:0.85;">${item.desc}</p>
      <div class="price">${item.price}</div>
    `;
        menuContainer.appendChild(card);
    });

    // Space Section
    document.getElementById("space-title").textContent = brand.space.title;
    document.getElementById("space-desc").textContent = brand.space.desc;
    const galleryContainer = document.getElementById("space-gallery");
    galleryContainer.innerHTML = "";
    brand.space.images.forEach(imgUrl => {
        const img = document.createElement("img");
        img.src = imgUrl;
        img.alt = "Không gian nhà hàng";
        galleryContainer.appendChild(img);
    });

    // Reviews Section
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

    // Booking Section
    document.getElementById("booking-title").textContent = brand.booking.title;
    document.getElementById("booking-desc").textContent = brand.booking.desc;

    // Footer
    document.getElementById("footer-brand").textContent = brand.brandName;
    document.getElementById("footer-address").textContent = brand.footer.address;
    document.getElementById("footer-hours").textContent = brand.footer.hours;
    document.getElementById("footer-phone").textContent = brand.footer.phone;
    document.getElementById("footer-email").textContent = brand.footer.email;
}