import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';

export default function IncomeProtectionInsurance() {
  const heroContent = (
    <>
      <div className="hero__breadcrumb col-md-10">
        <Link href="/">
          <a className="hero__breadcrumb-link">Home</a>
        </Link>
        /{' '}
        <Link href="/insurance">
          <a className="hero__breadcrumb-link">
            <strong>Insurance</strong>
          </a>
        </Link>
      </div>
    </>
  );
  return (
    <>
      <Layout heroType="mortgages" heroContent={heroContent}>
        <Head>
          <title>Life insurance | Russell Financial Solutions</title>
          <meta
            name="description"
            content="We are proud to offer personalised life insurance and protection services in Rayleigh for you and your family. Protect yourself and your family today."
          ></meta>
        </Head>

        <div className="row justify-content-md-center">
          <div className="col-md-8 page-content">
            <h1 className="news-page__title">Income Protection Insurance</h1>
            <h2>What is income protection insurance?</h2>
            <p>
              Income protection insurance (sometimes known as permanent health insurance) is a
              long-term insurance policy designed to help you if you can’t work because you’re ill
              or injured.
            </p>
            <p>
              It ensures you continue to receive a regular income until you retire or are able to
              return to work.
            </p>
            <ul>
              <li>
                <strong>It replaces part of your income</strong> - if you can’t work because you
                become ill or disabled.
              </li>
              <li>
                <strong>It pays out until you can start working again</strong> - or until you
                retire, die or the end of the policy term - whichever is sooner.
              </li>
              <li>
                <strong>There’s often a waiting period before the payments start</strong> - you
                generally set payments to start after your sick pay ends, or after any other
                insurance stops covering you. The longer you wait, the lower the monthly premiums.
              </li>
              <li>
                <strong>It covers most illnesses that leave you unable to work</strong> - either in
                the short or long term (depending on the type of policy and its definition of
                incapacity).
              </li>
              <li>
                <strong>You can claim as many times as you need to</strong> - while the policy
                lasts.
              </li>
            </ul>
            <p>
              It’s not the same as critical illness insurance, which pays out a one-off lump sum if
              you have a specific serious illness.
            </p>
            <p>
              It’s not the same as short-term income protection, which also pays out a monthly sum
              related to your income, but only for a limited period of time (normally between two
              and five years) and can cover fewer illnesses or situations.
            </p>
            <h2>Do you need it?</h2>
            <p>
              According to the ABI, one million workers a year find themselves unable to work due to
              a serious illness or injury.
            </p>
            <p>
              It doesn’t matter whether or not you have children or other dependants – if illness
              would mean you couldn’t pay the bills, you should consider income protection
              insurance.
            </p>
            <p>
              You’re most likely to need it if you’re self-employed or employed and you don’t have
              sick pay to fall back on.
            </p>
            <p>Check what your employer will provide for you if you’re off sick.</p>
            <p>
              Payment Protection Insurance is optional. There are other providers of Payment
              Protection Insurance and other products designed to protect you against the loss of
              income.
            </p>
            <h2>Contact Our Insurance Advisers Today</h2>
            <p>
              Contact Russell Financial Solutions in Rayleigh today to receive our expert guidance
              and insurance advice.
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
