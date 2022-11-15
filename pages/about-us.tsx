import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Link from 'next/link';
import Profile from '../components/Profile/Profile';

export default function AboutUs() {
  const heroContent = (
    <>
      <div className="row">
        <h1 className="animated fadeInUp hero__title col-md-10">About us</h1>
      </div>
    </>
  );
  return (
    <>
      <Layout heroType="main hero--mortgages" renderContainer={false} heroContent={heroContent}>
        <Head>
          <title>About us | RFS</title>
        </Head>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-8">
              <div className="text-row">
                <p className="text-row__paragraph">
                  So who are we? Click or hover on the profile pictures below to see what we’re
                  about and what we are into. We are real people just like you.
                </p>
                <p className="text-row__paragraph">
                  Building a strong team is a key part of RFS&apos; vision. This then builds strong
                  relationships with every one of our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2>The team</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <Profile
                secondaryTitle="Company Director - Mortgage &amp; Protection Broker"
                primaryTitle="Glen Russell Cert CII (MP)"
                modifier="glen"
              >
                <p>
                  Glen has been in financial services for over 20 years which includes various roles
                  such as a Bank Manager for various financial institutions and Advisory roles.
                </p>
                <p>
                  Customer service and client experience is key to Glen&apos;s core values and this
                  is filtered through the team at RFS which is evident in client reviews which he
                  prides the business on.
                </p>
                <p>
                  Glen has always been a local lad and loves spending time with his family and
                  friends including his wife and young son which keep him very busy. Not to mention
                  his very demanding dog that takes up a lot of his spare time walking. In
                  Glen&apos;s words he wouldn’t have it any other way.
                </p>
              </Profile>
            </div>

            <div className="col-md-6 col-xl-4">
              <Profile
                secondaryTitle="Mortgage, Protection &amp; Equity Release Broker"
                primaryTitle="Darren Ford (CeMAP CeRER)"
                modifier="darren"
              >
                <p>Darren is an experienced Mortgage, Protection and Equity Release specialist.</p>
                <p>
                  Darren has been in financial services since leaving school and has worked for
                  various large banks and financial institutions. Darren specialises in adverse/bad
                  credit mortgages and lifetime mortgages (equity release), as well as helping first
                  time buyers, the self-employed and contractors with their mortgage and protection
                  needs.
                </p>
                <p>
                  Before joining RFS, Darren worked for a mortgage compliance company managing over
                  100 brokers, ensuring they followed the correct rules and FCA regulations as well
                  as setting a high bench mark for customer satisfaction.
                </p>
                <p>
                  Outside of work, he plays for a local bowling team and regularly challenges his
                  friends at snooker (although he tends to lose).
                </p>
              </Profile>
            </div>

            <div className="col-md-6 col-xl-4">
              <Profile
                secondaryTitle="Mortgage &amp; Protection Broker"
                primaryTitle="Jack Johnson CeMap"
                modifier="jack"
              >
                <p>
                  Jack has worked in financial services since he was 17. This started off within a
                  large financial institution where Jack helped customers back on their feet with
                  their finances when they were in need. Jack later become a trainer within this
                  role and helped new/existing staff. Jack was unfortunately made redundant from
                  this job after 5 years of service and took it upon himself to study the CeMAP
                  qualification while out of work. After qualifying with his CeMAP, Jack joined a
                  large Mortgage network as a Business Development Consultant, taking care of up to
                  250 Mortgage Advisors. Jack would have daily meetings with advisors to ensure they
                  were compliant and giving the customer the right advice.
                </p>
                <p>
                  Jack later then become an advisor himself, with knowledge in all areas such as,
                  Bad Credit, First-Time Buyers, Additional Borrowing and Contractors.
                </p>
                <p>
                  Outside of work Jack enjoys going to the gym and attempts lots of DIY work to his
                  car... which doesn’t always end well, but he enjoys it none the less.
                </p>
              </Profile>
            </div>

            <div className="col-md-6 col-xl-4">
              <Profile
                secondaryTitle="Mortgage &amp; Protection Broker"
                primaryTitle="Ed Bowden CeMap"
                modifier="ed"
              >
                <p>
                  Ed graduated university with a sports science degree but had a change of heart and
                  wanted to Persue a career in the financial sector and has never looked back.
                </p>
                <p>
                  Ed has worked for a large bank for just under eight years which started with
                  helping customers with their everyday banking needs but quickly developed a
                  passion for mortgages after being able to refer customers on a regular basis.
                </p>
                <p>
                  Ed took it upon himself to study his CeMap Qualification to become a mortgage
                  advisor and has helped numerous customers with their mortgage and protection needs
                  over the last 5 years.
                </p>
                <p>
                  In his spare time Ed loves to lift weights and enjoys long walks with his Dog in
                  the countryside with the odd game of golf.
                </p>
              </Profile>
            </div>

            <div className="col-md-6 col-xl-4">
              <Profile
                secondaryTitle="Business Administrator"
                primaryTitle="Maxine Glester"
                modifier="maxine"
              >
                <p>
                  Maxine has an extensive career in customer services. Her role consists of admin
                  support for the brokers, liaising with solicitors and updating clients amongst
                  many other things. The list is endless as I’m sure she would agree.
                </p>
                <p>
                  Out of work Maxine is currently Social Secretary of a large local WI group,
                  Broadway Belles. Where she is busy organising a variety of social &amp; charity
                  events for 110 members, from visits to water treatment plants to cocktail making.
                  As a group they are currently supporting a local charity, Age Concern Westcliff,
                  which provides help for the elderly and Dementia sufferers.
                </p>
                <p>
                  Maxine has recently been blessed with a grandson who also keeps her on her toes.
                </p>
              </Profile>
            </div>

            <div className="col-md-6 col-xl-4">
              <Profile
                secondaryTitle="Accountant &amp; Company Secretary"
                primaryTitle="Nicole Russell BSc FCCA"
                modifier="nicole"
              >
                <p>
                  Nicole is a Chartered Accountant with 13 years accountancy, management and
                  business strategy experience.
                </p>
                <p>
                  After graduating with a degree in Aerospace Engineering she went on to work in an
                  accountancy practice and studied towards her ACCA qualification. Once qualified
                  she left practice life and started her career in the commercial sector. With a
                  passion for engineering she managed to grow within a leading global automotive
                  engineering company and earned her place on the senior management team. Guiding
                  the UK finance department through systems upgrades, times of economic
                  uncertainties and rapid company growth.
                </p>
                <p>
                  In 2018 Nicole embarked on a new journey, motherhood. One of her most rewarding
                  challenges yet.
                </p>
              </Profile>
            </div>

            <div className="col-md-6 col-xl-4">
              <Profile
                secondaryTitle="Business Administrator"
                primaryTitle="Kelly Schrader"
                modifier="kelly"
              >
                <p>
                  Kelly has experience providing many years of excellent customer service and admin
                  support to various organisations, including the Financial Ombudsman Service, plus
                  five years as a Careers Advisor where she obtained a Level 4 Diploma in
                  Information, Advice and Guidance. Along with Maxine, Kelly provides admin support
                  for the brokers.
                </p>
                <p>
                  Kelly loves making things from marshmallows (yes, you can really make them!) to
                  cakes, from painting to sewing. She has 2 young boys who keep her very busy as
                  well as a Great Dane whom she enjoys walking with in the local countryside.
                </p>
              </Profile>
            </div>

            <div className="col-md-6 col-xl-4">
              <Profile
                secondaryTitle="Mortgage Broker and Wills &amp; Estate Planner"
                primaryTitle="Eleanor Levett-Millet CeMap"
                modifier="eleanor"
              >
                <p>
                  Eleanor started her career in financial services 10 years ago and has had roles at
                  various banks, focussed on giving great customer service. Her main area was
                  business and commercial clients but has always seen the individuals of the
                  businesses as being the most important.
                </p>
                <p>
                  In 2020 Eleanor saw the added spare time we were all given as an opportunity to
                  change careers to something she is passionate about. In this time, she achieved
                  her CeMap and Wills and Estate Planning qualifications.
                </p>
                <p>
                  In her spare time, Eleanor enjoys travelling, getting outdoors for long walks and
                  sewing indoors when the English bad weather prevents outside activities!
                </p>
              </Profile>
            </div>

            <div className="col-md-6 col-xl-4">
              <div className="person-card">
                <Profile primaryTitle="Be part of our team..." modifier="join">
                  <p>
                    We are searching for Mortgage and Protection Brokers all the time. Do you have
                    what it takes and want to be a part of a growing and dynamic team? If so,{' '}
                    <Link href="/get-in-touch/">
                      <a>contact us</a>
                    </Link>{' '}
                    today.
                  </p>
                </Profile>
              </div>
            </div>
          </div>
          <div className="row">
            <p
              className="animated fadeInUp delay-1s hero__buttons col"
              style={{ textAlign: 'center' }}
            >
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
