import Location from "./Location";

export default interface Character {
  id: number;
  name: string;
  type: string;
  species: string;
  image: string;
  gender: string;
  status: string;
  created: string;
  location: Location;
  origin: Location;
}
