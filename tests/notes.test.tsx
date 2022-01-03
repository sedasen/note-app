import React from "react";
import { expect } from "chai";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";

import App from "@src/app";
import HomePage from "@src/pages/home";
import { store } from "@src/store/store";
import { MemoryRouter, Router } from "react-router";
import { Provider } from "react-redux";
import { actions as NoteActions } from "@src/store/duck/notes.duck";

// @ts-ignore
Enzyme.configure({ adapter: new Adapter() });

describe("note-documents", () => {
  it("should be able to create new documents", () => {
    const wrapper = Enzyme.mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <HomePage />
        </MemoryRouter>
      </Provider>
    );

    const blankslate = wrapper.find("main.main").childAt(0).text();
    expect(blankslate).to.be.not.empty;

    expect(store.getState().notes.documents.length).to.equal(0);

    const newNoteButton = wrapper.find("footer.actions > button");
    newNoteButton.simulate("click");

    expect(store.getState().notes.documents.length).to.equal(1);
    expect(store.getState().notes.documents[0].title).to.equal(
      "İsimsiz Not Kağıdı"
    );
  });
});
