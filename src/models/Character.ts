import Location from "./Location";

export default interface Character {
  id: number;
  name: string;
  type: string;
  species: string;
  image: string;
  location: Location;
  origin: Location;
}
