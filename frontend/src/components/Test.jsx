import { useEffect, useState } from "react";
import { test } from "../services/test";

function Test() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const testBackend = async () => {
      const result = await test.test();
      if (result.success) setMessage(result.data.test);
    };
    testBackend();
  }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Test;