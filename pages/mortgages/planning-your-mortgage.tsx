import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';

export default function PlanningYourMortgage() {
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
          <title>Planning Your Mortgage | RFS</title>
          <meta
            name="description"
            content="Am I prepared?. Before you apply for a mortgage there are a few thing you need to be aware of which the Experienced team at RFS can help you with.It is always best to be well prepared before you make BIG decisions so contact us sooner rather than later to make sure you are ready and on the right"
          ></meta>
        </Head>
        <div className="row justify-content-md-center">
          <div className="col-md-8 page-content">
            <h1 className="news-page__title">Planning Your Mortgage</h1>
            <h2>Am I prepared?</h2>
            <p>
              Before you apply for a mortgage there are a few thing you need to be aware of which
              the Experienced team at RFS can help you with.
            </p>
            <p>
              It is always best to be well prepared before you make BIG decisions so contact us
              sooner rather than later to make sure you are ready and on the right path to get the
              best mortgage option for you.
            </p>
            <p>
              There are many different things taken into account when applying for a mortgage such
              as your credit score and affordability assessment, age, income and current debts.
              Mortgage lenders want to make sure you can, not only afford the mortgage but can
              regularly meet the monthly repayments.
            </p>
            <p>
              Our mortgage brokers at RFS will help with your ‘affordability assessment’. You can
              show us in confidence, all your financial outgoings and expenses. We will then discuss
              with you the next steps to put you in the best position before you apply.
            </p>
            <p>
              Do not give up if you have bad credit or a low score. RFS have specialists in this
              field that can look at the best options for you tailored to your individual needs and
              circumstances. Speak to us today, were here to help.
            </p>
            <h2>What is a Mortgage?</h2>
            <p>
              Do you have a large pot of money to buy a property outright? If No like the majority
              of people then you will need a mortgage which is a large loan in order for you to buy
              it and pay it back over a period of time and by keeping up monthly payments.
            </p>
            <p>
              Many Banks and building societies are the lenders that will lend you the money subject
              to your individual circumstances so you can achieve this goal and at RFS we have
              access to a Full range of comprehensive lenders to suit your needs.
            </p>
            <p>
              The mortgage will be paid back over a period of time to suit your needs and
              circumstances and you will then own the property as long as you keep up the repayments
              or clear the loan.
            </p>
            <p>
              You may be thinking well how much can I borrow? How much will it cost me? How long can
              I borrow it for? This is why you need to speak to one of our specialist team who can
              hand hold you through the whole process and guide you to the right option for you.
            </p>
            <h2>Do I need a deposit and how much?</h2>
            <p>
              Before you can get a mortgage, you will need to have an amount of money that you can
              use to make an initial payment up front before the mortgage starts. This is what is
              known as a deposit and it often needs to be at least 5% of what you are paying for the
              property and this is subject to your individual credit score in some cases.
            </p>
            <p>
              Our Mortgage Brokers will be able to give you a detailed breakdown of what you need
              and an idea of what you can borrow. This will then give you a good starting position
              to plan your next steps moving forward.
            </p>
            <h2>What types of mortgages are there?</h2>
            <h3>Fixed rate mortgages</h3>
            <p>
              With a fixed rate your payments will stay the same throughout the length of the deal
              no matter what happens to interest rates.
            </p>
            <p>
              You’ll see them advertised as ‘two-year fixed rates’ or ‘five-year fixed rates’, for
              example, along with the interest rate charged for that period.
            </p>
            <h4>Advantages</h4>
            <ul>
              <li>
                Peace of mind that your monthly payments will stay the same, helping you to budget
              </li>
            </ul>
            <h4>Disadvantages</h4>
            <ul>
              <li>If interest rates fall, you won’t benefit from a lower rate.</li>
              <li>
                Early repayment charges could be applicable if you want to leave the deal early.
              </li>
            </ul>
            <h3>Variable rate mortgages</h3>
            <p>With variable rate mortgages, the interest rate can change at any time.</p>
            <p>Variable rate mortgages come in various forms:</p>
            <h4>Standard variable rate (SVR)</h4>
            <p>
              This is the normal interest rate your mortgage lender charges homebuyers and it will
              last as long as your mortgage or until you take out another mortgage deal.
            </p>
            <p>
              Changes in the interest rate might occur after a rise or fall in the base rate set by
              the Bank of England.
            </p>
            <p>
              <strong>Advantages</strong>
            </p>
            <ul>
              <li>Freedom – you can overpay or leave at any time</li>
            </ul>
            <p>
              <strong>Disadvantages</strong>
            </p>
            <ul>
              <li>Your rate can be changed at any time during the loan</li>
            </ul>
            <h4>Tracker mortgages</h4>
            <p>
              Tracker mortgages move directly in line with another interest rate – normally the Bank
              of England’s base rate plus a few percent.
            </p>
            <p>So if the base rate goes up by 0.5%, your rate will go up by the same amount.</p>
            <p>
              Usually they have a short life, typically two to five years, though some lenders offer
              trackers which last for the life of your mortgage or until you switch to another deal.
            </p>
            <p>
              <strong>Advantages</strong>
            </p>
            <ul>
              <li>If the rate it is tracking falls, so will your mortgage payments</li>
            </ul>
            <p>
              <strong>Disadvantages</strong>
            </p>
            <ul>
              <li>If the rate it is tracking increases, so will your mortgage payments</li>
            </ul>
            <h4>Offset mortgages</h4>
            <p>
              These work by linking your savings and current account to your mortgage so that you
              only pay interest on the difference.
            </p>
            <p>
              You still repay your mortgage every month as usual, but your savings act as an
              overpayment which helps to clear your mortgage early.
            </p>
            <h4>Interest Only Mortgage</h4>
            <p>
              With interest-only mortgages you only pay the interest due on the amount you borrowed
              each month.
            </p>
            <p>
              So while your monthly payments will be less than with an equivalent sized repayment
              mortgage, you’ll still owe the amount you originally borrowed when you reach the end
              of the mortgage term.
            </p>
            <p>
              Just like repayment mortgages, you can fix the interest over time or it can be paid
              back at a variable rate.
            </p>
            <h4>Paying back the capital</h4>
            <p>
              Lenders will make sure you have a repayment strategy in place, so that you’ll have
              money to pay off the capital at the end of the mortgage.
            </p>
            <p>
              Lenders have different criteria, but a suitable repayment plan is likely to mean
              paying regularly into savings or investments and could include pensions and other
              properties.
            </p>
            <p>
              If you use an investment plan, it’s your responsibility to be sure it is on track to
              pay off the capital at the end of the mortgage, but your lender will also review the
              amount at least once during the mortgage term.
            </p>
            <p>
              If it’s not on track you will find it difficult to remortgage or switch to another
              lender.
            </p>
            <p>
              Some lenders might ask for a larger deposit if you have an interest-only mortgage.
            </p>
            <p>Combined repayment and interest-only mortgages (Part &amp; Part)</p>
            <p>Some lenders offer mortgages on a part-repayment and part-interest-only basis.</p>
            <p>
              This option means that at the end of the term some of the mortgage capital will still
              be owed and will need to be repaid.
            </p>
            <p>
              Each lender will have different rules about this so speak to us for more information.
            </p>
            <h3>Buy to Let</h3>
            <p>
              Do you ever watch a lot of house programs on TV and think? Hmm that&apos;s a good
              idea, I could do that? Not earning as much interest on your cash in the bank as you
              would like too? Well property is a great way to invest if done properly. Whether
              you&apos;re a new or an experienced investor we will be able to help you find the most
              suitable mortgage for you.
            </p>
            <p>
              Also if you already own a property then re-mortgaging this could be the perfect way to
              release equity and enable you to start or increase your own property portfolio?
            </p>
            <h2>Costs to be aware of when buying a property?</h2>
            <h3>Solicitors and what do they do?</h3>
            <p>
              The solicitor will handle the legal work around the property and make sure it is all
              done correctly and compliantly in the background for your purchase of the property.
            </p>
            <p>
              Your solicitor submits searches to the local council to check whether there are any
              planning or local issues that might affect the property’s value.{' '}
            </p>
            <p>
              Your solicitor will tell you how much you can expect to pay and might ask for a
              deposit upfront – this is typically 10% of their fee to start any work carried out.
              Speak to us for more details and for a solicitors quote.
            </p>
            <h3>Stamp duty and what is it?</h3>
            <p>
              If you’re buying a home in England or Northern Ireland then you may have to pay Stamp
              Duty Land Tax (SDLT) on your purchase. This tax applies to both freehold and leasehold
              properties – whether you’re buying outright or with a mortgage.
            </p>
            <h3>Stamp Duty on second homes</h3>
            <p>
              Buyers of additional residential properties, such as second homes and buy-to-let
              properties, may have to pay an extra Stamp Duty percentage on top of current rates for
              each band. It doesn’t apply to caravans, mobile homes or houseboats.
            </p>
            <p>
              If you buy a new main residence but there’s a delay in selling your previous main
              residence, you’ll have to pay the higher Stamp Duty rates as you’ll now own two
              properties.
            </p>
            <p>
              However, if you sell or give away your previous main home within 3 years of buying
              your new home you can apply for a refund of the higher SDLT rate part of your Stamp
              Duty bill. This can change so make sure you speak to a solicitor to confirm your own
              situation.
            </p>
            <p>You can request a refund for the amount above the normal Stamp Duty rates if:</p>
            <ul>
              <li>you sell your previous main residence within three years, and</li>
              <li>
                you claim the refund within three months of the sale of your previous main
                residence, or within 12 months of the filing date of your SDLT tax return, whichever
                comes later.
              </li>
            </ul>
            <p>
              This can change depending on the government’s rulings at anytime so make sure to speak
              to a solicitor to confirm the current situation which relates to your position.
            </p>
            <h3>What is Freehold?</h3>
            <p>The freeholder of a property owns it outright, including the land it’s built on.</p>
            <p>
              If you buy a freehold, you’re responsible for maintaining your property and land, so
              you’ll need to budget for these costs.
            </p>
            <p>
              Most houses are freehold but some might be leasehold – usually through
              shared-ownership schemes.
            </p>
            <h3>What is Leasehold?</h3>
            <p>
              With a leasehold, you own the property (subject to the terms of the leasehold) for the
              length of your lease agreement with the freeholder.
            </p>
            <p>
              When the lease ends, ownership returns to the freeholder, unless you can extend the
              lease.
            </p>
            <p>
              Most flats and maisonettes are owned leasehold, so while you own your property in the
              building, you have no stake in the building it is in.
            </p>
            <p>
              Some houses are sold as leaseholds. If this is the case, you own the property, but not
              the land it sits on.
            </p>
            <p>
              Also with some lenders there needs to be a minimum lease term on the property for it
              to be mortgageable Speak to us for more details.
            </p>
            <h2>What is a Survey?</h2>
            <h3>Mortgage valuation survey</h3>
            <p>
              The sole aim of the mortgage valuation is to satisfy the lender that your desired
              property is worth the price you’re paying – or at least the amount it’s lending,
              before they approve your mortgage.
            </p>
            <p>
              A valuation is just that and nothing more so it won’t point out repairs or structural
              problems that you will have to pay to fix.
            </p>
            <p>
              Generally, you will pay for the lender’s survey. The cost is based on the value and
              size of the property and is typically £150 to £1,500.
            </p>
            <p>
              Sometimes lenders offer mortgages with free valuation surveys which we have access to
              so speak to us for more information.
            </p>
            <h3>RICS HomeBuyer Report</h3>
            <p>
              A HomeBuyer Report is a survey suitable for conventional properties in reasonable
              condition.
            </p>
            <p>
              This will help you find out if there are any structural problems, such as subsidence
              or damp, as well as any other unwelcome hidden issues inside and outside.
            </p>
            <p>The HomeBuyer Report doesn’t look beyond the floorboards or behind the walls.</p>
            <p>
              <strong>RICS Building Survey</strong>
            </p>
            <p>
              The RICS Building Survey provides the same level of in-depth inspection as a building
              survey, but uses a simple a clear presentation style and a 1, 2, 3 rating system to
              ensure that you can easily identify the most serious issues. . This is mainly aimed at
              larger or older properties, or if you’re planning major works.
            </p>
            <p>
              A detailed report provides you with an in-depth analysis of the property’s condition
              highlighting a range of issues which includes advice on defects, repairs and
              maintenance options. Included with the RICS Building Survey are advice sheets on how
              to deal with some of the more common problems that have been found at the property
              including an outline of repair options and the consequences of not dealing with any
              potential issues highlighted within the report.
            </p>
            <h3>Building or full structural survey</h3>
            <p>
              This is the most comprehensive survey and is suitable for all residential properties.
              It’s particularly good for older homes or homes that might need repairs. This type of
              survey typically costs upwards of £600 and provides detailed advice on repairs.
            </p>
            <p>
              It’s very extensive and in some circumstances worth the extra money but it does not
              usually include a valuation. Although this survey can’t look under floorboards or
              behind walls it should include the surveyor’s opinion on the potential for hidden
              defects in this area.
            </p>
            <p>
              <strong>Where to find a surveyor?</strong>
            </p>
            <p>
              Speak to us today and we can recommend a Surveyor for you that can give you a quote
              and guide you through the next steps.
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
