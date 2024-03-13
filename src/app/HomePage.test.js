// HomePage.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomePage from "./page";

// Mock Supabase client
jest.mock("@/lib/supabase/client", () => ({
  createClient: jest.fn(() => ({
    auth: {
      getUser: jest.fn(() => Promise.resolve({ data: { user: { aud: "authenticated" } } })),
    },
  })),
}));

// Mock fetch
global.fetch = require("jest-fetch-mock");

// Enable fetch mocking
beforeAll(() => {
  fetch.enableMocks();
});

describe("HomePage", () => {
  it("renders Button component with 'Join Party!' text", async () => {
    render(<HomePage />);
    await screen.findByText(/welcome to/i);

    // Assuming that the Button component renders the Link component properly
    const joinPartyButton = screen.getByRole("link", { name: /join party/i });
    expect(joinPartyButton).toBeInTheDocument();
  });

  it("handles button click", async () => {
    render(<HomePage />);
    await screen.findByText(/welcome to/i);

    const joinPartyButton = screen.getByRole("link", { name: /join party/i });

    // Assuming that your Button component triggers navigation on click
    userEvent.click(joinPartyButton);

    // You might need to wait for the navigation to complete and check the resulting route
    // You can use a library like `next-page-tester` for more advanced Next.js testing

    // For example:
    // await screen.findByText("Dashboard Page");
    // expect(window.location.pathname).toBe("/dashboard");
  });
});

// Clean up fetch mock
afterAll(() => {
  fetch.disableMocks();
});
