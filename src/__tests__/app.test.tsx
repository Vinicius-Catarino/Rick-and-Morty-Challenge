import React from "react";
import { shallow } from "enzyme";
import Root from "../App";
import Home from "../pages/Home";
import "jsdom-global/register";
import axios from "axios";
// import getCharactersByFilter from "../services/graphql/getCharactersByFilter";

// jest.mock("../services/graphql/getCharactersByFilter");

const charactersReturn = {
  results: [
    {
      id: "1",
      name: "Rick Sanchez",
      type: "",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      species: "Human",
      location: {
        id: "20",
        name: "Earth (Replacement Dimension)",
        type: "Planet",
        dimension: "Replacement Dimension",
      },
      origin: {
        id: "1",
        name: "Earth (C-137)",
        type: "Planet",
        dimension: "Dimension C-137",
      },
    },
  ],
};

describe("index page", () => {
  it("should have Root component", () => {
    const subject: any = shallow(<Root />);
    expect(subject).toMatchSnapshot();
  });

  it("should not be able search without text", (done) => {
    const wrapper = shallow(<Home />);

    const inputTextToSearch = wrapper.find("#inputTextToSearch");

    inputTextToSearch.simulate("change", { target: { value: "" } });

    const button = wrapper.find("#buttonSearch");

    // Auth.signIn = jest.fn().mockImplementation(() => mockUser);

    button.simulate("click");

    expect(wrapper).toMatchSnapshot();
    done();
  });

  it("should be able search", async (done) => {
    const wrapper = shallow(<Home />);

    const inputTextToSearch = wrapper.find("#inputTextToSearch");

    inputTextToSearch.simulate("change", { target: { value: "rick" } });

    const button = wrapper.find("#buttonSearch");

    axios.post = jest.fn().mockImplementation(() => charactersReturn);

    await button.simulate("click");

    setTimeout(() => {
      expect(wrapper).toMatchSnapshot();
      done();
    }, 2000);
  });

  it("should be able search with error", async (done) => {
    const wrapper = shallow(<Home />);

    const inputTextToSearch = wrapper.find("#inputTextToSearch");

    inputTextToSearch.simulate("change", { target: { value: "rick" } });

    const button = wrapper.find("#buttonSearch");

    axios.post = jest.fn().mockImplementation(() => {
      throw new Error("Error");
    });

    await button.simulate("click");

    setTimeout(() => {
      expect(wrapper).toMatchSnapshot();
      done();
    }, 2000);
  });
});
