import React from "react";

export function usePathName() {
  const observer = React.useRef<MutationObserver | null>(null);
  const oldPathName = React.useRef(document.location.pathname);
  const [pathName, setPathName] = React.useState(document.location.pathname);

  React.useEffect(() => {
    observer.current = new MutationObserver(() => {
      const currentPathName = document.location.pathname;
      if (oldPathName.current != currentPathName) {
        setPathName(currentPathName);
        oldPathName.current = currentPathName;
      }
    });
    observer.current.observe(document.querySelector("body")!, {
      childList: true,
      subtree: true,
    });
    return () => {
      observer.current?.disconnect();
      observer.current = null;
    };
  }, []);

  return pathName;
}

export function usePathNames() {
  const pathName = usePathName();
  const matcher = /(\/?(?<pathname>.+))(\?(?<query>.*))?/.exec(pathName);
  const pathnames = matcher?.groups?.["pathname"]?.split(/\//);
  return pathnames || [];
}
