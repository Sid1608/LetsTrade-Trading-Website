import React, { useState, useEffect } from "react";
import { Card,Image } from "semantic-ui-react";
import "./Home.css";
import FloatingWhatsApp from "react-floating-whatsapp";
import Footer from "../../components/footer/Footer";
import { auth, db } from "../../firebase";
import InfoIcon from "@mui/icons-material/Info";
import "bootstrap/dist/css/bootstrap.min.css";
import ExploreIcon from "@mui/icons-material/Explore";
import { Button } from "@mui/material";

const cards = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5491/5491832.png",
    title: "Unlisted Companies",
    content:
      "Invest in high-quality enterprise and emergence of new sectors in the primary market by unlocking the value in early stages which can turn out to be a potential Unicorn company.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/893/893097.png",
    title: "Pre-Ipo Shares",
    content:
      "Invest in Business who are making a significant contribution to India emerging corporate sector by generating Alpa for investors and DRHP has been filed with Sebi.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/33/33308.png",
    title: "ESOP Shareholders",
    content:
      "Providing exit to ESOP shareholders at attractive market valuations who are willing to exit, rebalance, diversify & allocate to some alternative asset.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/609/609139.png",
    title: "Startup Investing",
    content:
      "Startups that appeal-eye popping valuations that hopefully lead to an initial public offering (IPO) with an astronomical return on investment. ",
  },
];

