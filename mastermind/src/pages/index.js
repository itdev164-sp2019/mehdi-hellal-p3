import React from "react"
import { Link } from "gatsby"
import MyApp from '../components/App/MyApp'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {Button} from "../components/Element"


const IndexPage = () => (
  
  <Layout>
    <SEO title="Home" />
       
    <MyApp/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
