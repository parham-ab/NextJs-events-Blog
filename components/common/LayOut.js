import React from "react";
import Head from "next/head";

const LayOut = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width" />
        <meta charset="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      {children}
    </div>
  );
};

export default LayOut;
