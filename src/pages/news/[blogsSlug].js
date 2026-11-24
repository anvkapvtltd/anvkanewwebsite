import Head from "next/head"
import React, { useEffect } from "react"
import NewsMarquee from "@/components/NewsMarquee"
import styles from "@/styles/BlogDetail.module.css"

/* =========================
   SERVER SIDE PROPS
========================= */
export async function getServerSideProps(context) {
  try {
    const posturl = encodeURIComponent(context.params.blogsSlug)

    const [postRes, recentRes, catedata] = await Promise.all([
      fetch(
        `https://woocommerce-1457894-6495841.cloudwaysapps.com/wp-json/wp/v2/posts?slug=${posturl}&_embed`
      ),
      fetch(
        "https://woocommerce-1457894-6495841.cloudwaysapps.com/wp-json/wp/v2/posts?_embed&categories_exclude=8&per_page=10"
      ),
      fetch(
        "https://woocommerce-1457894-6495841.cloudwaysapps.com/wp-json/wp/v2/categories"
      ),
    ])

    const postData = await postRes.json()
    const recentData = await recentRes.json()
    const CatData = await catedata.json()

    if (!postData || postData.length === 0) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        posts: postData[0],
        posts5: Array.isArray(recentData) ? recentData : [],
        cat: CatData || [],
      },
    }
  } catch (error) {
    console.log("SERVER ERROR:", error)

    return {
      notFound: true,
    }
  }
}

/* =========================
   HELPERS
========================= */
const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  })

const readingTime = (html = "") => {
  const words = html.replace(/<[^>]*>/g, " ").trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

const stripTags = (html = "") => html.replace(/<[^>]*>/g, "").trim()

/* =========================
   COMPONENT
========================= */
const SingleBlog = ({ posts, posts5 }) => {

  useEffect(() => {
    document.body.classList.add("headerbodyc");

    return () => {
      document.body.classList.remove("headerbodyc");
    };
  }, []);

  const author = posts?.yoast_head_json?.author
  const moreNews = posts5.filter((p) => p.id !== posts.id)

  return (
    <>
      <Head>
        <title>{`${stripTags(posts?.title?.rendered) || "News"} - ANVKA`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`main ${styles.page}`}>
        <div className="blog-post-detail">

          {/* Banner */}
          <div className="page-layout-v04">
            <div className="img-style">
              <img className="img-cover" width="1920" height="720" loading="eager" decoding="async" src={posts.extra_post_image_url} alt="page-title" />
            </div>
            <div className="content">
              <div className="tf-container align-items-center text-center"></div>
            </div>
          </div>

          {/* Article */}
          <article className={styles.article}>
            <a href="/news" className={styles.back}>← All News & Media</a>

            <div>
              <span className={styles.tag}>News & Media</span>
            </div>

            <h1
              className={styles.title}
              dangerouslySetInnerHTML={{ __html: posts?.title?.rendered }}
            />

            <div className={styles.meta}>
              {author && (
                <>
                  <div className={styles.author}>
                    <span className={styles.avatar}>{author.charAt(0)}</span>
                    <div>
                      <span className={styles.metaLabel}>Author</span>
                      <span className={styles.metaValue}>{author}</span>
                    </div>
                  </div>
                  <span className={styles.divider} />
                </>
              )}
              <div>
                <span className={styles.metaLabel}>Published</span>
                <span className={styles.metaValue}>{formatDate(posts.date)}</span>
              </div>
              <span className={styles.divider} />
              <div>
                <span className={styles.metaLabel}>Read Time</span>
                <span className={styles.metaValue}>{readingTime(posts?.content?.rendered)} min read</span>
              </div>
            </div>

            <div
              className={styles.body}
              dangerouslySetInnerHTML={{ __html: posts?.content?.rendered || "" }}
            />
          </article>
        </div>

        {/* More news */}
        {moreNews.length > 0 && (
          <section className={styles.more}>
            <div className={styles.moreHeading}>
              <h3>More News</h3>
              <a href="/news" className={styles.allNews}>View All →</a>
            </div>
            <NewsMarquee posts={moreNews} />
          </section>
        )}
      </main>
    </>
  )
}

export default SingleBlog
