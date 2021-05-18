import React from "react";
import PropTypes from "prop-types";
import SiteHelmet from "./siteHelmet";

const hostName = process.env.NEXT_PUBLIC_HOST_NAME || "";

const Layout = ({ children, title, seo, slug, siteConfig }) => {
  siteConfig = {
    ...siteConfig,
    hostName,
  };

  return (
    <>
      {/*
        We created Typography as a React component. If the
        project sends one into this component as a child,
        then don't include the "default" typography.
        */}
      <SiteHelmet title={title} seo={seo} slug={slug} siteConfig={siteConfig} />
      {children}
    </>
  );
};

Layout.defaultProps = {
  siteConfig: {},
};

Layout.propTypes = {
  title: PropTypes.string,
  seo: PropTypes.object,
  slug: PropTypes.string,
  children: PropTypes.node,
  siteConfig: PropTypes.object,
  url: PropTypes.string,
};

export default Layout;
