"use client"
import {IssuesToolBar} from "@/components/IssuesContainer/IssuesToolbar/IssuesToolBar";
// import IssuesTable from "@/components/IssuesContainer/IssuesTable/IssuesTable";
import {lazy} from "react";

const IssuesTable = lazy(() => import("./IssuesTable/IssuesTable"))

// const IssuesTable = dynamic(() => import("./IssuesTable/IssuesTable"), {ssr: false})

export function IssuesContainer() {
    const suspenseKey = crypto.randomUUID();
    return (
        <div className="mt-3 flex justify-center items-center">
            <div className="flex-row w-3/4 space-y-4">
                <IssuesToolBar/>
                <IssuesTable/>
            </div>
        </div>
    )
}