import {gql} from "@apollo/client";

export const getIssues = gql`
    query GetIssues($issueState:[IssueState!],$after:String,$before:String,$first:Int,$last:Int){
        repository(owner:"facebook", name:"react") {
            issues(states:$issueState,first:$first,last:$last,orderBy:{direction:DESC,field:CREATED_AT},after:$after,before:$before) {
                edges {
                    node {
                        id
                        title
                        state
                        number
                        createdAt
                        author{
                            login
                        }
                        labels(first:5) {
                            edges {
                                node {
                                    name
                                    id
                                }
                            }
                        }
                    }
                }
                pageInfo {
                    startCursor
                    endCursor
                    hasNextPage
                    hasPreviousPage
                }
            },
            openIssueCounts: issues(states: [OPEN]) {
                totalCount
            }
            closedIssueCounts: issues(states: [CLOSED]) {
                totalCount
            }

        }
    }`