export const Hero = () => {
  return `
    <section id="home" class="hero-section">
      <div class="hero-background-text">UNLOCK POTENTIAL</div>
      <div class="hero-container">
        <div class="hero-content-center">
          <h2 class="hero-subtitle-center">Motivational Speaker | Life Coach | Trainer</h2>
          <h1 class="hero-title-center">LIVE YOUR <span class="highlight-text">BEST LIFE</span></h1>
          
          <div class="hero-image-wrapper">
             <img src="my_pic.png" alt="Siddique Ahmed Alvi" class="hero-person-image" />
          </div>


          <div class="hero-actions-center">
             <a href="#contact" class="btn btn-primary btn-large">Book a Session</a>
             <a href="#services" class="btn btn-outline btn-large">My Videos</a>
          </div>
        </div>
      </div>
      <div class="hero-bottom-curve">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,0 L720,100 L1440,0 V100 H0 V0 Z" fill="#F8FAFC"></path>
        </svg>
      </div>
    </section>
  `;
};
