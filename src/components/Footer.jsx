
const Footer = () => {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h4>About Us</h4>
          <p>We connect skilled local workers with customers in nearby areas. Our platform makes hiring trusted professionals simple, fast, and reliable for everyday services.</p>
        </div>

        <div className="footer-column">
          <h4>Contact Info</h4>
          <ul>
            <li>Email: support@localworkerfinder.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Working Hours: 24/7</li>
            <li>Service Areas: Multiple Districts</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Our Policies</h4>
          <ul>
            <li><a href="/about_us">Privacy Policy</a></li>
            <li><a href="/about_us">Terms & Conditions</a></li>
            <li><a href="/about_us">Cancellation Policy</a></li>
            <li><a href="/about_us">Refund Policy</a></li>
          </ul>
        </div>

      </div>
      <div className="footer-bottom">
        <p>© 2026 Local Worker Finder. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
