import Head from "next/head";
import Image from "next/image";
import ProtectedContent from '@/components/ProtectedContent'
import styles from "@/styles/TeamList.module.css";

// Leadership team — add / edit people here
const team = [
    { name: "Mr. Deepak Singhal", role: "CEO", company: "ANVKA", image: "/assets/images/team/deepak-singhal2.jpeg" },
    { name: "Mr. Nitin Yadav", role: "Operations Head", company: "ANVKA", image: "/assets/images/team/nitin-yadav2.jpeg" },
    { name: "Mrs. Devpriya", role: " Human Resources", company: "ANVKA", image: "/assets/images/team/devpriya2.jpeg" },
    { name: "Mr. Vineet Upadhyay", role: "Finance", company: "ANVKA", image: "/assets/images/team/vineet2.jpeg" },
    { name: "Mr. Ashish Jain", role: "LINTEX", company: "LINTEX", image: "/assets/images/team/ashish-jain2.jpeg" },
    { name: "Mr. Yogesh Mittal", role: " CareTAB.ai", company: "CareTAB.ai", image: "/assets/images/team/yogesh-mittal2.jpeg" },
    { name: "Mr. Manvendra", role: " Medical Implants", company: "CareTAB.ai", image: "/assets/images/team/Manvendra2.jpeg" },
    { name: "Mr. Nishil Kumar", role: "Curewith3D", company: "Curewith3D", image: "/assets/images/team/nishil-kumar.webp" },
    { name: "Mrs. Bhavana Malik", role: "IndiaMD", company: "Curewith3D", image: "/assets/images/team/bhavana-malik.webp" },
    { name: "Mr. Vimal Vijay", role: "AkieChef", company: "AkieChef", image: "/assets/images/team/vimal-vijay2.jpeg" },
    { name: "Ms. Surbhi Mehrotra", role: "Tumble Salon", company: "Tumble", image: "/assets/images/team/surbhi-mehrotra2.jpeg" },
    { name: "Mr. Jitendra Singh", role: "Admin & Liaisoning", company: "Tumble", image: "/assets/images/team/jitendra_singh2.jpeg" },
    { name: "Mr. Abhijeet Singh", role: "Digital Marketing", company: "Tumble", image: "/assets/images/team/Abhijeet-Sir2.jpeg" },
    { name: "Mr. Surender Singh", role: "Supply Chain", company: "Tumble", image: "/assets/images/team/Surendra-Sir2.jpeg" },
];

export default function Home() {


    return (
        <>
            <Head>
                <title>Our Team - ANVKA</title>
                <meta name="description" content="Our Team" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div class="page-layout-v04">
                <div class="img-style">
                    <img class="img-cover" width="1920" height="720" loading="eager" decoding="async" src="/assets/images/teamb.webp" alt="page-title" />
                </div>
                <div class="content">
                    <div class="tf-container">
                        <h1 class="text_white newcolorx">Our Team</h1>
                    </div>
                </div>
            </div>


            <div class="main-content ovefffk">
                <ProtectedContent>
                    <div class="section-team tf-spacing-1">
                        <div class="tf-container large">
                            <div className="row">
                                <div className="col-sm-12 text-center" style={{ marginBottom: 32 }}>
                                    <div class="sub text-label text-uppercase split-text effect-up lh-16">Our Team</div>
                                    <h3 class="title split-text effect-right">Meet Our Leadership Team</h3>
                                </div>
                            </div>

                            <div className={styles.grid}>
                                {team.map((member) => (
                                    <article key={member.name} className={styles.card}>
                                        {/* Passport-size photo on the left */}
                                        <div className={styles.photo}>
                                            {/* <img loading="lazy" decoding="async" src={member.image} alt={member.name} /> */}
                                            {/* next/image: server resizes the 2000px photo to the shown size, so it stays sharp */}
                                            <span className={styles.photoInner}>
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    fill
                                                    sizes="(max-width: 575px) 130px, 112px"
                                                    quality={90}
                                                />
                                            </span>
                                        </div>

                                        {/* Details on the right */}
                                        <div className={styles.content}>
                                            {/* <span className={styles.company}>{member.company}</span> */}
                                            <h5 className={styles.name}>{member.name}</h5>
                                            <p className={styles.role}>{member.role}</p>
                                            <span className={styles.line} />
                                        </div>
                                    </article>
                                ))}
                            </div>

                        </div>
                    </div>

                </ProtectedContent>

            </div>
            <br></br><br></br>
        </>
    );
}
