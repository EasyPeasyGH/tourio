import { useRouter } from "next/router";
import Card from "@/components/Card";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { useEffect } from "react";

export default function Place({ places }) {
  const router = useRouter();
  const { id } = router.query;
  const { push } = useRouter();

  console.log(id);

  const [place, setPlace] = useState(
    places.filter((p) => {
      console.log("id check", p._id, id, p._id === id);
      if (p._id === id) {
        return p;
      }
    })
  );

  async function getPlace() {
    try {
      const res = await fetch(`api/places/${id}`);
      if (res.ok) {
        console.log("res ok");
        const data = await res.json();
        setPlace(data);
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  }

  useEffect(() => {
    console.log("useEffect");
    getPlace();
  }, []);

  async function handleDeletePlace(id) {
    const response = await fetch(`/api/places/${id}`, { method: "DELETE" });
    if (response.ok) {
      console.log("delete pressed + response OK", id);
      await response.json();
      push("/");
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  async function handleEditPlace(id) {
    console.log("id", id);
    idToEdit = id;
    const response = await fetch(`/api/places/${id}`, { method: "PUT" });
    if (response.ok) {
      console.log("edit pressed + response OK", id);
      await response.json();
      push("../create/");
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  console.log("place before html return", place);

  return (
    <>
      <Head>
        <title>Tourio - Place</title>
        <meta name="description" content="Tourio - Places next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h2>Tourio - Place</h2>
      </header>
      <main>
        <div className="placeDetail">
          <img src={place.image} alt={`Image for ${place.name}`} width="100%" />
          <div className="placeDetail__info">
            <h3>{place.name}</h3>

            <p>{place.description}</p>
            <Link
              className="appButton"
              href={`${place.mapURL}`}
              target="_blank"
            >
              Google Maps
            </Link>
          </div>
          <div className="placeDetail__editBar">
            <button
              className="appButton--edit"
              onClick={() => handleEditPlace(id)}
            >
              Edit
            </button>
            <button
              className="appButton--delete"
              onClick={() => handleDeletePlace(id)}
            >
              {" "}
              Delete
            </button>
          </div>
        </div>
        <Link className="appButton--back" href="/">
          Back
        </Link>
      </main>
    </>
  );
}
