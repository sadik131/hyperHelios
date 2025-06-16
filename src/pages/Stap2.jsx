import React, { useState } from 'react'
import StepIndicator from '../components/StapIndicator'
import Tips from '../components/tips';
import Selector from '../components/RoleSelector';
import {  sizeRanges } from '../data';
import { Link } from 'react-router-dom';

function Stap2() {

    return (
        <div className="container">
            <StepIndicator activeStep={0} />
            <div className='stap'>stap 2</div>
            <h2 className="step-label">
               How <span>many hours per week</span> do you think you'll need?
            </h2>

            <Selector roles={sizeRanges} value={"I Don’t Know Yet"}/>

            <Link to={"/stap4"} className="continue-btn">Continue</Link>
            <Tips>{
                "Starter Tip: Select one for now, but you can hire as many roles as you'd like, fully included in your membership"
            }</Tips>
        </div>
    )
}

export default Stap2