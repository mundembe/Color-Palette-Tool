import React, { useState, useEffect } from "react";
import PaletteControls from "./components/PaletteControls";
import MobilePreview from "./components/MobilePreview";
import "./styles/app.css"; // layout styles
import { queryToPalette } from "./utils/palette";

const defaultPalette = {
  primary: "#3498db",
  secondary: "#2ecc71",
  accent: "#e67e22",
  background: "#ffffff",
  text: "#333333"
};

export default function App() {
  const [palette, setPalette] = useState(() => {
    const urlPalette = queryToPalette(window.location.search);
    if (Object.keys(urlPalette).length) return urlPalette;
    const saved = localStorage.getItem("palette");
    return saved ? JSON.parse(saved) : defaultPalette;
  });

  useEffect(() => {
    // apply CSS variables globally
    Object.entries(palette).forEach(([k, v]) => {
      document.documentElement.style.setProperty(`--${k}`, v);
    });
    // persist
    localStorage.setItem("palette", JSON.stringify(palette));
  }, [palette]);

  const updateColor = (name, value) => {
    setPalette(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="app-root">
      <PaletteControls palette={palette} onColorChange={updateColor} />
      <MobilePreview />
    </div>
  );
}
