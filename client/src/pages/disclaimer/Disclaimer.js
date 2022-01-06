import {React,useEffect} from 'react'
import Footer from  "../../components/footer/Footer";
import {Image } from "semantic-ui-react";
import "./Disclaimer.css"
function Disclaimer() {
    useEffect(() => {
        window.scrollTo(0, 0);
       
      }, []);
    return (
        <div>
        <section id="heading" >
            <div  className="disclaimer_heading container" >
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title">
                            <h2 > <Image style={{marginLeft:"550px"}} size="mini" src="https://cdn-icons-png.flaticon.com/512/1045/1045385.png"/>Disclaimer</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container disclaimer_body">
                <div className="row d-flex align-items-center table-responsive" id="full-featured-data">
                    <p>
                        <ol style={{ listStyleType: "number" }}>
                                        <li> Let's Trade is NOT a stock exchange or a trading platform recognized by the Securities Exchange Board of India (SEBI) under the Securities Contract (Regulation) Act, 1956. Iris Capital is a platform for creating liquidity to buy or sell unlisted shares of Pre-IPO companies and Startups in India.</li>
                                        <li> We have taken all Information from Public platforms and company annual filings.</li>
                                        <li> We act as a facilitator and not as an advisor and do not give any recommendations to buy any stock from our website. Before investing in Unlisted or Pre-IPO shares buyers and seller should consult their financial/legal advisors before investing in unlisted securities.</li>
                                        <li> Users acting as buyers or sellers should understand and confirm that they fully understand the features and risks of buying unlisted shares from our platform.</li>
                                        <li>User as a buyer or seller also confirms that you are neither being influenced nor been given any assurance of fixed returns arising out of investments in unlisted or pre-IPO shares by employees, associates, partners, representatives, or relationship managers of Iris Capital.</li>
                                        <li>We would only be sharing newsletters and updates from the public domain we or any of our team members are not to be held liable for that Broadcast group.</li>
                                        <li> Investment Community Club is an initiative to create awareness and share ideas for which we or any of our team members are not to be held liable for any loss.</li>
                                        <li> You/User as a buyer or seller also confirm that Iris Capital is not responsible for any loss arising out of investment In unlisted or pre-IPO shares.</li>
                                        <li>You/User as a buyer or seller understand that investing in unlisted/pre-IPO shares is not suitable for all the investors. An investment in an unlisted company in an unlisted company’s securities is highly speculative and involves a high degree of risk and should only be considered a long-term investment and only after consulting your financial advisor.</li>
                                        <li> You/User as a buyer or seller understand that after buying unlisted/pre-IPO shares, you may withstand the risk of a total loss of investment as unlisted/pre-IPO company’s shares are also highly illiquid and there is no guarantee that a market will develop for such securities.</li>
                                        <li> You/User as a buyer or seller understand that after buying unlisted/pre-IPO shares, we are not responsible that the company may get listed on the secondary market.</li>
                                        <li> You/User as a buyer or seller understand that investing unlisted/pre-IPO shares, is appropriate for only those investors who can tolerate a high degree of risk and do not require a liquid investment.</li>
                                        <li> You/User as a buyer or seller understand that investing unlisted/pre-IPO shares, also carries its own specific risks and you should complete your own independent due diligence regarding the investment, including obtaining additional information about the company, opinions, financial projections, and legal or other investment advice.</li>
                                        <li>. You/User as a buyer or seller also declare and confirm that the payment for buying of unlisted/pre-IPO shares is coming from the bank of the person to whom Iris Capital is transferring shares. You as a buyer or seller declare to face any legal consequences arising out of this for non – compliance. Iris Capital partnership firm always ensures that they DO NOT Transfer shares in the third party Account.</li>
                                        <li> You/User as a buyer or seller declare and confirm to complying all laws and regulations set up by SEBI, RBI, FEMA Act, Companies act 2013, or Indian relevant acts or relevant acts or laws with regards to buying of unlisted shares in India. And in the event of a violation of any laws, will be held responsible for any consequences.</li>
                                        <li> Iris Capital declares that the research reports published in the platform of Iris Capital are purely for the purpose of educating the client for the prospect of understanding the business model and should not by any means be considered as investment advice. Iris Capital does not guarantee the correctness or accuracy of the information provided on our website Iris Capital. The buyer/seller should do the proper due diligence before buying/selling the unlisted shares from the Iris Capital.</li>
                       </ol>
                    </p>   
                </div>
            </div>
        </section>
        <Footer/>
        </div>
    )
}

export default Disclaimer
