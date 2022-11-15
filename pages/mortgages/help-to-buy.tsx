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
          <title>Help to buy advisors Rayleigh | RFS</title>
          <meta
            name="description"
            content="Our help to buy experts in Rayleigh will give you our best advice so you can get on the property ladder faster, easier, and stress-free. Visit us today!"
          ></meta>
        </Head>

        <div className="row justify-content-md-center">
          <div className="col-md-8 page-content">
            <h1 className="news-page__title">Help to Buy</h1>
            <p>
              This is a Government backed scheme introduced in April 2013 designed to help first
              time buyers or home movers to purchase a property up to the value of £600,000. There
              are 2 Phases
            </p>
            <h2>Phase 1</h2>
            <p>
              The government will give you an equity loan of 20% of the property value and you would
              put in 5%. The 25% deposit means that you will have many lenders available and because
              of the deposit you will have a good range of interest rates available.
            </p>
            <p>
              The government loan is interest-free for the first five years and borrowers will be
              charged a fee of 1.75% each year, this figure will rise in line with the Retail Prices
              Index each year after this.
            </p>
            <h2>Phase 2</h2>
            <p>
              The Government gave another option to lenders. They would guarantee the mortgage
              against negative equity. You can put a 5% deposit and there will be no Mortgages
              Indemnity Premium as the Government Guarantees the mortgage. Bringing in Phase 2 meant
              that lenders are more secure and so made 95% mortgages more favourable.
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
