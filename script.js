const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
  document.body.classList.toggle("menu-open");

  if (mainNav.classList.contains("active")) {
    menuToggle.textContent = "×";
  } else {
    menuToggle.textContent = "☰";
  }
});

const navLinks = document.querySelectorAll(".main-nav a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    mainNav.classList.remove("active");
    menuToggle.textContent = "☰";
    document.body.classList.remove("menu-open");
  });
});


const languageToggle = document.querySelector(".language-toggle");
const languageOptions = document.querySelector(".language-options");

languageToggle.addEventListener("click", function () {
  languageOptions.classList.toggle("active");
});

// LANGUAGE SYSTEM

const languageButtons = document.querySelectorAll(".language-btn");

const translations = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navProducts: "Products",
    navGallery: "Gallery",
    navContact: "Contact",
    languageLabel: "Language",
    heroTitle: "Rubino Blu",
    heroText:
      "Rooted in the fertile lands of Northern Iran, we grow berries with care and passion.",
    heroAbout: "Explore Our Farm",
    heroContact: "Contact Us",

    farmTitle: "Our Farm",
    farmText:
      "Behind every Rubino Blu berry is a story of care, dedication, and respect for nature. Our farmers carefully nurture each plant to bring exceptional quality from Northern Iran to the world.",
    productsTitle: "Our Products",
    productsIntro: "Carefully grown products from our Northern Iran farm.",
        blueberriesTitle: "Blueberries",
    blueberriesText:
      "Our signature berry, grown with care and selected for exceptional quality.",
    kiwiTitle: "Kiwi",
    orangesTitle: "Oranges",
    galleryTitle: "Gallery",
    galleryIntro: "A glimpse into life at Rubino Blu.",
    contactTitle: "From Our Farm to the World",
    contactText:
        "For wholesale inquiries, partnerships, or more information about Rubino Blu, we'd love to hear from you.",
    contactButton: "Get in Touch",  
    footerTagline: "Premium produce from Northern Iran.",
    footerCopyright: "© 2026 Rubino Blu. All rights reserved.",
  },

  fa: {
    navHome: "خانه",
    navAbout: "درباره ما",
    navProducts: "محصولات",
    navGallery: "گالری",
    navContact: "تماس با ما",
    languageLabel: "زبان",
    heroTitle: "روبینو بلو",
    heroText:
      "در زمین‌های حاصلخیز شمال ایران، با عشق و دقت انواع توت‌ها را پرورش می‌دهیم.",
    heroAbout: "مزرعه ما",
    heroContact: "تماس با ما",

    farmTitle: "مزرعه ما",
    farmText:
      "پشت هر محصول روبینو بلو، داستانی از مراقبت، تعهد و احترام به طبیعت نهفته است. کشاورزان ما با دقت از هر گیاه مراقبت می‌کنند تا محصولی با کیفیتی ممتاز را از شمال ایران به جهان عرضه کنند.",
    productsTitle: "محصولات ما",
    productsIntro: "محصولاتی با دقت و مراقبت در مزرعه ما در شمال ایران پرورش داده می‌شوند.",
    blueberriesTitle: "بلوبری",
    blueberriesText:
      "محصول شاخص ما که با دقت پرورش داده شده و برای کیفیت ممتاز انتخاب می‌شود.",
    kiwiTitle: "کیوی",
    orangesTitle: "پرتقال",
    galleryTitle: "گالری",
    galleryIntro: "نگاهی به زندگی و فعالیت‌های روبینو بلو.",
    contactTitle: "از مزرعه ما به جهان",
    contactText:
      "برای درخواست‌های عمده‌فروشی، همکاری یا دریافت اطلاعات بیشتر درباره روبینو بلو، خوشحال می‌شویم با ما در ارتباط باشید.",
    contactButton: "تماس با ما",
    footerTagline: "محصولات ممتاز از شمال ایران.",
    footerCopyright: "© ۲۰۲۶ روبینو بلو. تمامی حقوق محفوظ است.",
  },
};



// CHANGE LANGUAGE

function changeLanguage(language) {
  const text = translations[language];

  document.querySelector("#nav-home").textContent = text.navHome;
  document.querySelector("#nav-about").textContent = text.navAbout;
  document.querySelector("#nav-products").textContent = text.navProducts;
  document.querySelector("#nav-gallery").textContent = text.navGallery;
  document.querySelector("#nav-contact").textContent = text.navContact;
  document.querySelector("#language-label").textContent =
  text.languageLabel;
  document.querySelector("#footer-home").textContent = text.navHome;
  document.querySelector("#footer-about").textContent = text.navAbout;
  document.querySelector("#footer-products").textContent = text.navProducts;
  document.querySelector("#footer-gallery").textContent = text.navGallery;
  document.querySelector("#footer-contact").textContent = text.navContact;

  document.querySelector("#hero-title").textContent = text.heroTitle;
  document.querySelector("#hero-text").textContent = text.heroText;
  document.querySelector("#hero-about").textContent = text.heroAbout;
  document.querySelector("#hero-contact").textContent = text.heroContact;

  document.querySelector("#farm-title").textContent = text.farmTitle;
  document.querySelector("#farm-text").textContent = text.farmText;

  document.querySelector("#products-title").textContent = text.productsTitle;
  document.querySelector("#products-intro").textContent = text.productsIntro;

  document.querySelector("#blueberries-title").textContent =
  text.blueberriesTitle;

  document.querySelector("#blueberries-text").textContent =
  text.blueberriesText;

  document.querySelector("#kiwi-title").textContent = text.kiwiTitle;
  document.querySelector("#oranges-title").textContent = text.orangesTitle;

  document.querySelector("#gallery-title").textContent = text.galleryTitle;
  document.querySelector("#gallery-intro").textContent = text.galleryIntro;

  document.querySelector("#contact-title").textContent = text.contactTitle;
  document.querySelector("#contact-text").textContent = text.contactText;
  document.querySelector("#contact-button").textContent = text.contactButton;

  document.querySelector("#footer-tagline").textContent = text.footerTagline;
  document.querySelector("#footer-copyright").textContent = text.footerCopyright;

  if (language === "fa") {
    document.documentElement.dir = "rtl";
  } else {
    document.documentElement.dir = "ltr";
  }
}



// LANGUAGE BUTTONS

languageButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    const selectedLanguage = button.dataset.lang;

    changeLanguage(selectedLanguage);

    languageButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    languageOptions.classList.remove("active");
  });
});





