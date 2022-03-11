/** @jsx h */
import { h, PageProps } from "../../client_deps.ts";
import DocumentationIsland from "../../islands/documentation.tsx";

export default function Documentation(props: PageProps) {
  return <DocumentationIsland file={props.params.name} />;
}
