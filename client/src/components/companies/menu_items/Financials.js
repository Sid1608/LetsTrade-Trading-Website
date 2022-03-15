import React, { Component } from 'react'
import { Header, Image, Segment } from 'semantic-ui-react'
import './css/about.css'
import './FinancialSnapshot'
import FinancialSnapshot from './FinancialSnapshot'
import axios from "axios"
// import "./node_modules/bootstrap/dist/css/bootstrap.min.css"
function Financials({company}) {
    
        // const { company } = this.props
        return (
            <div id="company-about-container" style={{width:"955px"}}>
                <Segment>
                    <h1>Financial Overview</h1>
                    <FinancialSnapshot company={company}/>
                </Segment>
            </div>
        );
    
}

export default Financials
