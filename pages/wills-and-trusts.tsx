import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Link from 'next/link';

export default function Wills() {
  const heroContent = (
    <>
      <div className="row">
        <h1 className="animated fadeInUp hero__title col-md-10">Wills &amp; Trusts</h1>
      </div>
    </>
  );
  return (
    <>
      <Layout heroType="main hero--insurance" heroContent={heroContent}>
        <Head>
          <title>Wills &amp; Trusts in Rayleigh, Essex | Russell Financial Solutions</title>
        </Head>
        <div className="row justify-content-md-center">
          <div className="col-md-8 page-content">
            <h2>What is a Will?</h2>
            <p>
              A Will gives you peace of mind, knowing how all of your assets will be distributed and
              who will benefit from them. There are some more reasons to make a Will that you may
              not have thought about:
            </p>
            <ul>
              <li>Appoint executors that you would like to manage and distribute your estate</li>
              <li>
                Minimise inheritance tax, meaning beneficiaries will receive more of your estate
              </li>
              <li>
                Appoint guardians to make sure your children are cared for and continue to have your
                values instilled in them
              </li>
              <li>Provide for vulnerable dependents</li>
              <li>Protect assets from unforeseen circumstances</li>
              <li>Make complex arrangements, for example, setting up trusts</li>
            </ul>
            <p>
              If you don’t make a Will, your estate will follow the rules of intestacy. There is
              also partial intestacy if some of your assets are not included in your Will. An
              unmarried partner would be entitled to nothing and if you have no direct relatives,
              all of your estate will go to the Crown.
            </p>
            <p>
              A Will should be reviewed every 5 years or when your circumstances change, such as,
              divorce or marriage.
            </p>
            <h2>What types of Wills are there?</h2>
            <p>
              The two main types of Wills are single and mirror. A single Will is a for one person
              and a Mirror is for a couple. You can also have more complex Wills, such as, setting
              up trusts so that funds can be distributed over time or creating a right to occupy so
              someone can continue to live in a property but not ultimately inherit it.
            </p>
            <p>The costs for each type of Will are:</p>
            <ul>
              <li>Single - £175</li>
              <li>Mirror - £275</li>
              <li>Complex - £450</li>
            </ul>
            <p>
              Russell Financial Solutions also offer a Will storage service, charged at £25. This is
              great way to have an additional copy in case yours is misplaced.{' '}
            </p>
            <h2>Trusts</h2>
            <p>
              There are numerous types of trusts to cater for many situations. They can be used to
              provide for minors or vulnerable persons, with Trustees managing how the assets are
              distributed to beneficiaries over time. Trusts can also be useful way to reduce
              inheritance tax.
            </p>
            <p>
              Russell Financial Solutions work with the Society of Will Writers who can set up
              trusts for you.
            </p>
            <h2>Additional things to consider</h2>
            <p>
              A Lasting Power of Attorney (LPA) can be used to manage your affairs and make
              decisions for you if you become unable to do so. There are two types of LPA; Health
              and Welfare, Property and Financial Affairs.
            </p>
            <p>Various things can be done to reduce Inheritance Tax (IHT):</p>
            <ul>
              <li>
                The Nil Rate Band (NRB) and the Residential Nil Rate Band (RNRB) are amounts that
                are charged at 0% before the full 40% IHT. There are rules relating to these so it’s
                important the opportunity to take advantage of these is not missed.
              </li>
              <li>Business Property Relief (BPR) and Agricultural Property Relief (APR).</li>
              <li>
                Making gifts in your lifetime to create Potentially Exempt Transfers (PETs) and
                Chargeable Lifetime Transfers which can have a reduced or even nil charge of IHT,
                depending on the length of time they were gifted before death.
              </li>
              <li>
                Donating 10% of your estate to charity will reduce the IHT on your whole estate from
                40% to 36%
              </li>
            </ul>

            <h2>Why use an SWW Member</h2>
            <p>
              Members of The Society of Will Writers have undertaken intensive training and continue
              to train to keep their knowledge up to date. They are fully insured and adhere to the
              SWW Code of Practice.
            </p>
            <p>
              You can find out more information on The Society of Will Writers on their website:{' '}
              <a href="http://www.willwriters.com">www.willwriters.com</a>.
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
