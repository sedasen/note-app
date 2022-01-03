import React from "react";
import AppWrapper from "./app.wrapper";

import LogoSVGDark from "@src/assets/LogoDark.svg";
import LogoSVGLight from "@src/assets/LogoLight.svg";
import ThemeChanger from "@src/components/ThemeChanger/ThemeChanger";
import HomePage from "@src/pages/home";
import NotePage from "@src/pages/note";
import { Route, Routes } from "react-router-dom";
import { useCurrentNote } from "@src/hooks/useCurrentNote.hook";
import { useTheme } from "@src/hooks/useTheme.hook";
import { updateThemeColors } from "./util/colors.util";
import "@src/styles/index.scss";

function App() {
  const noteDocument = useCurrentNote();
  const currentTheme = useTheme();

  // Update theme colors, when the theme changes
  React.useEffect(() => updateThemeColors(currentTheme), [currentTheme]);

  return (
    <>
      <div className="wrapper">
        <ThemeChanger />
        <h1 className="title">
          {!noteDocument.document && (
            <img
              src={currentTheme === "dark" ? LogoSVGDark : LogoSVGLight}
              alt={currentTheme}
            />
          )}
          {!!noteDocument && noteDocument.document?.title}
        </h1>

        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notes/:id" element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default AppWrapper(App);
