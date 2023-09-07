"use client"
import {IssuesHeader} from "@/components/IssuesContainer/IssuesTable/IssuesHeader";
import {IssuesList} from "@/components/IssuesContainer/IssuesTable/IssuesList";
import {useReducer, useState} from "react";
import {IssuesPagination} from "@/components/IssuesContainer/IssuesTable/IssuesPagination";
import {Action, CurrentPageState} from "@/components/IssuesContainer/types";
import {useQuery} from "@apollo/client";
import {IssuesTableFallback} from "@/components/IssuesContainer/IssuesTable/IssuesTableFallback";
import {getIssues} from "@/queries";

function pageNumberReducer(prevState: CurrentPageState, action: Action): CurrentPageState {
    switch (action.type) {
        case "NEXT":
            return {...prevState, currentPage: prevState.currentPage + 1, after: action.after, before: null}
        case "PREVIOUS":
            return {...prevState, currentPage: prevState.currentPage - 1, before: action.before, after: null}
        case "SPECIFIC_PAGE":
            return {...prevState, currentPage: action.newPageNumber}
    }
}

export default function IssuesTable() {

    const [issuesType, setIssuesType] = useState(() => "open")
    const [currentPageState, pageDispatch] = useReducer(pageNumberReducer, {currentPage: 1, before: null, after: null});

    const {data, loading, error} = useQuery(getIssues, {
        variables: {
            issueState: issuesType === "open" ? "OPEN" : "CLOSED",
            after: currentPageState.after,
            before: currentPageState.before,
            first: currentPageState.after ? 30 : currentPageState.before ? null : 30,
            last: currentPageState.before ? 30 : null,
        }
    })


    const [issueCount, setIssueCount] = useState({open: null, closed: null})
    const openIssueCount = (data?.repository.openIssueCounts.totalCount)
    const closedIssueCount = (data?.repository.closedIssueCounts.totalCount)
    const itemsPerPage: number = 30
    const totalPages = issuesType === "open" ? Math.trunc(openIssueCount / itemsPerPage + 1) : Math.trunc(closedIssueCount / itemsPerPage + 1)
    if (data && !issueCount.open) {
        setIssueCount({
            open: data.repository.openIssueCounts.totalCount,
            closed: data.repository.closedIssueCounts.totalCount
        })
    }
    console.log(issueCount)
    if (!loading)
        return (
            <div className="flex-col">
                <div className="border-solid border-2 border-gray-100 rounded ">
                    <IssuesHeader setIssuesType={setIssuesType} issuesType={issuesType}
                                  issuesCount={{open: openIssueCount, closed: closedIssueCount}}
                                  setCurrentPage={pageDispatch}/>
                    <IssuesList issuesData={data.repository.issues.edges} issuesType={issuesType}/>
                </div>
                <IssuesPagination currentPage={currentPageState.currentPage} totalPages={totalPages}
                                  onPageChange={pageDispatch} pageInfo={data.repository.issues.pageInfo}/>
            </div>
        )
    else
        return <IssuesTableFallback openIssueCount={issueCount.open}
                                    closedIssueCount={issueCount.closed}></IssuesTableFallback>
}