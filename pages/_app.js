import "@/styles/globals.css";

import { useState } from "react";
import { useEffect } from "react";

const url = "api/places";

export default function App({ Component, pageProps }) {
  const [idToEdit, setIdToEdit] = useState("id");
  const [isEditMode, setIsEditMode] = useState(false);
  const [places, setPlaces] = useState([]);

  async function getPlaces() {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setPlaces(data);
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  }

  useEffect(() => {
    console.log("useEffect");
    getPlaces();
  }, [idToEdit]);

  console.log("place before html return", places);
  return (
    <Component
      {...pageProps}
      places={places}
      setIdToEdit={setIdToEdit}
      setIsEditMode={setIsEditMode}
      idToEdit={idToEdit}
      isEditMode={isEditMode}
    />
  );
}
