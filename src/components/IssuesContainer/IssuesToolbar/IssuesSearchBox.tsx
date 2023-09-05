export function IssuesSearchBox() {
    return (
        <div className="border-solid border-2 border-gray-200 flex rounded w-3/5">
            <input className="bg-slate-50  w-full h-8 rounded p-2 placeholder:text-xs"
                   placeholder={"is:issue is:open"}/>
        </div>
    )
}