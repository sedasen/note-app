import { useSelector } from "react-redux";
import { RootState } from "@src/store/store";

export function useTheme() {
  const store = useSelector((state: RootState) => ({
    theme: state.theme.type,
  }));

  return store.theme || "dark";
}
