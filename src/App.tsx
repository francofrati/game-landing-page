import Footer from "./components/footer/footer";
import ForestSection from "./components/forestSection/forestSection";
import PlayGameSection from "./components/playGameSection/playGameSection";
import TopSection from "./components/topSection/topSection";

function App() {
  return (
    <div id="app">
      <main>
        <TopSection />
        <ForestSection />
        <PlayGameSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
