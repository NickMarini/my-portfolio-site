import React, { useState, JSX } from 'react';

const Resume: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState('workExperience');

  const renderTextBox = (title: string, content: JSX.Element) => (
    <div className="text-box">
      <h4 className="heading4">{title}</h4>
      {content}
    </div>
  );

  const renderSection = () => {
    switch (selectedSection) {
      case 'skills':
        return (
          <section className="flex-container">
            {renderTextBox('Programming Languages & Frameworks', (
              <ul className="list-disc pl-5">
                <li>Python (FastAPI, PySpark, Streamlit, Dash, Plotly)</li>
                <li>Scala</li>
                <li>JavaScript</li>
                <li>SQL (PostgreSQL, MSSQL, Redshift, Oracle)</li>
                <li>NoSQL (MongoDB)</li>
                <li>PySpark</li>
                <li>Apache Spark</li>
                <li>Structured Streaming</li>
                <li>MLFlow</li>
                <li>Delta Lake</li>
              </ul>
            ))}
            {renderTextBox('Data Engineering & ETL', (
              <ul className="list-disc pl-5">
                <li>ETL Pipelines and Triggers</li>
                <li>Azure Data Factory</li>
                <li>Logic Apps</li>
                <li>Function Apps</li>
                <li>Hadoop</li>
                <li>Apache Spark</li>
                <li>Databricks</li>
                <li>Kafka</li>
                <li>Events Hub</li>
                <li>Structured Streaming</li>
              </ul>
            ))}
            {renderTextBox('Cloud Platforms & Services', (
              <ul className="list-disc pl-5">
                <li>AWS</li>
                <li>Azure</li>
                <li>GCP</li>
                <li>Databricks</li>
                <li>Snowflake</li>
                <li>Palantir</li>
                <li>Azure Data Factory</li>
                <li>APIM</li>
                <li>Events Hub</li>
                <li>Logic Apps</li>
                <li>Function Apps</li>
              </ul>
            ))}
            {renderTextBox('Data Visualization & BI Tools', (
              <ul className="list-disc pl-5">
                <li>Power BI</li>
                <li>Tableau</li>
                <li>QlikSense</li>
                <li>Grafana</li>
                <li>Streamlit</li>
                <li>Dash</li>
                <li>Plotly</li>
              </ul>
            ))}
            {renderTextBox('DevOps & CI/CD', (
              <ul className="list-disc pl-5">
                <li>Azure DevOps</li>
                <li>GitHub Actions</li>
                <li>Git</li>
                <li>Jira</li>
                <li>Confluence</li>
                <li>MLFlow</li>
                <li>FastAPI</li>
              </ul>
            ))}
            {renderTextBox('Data Streaming & Real-Time Processing', (
              <ul className="list-disc pl-5">
                <li>Kafka</li>
                <li>Structured Streaming</li>
                <li>Apache Flink</li>
              </ul>
            ))}
            {renderTextBox('Data Architecture & Governance', (
              <ul className="list-disc pl-5">
                <li>Data Architecture</li>
                <li>Delta Lake Design</li>
                <li>Data Governance</li>
                <li>Cost Control and Optimizations</li>
                <li>Cross-Functional Collaboration</li>
              </ul>
            ))}
            {renderTextBox('Business Intelligence & Reporting', (
              <ul className="list-disc pl-5">
                <li>Power BI</li>
                <li>Tableau</li>
                <li>QlikSense</li>
                <li>Grafana</li>
              </ul>
            ))}
            {renderTextBox('Advanced Skills & Specializations', (
              <ul className="list-disc pl-5">
                <li>MLOps practices</li>
                <li>MLFlow</li>
                <li>Cost Control and Efficiency</li>
                <li>Cross-Functional Team Leadership</li>
              </ul>
            ))}
          </section>
        );
      case 'workExperience':
        return (
          <section>
            {/* IWB Position */}
            <div className="w-full mb-12">
              <h3 className="text-2xl font-bold text-primary mb-2">Senior Data Specialist – IWB</h3>
              <p className="text-sm text-gray-600 mb-2">Oct 2023 – Current</p>
              <p className="mb-6">Providing strategic leadership on data management and ML operations across the trading division, I am responsible for the end to end collection of relevant information and its consumption for analysis, reporting, and operations. Head of a team of 5 engineers, 3 BI Developers, 4 data scientists, and 10 analysts my role covers Architectural Decision Making, Data Governance, ML Engineering and MLOps, Cost Control and Optimisations, along with Cross-Functional Collaboration with different departments.</p>
              
              <div className="flex flex-wrap gap-4">
                {renderTextBox('Tech Stack', (
                  <ul className="list-disc pl-5">
                    <li>Apache Spark, Structured Streaming, Hadoop</li>
                    <li>Azure (Data Factory, APIM, Events Hub, Logic Apps, Function Apps)</li>
                    <li>Python (FastAPI, PySpark, Streamlit, Dash, Plotly)</li>
                    <li>Databases (Postgres, MSSQL)</li>
                    <li>Kafka, Databricks, Delta Lake</li>
                    <li>PowerBI, Grafana</li>
                    <li>MLFlow</li>
                  </ul>
                ))}
                {renderTextBox('Project - Data Warehousing and Governance', (
                  <p>The trading department relies on multiple sources of information in order to drive decisions and increase profitability of trading departments. By implementing near real time data streaming and processing, opportunities for trading were made more transparent and resulted in net gains for the division and increasing trading profitability, in some cases in the order of millions of Euros.</p>
                ))}
                {renderTextBox('Project - System Migration', (
                  <p>Replacement of a legacy system with new software (external, and internal). The goal of the project was to move away from a centralised legacy system to more effective ETRM's which were procured to handle business critical processes. Supporting these systems required multiple data automation processes to be replaced by new automations which relied on the data warehousing solution and were produced in modern microservices architecture allowing for a modernised approach to system management. The result of the project allowed for hundreds of hours of manual work to be automated, saving time, and team resources.</p>
                ))}
                {renderTextBox('Project - ML/Algorithmic Operations', (
                  <p>Forecasting data and implementing smart trading algorithms allows the Trading department to be more flexible and automated in its approach. ML Models have been implemented which more accurately forecast power consumption and production from renewable resources (solar, hydro, and wind) resulting in better asset optimisation and a reduction in imbalance payments through the year, resulting in a savings in the hundreds of thousands of Euros per annum. Algorithmic trading was standardised and utilising the stream of data through the warehousing solution, was implemented at scale with the result of base revenue increasing by a few hundred thousand euro per annum, while the cost of these solutions was negligible. The algorithmic and model operations resulted in a data warehousing solution that bought positive revenue into the company, instead of being a cost centre.</p>
                ))}
              </div>
            </div>

            {/* Credit Suisse Position */}
            <div className="w-full mb-12">
              <h3 className="text-2xl font-bold text-primary mb-2">Business Intelligence Solutions Engineer (AVP) – Credit Suisse</h3>
              <p className="text-sm text-gray-600 mb-2">Jan 2021 – September 2023</p>
              <p className="mb-6">Leading business intelligence development across key initiatives within the Swiss Banking Risk Reporting division. I was responsible for harmonising data from multiple sources into the strategic data platform (Palantir) and automating reporting through various tools, such as QlikSense, Tableau, and PowerBI, powered by the data held in our data mart.</p>
              
              <div className="flex flex-wrap gap-4">
                {renderTextBox('Tech Stack', (
                  <ul className="list-disc pl-5">
                    <li>Apache Ecosystem (Spark, Structured Streaming, Hadoop)</li>
                    <li>Azure (Data Factory, APIM, Events Hub, Logic Apps, Function Apps)</li>
                    <li>Python, Java</li>
                    <li>Databases (Postgres, MSSQL)</li>
                    <li>Kafka, Databricks, Delta Lake</li>
                    <li>BI Tools (PowerBI, Grafana, QlikSense, Tableau)</li>
                    <li>Palantir, Snowflake</li>
                    <li>MLFlow</li>
                  </ul>
                ))}
              </div>
            </div>

            {/* TVSquared Position */}
            <div className="w-full mb-12">
              <h3 className="text-2xl font-bold text-primary mb-2">Data Engineer and Analyst – TVSquared</h3>
              <p className="text-sm text-gray-600 mb-2">Aug 2017 – Dec 2022</p>
              <p className="mb-6">SaaS company with Client Services Team situated across UK, USA, and Germany. Supporting approx. 1000 clients across 70 countries.</p>
              <p className="mb-6">Collaborated with an analyst team to provide comprehensive support to global clients utilizing our SaaS reporting tools. My role involved extensive use of technical skills for data assessment and analysis, along with exceptional client-facing abilities.</p>
              
              <div className="flex flex-wrap gap-4">
                {renderTextBox('Tech Stack', (
                  <ul className="list-disc pl-5">
                    <li>AWS Infrastructure</li>
                    <li>Python Backend (PySpark)</li>
                    <li>React Frontend</li>
                    <li>Databases (PostgreSQL, MongoDB)</li>
                    <li>Custom In-house Applications</li>
                  </ul>
                ))}
              </div>
            </div>

            {/* Computer Facilities Positions */}
            <div className="w-full mb-12">
              <h3 className="text-2xl font-bold text-primary mb-2">Business Analyst and Project Manager – Computer Facilities (Pty) Ltd</h3>
              <p className="text-sm text-gray-600 mb-2">Jan 2009 – Mar 2017</p>
            </div>

            <div className="w-full mb-12">
              <h3 className="text-2xl font-bold text-primary mb-2">Campaign Manager – Computer Facilities (Pty) Ltd</h3>
              <p className="text-sm text-gray-600 mb-2">Jan 2009 – Jan 2011</p>
            </div>
          </section>
        );
      case 'education':
        return (
          <section className="flex-container">
            {renderTextBox('MSc Data Analytics - University of Portsmouth', (
              <div>
                <p>
                  Covering a wide range of technical and non technical concepts including ML and Deep Learning Models, Data Infrastructure for Big Data, Data Team Management.
                </p>
                <p><strong>Thesis:</strong> Tested the effected of pre-clustering time series based on similarity of profile to create custom models for different profiles based on volatility and seasonality. The test was successful, pre-clustering positively effects model results.</p>
              </div>
            ))}
            {renderTextBox('BSc (Hons) Information Systems – University of Portsmouth', (
              <div>
                <p>
                  Advanced Systems Development, Information Systems Management, Project Management (SCRUM, AGILE, RAD), and Advanced Database Concepts.
                </p>
                <p><strong>Thesis:</strong> Designed and built a SaaS system which records and tracks stock price on a 5-minute interval, the system would record social media sentiment at the time towards the company and look for a change in sentiment which would pre-empt a sudden change in stock price. For example, Facebook during the Cambridge Analytica news scandal in 2017.</p>
              </div>
            ))}
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="title text-4xl font-bold text-primary mb-4">Senior Data Specialist</h2>
      <section className="section mb-8">
        <p>
          As a data architect and engineer with 10 years of experience, I have developed data-driven reporting solutions across multiple business areas and industries, from marketing to finance. I consider myself tool agnostic as I have experience across various technology stacks, Microsoft's Azure (ADF, Events Hub, APIM, Azure Apps, SQL Server, and Power BI amongst others), and Amazon Web Services (AWS) stack (Redshift, Glue, and Quicksight etc.), along with Databricks, Snowflake, and Palantir, to name a few.
        </p>
      </section>
      <nav className="breadcrumbs flex justify-around mb-8">
        <button className={`px-4 py-2 ${selectedSection === 'workExperience' ? 'font-bold underline' : ''}`} onClick={() => setSelectedSection('workExperience')}>Work Experience</button>
        <button className={`px-4 py-2 ${selectedSection === 'education' ? 'font-bold underline' : ''}`} onClick={() => setSelectedSection('education')}>Education</button>
        <button className={`px-4 py-2 ${selectedSection === 'skills' ? 'font-bold underline' : ''}`} onClick={() => setSelectedSection('skills')}>Skills</button>
      </nav>
      {renderSection()}
    </div>
  );
};

export default Resume;
