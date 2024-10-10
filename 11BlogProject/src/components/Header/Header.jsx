import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: "true"
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className='py-4 shadow bg-gray-800'>
      <Container>
        <nav className='flex items-center'>
          {/* Logo Section */}
          <div className='mr-5 hover:opacity-80 transition-opacity'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>

          {/* Navigation Items */}
          <ul className='flex ml-auto space-x-6'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='px-4 py-2 text-white bg-blue-500 rounded-full transition-colors hover:bg-blue-600 focus:outline-none'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {/* Logout Button for Authenticated Users */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;

