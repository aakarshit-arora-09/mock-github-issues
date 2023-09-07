"use client"
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {ReactNode} from "react";
import {loadDevMessages, loadErrorMessages} from "@apollo/client/dev";
import {__DEV__} from "@apollo/client/utilities/globals";

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, {headers}) => {
    // get the authentication token from local storage if it exists
    const token = "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"
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export const ApolloProviderwithClient = ({children}: { children: ReactNode }) => {

    if (__DEV__) {  // Adds messages only in a dev environment
        loadDevMessages();
        loadErrorMessages();
    }
    return (
        <ApolloProvider client={client}>{children}</ApolloProvider>
    )
}
