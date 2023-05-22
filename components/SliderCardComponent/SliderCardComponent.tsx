import Image from "next/image";
import styles from "./SliderCardComponent.module.scss";
import useImageLoading from "@/utils/img/useImageLoading";

export default function SliderCardComponent({
    imgSrc,
    imgAlt,
    imgProportionsX,
    imgProportionsY
}: {
    imgSrc: string;
    imgAlt: string;
    imgProportionsX?: number;
    imgProportionsY?: number;
}) {

    const imageUrl = imgSrc && imgSrc;
    const loading = useImageLoading(imageUrl);
    
    return (
        <div className={styles["container-outer-image"]} >
            {loading && (
                <div className={styles["container-inner-placeholder"]}>
                    Cargando...
                </div>
            )}
            {!loading && imgSrc && (
                <div className={styles["container-inner-image"]}>
                    <Image
                        src={imgSrc}
                        alt={imgAlt}
                        fill
                        priority
                    />
                </div>
            )}
            <div className={styles["container-overlay-image"]} />
            {/* <style jsx>{`
                .${styles["container-outer-image"]} {
                    --banner-proportion-height:calc((var(--banner-image-outer-width)) * ${imgProportionsY});
                    --banner-proportion-width: calc(100vh * ${imgProportionsX});

                    min-height: var(--banner-image-outer-height);
                    max-height: var(--banner-image-outer-height);
                    min-width: var(--banner-image-outer-width);
                    max-width: var(--banner-image-outer-width);
                    .${styles["container-inner-image"]} {
                        min-height: var(--banner-proportion-height);
                        max-height: var(--banner-proportion-height);
                        min-width: var(--banner-image-outer-width);
                        max-width: var(--banner-image-outer-width);
                    }
                }
                @media (max-width: 1100px) {
                    .${styles["container-outer-image"]} {
                        min-height: var(--banner-proportion-height);
                        max-height: var(--banner-proportion-height);
                        min-width: var(--banner-image-outer-width);
                        max-width: var(--banner-image-outer-width);
                    }
                }
                @media (max-width: 768px) {
                    .${styles["container-outer-image"]} {
                        min-height: 100vh;
                        max-height: 100vh;
                        min-width: var(--banner-image-outer-width);
                        max-width: var(--banner-image-outer-width);
                        .${styles["container-inner-image"]} {
                            min-height: 100vh;
                            max-height: 100vh;
                            min-width: var(--banner-proportion-width);
                            max-width: var(--banner-proportion-width);
                        }
                    }
                }
                `}</style> */}
        </div>
    );
}