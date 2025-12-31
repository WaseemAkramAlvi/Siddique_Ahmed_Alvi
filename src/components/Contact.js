export const Contact = () => {
    return `
    <section id="contact" class="section contact-section">
      <div class="container">
        <h2 class="section-title text-center">Contact Me</h2>
        <div class="contact-wrapper">
          <div class="contact-info">
             <h3>Let's Connect</h3>
             <p>Ready to take the next step? Reach out for bookings, collaborations, or just to say hello.</p>
             <div class="contact-items">
               <div class="contact-item">
                 <span>📞</span> +123 456 7890
               </div>
               <div class="contact-item">
                 <span>📧</span> info@siddiquealvi.com
               </div>
               <div class="contact-item">
                 <span>📍</span> City, Country
               </div>
             </div>
          </div>
          <form class="contact-form">
            <div class="form-group">
              <input type="text" placeholder="Your Name" required>
            </div>
            <div class="form-group">
              <input type="email" placeholder="Your Email" required>
            </div>
            <div class="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  `;
};
