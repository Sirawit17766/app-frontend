import { prettyJson } from "./prettyjson";
import "./jsonviewer.css";

export default function JsonViewer({ data }) {
  if (!data) return null;

  return (
    <pre
      className="json-viewer"
      dangerouslySetInnerHTML={{
        __html: prettyJson(data),
      }}
    />
  );
}