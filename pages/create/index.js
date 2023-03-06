import Head from "next/head";

import PlacesForm from "@/components/PlacesForm";
import Link from "next/link";

export default function Create() {
  return (
    <>
      <Head>
        <title>Tourio - Create</title>
        <meta name="description" content="Tourio - Places next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h2>Tourio - Create</h2>
      </header>
      <main>
        <PlacesForm />
        <Link className="appButton--back" href="/">
          Back
        </Link>
      </main>
    </>
  );
}
