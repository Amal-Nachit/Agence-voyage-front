"use client";
import { useState } from "react";

// export default function JoinForm() {
//   const [nombrePlaces, setNombrePlaces] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     console.log(nombrePlaces, message);
//   };

//   return (
//     <form
//       className="flex flex-col space-y-4 bg-white shadow-md rounded-lg p-6 max-w-md mx-auto my-10"
//       onSubmit={handleSubmit}
//     >
//       <div className="space-y-2">
//         <label
//           htmlFor="nombrePlaces"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Nombre de places :
//         </label>
//         <input
//           type="number"
//           id="nombrePlaces"
//           value={nombrePlaces}
//           onChange={(e) => setNombrePlaces(e.target.value)}
//           className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
//         />
//       </div>
//       <div className="space-y-2">
//         <label
//           htmlFor="message"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Message :
//         </label>
//         <textarea
//           id="message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           rows={4}
//           className="w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
//         ></textarea>
//       </div>
//       <button
//         type="submit"
//         className="mt-4 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//       >
//         Envoyer
//       </button>
//     </form>
//   );
// }



const FormulairePage = () => {
  const [nombrePlaces, setNombrePlaces] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //Enregistrer dans la base de données
    console.log(nombrePlaces, message);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label
          htmlFor="nombrePlaces"
          className="block text-sm font-medium text-gray-700"
        >
          Nombre de places :
        </label>
        <input
          type="number"
          id="nombrePlaces"
          value={nombrePlaces}
          onChange={(e) => setNombrePlaces(e.target.value)}
          className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message :
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        ></textarea>
      </div>
      <button
        type="submit"
        className="mt-4 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Envoyer
      </button>
    </form>
  );
};

export default FormulairePage;
