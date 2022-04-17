import Head from "next/head";
import "../index.scss";

const _app = ({ Component, props }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...props} />
    </>
  );
};

export default _app;
