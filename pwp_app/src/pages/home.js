import * as React from 'react'
import {Container, Row, Col, Image, NavLink, FormLabel} from "react-bootstrap";


export function Home() {
    return (
        <>
            <div className={"bg-dark"}>

            { /*  ** Main Jumbotron **  */}
            <Container className={'p-3 p-sm-5'}>
                <Col id="headingIntro" className="header-colors jumbotron border-secondary rounded col-sm-8 mb-4">
                    <Row className="p-5 m-5">
                        <h1 className="display-2 fw-bold f1-l">Hi,</h1>
                        { /*            I would like a hover feature here that makes it so that whenever I hover of this box, the Hi changes to other greetings such as "Hey, Hello, Whatsup?, Yo!, Hola, etc.*/}
                        <h3 className="fw-bold mt-4 display-5">welcome to my portfolio</h3>
                    </Row>
                </Col>
            </Container>

            { /* Introduction Text*/}
            <div className="container-fluid p-3 p-sm-5 mb-5">
                <h3 id="subHeadingIntro"
                    className="text-golden col-sm-6 container-fluid fw-bold text-justify align-right">
                    My name is <strong>Jonathan Daniel Verduzco-Cardenas</strong> but I usually go
                    by <strong>Jon!</strong> Below I have included descriptions of my websites' sections which also act
                    as links.
                    <br/>
                    <br/>
                    <a href="#headingAboutMe"><strong>About Me</strong></a> : This section includes my introduction and
                    more about who I am :)!
                    <br/>
                    <br/>
                    <a href="#worksSection"><strong>Work</strong></a> : Here you can find the projects I've been working
                    on.
                    <br/>
                    <br/>
                    <a href="#contactForm"><strong>Contact</strong></a> : Reach me by filling out the contact form.
                    <br/>
                    <br/>
                    <a href="html/designs.html">Design Page</a> : Under Construction 🚧
                </h3>
            </div>


            { /* SPACING */}
            <div id="spaceBetweenSections1" className="m-5 p-5"></div>


            { /*  ** About Me Section: Highlighting myself ** */}
            <div id="picture space " className="mt-5">
                <div className="container-fluid p-3 p-sm-5">
                    <div id="headingBio"
                         className="header-colors jumbotron border-secondary rounded-right col-sm-8 mb-4">
                        <div className="p-5 m-5">
                            <a id="headingAboutMe"><h1 className="display-2 fw-bold f1-l">About Me</h1></a>
                            { /* I would like a hover feature here that makes it so that whenever I hover of this box, random pictures of me appear and are rotated in random directions*/}
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <Image src="documentation/milestone-2-wireframes/IMG_9617.jpg" alt="A picture of me."
                         className="image-fluid rounded float-end img-thumbnail col-sm-2" width="100%" height="auto"/>
                </div>
                { /*    Extra Space here for the random image to appear*/}
                <div id="spaceBetweenSections2" className="m-5 p-5"></div>
            </div>
            <div className="container-fluid p-3 p-sm-5 display-1 fw-bold">
                <p id="subHeadingBio" className="text-golden">Bio</p>
            </div>
            <div>
                <p id="bio" className="text-golden col-sm-6 container-fluid fw-bold text-justify align-right"> Since a
                    young age I have been infatuated with technology. In my mind, computers as revolutionary tools which
                    have the power to transform all aspects of society. My goal is to master these tools and build
                    things others will find useful. My passion for technology has led me to study full stack web
                    development at CNM Ingenuity's Deep Dive Coding Camp. Deep Dive is a full time (400 hours), remote
                    and totally immersive fullstack development experience. I'm grateful to have the opportunity to
                    learn from so many talented peers, instructors and alumni.
                    <br/>
                    <br/>
                    <u> The following are a few of the technologies I have studied and used in my projects. </u>
                    <br/>
                    <br/>
                    <strong className="tab">Front End Development</strong> : Javascript, React, Bootstrap, HTML5, CSS3
                    <br/>
                    <strong className="tab">Back End Development</strong> : Node.js, MySQL, Express.js, Typescript,
                    Docker
                    <br/>
                    <strong className="tab">UI/UX Design</strong> : Figma, ERD Visualization, REST API Diagrams, Dieter
                    Rams' principles of good design.
                    <br/>
                    <strong className="tab">Project Management Tools</strong> : Git Version Control, GitHub, Agile
                    Project Management
                    <br/>
                    <br/>
                    Personally, I have a wide range of interests including but not limited to new technologies,
                    geopolitics, books, finance, music and the outdoors. I am the son of two immigrant parents and a
                    proud Dreamer - born in Colima, MX and raised in New Mexico. My non-traditional background gives me
                    a diverse perspective and shapes the way I interact with the world everyday. I would describe myself
                    as an open-minded, creative and passionate individual. I enjoy teaching myself new skills and
                    sharing a warm cup of coffee with friends. Feel free to reach out if you have any questions or are
                    just looking to say hi!

                </p>
            </div>


            { /* SPACING */}
            <div id="spaceBetweenSections3" className="m-5 p-5"></div>


            { /*  ** Works Section: Highlighting my projects ** */}
            <div className="container-fluid">
                <div className="container-fluid p-3 p-sm-5">
                    <div id="headingWorks"
                         className="header-colors jumbotron border-secondary rounded-right col-sm-8 mb-4">
                        <div className="p-5 m-5">
                            <a id="worksSection"><h1 className="display-2 fw-bold f1-l"> Works</h1></a>
                        </div>
                    </div>
                </div>

                { /*    Website Section of Works*/}

                <div className="container-fluid p-3 p-sm-5 display-3 fw-bold">
                    <p id="subHeadingWebsite" className="text-golden">This Website!</p>
                </div>
                { /*    Website Description */}
                <div>
                    <p id="websiteBody"
                       className="text-golden col-sm-6 container-fluid fw-bold text-justify align-right pb-3">
                        Building this website was a challenge within itself. I thoroughly enjoyed building a personal
                        portfolio as it is something I've always wanted to do. It is a live project that is constantly
                        evolving as I expand my knowledge and add new features. My goal for this initial draft was to
                        create something that followed Dieter Rams' <a
                        href="https://www.vitsoe.com/us/about/good-design">10 principles of good design</a>. Of those 10
                        principles, I focused the most on making my website Unobtrusive, Honest and Simple. I also
                        wanted to include a pallete of colors that complimented eachother well and were easy on the
                        eyes. I believe I have accomplished what I wanted but I would appreciate any and all <a
                        href="#contactForm">feedback!</a>
                    </p>
                </div>

                { /*    Capstone Section of Works*/}

                <div className="container-fluid p-3 p-sm-5 display-3 fw-bold">
                    <p id="subHeadingCapstone" className="text-golden">ABQ Tool Shed</p>
                </div>
                { /*    Capstone Description */}
                <div>
                    <p id="capstoneBody"
                       className="text-golden col-sm-6 container-fluid fw-bold text-justify align-right pb-3">
                        For our Deep Dive capstone project, my team decided to build a peer-to-peer tool lending
                        community for the residents of Albuquerque. Tools are expensive and so it is often hard to
                        justify the price tag of a tool which is only going to be used a few times. Our website <strong>ABQ
                        Tool Shed</strong> connects people who need tools with those who have them. We have been working
                        on this project for several weeks. We began by creating wireframes and UI/UX interaction flows
                        using Figma. After we had a starting visualizing of our website we created Entity Relation
                        Diagrams (ERD) to begin the construction of our backend. We are currently in the final testing
                        phases of our backend. We used several technologies and languages to get this far including
                        Typescript, mySQL, Node.JS and Docker. Next we will begin constructing our frontend using React,
                        Javascript, HTML and of course CSS.
                        <br/>
                        <br/>
                        Below is a snippet of code from our backend. The code is written in Typescript and is critical
                        to our project.
                    </p>
                </div>
                { /*    Capstone Preview/Image*/}
                <div className="container-fluid">
                    <img src="documentation/milestone-2-wireframes/capstone-code.png" alt="A sample of code."
                         className="img-fluid rounded mx-auto d-block col-sm-9" width="100%" height="auto"/>
                </div>
                <div className="container-fluid p-3 p-sm-5">
                    <div id="headingPicture" className="header-colors jumbotron border-secondary rounded mb-4">
                        <div className="p-3 m-3">
                            <h1 className="display-2 fw-bold f1-l"></h1>
                        </div>
                    </div>
                </div>

            </div>

            { /* SPACING */}
            <div id="spaceBetweenSections4" className="m-5 p-5"></div>

            { /*  ** Contact Section **  */}
            <div>
                <div className="container-fluid p-3 p-sm-5">
                    <div id="headingContact"
                         className="header-colors jumbotron border-secondary rounded-right col-sm-8 mb-4">
                        <div className="p-5 m-5">
                            <a id="contactForm"><h1 className="display-2 fw-bold f1-l"> Contact</h1></a>
                        </div>
                    </div>
                </div>
                { /*    Form*/}
                <div className="container-fluid col-sm-6 align-left">
                    <form action="./apis/" method="post" id="contact" noValidate>
                        <div className="mb-3">
                            <FormLabel htmlFor="name" className="form-label text-secondary fw-bold">Name:
                                <input name="name" id="name" type="text" className="form-control form-control-lg"
                                       placeholder="Your Name."/>
                            </FormLabel>
                        </div>

                        <div className="mb-3">
                            <FormLabel htmlFor="email" className="form-label text-secondary fw-bold">Email:</FormLabel>
                            <input name="email" id="email" type="email" className="form-control form-control-lg"
                                   placeholder="Your Email."/>
                            { /*            <div class="form-text">How can I reach you?</div>*/}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label text-secondary fw-bold">Subject:</label>
                            <input name="subject" id="subject" type="text" className="form-control form-control-lg"
                                   placeholder="Subject" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="message" className="form-label text-secondary fw-bold">Message:</label>
                            <input  name="message" id="message" type="text" className="form-control form-control-lg"
                                   placeholder="Type your message here." />
                        </div>
                        <div className="g-recaptcha" data-sitekey="6LcOynoeAAAAADDUeBKZqV8KKMDmJPHCpKEaeVUu"></div>
                        <button type="submit" className="btn btn-secondary">Submit</button>

                    </form>

                    <div id="output-area"></div>
                </div>
            </div>

            { /*Font Awesome for Icons*/}
            <script src="https://kit.fontawesome.com/49ad91d70e.js" crossOrigin="anonymous"></script>

            { /*Jquery*/}
            <script src="https://code.jquery.com/jquery-3.5.1.min.js"
                    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous"></script>
            <script crossOrigin="anonymous" integrity="sha256-2Pjr1OlpZMY6qesJM68t2v39t+lMLvxwpa8QlRjJroA="
                    src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/4.2.2/jquery.form.min.js"></script>
            <script crossOrigin="anonymous" integrity="sha256-F6h55Qw6sweK+t7SiOJX+2bpSAa3b/fnlrVCJvmEj1A="
                    src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/jquery.validate.min.js"></script>
            <script crossOrigin="anonymous" integrity="sha256-0Yg/eibVdKyxkuVo1Qwh0DspoUCHvSbm/oOoYVz32BQ="
                    src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/additional-methods.min.js"></script>

            { /*Bootstrap with Popper*/}
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
                    integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
                    crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
                    integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
                    crossOrigin="anonymous"></script>

            { /*Connecting to JS file*/}
            <script src="./js/script.js"></script>

            { /*Connecting to ReCaptcha*/}
            <script src="https://www.google.com/recaptcha/api.js" async defer></script>

            </div>
        </>
    )
}