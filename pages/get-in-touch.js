import React from "react";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

export default function GetInTouch() {
  const heroContent = (
    <>
      <div className="row">
        <h1 className="animated fadeInUp hero__title col-md-10">
          Get in touch
        </h1>
      </div>
      <div className="row">
        <div className="hero__section animated fadeInUp delay-1s col-md-8">
          <p className="hero__text">
            There is no such thing as a silly question! Contact us today by
            filling in the contact section below, live chat, phone or email. We
            love to hear from you and we are available 7 days a week. Speak to
            us today.
          </p>
        </div>
      </div>
    </>
  );
  return (
    <>
      <Layout heroType="main" heroContent={heroContent}>
        <Head>
          <title>Get in touch</title>
        </Head>
      </Layout>
    </>
  );
}
