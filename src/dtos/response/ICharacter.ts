import Character from "../../models/Character";

export default interface ICharacter {
  info: {
    count: number;
  };
  results: Character[];
}
