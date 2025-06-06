import Navbar from "./components/navbar/Navbar";
import AppRoutes from "./routes";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <div dir="rtl" className="App">
        <Navbar />
        <AppRoutes />
        <Footer />
    </div>
  );
}

export default App;


