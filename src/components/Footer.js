export const Footer = () => {
    return `
    <footer class="footer">
      <div class="container footer-container">
        <div class="footer-logo">Siddique Alvi<span class="logo-dot">.</span></div>
        <div class="social-links">
          <a href="#" class="social-link">Instagram</a>
          <a href="#" class="social-link">LinkedIn</a>
          <a href="#" class="social-link">Twitter</a>
        </div>
        <div class="copyright">
          © ${new Date().getFullYear()} Siddique Ahmed Alvi. All rights reserved.
        </div>
      </div>
    </footer>
  `;
};
