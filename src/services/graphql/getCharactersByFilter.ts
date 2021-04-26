/* eslint-disable no-useless-escape */
import ICharacter from "../../dtos/response/ICharacter";
import api from "../api";

const getCharactersByFilter = async (
  page: number,
  characterToSearch: string
): Promise<ICharacter> => {
  return api.post("", {
    query: `query {
      characters(page: ${page}, filter: { name: \"${characterToSearch}\" }) {
        info {
          count
        }
        results {
          id,
          name,
          type,
          image,
          species,
          location{
            id,
            name,
            type,
            dimension
          },
          origin{
            id,
            name,
            type,
            dimension
          }
        }
      }
    }`,
  });
};

export default getCharactersByFilter;
