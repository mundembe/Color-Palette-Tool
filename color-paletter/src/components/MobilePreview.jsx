import React from "react";
import "../styles/preview.css";

export default function MobilePreview() {
  return (
    <main className="preview-panel">
      <div className="phone-frame" role="region" aria-label="Mobile preview">
        <header className="phone-header">
          <div className="nav-title">Demo Site</div>
          <div className="nav-action">Menu</div>
        </header>

        <section className="phone-main">
          <h2 style={{ color: "var(--primary)" }}>Welcome</h2>
          <p>This preview uses CSS variables so your changes apply instantly.</p>

          <button className="btn btn-primary">Primary Action</button>
          <button className="btn btn-secondary">Secondary Action</button>

          <div className="accent-card">
            <h3>Accent Card</h3>
            <p>Example component using the accent color.</p>
          </div>
        </section>

        <footer className="phone-footer">
          <small>© Demo</small>
        </footer>
      </div>
    </main>
  );
}
