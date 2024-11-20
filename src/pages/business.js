import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./styles.css"; // Link CSS

// Import images for the service cards
import card1Img from "../components/images/boy1.jpg";
import card2Img from "../components/images/boy2.jpg";
import card3Img from "../components/images/boy3.jpg";
import card4Img from "../components/images/boy1.jpg";
import card5Img from "../components/images/boy2.jpg";
import card6Img from "../components/images/boy3.jpg";

const Business = () => {
  return (
    <div className="styles-container">
      {/* Services Section */}
      <h2 className="styles-title">      <h2 className="page-title">Data Analytics & Business Intelligence</h2>
      </h2>
      <div className="styles-grid">
        {/* Styles Cards */}
       
        <a href="#" className="styles-card">
          <img src={card2Img} alt="Data Cleaning & Preparation" className="styles-image" />
          <h3 className="card-title"></h3>
          <p className="card-description">
          <b>Data & Business Intelligence;</b> Data is collected from diverse sources like databases, APIs, and customer interactions.
            Integration combines these into a unified system, ensuring all relevant data is accessible
            for analysis, eliminating silos, and creating a single source of truth for informed decisions.
          </p>
        </a>
        
        <a href="#" className="styles-card">
          <img src={card2Img} alt="Data Cleaning & Preparation" className="styles-image" />
          <h3 className="card-title"></h3>
          <p className="card-description">
          <b>Data Cleaning & Preparation;</b> Raw data often contains errors or inconsistencies. Cleaning ensures accuracy by removing
            duplicates and handling missing values. Prepared data is transformed and categorized to make
            it compatible with analytical tools, ensuring reliable insights.
          </p>
        </a>

        <a href="#" className="styles-card">
          <img src={card3Img} alt="Descriptive Analytics" className="styles-image" />
          <h3 className="card-title"></h3>
          <p className="card-description">
            <b>Descriptive Analytics;</b> Descriptive analytics analyzes historical data to identify trends and patterns. It answers
            "What happened?" through reports, summaries, and dashboards, providing a clear understanding
            of past performance, such as sales trends or customer behavior.
          </p>
        </a>
        <a href="#" className="styles-card">
          <img src={card4Img} alt="Predictive Analytics" className="styles-image" />
          <h3 className="card-title"></h3>
          <p className="card-description">
            <b>Predictive Analytics; </b> IISL uses historical data and machine learning models to forecast future
            outcomes, like sales projections or customer behavior. It helps businesses anticipate
            opportunities and risks, enabling proactive decision-making.
          </p>
        </a>
        <a href="#" className="styles-card">
          <img src={card5Img} alt="Visualization & Reporting" className="styles-image" />
          <h3 className="card-title"></h3>
          <p className="card-description">
            <b>Visualization & Reporting;</b>Visual tools like charts and dashboards simplify complex data, making insights easy to
            understand. Tools like Tableau and Power BI highlight KPIs and trends in real-time,
            supporting quick and informed decisions by stakeholders.
          </p>
        </a>
        <a href="#" className="styles-card">
          <img src={card6Img} alt="Strategic Decision-Making" className="styles-image" />
          <h3 className="card-title"></h3>
          <p className="card-description">
            <b>Strategic Decision-Making;</b>Insights from analytics enable businesses to optimize processes, identify opportunities,
            and mitigate risks. Data-driven strategies improve operational efficiency, enhance customer
            satisfaction, and drive long-term growth.
          </p>
        </a>
      </div>

      {/* Back to Services Button */}
      <div className="back-button-container">
        <Link to="/services" className="back-button">
          Back to Services
        </Link>
      </div>

           {/* Business Partners Section */}
      <div className="partners-section">
        <h2 className="section-title">Our Trusted Partners</h2>
        <div className="partners-logos">
          {/* Partner logos or links */}
        </div>
      </div>
    </div>
  );
};

export default Business;
