// Dark/Light Mode
const toggleBtn = document.getElementById('mode-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Language Switching
const langToggle = document.getElementById('lang-toggle');
let currentLang = 'en';

const translations = {
  en: {
    nav_about: 'About',
    nav_crop: 'Crop Prediction',
    nav_contact: 'Contact',
    hero_title: 'Predict the Best Crop for Your Field',
    hero_desc: 'Enter your field details and get instant crop suggestions!',
    crop_section_title: 'Crop Prediction',
    form_nitrogen: 'Nitrogen (N)',
    form_phosphorous: 'Phosphorus (P)',
    form_potassium: 'Potassium (K)',
    form_temperature: 'Temperature (°C)',
    form_humidity: 'Humidity (%)',
    form_ph: 'Soil pH',
    form_rainfall: 'Rainfall (mm)',
    form_button: 'Predict Crop',
    about_title: 'About This Website',
    about_desc: 'This website, created by Saloni Sikriwal, helps farmers and enthusiasts predict the best crop for their fields using AI. It features a beautiful greenery-themed interface, smooth animations, bilingual support, and responsive design for all devices.',
    contact_title: 'Contact',
    contact_desc: 'Email: contact@salonisikriwal.com'
  },
  hi: {
    nav_about: 'के बारे में',
    nav_crop: 'फसल भविष्यवाणी',
    nav_contact: 'संपर्क',
    hero_title: 'अपने खेत के लिए सर्वश्रेष्ठ फसल का अनुमान लगाएँ',
    hero_desc: 'अपनी खेत की जानकारी डालें और तुरंत फसल सुझाव प्राप्त करें!',
    crop_section_title: 'फसल भविष्यवाणी',
    form_nitrogen: 'नाइट्रोजन (N)',
    form_phosphorous: 'फॉस्फोरस (P)',
    form_potassium: 'पोटैशियम (K)',
    form_temperature: 'तापमान (°C)',
    form_humidity: 'नमी (%)',
    form_ph: 'मृदा pH',
    form_rainfall: 'वर्षा (mm)',
    form_button: 'फसल अनुमानित करें',
    about_title: 'इस वेबसाइट के बारे में',
    about_desc: 'यह वेबसाइट, सलोनी सिकरीवाल द्वारा बनाई गई, किसानों और उत्साही लोगों को उनके खेतों के लिए सर्वोत्तम फसल का अनुमान लगाने में मदद करती है, सुंदर हरियाली-थीम वाले इंटरफेस, सुचारू एनिमेशन, द्विभाषी समर्थन और सभी उपकरणों के लिए उत्तरदायी डिज़ाइन के साथ।',
    contact_title: 'संपर्क',
    contact_desc: 'ईमेल: contact@salonisikriwal.com'
  }
};

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'hi' : 'en';
  langToggle.textContent = currentLang === 'en' ? 'हिंदी' : 'English';
  translatePage();
});

function translatePage() {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if(translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
  document.querySelector('.hero h1').textContent = translations[currentLang].hero_title;
  document.querySelector('.hero p').textContent = translations[currentLang].hero_desc;
  const form = document.getElementById('crop-form');
  form.elements['nitrogen'].placeholder = translations[currentLang].form_nitrogen;
  form.elements['phosphorous'].placeholder = translations[currentLang].form_phosphorous;
  form.elements['potassium'].placeholder = translations[currentLang].form_potassium;
  form.elements['temperature'].placeholder = translations[currentLang].form_temperature;
  form.elements['humidity'].placeholder = translations[currentLang].form_humidity;
  form.elements['ph'].placeholder = translations[currentLang].form_ph;
  form.elements['rainfall'].placeholder = translations[currentLang].form_rainfall;
  form.querySelector('button').textContent = translations[currentLang].form_button;
  document.querySelector('#about h2').textContent = translations[currentLang].about_title;
  document.querySelector('#about p').textContent = translations[currentLang].about_desc;
  document.querySelector('#contact h2').textContent = translations[currentLang].contact_title;
  document.querySelector('#contact p').textContent = translations[currentLang].contact_desc;
}

// Initial translation
translatePage();

// Crop Images (local folder) with English/Hindi
const crops = {
  en: {
    Rice: "images/rice.jpeg",
    Maize: "images/maize.jpeg",
    ChickPea: "images/chickpea.jpeg",
    KidneyBeans: "images/kidneybean.jpeg",
    PigeonPeas: "images/pigeonBean.jpeg",
    MothBeans: "images/mothbean.jpeg",
    MungBean: "images/mungbean.webp",
    Blackgram: "images/blackgram.webp",
    Lentil: "images/lentils.webp",
    Pomegranate: "images/pomegranate.webp",
    Banana: "images/banana.webp",
    Mango: "images/mango.webp",
    Grapes: "images/grapes.webp",
    Watermelon: "images/watermelon.webp",
    Muskmelon: "images/muskmelon.webp",
    Apple: "images/apple.webp",
    Orange: "images/orange.webp",
    Papaya: "images/papaya.webp",
    Coconut: "images/coconut.webp",
    Cotton: "images/cotton.webp",
    Jute: "images/jute.webp",
    Coffee: "images/coffee.webp"
  },
  hi: {
    "चावल": "images/rice.jpeg",
    "मक्का": "images/maize.jpeg",
    "चना": "images/chickpea.jpeg",
    "राजमा": "images/kidneybean.jpeg",
    "तूर": "images/pigeonBean.jpeg",
    "मठ": "images/mothbean.jpeg",
    "मूंग": "images/mungbean.webp",
    "उड़द": "images/blackgram.webp",
    "दाल": "images/lentils.webp",
    "अनार": "images/pomegranate.webp",
    "केला": "images/banana.webp",
    "आम": "images/mango.webp",
    "अंगूर": "images/grapes.webp",
    "तरबूज": "images/watermelon.webp",
    "खरबूज": "images/muskmelon.webp",
    "सेब": "images/apple.webp",
    "संतरा": "images/orange.webp",
    "पपीता": "images/papaya.webp",
    "नारियल": "images/coconut.webp",
    "कपास": "images/cotton.webp",
    "जूट": "images/jute.webp",
    "कॉफ़ी": "images/coffee.webp"
  }
};

// Form Submit - Mock Prediction
const form = document.getElementById('crop-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const cropNames = currentLang === 'en' ? Object.keys(crops.en) : Object.keys(crops.hi);
  const randomCrop = cropNames[Math.floor(Math.random() * cropNames.length)];
  document.getElementById('crop-name').textContent = randomCrop;
  document.getElementById('crop-image').src = crops[currentLang][randomCrop];
  document.getElementById('prediction-result').classList.add('show');
});
