import React from "react";
import "./About.css";

export default class AboutPage extends React.Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
    }

    render() {
        return (
            <div className="about-page">
                <div className="about-page-title">
                    About Me
                </div>
                <div className="about-page-section">
                    <div className="section-title">Why Am I a Software Developer?</div>
                    <small className="about-page-section-text">
                        <p>
                            Since I was six years old and saw how a simple Nintendo Entertainment System
                            helped a dysfunctional family bond, I have had a passion to use software to
                            make a difference in the world. My four years of Information Technology studies
                            at Penn State University, and my seven years of freelancing, private sector, and
                            public sector software development jobs have connected me to folks and organizations
                            that have given as much to me as I have to them, and I have given back to the
                            community with every experience.
                        </p>
                        <p>
                            Now, I am seeking to use my experience to create lasting changes for the good of
                            humankind, and to make a difference in the world. Whether it was volunteering to
                            create a website for Penn State Hazleton's engineering department, or tutoring my
                            classmates, helping others with my experience, and growing by helping others, is my
                            passion. I hope to work for an organization that has a passion to help others, provide
                            quality software, and work hard, and I hope to learn and grow with that organization.
                        </p>
                    </small>
                </div>
                <div className="about-page-section">
                    <div className="section-title">My Hobbies</div>
                    <small>
                        <ul>
                            <li>Learning new technologies on the side (such as React/TypeScript!),</li>
                            <li>Reading fiction, fantasy, and romance novels,</li>
                            <li>Playing video games,</li>
                            <li>Training our two dogs, Arya and Chance, and</li>
                            <li>Being a father; this isn't a hobby, but I enjoy it as if it were one!</li>
                        </ul>
                    </small>
                </div>
            </div>
        );
    }
}