export type issue = {
    state: string,
    title: string,
    number: number,
    user: { login: string },
    id: number
    created_at: string,
    labels: Label[]
}
export type issuesData = issue[]

export type issuesCount = {
    open: number,
    closed: number
}
export type CurrentPageState = {
    currentPage: number
}

export type Action = { type: "NEXT" } | { type: "PREVIOUS" } | { type: "SPECIFIC_PAGE", newPageNumber: number }

export type Label = {
    name: string,
    color: string,
    id: number
}
