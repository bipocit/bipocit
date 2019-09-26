import React from 'react'
import Layout from "../components/layout";
import SEO from "../components/seo"
import { injectIntl } from "gatsby-plugin-intl";

const Donate = ({ intl }) => {
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'donate_title' })} />
      <h1>{intl.formatMessage({ id: 'donate_copy' })}</h1>
    </Layout>
  );
};

export default injectIntl(Donate)
