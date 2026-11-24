import styles from './NewsMarquee.module.css'

const formatDate = (date) => {
  const d = new Date(date)
  return {
    day: d.toLocaleDateString('en-US', { day: '2-digit' }),
    monthYear: d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
  }
}

// Each copy of the list must be wider than the screen, otherwise a blank
// gap shows up in the loop. Repeat short lists until there are enough cards.
const MIN_CARDS_PER_COPY = 8

// Slow, continuous marquee of news cards (text only for now).
// Pauses while hovered.
export default function NewsMarquee({ posts = [] }) {
  if (!posts.length) return null

  let base = posts
  while (base.length < MIN_CARDS_PER_COPY) base = [...base, ...posts]

  // Rendered twice so the -50% translate loops seamlessly.
  const loop = [...base, ...base]
  // Keep the speed roughly constant no matter how many cards there are.
  const duration = `${base.length * 6}s`

  return (
    <div className={styles.marquee}>
      <div className={styles.track} style={{ animationDuration: duration }}>
        {loop.map((post, i) => {
          const isClone = i >= posts.length
          const { day, monthYear } = formatDate(post.date)
          const author = post?.yoast_head_json?.author

          return (
            <div
              key={`${post.id}-${i}`}
              className={styles.item}
              aria-hidden={isClone ? 'true' : undefined}
            >
              <a
                href={`/news/${post.slug}`}
                className={styles.card}
                tabIndex={isClone ? -1 : undefined}
              >
                {/* Image hidden for now — uncomment to bring it back
                <img
                  className={styles.image}
                  loading="lazy"
                  decoding="async"
                  width="280"
                  height="210"
                  src={post?.yoast_head_json?.og_image?.[0]?.url}
                  alt=""
                />
                */}

                <div className={styles.top}>
                  <span className={styles.tag}>News</span>
                  <div className={styles.date}>
                    <span className={styles.day}>{day}</span>
                    <span className={styles.monthYear}>{monthYear}</span>
                  </div>
                </div>

                <h5
                  className={styles.title}
                  dangerouslySetInnerHTML={{ __html: post?.title?.rendered || '' }}
                />

                <div className={styles.footer}>
                  {author ? (
                    <div className={styles.author}>
                      <span className={styles.avatar}>{author.charAt(0)}</span>
                      <span className={styles.authorName}>{author}</span>
                    </div>
                  ) : (
                    <span />
                  )}
                  <span className={styles.readMore}>
                    Read
                    <span className={styles.arrow}>→</span>
                  </span>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
