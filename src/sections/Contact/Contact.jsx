import { ArrowUpRight, Code2, Mail } from "lucide-react";
import "../PortfolioSections.css";

function Contact() {
  return (
    <>
      <section id="contact" className="editorial-section contact-section">
        <div className="container-wide">
          <span className="section-label">08 / CONTACT</span>

          <div className="contact-layout">
            <div>
              <h2>
                Have an idea?
                <br />
                <span>Let's connect.</span>
              </h2>

              <p>
                I'm interested in meaningful projects, learning opportunities,
                collaboration, and conversations about technology.
              </p>
            </div>

            <div className="contact-links">
              <a
                href="https://github.com/H-akimi07"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <Code2 size={21} />
                <span>
                  <strong>GitHub</strong>
                  <small>Explore my code and projects</small>
                </span>
                <ArrowUpRight size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/samira-hakimi-342228289"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <Code2 size={21} />
                <span>
                  <strong>LinkedIn</strong>
                  <small>Connect professionally</small>
                </span>
                <ArrowUpRight size={19} />
              </a>
              <a
                href="mailto:hakimisameera56@gmail.com"
                className="contact-link"
              >
                <Mail size={21} />
                <span>Email me</span>
                <ArrowUpRight size={16} />
                hakimisameera56@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-bottom">
            <Mail size={16} />
            <span>Open to genuine conversations and opportunities.</span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container-wide site-footer__inner">
          <a href="#top" className="site-footer__brand">
            <span className="site-footer__monogram">SH</span>
            <span>Samira Hakimi</span>
          </a>

          <span className="site-footer__note">BUILD / THINK / EXPLORE</span>

          <a href="#top" className="site-footer__top">
            Back to top <ArrowUpRight size={15} />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Contact;
