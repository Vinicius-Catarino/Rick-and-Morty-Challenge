import React from "react";
import { shallow } from "enzyme";
import Root from "../App";
import Home from "../pages/Home";
import "jsdom-global/register";

describe("index page", () => {
  it("should have Root component", () => {
    const subject: any = shallow(<Root />);
    expect(subject).toMatchSnapshot();
  });

  it("should not be able search without text", async (done) => {
    const wrapper = shallow(<Home />);

    const inputTextToSearch = wrapper.find("#inputTextToSearch");

    inputTextToSearch.simulate("change", { target: { value: "" } });

    const button = wrapper.find("#buttonSearch");

    // Auth.signIn = jest.fn().mockImplementation(() => mockUser);

    await button.simulate("click");

    expect(wrapper).toMatchSnapshot();
  });
});
