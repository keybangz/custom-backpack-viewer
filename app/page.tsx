import Image from "next/image";
import Navbar from './components/navbar'
import View from './components/view'
import Footer from './components/footer'

export default async function Home() {

  return (
    <main className="overflow-hidden overflow-x-hidden">
      <Navbar/>
      <View/>
      <Footer/>
    </main>
  );
}
