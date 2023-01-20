import Header from "../src/components/Header";
import Footer from "./components/Footer";
import LandingBanner from "./components/LandingBanner";
import NewRecipesPage from "./components/NewRecipesPage";

function App() {
  return (
    <div style={{height: 1000}}>
      <Header />
      <LandingBanner />
      <NewRecipesPage />
      <Footer />
    </div>
  );
}

export default App;
