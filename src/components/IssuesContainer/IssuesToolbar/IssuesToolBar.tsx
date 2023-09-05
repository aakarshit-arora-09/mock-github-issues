import {IssuesSearchBox} from "@/components/IssuesContainer/IssuesToolbar/IssuesSearchBox";
import {ButtonGroup} from "@/components/IssuesContainer/IssuesToolbar/ButtonGroup";
import {NewIssueButton} from "@/components/IssuesContainer/IssuesToolbar/NewIssueButton";

export function IssuesToolBar() {
    return (
        <div className="flex space-x-4 justify-between">
            <IssuesSearchBox/>
            <ButtonGroup/>
            <NewIssueButton/>
        </div>
    )
}