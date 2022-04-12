import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import CookieConsent from "react-cookie-consent";

export default function Layout(props) {
  const { children, heroType, heroContent } = props;

  const router = useRouter();

  const [navigationVisible, setNavigationVisible] = useState(false);
  const [hideTopDetails, setHideTopDetails] = useState(false);
  const [lockNav, setLockNav] = useState(false);

  const toggleNavigation = () => {
    setNavigationVisible(!navigationVisible);
  };

  const navLocation = () => {
    if (window.scrollY > 56) {
      setHideTopDetails(true);
    } else {
      setHideTopDetails(false);
    }

    if (window.scrollY > 100) {
      setLockNav(true);
    } else {
      setLockNav(false);
    }
  };

  useEffect(() => {
    // this probably needs to be debounced at some point
    window.addEventListener("scroll", navLocation);

    return () => {
      window.removeEventListener("scroll", navLocation);
    };
  });

  const mortgageLinks = [
    {
      title: "Planning Your Mortgage",
      path: "/mortgages/planning-your-mortgage",
    },
    {
      title: "First Time Buyers",
      path: "/mortgages/first-time-buyers",
    },
    {
      title: "Remortgages",
      path: "/mortgages/remortgage",
    },
    {
      title: "Moving Home",
      path: "/mortgages/moving-home",
    },
    {
      title: "Help to Buy",
      path: "/mortgages/help-to-buy",
    },
    {
      title: "Shared Ownership",
      path: "/mortgages/shared-ownership",
    },
    {
      title: "Buy to Let",
      path: "/mortgages/buy-to-let",
    },
    {
      title: "Commercial Mortgages",
      path: "/mortgages/commercial-mortgages",
    },
    {
      title: "Equity Release",
      path: "/mortgages/equity-release",
    },
    {
      title: "Self Employed Mortgages in Rayleigh",
      path: "/mortgages/self-employed-mortgages-in-rayleigh-essex",
    },
  ];

  const menu = [
    { title: "Home", path: "/" },
    { title: "About us", path: "/about-us" },
    {
      title: "Mortgages",
      path: "/mortgages",
      subNav: mortgageLinks,
    },
    {
      title: "Insurance",
      path: "/insurance",
      subNav: [
        {
          title: "Critical Illness Cover",
          path: "/mortgages/critical-illness-cover",
        },
        {
          title: "Income Protection Insurance",
          path: "/mortgages/income-protection-insurance",
        },
        {
          title: "Life Insurance",
          path: "/mortgages/life-insurance",
        },
      ],
    },
    { title: "Offers", path: "/offers" },
    { title: "Get in touch", path: "/get-in-touch" },
  ];

  return (
    <>
      <header>
        <div
          className={`top-row-container ${
            lockNav && "top-row-container--scrolled"
          }`}
        >
          <div className="container">
            <div className="top-row row">
              <div className="logo-container col-sm-12 col-lg-4">
                <Link href="/">
                  <a title="Homepage">
                    <img
                      className="logo"
                      src="/images/logo.svg"
                      alt="Russell Financial Solutions logo"
                    />
                  </a>
                </Link>
                <div className="mobile-icon">
                  <button
                    onClick={toggleNavigation}
                    className={`hamburger hamburger--slider ${
                      navigationVisible && "is-active"
                    }`}
                    type="button"
                  >
                    <span className="hamburger-box">
                      <span className="hamburger-inner"></span>
                    </span>
                  </button>
                </div>
              </div>
              <div className="details-container col-md-8">
                <div
                  className={`details animated faster ${
                    hideTopDetails ? "fadeOut" : "fadeIn"
                  }`}
                >
                  <div className="details__item">
                    <svg
                      className="details__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-labelledby="opening-hours"
                    >
                      <title id="opening-hours">Opening hours</title>
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <div className="details__content">
                      <div className="details__primary">
                        Mon - Sat: 8am - 8pm
                      </div>
                      <div className="details__primary">Sun: 10am - 5pm</div>
                    </div>
                  </div>
                  <div className="details__item">
                    <svg
                      className="details__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-labelledby="address"
                    >
                      <title id="address">Address</title>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <div className="details__content">
                      <address className="details__address">
                        <div className="details__primary">57 High Street</div>
                        <div className="details__secondary">
                          Rayleigh, Essex, SS67EW
                        </div>
                      </address>
                    </div>
                  </div>
                  <div className="details__item">
                    <svg
                      className="details__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-labelledby="phone"
                    >
                      <title id="phone">Phone numbers</title>
                      <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <div className="details__content">
                      <div className="details__primary">01268 330 880</div>
                      <div className="details__secondary">07738 165 602</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row d-lg-none">
              <div className="col">
                <div className="telephone">
                  <svg
                    className="telephone__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-labelledby="phone"
                  >
                    <title id="phone">Phone numbers</title>
                    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a className="telephone__number" href="tel:+441268330880">
                    01268 330 880
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main id="body">
        <CookieConsent
          enableDeclineButton
          declineButtonText="Decline"
          style={{ background: "#000000" }}
          declineButtonStyle={{ background: "#000000", color: "#ffffff" }}
          buttonText="Allow cookies"
          buttonStyle={{ background: "#29E458", fontWeight: "600" }}
          onAccept={(acceptedByScrolling) => {
            var Tawk_API = Tawk_API || {},
              Tawk_LoadStart = new Date();
            (function () {
              var s1 = document.createElement("script"),
                s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = "https://embed.tawk.to/5e258b068e78b86ed8aa286b/default";
              s1.charset = "UTF-8";
              s1.setAttribute("crossorigin", "*");
              s0.parentNode.insertBefore(s1, s0);
            })();
          }}
        >
          We use{" "}
          <a
            style={{ color: "#ffffff", opacity: "0.8" }}
            href="https://www.cookiesandyou.com/"
          >
            cookies
          </a>{" "}
          to enhance the user experience and provide live chat!{" "}
        </CookieConsent>
        <div className="wrapper padding">
          <div className={`hero hero--${heroType}`}>
            <div
              className={`navigation-container ${
                lockNav ? "navigation-container--scrolled" : ""
              }`}
            >
              <div className="container">
                <div className="row">
                  <nav
                    className={`navigation col ${
                      navigationVisible ? "navigation--show-on-mobile" : ""
                    }
                      ${hideTopDetails ? "navigation--scrolled" : ""}
                    }`}
                  >
                    <ul className="navigation__list">
                      {menu.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className={`navigation__item ${
                              item.subNav
                                ? "navigation__item--has-children"
                                : ""
                            }`}
                          >
                            <Link href={item.path}>
                              <a
                                className={`navigation__link ${
                                  `/${router.pathname.split("/")[1]}` ===
                                  item.path
                                    ? "navigation__link--active"
                                    : ""
                                }`}
                              >
                                {item.title}
                              </a>
                            </Link>
                            {item.subNav && (
                              <ul>
                                {item.subNav.map((subItem, index) => {
                                  return (
                                    <li
                                      key={index}
                                      className="navigation__item"
                                    >
                                      <a
                                        className="navigation__link "
                                        href={subItem.path}
                                      >
                                        {subItem.title}
                                      </a>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="container">{heroContent}</div>
          </div>
          <div className="container">{children}</div>
        </div>
      </main>

      <footer>
        <div className="footer-container">
          <div className="container">
            <div className="row footer">
              <div className="col-lg-3">
                <img
                  className="footer__logo"
                  src="/images/logo-light.svg"
                  alt="Russell Financial Solution logo"
                />

                <div className="footer__social">
                  <h3 className="footer__social-title">Connect with us</h3>
                  <ul className="footer__social-list">
                    <li className="footer__social-item">
                      <a
                        href="https://www.facebook.com/russellfinancialsolutions"
                        title="Facebook"
                      >
                        <svg
                          className="footer__social-icon"
                          version="1.1"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M255.022,511.998l0.229,0.001l-0.079,0l-0.15,-0.001Zm1.806,0.001l-0.079,0l0.229,-0.001l-0.15,0.001Zm-2.588,-0.005l0.247,0.001l-0.142,0l-0.105,-0.001Zm3.415,0.001l-0.142,0l0.247,-0.001l-0.105,0.001Zm-4.169,-0.007l0.165,0.001l-0.132,-0.001l-0.033,0Zm4.995,0l-0.132,0.001l0.165,-0.001l-0.033,0Zm0.826,-0.009l-0.058,0.001l0.223,-0.003l-0.165,0.002Zm-6.779,-0.002l0.223,0.003l-0.058,-0.001l-0.165,-0.002Zm7.604,-0.01l-0.135,0.002l0.275,-0.004l-0.14,0.002Zm-8.404,-0.002l0.275,0.004l-0.135,-0.002l-0.14,-0.002Zm9.228,-0.012l-0.182,0.003l0.254,-0.005l-0.072,0.002Zm-9.984,-0.002l0.254,0.005l-0.182,-0.003l-0.072,-0.002Zm-0.937,-0.019l0.225,0.005l-0.04,-0.001l-0.185,-0.004Zm11.745,0.004l-0.04,0.001l0.225,-0.005l-0.185,0.004Zm-12.567,-0.025l0.309,0.008l-0.125,-0.003l-0.184,-0.005Zm13.39,0.005l-0.125,0.003l0.309,-0.008l-0.184,0.005Zm0.823,-0.022l-0.201,0.006l0.316,-0.009l-0.115,0.003Zm-14.967,-0.003l0.316,0.009l-0.201,-0.006l-0.115,-0.003Zm-0.72,-0.022l0.225,0.007l-0.212,-0.007l-0.194,-0.006l0.181,0.006Zm16.509,0l-0.212,0.007l0.225,-0.007l0.181,-0.006l-0.194,0.006Zm0.821,-0.027l-0.112,0.004l0.345,-0.012l-0.233,0.008Zm-18.371,-0.008l0.345,0.012l-0.112,-0.004l-0.233,-0.008Zm-0.749,-0.028l0.362,0.013l-0.201,-0.007l-0.161,-0.006Zm19.941,0.006l-0.201,0.007l0.362,-0.013l-0.161,0.006Zm-20.676,-0.036l0.354,0.015l-0.277,-0.011l-0.077,-0.004Zm21.495,0.004l-0.277,0.011l0.354,-0.015l-0.077,0.004Zm-22.525,-0.049l0.38,0.017l-0.093,-0.003l-0.287,-0.014Zm23.345,0.014l-0.093,0.003l0.38,-0.017l-0.287,0.014Zm-24.084,-0.048l0.394,0.018l-0.186,-0.008l-0.208,-0.01Zm24.902,0.01l-0.186,0.008l0.394,-0.018l-0.208,0.01Zm-25.63,-0.047l0.397,0.02l-0.279,-0.013l-0.118,-0.007Zm26.448,0.007l-0.279,0.013l0.397,-0.02l-0.118,0.007Zm0.818,-0.043l-0.362,0.019l0.321,-0.017l0.378,-0.021l-0.337,0.019Zm-27.925,0.002l0.321,0.017l-0.362,-0.019l-0.337,-0.019l0.378,0.021Zm28.741,-0.048l-0.16,0.009l0.406,-0.023l-0.246,0.014Zm-29.844,-0.014l0.406,0.023l-0.16,-0.009l-0.246,-0.014Zm-0.722,-0.043l0.405,0.024l-0.253,-0.014l-0.152,-0.01Zm31.382,0.01l-0.253,0.014l0.405,-0.024l-0.152,0.01Zm-32.071,-0.053l0.365,0.023l-0.34,-0.021l-0.342,-0.022l0.317,0.02Zm32.887,0.002l-0.34,0.021l0.365,-0.023l0.317,-0.02l-0.342,0.022Zm0.814,-0.053l-0.122,0.008l0.387,-0.026l-0.265,0.018Zm-34.755,-0.018l0.387,0.026l-0.122,-0.008l-0.265,-0.018Zm-0.721,-0.05l0.38,0.027l-0.208,-0.014l-0.172,-0.013Zm36.29,0.013l-0.208,0.014l0.38,-0.027l-0.172,0.013Zm-37.009,-0.064l0.349,0.025l-0.271,-0.019l-0.078,-0.006Zm37.822,0.006l-0.271,0.019l0.349,-0.025l-0.078,0.006Zm-38.789,-0.079l0.306,0.023l-0.074,-0.005l-0.232,-0.018Zm39.602,0.018l-0.074,0.005l0.306,-0.023l-0.232,0.018Zm0.811,-0.063l-0.146,0.011l0.311,-0.025l-0.165,0.014Zm-41.157,-0.014l0.311,0.025l-0.146,-0.011l-0.165,-0.014Zm-0.725,-0.059l0.264,0.022l-0.186,-0.015l-0.078,-0.007Zm42.694,0.007l-0.186,0.015l0.264,-0.022l-0.078,0.007Zm-43.492,-0.074l0.079,0.007l-0.013,-0.001l-0.066,-0.006Zm44.302,0.006l-0.013,0.001l0.079,-0.007l-0.066,0.006Zm0.81,-0.071l-0.072,0.006l0.181,-0.016l-0.109,0.01Zm-45.965,-0.01l0.181,0.016l-0.072,-0.006l-0.109,-0.01Zm-0.75,-0.068l0.135,0.013l-0.084,-0.008l-0.051,-0.005Zm47.523,0.005l-0.084,0.008l0.135,-0.013l-0.051,0.005Zm-63.736,-2.025c-122.319,-19.226 -216,-125.203 -216,-252.887c0,-141.29 114.71,-256 256,-256c141.29,0 256,114.71 256,256c0,127.684 -93.681,233.661 -216,252.887l0,-178.887l59.65,0l11.35,-74l-71,0l0,-48.021c0,-20.245 9.918,-39.979 41.719,-39.979l32.281,0l0,-63c0,0 -29.296,-5 -57.305,-5c-58.476,0 -96.695,35.44 -96.695,99.6l0,56.4l-65,0l0,74l65,0l0,178.887Z" />
                        </svg>
                      </a>
                    </li>
                    <li className="footer__social-item">
                      <a
                        href="https://www.linkedin.com/company/russell-financial-solutions-ltd/"
                        title="LinkedIn"
                      >
                        <svg
                          className="footer__social-icon"
                          version="1.1"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-80.037,399.871l0,-199.921l-66.464,0l0,199.921l66.464,0Zm239.62,0l0,-114.646c0,-61.409 -32.787,-89.976 -76.509,-89.976c-35.255,0 -51.047,19.389 -59.889,33.007l0,-28.306l-66.447,0c0.881,18.757 0,199.921 0,199.921l66.446,0l0,-111.65c0,-5.976 0.43,-11.95 2.191,-16.221c4.795,-11.935 15.737,-24.299 34.095,-24.299c24.034,0 33.663,18.34 33.663,45.204l0,106.966l66.45,0Zm-272.403,-296.321c-22.74,0 -37.597,14.95 -37.597,34.545c0,19.182 14.405,34.544 36.717,34.544l0.429,0c23.175,0 37.6,-15.362 37.6,-34.544c-0.43,-19.595 -14.424,-34.545 -37.149,-34.545Z" />
                        </svg>
                      </a>
                    </li>
                    <li className="footer__social-item">
                      <a
                        href="https://www.instagram.com/russellfinancialsolutions_/"
                        title="Instagram"
                      >
                        <svg
                          className="footer__social-icon"
                          version="1.1"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm0,96c-43.453,0 -48.902,0.184 -65.968,0.963c-17.03,0.777 -28.661,3.482 -38.839,7.437c-10.521,4.089 -19.444,9.56 -28.339,18.455c-8.895,8.895 -14.366,17.818 -18.455,28.339c-3.955,10.177 -6.659,21.808 -7.437,38.838c-0.778,17.066 -0.962,22.515 -0.962,65.968c0,43.453 0.184,48.902 0.962,65.968c0.778,17.03 3.482,28.661 7.437,38.838c4.089,10.521 9.56,19.444 18.455,28.34c8.895,8.895 17.818,14.366 28.339,18.455c10.178,3.954 21.809,6.659 38.839,7.436c17.066,0.779 22.515,0.963 65.968,0.963c43.453,0 48.902,-0.184 65.968,-0.963c17.03,-0.777 28.661,-3.482 38.838,-7.436c10.521,-4.089 19.444,-9.56 28.34,-18.455c8.895,-8.896 14.366,-17.819 18.455,-28.34c3.954,-10.177 6.659,-21.808 7.436,-38.838c0.779,-17.066 0.963,-22.515 0.963,-65.968c0,-43.453 -0.184,-48.902 -0.963,-65.968c-0.777,-17.03 -3.482,-28.661 -7.436,-38.838c-4.089,-10.521 -9.56,-19.444 -18.455,-28.339c-8.896,-8.895 -17.819,-14.366 -28.34,-18.455c-10.177,-3.955 -21.808,-6.66 -38.838,-7.437c-17.066,-0.779 -22.515,-0.963 -65.968,-0.963Zm0,28.829c42.722,0 47.782,0.163 64.654,0.933c15.6,0.712 24.071,3.318 29.709,5.509c7.469,2.902 12.799,6.37 18.397,11.969c5.6,5.598 9.067,10.929 11.969,18.397c2.191,5.638 4.798,14.109 5.509,29.709c0.77,16.872 0.933,21.932 0.933,64.654c0,42.722 -0.163,47.782 -0.933,64.654c-0.711,15.6 -3.318,24.071 -5.509,29.709c-2.902,7.469 -6.369,12.799 -11.969,18.397c-5.598,5.6 -10.928,9.067 -18.397,11.969c-5.638,2.191 -14.109,4.798 -29.709,5.509c-16.869,0.77 -21.929,0.933 -64.654,0.933c-42.725,0 -47.784,-0.163 -64.654,-0.933c-15.6,-0.711 -24.071,-3.318 -29.709,-5.509c-7.469,-2.902 -12.799,-6.369 -18.398,-11.969c-5.599,-5.598 -9.066,-10.928 -11.968,-18.397c-2.191,-5.638 -4.798,-14.109 -5.51,-29.709c-0.77,-16.872 -0.932,-21.932 -0.932,-64.654c0,-42.722 0.162,-47.782 0.932,-64.654c0.712,-15.6 3.319,-24.071 5.51,-29.709c2.902,-7.468 6.369,-12.799 11.968,-18.397c5.599,-5.599 10.929,-9.067 18.398,-11.969c5.638,-2.191 14.109,-4.797 29.709,-5.509c16.872,-0.77 21.932,-0.933 64.654,-0.933Zm0,49.009c-45.377,0 -82.162,36.785 -82.162,82.162c0,45.377 36.785,82.162 82.162,82.162c45.377,0 82.162,-36.785 82.162,-82.162c0,-45.377 -36.785,-82.162 -82.162,-82.162Zm0,135.495c-29.455,0 -53.333,-23.878 -53.333,-53.333c0,-29.455 23.878,-53.333 53.333,-53.333c29.455,0 53.333,23.878 53.333,53.333c0,29.455 -23.878,53.333 -53.333,53.333Zm104.609,-138.741c0,10.604 -8.597,19.199 -19.201,19.199c-10.603,0 -19.199,-8.595 -19.199,-19.199c0,-10.604 8.596,-19.2 19.199,-19.2c10.604,0 19.201,8.596 19.201,19.2Z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer__section col-lg-3">
                <ul className="footer__list">
                  <li className="footer__item">
                    <h3 className="footer__title">
                      <Link href="/mortgages">
                        <a className="footer__link">Mortgages</a>
                      </Link>
                    </h3>
                    <ul className="footer__list">
                      {mortgageLinks.map((item, index) => {
                        return (
                          <li key={index} className="footer__item">
                            <Link href={item.path}>
                              <a className="footer__sub-link">{item.title}</a>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="footer__section col-lg-3">
                <h3 className="footer__title">
                  <a className="footer__link" href="/insurance/">
                    Insurance
                  </a>
                </h3>
                <ul className="footer__list">
                  <li className="footer__item">
                    <a
                      className="footer__sub-link"
                      href="/insurance/critical-illness-cover"
                    >
                      Critical Illness Cover
                    </a>
                  </li>
                  <li className="footer__item">
                    <a
                      className="footer__sub-link"
                      href="/insurance/income-protection-insurance"
                    >
                      Income Protection Insurance
                    </a>
                  </li>
                  <li className="footer__item">
                    <a
                      className="footer__sub-link"
                      href="/insurance/life-insurance"
                    >
                      Life Insurance
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__section col-lg-3">
                <h3 className="footer__title">
                  <Link href="/get-in-touch/">
                    <a className="footer__link">Get in touch</a>
                  </Link>
                </h3>
                <p className="footer__text">
                  01268 330 880
                  <br />
                  07738 165 602
                </p>
                <address className="footer__text">
                  57 High Street
                  <br />
                  Rayleigh
                  <br />
                  Essex
                  <br />
                  SS67EW
                </address>
              </div>
            </div>
            <div className="row disclaimer">
              <div className="col">
                <p className="disclaimer__main">
                  * Russell Financial Solutions charge a fee on application
                  stage subject to individual circumstances. We will confirm the
                  amount before you choose to proceed.
                </p>
                <p className="disclaimer__main">
                  Your home may be repossessed if you do not keep up your
                  repayments on your mortgage.
                </p>
                <p className="disclaimer__sub">
                  Russell Financial Solutions Ltd is an appointed Representative
                  of Mortgage Intelligence Ltd which is authorised and regulated
                  by the Financial Conduct Authority under number 305330, in
                  respect of mortgage, insurance and consumer credit mediation
                  activities only. Registered address: Russell Financial
                  Solutions Ltd, 57 High Street, Rayleigh, Essex, SS67EW.
                  Registered in England and Wales under registration number
                  9415512.
                </p>
                <p className="disclaimer__sub">
                  We always aim to provide a high quality service to our
                  customers. However, if you encounter any problems and we are
                  unable to resolve them you can take your complaint to an
                  independent Ombudsman. Our advice is covered under the{" "}
                  <a
                    className="disclaimer__sub-link"
                    href="https://www.financial-ombudsman.org.uk/consumers/how-to-complain"
                  >
                    Financial Ombudsman Service
                  </a>
                  .
                </p>
                <p className="disclaimer__sub">
                  This Russell Financial Solutions Ltd privacy notice provides
                  information on how we and any of our subsidiaries, and any 3rd
                  party providers collect, use, secure, transfer and share your
                  information. Russell Financial Solutions Ltd are a mortgage
                  and insurance intermediary firm and we will collect
                  information directly from you. It should be noted that as part
                  of the Financial Conduct Authority’s (FCA’s) regulatory
                  process we are Appointed Representatives of Mortgage
                  Intelligence Ltd and are required to enter your details onto
                  their systems. Details of their Privacy Notice can be found at{" "}
                  <a
                    className="disclaimer__sub-link"
                    href="http://www.experiencemi.co.uk/"
                    title="Mortgage Network"
                  >
                    www.experiencemi.co.uk
                  </a>
                  .
                </p>
                <p className="disclaimer__sub">
                  &copy; Russell Financial Solutions Ltd{" "}
                  {new Date().getFullYear()} |{" "}
                  <a className="disclaimer__sub-link" href="/privacy-notice">
                    Privacy notice
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
