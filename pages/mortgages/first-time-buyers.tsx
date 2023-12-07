import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';

export default function FirstTimeBuyers() {
  const heroContent = (
    <>
      <div className="hero__breadcrumb col-md-10">
        <Link legacyBehavior href="/">
          <a className="hero__breadcrumb-link">Home</a>
        </Link>
        /{' '}
        <Link legacyBehavior href="/mortgages">
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
          <title>First time buyers | RFS</title>
          <meta
            name="description"
            content="If you’re looking for a first time buyers’ mortgage, you need the personalised approach and competitive rates of our mortgage advisers in Rayleigh."
          ></meta>
          <meta
            name="keywords"
            content="first time buyers mortgage, mortgage advisers, mortgage advisers for first time buyers, mortgage brokers, mortgage advice"
          ></meta>
        </Head>
        <div className="row justify-content-md-center">
          <div className="col-md-8 page-content">
            <h1 className="news-page__title">First Time Buyers&apos; Mortgage</h1>
            <p>
              Buying your first property can be exciting as you get ready to start a new chapter in
              your life, but it is also filled with difficult and confusing choices. As a first time
              buyer, the idea of a mortgage may seem daunting, and we don’t blame you. At RFS, we
              make securing your first time buyers’ mortgage a lot more straight-forward, helping
              you fully understand your options and get on your way to getting your first home.
            </p>
            <h2>Simplifying the Process</h2>
            <p>
              Where other mortgage advisers will use jargon terms, we will talk to you on the same
              level. We strip all of the complications and difficulties out of finding your mortgage
              for you, making sure you understand every step of the process. We’ll talk you through
              your options, discuss the best ones suited to you, and provide our professional
              advice. Our support is available to you right up until you secure the keys to your new
              home. We deal with all of the communication between estate agents and solicitors on
              your behalf, so you can get on the lucrative property ladder with minimal fuss. Let us
              do the hard work for you.
            </p>
            <p>
              Our team of skilled mortgage advisers for first time buyers take the stress out of the
              process for you. We’re a dedicated award winning team that have earned ourselves an
              exemplary reputation in Rayleigh, Essex, and our multitude of client reviews speak for
              themselves. We work hard for our clients and go above and beyond to make sure you’re
              comfortable, satisfied, and feel fully informed on the process as a whole. We may
              surprise you with the mortgages we’re able to source for you.
            </p>
            <h2>Help to Buy Scheme Assistance</h2>
            <p>
              Through their help-to-buy scheme, the government has made up to 95% of mortgages more
              accessible to those with a smaller deposit. While this is great news for first time
              buyers using the help to buy scheme, the landscape of mortgages for first homes can
              still be very intimidating. Let our mortgage brokers in Rayleigh, Essex help you move
              into your property as first time homeowners.
            </p>
            <h2>Contact Our Mortgage Advisers Today</h2>
            <p>
              Contact RFS in Rayleigh today to receive our expert guidance and mortgage advice. Our
              specialist mortgage brokers are on hand to make finding the right mortgage for you
              efficient, quick, and stress-free.
            </p>
            <p>
              <Link legacyBehavior href="/get-in-touch/">
                <a className="button">Get in touch</a>
              </Link>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
