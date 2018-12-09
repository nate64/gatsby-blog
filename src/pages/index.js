import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'

import Header from '../components/header'

const TemplateWrapper = ({ children, history }) => (
  <div>
    <Helmet>
      title="Nate's Journey"
      meta={[ 
        { name: 'description', content: 'webdev' },
        { name: 'keywords', content: 'programming, javascript, ruby' }
      ]}
    <Helmet/>
    <Header history={history} />
    <Container>
      {children()}
    </Container>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}


export default TemplateWrapper
