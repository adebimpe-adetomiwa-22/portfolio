import React from 'react';

const Skills = () => {
    return (
        <section className='skills section' id='skills'>
            <div className='container'>
                <h3 className='skills-title subtitle'>Skills</h3>
                <ul>
                    <li>
                        <strong className='li-title'>Data Collection:</strong>
                        <ul>
                            <li>
                                <strong>ODK (Open Data Kit):</strong>{' '}
                                Efficiently collect field data through mobile
                                surveys, manage complex data collection
                                workflows, and ensure accurate and comprehensive
                                data capture.
                            </li>
                            <li>
                                <strong>Google Forms:</strong> Design and deploy
                                custom forms for various data collection needs,
                                including question types, validation rules, and
                                data integration with other tools.
                            </li>
                            <li>
                                <strong>Microsoft Forms:</strong> Create surveys
                                and quizzes for data gathering, and integrate
                                collected data seamlessly with Microsoft Office
                                tools for further analysis.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong className='li-title'>Data Cleaning:</strong>
                        <ul>
                            <li>
                                <strong>Error Detection:</strong> Identify and
                                correct errors or inconsistencies in the
                                dataset.
                            </li>
                            <li>
                                <strong>Duplicate Removal:</strong> Remove
                                duplicate entries to ensure the integrity and
                                accuracy of the data.
                            </li>
                            <li>
                                <strong>Data Standardization:</strong>{' '}
                                Standardize data formats and structures to
                                facilitate consistent analysis.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong className='li-title'>Data Exploration:</strong>
                        <ul>
                            <li>
                                <strong>Pattern Identification:</strong> Conduct
                                preliminary analysis to uncover patterns,
                                trends, and relationships within the data.
                            </li>
                            <li>
                                <strong>Statistical Analysis:</strong> Apply
                                statistical methods to summarize and interpret
                                the data.
                            </li>
                            <li>
                                <strong>
                                    Exploratory Data Analysis (EDA):
                                </strong>{' '}
                                Use techniques such as summary statistics and
                                visualizations to understand the underlying
                                structure of the data.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong className='li-title'>
                            Data Transformation:
                        </strong>
                        <ul>
                            <li>
                                <strong>Data Formatting:</strong> Modify data
                                formats (e.g., dates, categorical variables) to
                                suit the analysis requirements.
                            </li>
                            <li>
                                <strong>Data Aggregation:</strong> Combine and
                                aggregate data from multiple sources to create a
                                cohesive dataset.
                            </li>
                            <li>
                                <strong>Feature Engineering:</strong> Create new
                                features or variables to enhance the analysis or
                                modeling process.
                            </li>
                        </ul>
                    </li>

                    <li>
                        <strong className='li-title'>
                            Data Visualization:
                        </strong>
                        <ul>
                            <li>
                                <strong>Chart Creation:</strong> Develop various
                                types of charts (e.g., bar, line, pie) to
                                represent data insights visually.
                            </li>
                            <li>
                                <strong>Graphical Dashboards:</strong> Create
                                interactive dashboards using tools like Tableau
                                or Power BI to present data dynamically.
                            </li>
                            <li>
                                <strong>Visualization Tools:</strong> Leverage
                                libraries and tools such as Matplotlib and
                                Seaborn for advanced data visualization.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong className='li-title'>Reporting:</strong>
                        <ul>
                            <li>
                                <strong>Report Writing:</strong> Prepare
                                comprehensive reports summarizing the analysis
                                results, including key findings and
                                recommendations.
                            </li>
                            <li>
                                <strong>Presentation:</strong> Develop clear and
                                engaging presentations to communicate insights
                                to stakeholders effectively.
                            </li>
                            <li>
                                <strong>Documentation:</strong> Document
                                methodologies, results, and interpretations to
                                support informed decision-making.
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Skills;
