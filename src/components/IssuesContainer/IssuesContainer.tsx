"use client"
import {IssuesToolBar} from "@/components/IssuesContainer/IssuesToolbar/IssuesToolBar";
// import IssuesTable from "@/components/IssuesContainer/IssuesTable/IssuesTable";
import {lazy, Suspense} from "react";
import {IssuesTableFallback} from "@/components/IssuesContainer/IssuesTable/IssuesTableFallback";
import {SWRProvider} from "@/components/SwrProvider";

const IssuesTable = lazy(() => import("./IssuesTable/IssuesTable"))

// const IssuesTable = dynamic(() => import("./IssuesTable/IssuesTable"), {ssr: false})

export function IssuesContainer() {
    const suspenseKey = crypto.randomUUID();
    return (
        <div className="mt-3 flex justify-center items-center">
            <div className="flex-row w-3/4 space-y-4">
                <SWRProvider>
                    <IssuesToolBar/>
                    <Suspense fallback={<IssuesTableFallback/>} key={suspenseKey}>
                        <IssuesTable/>
                    </Suspense>
                </SWRProvider>
            </div>
        </div>
    )
}