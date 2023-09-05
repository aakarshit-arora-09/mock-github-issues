"use client"
import {IssuesHeader} from "@/components/IssuesContainer/IssuesTable/IssuesHeader";
import {LoadingSpinner} from "@/components/LoadingSpinner/LoadingSpinner";

export function IssuesTableFallback() {
    return (
        <div className="rounded border-solid border-2 border-gray-100 flex-col">
            <IssuesHeader
                setIssuesType={() => {
                }}
                issuesType={"open"}
                issuesCount={{open: 0, closed: 0}}
                setCurrentPage={() => {
                }}
            />
            <div className="flex items-center justify-center h-screen">
                <LoadingSpinner/>
            </div>
        </div>
    )
}