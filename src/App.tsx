import { Navbar, Footer } from "@/layout";
import { Hero, Services, Work, About, Contact } from "@/sections";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
