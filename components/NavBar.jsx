import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <>
      <div>
        <Link href="/">
          <a>GuruFinder</a>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
