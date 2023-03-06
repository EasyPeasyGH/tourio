import { useRouter } from "next/router";

export default function PlacesForm({ places }) {
  console.log("placesList", places);
  const router = useRouter();

  // document.getElementById("name").focus();

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

  return (
    <>
      <form
        onSubmit={(event) => {
          handleAddPlace(event);
        }}
      >
        <label htmlFor="name">
          Name:
          <input type="text" id="name" name="name" />
        </label>
        <label htmlFor="image">
          Image:
          <input type="text" id="image" name="image" />
        </label>
        <label htmlFor="location">
          Location:
          <input type="text" id="location" name="location" />
        </label>
        <label htmlFor="map">
          MapURL:
          <input type="text" id="map" name="map" />
        </label>
        <label htmlFor="description">
          Description:
          <input type="text" id="description" name="description" />
        </label>
        <button className="appButton" type="submit">
          Create
        </button>
      </form>
    </>
  );
}
