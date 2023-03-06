import Head from "next/head";
import { Inter } from "next/font/google";

import PlacesList from "@/components/PlacesList";

import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ places, isEditMode }) {
  return (
    <>
      <Head>
        <title>Tourio - Places</title>
        <meta name="description" content="Tourio - Places next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h2>Tourio - Places</h2>
      </header>
      <main>
        <PlacesList places={places} />
        <Link
          className="appButton--fixed"
          href="/create"
          onClick={(isEditMode = false)}
        >
          Add +
        </Link>
      </main>
    </>
  );
}
