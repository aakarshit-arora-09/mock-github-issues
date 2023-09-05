import {CloseButton, OpenButton} from "@/components/IssuesContainer/Icons";
import {Action, issuesCount} from "@/components/IssuesContainer/types";
import {Dispatch, startTransition} from "react";

function IssueHeaderButton({title}: { title: string }) {
    return (<button className="text-sm text-slate-500 hover:text-black">{title}</button>)
}

export function IssuesHeader({issuesType, setIssuesType, issuesCount, setCurrentPage}: { issuesType: string, setIssuesType: (value: string) => void, issuesCount: issuesCount, setCurrentPage: Dispatch<Action> }) {
    const issueHeaderButtonTitles = ["Author", "Label", "Projects", "Milestones", "Assignee", "Sort"]
    return (
        <div className="bg-slate-100 flex justify-between p-4 rounded w-full ">
            <div className="flex space-x-3">
                <div
                    onClick={() => {
                        startTransition(() => {
                            setIssuesType("open")
                            setCurrentPage({type: "SPECIFIC_PAGE", newPageNumber: 1})
                        })
                    }}
                    className={`flex items-center space-x-2 hover:cursor-pointer ${issuesType === "open" && "font-bold"}`}>
                    <OpenButton/>
                    <span className="text-sm">{issuesCount.open} Open</span>
                </div>
                <div
                    onClick={() => {
                        startTransition(() => {
                            setIssuesType("closed")
                            setCurrentPage({type: "SPECIFIC_PAGE", newPageNumber: 1})
                        })
                    }}

                    className={`flex items-center space-x-2 hover:cursor-pointer ${issuesType === "closed" && "font-bold"}`}>
                    <CloseButton/>
                    <span className="text-sm">{issuesCount.closed} Closed</span>
                </div>
            </div>
            <div className="flex space-x-6">
                {
                    issueHeaderButtonTitles.map((issueButton) =>
                        <IssueHeaderButton key={issueButton} title={issueButton}/>)
                }
            </div>
        </div>
    )
}