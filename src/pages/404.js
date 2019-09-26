import React from 'react'
import Layout from "../components/layout";
import SEO from "../components/seo"
import { injectIntl } from "gatsby-plugin-intl";

const NotFoundPage = ({ intl }) => {
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: '404_title' })} />
      <h1>{intl.formatMessage({ id: '404_message' })}</h1>
    </Layout>
  );
};

export default injectIntl(NotFoundPage)
