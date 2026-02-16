module.exports = () => {
// --- Оригинальный код ai.js ---
let aiButton = document.getElementById('aiButton'); // <- Получаем элемент, а не сразу назначаем onclick
let aiPopup = document.getElementById('aiFrame');
let aiClose = document.getElementById('aiClose');
let aiButtonPhoto = document.getElementById('aiButtonPhoto');

function popupAIclick() {
    ym(483168,'reachGoal','aiclick');
    if(aiPopup.style.visibility == 'visible') {
        aiPopup.style.visibility = 'hidden';
        aiButtonPhoto.style.visibility = 'inherit';
    } else {
        aiPopup.style.visibility = 'visible';
        aiButtonPhoto.style.visibility = 'hidden';
    }
    if(aiClose.style.display == 'none') {
        aiClose.style.display = 'inherit';
    } else {
        aiClose.style.display = 'none';
    }
}

window.addEventListener('message', function (event) {
    if (event.data === 'click') {
        if(aiPopup.style.visibility == 'visible') {
            aiPopup.style.visibility = 'hidden';
            aiButtonPhoto.style.visibility = 'inherit';
        } else {
            aiPopup.style.visibility = 'visible';
            aiButtonPhoto.style.visibility = 'hidden';
        }
        if(aiClose.style.display == 'none') {
            aiClose.style.display = 'inherit';
        } else {
            aiClose.style.display = 'none';
        }
    }
});

// --- 1. Встроенный JSON-конфиг ---
// ВНИМАНИЕ: delay_seconds и show_duration_seconds теперь 5 и 30 для всех записей.
// page_part и message_text взяты из предоставленного списка.
const nudgeConfig = [
  {
    page_part: "/", // Главная страница
    page_type_for_logic: "home", // Уточняем тип для логики
    delay_seconds: 5, // Указанное время
    show_duration_seconds: 30, // Указанное время
    message_text: "Подберу номер по вашим пожеланиям и расскажу про наш удивительный отель.",
    utm_param: "widget_nudge_home" // Придуманный utm
  },
  {
    page_part: "akcii", // Акции
    page_type_for_logic: "offers",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Подберу для вас самые выгодные предложения месяца.",
    utm_param: "widget_nudge_offers_1" // Придуманный utm
  },
  {
    page_part: "nash-otel/uslugi", // Услуги
    page_type_for_logic: "services",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Подробно расскажу об увлекательных предложения для вашего отдыха.",
    utm_param: "widget_nudge_services" // Придуманный utm
  },
  {
    page_part: "nash-otel/gostevoj-vizit", // Гостевой визит
    page_type_for_logic: "guest_visit",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Расскажу все возможности Гостевого визита – вам точно понравится.",
    utm_param: "widget_nudge_guest_visit" // Придуманный utm
  },
  {
    page_part: "nash-otel/karta-territorii", // Карта территории
    page_type_for_logic: "map",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Я -лучший экскурсовод на территории нашего отеля.",
    utm_param: "widget_nudge_map" // Придуманный utm
  },
  {
    page_part: "nash-otel/pravila", // Правила
    page_type_for_logic: "rules",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Отвечу на любой вопрос.",
    utm_param: "widget_nudge_rules" // Придуманный utm
  },
  {
    page_part: "nash-otel/uslovia", // Условия (аннуляции?)
    page_type_for_logic: "cancellation",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Возникли вопросы – разъясню просто и понятно.",
    utm_param: "widget_nudge_cancellation" // Придуманный utm
  },
  {
    page_part: "nash-otel/faq", // FAQ
    page_type_for_logic: "faq",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Не нашли свой вопрос – отвечу вам индивидуально.",
    utm_param: "widget_nudge_faq" // Придуманный utm
  },
  {
    page_part: "nash-otel/partnery", // Партнёры
    page_type_for_logic: "partners",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Становитесь нашим партнером – это выгодно.",
    utm_param: "widget_nudge_partners" // Придуманный utm
  },
  {
    page_part: "nash-otel#photo", // Фото/Интерактивная карта на странице "О нас"
    page_type_for_logic: "about_photo",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Расскажу вам об уникальном отдыхе в нашем отеле.",
    utm_param: "widget_nudge_about_photo" // Придуманный utm
  },
  {
    page_part: "politika", // Политика
    page_type_for_logic: "policy",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Помогу разобраться в правовых вопросах.",
    utm_param: "widget_nudge_policy" // Придуманный utm
  },
  // Вторая запись для akcii (повтор в списке)
  {
    page_part: "akcii",
    page_type_for_logic: "offers",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Помогу подобрать акцию для получения уникальной скидки не только на проживание.",
    utm_param: "widget_nudge_offers_2" // Придуманный utm
  },
  // Записи для rooms
  {
    page_part: "rooms", // Список номеров
    page_type_for_logic: "rooms_list",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Помогу с выбором номера и забронирую его для вас в реальном времени с учетом скидок.",
    utm_param: "widget_nudge_rooms_list" // Придуманный utm
  },
  {
    page_part: "rooms/1", // Детальная номера 1
    page_type_for_logic: "room_detail_1",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Помогу с выбором номера и забронирую его для вас в реальном времени с учетом скидок.",
    utm_param: "widget_nudge_room_detail_1" // Придуманный utm
  },
  {
    page_part: "rooms/2", // Детальная номера 2
    page_type_for_logic: "room_detail_2",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Помогу с выбором номера и забронирую его для вас в реальном времени с учетом скидок.",
    utm_param: "widget_nudge_room_detail_2" // Придуманный utm
  },
  {
    page_part: "rooms/3", // Детальная номера 3
    page_type_for_logic: "room_detail_3",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Помогу с выбором номера и забронирую его для вас в реальном времени с учетом скидок.",
    utm_param: "widget_nudge_room_detail_3" // Придуманный utm
  },
  {
    page_part: "rooms/cottege", // Коттеджи
    page_type_for_logic: "cottages_list",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Помогу с выбором коттеджа и забронирую его для вас в реальном времени с учетом скидок.",
    utm_param: "widget_nudge_cottages_list" // Придуманный utm
  },
  // Записи для spa
  {
    page_part: "spa", // Главная SPA
    page_type_for_logic: "spa_main",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Помогу подобрать лучшие программы СПА для вас и ваших детей.",
    utm_param: "widget_nudge_spa_main" // Придуманный utm
  },
  {
    page_part: "spa/spa-tsentr", // SPA центр
    page_type_for_logic: "spa_center",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Подберу и забронирую для вас понравившуюся программу релакса.",
    utm_param: "widget_nudge_spa_center" // Придуманный utm
  },
  {
    page_part: "spa/otkrytyj-bassejn-parus", // Откр. бассейн Парус
    page_type_for_logic: "spa_pool_parus",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Расскажу не только о водных процедурах, но и полноценном отдыхе в нашем отеле.",
    utm_param: "widget_nudge_spa_pool_parus" // Придуманный utm
  },
  {
    page_part: "spa/otkrytyj-bassejn-fresh", // Откр. бассейн Fresh
    page_type_for_logic: "spa_pool_fresh",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Расскажу не только о водных процедурах, но и полноценном отдыхе в нашем отеле.",
    utm_param: "widget_nudge_spa_pool_fresh" // Придуманный utm
  },
  {
    page_part: "spa/krytyj-bassejn-v-spa", // Крытый бассейн в SPA
    page_type_for_logic: "spa_pool_indoor",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Расскажу не только о водных процедурах, но и полноценном отдыхе в нашем отеле.",
    utm_param: "widget_nudge_spa_pool_indoor" // Придуманный utm
  },
  {
    page_part: "spa/spa-menyu-2", // SPA меню
    page_type_for_logic: "spa_menu",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Подберу вам лучшие процедуры СПА и забронирую время для их получения.",
    utm_param: "widget_nudge_spa_menu" // Придуманный utm
  },
  {
    page_part: "dlya-gostej/spa-sertifikat", // SPA сертификат
    page_type_for_logic: "spa_certificate",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Помогу оформить прекрасный подарок вашим близким.",
    utm_param: "widget_nudge_spa_certificate" // Придуманный utm
  },
  {
    page_part: "spa/wellness-2", // Wellness
    page_type_for_logic: "spa_wellness",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Расскажу и подберу для вас лучшие программы релакса.",
    utm_param: "widget_nudge_spa_wellness" // Придуманный utm
  },
  {
    page_part: "spa/dlya-gostej-2", // Для гостей SPA (абонементы?)
    page_type_for_logic: "spa_guests",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Объясню все про абонементы нашего СПА.",
    utm_param: "widget_nudge_spa_guests" // Придуманный utm
  },
  {
    page_part: "spa/russkaya-banya", // Русская баня
    page_type_for_logic: "spa_banya",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Отвечу на любой вопрос о русской бане и программах парения.",
    utm_param: "widget_nudge_spa_banya" // Придуманный utm
  },
  {
    page_part: "spa/vip-lounge", // VIP lounge
    page_type_for_logic: "spa_vip",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Не сомневайтесь – это уникальные предложения, разберемся в нюансах?",
    utm_param: "widget_nudge_spa_vip" // Придуманный utm
  },
  // Записи для ресторанов и баров
  {
    page_part: "restorany-i-bary", // Главная ресторанов
    page_type_for_logic: "restaurants_main",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Подберу номер и расскажу об уникальных предложениях от шеф-повара.",
    utm_param: "widget_nudge_restaurants_main" // Придуманный utm
  },
  {
    page_part: "restorany-i-bary/restorants", // Рестораны
    page_type_for_logic: "restaurants",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Забронирую вам номер и погружу в астрономическое удовольствие.",
    utm_param: "widget_nudge_restaurants" // Придуманный utm
  },
  {
    page_part: "restorany-i-bary/bars", // Бары
    page_type_for_logic: "bars",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Расскажу об особенностях наших баров и забронирую номер.",
    utm_param: "widget_nudge_bars_1" // Придуманный utm
  },
  {
    page_part: "restorany-i-bary/rum-servis", // Room service
    page_type_for_logic: "room_service",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Исполню ваше пожелание – просто напишите мне.",
    utm_param: "widget_nudge_room_service" // Придуманный utm
  },
  {
    page_part: "restorany-i-bary/vinnyj-butik", // Винный бутик
    page_type_for_logic: "wine_boutique",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Помогу определиться с выбором – только напиши мне.",
    utm_param: "widget_nudge_wine_boutique" // Придуманный utm
  },
  // Записи для мероприятий
  {
    page_part: "meropriyatia", // Главная мероприятий
    page_type_for_logic: "events_main",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Помогу определиться с любым форматом для любого мероприятия и забронировать даты.",
    utm_param: "widget_nudge_events_main" // Придуманный utm
  },
  {
    page_part: "meropriyatia/korporativnye", // Корпоративные
    page_type_for_logic: "events_corporate",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Подберу лучший формат корпоративного события и забронирую даты проведения.",
    utm_param: "widget_nudge_events_corporate" // Придуманный utm
  },
  {
    page_part: "meropriyatia/bankety-2", // Банкеты
    page_type_for_logic: "events_banquet",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Забронирую даты и подберу лучший зал для вас.",
    utm_param: "widget_nudge_events_banquet" // Придуманный utm
  },
  {
    page_part: "meropriyatia/svadby", // Свадьбы
    page_type_for_logic: "events_wedding",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Для особенного дня помогу определиться с датами и бюджетом мероприятия.",
    utm_param: "widget_nudge_events_wedding" // Придуманный utm
  },
  {
    page_part: "meropriyatia/dni-rozhdeniya", // Дни рождения
    page_type_for_logic: "events_birthday",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Забронирую дату праздника и помогу подобрать формат празднования.",
    utm_param: "widget_nudge_events_birthday" // Придуманный utm
  },
  // Записи для развлечений
  {
    page_part: "razvlecheniya", // Главная развлечений
    page_type_for_logic: "entertainment_main",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Подберу и забронирую номер, расскажу о программах анимации и развлечений.",
    utm_param: "widget_nudge_entertainment_main" // Придуманный utm
  },
  {
    page_part: "razvlecheniya/vykhodnye-13-15-fevralya", // Выходные 13-15 февраля
    page_type_for_logic: "entertainment_valentine",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Подберу и забронирую номер, расскажу о программах анимации и развлечений.",
    utm_param: "widget_nudge_entertainment_valentine" // Придуманный utm
  },
  {
    page_part: "razvlecheniya/gornolyzhnyj-otdykh", // Горнолыжный отдых
    page_type_for_logic: "entertainment_ski",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Забронирую номер для отдыха после горнолыжного удовольствия.",
    utm_param: "widget_nudge_entertainment_ski" // Придуманный utm
  },
  {
    page_part: "razvlecheniya/prokat", // Прокат
    page_type_for_logic: "entertainment_rental",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Решу любой вопрос по аренде зимнего инвентаря.",
    utm_param: "widget_nudge_entertainment_rental" // Придуманный utm
  },
  {
    page_part: "razvlecheniya/fresh-kids", // Fresh kids
    page_type_for_logic: "entertainment_kids",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Подберу номер и даты, чтобы отдыхали вы и ваши дети с удовольствием.",
    utm_param: "widget_nudge_entertainment_kids" // Придуманный utm
  },
  {
    page_part: "razvlecheniya/animatsiya-v-budni", // Анимация в будни
    page_type_for_logic: "entertainment_animation_weekday",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Подберу номер и даты, вам скучно не будет.",
    utm_param: "widget_nudge_entertainment_animation_weekday" // Придуманный utm
  },
  {
    page_part: "razvlecheniya/animatsiya-v-vykhodnye", // Анимация в выходные
    page_type_for_logic: "entertainment_animation_weekend",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Подберу номер и даты, вам скучно не будет.",
    utm_param: "widget_nudge_entertainment_animation_weekend" // Придуманный utm
  },
  {
    page_part: "razvlecheniya/21-23-fevralya-den-zashchitnika-otechestva", // 21-23 февраля
    page_type_for_logic: "entertainment_defender_day",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Подберу номер и даты, вам скучно не будет.",
    utm_param: "widget_nudge_entertainment_defender_day" // Придуманный utm
  },
  {
    page_part: "razvlecheniya/pozdravleniya", // Поздравления
    page_type_for_logic: "entertainment_greetings",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Подберу и забронирую даты для лучшего поздравления для ваших близких.",
    utm_param: "widget_nudge_entertainment_greetings" // Придуманный utm
  },
  // Запись для контактов
  {
    page_part: "contact", // Контакты
    page_type_for_logic: "contacts",
    delay_seconds: 5,
    show_duration_seconds: 30,
    message_text: "Подберу номер по вашим пожеланиям и помогу добраться до нашего отеля.",
    utm_param: "widget_nudge_contacts" // Придуманный utm
  }
  // Здесь можно добавлять другие объекты для разных страниц
];

// --- 1.1. Доп. параметры поведения ---
const NUDGE_PAGE_DEPTH_LIMIT = 2; // Глубина страниц до отключения подсказок
const COOKIE_LIFETIME_HOURS = 0; // Время жизни cookie в часах (0 - сессионные)

// --- 2. Вставка HTML для Nudge в div id="aiButton" ---
const aiButtonContainer = document.getElementById('aiButton');
if (aiButtonContainer) {
  // Создаём элемент nudge
  const nudgeDiv = document.createElement('div');
  nudgeDiv.id = 'aiNudge';
  // Применяем стили напрямую через style, с учётом ширины экрана
  let nudgeStyles;
  if (window.innerWidth <= 768) {
    // Стили для экранов шириной 768px и меньше (мобильные)
    nudgeStyles = `
      display: none;
      position: fixed;
      left: calc(-288px + 100vw);
      bottom: 274px;
      background-color: #eee;
      color: #000;
      padding: 8px 12px;
      border-radius: 8px 8px 0 8px ;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      z-index: 7;
      font-family: Arial, sans-serif;
      font-size: 14px;
      max-width: 200px;
      min-width: 200px;
      height: auto;
      min-height: auto;
      word-wrap: break-word;
      overflow: visible;
      white-space: normal;
      text-overflow: clip;
    `;
  } else {
    // Стили для экранов шириной больше 768px (десктоп, планшет)
    nudgeStyles = `
      display: none;
      position: fixed;
      left: calc(-300px + 100vw);
      bottom: 54px;
      background-color: #eee;
      color: #000;
      padding: 8px 12px;
      border-radius: 8px 8px 0 8px ;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      z-index: 7;
      font-family: Arial, sans-serif;
      font-size: 14px;
      max-width: 200px;
      min-width: 200px;
      height: auto;
      min-height: auto;
      word-wrap: break-word;
      overflow: visible;
      white-space: normal;
      text-overflow: clip;
    `;
  }
  nudgeDiv.style.cssText = nudgeStyles;
  // Вставляем nudge внутрь #aiButton
  aiButtonContainer.appendChild(nudgeDiv);
} else {
  console.error('Элемент #aiButton не найден для вставки nudge.');
}


// --- 3. Функции для работы с Nudge ---

// Функция для получения page_type на основе pathname
// Использует nudgeConfig для определения типа страницы
function getFreshWindPageType(pathname) {
    // Ищем ВСЕ совпадения, потом выбираем наиболее длинное (наиболее специфичное)
    const matchingConfigs = nudgeConfig.filter(config => pathname.includes(config.page_part));

    // Если нашлись совпадения, выбираем конфигурацию с самым длинным page_part
    if (matchingConfigs.length > 0) {
         const matchingConfig = matchingConfigs.reduce((longest, current) =>
             current.page_part.length > longest.page_part.length ? current : longest
         );
         // Возвращаем page_type_for_logic из найденной конфигурации
         return matchingConfig.page_type_for_logic;
    }

    // Если не найдено совпадений, возвращаем 'other' или 'unknown'
    return 'other';
}

// Функция для отправки события в Яндекс.Метрику
function sendYandexMetric(eventName, params) {
    // Используем глобальную функцию ym, как в оригинальном коде
    if (typeof ym === 'function') {
        ym(483168, 'reachGoal', eventName, params); // <- Код счётчика 483168
    }
}

// Функция для открытия чата с UTM (модификация original popupAIclick)
function popupAIclickWithUtm(utmParam) {
    console.log("[CLICK LOGIC] Вызов popupAIclickWithUtm с utmParam:", utmParam);
    // Отправляем событие 'aiclick' или 'widget_nudge_clicked' в зависимости от utmParam
    if (utmParam) {
        ym(483168,'reachGoal','widget_nudge_clicked', { custom_utm: utmParam }); // Отправляем специальное событие с UTM
        console.log("[METRIKA] Отправлено событие 'widget_nudge_clicked' с UTM:", utmParam);
    } else {
        ym(483168,'reachGoal','aiclick'); // Старое событие
        console.log("[METRIKA] Отправлено событие 'aiclick'");
    }

    // Основная логика открытия/скрытия (оригинальная)
    if(aiPopup.style.visibility == 'visible') {
     aiPopup.style.visibility = 'hidden';
     aiButtonPhoto.style.visibility = 'inherit';
     console.log("[UI LOGIC] Чат скрыт, кнопка видима.");
    } else {
     aiPopup.style.visibility = 'visible';
     aiButtonPhoto.style.visibility = 'hidden';
     console.log("[UI LOGIC] Чат показан, кнопка скрыта.");
    }
    if(aiClose.style.display == 'none') {
     aiClose.style.display = 'inherit';
     console.log("[UI LOGIC] Кнопка закрытия показана.");
    } else {
     aiClose.style.display = 'none';
     console.log("[UI LOGIC] Кнопка закрытия скрыта.");
    }

    // --- ОБНОВЛЕНИЕ СОСТОЯНИЯ ПОСЛЕ ОТКРЫТИЯ ЧАТА ---
    // Если чат был открыт (путём клика по кнопке или nudge), помечаем это
    markChatAsOpened();
    console.log("[NUDGE COUNTER] Чат открыт по клику на виджет. Установлен флаг в cookie.");
}


// --- 4. Основная логика инициализации Nudge ---
function initializeNudgeLogic() {
    console.log("Запуск initializeNudgeLogic...");

    // --- ПРОВЕРКИ ОГРАНИЧЕНИЙ ---
    if (hasChatBeenOpened()) {
        console.log("[NUDGE COUNTER] Чат уже открывался в этой сессии. Nudge не показывается.");
        return; // Не показываем nudge, если чат уже был открыт
    }

    if (isPageDepthLimitReached()) {
        console.log("[NUDGE COUNTER] Достигнута максимальная глубина страниц. Nudge не показывается.");
        return; // Не показываем nudge, если достигли лимита страниц
    }

    // Увеличиваем счётчик страниц после проверки лимита
    const pageCountAfterIncrement = incrementPageVisitCount();

    // --- ОПРЕДЕЛЕНИЕ КОНФИГУРАЦИИ ---
    try {
        const currentPathname = window.location.pathname;
        const currentPageType = getFreshWindPageType(currentPathname);

        console.log("Текущий путь:", currentPathname);
        console.log("Тип страницы (предполагаемый):", currentPageType);

        // Ищем ВСЕ совпадения, потом выбираем наиболее длинное (наиболее специфичное)
        const matchingConfigs = nudgeConfig.filter(config => currentPathname.includes(config.page_part));

        // Если нашлись совпадения, выбираем конфигурацию с самым длинным page_part
        let matchingConfig = null;
        if (matchingConfigs.length > 0) {
             matchingConfig = matchingConfigs.reduce((longest, current) =>
                 current.page_part.length > longest.page_part.length ? current : longest
             );
             console.log("Найдена наиболее специфичная конфигурация:", matchingConfig);
        } else {
             console.log("Для текущей страницы конфигурация nudge не найдена.");
             return; // Прекращаем выполнение, если конфиг не подходит
        }

        const delaySeconds = matchingConfig.delay_seconds;
        const showDurationSeconds = matchingConfig.show_duration_seconds;
        const messageText = matchingConfig.message_text;
        const utmParam = matchingConfig.utm_param;

        // Таймер для показа Nudge
        setTimeout(() => {
            const nudgeElement = document.getElementById('aiNudge');

            // Показываем Nudge
            nudgeElement.textContent = messageText;
            nudgeElement.style.display = 'block';

            console.log("Показываем Nudge:", messageText);

            // Отправка события показа Nudge в Метрику
            sendYandexMetric('widget_nudge_shown', {
                page_type: currentPageType,
                delay_seconds: delaySeconds,
                show_duration_seconds: showDurationSeconds,
                message_text: messageText,
                utm_param: utmParam
            });

            // Таймер для скрытия Nudge
            const hideTimer = setTimeout(() => {
                nudgeElement.style.display = 'none';
            }, showDurationSeconds * 1000);

            // Обработчик клика по Nudge
            nudgeElement.addEventListener('click', function(event) {
                event.stopPropagation();

                // Определяем, что nudge был активен (видим)
                const isNudgeVisible = nudgeElement.style.display === 'block';
                if (isNudgeVisible) {
                    // Получаем параметры, как в основном обработчике
                    // const currentPageType = getFreshWindPageType(window.location.pathname); // Уже определён выше
                    // const utmParam = nudgeConfig.find(config => window.location.pathname.includes(config.page_part))?.utm_param; // Уже определён выше

                    // Отправляем событие 'widget_nudge_clicked'
                    ym(483168,'reachGoal','widget_nudge_clicked', { custom_utm: utmParam });

                    // Вызываем функцию открытия/закрытия чата с UTM
                    // Основная логика открытия/скрытия (оригинальная из popupAIclick)
                    if(aiPopup.style.visibility == 'visible') {
                        aiPopup.style.visibility = 'hidden';
                        aiButtonPhoto.style.visibility = 'inherit';
                    } else {
                        aiPopup.style.visibility = 'visible';
                        aiButtonPhoto.style.visibility = 'hidden';
                    }
                    if(aiClose.style.display == 'none') {
                        aiClose.style.display = 'inherit';
                    } else {
                        aiClose.style.display = 'none';
                    }

                    // Скрываем nudge после клика
                    nudgeElement.style.display = 'none';

                    // --- ОБНОВЛЕНИЕ СОСТОЯНИЯ ПОСЛЕ ОТКРЫТИЯ ЧАТА ---
                    // Если чат был открыт (путём клика по nudge), помечаем это
                    markChatAsOpened();
                    console.log("[NUDGE COUNTER] Чат открыт по клику на Nudge. Установлен флаг в cookie.");
                } else {
                    console.warn("[CLICK LOGIC] Клик по Nudge произошёл, но он не был видим. Это неожиданное состояние.");
                }
            });

        }, delaySeconds * 1000); // Переводим секунды в миллисекунды

    } catch (error) {
        console.error('Ошибка при инициализации логики nudge:', error);
    }
}


// --- 5. Переопределение обработчика клика на #aiButton ---
console.log("Переопределение обработчика клика на #aiButton...");
const originalAiButtonClickHandler = aiButton.onclick; // Сохраняем оригинальный обработчик

// Убираем старый обработчик, если он был назначен через .onclick
aiButton.onclick = null;

// Добавляем новый обработчик
aiButton.onclick = function(event) {
    console.log("[CLICK LOGIC] Клик по #aiButton обнаружен.");
    const nudgeElement = document.getElementById('aiNudge');
    const isNudgeVisible = nudgeElement.style.display === 'block';

    if (isNudgeVisible) {
        console.log("[CLICK LOGIC] Nudge активен.");
        // Если nudge активен, отправляем метрику и открываем чат с UTM
        const currentPageType = getFreshWindPageType(window.location.pathname);
        const utmParam = nudgeConfig.find(config => window.location.pathname.includes(config.page_part))?.utm_param;

        // sendYandexMetric('widget_nudge_clicked', { // Вызов перемещён внутрь popupAIclickWithUtm
        //     page_type: currentPageType,
        //     message_text: nudgeElement.textContent,
        //     utm_param: utmParam
        // });

        popupAIclickWithUtm(utmParam);

        // Скрываем nudge при клике
        nudgeElement.style.display = 'none';
        console.log("[CLICK LOGIC] Nudge скрыт после клика.");

    } else {
        console.log("[CLICK LOGIC] Nudge НЕ активен, вызываем обычную логику.");
        // Если nudge неактивен, просто открываем чат без UTM или с UTM null
        popupAIclickWithUtm(null); // или просто originalAiButtonClickHandler()
    }

    // Вызываем оригинальный обработчик, если он был (хотя в ai.js он просто вызывает openAI)
    // if (originalAiButtonClickHandler) { // originalAiButtonClickHandler всегда может быть null, если не был назначен
    //     originalAiButtonClickHandler.call(this, event);
    // }
};


// --- 6. Запуск логики при загрузке DOM ---
document.addEventListener('DOMContentLoaded', initializeNudgeLogic);

// Если DOM уже загружен (например, скрипт подключен позже), запускаем сразу
if (document.readyState === 'loading') {
    // Событие уже повешено выше
} else {
    initializeNudgeLogic();
}

// --- 7. Функции для работы с Cookie и счётчиком страниц ---
/**
 * Получает значение cookie по имени.
 * @param {string} name - Имя cookie.
 * @returns {string|null} Значение cookie или null, если не найдено.
 */
function getCookie(name) {
    const matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : null;
}

/**
 * Устанавливает cookie.
 * @param {string} name - Имя cookie.
 * @param {string} value - Значение cookie.
 * @param {Object} options - Опции cookie (path, domain, secure, expires, maxAge).
 */
function setCookie(name, value, options = {}) {
    options = { path: '/', ...options }; // Путь по умолчанию '/'
    if (COOKIE_LIFETIME_HOURS > 0) {
        options.expires = new Date(Date.now() + COOKIE_LIFETIME_HOURS * 60 * 60 * 1000).toUTCString();
    }
    // Если COOKIE_LIFETIME_HOURS === 0, то expires не устанавливается (сессионная cookie)

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        if (options[optionKey] !== true) {
            updatedCookie += "=" + options[optionKey];
        }
    }

    document.cookie = updatedCookie;
}

