import React, { Component, useState, useEffect } from "react";
import { Image } from "semantic-ui-react";
import "./AboutUs.css";
import FloatingWhatsApp from "react-floating-whatsapp";
import ExploreIcon from "@mui/icons-material/Explore";
import Footer from "../../components/footer/Footer";


function AboutUs(props) {

  /* bring to the top of the page */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleClick = () => {
    window.location.href = "/companies";
  };

  return (
    <div className="aboutus">
      <div className="footer-sticky-popup">
        <ul className="footer-live-chat">
          <li className="whatsup-block">
            <FloatingWhatsApp
              avatar={window.location.origin + '/profile_pics/rushi_bhanushali.png'}
              phoneNumber="919892477213"
              accountName="Rushi Bhanushali"
              statusMessage="Enter the message and our team will get back to you in 24 hours."
              darkMode="True"
            />
          </li>
        </ul>
      </div>

      {/* Why Us? section  */}
      <section>
        <div className="row section1">

          <div className="col-lg-4 col-sm-12">
            <Image
              className="aboutSection1_image"
              src="https://www.swastika.co.in/public/webtheme/images/share-trading/share-trad.png"
              // src="../../../../uploads/2022-06-11T12-16-38.158Zanand_rathi.png"
      
            />
          </div>
          <div className="Aboutus_content whyus col-lg-6 col-sm-12">
            <h2 style={{ marginBottom: "20px" }}>Why Us?</h2>
            <p>
              We founded <strong>Lets trade</strong> 3 years prior with the
              quest to provide solutions to individuals by securing them
              financially. While striving to generate alpha for individuals
              associated with us we came across an Unlisted space where we
              believe that solid research-backed with Fearless & Ambitious
              leadership can unlock hidden gems in the primary market which can
              turn out to be a Wealth Creator. We are one of the few in the
              industry that has emerged as a facilitator in primary markets to
              individuals, Family Offices. A young and professional dynamic team
              that is ready to face challenges, will always cater to you in your
              Successful investing journey. We believe every successful business
              has an edge over their competitors, Our Fintech innovation in the
              primary market to Create liquidity which enables confidence among
              investors to hold during the vicious bear cycle and exit during
              the euphoric bull phase, Market Outlook Research reports, and
              better pricing than everyone will surely make us a market
              prominent player.
              <button
                type="button"
                class="btn btn-dark btn-lg download-button"
                onClick={() => {
                  window.location.href = "/companies";
                }}
              >
                <ExploreIcon />
                Explore Companies
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Our Purpose Section  */}
      <section>
        <div className="row section2">
          <div className="Aboutus_content ourPurpose col-lg-6 col-sm-12">
            <h2 style={{ marginBottom: "20px" }}>Our Purpose?</h2>
            We are dedicated and determined to help our clients achieve
            financial freedom and build Wealth for everyone who is associated
            with us in our endeavor. We are looking to build a robust platform
            where we are making many lucrative opportunities easily accessible
            across new emerging sectors looking to disrupt the market with their
            USP which has a lot of potentials to be the next Unicorn company.
            Howsoever, we strongly believe there are more opportunities that are
            untapped with huge growth potential in this new dynamic economy so
            we can fill the gap for many entrepreneurs by creating such
            awareness in the investment world and make this participation or
            investing in your company an easy job.
          </div>
          <div className="col-lg-4 col-sm-12">
            <Image
              className="aboutSection1_image"
              src="https://www.swastika.co.in/public/webtheme/images/share-trading/share-trad.png"
            />
          </div>
        </div>
      </section>
      
      <section></section>
      <section>
        <div class="container OurServices">
          <h1>Our Services</h1>
          <div class="row OurServicesRow ">
            <div class="service icon-box">
              <Image
                floated="right"
                size="mini"
                src="https://cdn-icons-png.flaticon.com/512/5491/5491832.png"
              />
              <h2>Unlisted Shares</h2>
              <p>
                Invest in high-quality enterprise and emergence of new sectors
                in the primary market by unlocking the value in early stages
                which can turn out to be a potential Unicorn company.
              </p>
            </div>
            <div class="service icon-box">
              <Image
                floated="right"
                size="mini"
                src="https://cdn-icons-png.flaticon.com/512/893/893097.png"
              />
              <h2>Pre-Ipo Shares</h2>
              <p>
                Invest in Business who are making a significant contribution to
                India emerging corporate sector by generating Alpa for investors
                and DRHP has been filed with Sebi.
              </p>
            </div>
            <div class="service icon-box">
              <Image
                floated="right"
                size="mini"
                src="https://cdn-icons-png.flaticon.com/512/33/33308.png"
              />
              <h2>ESOP Shareholders</h2>
              <p>
                Providing exit to ESOP shareholders at attractive market
                valuations who are willing to exit, rebalance, diversify &
                allocate to some alternative asset.
              </p>
            </div>
            <div class="service icon-box startupinvesting">
              <Image
                floated="right"
                size="mini"
                src="https://cdn-icons-png.flaticon.com/512/609/609139.png"
              />
              <h2>Startup Investing</h2>
              <p>
                Startups that appeal-eye popping valuations that hopefully lead
                to an initial public offering (IPO) with an astronomical return
                on investment.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container OurServices">
          <h1>Our Clientele</h1>
          <div class="row OurServicesRow">
            <div class="service icon-box">
              <Image
                floated="right"
                size="mini"
                src="https://cdn-icons-png.flaticon.com/512/1584/1584911.png"
              />
              <h2>Family Office</h2>
            </div>
            <div class="service icon-box">
              <Image
                floated="right"
                size="mini"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/HNI_logo.svg/1200px-HNI_logo.svg.png"
              />
              <h2>HNI's</h2>
            </div>
            <div class="service icon-box">
              <Image
                floated="right"
                size="mini"
                src="https://cdn-icons-png.flaticon.com/512/476/476863.png"
              />
              <h2>UNHNI's</h2>
            </div>
            <div class="service icon-box">
              <Image
                floated="right"
                size="mini"
                src="https://cdn-icons-png.flaticon.com/512/5491/5491832.png"
              />
              <h2>ESOP's</h2>
            </div>
            <div class="service icon-box">
              <Image
                floated="right"
                size="mini"
                src="https://cdn-icons-png.flaticon.com/512/2721/2721131.png"
              />
              <h2>Individuals</h2>
            </div>
            <div class="service icon-box">
              <Image
                floated="right"
                size="mini"
                src="https://as1.ftcdn.net/v2/jpg/03/92/00/32/500_F_392003233_rPgjagP9sVZGQXNBv4j1RQvmR41EcqpJ.jpg"
              />
              <h2>Advisory Firms</h2>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div class="container OurServices">
          <h1>Our Team</h1>
          <div class="row OurServicesRow">
            <div
              class="service"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/abhishek-bhanushali-09a036224",
                  "_blank"
                );
              }}
            >
              <i class="fas fa-chart-line"></i>
              <h2>Abhishek Bhanushali</h2>
              <h6>Founder</h6>
              <Image
                className="aboutSection1_image"
                src={window.location.origin + '/profile_pics/abhishek_bhanushali.png'}
              />
            </div>
            <div
              class="service"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/rushi-bhanushali-ab9457166",
                  "_blank"
                );
              }}
            >
              <i class="fas fa-laptop-code"></i>
              <h2>Rushi Bhanushali</h2>
              <h6>Co-Founder</h6>
              <Image
                className="aboutSection1_image"
                src={window.location.origin + '/profile_pics/rushi_bhanushali.png'}
              />
            </div>

            <div
              class="service"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/reet-jain-188579107",
                  "_blank"
                );
              }}
            >
              <i class="fas fa-laptop-code"></i>
              <h2>Reet Jain</h2>
              <h6>Business Development</h6>
              <Image
                className="aboutSection1_image"
                src={window.location.origin + '/profile_pics/reet_jain.png'}
              />
            </div>
          </div>
        </div>
      </section> */}

      <section>
        <div class="container OurServices" style={{ marginBottom: "20px" }}>
          <h1>Our Values</h1>
          <div class="row OurServicesRow">
            <div class="service">
              <i class="fas fa-laptop-code"></i>
              <h2>Integrity</h2>
              <p>
                Integrity creates trust forever. As an organization,
                collectively it's our valuable asset. Integrity helps us
                maintain and adhere to the highest professional standards by
                maintaining client confidentiality, put clients' interests ahead
                of the firm.
              </p>
            </div>
            <div class="service">
              <i class="fas fa-chart-line"></i>
              <h2>Do the right thing</h2>
              <p>
                What do you do if no one else is looking? Our team acts with
                complete transparency and honesty and focuses on putting
                ourselves in the shoes of others.
              </p>
            </div>
            <div class="service">
              <i class="fas fa-chart-line"></i>
              <h2>Passion</h2>
              <p>
                "Passion generates excitement for what we do and how we do it.
                With Passion at the heart of everything we do, we nurture ideas,
                inspire excellence, and find creative ways to eliminate
                obstacles for cultivating growth."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="home__footer" id="cta">
          <div>
            <Footer />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
