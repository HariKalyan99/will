import Header from "../components/Header";
import Mainsection from "../components/Mainsection";
import WillStoreContextProvider from "../store/Willstore";
import "./App.css";

function App() {
  return (
    <WillStoreContextProvider>
      <Header />
      <Mainsection />
    </WillStoreContextProvider>
  );
}

export default App;
