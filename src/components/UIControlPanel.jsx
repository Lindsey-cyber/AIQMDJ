// src/components/UIControlPanel.jsx

import React from 'react'

export default function UIControlPanel({ onAsk }) {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '40px',
        right: '40px',
        zIndex: 10,
      }}
    >
      <button
        className="ask-button"
        onClick={onAsk}
        style={{
          padding: '10px 20px',
          fontSize: '18px',
          backgroundColor: '#222',
          color: 'white',
          borderRadius: '8px',
          border: '1px solid #555',
          cursor: 'pointer',
        }}
      >
        提问
      </button>
    </div>
  )
}