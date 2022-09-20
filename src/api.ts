import type {Note} from "./types";

const api = {
  notes: {
    list: (): Note[] => [
      {
        id: "nota",
        title: "Un Titulu 1",
        lastEdited: "10/10/1'",
        archived: false,
        content: "sarasa",
        categories: ["random"],
      },
      {
        id: "nota2",
        title: "Un Titulu 2",
        lastEdited: "10/10/1'",
        archived: false,
        content: "sarasa",
        categories: ["random"],
      },
      {
        id: "nota3",
        title: "Un Titulu 3",
        lastEdited: "10/10/1'",
        archived: false,
        content: "sarasa",
        categories: ["random"],
      },
    ],
  },
};

export default api;
