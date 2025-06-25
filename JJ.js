document.addEventListener('DOMContentLoaded', function() {
  // Анимация шапки при скролле
  const header = document.querySelector('header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });

  // Плавная прокрутка для якорных ссылок
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Анимация появления элементов при скролле
  const animateElements = document.querySelectorAll('.feature, .step, .product, .subscription-plan');
  
  function checkScroll() {
    animateElements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.classList.add('animate');
      }
    });
  }
  
  // Проверяем при загрузке
  checkScroll();
  
  // И при скролле
  window.addEventListener('scroll', checkScroll);

  // Параллакс эффект для героя
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', function() {
      const scrollPosition = window.pageYOffset;
      hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });
  }

  // 3D эффект для карточек товаров
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    product.addEventListener('mousemove', (e) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 10;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 10;
      product.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    product.addEventListener('mouseenter', () => {
      product.style.transition = 'all 0.1s ease';
    });

    product.addEventListener('mouseleave', () => {
      product.style.transition = 'all 0.5s ease';
      product.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
  });

  // Анимация для кнопок "Добавить"
  const addButtons = document.querySelectorAll('.add-to-cart');
  addButtons.forEach(button => {
    button.addEventListener('click', function() {
      this.classList.add('clicked');
      setTimeout(() => {
        this.classList.remove('clicked');
      }, 1000);
    });
  });

  // Интерактивные элементы в футере
  const footerColumns = document.querySelectorAll('.footer-column');
  footerColumns.forEach(column => {
    column.addEventListener('mousemove', (e) => {
      const rect = column.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      column.style.setProperty('--mouse-x', `${x}px`);
      column.style.setProperty('--mouse-y', `${y}px`);
    });
  });
});