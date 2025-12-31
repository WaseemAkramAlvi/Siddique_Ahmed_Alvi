export const Header = () => {
    return `
    <nav class="navbar">
      <div class="container navbar-container">
        <a href="#" class="logo">Siddique Alvi<span class="logo-dot">.</span></a>
        
        <div class="nav-toggle" id="nav-toggle">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>

        <ul class="nav-menu" id="nav-menu">
          <li class="nav-item"><a href="#home" class="nav-link">Home</a></li>
          <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
          <li class="nav-item"><a href="#services" class="nav-link">Services</a></li>
          <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
          <li class="nav-item"><a href="#book" class="btn btn-primary nav-btn">Book Session</a></li>
        </ul>
      </div>
    </nav>
  `;
};

export const setupNavigation = () => {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            menu.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            toggle.classList.remove('active');
            menu.classList.remove('active');
        }));
    }
};
