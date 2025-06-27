
import React, { useState, useEffect } from "react";

export default function ChatGPTOTP() {
  const [otp, setOtp] = useState("------");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const generate = () => {
      const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
      setOtp(newOtp);
      setCopied(false);
    };
    generate();
    const interval = setInterval(generate, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#1a202c", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div style={{ background: "#2d3748", borderRadius: 16, padding: 24, textAlign: "center", maxWidth: 280 }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
          alt="ChatGPT Logo"
          style={{ width: 64, height: 64, margin: "0 auto 16px" }}
        />
        <h2 style={{ fontSize: 20, marginBottom: 8 }}>ChatGPT Plus</h2>
        <p style={{ fontSize: 14, color: "#a0aec0", marginBottom: 16 }}>chatgpt.user@email.com</p>
        <div style={{ fontSize: 32, fontWeight: "bold", letterSpacing: 4, marginBottom: 16 }}>{otp}</div>
        <button
          onClick={() => {
            navigator.clipboard.writeText(otp);
            setCopied(true);
          }}
          style={{ background: "#38a169", color: "#fff", padding: "8px 16px", borderRadius: 8, border: "none", cursor: "pointer" }}
        >
          {copied ? "Copied!" : "Copy OTP"}
        </button>
      </div>
    </div>
  );
}
