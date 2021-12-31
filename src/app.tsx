import LogoSVG from "@src/assets/Logo.svg";
import ThemeChanger from "@src/components/ThemeChanger/themeChanger";
import "@src/styles/index.scss";
import HomeView from "@src/views/home";
import NoteView from "@src/views/note";
import NotesView from "@src/views/notes";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { store } from "./store/store";

function App() {
  return (
    <Router>
        <Provider store={store}>
          <ThemeChanger />
          <div className="wrapper">
            <h1 className="title">
              <img src={LogoSVG} alt="Logo" />
            </h1>
            <div className="container">
              <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="notes" element={<NotesView />} />
                <Route path="notes/:id" element={<NoteView />} />
              </Routes>
            </div>
          </div>
        </Provider>
    </Router>
  );
}

export default App;
