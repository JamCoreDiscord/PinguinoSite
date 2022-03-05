/** @jsx h */
import { h, useEffect } from "../client_deps.ts";

interface RedirectProps {
  link: string;
}

export default function Redirect({ link }: RedirectProps) {
  useEffect(() => {
    window.location.href = link;
  }, [link]);
  return <div></div>;
}
