import ICharacter from "../../dtos/response/ICharacter";
import api from "../api";

const getAllCharacters = async (page: number): Promise<ICharacter> => {
  const { data: response } = await api.post("", {
    query: `query {
      characters(page: ${page}){ info {
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
      }}
    }`,
  });
  return response.data.characters;
};

export default getAllCharacters;
