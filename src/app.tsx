import LogoSVG from "@src/assets/Logo.svg";
import ThemeChanger from "@src/components/ThemeChanger/ThemeChanger";
import HomePage from "@src/pages/home";
import NotePage from "@src/pages/note";
import { Route, Routes } from "react-router-dom";
import AppWrapper from "./app.wrapper";
import { useCurrentNote } from "./hooks/useCurrentNote.hook";
import "@src/styles/index.scss";

function App() {
  const noteDocument = useCurrentNote();

  return (
    <>
      <ThemeChanger />

      <div className="wrapper">
        <h1 className="title">
          {/* TODO: @Yasin, make logo reactive to the state */}
          <img src={LogoSVG} alt="Logo" />
        </h1>

        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default AppWrapper(App);
