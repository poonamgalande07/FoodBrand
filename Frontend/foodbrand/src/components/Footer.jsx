import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>EveryBiteTaste</h2>
          <p>Delicious food delivered to your door.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4>Follow Us</h4>
            <ul className="social-icons">
              <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i> Facebook</a></li>
              <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i> Instagram</a></li>
              <li><a href="https://x.com/"><i className="fab fa-twitter"></i> Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 EveryBiteTaste. All rights reserved.</p>
      </div>
    </footer>
  );
}
