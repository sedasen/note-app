import React from "react";
import { expect } from "chai";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";

import App from "@src/app";
import { store } from "@src/store/store";
import ThemeChanger from "@src/components/ThemeChanger/ThemeChanger";
import { actions as ThemeActions } from "@src/store/duck/theme.duck";

// @ts-ignore
Enzyme.configure({ adapter: new Adapter() });

describe("theming-system", () => {
  it("should switch into correct state", () => {
    const wrapper = Enzyme.mount(<App />);
    const themeChanger = wrapper.find(ThemeChanger).childAt(0);

    const initialTheme = store.getState().theme.type;
    themeChanger.simulate("click");
    const changedTheme = store.getState().theme.type;

    expect(initialTheme).equal("dark");
    expect(changedTheme).equal("light");
  });

  it("should switch the logo", () => {
    const wrapper = Enzyme.mount(<App />);

    const initialLogo = wrapper.find("h1.title > img").props().src;

    store.dispatch(ThemeActions.switchTheme());
    wrapper.update();
    wrapper.render();

    const changedLogo = wrapper.find("h1.title > img").props().src;

    expect(changedLogo).not.equal(initialLogo);
  });
});
