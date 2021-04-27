/* eslint-disable no-useless-escape */
import ICharacter from "../../dtos/response/ICharacter";
import api from "../api";

const getCharactersByFilter = async (
  page: number,
  characterToSearch: string
): Promise<ICharacter> => {
  const { data: response } = await api.post("", {
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
          gender,
          status,
          created,
          location{
            id,
            name,
            type,
            dimension,
            residents{
              id
            }
          },
          origin{
            id,
            name,
            type,
            dimension,
            residents{
              id
            }
          }
        }
      }
    }`,
  });

  return response.data.characters;
};

export default getCharactersByFilter;
