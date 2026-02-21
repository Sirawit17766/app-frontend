import { useState } from "react";
import axios from "axios";
import "./api.css";
import JsonViewer from "./jsonviewer";

export default function ApiTester() {
  const [method, setMethod] = useState("GET");
  const [baseUrl, setBaseUrl] = useState(
    "https://jsonplaceholder.typicode.com"
  );
  const [path, setPath] = useState("/todos/2");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const callApi = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await axios({
        method,
        url: `${baseUrl}${path}`,
      });
      setResponse(res.data);
    } catch (err) {
      setError(
        err.response ? err.response.data : err.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="api-tester">
      <div className="api-form">
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>

        <input
          className="input"
          placeholder="https://api.example.com"
          value={baseUrl}
          onChange={(e) => setBaseUrl(e.target.value)}
        />

        <input
          className="input"
          placeholder="/endpoint/path"
          value={path}
          onChange={(e) => setPath(e.target.value)}
        />

        <button onClick={callApi} disabled={loading}>
          {loading ? "Calling..." : "Call API"}
        </button>
      </div>

      <div className="api-response">
        {error && (
          <pre className="error">
            {JSON.stringify(error, null, 2)}
          </pre>
        )}

        {response && <JsonViewer data={response} />}
      </div>
    </div>
  );
}