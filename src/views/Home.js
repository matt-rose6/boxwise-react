import React, { useState, useEffect } from "react";
import axios from "axios";

async function fetchData() {
  const result = await axios.get("http://localhost:5000/api/public");
  return result;
}

function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Welcome to boxwise, please log in</h2>
      <p>{data.message}</p>
    </div>
  );
}

export { Home, fetchData };
