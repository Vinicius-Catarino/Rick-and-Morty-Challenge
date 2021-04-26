import Character from "./Character";

export default interface Location {
  id: number;
  name: String;
  type: String;
  dimension: String;
  residents: [Character];
  created: String;
}
