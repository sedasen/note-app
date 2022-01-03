/// <reference types="vite/client" />

declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}

declare namespace NoteApp {
  type Theme = "light" | "dark";

  interface Document {
    title: string;
    color: string;
    noteLines: string[];
  }
}
