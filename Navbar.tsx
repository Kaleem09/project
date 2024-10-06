// components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#0070f3' }}>
      <div style={{ color: 'white', fontSize: '24px' }}>Logo</div>
      <div>
        <Link href="/signup">
          <button style={{ marginRight: '10px', padding: '10px', border: 'none', borderRadius: '5px' }}>Signup</button>
        </Link>
        <Link href="/login">
          <button style={{ padding: '10px', border: 'none', borderRadius: '5px' }}>Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
