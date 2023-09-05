"use client"
import {IssuesHeader} from "@/components/IssuesContainer/IssuesTable/IssuesHeader";
import {IssuesList} from "@/components/IssuesContainer/IssuesTable/IssuesList";
import {Suspense, useReducer, useState} from "react";
import {IssuesPagination} from "@/components/IssuesContainer/IssuesTable/IssuesPagination";
import useSWR from "swr";
import {Action, CurrentPageState, issuesData} from "@/components/IssuesContainer/types";
import {ErrorBoundary} from "@/components/ErrorBoundary/ErrorBoundary";
import {IssuesTableFallback} from "@/components/IssuesContainer/IssuesTable/IssuesTableFallback";


function pageNumberReducer(prevState: CurrentPageState, action: Action): CurrentPageState {
    switch (action.type) {
        case "NEXT":
            return {...prevState, currentPage: prevState.currentPage + 1}
        case "PREVIOUS":
            return {...prevState, currentPage: prevState.currentPage - 1}
        case "SPECIFIC_PAGE":
            return {...prevState, currentPage: action.newPageNumber}
    }
}

const config = {
    headers: {
        Authorization: "Bearer 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"
    }
}

const fetcher = (...args: Parameters<typeof fetch>) => fetch(args[0], config).then((res) => res.json());

const issuesFallbackData: issuesData = [{
    state: "open",
    title: "fallback",
    number: 0,
    user: {login: "fallback"},
    id: 0,
    created_at: "0",
    labels: [{color: "black", name: " ", id: 0}]
}]


const openIssuesFallbackData = {
    data: {
        total_count: 0
    }
}
const closedIssuesFallbackData = {
    data: {
        total_count: 0
    }
}

export default function IssuesTable() {

    const [issuesType, setIssuesType] = useState(() => "open")
    const [currentPageState, pageDispatch] = useReducer(pageNumberReducer, {currentPage: 1});

    const issuesDataResponse = useSWR(`https://api.github.com/repos/facebook/react/issues?state=${issuesType}&page=${currentPageState.currentPage}`, fetcher, {});
    const openIssuesResponse = useSWR(`https://api.github.com/search/issues?q=repo:facebook/react+type:issue+state:open&per_page=1`, fetcher,);
    const closedIssuesResponse = useSWR(`https://api.github.com/search/issues?q=repo:facebook/react+type:issue+state:closed&per_page=1`, fetcher,);

    const issuesData: issuesData = issuesDataResponse.data

    const openIssueCount = openIssuesResponse.data.total_count
    const closedIssueCount = closedIssuesResponse.data.total_count
    const itemsPerPage: number = 30
    const totalPages = issuesType === "open" ? Math.trunc(openIssueCount / itemsPerPage + 1) : Math.trunc(closedIssueCount / itemsPerPage + 1)

    return (
        <ErrorBoundary>
            <Suspense fallback={<IssuesTableFallback/>}>

                <div className="flex-col">
                    <div className="border-solid border-2 border-gray-100 rounded ">
                        <IssuesHeader setIssuesType={setIssuesType} issuesType={issuesType}
                                      issuesCount={{open: openIssueCount, closed: closedIssueCount}}
                                      setCurrentPage={pageDispatch}/>
                        <IssuesList issuesData={issuesData} issuesType={issuesType}/>
                    </div>

                    <IssuesPagination currentPage={currentPageState.currentPage} totalPages={totalPages}
                                      onPageChange={pageDispatch}/>
                </div>
            </Suspense>
        </ErrorBoundary>
    )
}