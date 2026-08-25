export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <h3>Step up to a modern operational cockpit</h3>
        <p>Join thousands of technical business leads standardizing their reports.</p>
        <div className="cta-row">
          <button type="button" className="primary-btn">Book a Call</button>
          <button type="button" className="secondary-btn dark">Get Started Free</button>
        </div>
      </div>

      <div className="footer-meta">
        <div>
          <div className="brand">Kvant</div>
          <p>The modern analytical dashboard system engineered for lightning-fast retail operations.</p>
        </div>

        <div className="footer-links">
          <div>
            <h5>Product</h5>
            <a href="#">Features</a>
            <a href="#">Integrations</a>
            <a href="#">Pricing</a>
          </div>
          <div>
            <h5>Company</h5>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
          </div>
          <div>
            <h5>Resources</h5>
            <a href="#">API Docs</a>
            <a href="#">Help Desk</a>
            <a href="#">Community</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
