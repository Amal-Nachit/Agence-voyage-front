export interface VoyageProps {
  destination: string;
  dateDepart: string;
  dateRetour: string;
  description: string;
  image: string;
  prix: string;
}

export type PaysProps = {
  id: string;
  nom: string;
};

export type CategorieProps = {
  id: string;
  nom: string;
};
export type SingleVoyageProps = {
  id: string;
  destination: string;
  dateDepart: string;
  dateRetour: string;
  image: string;
  prix: string;
  description: string;

  categorie: {
    map(arg0: (categorie: any) => any): import("react").ReactNode;
    id: string;
    nom: string;
  };
  pays: {
    map(arg0: (pays: { nom: any; }) => any): import("react").ReactNode;
    id: string;
    nom: string;    
  };
    user: {
      id: number;
      nom: string;
      email: string;
    };
};
