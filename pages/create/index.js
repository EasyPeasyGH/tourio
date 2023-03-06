import Head from "next/head";

import PlacesForm from "@/components/PlacesForm";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

export default function Create({
  places,
  idToEdit,
  isEditMode,
  setIsEditMode,
}) {
  console.log("idToEdit from create", idToEdit);
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
        <PlacesForm
          places={places}
          idToEdit={idToEdit}
          isEditMode={isEditMode}
        />
        <Link className="appButton--back" href="/">
          Back
        </Link>
      </main>
    </>
  );
}
