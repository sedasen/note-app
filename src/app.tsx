import LogoSVGDark from "@src/assets/LogoDark.svg";
import LogoSVGLight from "@src/assets/LogoLight.svg";
import ThemeChanger from "@src/components/ThemeChanger/ThemeChanger";
import HomePage from "@src/pages/home";
import NotePage from "@src/pages/note";
import { Route, Routes } from "react-router-dom";
import AppWrapper from "./app.wrapper";
import { useCurrentNote } from "@src/hooks/useCurrentNote.hook";
import { useTheme } from "@src/hooks/useTheme.hook";
import "@src/styles/index.scss";

function App() {
  const noteDocument = useCurrentNote();
  const currentTheme = useTheme();

  return (
    <>
      <ThemeChanger />

      <div className="wrapper">
        <h1 className="title">
          {!noteDocument && (
            <img
              src={currentTheme === "dark" ? LogoSVGDark : LogoSVGLight}
              alt={currentTheme}
            />
          )}
          {!!noteDocument && noteDocument.title}
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
