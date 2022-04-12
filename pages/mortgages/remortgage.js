import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import Link from "next/link";

export default function Remortgage() {
  const heroContent = (
    <>
      <div className="hero__breadcrumb col-md-10">
        <Link href="/">
          <a className="hero__breadcrumb-link">Home</a>
        </Link>
        /{" "}
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
          <title>Get in touch</title>
        </Head>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-8 page-content">
              <h1 className="news-page__title">Remortgages</h1>
              <p>
                When you love where you live but your initial mortgage rate is
                coming to an end, what do you do and where do you go to make
                sure you can still enjoy the home you’ve built? Remortgaging
                your property allows you to take out a new mortgage on a home
                you already own to replace your existing mortgage deal. There
                are plenty of mortgages out there with differing rates and
                flexibility tailored to your needs, but it can be difficult to
                find the best deal for you. At Russell Financial Solutions, our
                mortgage brokers will help you find the best mortgage for you to
                switch to, with minimal change-over fees and a competitive
                initial rate.
              </p>
              <h2>Home Remortgaging Made Simple</h2>
              <p>
                We’ll learn about your financial history, reasons for seeking a
                remortgage, and your personal circumstances where necessary to
                provide you tailored mortgage advice. We avoid jargon terms,
                instead favouring just talking to you as the individuals you
                are. We’ll guide you through the home remortgaging process and
                make sure you understand each part of it before we confirm
                anything with you. We are able to source competitive rates from
                a range of lenders and in some cases may even be able to source
                you no transfer fee alternatives. Remortgages aren’t for
                everyone, but this is something we will discuss with you in
                length.
              </p>
              <p>
                Our skilled team of mortgage advisers in Rayleigh Essex have
                built an enviable reputation, never compromising on our customer
                care. We offer completely bespoke mortgage advice for those
                looking to remortgage their home, often sourcing initial rates
                that pleasantly surprise our clients. We make sure that you’re
                in the know from the moment we begin discussing your remortgage
                options with you, keeping you updated and informed throughout
                the process and hand hold you at every step.
              </p>
              <h2>Contact Our Mortgage Advisers Today</h2>
              <p>
                Contact Russell Financial Solutions in Rayleigh today to receive
                our expert guidance and mortgage advice. Our specialist mortgage
                brokers are on hand to make finding the right mortgage for you
                efficient, quick, and stress-free.
              </p>
              <p>
                <Link href="/get-in-touch">
                  <a className="button">Get in touch</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
