import Image from 'next/image'
import {Footer} from "@/components/Footer/Footer";
import {Navbar} from "@/components/Navbar/Navbar";
import {IssuesContainer} from "@/components/IssuesContainer/IssuesContainer";

export default function Home() {
  return (
    <>
      <Navbar/>
        <IssuesContainer/>
        <Footer/>
    </>
  )
}
