import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from 'react-icons/bs';
import './styles.scss';
import { DiApple, DiAndroid, DiGit, DiEclipse } from 'react-icons/di'


const personalDetails = [
    {
        label: "Name",
        value: "Tobi Ojo",
    },
    {
        label: "Age",
        value: "22",
    },
    {
        label: "University",
        value: "University of Massachusetts Dartmouth",
    },
    {
        label: "Contact Me",
        value: "6179091113",
    },
    {
        label: "Email",
        value: "tobiojo29@gmail.com",
    },
];


const jobSummary = 'Passionate and versatile Front-End Developer with a knack for creating visually stunning and intuitive user interfaces. I bring a solid foundation in HTML, CSS, and JavaScript, coupled with expertise in modern frontend frameworks like React. What sets me apart is my proficiency in backend technologies – I am well-versed in server-side programming languages such as Node.js and have hands-on experience with database systems.'



const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <h3> Front End Developer</h3>
                    <p> {jobSummary}</p>
                    <h3 className="personalInformationHeaderText"> Personal Information</h3>
                    <ul>
                        {
                            personalDetails.map((item, i) => (
                                <li>
                                    <span className="title">{item.label}</span>
                                    <span className="value">{item.value}</span>

                                </li>

                            ))
                        }
                    </ul>

                </div>
                <div className="about__content__servicesWrapper">
                    <div className="about__content__servicesWrapper__innerContent"> 
                    <div>
                        <DiEclipse size={60} color="var(--yellow-theme-main-color)" />
                    </div>
                        <div>
                            <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
                        </div>

                        <div>
                            <DiGit size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <DiApple size={60} color="var(--yellow-theme-main-color)" />
                        </div>   
        
                    </div>




                </div>




            </div>
        </section>
    );
};
export default About;