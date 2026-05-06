if (window.lucide) {
  lucide.createIcons();
}

const translations = {
  tr: {
    home: "Ana Sayfa",
    nav_places: "Mekanlar",
    nav_prices: "Bira Fiyatları",
    nav_map: "Harita",
    nav_blog: "Blog",
    nav_events: "Etkinlikler",
    hero_title: "ANTALYA’NIN <br> EN GÜNCEL <br> <span>BİRA REHBERİ</span>",
    hero_desc: "Antalya’daki mekanları keşfet, güncel bira fiyatlarını karşılaştır, yorumları oku ve sana en uygun mekanı bul!",
    search_placeholder: "Nerede arıyorsun?",
    beer_type: "Bira türü seç",
    search_btn: "Ara",
    cheapest_today: "🔥 EN UCUZ",
    place_of_week: "⭐ HAFTANIN MEKANI",
    highest_rated: "En yüksek puanlı",
    location_search: "Yakınındaki En Ucuz Mekanı Bul",
    location_btn: "Konuma Göre Ara →",
    popular_places: "🍺 Popüler Mekanlar",
    see_all: "Tümünü Gör →",
    featured: "Öne Çıkan",
    popular: "Popüler",
    cheapest_prices: "🍺 En Ucuz Bira Fiyatları",
    all_prices: "Tüm Fiyatları Gör →",
    nearby_places: "📍 Yakındaki Mekanlar",
    view_map: "Haritada Görüntüle →",
    stat_places: "Mekan",
    stat_beers: "Bira Çeşidi",
    stat_users: "Kullanıcı",
    stat_reviews: "Yorum",
    place_detail: "Mekan Detayı",
    back_home: "Ana Sayfaya Dön",
    get_route: "Yol Tarifi Al",
    beer_prices: "🍺 Bira Fiyatları",
    reviews: "💬 Yorumlar",
    review_one: "Fiyatlar iyi, ortam güzel ve servis hızlı.",
    review_two: "Arkadaşlarla gidilecek güzel bir mekan."
  },

  en: {
    home: "Home",
    nav_places: "Places",
    nav_prices: "Beer Prices",
    nav_map: "Map",
    nav_blog: "Blog",
    nav_events: "Events",
    hero_title: "ANTALYA’S <br> MOST UPDATED <br> <span>BEER GUIDE</span>",
    hero_desc: "Discover venues in Antalya, compare beer prices, read reviews and find the best place for you!",
    search_placeholder: "Where are you searching?",
    beer_type: "Select beer type",
    search_btn: "Search",
    cheapest_today: "🔥 CHEAPEST",
    place_of_week: "⭐ PLACE OF THE WEEK",
    highest_rated: "Highest rated",
    location_search: "Find the Cheapest Place Near You",
    location_btn: "Search by Location →",
    popular_places: "🍺 Popular Places",
    see_all: "See All →",
    featured: "Featured",
    popular: "Popular",
    cheapest_prices: "🍺 Cheapest Beer Prices",
    all_prices: "See All Prices →",
    nearby_places: "📍 Nearby Places",
    view_map: "View on Map →",
    stat_places: "Places",
    stat_beers: "Beer Types",
    stat_users: "Users",
    stat_reviews: "Reviews",
    place_detail: "Place Detail",
    back_home: "Back to Home",
    get_route: "Get Directions",
    beer_prices: "🍺 Beer Prices",
    reviews: "💬 Reviews",
    review_one: "Good prices, nice atmosphere and fast service.",
    review_two: "A nice place to go with friends."
  },

  ru: {
    home: "Главная",
    nav_places: "Заведения",
    nav_prices: "Цены на пиво",
    nav_map: "Карта",
    nav_blog: "Блог",
    nav_events: "События",
    hero_title: "САМЫЙ АКТУАЛЬНЫЙ <br> ПИВНОЙ ГИД <br> <span>АНТАЛИИ</span>",
    hero_desc: "Откройте заведения Анталии, сравните цены на пиво, читайте отзывы и найдите лучшее место!",
    search_placeholder: "Где ищете?",
    beer_type: "Выберите тип пива",
    search_btn: "Поиск",
    cheapest_today: "🔥 САМОЕ ДЕШЕВОЕ",
    place_of_week: "⭐ ЗАВЕДЕНИЕ НЕДЕЛИ",
    highest_rated: "Самый высокий рейтинг",
    location_search: "Найти самое дешевое место рядом",
    location_btn: "Поиск по локации →",
    popular_places: "🍺 Популярные заведения",
    see_all: "Смотреть все →",
    featured: "Рекомендуем",
    popular: "Популярное",
    cheapest_prices: "🍺 Самые дешевые цены",
    all_prices: "Все цены →",
    nearby_places: "📍 Ближайшие заведения",
    view_map: "Показать на карте →",
    stat_places: "Заведения",
    stat_beers: "Виды пива",
    stat_users: "Пользователи",
    stat_reviews: "Отзывы",
    place_detail: "Детали заведения",
    back_home: "Вернуться на главную",
    get_route: "Маршрут",
    beer_prices: "🍺 Цены на пиво",
    reviews: "💬 Отзывы",
    review_one: "Хорошие цены, приятная атмосфера и быстрое обслуживание.",
    review_two: "Хорошее место для встречи с друзьями."
  }
};

