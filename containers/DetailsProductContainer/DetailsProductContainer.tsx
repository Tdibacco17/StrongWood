import DetailsProductComponent from "@/components/DetailsProductComponent/DetailsProductComponent";
import { DesignDetailContext } from "@/context/DesignDetailProvider";
import { DesignDataContextInterface } from "@/types/Interfaces";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

export default function DetailsProductContainer() {
    const router = useRouter();

    const { handleDesignDataChange } = useContext(
        DesignDetailContext
    ) as DesignDataContextInterface;

    useEffect(() => {
        if (router.query.slug) {
            const fetchData = async () => {
                if (handleDesignDataChange) {
                    const rawData = await fetch(
                        `/api/products/getProductBySlug?slug=${router.query.slug}`
                    );
                    const parsedData = await rawData.json();
                    if (parsedData.error) {
                        return;
                    }

                    handleDesignDataChange &&
                        handleDesignDataChange(parsedData.data);
                }
            };
            fetchData();
        }
    }, [router.query]);

    return <DetailsProductComponent />
}