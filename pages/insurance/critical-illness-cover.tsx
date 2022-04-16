import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';

export default function CriticalIllnessCover() {
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
          <title>Critical Illness Cover</title>
        </Head>

        <div className="row justify-content-md-center">
          <div className="col-md-8 page-content">
            <h1 className="news-page__title">Critical Illness Cover</h1>
            <h2>What is critical illness cover?</h2>
            <p>
              Critical illness insurance will pay out if you are diagnosed with one of the specific
              medical conditions or injuries listed in the policy.
            </p>
            <p>
              But be aware that not all conditions are covered and policy will also state how
              serious the condition must be.
            </p>
            <p>
              Don’t confuse critical illness cover with life insurance, although they are sometimes
              sold together.
            </p>
            <p>Examples of critical illnesses that might be covered include:</p>
            <ul>
              <li>stroke</li>
              <li>heart attack</li>
              <li>certain types and stages of cancer</li>
              <li>conditions such as multiple sclerosis.</li>
            </ul>
            <p>
              Most policies will also consider permanent disabilities as a result of injury or
              illness.
            </p>
            <p>It only pays out once and then the policy ends.</p>
            <p>
              Some policies will make a smaller payment for less severe conditions, or if one of
              your children has one of the specified conditions.
            </p>
            <p>
              Every year, 1m workers in the UK unexpectedly find themselves unable to work because
              of injury or illness, according to the ABI (2015).
            </p>
            <h2>Do you need critical illness cover?</h2>
            <p>
              State benefits might not be enough to replace your income if something goes wrong and
              you can’t work because of long-term sickness or disability.
            </p>
            <p>
              If you’re eligible, Employment and Support Allowance ranges from around £70 to just
              over £100 a week, depending on your circumstances and the seriousness of your illness
              or disability.
            </p>
            <h2>You should look at getting critical illness cover if:</h2>
            <ul>
              <li>
                you don’t have enough savings to tide you over if you become seriously ill or
                disabled
              </li>
              <li>
                you don’t have an employee benefits package to cover a longer time off work due to
                sickness.
              </li>
            </ul>
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
