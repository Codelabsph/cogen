import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

const SiteHelmet = (props) => {
  let { seo, slug, title, siteConfig } = props;
  let { name, author, twitterUsername, icon, hostName } = siteConfig;
  let { metaDescription, image } = seo;
  let canonical;

  if (slug) {
    hostName = hostName.endsWith("/") ? hostName : `${hostName}/`;
    slug = slug.endsWith("/") ? slug : `${slug}/`;
    canonical = `${hostName}${slug}`;
  }

  const siteTitle = `${title || "CoGen"} - ${name || ""}`;
  const apiKey = process.env.NEXT_PUBLIC_GOOLE_MAPS_API_KEY;
  return (
    <Head>
      <script
        src={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`}
        defer
        async
      />
      {/* Standard meta tags */}
      {siteTitle && <title>{siteTitle}</title>}
      {canonical && <link rel="canonical" href={canonical} />}
      {metaDescription && <meta name="description" content={metaDescription} />}
      {/* Open Graph Tags (for Facebook) */}
      <meta property="og:url" content={canonical} />
      {icon && <link rel="icon" type="image/png" href={icon.fixed.src} />}
      <meta property="og:type" content="website" />
      {name && <meta property="og:site_name" content={name} />}
      {title && <meta property="og:title" content={title} />}
      {metaDescription && (
        <meta property="og:description" content={metaDescription} />
      )}
      {image && (
        <meta property="og:image" content={`https:${image.fixed.src}`} />
      )}
      {image && <meta property="og:image:type" content="image/jpeg" />}
      {image && (
        <meta property="og:image:height" content={image.fixed.height} />
      )}
      {image && <meta property="og:image:width" content={image.fixed.width} />}
      {image && image.description && (
        <meta property="og:image:alt" content={image.description} />
      )}
      {/* Twitter tags */}
      {twitterUsername && (
        <meta name="twitter:site" content={twitterUsername} />
      )}
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      <meta name="twitter:title" content={title} />
      {metaDescription && (
        <meta name="twitter:description" content={metaDescription} />
      )}
      {image && (
        <meta name="twitter:image" content={`https:${image.fixed.src}`} />
      )}
      {image && image.description && (
        <meta name="twitter:image:alt" content={image.description} />
      )}
      <meta property="twitter:image:type" content="image/jpeg" />
      <meta name="twitter:card" content="summary" />
      {author && <meta property="article:author" content={author} />}
      <meta name="theme-color" content="#fff" />
      <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
    </Head>
  );
};

SiteHelmet.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
  seo: PropTypes.shape({
    metaDescription: PropTypes.string,
    image: PropTypes.object,
  }),
  slug: PropTypes.string,
  siteConfig: PropTypes.shape({
    name: PropTypes.string.isRequired,
    author: PropTypes.string,
    twitterUsername: PropTypes.string,
    icon: PropTypes.object.isRequired,
    hostName: PropTypes.string.isRequired,
  }),
};

SiteHelmet.defaultProps = {
  seo: {},
};

export default SiteHelmet;
