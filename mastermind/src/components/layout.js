/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import {ThemeProvider} from 'styled-components'
import {Theme_1 as theme } from '../themes/FirstTheme'
import Header from "./header"
import "./layout.css"
import "./App/MyApp.css"
import {Main, Footer} from '../components/Element'
import InfoBar from '../components/Game/InfoBar';
import logo from '../images/logo.svg';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <InfoBar/>
        <div
          style={{
            //margin: `0 auto`,
            //maxWidth: 960,
            //padding: `0px 1.0875rem 1.45rem`,
            //paddingTop: 0,
            //backgroundColor: `#1879e0`,
          }}
        >
        
        <Main>{children}</Main>
        <Footer>
          
            <h3 style={{color :"white", textAlign:"right"}}>
            
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </h3>
          
         
        </Footer>
      </div>
      </>
    )}
  />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
