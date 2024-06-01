import EnterPage from "@/app/Animations/EnterPage";
import Hero from "@/app/layouts/Hero";
import Nav from "@/app/layouts/Nav";

export default function Home() {
  return (
    <>
      <EnterPage />
      <main>
        <Nav />
        <Hero />
      </main>
    </>
  );
}
