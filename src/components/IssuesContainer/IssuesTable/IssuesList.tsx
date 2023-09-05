import {ClosedIssueIcon, OpenButton} from "@/components/IssuesContainer/Icons";
import {timeAgo} from "@/utils";
import {issuesData, Label} from "@/components/IssuesContainer/types";
import {LabelPill} from "@/components/LabelPill/LabelPill";

export function IssueElement({status, title, number, author, creationDate, labels}: { status: string, title: string, number: number, author: string, creationDate: string, labels: Label[] }) {
    const formattedDate = timeAgo(new Date(creationDate))
    console.log(title, labels)
    return (
        <div className="flex justify-between w-full items-center border-b-2 border-solid border-gray-100 p-3">
            <div className="flex items-center space-x-2">
                <div className="self-start">
                    {status === "closed" ? <ClosedIssueIcon fill="purple"/> : <OpenButton fill="green"/>}
                </div>
                <div className="self-start">
                    <div className="flex align-baseline space-x-2">
                        <div className="font-medium text-md whitespace-nowrap">
                            {title}
                        </div>
                        <div className="flex items-center space-x-2">
                            {labels.map((label, index) => index < 3 &&
                                <LabelPill key={label.id} name={label.name} color={label.color}/>)}
                        </div>
                    </div>

                    <div className="text-xs text-slate-500">
                        #{number} opened {formattedDate} by {author}
                    </div>
                </div>
            </div>

            <div>
                <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"
                     className="h-4 w-4 text-slate-500 fill-slate-500">
                    <path
                        d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                </svg>
            </div>
        </div>
    )
}

export function IssuesList({issuesType, issuesData}: { issuesType: string, issuesData: issuesData }) {
    return (
        <div className="flex-row justify-between rounded w-full ">

            {
                issuesData.map((issue) => <IssueElement key={issue.id}
                                                        status={issue.state}
                                                        title={issue.title}
                                                        number={issue.number}
                                                        author={issue.user.login}
                                                        creationDate={issue.created_at}
                                                        labels={issue.labels}/>)
            }
        </div>
    )
}