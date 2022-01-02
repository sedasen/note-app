import React from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { ReactComponent as MoonSVG } from "@src/assets/emojis/moon.svg";
import { ReactComponent as SunSVG } from "@src/assets/emojis/sun.svg";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "@src/store/store";
import { actions as ThemeActions } from "@src/store/duck/theme.duck";
import "./theme-changer.scss";

const mapStateToProps = (state: RootState) => ({
  theme: state.theme.type,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  switchTheme: () => dispatch(ThemeActions.switchTheme()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & {};

/* ------------------------- */

const ThemeChanger = (props: Props) => {
  return (
    <button className="theme-changer" onClick={props.switchTheme}>
      {props.theme === "dark" && <MoonSVG />}
      {props.theme === "light" && <SunSVG />}
    </button>
  );
};

export default connector(ThemeChanger);
