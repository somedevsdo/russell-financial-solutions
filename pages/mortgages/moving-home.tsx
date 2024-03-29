import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';

export default function MovingHome() {
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
          <title>Moving Home | RFS</title>
          <meta
            name="description"
            content="Our Rayleigh mortgage advisers take the stress out of moving house by sourcing you competitive mortgage rates for your new property. Visit us today!"
          ></meta>
        </Head>
        <div className="row justify-content-md-center">
          <div className="col-md-8 page-content">
            <h1 className="news-page__title">Moving Home</h1>
            <p>
              If you haven&apos;t used our services before then chances are when you purchased this
              property it was a stressful experience right? Why not try us this time? Moving home
              not only changes your surroundings but it&apos;s also a perfect opportunity to review
              your mortgage. Your options are to either keep your current mortgage and use the
              Portability option or look at new deals available.
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
