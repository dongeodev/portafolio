import Head from "next/head";

export default function SEO({ description, title, siteTitle, url }) {
  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="https://i.ibb.co/sJj6k3d/dongeo.png" />
      <link rel="shortcut icon" type="image/x-icon" href="/dev.ico"></link>
    </Head>
  );
}
