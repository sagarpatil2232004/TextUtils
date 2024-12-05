import React from 'react';

export default function Footer() {
  const fStyle = {
    marginTop: 'auto', // Push the footer to the bottom when content is short
    width: '100%',
    backgroundColor: 'darkslategray',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
  };

  return (
    <footer style={fStyle}>
      This is my footer
    </footer>
  );
}
