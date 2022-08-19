import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "./ClientConfig";

export const useAxios = (url, method, payload) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const controllerRef = useRef(new AbortController());
  const cancel = () => {
    controllerRef.current.abort();
  };
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.request({
          data: payload,
          signal: controllerRef.current.signal,
          method,
          url: BASE_URL + url,
        });
        setData(response.data);
      } catch (error) {
        setError(error.status);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);
  return { cancel, data, error, loaded };
};