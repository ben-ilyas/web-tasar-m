const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    let isShrunk = false;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 30 && !isShrunk) {
            navbar.classList.add('shrink');
            isShrunk = true;
        } else if (window.scrollY <= 30 && isShrunk) {
            navbar.classList.remove('shrink');
            isShrunk = false;
        }
    });

    navbar.addEventListener('mouseenter', () => {
        navbar.classList.remove('shrink');
        isShrunk = false;
    });

    const images = document.querySelectorAll('.slider-img');
    const leftBtn = document.querySelector('.slider-arrow.left');
    const rightBtn = document.querySelector('.slider-arrow.right');
    let current = 0;

    function showImage(idx) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === idx);
        });
    }

    leftBtn.addEventListener('click', () => {
        current = (current - 1 + images.length) % images.length;
        showImage(current);
    });
    rightBtn.addEventListener('click', () => {
        current = (current + 1) % images.length;
        showImage(current);
    });

    // Sayfa yüklendiğinde ilk resmi göster
    showImage(current);

    function toggleMenu() {
  document.querySelectorAll('.navbar-menu').forEach(menu => {
    menu.classList.toggle('show');
  });
  
  function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('show');
}

}
document.addEventListener("DOMContentLoaded", function() {
  let currentHash = window.location.hash;
  const menuLinks = document.querySelectorAll(".navbar-menu li a");

  // Hash yoksa default olarak #home seçilsin
  if (!currentHash || currentHash === "") {
    currentHash = "#home";
  }

  menuLinks.forEach(link => {
    link.parentElement.classList.remove("active");

    if (link.getAttribute("href") === currentHash) {
      link.parentElement.classList.add("active");
    }
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const menuLinks = document.querySelectorAll(".navbar-menu li a");
  const sections = document.querySelectorAll("section"); // bölümler <section id="...">

  // Sayfa açıldığında default olarak #home aktif
  function setActiveLink(hash) {
    menuLinks.forEach(link => {
      link.parentElement.classList.remove("active");
      if (link.getAttribute("href") === hash) {
        link.parentElement.classList.add("active");
      }
    });
  }

  // İlk yükleme -> hash varsa onu, yoksa #home'u aktif et
  let currentHash = window.location.hash || "#home";
  setActiveLink(currentHash);

  // Scroll spy -> hangi bölüm görünüyorsa onu aktif et
  window.addEventListener("scroll", () => {
    let current = "#home"; // default
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        current = "#" + section.id;
      }
    });
    setActiveLink(current);
  });
});
document.querySelectorAll(".navbar-menu li a").forEach(link => {
  link.addEventListener("mouseenter", e => {
    const bounding = link.getBoundingClientRect();
    const x = e.clientX - bounding.left; // fare linke göre x konumu
    if (x < bounding.width / 2) {
      link.style.setProperty("--origin", "left");
    } else {
      link.style.setProperty("--origin", "right");
    }
  });
});
