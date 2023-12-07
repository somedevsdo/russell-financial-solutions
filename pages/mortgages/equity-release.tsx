import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';

export default function EquityRelease() {
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
          <title>Equity release | RFS</title>
          <meta
            name="description"
            content="At RFS in Rayleigh, we specialise in helping over 55s access some of the money (or. equity) that is tied up in their home. Equity Release can also be used to purchase a home!. If you are over the age of 55 and a homeowner, you are probably eligible to take out an equity release. plan. Equity Rel"
          ></meta>
        </Head>

        <div className="row justify-content-md-center">
          <div className="col-md-8 page-content">
            <h1 className="news-page__title">Equity Release</h1>
            <p>
              At RFS in Rayleigh, we specialise in helping over 55s access some of the money (or
              equity) that is tied up in their home. Equity Release can also be used to purchase a
              home! If you are over the age of 55 and a homeowner, you are probably eligible to take
              out an equity release plan. Equity Release is becoming a common way for over 55s to
              release tax-free cash from their home to spend on many things including home
              improvements, repaying debts, holidays and helping their children on to the property
              ladder.
            </p>
            <p>
              There are two types of equity release plans – Lifetime Mortgages and Home Reversions.
            </p>
            <p>
              With a lifetime mortgage, the most common type of equity release plan, there are
              typically no monthly repayments to make. Your equity release plan is only repaid
              through the sale of your property when you die or move into long-term care.
            </p>
            <p>
              There are many different types of lifetime mortgage in Rayleigh which allow the
              borrower to have lots of flexibility in how they want to repay the cash they release
              from their home. &nbsp;
            </p>
            <ul>
              <li>
                <strong>Rolled-Up Interest</strong> - You have the option to roll the interest up
                which would mean the capital is repaid on death or when you go in to long term care
                &nbsp;
              </li>
              <li>
                <strong>Interest Only</strong> – You can make compulsory interest only payments
                (exactly like a typical interest only mortgage you could obtain with a buy to let)
                to ensure the capital doesn’t increase &nbsp;
              </li>
              <li>
                <strong>Drawdown</strong> - A drawdown plan allows you to take lump sums of cash as
                and when suits you. The benefits of doing this is the interest is only payable as
                and when you drawdown on the funds
              </li>
            </ul>
            <h2>No negative equity guarantee</h2>
            <p>
              Lots of Equity Release plans in Rayleigh include the no negative equity guarantee.
              This means you’ll never owe more than your home’s worth. Therefore, any debt you
              accrue through equity release can’t be passed on to your loved ones after you’ve gone.
            </p>
            <p>
              Which Equity Release scheme is best for you will depend on your personal circumstances
              and your individual needs. It’s important to obtain expert advice from an authorised
              and qualified Equity Release advisers before proceeding with an Equity Release plan.
              RFS have helped many clients realise their dreams by pairing them with a suitable
              plan.
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
