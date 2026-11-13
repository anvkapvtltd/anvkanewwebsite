import Head from "next/head";

export default function Home() {


	return (
		<>
			<Head>
				<title>Advanced Home Healthcare Services in India</title>
				<meta name="description" content="Get hospital-quality healthcare at home with doctor visits, nursing, ICU care, physiotherapy, diagnostics, and medical equipment support." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
			</Head>

            <div class="page-layout-v04">
                    <div class="img-style">
                        <img class="img-cover" width="1920" height="720" loading="eager" decoding="async" src="/assets/images/caretab.webp" alt="page-title"/>
                    </div>
                    <div class="content">
                        <div class="tf-container">
                            {/* <ul class="tf-breadcrumb style-2 mb_16">
                                <li class="text-label text_white lh-16"><a href="/index.html"
                                        class="link text_white">HOME</a>
                                </li>
                                <li class="text_white text-label lh-16">Contact Us</li>
                            </ul> */}
                            <div className="row">
                                <div className="col-sm-8">
                                    <h2 class="text_white"><img className="bannelogo" src="/assets/images/mlogo/caretab.webp"/></h2>
                                    {/* <p className="headrp">
                                        Healthcare @Home, Simplified
                                    </p> */}
                                </div>

                                {/* <div className="col-sm-4">
                                    <div class="btn_wrapper ms-lg-auto flotr">
                                            <a href="https://caretab.ai/" class="tf-btn btn-hover-animate-2 anvkacbtn wow fadeInRight btn-item btn-hover">
                                                <span class="h4">GO</span>
                                            </a>
                                        </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                <br></br><br></br><br></br><br></br><br></br><br></br>
                <div class="main-content">    

                    <div class="tf-container">
                            <div class="mb_48">
                                <div class="row align-items">
                                    <div class="col-sm-6 caretabwalabg">
                                        <div class="leftimage ">
                                            {/* <img src="/assets/images/portfolio-item-2.jpg" alt="Lintex"/> */}
                                        </div>
                                    </div>
                                    <div class="col-sm-6 textjustfy">                                        
                                        <div className="shdwala">
                                            <br></br>
                                        <h3 class="title text_primary title split-text effect-right font24">Every meaningful innovation begins with a simple question.</h3>
                                        <br></br>
                                        <p>
                                            For us, that question was: Why should quality healthcare stop at the hospital door? For years, our founders worked closely with hospitals, doctors, nurses, and patients, witnessing exceptional clinical care inside medical institutions. Yet, once patients returned home, many struggled to access the same level of professional support. Families were often left to coordinate caregivers, arrange medical equipment, manage follow-up care, and make critical health decisions without adequate guidance. The gap between hospital excellence and home care was impossible to ignore.
                                        </p>
                                        <br></br>
                                        <h6>That realization led to the birth of CareTAB.ai. </h6>
                                        <br></br>
                                        <p>
                                            More than a home healthcare provider, CareTAB.ai was created as a technology-enabled healthcare ecosystem that brings hospital-grade care into the comfort of every home. Built by experienced healthcare professionals, we combine clinical expertise with Artificial Intelligence to make healthcare more accessible, personalized, and proactive. 
                                        </p>
                                       
                                        
                                        </div>
                                    </div>                                    
                                </div>
                            </div>                         
                        </div>

                        <div class="tf-container">
                            <div class="mb_48">
                                <div class="row align-items">
                        
                                    <div class="col-sm-12 textjustfy">                                        
                                        <div className="shdwala">                                          
                                    <br/><br/>
                                        <p>
                                            Our name reflects the promise we make every day. Care represents compassion, empathy, and the human touch that remains at the heart of everything we do. TAB stands for our core values: Trust, Affordability, and Bespoke Solutions, the principles that guide every interaction, every service, and every patient journey. The ".ai" signifies our commitment to intelligent, data-driven healthcare, where technology empowers clinicians without ever replacing human care.
                                        </p>
                                        <br></br>
                                        <p>
                                            From preventive care and diagnostics to nursing, rehabilitation, chronic disease management, elderly care, and advanced ICU support at home, CareTAB.ai delivers comprehensive healthcare under one trusted platform. 
                                        </p>
                                        <br></br>
                                        <p>
                                            Our vision extends beyond providing services. We are building a future where healthcare is continuous, connected, and centered around people rather than places. By integrating medical expertise, AI-powered decision support, and compassionate care giving, we aim to redefine what quality healthcare looks like outside hospital walls. 
                                        </p>
                                        <p>
                                           Because healing doesn't happen only in hospitals. 
                                        </p>
                                        <br></br>
                                        <p>It happens where people feel safest, most comfortable, and most cared for: at home. CareTAB.ai exists to make that care accessible, reliable, and exceptional for every family.</p>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>                         
                        </div>


                    <div class="section-cta tf-spacing-1">
                        <div class="tf-container">
                            <div class="content">
                                <div class="row align-items-center">
                                    <div class="col-lg-8">
                                        <div class="heading">
                                            <h3 class="title split-text split-lines-rotation-x cwhite">Start Your Homecare Journey</h3>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="content">                                           
                                            <div class="wrap-btn d-flex gap_20 flex-wrap wow fadeInUp btnflotright">
                                                <a target="_blank" href="https://caretab.ai/" class="tf-btn btn-hover-animate-2 btn-bg-secondary">
                                                    <span>Visit Our Website</span>
                                                    <span></span>
                                                </a>                                             
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

		</>
	);
}
