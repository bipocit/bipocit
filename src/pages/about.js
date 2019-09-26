import React from 'react'
import Layout from "../components/layout";
import SEO from "../components/seo"
import { injectIntl } from "gatsby-plugin-intl";

const About = ({ intl }) => {
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'about_title' })} />
      <h1>{intl.formatMessage({ id: 'about_copy' })}</h1>
    </Layout>
  );
};

export default injectIntl(About)
