/** @jsx h */
import { h, useEffect, useState } from "../client_deps.ts";
import { BASE_URL } from "../constants.ts";

export interface Url {
  pretty: string;
  url: string;
  file: string;
}

export default function DocumentationList() {
  const [urls, setUrls] = useState(undefined as Url[] | undefined);
  useEffect(() => {
    fetch(`${BASE_URL}/api/documentations`).then((res) => {
      res.json().then((e) => {
        setUrls(e);
      });
    });
  }, []);

  if (urls) {
    return (
      <div>
        {
          <ul>
            {urls.map((url: Url) => (
              (
                <li key={url.url}>
                  <a href={`${BASE_URL}/documentation/${url.url}`}>
                    {url.pretty}
                  </a>
                </li>
              )
            ))}
          </ul>
        }
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
}
