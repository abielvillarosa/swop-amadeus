import React from 'react'
import PropTypes from 'prop-types'
import Site from './layout/Site'
import Content from './layout/Content'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Router from './layout/Router'

const Layout = ({ children }) => (
  <Site>
    {/* <Header></Header> */}
    <Content>
      <Router />
    </Content>
    <Footer />
  </Site>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout