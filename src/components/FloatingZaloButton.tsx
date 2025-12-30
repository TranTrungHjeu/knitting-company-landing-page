"use client";

import React from "react";

export default function FloatingZaloButton() {
  return (
    <a
      href="https://zalo.me/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Zalo chat"
      className="fixed z-50 right-4 bottom-4 bg-white rounded-full shadow-lg p-3 border border-primary hover:bg-primary hover:text-white transition-colors"
      style={{ boxShadow: '0 2px 12px 0 rgba(44,109,176,0.15)' }}
    >
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><text x="12" y="16" textAnchor="middle" fontSize="12" fill="currentColor">Z</text></svg>
    </a>
  );
}
