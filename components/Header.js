import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: ${(props) => props.theme.red};
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 81.25rem) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeaders = styled.header`
  .bar {
    border-bottom: 10px solid ${(props) => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 81.25rem) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 3px solid ${(props) => props.theme.lightGrey};
  }
`;

const Header = () => (
  <StyledHeaders>
    <div className='bar'>
      <Logo>
        <Link href='/'>
          <a>Surplus Stock</a>
        </Link>
      </Logo>
      <Nav />
    </div>
    <div className='sub-bar'>
      <p>Searchs</p>
    </div>
    <div>Cart</div>
  </StyledHeaders>
);

export default Header;
