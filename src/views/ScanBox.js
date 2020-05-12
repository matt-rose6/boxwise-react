import React, { useState, useEffect } from "react";
import axios from "axios";

async function fetchData(authObject) {
  const result = await axios.get("http://localhost:5000/api/private", {
    headers: {
      Authorization: `Bearer ${authObject.access_token}`,
    },
  });
  return result;
}

function ScanBox({ authObject }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData(authObject).then((res) => {
      setData(res.data);
    });
  }, [authObject]);

  return (
    <div>
      <h2>Scan a box now:</h2>
      <p>{data.message}</p>
    </div>
  );
}

export { ScanBox, fetchData };
