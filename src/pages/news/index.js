"use client";

import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/NewsList.module.css";

// WordPress excerpts contain entities like &#8217; and [&hellip;]
const decodeEntities = (text = "") =>
  text
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&hellip;/g, "…")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'")
    .replace(/\s*\[…\]\s*$/, "…");

export async function getServerSideProps() {
  try {
    const res = await fetch(
      "https://woocommerce-1457894-6495841.cloudwaysapps.com/wp-json/wp/v2/posts?_embed&categories_exclude=52505&per_page=6&page=1",
      {
        headers: {
          Accept: "application/json",
          "User-Agent": "Next.js Server",
        },
      }
    )

    const posts = await res.json()

    return {
      props: {
        initialPosts: posts || [],
        totalPages:
          Number(res.headers.get("X-WP-TotalPages")) || 1,
      },
    }
  } catch (error) {
    return {
      props: {
        initialPosts: [],
        totalPages: 1,
      },
    }
  }
}


export default function Home({
  initialPosts,
  totalPages,
}) {
  const [posts, setPosts] = useState(initialPosts)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const loadMoreRef = useRef(null)

  /* =========================
     LOAD MORE POSTS
  ========================= */
  const loadMorePosts = async () => {
    if (loading || page >= totalPages) return

    try {
      setLoading(true)

      const nextPage = page + 1

      const res = await fetch(
        `https://woocommerce-1457894-6495841.cloudwaysapps.com/wp-json/wp/v2/posts?_embed&categories_exclude=52505&per_page=6&page=${nextPage}`
      )

      const newPosts = await res.json()

      setPosts((prev) => [...prev, ...newPosts])

      setPage(nextPage)
    } catch (error) {
      console.log("Load More Error:", error)
    } finally {
      setLoading(false)
    }
  }

  /* =========================
     INTERSECTION OBSERVER
  ========================= */
  useEffect(() => {
    if (!loadMoreRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMorePosts()
        }
      },
      {
        rootMargin: "300px",
      }
    )

    observer.observe(loadMoreRef.current)

    return () => observer.disconnect()
  }, [page, loading])


  const [selectedService, setSelectedService] = useState(''); // Initial empty selection) {


  return (
    <>
      <Head>
        <title>News & Media - ANVKA</title>
        <meta name="description" content="For sending DICOM Data Online" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
      </Head>

      <div class="page-layout-v04">
        <div class="img-style">
          <img class="img-cover" width="1920" height="720" loading="eager" decoding="async" src="/assets/images/newsart.webp" alt="page-title" />
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
                <h2 class="text_white newcolorx">News & Media</h2>
                {/* <p className="headrp">
                                        CureWith3D, a healthcare-innovation company focused on creating customized, patient-specific 3D-printed surgical guides, orthopedic & dental implants, and anatomical models.
                                    </p> */}
              </div>


            </div>
          </div>
        </div>
      </div>


      <div class="main-content">
        <div class="blog-post-3 tf-spacing-1">
          <div class="tf-container">
            <div className={styles.grid}>

              {posts?.map((post) => (
                <article key={post.id} className={styles.card}>
                  {/* Passport-size photo on the left */}
                  <a href={`/news/${post.slug}`} className={styles.photo}>
                    <img loading="lazy" decoding="async" src={post?.yoast_head_json?.og_image?.[0]?.url} alt="" />
                  </a>

                  {/* Content on the right */}
                  <div className={styles.content}>
                    <div className={styles.meta}>
                      <span className={styles.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "2-digit",
                          year: "numeric",
                        })}
                      </span>
                      {post?.yoast_head_json?.author && (
                        <span className={styles.author}>by {post.yoast_head_json.author}</span>
                      )}
                    </div>

                    <h5 className={styles.title}>
                      <a href={`/news/${post.slug}`} dangerouslySetInnerHTML={{ __html: post?.title?.rendered || "" }}></a>
                    </h5>

                    {post?.excerpt?.rendered && (
                      <p className={styles.excerpt}>
                        {decodeEntities(post.excerpt.rendered.replace(/<[^>]*>/g, "").trim())}
                      </p>
                    )}

                    <a href={`/news/${post.slug}`} className={styles.readMore}>
                      Read More <span className={styles.arrow}>→</span>
                    </a>
                  </div>
                </article>
              ))}

            </div>

            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div ref={loadMoreRef}></div>

                  {/* LOADING */}
                  {loading && (
                    <p className="text-center">
                      Loading...
                    </p>
                  )}

                  {/* END */}
                  {page >= totalPages && (
                    <p className="text-center">
                      No more posts
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* <ul class="wg-pagination style-1 justify-content-center">
                                <li class="active">
                                    <a href="#">1</a>
                                </li>
                                <li>
                                    <a href="#">2</a>
                                </li>
                                <li>
                                    <a href="#">3</a>
                                </li>
                                <li class="arrow">
                                    <a href="#"><i class="icon-CaretRight"></i></a>
                                </li>
                            </ul> */}
          </div>
        </div>

      </div>

    </>
  );
}
