import { useRouter } from "next/router";

export default function Card({ id, name, loc, src, map, des }) {
  const router = useRouter();

  return (
    <div className="card" onClick={() => router.push(`${id}`)}>
      <img src={src} alt={`Image for ${name}`} width="100%" />
      <h3>{name}</h3>
      <p>{`Location: ${loc}`}</p>
    </div>
  );
}
