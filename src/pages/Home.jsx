import React, { useState } from 'react'
import StepIndicator from '../components/StapIndicator'
import Tabs from '../components/Tabs';
import Tips from '../components/tips';
import { Link } from 'react-router-dom';
import Selector from '../components/RoleSelector';
import { creative, roles, Tech } from '../data';

function Home() {

    const [activeTab, setActiveTab] = useState('Marketing');


    return (
        <div className="container">
            <StepIndicator activeStep={0} />
            <div className='stap'>stap 1</div>
            <h2 className="step-label">
                What <span>Role</span> Are You Hiring For?
            </h2>
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {activeTab === 'Marketing' && <Selector value={"Brand Marketer"} roles={roles} />}
            {activeTab === 'Creative' && <Selector value={"UI/UX Designer"} roles={creative} />}
            {activeTab === 'Tech And Analytics' && <Selector value={"Shopify Developer"} roles={Tech} />}

            <Link to={"/stap2"} className="continue-btn">Continue</Link>
            <Tips>{
                "Starter Tip: Select one for now, but you can hire as many roles as you'd like, fully included in your membership"
            }</Tips>
        </div>
    )
}

export default Home