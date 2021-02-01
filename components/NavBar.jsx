import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <>
      <div className="navbar-container">
        <Link href="/">
          <a className="navbar-link">Guru Finder</a>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
