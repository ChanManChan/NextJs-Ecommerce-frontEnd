import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import Header from './Header';
import Meta from './Meta';

const theme = {
  red: '#f44336',
  black: '#212121',
  grey: '#616161',
  lightGrey: '#e0e0e0',
  offWhite: '#f5f5f5',
  maxWidth: '62.5rem',
  bs: '0 .75rem 1.5rem 0 rgba(0,0,0,0.09)',
};

const StyledPage = styled.div`
  background: #fff;
  color: ${(props) => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

export default class Page extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <StyledPage>
            <Meta />
            <Header />
            <Inner>{this.props.children}</Inner>
          </StyledPage>
        </ThemeProvider>
      </>
    );
  }
}
