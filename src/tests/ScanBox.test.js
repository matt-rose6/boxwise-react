import React from "react";
import { act, render, waitForElement } from "@testing-library/react";
import { ScanBox, fetchData } from "../views/ScanBox";
import mockAxios from "axios";

describe("display scan box message", () => {
  it("renders scan box message correctly", async () => {
    await act(async () => {
      const authObject = {
        access_token: null,
      };
      const { getByText } = render(<ScanBox authObject={authObject} />);
      const welcomeText = getByText(/scan a box now:/i);
      expect(welcomeText).toBeInTheDocument();
    });
  });
});

describe("fetch private data", () => {
  it("requests the correct api route", () => {
    expect(mockAxios.get).toHaveBeenCalledWith(
      "http://localhost:5000/api/private",
      {
        headers: { Authorization: "Bearer null" },
      }
    );
  });

  it("renders the fetched data correctly", async () => {
    await act(async () => {
      const authObject = { access_token: null };
      const { getByText } = render(<ScanBox authObject={authObject} />);
      const axiosResult = (await fetchData(authObject)).data.message;
      const privateText = await waitForElement(() => getByText(axiosResult));
      expect(privateText).toBeInTheDocument();
    });
  });
});
