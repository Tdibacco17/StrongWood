import Image from "next/image"
import styles from "./DesignCardCategorieComponent.module.scss"
import { useState } from "react";
import { DesignInterface } from "@/types/Interfaces";
import { useRouter } from "next/router";

export default function DesignCardCategorieComponent({
    designCategorie
}: {
    designCategorie: DesignInterface
}) {
    const router = useRouter()

    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className={styles["container-outer-image"]}
            data-id={`${designCategorie.designSlug}`}
            onClick={() => { router.push(`/design/${designCategorie.designSlug}`) }}>
            {
                !imageLoaded && (
                    <div className={styles["container-inner-placeholder"]}>
                        Cargando...
                    </div>
                )
            }
            <div className={imageLoaded ? styles["container-inner-image"] : ""}>
                <Image
                    src={`${designCategorie.image.imgSrc}`}
                    alt={`${designCategorie.image.imgAlt}`}
                    fill
                    loading="lazy"
                    onLoadingComplete={() => { setImageLoaded(true) }}
                    style={{ opacity: imageLoaded ? "1" : "0" }}
                />
            </div>
            <div className={styles["container-overlay-image"]}>
                <h2 className={styles["title-overlay"]}>{designCategorie.title}</h2>
            </div>
            <style jsx>{`
                .${styles["container-outer-image"]} {
                    --design-card-image-proportion: calc((var(--design-card-inner-height)) * ${designCategorie.image.imgProportionsX});
                }
            `}</style>
        </div>
    )
}