/**
 * Удаляет cookie по имени.
 * @param {string} name - Имя cookie.
 */
function deleteCookie(name) {
    setCookie(name, "", { 'max-age': -1 });
}

// --- 8. Функции для управления флагами и счётчиком ---
/**
 * Проверяет, был ли чат открыт пользователем в текущей сессии.
 * @returns {boolean} True, если чат был открыт.
 */
function hasChatBeenOpened() {
    return getCookie('nikanudge_chat_opened') === '1';
}

/**
 * Помечает в cookie, что чат был открыт.
 */
function markChatAsOpened() {
    setCookie('nikanudge_chat_opened', '1');
}

/**
 * Возвращает текущий счётчик посещённых страниц для Nudge.
 * @returns {number} Текущее значение счётчика.
 */
function getCurrentPageVisitCount() {
    const countStr = getCookie('nikanudge_page_count');
    const count = parseInt(countStr, 10);
    return isNaN(count) ? 0 : count;
}

/**
 * Увеличивает счётчик посещённых страниц и сохраняет его в cookie.
 * @returns {number} Новое значение счётчика после увеличения.
 */
function incrementPageVisitCount() {
    const currentCount = getCurrentPageVisitCount();
    const newCount = currentCount + 1;
    setCookie('nikanudge_page_count', newCount.toString());
    console.log(`[NUDGE COUNTER] Счётчик страниц увеличен до: ${newCount}`);
    return newCount;
}

/**
 * Проверяет, достигнута ли максимальная глубина страниц для показа Nudge.
 * @returns {boolean} True, если глубина достигнута или превышена.
 */
function isPageDepthLimitReached() {
    const currentCount = getCurrentPageVisitCount();
    const limit = NUDGE_PAGE_DEPTH_LIMIT;
    const isReached = currentCount >= limit;
    console.log(`[NUDGE COUNTER] Проверка глубины: текущий счётчик=${currentCount}, лимит=${limit}, достигнут=${isReached}`);
    return isReached;
}
}