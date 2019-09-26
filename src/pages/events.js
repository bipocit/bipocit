import React from 'react'
import Layout from "../components/layout";
import SEO from "../components/seo"
import { injectIntl } from "gatsby-plugin-intl";

const Events = ({ intl }) => {
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'events_title' })} />
      <h1>{intl.formatMessage({ id: 'past_events_label' })}</h1>
    </Layout>
  );
};

export default injectIntl(Events)
