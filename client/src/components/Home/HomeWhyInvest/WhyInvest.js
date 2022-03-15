import React from 'react'

const whyInvest={
    "title":"Why invest in Unlisted shares or Pre-IPO shares?",
    "about":"Investing in Unlisted shares or Pre-IPO space has gained momentum in the Indian markets expanding to a new level of scale and opening lucrative opportunities as an alternative investment. Investing in the primary market fills the gap to park their funds in private investments which usually are unavailable to investors and enabling them to unlock the value of the business in the early stages. In today's dynamic and rapidly growing economy it is exciting to see ambitious entrepreneurs aspire to build the next generation Unicorn company. The Period of 3 years Pre-IPO and 3 years Post IPO is the area where one could possibly generate alpha. Howsoever, investing in earlier stages of companies requires in-depth knowledge as it carries a high risk during vicious bear cycles. So in-depth analysis, due diligence, and meaningful allocation will make your investment journey -“A successful story”."
}

const WhyInvest = () => {
    return (
        <div>
            <div class="container">
          <div class="row align-items-center justify-content-between pb-5">
            <div class="col-lg-7 arquants">
              <div class="heading-container whyinvest_content col-lg-6 col-sm-12">
                <h3>{whyInvest.title}</h3>
                {/* <img src="https://previews.123rf.com/images/ismagilov/ismagilov2003/ismagilov200300459/141692795-side-view-of-young-european-businessman-thinking-about-investment-standing-near-concrete-wall-with-f.jpg" alt="" class="img-fluid wow bounceInLeft animated" /> */}
                <p>{whyInvest.about}</p>
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
        </div>
    )
}

export default WhyInvest
