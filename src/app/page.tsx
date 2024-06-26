import PreLoader from "@/app/Animations/PreLoader";
import Nav from "@/app/layouts/Nav";
import Hero from "@/app/layouts/Hero";
import About from "@/app/layouts/About";
import NewHero from "@/app/layouts/NewHero";

export default function Home() {
  return (
    <>
      <PreLoader />
      <main>
        <Nav />
        <Hero/>
        <About/>
        <NewHero/>
      </main>
    </>
  );
}
