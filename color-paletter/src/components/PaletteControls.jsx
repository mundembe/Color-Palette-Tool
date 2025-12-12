import React from "react";

export default function PaletteControls({ palette, onColorChange }) {
  const onShareEmail = () => {
    // Format a human-friendly body plus JSON
    const human = Object.entries(palette)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    const json = JSON.stringify(palette);

    const body = encodeURIComponent(
      `Here is a color palette I created:\n\n${human}\n\nJSON:\n${json}`
    );
    window.location.href = `mailto:?subject=Shared Color Palette&body=${body}`;
  };

  const onReset = () => {
    if (!confirm("Reset to default palette?")) return;
    const defaults = {
      primary: "#3498db",
      secondary: "#2ecc71",
      accent: "#e67e22",
      background: "#ffffff",
      text: "#333333"
    };
    // set each color via onColorChange calls
    Object.entries(defaults).forEach(([k, v]) => onColorChange(k, v));
  };

  return (
    <aside className="controls-panel">
      <h1>Color Palette</h1>
      <p>Adjust colors and see the preview update live.</p>

      <div style={{ marginTop: "1.25rem" }}>
        {Object.entries(palette).map(([name, value]) => (
          <div key={name} style={{ marginBottom: "1rem", display: "flex", alignItems: "center" }}>
            <label style={{ width: 110, textTransform: "capitalize" }}>{name}</label>
            <input
              type="color"
              value={value}
              onChange={e => onColorChange(name, e.target.value)}
              style={{ width: 56, height: 36, border: "none", background: "none", cursor: "pointer" }}
            />
            <input
              type="text"
              value={value}
              onChange={e => onColorChange(name, e.target.value)}
              style={{ marginLeft: 12, flex: 1, padding: "6px 8px" }}
            />
          </div>
        ))}
      </div>

      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
        <button onClick={onShareEmail}>Share via Email</button>
        <button onClick={onReset}>Reset</button>
      </div>
    </aside>
  );
}
