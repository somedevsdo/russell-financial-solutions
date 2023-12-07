import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';

export default function IncomeProtectionInsurance() {
  const heroContent = (
    <>
      <div className="hero__breadcrumb col-md-10">
        <Link legacyBehavior href="/">
          <a className="hero__breadcrumb-link">Home</a>
        </Link>
        /{' '}
        <Link legacyBehavior href="/insurance">
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
          <title>Life insurance | RFS</title>
          <meta
            name="description"
            content="We are proud to offer personalised life insurance and protection services in Rayleigh for you and your family. Protect yourself and your family today."
          ></meta>
        </Head>

        <div className="row justify-content-md-center">
          <div className="col-md-8 page-content">
            <h1 className="news-page__title">Life Insurance</h1>
            <p>
              Life insurance, also known as life cover, acts as a financial lifeline for your loved
              ones once you’re gone. There are many types of life insurance policies out there, but
              at RFS, we aim to make the process of choosing the right plan for you as easy and
              stress-free as possible.
            </p>
            <p>
              Our skilled insurance advisers in Rayleigh will ensure that you choose the best life
              insurance policy to suit your individual needs, meaning your loved ones can be looked
              after financially when you’re no longer around. If you need advice and would like to
              speak to one of our insurance advisers in Rayleigh today, don’t hesitate to{' '}
              <Link legacyBehavior href="/get-in-touch">
                <a>get in touch</a>
              </Link>
              .
            </p>
            <h2>How does Life Insurance work?</h2>
            <p>
              Life insurance involves making monthly payments (known as&nbsp;premiums) and after you
              pass away, a lump sum pay-out is issued to your family. The value of the pay-out
              depends on which type of life insurance cover you choose during your consultation with
              one of our insurance advisers in Rayleigh.
            </p>
            <p>
              It’s designed to provide you with the reassurance that your dependents will be looked
              after if you’re no longer there to provide.
            </p>
            <p>
              Depending on the type of life insurance cover you choose, you can decide how it is
              paid out and whether it will cover specific payments, such as mortgage or rent.
            </p>
            <p>
              There is lots to consider when choosing your life insurance policy, which is where we
              come in. We are experts when it comes to insurance advice, and our team in Rayleigh
              are on hand to make the process as informative and transparent as possible.
            </p>
            <p>
              If you have any questions regarding pay-outs, expiry dates, or would like to know more
              about the different life insurance plans,{' '}
              <Link legacyBehavior href="/get-in-touch">
                <a>get in touch</a>
              </Link>{' '}
              today to arrange a consultation.{' '}
            </p>
            <p>There are two main types of Life Insurance:</p>
            <ul>
              <li>
                <p>
                  Term life insurance policies These plans run for a fixed period of time (known as
                  the ‘term’ of your policy) – such as 5, 10 or 25 years. These kinds of policies
                  only pay out if you die during the policy. There’s no lump sum payable at the end
                  of the policy term.
                </p>
              </li>
              <li>
                <p>
                  A whole-of-life policy These life insurance policies will pay out no matter when
                  you die, as long as you keep up with your premium payments.
                </p>
              </li>
            </ul>
            <h2>Do you need Life Insurance?</h2>
            <p>
              A life insurance policy from RFS will help you provide for your loved ones after you
              pass away. We recommend taking out a life insurance policy if you have:
            </p>
            <ul>
              <li>dependants, e.g. school age children</li>
              <li>a partner who relies on your income</li>
              <li>a family living in a house with a mortgage that you pay </li>
            </ul>
            <p>
              The pay-out from your policy can also be used to cover funeral costs, ensuring your
              family and friends can give you the send-off you deserve.
            </p>
            <p>
              Pop into our insurance specialists in Rayleigh to speak to one of our advisers about
              helping you choose the best life insurance policy to suit your individual
              circumstances.
            </p>
            <h2>Contact our Life Insurance Advisers today</h2>
            <p>
              Contact RFS in Rayleigh today to receive our expert guidance and insurance advice. As
              one of the most reputable financial advisers in Essex, you are guaranteed to receive
              advice you can trust, to ensure your family are provided for in what can be an
              upsetting time.{' '}
            </p>
            <p>
              Give us a call on 01268 330 880, or use our{' '}
              <Link legacyBehavior href="/get-in-touch">
                <a>online contact form</a>
              </Link>{' '}
              to book a consultation with one of our skilled insurance advisers.{' '}
            </p>
            <h2>Contact Our Insurance Advisers Today</h2>
            <p>
              Contact RFS in Rayleigh today to receive our expert guidance and insurance advice.
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
