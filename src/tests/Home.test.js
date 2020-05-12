import React from "react";
import { act, render, waitForElement } from "@testing-library/react";
import { Home, fetchData } from "../views/Home";
import mockAxios from "axios";

describe("display welcome message", () => {
  it("renders welcome message correctly", async () => {
    await act(async () => {
      const { getByText } = render(<Home />);
      const welcomeText = getByText(/welcome to boxwise, please log in/i);
      expect(welcomeText).toBeInTheDocument();
    });
  });
});

describe("fetch public data", () => {
  it("requests the correct api route", () => {
    expect(mockAxios.get).toHaveBeenCalledWith(
      "http://localhost:5000/api/public"
    );
  });

  it("renders the fetched data correctly", async () => {
    await act(async () => {
      const { getByText } = render(<Home />);
      const axiosResult = (await fetchData()).data.message;
      const publicText = await waitForElement(() => getByText(axiosResult));
      expect(publicText).toBeInTheDocument();
    });
  });
});
