'use client'
import FurnitureContainer from "@/containers/FurnitureContainer/FurnitureContainer";
import LayoutComponent from "@/layout/LayoutComponent";
import { useRouter } from "next/router";

import { CocinaNordica } from "@/models/furniture/cocina";
import { VanitoryNewYork } from "@/models/furniture/baño";
import { FurnitureTableInterface } from "@/types/Interfaces";

export default function FurnitureDetailPage() {

    const router = useRouter()
    const { slug, item } = router.query;

    let furnitureData: FurnitureTableInterface[];

    if (slug === "cocina") {
        furnitureData = CocinaNordica;
    } else if (slug === "baño") {
        furnitureData = VanitoryNewYork;
    } else {
        return (
            <></>
        )
    }

    return (
        <LayoutComponent isSlider={false} urlBack={`design/${slug}`}>
            <FurnitureContainer furnitureData={furnitureData} item={item as string} slug={slug as string} />
        </LayoutComponent>
    )
}