import React from 'react'
import Layout from "../components/layout";
import SEO from "../components/seo";
import { injectIntl } from 'gatsby-plugin-intl';

const Index = ({ intl }) => {
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: 'title_long' })}
      />
      <h1>{intl.formatMessage({ id: 'home_headline' })}</h1>
      <p>{intl.formatMessage({ id: 'home_intro_copy' })}</p>
    </Layout>
  );
};

export default injectIntl(Index)
