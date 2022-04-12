import React from "react";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Link from "next/link";

export default function Mortgages() {
  const heroContent = (
    <>
      <div className="row">
        <h1 className="animated fadeInUp hero__title col-md-10">
          Mortgage Advisers in Rayleigh, Essex
        </h1>
      </div>
      <div className="row">
        <div className="hero__section animated fadeInUp delay-1s col-md-8">
          <p className="hero__text">
            Securing the right mortgage for you is probably one of the biggest
            challenges and most difficult decision you’ll make. The landscape of
            mortgages is entirely personal and nerve-wracking and you’d be
            forgiven for not understanding it. This is where Russell Financial
            Solutions comes in – our team of dedicated mortgage advisers will
            help you find the right mortgage for you. Whether you need a
            first-time buyers’ mortgage or need assistance with remortgaging
            your house, we are on hand to help you make those difficult
            decisions more understandable and much easier.
          </p>
        </div>
      </div>
    </>
  );
  return (
    <>
      <Layout heroType="main hero--mortgages" heroContent={heroContent}>
        <Head>
          <title>Mortgages</title>
        </Head>
        <div className="row justify-content-md-center">
          <div className="col-md-8 page-content">
            <h2>Our Mortgage Services Include:</h2>
            <ul>
              <li>
                <Link href="/mortgages/planning your mortgage">
                  <a>Planning your mortgage</a>
                </Link>
              </li>
              <li>
                <Link href="/mortgages/first-time-buyers">
                  <a>First time buyers</a>
                </Link>
              </li>
              <li>
                <Link href="/mortgages/remortgage">
                  <a>Remortgages</a>
                </Link>
              </li>
              <li>
                <Link href="/mortgages/moving-home">
                  <a>Moving home</a>
                </Link>
              </li>
              <li>
                <Link href="/mortgages/help-to-buy">
                  <a>Help to buy</a>
                </Link>
              </li>
              <li>
                <Link href="/mortgages/shared-ownership">
                  <a>Shared ownership</a>
                </Link>
              </li>
              <li>
                <Link href="/mortgages/buy-to-let">
                  <a>Buy to let</a>
                </Link>
              </li>
              <li>
                <Link href="/mortgages/commercial-mortgages">
                  <a>Commercial mortgages</a>
                </Link>
              </li>
              <li>
                <Link href="/mortgages/equity-release">
                  <a>Equity release</a>
                </Link>
              </li>
              <li>
                <Link href="/mortgages/self-employed-mortgages-in-rayleigh-essex">
                  <a>Self employed mortgages in rayleigh</a>
                </Link>
              </li>
            </ul>
            <h2>Why Russell Financial Solutions?</h2>
            <p>
              Russell Financial Solutions offer expert guidance and help to take
              all of the stress out of finding the right mortgage for you. Not
              only will we help you decide on the right type, we&apos;ll also
              help you find the most suitable deal. We have access to a range of
              mortgages from across the market, so you can be confident the
              mortgage we recommend is right for you. We will arrange the survey
              and communicate with all parties involved such as estate agents
              and solicitors until you complete. It can be as simple as you
              would like it to be, and we can take on as much or as little as
              you need us to.
            </p>
            <h2>From First Homes to Remortgages</h2>
            <p>
              Our team has worked hard to create and maintain our excellent
              reputation as trusted mortgage brokers in Rayleigh Essex and
              beyond. From individuals, to couples, to young families, we have
              brought together a team who genuinely want to help you find the
              right mortgage solution for you.
            </p>
            <h2>Current offers</h2>
            <p>
              <strong>
                Police, NHS, Fire Service, Teachers and Armed Forces receive a
                FREE no fee service as a thank you
              </strong>
              . Find out more on our <a href="/offers">offers page</a>.
            </p>

            <h2>Contact Our Mortgage Advisers Today</h2>
            <p>
              Contact Russell Financial Solutions in Rayleigh today to receive
              our expert guidance and mortgage advice. Our specialist mortgage
              brokers are on hand to make finding the right mortgage for you
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
