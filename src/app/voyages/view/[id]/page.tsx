"use client";
import { getVoyageById } from "@/app/Services/voyages";
import { SingleVoyageProps } from "@/app/Utils/types";
import { useEffect, useState } from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const [voyageData, setVoyageData] = useState<SingleVoyageProps>();

  useEffect(() => {
    getVoyageById(params.id).then((res) => {
      setVoyageData(res);
    });
  }, [params.id]);
  
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      {voyageData && (
        <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-xl mx-auto">
          <div className="relative">
            <img
              src={voyageData.image}
              alt={`${voyageData.destination}`}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-transparent via-black opacity-50"></div>
          </div>
          <div className="p-8">
            <h1 className="text-2xl font-semibold mb-4">
              {voyageData.destination} -{" "}
              {voyageData.pays &&
                voyageData.pays.map((pays: { nom: any }) => pays.nom)}
            </h1>
            <p className="mb-4 font-semibold">
              Date de retour :{" "}
              {new Date(voyageData.dateRetour).toLocaleDateString("fr-FR")}
            </p>
            <p className="mb-4 font-semibold">
              Date de départ :{" "}
              {new Date(voyageData.dateDepart).toLocaleDateString("fr-FR")}
            </p>
            <p className="mb-4 font-semibold">Prix : {voyageData.prix}</p>
            <p className="mb-4 font-semibold">
              Catégorie :{" "}
              {voyageData.categorie &&
                voyageData.categorie.map((categorie) => categorie.nom)}
            </p>
            <br />
            <p
              dangerouslySetInnerHTML={{
                __html: voyageData.description.replace(/\n/g, "<br />"),
              }}
            />

            <div className="mt-6">
              <a
                href={`/formulaire/create`}
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md"
              >
                Rejoindre le voyage
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Page;
