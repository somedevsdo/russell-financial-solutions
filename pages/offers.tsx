import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Link from 'next/link';

export default function Offers() {
  const heroContent = (
    <>
      <div className="row">
        <h1 className="animated fadeInUp hero__title col-md-10">Offers</h1>
      </div>
    </>
  );
  return (
    <>
      <Layout heroType="main" heroContent={heroContent}>
        <Head>
          <title>Offers | RFS Ltd</title>
          <meta
            name="description"
            content="Free Mortgage and Protection Advice. Police, NHS, Fire Service, Teachers and Armed Forces receive a FREE no fee service as a thank you . We will source you the best mortgage tailored to you from a Full comprehensive range of Lenders in the UK and hand hold you through the process from start to finish."
          ></meta>
        </Head>
        <div className="row justify-content-md-center">
          <div className="col-md-8 page-content">
            <h2>Free Mortgage and Protection Advice</h2>
            <p>
              <img alt="Thank you" src="/images/offers/thank-you.jpg" />
            </p>
            <p>
              <strong>
                Police, NHS, Fire Service, Teachers and Armed Forces receive a FREE no fee service
                as a thank you
              </strong>{' '}
              *
            </p>
            <p>
              We will source you the best mortgage tailored to you from a Full comprehensive range
              of Lenders in the UK and hand hold you through the process from start to finish.
            </p>
            <p>
              For more details, call us on 01268 330880 or{' '}
              <Link href="/get-in-touch">
                <a>get in touch</a>
              </Link>
              .
            </p>
            <p>
              *
              <em>
                Free fee service is only applicable to current employment in POLICE, NHS, FIRE
                SERVICE, TEACHERS AND ARMED FORCES.
              </em>
            </p>
            <h2>Lifetime Fees Free For Our Existing Loyal Customers</h2>
            <p>
              <img alt="" src="/images/offers/image001.jpg" />
            </p>
            <p>
              Yes it&apos;s true! For all existing clients of RFS Ltd, you will receive a lifetime
              FEES FREE service on any new purchases, remortgages, and also includes reviewing your
              insurance and protection needs for Free.
            </p>
            <p>
              Our customers mean everything to us so we want you to feel looked after. Not only at
              the first stage but for the future aswell.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