function setLang(lang) {
  localStorage.setItem("siteLang", lang);
  applyLang();
}

function applyLang() {
  const lang = localStorage.getItem("siteLang") || "tr";
  const t = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.innerHTML = t[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key]) el.placeholder = t[key];
  });

  document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.remove("active"));

  const activeBtn = document.querySelector(`[onclick="setLang('${lang}')"]`);
  if (activeBtn) activeBtn.classList.add("active");

  if (window.lucide) {
    lucide.createIcons();
  }
}

applyLang();

const places = {
  "Gas Light Pub": {
    location: "📍 Kaleiçi",
    desc: "Kaleiçi’nde pub atmosferi, yüksek puanlı yorumlar ve güçlü bira menüsü.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200",
    prices: ["165 ₺", "160 ₺", "170 ₺", "175 ₺"]
  },
  "Dolu Pub": {
    location: "📍 Konyaaltı",
    desc: "Uygun fiyatlı bira seçenekleri ve rahat ortamıyla öne çıkan mekan.",
    image: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?q=80&w=1200",
    prices: ["110 ₺", "115 ₺", "125 ₺", "170 ₺"]
  },
  "The Barrels": {
    location: "📍 Konyaaltı",
    desc: "Modern bar tasarımı, iyi fiyatlar ve kaliteli servis.",
    image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=1200",
    prices: ["145 ₺", "115 ₺", "130 ₺", "180 ₺"]
  },
  "Route Beer House": {
    location: "📍 Lara",
    desc: "Lara bölgesinde keyifli atmosfer ve geniş bira seçenekleri.",
    image: "https://images.unsplash.com/photo-1525268323446-0505b6fe7778?q=80&w=1200",
    prices: ["160 ₺", "155 ₺", "125 ₺", "185 ₺"]
  }
};

function loadPlacePage() {
  const placeNameEl = document.getElementById("placeName");
  if (!placeNameEl) return;

  const params = new URLSearchParams(window.location.search);
  const name = params.get("name") || "Gas Light Pub";
  const place = places[name] || places["Gas Light Pub"];

  document.title = `${name} - BeerAntalya`;
  placeNameEl.textContent = name;
  document.getElementById("placeLocation").textContent = place.location;
  document.getElementById("placeDesc").textContent = place.desc;
  document.getElementById("placeImage").src = place.image;

  document.getElementById("efesPrice").textContent = place.prices[0];
  document.getElementById("tuborgPrice").textContent = place.prices[1];
  document.getElementById("bomontiPrice").textContent = place.prices[2];
  document.getElementById("guinnessPrice").textContent = place.prices[3];
}

loadPlacePage();

const searchBtn = document.getElementById("searchBtn");

if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    const input = document.getElementById("searchInput").value.toLowerCase().trim();
    const beer = document.getElementById("beerSelect").value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      const matchInput = input === "" || text.includes(input);
      const matchBeer = beer.includes("bira") || beer.includes("select") || text.includes(beer);

      card.style.display = matchInput && matchBeer ? "block" : "none";
    });

    document.getElementById("mekanlar")?.scrollIntoView({ behavior: "smooth" });
  });
}

document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    alert("Bu bölüm yakında aktif olacak.");
  });
});


/* BA_ADDED_HELPERS: data.js destekli ortak fiyat ve açık/kapalı yardımcıları */
function BA_getPriceLabel(item){
  if(typeof getCurrentPrice !== "function") return "";
  const currentPrice = item.price || item.currentPrice || getCurrentPrice(item);

  if(item.happyHourPrice && item.happyHourEnd && currentPrice === item.happyHourPrice){
    return `
      <div class="price-box">
        <span class="old-price">${item.normalPrice}₺</span>
        <span class="new-price">${currentPrice}₺</span>
        <span class="campaign-time">${item.happyHourEnd}'a kadar</span>
      </div>
    `;
  }

  return `<b class="new-price">${currentPrice}₺</b>`;
}
