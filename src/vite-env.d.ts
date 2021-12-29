/// <reference types="vite/client" />

declare namespace NoteApp {
  enum ColorName {
    RED = "red",
    ORANGE = "orange",
    BLUE = "blue",
    YELLOW = "yellow",
    PURPLE = "purple",
    GREEN = "green",
    WHITE = "white",
  }

  interface Document {
    title: string;
    color: string;
    noteLines: string[];
  }
}
