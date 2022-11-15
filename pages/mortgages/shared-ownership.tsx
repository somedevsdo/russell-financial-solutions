import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';

export default function HelpToBuy() {
  const heroContent = (
    <>
      <div className="hero__breadcrumb col-md-10">
        <Link href="/">
          <a className="hero__breadcrumb-link">Home</a>
        </Link>
        /{' '}
        <Link href="/mortgages">
          <a className="hero__breadcrumb-link">
            <strong>Mortgages</strong>
          </a>
        </Link>
      </div>
    </>
  );
  return (
    <>
      <Layout heroType="mortgages" heroContent={heroContent}>
        <Head>
          <title>Shared ownership mortgages | RFS</title>
          <meta
            name="description"
            content="Find competitive shared ownership mortgage rates with our experienced Rayleigh mortgage advisers today. We’ll help you get on the property ladder, call us today."
          ></meta>
        </Head>

        <div className="row justify-content-md-center">
          <div className="col-md-8 page-content">
            <h1 className="news-page__title">Shared Ownership</h1>
            <p>
              Shared ownership is another avenue for people to get on the ladder. You purchase a
              share of the property with a mortgage and the remaining share you pay rent on. The
              rent is paid to whoever jointly owns the property. This is where some advice is needed
              as you really need to look at all your options.
            </p>
            <h2>Contact Our Mortgage Advisers Today</h2>
            <p>
              Contact RFS in Rayleigh today to receive our expert guidance and mortgage advice. Our
              specialist mortgage brokers are on hand to make finding the right mortgage for you
              efficient, quick, and stress-free.
            </p>
            <p>
              <Link href="/get-in-touch/">
                <a className="button">Get in touch</a>
              </Link>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
