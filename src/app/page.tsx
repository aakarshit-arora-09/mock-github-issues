import {Footer} from "@/components/Footer/Footer";
import {Navbar} from "@/components/Navbar/Navbar";
import {IssuesContainer} from "@/components/IssuesContainer/IssuesContainer";
import {ApolloProviderwithClient} from "@/Utils/ApolloProviderWithClient";

export default function Home() {
    return (
        <ApolloProviderwithClient>
            <Navbar/>
            <IssuesContainer/>
            <Footer/>
        </ApolloProviderwithClient>
    )
}
