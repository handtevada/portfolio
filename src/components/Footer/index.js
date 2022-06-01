import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer-section'>
      {`©${currentYear}  Keerati | `}
      <a href='https://github.com/handtevada/portfolio'>Github</a> |{' '}
      <a href='https://medium.com/@directorys/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-portfolio-web-app-%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B9%80%E0%B8%81%E0%B8%A3%E0%B9%8B%E0%B9%86-%E0%B8%AA%E0%B9%84%E0%B8%95%E0%B8%A5%E0%B9%8C%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B9%80%E0%B8%A1%E0%B8%AD%E0%B8%A3%E0%B9%8C-8c82175a71bb'>
        Blog
      </a>
    </div>
  );
};

export default Footer;
