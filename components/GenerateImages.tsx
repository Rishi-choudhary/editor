'use client'

import styles from './GenerateImagesSection.module.css'

export default function GenerateImages() {
    // Images for the collage
    const collageImages = [
        '/generate_images/1.png',
        '/generate_images/2.png',
        '/generate_images/3.png',
        '/generate_images/4.png',
        '/generate_images/5.png',
        '/generate_images/6.png',
        '/generate_images/7.png',
        '/generate_images/8.png',
        '/generate_images/9.png',
        '/generate_images/10.png',
        '/generate_images/11.png',
    ]

    return (
        <section className={styles.giHero}>
            {/* 1. Background Layers */}
            <div className={styles.giBgLayer} />
            <div className={`${styles.giBlur} ${styles.giBlurLeft}`} />
            <div className={`${styles.giBlur} ${styles.giBlurCenter}`} />

            {/* 2. Right Face Image Layer (Absolute) */}
            <div className={styles.giFaceLayer} />

            {/* 3. Text Layer (Behind Grid) */}
            <div className={styles.giTextLayer}>
                <h1 className={styles.giTitle}>
                    GENERATE<br />IMAGES
                </h1>
            </div>

            {/* 4. Content Layer (Forefront) */}
            <div className={styles.giContentLayer}>
                {/* Image Grid */}
                <div className={styles.giGrid}>
                    {collageImages.map((src, i) => (
                        <div
                            key={src}
                            className={`${styles.giCard} ${styles[`giCard${i + 1}`]}`}
                            style={{ backgroundImage: `url(${src})` }}
                        />
                    ))}
                </div>

                {/* CTA Button (Centered relative to the grid/text view) */}
                <div className={styles.giCtaContainer}>
                    <button className={styles.giCta}>
                        TRY FOR FREE
                    </button>
                </div>
            </div>

            {/* 5. Overlay Layer (Vignette/Glow) */}
            <div className={styles.giOverlay} />
        </section>
    )
}
