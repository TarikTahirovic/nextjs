import Link from 'next/link';
import { useRouter } from 'next/router';
import { css } from '@emotion/css';
import { AppBar, Button, IconButton, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import PublicIcon from '@mui/icons-material/Public';
import ForumIcon from '@mui/icons-material/Forum';

const navStyles = css`
  background-color: #009688;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72px;
  position: relative;
  @media (max-width: 1024px) {
    flex-direction: column;
    height: 100vh;
    width: 66px;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 16px 0;
  }
`;

const logoStyles = css`
  height: 32px;
  border-radius: 50%;
  @media (max-width: 1024px) {
    margin: auto 0;
  }
`;

const linkStyles = css`
  color: #fff;
  margin-left: 24px;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  transition: background-color 0.2s ease-in-out;
  @media (max-width: 1024px) {
    margin-left: 0;
    width: 100%;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    text-decoration: none;
    border-radius: 5px;
    @media (max-width: 1024px) {
      border-radius: 0;
      width: 100%;
    }
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    @media (max-width: 1024px) {
      border-radius: 0;
      width: 100%;
    }
  }
`;

const logoContainerStyles = css`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const linkItemStyles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 14px;
  gap: 5px;
  .MuiButton-startIcon {
    margin: 0;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const hideOnMobile = css`
  @media (max-width: 1024px) {
    display: none;
  }
`;

const toolBarStyles = css`
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
  }
`;

function Navigation() {
  const router = useRouter();
  const isBlogPage = router.pathname.startsWith('/blog');

  return (
    <AppBar position="static" className={navStyles}>
      <Toolbar className={toolBarStyles}>
        <IconButton edge="start" color="inherit" aria-label="menu" className={logoContainerStyles}>
          <Link href="/profile" passHref className={logoStyles}>
            <img
              src={
                'https://uploads.toptal.io/profile_photo/image/user/220167/large_4e9cd719b54525d8efcf77494ef5fa0c.jpg'
              }
              className={logoStyles}
            />
          </Link>
        </IconButton>
        <div className={`${linkStyles} ${router.pathname === '/' ? 'active' : ''}`}>
          <Link href="/" passHref>
            <Button color="inherit" startIcon={<HomeIcon />} className={linkItemStyles}>
              <span className={hideOnMobile}>Home</span>
            </Button>
          </Link>
        </div>
        <div className={`${linkStyles} ${router.pathname === '/dashboard' ? 'active' : ''}`}>
          <Link href="/dashboard" passHref>
            <Button color="inherit" startIcon={<MenuIcon />} className={linkItemStyles}>
              <span className={hideOnMobile}>Dashboard</span>
            </Button>
          </Link>
        </div>
        <div className={`${linkStyles} ${router.pathname === '/profile' ? 'active' : ''}`}>
          <Link href="/profile" passHref>
            <Button color="inherit" startIcon={<PersonIcon />} className={linkItemStyles}>
              <span className={hideOnMobile}>Profile</span>
            </Button>
          </Link>
        </div>
        <div className={`${linkStyles} ${router.pathname === '/countries-api' ? 'active' : ''}`}>
          <Link href="/countries-api" passHref>
            <Button color="inherit" startIcon={<PublicIcon />} className={linkItemStyles}>
              <span className={hideOnMobile}>Countries</span>
            </Button>
          </Link>
        </div>
        <div className={`${linkStyles} ${isBlogPage ? 'active' : ''}`}>
          <Link href="/blog" passHref>
            <Button color="inherit" startIcon={<ForumIcon />} className={linkItemStyles}>
              <span className={hideOnMobile}>Blog</span>
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
