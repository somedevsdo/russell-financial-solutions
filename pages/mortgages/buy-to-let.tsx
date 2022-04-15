import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';

export default function BuyToLet() {
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
          <title>Buy to let</title>
        </Head>

        <div className="row justify-content-md-center">
          <div className="col-md-8 page-content">
            <h1 className="news-page__title">Buy to Let</h1>
            <h2>Calling all Property Investors? Buy to lets interest you?</h2>
            <p>
              Do you ever watch a lot of house programs on TV and think? Hmm that&apos;s a good
              idea, I could do that? Not earning as much interest on your cash in the bank as you
              would like too? Well property is a great way to invest if done properly. Whether
              you&apos;re a new or an experienced investor we will be able to help you find the most
              suitable mortgage for you.
            </p>
            <p>
              Also if you already own a property then re-mortgaging this could be the perfect way to
              release equity and enable you to start or increase your own property portfolio?
            </p>
            <p>
              <em>Please note that some Buy to Let mortgages are not regulated by the FCA.</em>
            </p>
            <h2>Contact Our Mortgage Advisers Today</h2>
            <p>
              Contact Russell Financial Solutions in Rayleigh today to receive our expert guidance
              and mortgage advice. Our specialist mortgage brokers are on hand to make finding the
              right mortgage for you efficient, quick, and stress-free.
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
