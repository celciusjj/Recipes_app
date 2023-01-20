import Header from "../src/components/Header";
import Footer from "./components/Footer";
import LandingBanner from "./components/LandingBanner";
import NewRecipesPage from "./components/NewRecipesPage";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <Header />
      <LandingBanner />
      <NewRecipesPage />
      <Footer />
    </div>
  );
}

export default App;
