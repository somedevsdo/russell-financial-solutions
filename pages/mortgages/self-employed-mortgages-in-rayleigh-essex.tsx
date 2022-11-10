import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';

export default function SelfEmployedMortgages() {
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
          <title>Self-Employed Mortgages in Rayleigh | RFS Ltd</title>
          <meta
            name="description"
            content="If you are self employed and looking to secure a mortgage deal, it can often feel much more difficult than it should be. Whether you are a contractor, sole trader, or limited company director, here at RFS Ltd, our mortgage advisers in Rayleigh are here to help."
          ></meta>
        </Head>

        <div className="row justify-content-md-center">
          <div className="col-md-8 page-content">
            <p>
              If you are self employed and looking to secure a mortgage deal, it can often feel much
              more difficult than it should be. Whether you are a contractor, sole trader, or
              limited company director, here at RFS Ltd, our mortgage advisers in Rayleigh are here
              to help.
            </p>
            <p>
              There are around 4.8 million self-employed people in the UK, and many believe their
              irregular income or lack of three years’ worth of accounts means they don’t meet the
              requirements for a mortgage. We’re here to show you that this is incorrect.
            </p>
            <p>
              Our team of experienced finance specialists will listen carefully to your personal
              circumstances, taking into consideration many factors when it comes to your supplying
              your self-employed mortgage
            </p>
            <p>
              If you’d like to book a consultation with one of our Essex based mortgage advisers,{' '}
              <Link href="/get-in-touch">
                <a>contact</a>
              </Link>{' '}
              RFS Ltd today.{' '}
            </p>
            <h2>Can I get a Mortgage if I’m Self-Employed?</h2>
            <p>
              You may have heard horror stories about self employed friends or family struggling to
              secure their mortgage due to the irregular finances.{' '}
            </p>
            <p>
              If you are sufficiently prepared, and can provide evidence of income reports and
              upcoming work you have scheduled, our talented mortgage advisers in Rayleigh will be
              able to take your personal working circumstances into consideration when providing
              your bespoke service.
            </p>
            <h2>How to Boost Your Mortgage Chances if you are Self-Employed?</h2>
            <p>
              If you are self-employed in Essex, our experienced mortgage brokers are able to
              provide professional mortgage advice, ensuring you receive information and guidance
              that you can rely on. Here are a few ways to prepare yourself, placing you in the best
              position to secure your mortgage:
            </p>
            <ul>
              <li>Save up as much as you can for a deposit</li>
              <li>Have a good idea of your credit rating </li>
              <li>Speak to an accountant and correct any mistakes on your credit report</li>
              <li>Make sure you are on the electoral roll</li>
              <li>
                Be sure to speak to our experienced mortgage brokers at Russell Financial Solution
                for the best advice
              </li>
            </ul>
            <h2>Why Choose RFS?</h2>
            <p>
              In 2019, the team at RFS Ltd helped over 360 clients achieve their mortgage goals. We
              are highly experienced in providing mortgage advice that you can rely on.{' '}
            </p>
            <p>
              Our friendly team will always take your personal circumstances into consideration,
              providing your bespoke service that will help you achieve your self-employed mortgage
              goals.
            </p>
            <p>
              We believe everyone, whether they are self-employed or not, should receive
              high-quality services that exceeds their expectations. Our team always aim to make the
              often intimidating world of mortgages that little bit easier to navigate.
            </p>
            <h2>Get in Touch</h2>
            <p>
              If you are self-employed and are ready to explore your mortgage options, contact us
              today to receive our expert guidance and mortgage advice.{' '}
            </p>
            <p>
              Our specialist self-employed mortgage brokers in Rayleigh are on hand to make finding
              the right mortgage for you as efficiently and stress-free as possible.
            </p>
            <p>
              Give us a call on 01268 330 880 or use our{' '}
              <Link href="/get-in-touch">
                <a>online contact form</a>
              </Link>{' '}
              to get in touch.{' '}
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
