function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '0px';
    }
  }

  // Float Menu functionality
const floatBtn = document.querySelector('.float-menu-btn');
const floatPanel = document.querySelector('.float-menu-panel');
const homeSection = document.getElementById('home');

// Show/hide float menu based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > homeSection.offsetTop) {
        floatBtn.style.display = 'flex';
    } else {
        floatBtn.style.display = 'none';
        floatPanel.classList.remove('active');
    }
});

// Toggle float menu panel
floatBtn.addEventListener('click', () => {
    floatPanel.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!floatBtn.contains(e.target) && !floatPanel.contains(e.target)) {
        floatPanel.classList.remove('active');
    }
});
  