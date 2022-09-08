import Head from "next/head";
import Layout from "../components/layout";
import Date from "../components/date";

import utilStyles from "../styles/utils.module.css";

export async function getStaticProps() {
  return { props: {} };
}

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About this website.</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>Whats the deal?</h1>
        <div className={utilStyles.lightText}>I dunno</div>
      </article>
    </Layout>
  );
}
