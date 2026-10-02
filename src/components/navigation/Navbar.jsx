import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import "./Navbar.css";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Lab", href: "#lab" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(
    () => document.documentElement.dataset.theme === "light",
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = isLightMode ? "dark" : "light";

    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    setIsLightMode(nextTheme === "light");
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#top" className="brand" aria-label="Samira Hakimi home">
          <span className="brand__mark">SH</span>
          <span className="brand__name">Samira Hakimi</span>
        </a>

        <nav className="navbar__links" aria-label="Main navigation">
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href} className="nav-link">
              <span className="nav-link__number">0{index + 1}</span>

              <span>{item.label}</span>

              <span className="nav-link__signal" />
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              isLightMode ? "Switch to dark mode" : "Switch to light mode"
            }
          >
            {isLightMode ? (
              <Moon size={18} strokeWidth={1.7} />
            ) : (
              <Sun size={18} strokeWidth={1.7} />
            )}
          </button>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? (
              <X size={22} strokeWidth={1.7} />
            ) : (
              <Menu size={22} strokeWidth={1.7} />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}
      >
        <nav aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-menu__link"
              onClick={handleNavClick}
            >
              <span className="mobile-menu__number">0{index + 1}</span>

              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="mobile-menu__footer">BUILD / THINK / EXPLORE</div>
      </div>
    </header>
  );
}

export default Navbar;
