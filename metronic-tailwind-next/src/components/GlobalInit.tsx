import {useEffect} from "react";
import KTComponent from "../metronic/core";
import KTLayout from "../metronic/app/layouts/demo1";
import {usePathname} from "next/navigation";

export default function GlobalInit() {
    const pathname = usePathname();

    useEffect(() => {
        KTComponent.init();
        KTLayout.init();
    }, [pathname]);

    return <></>
}