"use client"
import {SWRConfig} from 'swr'
import {ReactNode} from "react";

// export async function getStaticProps() {
//     const issuesResponse = await fetch("https://api.github.com/repos/facebook/react/issues?state=open&page=1");
//     const issuesData = await issuesResponse.json();
//     const openIssuesResponse = await fetch("https://api.github.com/search/issues?q=repo:facebook/react+type:issue+state:open&per_page=1");
//     const openIssueCount = await openIssuesResponse.json();
//     const closedIssuesResponse = await fetch("https://api.github.com/search/issues?q=repo:facebook/react+type:issue+state:closed&per_page=1");
//     const closeIssueCount = await closedIssuesResponse.json();
//     console.log("issues", issuesData);
//     return {
//         props: {
//             fallback: {
//                 'https://api.github.com/repos/facebook/react/issues?state=open&page=1': {data: 10},
//                 "https://api.github.com/search/issues?q=repo:facebook/react+type:issue+state:open&per_page=1": {data: 20},
//                 "https://api.github.com/search/issues?q=repo:facebook/react+type:issue+state:closed&per_page=1": {data: 30},
//             }
//         }
//     }
// }

export const SWRProvider = ({children}: { children: ReactNode }) => {
    return <SWRConfig value={{suspense: true,}}>{children}</SWRConfig>
};
