import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import Layout from '../components/Layout/Layout';
import Link from 'next/link';
import Head from 'next/head';
import Review from '../components/Review/Review';
import ReviewContainer from '../components/Review/ReviewContainer';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

export default function Home() {
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    new Glide('.glide', {
      type: 'carousel',
      autoplay: 4000,
      perView: 2,
      peek: 220,
      breakpoints: {
        992: {
          perView: 1,
          peek: 150,
        },
        767: {
          perView: 1,
          peek: 0,
        },
      },
    }).mount();

    new Glide('.glide-reviews', {
      type: 'carousel',
      autoplay: 6000,
      perView: 3,
      breakpoints: {
        992: {
          perView: 2,
        },
        767: {
          perView: 1,
        },
      },
    }).mount();
  });

  // post to API for the file download
  const postToAPI = async (data) => {
    const filename = 'rfs-ftb-guide.pdf';
    try {
      const link = document.createElement('a');
      link.href = '/ac50dd2a-fb34-4344-a9f9-d0838b307fd8/rfs-ftb-guide.pdf';
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      setOpen(false);
    } catch (error) {
      alert('There was an error retrieving the file');
    }
  };

  // prevent default on form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const myForm = e.target;
    const formData = new FormData(myForm);

    let object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });

    let jsonObject = Object.fromEntries(formData.entries());

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(object).toString(),
    })
      .then(() => {
        postToAPI(jsonObject);
      })
      .catch(() => alert('Error sending the form'));
  };

  const heroContent = (
    <>
      <div className="row">
        <h1 className="animated fadeInUp hero__title col-md-7">
          Professional Mortgage Advisors in Rayleigh and Essex
        </h1>
        <p className="animated fadeInUp delay-1s hero__text col-md-6">
          RFS is a Mortgage and Protection Advice company established in 2015, with over 30 years of
          combined financial experience within the team.
        </p>
      </div>
      <div className="row">
        <p className="animated fadeInUp delay-1s hero__buttons col">
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button type="button" className="button hero__button">
                First Time Buyers Guide
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay" />
              <Dialog.Content className="DialogContent">
                <Dialog.Title className="DialogTitle">
                  Download First Time Buyers guide
                </Dialog.Title>
                <Dialog.Description className="DialogDescription">
                  Enter your details below to download our free First Time Buyers guide, and one of
                  the team will be in touch.
                </Dialog.Description>
                <form
                  onSubmit={handleSubmit}
                  name="guide"
                  method="POST"
                  data-netlify="true"
                  action="/"
                >
                  <p>
                    <label>
                      <strong>Name:</strong> <br />
                      <input className="hero__input" type="text" name="name" required />
                    </label>
                  </p>
                  <p>
                    <label>
                      <strong>Email:</strong> <br />{' '}
                      <input className="hero__input" type="email" name="email" required />
                    </label>
                  </p>
                  <p>
                    <label>
                      <strong>Telephone:</strong> <br />{' '}
                      <input className="hero__input" type="text" name="telephone" required />
                    </label>
                  </p>
                  <input type="hidden" name="form-name" value="guide"></input>
                  <p>
                    <button type="submit" className="button">
                      Download guide
                    </button>
                  </p>
                </form>
                <Dialog.Close asChild>
                  <button className="IconButton" aria-label="Close">
                    <Cross2Icon />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
          <Link legacyBehavior href="/get-in-touch/">
            <a className="button button--secondary-light hero__button">Get in touch</a>
          </Link>
        </p>
      </div>
    </>
  );

  return (
    <>
      <Head>
        <title>Mortgage Advisors in Rayleigh Essex | RFS</title>
        <meta
          name="description"
          content="Specialist mortgage and protection advice from your trusted mortgage brokers in Rayleigh, Essex. Contact us today on 01268 330 880."
        ></meta>
      </Head>
      <Layout heroType="home" renderContainer={false} heroContent={heroContent}>
        <div className="scroller-container">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col">
                <div className="scroller">
                  <div className="scroller__content">
                    <span className="scroller__item">
                      <strong>We are open 7 days a week</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-8">
              <div className="text-row">
                <p className="text-row__paragraph">
                  We have the simple belief that everyone should receive high-quality service that
                  exceeds their expectations, and we always aim to make the often intimidating world
                  of mortgages and insurance that little bit easier to conquer.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row animated fadeIn delay-1s">
            <div className="col-lg-4">
              <div className="journey">
                <div className="journey__icon">
                  <svg
                    className="journey__image"
                    aria-hidden="true"
                    viewBox="0 0 40 37"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M34.5975443,11.148704 L9.44065484,11.148704 C9.06412005,11.148704 8.7585266,11.4542974 8.7585266,11.8308322 C8.7585266,12.207367 9.06412005,12.5129604 9.44065484,12.5129604 L34.5975443,12.5129604 C34.9740791,12.5129604 35.2796726,12.207367 35.2796726,11.8308322 C35.2796726,11.4542974 34.9740791,11.148704 34.5975443,11.148704 Z"></path>
                    <path d="M34.5975443,14.9686221 L9.44065484,14.9686221 C9.06412005,14.9686221 8.7585266,15.2742156 8.7585266,15.6507503 C8.7585266,16.0272851 9.06412005,16.3328786 9.44065484,16.3328786 L34.5975443,16.3328786 C34.9740791,16.3328786 35.2796726,16.0272851 35.2796726,15.6507503 C35.2796726,15.2742156 34.9740791,14.9686221 34.5975443,14.9686221 Z"></path>
                    <path d="M34.5975443,18.7885402 L9.44065484,18.7885402 C9.06412005,18.7885402 8.7585266,19.0941337 8.7585266,19.4706685 C8.7585266,19.8472033 9.06412005,20.1527967 9.44065484,20.1527967 L34.5975443,20.1527967 C34.9740791,20.1527967 35.2796726,19.8472033 35.2796726,19.4706685 C35.2796726,19.0941337 34.9740791,18.7885402 34.5975443,18.7885402 Z"></path>
                    <path d="M24.5839018,22.8813097 L9.44065484,22.8813097 C9.06412005,22.8813097 8.7585266,23.1869031 8.7585266,23.5634379 C8.7585266,23.9399727 9.06412005,24.2455662 9.44065484,24.2455662 L24.5839018,24.2455662 C24.9604366,24.2455662 25.26603,23.9399727 25.26603,23.5634379 C25.26603,23.1869031 24.9604366,22.8813097 24.5839018,22.8813097 Z"></path>
                    <path d="M35.9126876,4.57298772 L35.9126876,4.55661664 C35.9126876,2.04638472 33.8717599,0 31.3560709,0 L4.55661664,0 C2.04638472,0 0,2.04092769 0,4.55661664 L0,21.7517053 C0,24.0982265 1.78444748,26.0354707 4.06548431,26.2810368 L4.06548431,26.2974079 C4.06548431,28.8076398 6.10641201,30.8540246 8.62210095,30.8540246 L27.568895,30.8540246 C27.8308322,30.8540246 28.0763984,30.957708 28.2564802,31.1377899 L33.1623465,36.0436562 C33.4242838,36.3055935 33.7735334,36.4474761 34.1282401,36.4474761 C34.3028649,36.4474761 34.4829468,36.414734 34.6521146,36.3437926 C35.165075,36.1309686 35.4979536,35.6343793 35.4979536,35.0777626 L35.4979536,30.8540246 C37.9754434,30.8103683 39.9727149,28.7858117 39.9727149,26.2974079 L39.9727149,9.10231924 C39.9727149,6.75579809 38.1937244,4.81855389 35.9126876,4.57298772 Z M4.06548431,9.10231924 L4.06548431,24.9058663 C2.53751705,24.6712142 1.36425648,23.3451569 1.36425648,21.7517053 L1.36425648,4.55661664 C1.36425648,2.7994543 2.79399727,1.36425648 4.55661664,1.36425648 L31.3560709,1.36425648 C33.1132333,1.36425648 34.5429741,2.78854025 34.5484311,4.54570259 L8.62210095,4.54570259 C6.11186903,4.54570259 4.06548431,6.58663029 4.06548431,9.10231924 Z M38.6084584,26.2919509 C38.6084584,28.0491132 37.1787176,29.4843111 35.4160982,29.4843111 C34.7066849,29.4843111 34.1336971,30.0627558 34.1336971,30.7667121 L34.1336971,35.0668486 C34.1336971,35.0668486 34.1336971,35.0668486 34.1336971,35.0668486 C34.1336971,35.0668486 34.1282401,35.0668486 34.1282401,35.0668486 C34.1282401,35.0668486 34.1282401,35.0668486 34.1282401,35.0668486 L29.2278308,30.1718963 C28.7858117,29.7298772 28.1964529,29.4843111 27.574352,29.4843111 L8.62210095,29.4843111 C6.86493861,29.4843111 5.42974079,28.0545703 5.42974079,26.2919509 L5.42974079,9.10231924 C5.42974079,7.34515689 6.85948158,5.90995907 8.62210095,5.90995907 L35.4215553,5.90995907 C37.1787176,5.90995907 38.6139154,7.33969986 38.6139154,9.10231924 L38.6139154,26.2919509 L38.6084584,26.2919509 Z"></path>
                  </svg>
                </div>
                <div className="journey__content">
                  <h2 className="journey__title">Speak to us today</h2>
                  <div className="journey__text">
                    Whether it&apos;s on live chat or face to face, one of our specialist team is
                    ready to help.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="journey">
                <div className="journey__icon">
                  <svg
                    className="journey__image"
                    aria-hidden="true"
                    viewBox="0 0 40 26"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M33.4706,13.8064 L29.546,5.9372 C29.5016,5.8502 29.4428,5.7692 29.368,5.7014 C29.293,5.6338 29.209,5.5842 29.1214,5.5528 L24.5194,3.8988 C24.1988,3.7836 23.8554,3.7218 23.498,3.725 C23.141,3.7288 22.7992,3.7974 22.4802,3.9188 L18.9884,5.2508 C18.7426,5.3448 18.4986,5.4528 18.258,5.5758 C18.1776,5.6174 18.0986,5.6624 18.02,5.7066 C17.7564,5.5638 17.4812,5.438 17.194,5.331 C16.278,4.9886 15.34,4.873 14.4322,4.9506 L12.083,5.1522 C11.9808,5.161 11.8776,5.1926 11.7812,5.2492 C11.6848,5.306 11.6052,5.3826 11.5426,5.4712 L6.253,13.0014 C6.144,13.156 6.0858,13.3528 6.1036,13.561 C6.121,13.7692 6.2106,13.9518 6.343,14.083 L8.6438,16.3632 C8.5176,16.5942 8.4376,16.8536 8.4192,17.1312 C8.386,17.63 8.5498,18.1116 8.879,18.4874 C9.2086,18.863 9.6644,19.088 10.1636,19.1206 C10.1902,19.1224 10.2172,19.1224 10.2442,19.1234 C10.0396,19.7848 10.207,20.536 10.74,21.0404 C11.059,21.3424 11.468,21.5184 11.9026,21.5466 C11.6226,22.2406 11.774,23.0682 12.3462,23.6096 C12.6952,23.9404 13.1516,24.1222 13.6326,24.1222 C14.1334,24.1222 14.6006,23.9266 14.9534,23.5734 C15.0846,24.421 15.7888,25.0968 16.6794,25.155 C16.7204,25.1578 16.7624,25.1596 16.8034,25.1596 C17.031,25.1596 17.249,25.1166 17.4518,25.041 C17.783,25.2618 18.1778,25.3834 18.598,25.3664 C19.1144,25.3448 19.5776,25.117 19.924,24.7606 L18.6586,23.498 C18.6616,23.4688 18.667,23.4408 18.6682,23.4106 C18.6846,23.1626 18.6506,22.9226 18.5768,22.6996 L21.1666,25.2828 C21.4934,25.4158 21.849,25.4824 22.2194,25.4674 C22.9606,25.4372 23.6208,25.0872 24.0884,24.5456 L24.3476,24.245 C24.3716,24.2166 24.39,24.1846 24.406,24.1502 L20.4186,20.1738 C20.3158,20.072 20.3076,19.9026 20.3988,19.796 C20.4902,19.69 20.6486,19.6864 20.7506,19.7882 L25.4928,24.5172 C25.7512,24.6078 26.0278,24.652 26.3152,24.6402 C26.9668,24.6136 27.5482,24.3058 27.9592,23.8288 L28.5854,23.104 C28.729,22.9368 28.8146,22.7112 28.8066,22.466 L24.6452,18.3172 C24.5436,18.2152 24.5344,18.0454 24.6256,17.9396 C24.7176,17.8334 24.8756,17.8298 24.9774,17.9316 L29.1584,22.1006 C29.33,22.1464 29.5102,22.1688 29.6954,22.1614 C30.2296,22.1398 30.7048,21.8878 31.0412,21.4972 L31.2094,21.3024 C31.546,20.9126 31.7444,20.3846 31.7242,19.8104 C31.7038,19.2364 31.4698,18.7264 31.107,18.3644 L29.9908,17.2516 L30.2728,17.5324 L33.2908,14.8072 C33.419,14.692 33.512,14.5306 33.546,14.341 C33.5798,14.1516 33.5492,13.9646 33.4706,13.8064 Z M10.216,18.3138 C9.933,18.2954 9.6742,18.1678 9.4868,17.9542 C9.2996,17.7412 9.2072,17.4678 9.226,17.1842 C9.2618,16.6276 9.7278,16.1918 10.2842,16.1918 C10.3078,16.1918 10.3318,16.1924 10.3554,16.1938 C10.6384,16.2126 10.8972,16.34 11.0846,16.5536 C11.2718,16.767 11.3642,17.0402 11.346,17.3238 C11.3072,17.904 10.803,18.353 10.216,18.3138 Z M12.0254,20.7438 C11.7528,20.7438 11.4936,20.641 11.2956,20.4536 C10.8754,20.0564 10.8526,19.387 11.2426,18.9638 C11.2628,18.9428 11.6772,18.5044 11.876,18.2952 L11.9804,18.1842 C12.1832,17.9702 12.4572,17.8522 12.752,17.8522 C13.0248,17.8522 13.2842,17.9556 13.4818,18.1434 C13.688,18.3382 13.8062,18.6016 13.8138,18.8856 C13.8216,19.1686 13.7184,19.4384 13.5236,19.644 L13.228,19.9566 C13.1648,20.023 13.097,20.0948 13.0276,20.168 C13.0166,20.1804 13.0044,20.1928 12.9938,20.2044 C12.9422,20.2586 12.8966,20.3066 12.8612,20.3436 C12.841,20.3654 12.8208,20.3872 12.8,20.4084 C12.7948,20.4138 12.7908,20.4184 12.7904,20.419 C12.5892,20.6286 12.317,20.7438 12.0254,20.7438 Z M14.3968,22.989 C14.195,23.1986 13.9236,23.3138 13.6322,23.3138 C13.3594,23.3138 13.0996,23.2104 12.9022,23.0228 C12.4822,22.6256 12.4592,21.9564 12.848,21.5352 C12.8572,21.5252 13.1006,21.2676 13.3764,20.9766 C13.3764,20.9764 13.3764,20.9764 13.3764,20.9764 L13.5812,20.7602 C13.9398,20.3806 14.0574,20.2572 14.097,20.2142 C14.1016,20.21 14.107,20.205 14.1108,20.2006 L14.1108,20.2006 L14.1116,20.2 C14.1462,20.1626 14.1664,20.1418 14.167,20.1412 C14.3694,19.9272 14.6438,19.809 14.9388,19.809 C15.2116,19.809 15.4704,19.9122 15.6686,20.0998 C15.8748,20.295 15.9924,20.5586 16.0002,20.8418 C16.008,21.126 15.9048,21.3956 15.7092,21.6022 C15.6902,21.6222 14.4378,22.9454 14.3968,22.989 Z M16.732,24.349 C16.1476,24.3102 15.7032,23.8034 15.7418,23.2194 C15.7784,22.6624 16.2426,22.2266 16.7998,22.2266 C16.8234,22.2266 16.8474,22.2274 16.871,22.2288 C17.4552,22.2672 17.8996,22.774 17.8616,23.3582 C17.8232,23.938 17.3198,24.3876 16.732,24.349 Z M29.717,16.9788 L21.4502,8.7368 L21.4502,8.7368 L21.5434,8.5014 C21.5916,8.3786 21.5854,8.2336 21.5148,8.1116 C21.444,7.99 21.3256,7.9192 21.2016,7.9126 L20.5872,7.8758 L20.5872,7.8758 L19.916,7.836 L19.865,8.6316 C19.8644,8.6482 19.7314,10.4574 18.8088,12.092 C17.863,13.7694 16.6098,14.3478 16.4188,14.385 C16.2054,14.4264 15.9816,14.4658 15.7956,14.4658 C15.6678,14.4658 15.5694,14.4478 15.4852,14.4092 L15.1714,14.2638 C15.0398,14.2028 14.9394,14.0908 14.8864,13.948 C14.8348,13.8102 14.8354,13.6596 14.8864,13.5222 L18.0306,6.6218 L18.5652,6.2696 L18.7806,6.1876 L18.7802,6.1876 L22.7318,4.6804 C22.9802,4.5858 23.2404,4.5362 23.5046,4.5338 L23.5266,4.5336 C23.783,4.5336 24.037,4.578 24.2802,4.6656 L28.8824,6.3196 L32.8074,14.1886 L29.717,16.9788 Z"></path>
                    <path d="M34.1898,0.9114 L31.083,2.4604 C30.6362,2.6838 30.2738,3.0774 30.1026,3.5886 C29.9316,4.1 29.9846,4.6322 30.2068,5.08 L34.2746,13.235 C34.4976,13.6816 34.891,14.0446 35.4032,14.215 C35.914,14.3862 36.4462,14.334 36.8938,14.1108 L40,12.561 L34.1898,0.9114 Z M36.8858,12.5658 C36.4732,12.5658 36.1376,12.2312 36.1376,11.818 C36.1376,11.4044 36.4732,11.069 36.8858,11.069 C37.2992,11.069 37.6348,11.4044 37.6348,11.818 C37.6348,12.2312 37.2992,12.5658 36.8858,12.5658 Z"></path>
                    <path d="M0,10.7828 L2.8404,12.7782 C3.2492,13.0658 3.7678,13.1968 4.299,13.1038 C4.8306,13.0112 5.2734,12.7116 5.5604,12.303 L10.799,4.8458 C11.0868,4.4372 11.2178,3.918 11.1252,3.3872 C11.0318,2.8558 10.7334,2.4126 10.3242,2.125 L7.4834,0.13 L0,10.7828 Z M2.45,10.4 C2.5116,9.9912 2.893,9.7098 3.3012,9.7712 C3.7104,9.833 3.9914,10.2146 3.9302,10.6232 C3.8684,11.0324 3.4874,11.3138 3.0784,11.2516 C2.6694,11.1904 2.3882,10.8092 2.45,10.4 Z"></path>
                  </svg>
                </div>
                <div className="journey__content">
                  <h3 className="journey__title">Get the best deal</h3>
                  <div className="journey__text">
                    We will be there every step of the process, ensuring we get you the best deal
                    for you.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="journey">
                <div className="journey__icon">
                  <svg
                    className="journey__image"
                    aria-hidden="true"
                    viewBox="0 0 40 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M34.2750929,18.314746 L34.2750929,30.2106568 C34.2750929,30.6402313 34.118133,31.0119785 33.8042131,31.3258984 C33.4902933,31.6398183 33.1185461,31.7967782 32.6889715,31.7967782 L23.1722429,31.7967782 L23.1722429,22.2800496 L16.8277571,22.2800496 L16.8277571,31.7967782 L7.3110285,31.7967782 C6.88145394,31.7967782 6.50970673,31.6398183 6.19578686,31.3258984 C5.881867,31.0119785 5.72490706,30.6402313 5.72490706,30.2106568 L5.72490706,18.314746 C5.72490706,18.2982239 5.72903759,18.2734407 5.73729864,18.2403965 C5.74555969,18.2073523 5.74969021,18.1825692 5.74969021,18.1660471 L20,6.41883519 L34.2503098,18.1660471 C34.2668319,18.1990913 34.2750929,18.2486576 34.2750929,18.314746 Z M39.8017348,16.6047088 L38.2651797,18.4386617 C38.1330029,18.5873606 37.9595209,18.6782321 37.7447336,18.7112763 L37.6703841,18.7112763 C37.4555969,18.7112763 37.2821148,18.653449 37.149938,18.5377943 L20,4.23791822 L2.85006196,18.5377943 C2.65179678,18.6699711 2.4535316,18.7277984 2.25526642,18.7112763 C2.04047914,18.6782321 1.86699711,18.5873606 1.73482032,18.4386617 L0.19826518,16.6047088 C0.0660883932,16.4394878 0.00826104915,16.2453532 0.0247831475,16.0223048 C0.0413052458,15.7992565 0.132176786,15.6216439 0.29739777,15.4894672 L18.1164808,0.644361834 C18.6451879,0.214787278 19.2730277,0 20,0 C20.7269723,0 21.3548121,0.214787278 21.8835192,0.644361834 L27.9306072,5.70012392 L27.9306072,0.867410161 C27.9306072,0.636100785 28.0049566,0.446096654 28.1536555,0.29739777 C28.3023544,0.148698885 28.4923585,0.0743494424 28.7236679,0.0743494424 L33.4820322,0.0743494424 C33.7133416,0.0743494424 33.9033457,0.148698885 34.0520446,0.29739777 C34.2007435,0.446096654 34.2750929,0.636100785 34.2750929,0.867410161 L34.2750929,10.9789343 L39.7026022,15.4894672 C39.8678232,15.6216439 39.9586948,15.7992565 39.9752169,16.0223048 C39.991739,16.2453532 39.9339116,16.4394878 39.8017348,16.6047088 Z"></path>
                  </svg>
                </div>
                <div className="journey__content">
                  <h3 className="journey__title">Enjoy your dream home</h3>
                  <div className="journey__text">
                    Your dream home or refinance option is just a click or phone call away, so speak
                    to us today!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-8">
              <div className="text-row text-row--emphasis">
                <p className="text-row__paragraph text-row__paragraph--emphasis">
                  Secured over <strong>£90 Million</strong> in mortgage lending and over{' '}
                  <strong>700 mortgages and protection customers</strong> in 2023.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="youtube">
          <h3 className="youtube__header">
            <a className="youtube__link" href="https://www.tiktok.com/@glenrussellproperty">
              <span className="youtube__content">
                <span className="youtube__background">
                  <svg
                    className="youtube__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                  </svg>
                  <span>
                    <strong>Follow us</strong> on <strong>TikTok</strong>
                  </span>
                </span>
              </span>
            </a>
          </h3>
        </div>

        <div className="lenders-section">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col">
                <div className="lenders animated fadeIn delay-1s">
                  <div className="lenders__cover"></div>
                  <div className="glide">
                    <div className="glide__track" data-glide-el="track">
                      <ul className="glide__slides">
                        <li className="glide__slide">
                          <img
                            className="lenders__image"
                            src="/images/lenders/barclays.png"
                            alt="Barclays"
                          />
                        </li>
                        <li className="glide__slide">
                          <img
                            className="lenders__image"
                            src="/images/lenders/hsbc.png"
                            alt="HSBC"
                          />
                        </li>
                        <li className="glide__slide">
                          <img className="lenders__image" src="/images/lenders/tsb.png" alt="TSB" />
                        </li>
                        <li className="glide__slide">
                          <img
                            className="lenders__image"
                            src="/images/lenders/natwest.png"
                            alt="Natwest"
                          />
                        </li>
                        <li className="glide__slide">
                          <img className="lenders__image" src="/images/lenders/rbs.png" alt="RBS" />
                        </li>
                        <li className="glide__slide">
                          <img
                            className="lenders__image"
                            src="/images/lenders/santander.png"
                            alt="Santander"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="boxed">
                  <h2 className="boxed__title">Why choose RFS?</h2>
                  <h3 className="boxed__sub-title">
                    Our numerous positive reviews and client recommendations speak for themselves,
                    because we always aim to help navigate the often confusing world of applying for
                    mortgages and protection advice.
                  </h3>
                  <div className="boxed__text">
                    Whether you are a first-time buyer or considering remortgaging your property, we
                    take on board your needs and make it our personal project to find the right
                    solutions for you.
                  </div>
                  <div className="boxed__button">
                    <Link legacyBehavior href="/get-in-touch/">
                      <a className="button">Request a call back</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container scroll-animation animated">
          <div className="row justify-content-md-center">
            <div className="col-md-8">
              <div className="text-row">
                <h2 className="text-row__title">
                  Your go to Mortgage Brokers for advice you can trust
                </h2>
                <p className="text-row__paragraph">
                  We have the simple belief that everyone should receive high-quality service that
                  exceeds their expectations, and we always aim to make the often intimidating world
                  of mortgages and insurance that little bit easier to conquer.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="banner banner--split scroll-animation animated">
          <div className="container">
            <div className="row justify-content-md-end">
              <div className="col-lg-6">
                <div className="free-quote">
                  <h2 className="free-quote__title">Request a FREE mortgage quote*</h2>
                  <div className="free-quote__text">
                    Contact us today to receive our expert guidance and mortgage advice. Our
                    specialist mortgage brokers are on hand to make finding the right mortgage for
                    you efficient, quick, and stress-free.
                  </div>
                  <div className="free-quote__button">
                    <Link legacyBehavior href="/get-in-touch/">
                      <a className="button">Request a free quote</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container scroll-animation animated">
          <div className="row justify-content-md-center">
            <div className="col-md-8">
              <div className="text-row">
                <h2 className="text-row__title">Remortgages &amp; Insurance Brokers</h2>
                <p className="text-row__paragraph">
                  We provide tailored advice on purchases, remortgages, buy-to-lets, let-to-buys,
                  further advances, and referrals to third parties for commercial lending and
                  bridging finance providers. We also cover all protection advice including life
                  cover, critical illness cover and income protection.
                </p>
                <hr className="text-row__divider" />
              </div>
            </div>
          </div>
        </div>

        <div className="container scroll-animation animated">
          <div className="row justify-content-md-center">
            <div className="col-md-8">
              <div className="text-row">
                <p className="text-row__paragraph">
                  We are responsible and helpful Rayleigh mortgage brokers, placing the individual
                  at the centre of everything we do. Contact us today on 01268 330 880 to speak
                  directly to a member of the team, or{' '}
                  <Link legacyBehavior href="/get-in-touch/">
                    <a>get in touch online</a>
                  </Link>{' '}
                  to arrange a call-back or appointment at a time to suit you.
                </p>
                <hr className="text-row__divider" />
              </div>
            </div>
          </div>
        </div>

        <ReviewContainer>
          <Review name="Kerry Slater">
            Very happy with the service we have received! Very quick replies to emails and proactive
            in helping with the whole process. Not just the mortgage service included but also life
            and home insurance services too! Many thanks to Jack Johnson and Glen for their help
            specifically, will continue to use them both in the future :)
          </Review>
          <Review name="Hayley Thirkettle">
            From day 1 glen and his team showed commitment and such a professional standard. He made
            sure all my questions and concerns were dealt with promptly. He made getting my first
            mortgage / property a breeze... highly recommend.
          </Review>
          <Review name="Joanna Kurn">
            Fantastic service. Found the best deal for our remortgage in very quick time. All went
            through with no problems. Helped with all the documents we needed and informed us when
            we had completed on the mortgage. Would highly recommend.
          </Review>
          <Review name="Paul Addison">
            Brilliant Service, from the initial phone call with Glen, to emails with Maxine it was
            very easy and painless. Got a great new deal , completed bang on time, and cannot find
            any fault at all. Would highly recommend, and will back when this deal is due to
            expire!!
          </Review>
        </ReviewContainer>
      </Layout>
    </>
  );
}
