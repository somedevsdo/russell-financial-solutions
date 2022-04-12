import React from "react";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

export default function GetInTouch() {
  const heroContent = (
    <>
      <div className="row">
        <h1 className="animated fadeInUp hero__title col-md-10">
          Get in touch
        </h1>
      </div>
      <div className="row">
        <div className="hero__section animated fadeInUp delay-1s col-md-8">
          <p className="hero__text">
            There is no such thing as a silly question! Contact us today by
            filling in the contact section below, live chat, phone or email. We
            love to hear from you and we are available 7 days a week. Speak to
            us today.
          </p>
        </div>
      </div>
    </>
  );
  return (
    <>
      <Layout heroType="main" heroContent={heroContent}>
        <Head>
          <title>Get in touch</title>
        </Head>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          id="contact"
          className=" contact-form"
        >
          <div className="form-field  ">
            <div className="form-label">
              <label className="inline">
                Name <span className="required">*</span>
              </label>
            </div>
            <div className="form-data">
              <div className="form-input-wrapper ">
                <input
                  name="data[name]"
                  type="text"
                  className=" "
                  autoComplete="on"
                  required="required"
                />
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
                <input
                  name="data[email]"
                  type="email"
                  className=" "
                  required="required"
                />
              </div>
            </div>
          </div>

          <div className="form-field  ">
            <div className="form-label">
              <label className="inline">Phone number</label>
            </div>
            <div className="form-data">
              <div className="form-input-wrapper ">
                <input name="data[phone]" type="number" className=" " />
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
                <input
                  name="data[subject]"
                  type="text"
                  className=" "
                  required="required"
                />
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
                <textarea
                  name="data[message]"
                  className="  "
                  required="required"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="buttons">
            <button type="submit" className="button ">
              Send
            </button>
          </div>
        </form>
      </Layout>
    </>
  );
}
