import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Link from 'next/link';

export default function Insurance() {
  const heroContent = (
    <>
      <div className="row">
        <h1 className="animated fadeInUp hero__title col-md-8">Insurance</h1>
      </div>
      <div className="row">
        <div className="hero__section animated fadeInUp delay-1s col-md-8">
          <p className="hero__text">
            RFS can also help you with ways in which to help protect you and your family against the
            impact of death or critical illness. How can you do that you may ask? Life Protection
            can be used to pay off your outstanding mortgage debt or to help protect your
            family&apos;s lifestyle and everyday living expenses. So if the worst was to happen then
            you have the peace of mind knowing that your family are taken care of. There are also
            policies called Family Income Benefit insurance that pays out a regular income instead
            of a lump sum. The choice is yours.
          </p>
        </div>
      </div>
      <div className="row">
        <p className="animated fadeInUp delay-1s hero__buttons col">
          <a href="#" className="button">
            Request a callback
          </a>
        </p>
      </div>
    </>
  );
  return (
    <>
      <Layout heroType="main hero--insurance" heroContent={heroContent}>
        <Head>
          <title>Insurance cover in Rayleigh | RFS</title>
          <meta
            name="description"
            content="We are proud to offer personalised life insurance and protection services in Rayleigh for you and your family. Protect yourself and your family today."
          ></meta>
        </Head>
        <div className="row justify-content-md-center">
          <div className="col-md-8 page-content">
            <ul>
              <li>
                <Link href="/insurance/critical-illness-cover">
                  <a>Critical Illness Cover</a>
                </Link>
              </li>
              <li>
                <Link href="/insurance/income-protection-insurance">
                  <a>Income Protection Insurance</a>
                </Link>
              </li>
              <li>
                <Link href="/insurance/life-insurance">
                  <a>Life Insurance</a>
                </Link>
              </li>
            </ul>
            <h2>Contact Our Insurance Advisers Today</h2>
            <p>
              Contact RFS in Rayleigh today to receive our expert guidance and insurance advice.
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
