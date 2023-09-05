export function OpenButton({fill}: { fill?: string }) {
    return (
        <svg aria-hidden="true" className={`h-4 w-4 fill-${fill}-500`} viewBox="0 0 16 16" version="1.1"
             data-view-component="true">
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
            <path
                d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
        </svg>
    )
}

export function CloseButton({fill}: { fill?: string }) {
    return (
        <svg aria-hidden="true" className={`h-4 w-4 fill-${fill}-500 `} viewBox="0 0 16 16" version="1.1"
             data-view-component="true">
            <path
                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
        </svg>
    )
}

export function ClosedIssueIcon({fill}: { fill?: string }) {
    return (
        <svg className={`h-4 w-4 fill-${fill}-500`} viewBox="0 0 16 16" version="1.1" width="16"
             height="16"
             aria-hidden="true">
            <path
                d="M11.28 6.78a.75.75 0 0 0-1.06-1.06L7.25 8.69 5.78 7.22a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l3.5-3.5Z"></path>
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-1.5 0a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z"></path>
        </svg>)
}