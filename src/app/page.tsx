import EnterPage from "@/app/Animations/EnterPage";
import Nav from "@/app/layouts/Nav";
import Hero from "./layouts/Hero";

export default function Home() {
  return (
    <>
      <EnterPage />
      <main>
        <Nav />
        <Hero/>
      </main>
    </>
  );
}
