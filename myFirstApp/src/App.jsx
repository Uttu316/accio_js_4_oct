import "./App.css";
import Feed from "./components/feed";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div id="app">
      <Sidebar />
      <Header />
      <Feed />
    </div>
  );
}

export default App;
