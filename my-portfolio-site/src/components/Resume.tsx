import React, { useState } from 'react';
import { JSX } from 'react/jsx-runtime';

const Resume: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState('workExperience');
  const [collapsedSections, setCollapsedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setCollapsedSections(prevState =>
      prevState.includes(section)
        ? prevState.filter(s => s !== section)
        : [...prevState, section]
    );
  };

  const renderCollapsibleSection = (title: string, content: JSX.Element) => (
    <div className="collapsible-section">
      <h4 className="heading4" onClick={() => toggleSection(title)}>{title}</h4>
      {!collapsedSections.includes(title) && <div className="collapsible-content">{content}</div>}
    </div>
  );

  const renderSection = () => {
    switch (selectedSection) {
      case 'skills':
        return (
          <section className="section skills-section">
            {renderCollapsibleSection('Programming Languages & Frameworks', (
              <ul className="list">
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
            {renderCollapsibleSection('Data Engineering & ETL', (
              <ul className="list">
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
            {renderCollapsibleSection('Cloud Platforms & Services', (
              <ul className="list">
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
            {renderCollapsibleSection('Data Visualization & BI Tools', (
              <ul className="list">
                <li>Power BI</li>
                <li>Tableau</li>
                <li>QlikSense</li>
                <li>Grafana</li>
                <li>Streamlit</li>
                <li>Dash</li>
                <li>Plotly</li>
              </ul>
            ))}
            {renderCollapsibleSection('DevOps & CI/CD', (
              <ul className="list">
                <li>Azure DevOps</li>
                <li>GitHub Actions</li>
                <li>Git</li>
                <li>Jira</li>
                <li>Confluence</li>
                <li>MLFlow</li>
                <li>FastAPI</li>
              </ul>
            ))}
            {renderCollapsibleSection('Data Streaming & Real-Time Processing', (
              <ul className="list">
                <li>Kafka</li>
                <li>Structured Streaming</li>
                <li>Apache Flink</li>
              </ul>
            ))}
            {renderCollapsibleSection('Data Architecture & Governance', (
              <ul className="list">
                <li>Data Architecture</li>
                <li>Delta Lake Design</li>
                <li>Data Governance</li>
                <li>Cost Control and Optimizations</li>
                <li>Cross-Functional Collaboration</li>
              </ul>
            ))}
            {renderCollapsibleSection('Business Intelligence & Reporting', (
              <ul className="list">
                <li>Power BI</li>
                <li>Tableau</li>
                <li>QlikSense</li>
                <li>Grafana</li>
              </ul>
            ))}
            {renderCollapsibleSection('Advanced Skills & Specializations', (
              <ul className="list">
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
          <section className="section">
            <div className="job">
              <h4 className="heading4">Senior Data Specialist – IWB</h4>
              <p>Oct 2023 – Current</p>
              <p>
                Providing strategic leadership on data management and ML operations across the trading division, I am responsible for the end to end collection of relevant information and its consumption for analysis, reporting, and operations. Head of a team of 5 engineers, 3 BI Developers, 4 data scientists, and 10 analysts my role covers Architectural Decision Making, Data Governance, ML Engineering and MLOps, Cost Control and Optimisations, along with Cross-Functional Collaboration with different departments:
              </p>
              <p><strong>Tech Stack:</strong> Apache Spark, Structured Streaming, Hadoop, Azure Data Factory, APIM, Events Hub, Logic Apps, Function Apps, Pyspark, JavaScript, Postgres, MSSQL, Kafka, Databricks, PowerBI, Grafana, Delta Lake, Python (FastAPI, PySpark, Streamlit, Dash, Plotly), MLFlow</p>
              <p><strong>Key Projects:</strong></p>
              <ul className="list">
                <li>
                  <strong>Data Warehousing and Governance:</strong> The trading department relies on multiple sources of information in order to drive decisions and increase profitability of trading departments. By implementing near real time data streaming and processing, opportunities for trading were made more transparent and resulted in net gains for the division and increasing trading profitability, in some cases in the order of millions of Euros.
                </li>
                <li>
                  <strong>System Migration:</strong> Replacement of a legacy system with new software (external, and internal). The goal of the project was to move away from a centralised legacy system to more effective ETRM’s which were procured to handle business critical processes. Supporting these systems required multiple data automation processes to be replaced by new automations which relied on the data warehousing solution and were produced in modern microservices architecture allowing for a modernised approach to system management. The result of the project allowed for hundreds of hours of manual work to be automated, saving time, and team resources.
                </li>
                <li>
                  <strong>ML/Algorithmic Operations:</strong> Forecasting data and implementing smart trading algorithms allows the Trading department to be more flexible and automated in its approach. ML Models have been implemented which more accurately forecast power consumption and production from renewable resources (solar, hydro, and wind) resulting in better asset optimisation and a reduction in imbalance payments through the year, resulting in a savings in the hundreds of thousands of Euros per annum. Algorithmic trading was standardised and utilising the stream of data through the warehousing solution, was implemented at scale with the result of base revenue increasing by a few hundred thousand euro per annum, while the cost of these solutions was negligible. The algorithmic and model operations resulted in a data warehousing solution that bought positive revenue into the company, instead of being a cost centre.
                </li>
              </ul>
            </div>
            <div className="job">
              <h4 className="heading4">Business Intelligence Solutions Engineer (AVP) – Credit Suisse, Zürich</h4>
              <p>Jan 2021 – September 2023</p>
              <p>
                Leading business intelligence development across key initiatives within the Swiss Banking Risk Reporting division. I was responsible for harmonising data from multiple sources into the strategic data platform (Palantir) and automating reporting through various tools, such as QlikSense, Tableau, and PowerBI, powered by the data held in our data mart. The pipelines and automation created during my time in this role have helped to centralise and formalise data for reporting, shifted the ownership of reporting data to the reporting teams, increased report automation through the use of BI tools bringing in standardised formats, resulted in hundreds of hours of saved work time, and reduced costs by allowing legacy systems to be shut down.
              </p>
              <p><strong>Tech Stack:</strong> Apache Ecosystem, Spark, Structured Streaming, Hadoop, Azure Data Factory, APIM, Events Hub, Logic Apps, Function Apps, Python, Java, Postgres, MSSQL, Kafka, Databricks, PowerBI, Grafana, Delta Lake, Python (FastAPI, PySpark, Streamlit, Dash, Plotly), MLFlow, Palantir, Snowflake, QlikSense, Tableau</p>
            </div>
            <div className="job">
              <h4 className="heading4">Data Engineer and Analyst – TVSquared, Edinburgh</h4>
              <p>Aug 2017 – Dec 2022</p>
              <p>
                SaaS company with Client Services Team situated across UK, USA, and Germany. Supporting approx. 1000 clients across 70 countries.
              </p>
              <p>
                Collaborated with an analyst team to provide comprehensive support to global clients utilizing our SaaS reporting tools. My role involved extensive use of technical skills, including SQL, Python, Matplotlib, Tableau, and Excel, for data assessment and analysis. In addition to these technical skills, I demonstrated exceptional client-facing abilities, working closely with clients to gather requirements and provide tailored support. My responsibilities also encompassed data engineering on Amazon AWS, where I created and maintained robust data pipelines. This work facilitated the construction of multiple business intelligence models, effectively enhancing the value of client information and bolstering business processes.
              </p>
              <p><strong>Tech Stack:</strong> AWS, Pyspark and Python Backend, React Frontend, PostgresSQL, MongoDB, In house designed applications.</p>
            </div>
            <div className="job">
              <h4 className="heading4">Business Analyst and Project Manager – Computer Facilities (Pty) Ltd, South Africa</h4>
              <p>Jan 2009 – Mar 2017</p>
            </div>
            <div className="job">
              <h4 className="heading4">Campaign Manager (Email, SMS, Print & Mail Campaigns) – Computer Facilities (Pty) Ltd</h4>
              <p>Jan 2009 – Jan 2011</p>
            </div>
          </section>
        );
      case 'education':
        return (
          <section className="section">
            <div className="education">
              <h4 className="heading4">MSc Data Analytics - University of Portsmouth</h4>
              <p>
                Covering a wide range of technical and non technical concepts including ML and Deep Learning Models, Data Infrastructure for Big Data, Data Team Management.
              </p>
              <p><strong>Thesis:</strong> Tested the effected of pre-clustering time series based on similarity of profile to create custom models for different profiles based on volatility and seasonality. The test was successful, pre-clustering positively effects model results.</p>
            </div>
            <div className="education">
              <h4 className="heading4">BSc (Hons) Information Systems – University of Portsmouth</h4>
              <p>
                Advanced Systems Development, Information Systems Management, Project Management (SCRUM, AGILE, RAD), and Advanced Database Concepts.
              </p>
              <p><strong>Thesis:</strong> Designed and built a SaaS system which records and tracks stock price on a 5-minute interval, the system would record social media sentiment at the time towards the company and look for a change in sentiment which would pre-empt a sudden change in stock price. For example, Facebook during the Cambridge Analytica news scandal in 2017.</p>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <h2 className="title">Senior Data Specialist</h2>
      <section className="section">
        <p>
          As a data architect and engineer with 10 years of experience, I have developed data-driven reporting solutions across multiple business areas and industries, from marketing to finance. I consider myself tool agnostic as I have experience across various technology stacks, Microsoft's Azure (ADF, Events Hub, APIM, Azure Apps, SQL Server, and Power BI amongst others), and Amazon Web Services (AWS) stack (Redshift, Glue, and Quicksight etc.), along with Databricks, Snowflake, and Palantir, to name a few.
        </p>
      </section>
      <nav className="breadcrumbs">
        <button className={selectedSection === 'workExperience' ? 'active' : ''} onClick={() => setSelectedSection('workExperience')}>Work Experience</button>
        <button className={selectedSection === 'education' ? 'active' : ''} onClick={() => setSelectedSection('education')}>Education</button>
        <button className={selectedSection === 'skills' ? 'active' : ''} onClick={() => setSelectedSection('skills')}>Skills</button>
      </nav>
      {renderSection()}
    </div>
  );
};

export default Resume;
