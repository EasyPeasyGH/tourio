import { useRouter } from "next/router";
import Card from "./Card";

export default function PlacesList({ places }) {
  console.log("placesList", places);
  const router = useRouter();

  return (
    <>
      <ul>
        {places.map((p) => (
          <li key={p._id}>
            <Card
              id={p._id}
              name={p.name}
              loc={p.location}
              src={p.image}
              map={p.mapURL}
              des={p.description}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
