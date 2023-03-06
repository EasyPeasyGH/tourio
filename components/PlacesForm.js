import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

export default function PlacesForm({
  places,
  idToEdit,
  isEditMode,
  setIsEditMode,
}) {
  console.log("idToEdit", idToEdit, isEditMode);
  const router = useRouter();

  // document.getElementById("name").focus();

  const [place, setPlace] = useState(
    places.filter((p) => {
      console.log("id check", p._id, idToEdit, p._id === idToEdit);
      if (p._id === idToEdit) {
        return p;
      }
    })
  );

  async function getPlace() {
    try {
      const res = await fetch(`api/places/${idToEdit}`);
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
  }, [idToEdit]);

  async function handleAddPlace(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const placeData = Object.fromEntries(formData);

    const res = await fetch("/api/places", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(placeData),
    });

    if (res.ok) {
      await res.json();
      event.target.reset();
      router.push("/");
    } else {
      console.error(response.status);
    }
  }

  async function handleEditPlace(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const placeData = Object.fromEntries(formData);

    console.log("hello edit", placeData);
  }

  return (
    <>
      <form
        onSubmit={(event) => {
          if (isEditMode === false) {
            handleAddPlace(event);
          } else {
            handleEditPlace(event);
          }
        }}
      >
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            value={isEditMode ? `${place.name}` : ""}
            onChange={(event) => setPlace(event.target.value)}
          />
        </label>
        <label htmlFor="image">
          Image:
          <input
            type="text"
            id="image"
            name="image"
            value={isEditMode ? `${place.image}` : ""}
            onChange={(event) => setPlace(event.target.value)}
          />
        </label>
        <label htmlFor="location">
          Location:
          <input
            type="text"
            id="location"
            name="location"
            value={isEditMode ? `${place.location}` : ""}
            onChange={(event) => setPlace(event.target.value)}
          />
        </label>
        <label htmlFor="map">
          MapURL:
          <input
            type="text"
            id="map"
            name="map"
            value={isEditMode ? `${place.mapURL}` : ""}
            onChange={(event) => setPlace(event.target.value)}
          />
        </label>
        <label htmlFor="description">
          Description:
          <input
            type="text"
            id="description"
            name="description"
            value={isEditMode ? `${place.description}` : ""}
            onChange={(event) => setPlace(event.target.value)}
          />
        </label>
        <button className="appButton" type="submit">
          {isEditMode ? "Edit place" : "Add new"}
        </button>
      </form>
    </>
  );
}
