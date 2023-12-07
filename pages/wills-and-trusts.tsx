import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Link from 'next/link';

export default function Wills() {
  const heroContent = (
    <div className="row">
      <h1 className="animated fadeInUp hero__title col-md-10">Wills &amp; Trusts</h1>
    </div>
  );
  return (
    <Layout heroType="main hero--insurance" heroContent={heroContent}>
      <Head>
        <title>Wills &amp; Trusts in Rayleigh, Essex | RFS</title>
      </Head>
      <div className="row justify-content-md-center">
        <div className="col-md-8 page-content">
          <h2>What is a Will?</h2>
          <p>
            A Will gives you peace of mind, knowing how all of your assets will be distributed and
            ensuring that loved ones are taken care of.
          </p>
          <p>
            If you don’t make a Will, your estate will follow the rules of intestacy. An unmarried
            partner would be entitled to nothing and, if you have no direct relatives, all of your
            estate will go to the Crown.
          </p>
          <p>
            A common misconception is that you don’t need a Will as you don’t have much to leave
            but, a Will isn’t just about who you leave your estate to. A Will also covers important
            things such as:
          </p>
          <ul>
            <li>Appointing executors who will manage and distribute your estate</li>
            <li>
              Appointing guardians to make sure your children are cared for (
              <em>
                if both parents pass away, children could be put into the care system while the
                courts decide who is best to look after them
              </em>
              )
            </li>
            <li>Provide for vulnerable dependents</li>
            <li>
              Minimise inheritance tax, meaning beneficiaries will receive more of your estate
            </li>
            <li>Make complex arrangements e.g. setting up trusts</li>
          </ul>
          <p>
            Your Will can also be future proofed, to ensure it’s not voided if you get married and
            make sure children born after you’ve written it are still provided for.
          </p>
          <p>
            A Will should be reviewed every 5 years or when your circumstances change, such as,
            divorce or marriage.
          </p>
          <h2>What types of Wills are there?</h2>
          <p>
            The two main types of Wills are single and mirror. A single Will is for one person and a
            Mirror is for a couple. You can also have more complex Wills, such as, setting up trusts
            so that funds can be distributed over time or creating a right to occupy so someone can
            continue to live in a property but not ultimately inherit it.
          </p>
          <p>
            RFS also offer a Will storage service. This is great way to have an additional copy in
            case yours is misplaced.
          </p>
          <h2>Trusts</h2>
          <p>
            There are numerous types of trusts to cater for many situations. They can be used to
            provide for minors or vulnerable persons, with Trustees managing how the assets are
            distributed to beneficiaries over time. Trusts can also be useful way to reduce
            inheritance tax.
          </p>
          <h2>Lasting Power of Attorney</h2>
          <p>
            A Lasting Power of Attorney (LPA) gives someone the authority to act on your behalf.
            It’s a legal document that allows you to appoint someone you know and trust to make
            decisions for you.
          </p>
          <p>
            It’s important to set these up early as, if you lose mental capacity, it’s too late and
            someone you don’t know or trust may appointed.
          </p>
          <p>There are two types of LPA:</p>
          <ul>
            <li>
              <strong>
                <em>Health and Welfare</em>
              </strong>{' '}
              – You appoint an attorney who, when the time comes, can make decisions on your medical
              treatment, care needs and residence.
            </li>
            <li>
              <strong>
                <em>Property and Financial Affairs</em>
              </strong>{' '}
              – An attorney you appoint can make financial decisions for you, as well as, pay bills,
              manage your property and speak with your bank and other financial organisations..
            </li>
          </ul>
          <p>
            We prepare the forms for you and guide you through the signing process. They are then
            submitted to the Office of the Public Guardian and we manage the process for you,
            keeping you informed throughout.
          </p>
          <h2>Why use an SWW Member</h2>
          <p>
            Members of The Society of Will Writers have undertaken intensive training and continue
            to train to keep their knowledge up to date. They are fully insured and adhere to the
            SWW Code of Practice.
          </p>
          <p>
            You can find out more information on The Society of Will Writers on their website: 
            <a href="https://www.willwriters.com/" title="Will Writers website">
              www.willwriters.com.
            </a>
          </p>
          <p>
            <Link legacyBehavior href="/get-in-touch/">
              <a className="button">Get in touch</a>
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
