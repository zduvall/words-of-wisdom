import React from 'react';

const Footer: React.FC = () => (
  <footer className='footer'>
    <div className='content has-text-centered'>
      <p>
        &copy; {new Date().getFullYear()} Words of Wisdom. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
