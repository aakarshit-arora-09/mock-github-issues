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
    currentPage: number,
    after: string | null,
    before: string | null,
}

export type Action = { type: "NEXT", after: string } | { type: "PREVIOUS", before: string } | {
    type: "SPECIFIC_PAGE",
    newPageNumber: number
}

export type Label = {
    name: string,
    color: string,
    id: number
}
