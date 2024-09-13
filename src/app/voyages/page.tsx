"use client";
import React, { useEffect, useState } from "react";
import { getAllVoyages } from "../Services/voyages";
import { useRouter } from "next/navigation";

const Voyages = () => {
  const [voyagesList, setVoyagesList] = useState([]);
  const [isReloadNeeded, setIsReloadNeeded] = useState(false);

  const { push } = useRouter();

  useEffect(() => {
    getAllVoyages().then((res: any) => {
      setVoyagesList(res.data);
      setIsReloadNeeded(false);
    });
  }, [isReloadNeeded]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-100">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 py-6 px-4 w-full m-0">
        <nav className="flex justify-between items-center max-w-5xl mx-auto ">
          <h1 className="text-4xl font-bold text-white">Trip Agency</h1>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:underline">
              Accueil
            </a>
            <a href="#" className="text-white hover:underline">
              Contact
            </a>
          </div>
        </nav>
      </header>
      <img
        src="https://img.freepik.com/photos-gratuite/concept-voyage-points-repere_23-2149153256.jpg?w=1380&t=st=1715868920~exp=1715869520~hmac=f8113b03322c5eed9555f5d7f92d727c4117e8830147a5cb05673d4d46b36cb8"
        alt="Voyages"
        className="w-full h-96 object-cover"
      />
      <h1 className="my-6 py-16 text-3xl font-semibold text-gray-800">
        Tout nos voyages
      </h1>
      <div className="mt-6 space-y-12 lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"></div>
      <div className="flex flex-wrap w-11/12 mx-auto gap-4">
        {voyagesList.map((voyage: any) => (
          <div
            key={voyage.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              src={voyage.image}
              alt={voyage.destination}
              className="w-full h-48 object-cover rounded-t-lg cursor-pointer"
              onClick={() => {
                push(`/voyages/view/${voyage.id}`);
              }}
            />
            <div className="p-4">
              <h5
                className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer"
                onClick={() => {
                  push(`/voyages/view/${voyage.id}`);
                }}
              >
                {voyage.destination} - {voyage.pays[0].nom}
              </h5>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Départ :{" "}
                  {new Date(voyage.dateDepart).toLocaleDateString("FR")}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Retour :{" "}
                  {new Date(voyage.dateRetour).toLocaleDateString("FR")}
                </p>
              </div>
              <p className="mb-3 font-medium text-gray-900 dark:text-white">
                A partir de {voyage.prix}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {voyage.description.substring(0, 100) + "..."}
              </p>
              <a
                href=""
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => {
                  push(`/voyages/view/${voyage.id}`);
                }}
              >
                Lire la suite
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      <footer className="w-full mt-12 pb-12 lg:pb-24 bg-dark-100 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-6 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0">
            <p className="text-gray-600 dark:text-gray-400">
              Copyright © 2020. All right reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Designed by{" "}
              <a
                href="https://github.com/amal-nachit"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Amal NACHIT
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Voyages;
