import React from 'react';

const Footer = () => {
    return (
       <footer className=" footer sm:footer-horizontal footer-center bg-base-300 p-6 max-w-[2500px] mx-auto">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Elora Yasmin</p>
  </aside>
</footer>
    );
};

export default Footer;