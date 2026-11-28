import Head from "next/head";
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import styles from "@/styles/CultureGallery.module.css";

// Culture gallery photos — add / remove numbers here (c15, c16 are hidden)
const galleryImages = [1, 2, 4, 5, 6, 7, 8, 9, 10, 12, 17, 18, 20, 21, 22, 23, 24, 25]
	.map((n) => `/assets/images/culture/c${n}.webp`);

export default function Home() {


	return (
		<>
			<Head>
				<title>Vacancy - ANVKA</title>
				<meta name="description" content="For sending DICOM Data Online" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
			</Head>

            <div class="page-layout-v04">
                    <div class="img-style">
                        <img class="img-cover" width="1920" height="720" loading="eager" decoding="async" src="/assets/images/culture.webp" alt="page-title"/>
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
                                    <h2 class="text_white newcolorx">Culture</h2>
                                    {/* <p className="headrp">
                                        CureWith3D, a healthcare-innovation company focused on creating customized, patient-specific 3D-printed surgical guides, orthopedic & dental implants, and anatomical models.
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="main-content">
                    <div class="hiring ajh">
                            <div class="wrap-box tf-spacing-1">
                                <div class="tf-container">
                                    <div class="row">
                                        {/* New gallery: small tiles, 5 per row (images list is at the top of this file) */}
                                        <div className={`content-inner ${styles.wrap}`}>
                                            <LightGallery
                                                speed={500}
                                                plugins={[lgThumbnail, lgZoom]}
                                                elementClassNames={styles.grid}
                                            >
                                                {galleryImages.map((src, i) => (
                                                    <a key={src} href={src} className={styles.item}>
                                                        <img
                                                            src={src}
                                                            alt={`ANVKA culture ${i + 1}`}
                                                            width="1000"
                                                            height="667"
                                                            loading="lazy"
                                                            decoding="async"
                                                        />
                                                    </a>
                                                ))}
                                            </LightGallery>
                                        </div>

                                        {/* Old gallery (3 per row, float) — kept for reference
                                        <div class="content-inner galrm">
                                            <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>

                                                <a href="/assets/images/culture/c1.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c1.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c2.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c2.webp" />
                                                </a>

                                                <a href="/assets/images/culture/c4.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c4.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c5.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c5.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c6.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c6.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c7.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c7.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c8.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c8.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c9.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c9.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c10.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c10.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c12.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c12.webp" />
                                                </a>
                                                (c15 and c16 were hidden here)
                                                <a href="/assets/images/culture/c17.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c17.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c18.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c18.webp" />
                                                </a>

                                                <a href="/assets/images/culture/c20.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c20.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c21.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c21.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c22.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c22.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c23.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c23.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c24.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c24.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c25.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c25.webp" />
                                                </a>


                                            </LightGallery>
                                        </div>
                                        */}
                                    </div>
                                </div>
                            </div>
                        </div>

                </div>

		</>
	);
}
