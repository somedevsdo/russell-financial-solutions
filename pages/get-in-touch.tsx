import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';

export default function GetInTouch() {
  const heroContent = (
    <>
      <div className="row">
        <h1 className="animated fadeInUp hero__title col-md-10">Get in touch</h1>
      </div>
      <div className="row">
        <div className="hero__section animated fadeInUp delay-1s col-md-8">
          <p className="hero__text">
            There is no such thing as a silly question! Contact us today by filling in the contact
            section below, live chat, phone or email. We love to hear from you and we are available
            7 days a week. Speak to us today.
          </p>
        </div>
      </div>
    </>
  );
  return (
    <>
      <Layout heroType="main" heroContent={heroContent}>
        <Head>
          <title>Get in touch | RFS</title>
          <meta
            name="description"
            content="Get in touch with our team of specialist mortgage advisers in Rayleigh on 01268 330 880 today. We’ll source tailored advice and competitive rates for you."
          ></meta>
        </Head>
        <div className="row justify-content-md-center">
          <div className="col-md-8 page-content">
            <form name="contact" method="POST" data-netlify="true" className=" contact-form">
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-field  ">
                <div className="form-label">
                  <label className="inline">
                    Name <span className="required">*</span>
                  </label>
                </div>
                <div className="form-data">
                  <div className="form-input-wrapper ">
                    <input name="name" type="text" className=" " autoComplete="on" required />
                  </div>
                </div>
              </div>

              <div className="form-field  ">
                <div className="form-label">
                  <label className="inline">
                    Email address <span className="required">*</span>
                  </label>
                </div>
                <div className="form-data">
                  <div className="form-input-wrapper ">
                    <input name="email" type="email" className=" " required />
                  </div>
                </div>
              </div>

              <div className="form-field  ">
                <div className="form-label">
                  <label className="inline">Phone number</label>
                </div>
                <div className="form-data">
                  <div className="form-input-wrapper ">
                    <input name="phone" type="number" className=" " />
                  </div>
                </div>
              </div>

              <div className="form-field  ">
                <div className="form-label">
                  <label className="inline">
                    Subject <span className="required">*</span>
                  </label>
                </div>
                <div className="form-data">
                  <div className="form-input-wrapper ">
                    <input name="subject" type="text" className=" " required />
                  </div>
                </div>
              </div>

              <div className="form-field  ">
                <div className="form-label">
                  <label className="inline">
                    How can we help? <span className="required">*</span>
                  </label>
                </div>
                <div className="form-data">
                  <div className="form-textarea-wrapper  ">
                    <textarea name="message" className="  " required></textarea>
                  </div>
                </div>
              </div>

              <div className="buttons">
                <button type="submit" className="button ">
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-4">
            <div className="contact-details">
              <h2 className="contact-details__title">Contact details</h2>
              <div className="contact-details__text">
                Office hours: <br />
                <strong>
                  Monday - Saturday: 8am - 8pm
                  <br />
                  Sunday: 10am - 5pm
                </strong>
              </div>
              <ul className="contact-details__list">
                <li className="contact-details__item">
                  <svg
                    className="contact-details__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div className="contact-details__content">
                    <span className="contact-details__text">
                      57 High Street, Rayleigh, Essex, SS6 7EW
                    </span>
                  </div>
                </li>
                <li className="contact-details__item">
                  <svg
                    className="contact-details__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <div className="contact-details__content">
                    <div className="contact-details__number">01268 330 880</div>
                    <div className="contact-details__number contact-details__number--secondary">
                      07738 165 602
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