const whyInvest={

}
function Home() {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    db.collection("companies")
      .orderBy("Name")
      .onSnapshot((snapshot) => {
        setCompanies(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            company: doc.data(),
          }))
        );
      });
  }, []);

  const handleClick = () => {
    window.location.href = "/companies";
  };

  const SendMessage = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=919892477213&text=Hello,%20Rushi%20I%20am%20an%20Angel%20Investor/UHNI/Family%20Office%20please%20add%20me%20in%20Investment%20Community%20Club",
      "_blank"
    );
  };

  const joinGroup = () => {
    window.open("https://t.me/UnicornCapital9", "_blank");
  };
  
  return (
    <div className="home__main">
      {/* <marquee behavior="scroll" direction="left" style={{marginTop:"70px"}}>
          {companies.map(({ id, company }) => {
             
                return (
                  <img src={company.logo} style={{marginLeft:"20px"}} width="120" height="80" alt="Natural" />
                );
            })}
    </marquee> */}

      <div className="home__section1">
        <div class="container-fluid " style={{ paddingTop: "10px" }}>
          <nav class="navbar  navbar-expand-lg navbar-dark">
            {/* <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button> */}
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a
                    style={{ color: "black", fontWeight: "100px" }}
                    class="nav-link"
                    href="#ourServices"
                  >
                    Our Services
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    style={{ color: "black" }}
                    class="nav-link"
                    href="#whyInvest"
                  >
                    Why Invest?
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    style={{ color: "black" }}
                    class="nav-link"
                    href="#howWorks"
                  >
                    How It Works?
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    style={{ color: "black" }}
                    class="nav-link"
                    href="#Popular-Listed-Companies"
                  >
                    Popular Unlisted Companies
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    style={{ color: "black" }}
                    class="nav-link"
                    href="#Potential-Unicorns"
                  >
                    Potential Unicorns
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    style={{ color: "black" }}
                    class="nav-link"
                    href="#weeklyNewsletter"
                  >
                    Weekly Newsletter & Updates
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div class="row">
            <div class="col-lg-6">
              <h1 class="big-heading">
                Buy And Sell Unlisted And Pre-Ipo Shares.
              </h1>
              <Button
                type="button"
                class="btn btn-dark btn-lg download-button"
                onClick={() => {
                  window.location.href = "/companies";
                }}
              >
                <ExploreIcon />
                Explore Companies
              </Button>
              <button
                type="button"
                class="btn btn-outline-light btn-lg download-button"
                onClick={() => {
                  window.location.href = "/about";
                }}
              >
                <InfoIcon />
                About Us
              </button>
            </div>
            <div className="col-lg-6">
              <div className="footer-sticky-popup">
                <ul className="footer-live-chat">
                  <li className="whatsup-block">
                    <FloatingWhatsApp
                      // avatar={window.location.origin + '/profile_pics/rushi_bhanushali.png'}
                      avatar="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Photos.png"
                      phoneNumber="918824885175"
                      accountName="Admin"
                      statusMessage="Enter the message and our team will get back to you in 24 hours."
                      darkMode="True"
                    />
                  </li>
                </ul>
              </div>
             
            </div>
          </div>
        </div>
      </div>



      {/* Cards */}
      <div className="home__section2" id="ourServices">
        <div className="row cards">
          {/* <Card.Group itemsPerRow={4}> */}
          {cards.map((card, index) => {
            return (
              <div className="col-lg-3 col-md-5 col-sm-12 cardsss">
                <Card raised className="card-body" style={{ flex: 1 }}>
                  <Card.Content className="card_heading">
                    <Image floated="right" size="mini" src={card.icon} />

                    <Card.Header>{card.title}</Card.Header>
                  </Card.Content>
                  <Card.Content>
                    <Card.Description>{card.content}</Card.Description>
                  </Card.Content>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why Invest */}
      <section class="ptb-100 pb-0 unlisted_content" id="whyInvest">
        <div class="container">
          <div class="row align-items-center justify-content-between pb-5">
            <div class="col-lg-7 arquants">
              <div class="heading-container whyinvest_content col-lg-6 col-sm-12">
                <h3>Why invest in Unlisted shares or Pre-IPO shares?</h3>
                {/* <img src="https://previews.123rf.com/images/ismagilov/ismagilov2003/ismagilov200300459/141692795-side-view-of-young-european-businessman-thinking-about-investment-standing-near-concrete-wall-with-f.jpg" alt="" class="img-fluid wow bounceInLeft animated" /> */}
                <p>
                  Investing in Unlisted shares or Pre-IPO space has gained
                  momentum in the Indian markets expanding to a new level of
                  scale and opening lucrative opportunities as an alternative
                  investment. Investing in the primary market fills the gap to
                  park their funds in private investments which usually are
                  unavailable to investors and enabling them to unlock the value
                  of the business in the early stages. In today's dynamic and
                  rapidly growing economy it is exciting to see ambitious
                  entrepreneurs aspire to build the next generation Unicorn
                  company. The Period of 3 years Pre-IPO and 3 years Post IPO is
                  the area where one could possibly generate alpha. Howsoever,
                  investing in earlier stages of companies requires in-depth
                  knowledge as it carries a high risk during vicious bear
                  cycles. So in-depth analysis, due diligence, and meaningful
                  allocation will make your investment journey -“A successful
                  story”.
                </p>
              </div>

              {/* <img src="https://www.swastika.co.in/public/webtheme/images/share-trading/share-trad.png" alt="" class="img-fluid wow bounceInLeft animated" style={{visibility:"visible"}}/> */}
            </div>
            <div class="col-lg-5 tables">
              <div
                class="hero-content-left wow bounceInRight animated"
                style={{ visibility: "visible" }}
              >
                <h4>Some Pre-IPO VS Pre-IPO Comparison</h4>
                <table
                  id="data_stock"
                  class="table table table-data2 why_tabl "
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th style={{ backgroundColor: "black", color: "white" }}>
                        Company
                      </th>
                      <th style={{ backgroundColor: "black", color: "white" }}>
                        Pre-IPO(2020)
                      </th>
                      <th style={{ backgroundColor: "black", color: "white" }}>
                        Pre-IPO(2021)
                      </th>
                      <th style={{ backgroundColor: "black", color: "white" }}>
                        Returns
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="tr-shadow">
                      <td>
                        <img
                          src="https://static.nseindia.com/s3fs-public/2019-07/NSE_International_Exchange%404x-100.jpg"
                          alt=""
                          height="30"
                        />
                      </td>
                      <td>1000</td>
                      <td>3400</td>
                      <td>240%</td>
                    </tr>
                    <tr class="spacer"></tr>
                    <tr class="tr-shadow">
                      <td>
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/unicorn-capital-7afb9.appspot.com/o/images%2Fcsk.png?alt=media&token=6a73412a-a4b1-4828-9a80-102fc876f074"
                          alt=""
                          height="30"
                        />
                      </td>
                      <td>50</td>
                      <td>125</td>
                      <td>150%</td>
                    </tr>
                    <tr class="spacer"></tr>
                    <tr class="tr-shadow">
                      <td>
                        <img
                          src="https://www.sme.org/globalassets/sme.org/technologies/articles/2018/05---may/tata-technologies-logo_768x432.jpg"
                          alt=""
                          height="30"
                        />
                      </td>
                      <td>1000</td>
                      <td>5000</td>
                      <td>400&</td>
                    </tr>
                    <tr class="spacer"></tr>
                    <tr class="tr-shadow">
                      <td>
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/unicorn-capital-7afb9.appspot.com/o/images%2FReliance%20Retailrelianceretail.png?alt=media&token=7a0d3a2a-96da-4607-bbdb-9adcbf23cfec"
                          alt=""
                          height="30"
                        />
                      </td>
                      <td>1000</td>
                      <td>5000</td>
                      <td>400%</td>
                    </tr>
                  </tbody>
                </table>
                <h4>Pre-IPO VS Post-IPO Comparison </h4>
                <table
                  id="data_stock"
                  class="table table table-data2 why_tabl "
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th style={{ backgroundColor: "black", color: "white" }}>
                        Company
                      </th>
                      <th style={{ backgroundColor: "black", color: "white" }}>
                        Pre-IPO(2020)
                      </th>
                      <th style={{ backgroundColor: "black", color: "white" }}>
                        Pre-IPO(2021)
                      </th>
                      <th style={{ backgroundColor: "black", color: "white" }}>
                        Returns
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="tr-shadow">
                      <td>
                        <img
                          src="http://newsmeter.in/wp-content/uploads/2019/10/dmart-2.jpg"
                          alt=""
                          height="30"
                        />
                      </td>
                      <td>180</td>
                      <td>5000</td>
                      <td>2677%</td>
                    </tr>
                    <tr class="spacer"></tr>
                    <tr class="tr-shadow">
                      <td>
                        <img
                          src="https://www.bseindia.com/include/images/IPF_Logo.jpg"
                          alt=""
                          height="30"
                        />
                      </td>
                      <td>200</td>
                      <td>1300</td>
                      <td>550%</td>
                    </tr>
                    <tr class="spacer"></tr>
                    <tr class="tr-shadow">
                      <td>
                        <img
                          src="https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2020/11/02/132526-hdfc-lfie-1.jpg?itok=oaDn5A4G"
                          alt=""
                          height="30"
                        />
                      </td>
                      <td>240</td>
                      <td>700</td>
                      <td>192%</td>
                    </tr>
                    <tr class="spacer"></tr>
                    <tr class="tr-shadow">
                      <td>
                        <img
                          src="https://images.livemint.com/img/2021/06/10/1600x900/affle_1583129250438_1623302899983.jpg"
                          alt=""
                          height="30"
                        />
                      </td>
                      <td>600</td>
                      <td>5000</td>
                      <td>733%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="howWorks">
        <div class="container OurServices">
          <h1>How does it work? </h1>
          <div class="row OurServicesRow">
            <div class="service icon-box">
              <Image
                floated="right"
                size="mini"
                src="https://cdn-icons-png.flaticon.com/512/66/66936.png"
              />
              <h2>STEP 1- Confirmation</h2>
              <p>Contact our team and confirm the price and quantity.</p>
            </div>
            <div class="service icon-box">
              <Image
                floated="right"
                size="mini"
                src="https://cdn-icons-png.flaticon.com/512/887/887997.png"
              />
              <h2>Step 2- Documentation</h2>
              <p>Required Documents needed to submit for KYC Verification.</p>
            </div>
            <div class="service icon-box">
              <Image
                floated="right"
                size="mini"
                src="https://cdn-icons-png.flaticon.com/512/2438/2438078.png"
              />
              <h2>Step 3-Demat Securities</h2>
              <p>
                Confirm trade by transferring funds and receive securities in
                your Demat within 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="home__section3">  */}
      {/* <div className="home__corousel">
          <section className="colored-section" id="testimonials">
            <div>
              <Carousel>
                <Carousel.Item interval={500}>
                <div class="row  section4_cards">
            {companies.map(({ id, company }) => {
              if (
                company.Name == "Anand Rathi" ||
                company.Name == "Chennai Super Kings" ||
                company.Name == "Paytm" ||
                company.Name == "Fino Paytech Limited"
              
              ) {
                return (
                  <div class=" col-lg-3 col-md-5 col-sm-12  company_card">
                   
                      <CardMedia
                        component="img"
                        height="140"
                        style={{ objectFit: "contain" }}
                        image={company.logo}
                        alt="green iguana"
                      />
                     
                  </div>
                );
              }
            })}
          </div>
                  
                </Carousel.Item>
                <Carousel.Item interval={500}>
                <div class="row  section4_cards">
            {companies.map(({ id, company }) => {
              if (
                company.Name == "Reliance Retail"||
                company.Name == "Studds Accessories Limited"||
                company.Name == "HDB Financial Services"||
                company.Name == "HDFC Securities"
              
              ) {
                return (
                  <div class=" col-lg-3 col-md-5 col-sm-12  company_card">
                  
                      <CardMedia
                        component="img"
                        height="140"
                        style={{ objectFit: "contain" }}
                        image={company.logo}
                        alt="green iguana"
                      />
                      
                  </div>
                );
              }
            })}
          </div>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                <div class="row  section4_cards">
            {companies.map(({ id, company }) => {
              if (
                company.Name == "NSE Ltd."||
                company.Name == "STUDDS"
              
              ) {
                return (
                  <div class=" col-lg-3 col-md-5 col-sm-12  company_card">
                    
                      <CardMedia
                        component="img"
                        height="140"
                        style={{ objectFit: "contain" }}
                        image={company.logo}
                        alt="green iguana"
                      />
                      
                  </div>
                );
              }
            })}
          </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </section>
        </div>  */}

      <div className="home__section4" id="Popular-Listed-Companies">
        <h1 className="section4_title OurSection4">
          {/* <strong> */}
          <h1>Popular Unlisted Companies</h1>
          {/* </strong> */}
        </h1>
        {/* <marquee behavior="none" direction="left"> */}
        {/* <img
                className="pop"
                  src="../../../public/popular_listed_companies/Paytm-Logo.wine.png"
                  
                   
                  alt="phonepay"
                /> */}
        {companies.map(({ id, company }) => {
          if (
            company.Name == "Chennai Super Kings" ||
            company.Name == "Paytm" ||
            company.Name == "Reliance Retail" ||
            company.Name == "Studds Accessories Limited" ||
            company.Name == "HDFC Securities" ||
            company.Name == "NSE Ltd."
          ) {
            return <img className="pop" src={company.logo} alt="Natural" />;
          }
        })}
        {/* </marquee> */}
        {/* <div className="home__corousel">
          <section className="colored-section" id="testimonials">
            <div>
              <Carousel>
                <Carousel.Item interval={1500}>
                <div class="row  section4_cards">
            {companies.map(({ id, company }) => {
              if (
                company.Name == "Anand Rathi" ||
                company.Name == "Chennai Super Kings" ||
                company.Name == "Paytm" ||
                company.Name == "Fino Paytech Limited"
              
              ) {
                return (
                  <div class=" col-lg-3 col-md-5 col-sm-12  company_card">
                   
                      <CardMedia
                        component="img"
                        height="140"
                        style={{ objectFit: "contain" }}
                        image={company.logo}
                        alt="green iguana"
                      />
                     
                  </div>
                );
              }
            })}
          </div>
                  
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                <div class="row  section4_cards">
            {companies.map(({ id, company }) => {
              if (
                company.Name == "Reliance Retail"||
                company.Name == "Studds Accessories Limited"||
                company.Name == "HDB Financial Services"||
                company.Name == "HDFC Securities"
              
              ) {
                return (
                  <div class=" col-lg-3 col-md-5 col-sm-12  company_card">
                  
                      <CardMedia
                        component="img"
                        height="140"
                        style={{ objectFit: "contain" }}
                        image={company.logo}
                        alt="green iguana"
                      />
                      
                  </div>
                );
              }
            })}
          </div>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                <div class="row  section4_cards">
            {companies.map(({ id, company }) => {
              if (
                company.Name == "NSE Ltd."||
                company.Name == "STUDDS"
              
              ) {
                return (
                  <div class=" col-lg-3 col-md-5 col-sm-12  company_card">
                    
                      <CardMedia
                        component="img"
                        height="140"
                        style={{ objectFit: "contain" }}
                        image={company.logo}
                        alt="green iguana"
                      />
                      
                  </div>
                );
              }
            })}
          </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </section>
        </div>  */}
        {/* <div class="row  section4_cards">
            {companies.map(({ id, company }) => {
              if (
                company.Name == "Anand Rathi" ||
                company.Name == "Chennai Super Kings" ||
                company.Name == "Paytm" ||
                company.Name == "Fino Paytech Limited"||
                company.Name == "Reliance Retail"||
                company.Name == "Studds Accessories Limited"||
                company.Name == "HDB Financial Services"||
                company.Name == "HDFC Securities"||
                company.Name == "NSE Ltd."||
                company.Name == "STUDDS"
              
              ) {
                return (
                  <div class=" col-lg-3 col-md-5 col-sm-12  company_card">
                    <Card sx={{ maxWidth: 345, minWidth:100}} className="card">
                      <CardMedia
                        component="img"
                        height="140"
                        style={{ objectFit: "contain" }}
                        image={company.logo}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {company.Name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {company.category}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <p>
                            <strong>Buy Price</strong>:{company.BuyPrice}{" "}
                            <strong>Sell Price</strong>: {company.SellPrice}
                          </p>
                        </Typography>
                      </CardContent>

                      <CardActions style={{ alignItems: "center" }}>
                        <a
                          href="https://api.whatsapp.com/send?phone=918824885175&text=Hi%20we%20need%20help%20regarding%20something"
                          className="btn btn-outline-success"
                          target="_blank"
                        >
                          Trade
                        </a>
                        <a
                          href={`/companies/${id}`}
                          className="btn btn-outline-success"
                          style={{ marginRight: "15px" }}
                        >
                          Explore
                        </a>
                      </CardActions>
                    </Card>
                  </div>
                );
              }
            })}
          </div> */}
        {/* <div className="section4__explorebutton" >
            <a href={`/companies`} className="btn btn-outline-success">
              <Image
                floated="right"
                size="mini"
                src="https://cdn-icons.flaticon.com/png/512/2015/premium/2015220.png?token=exp=1634273714~hmac=3e745596429279cfc451e69173b48c92"
              />
              Explore More Companies
            </a>
          </div> */}
      </div>
      <section id="Potential-Unicorns">
        <div className="home__section5 OurSection5">
          <h1 className="section4_title">
            <strong>
              <h1>Potential Unicorns</h1>
            </strong>
          </h1>
          {/* <marquee behavior="none" direction="left"> */}
          {companies.map(({ id, company }) => {
            if (
              company.Name == "Flipkart" ||
              company.Name == "PhonePe" ||
              company.Name == "Ola" ||
              company.Name == "Byjus" ||
              company.Name == "Grofers" ||
              company.Name == "Lenskart" ||
              company.Name == "Delhivery"
            ) {
              return <img className="pot" src={company.logo} alt="Natural" />;
            }
          })}
          {/* </marquee> */}
          {/* <div class="row">
            {companies.map(({ id, company }) => {
              if (
                company.Name == "Flipkart" ||
                company.Name == "PhonePe" ||
                company.Name == "Ola" ||
                company.Name == "Meesho"||
                company.Name == "Byjus"||
                company.Name == "Grofers"||
                company.Name == "Lenskart"||
                company.Name == "Delhivery"
              ) {
                return (
                  <div class=" col-lg-3 col-md-5 col-sm-12  company_card">
                    <Card sx={{ maxWidth: 345 }} className="card">
                      <CardMedia
                        component="img"
                        height="140"
                        style={{ objectFit: "contain" }}
                        image={company.logo}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {company.Name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {company.category}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <p>
                            <strong>Buy Price</strong>:{company.BuyPrice}{" "}
                            <strong>Sell Price</strong>: {company.SellPrice}
                          </p>
                        </Typography>
                      </CardContent>

                      <CardActions style={{ alignItems: "center" }}>
                        <a
                          href="https://api.whatsapp.com/send?phone=918824885175&text=Hi%20we%20need%20help%20regarding%20something"
                          className="btn btn-outline-success"
                          target="_blank"
                        >
                          Trade
                        </a>
                        <a
                          href={`/companies/${id}`}
                          className="btn btn-outline-success"
                          style={{ marginRight: "15px" }}
                        >
                          Explore
                        </a>
                      </CardActions>
                    </Card>
                  </div>
                );
              }
            })}
          </div> */}
          {/* <div className="section4__explorebutton" >
            <a href={`/companies`} className="btn btn-outline-success">
              <Image
                floated="right"
                size="mini"
                src="https://cdn-icons.flaticon.com/png/512/2015/premium/2015220.png?token=exp=1634273714~hmac=3e745596429279cfc451e69173b48c92"
              />
              Explore More Companies
            </a>
          </div> */}
        </div>
      </section>
      <section id="weeklyNewsletter">
        <div class="container OurServices weeklyNewsletter">
          <h1>Weekly Newsletter & Updates </h1>
          <div class="row OurServicesRow">
            <div class="service icon-box" onClick={joinGroup}>
              <Image
                floated="right"
                size="mini"
                src="https://cdn-icons-png.flaticon.com/512/66/66936.png"
              />
              <h2>Unlisted/Pre-IPO Club</h2>
              <p>
                Join the Telegram Channel for Weekly Newsletter And Updates
                regarding Unlisted & Pre-IPO shares
              </p>
            </div>
            <div class="service icon-box" onClick={SendMessage}>
              <Image
                floated="right"
                size="mini"
                src="https://cdn-icons-png.flaticon.com/512/887/887997.png"
              />
              <h2>Investment Community Club</h2>
              <p>
                We are Creating an Investment Community Club for Angel
                Investors/UHNI/Family Office.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="home__footer" id="cta">
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
