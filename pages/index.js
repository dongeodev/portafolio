import { Header } from "components/Header";
import { Main } from "components/Main";
import { List } from "components/List";
import { PoolReview } from "components/PoolReview";
import { Footer } from "components/Footer";

import SEO from "components/Seo";
import { seo } from "components/Seo/data";
export default function Home() {
  return (
    <>
      <SEO {...seo} />
      <Header />
      <Main />
      <List />
      <PoolReview />
      <Footer />
    </>
  );
}
