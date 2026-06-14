import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ClientDetails from "./clientdetails";
import userEvent from "@testing-library/user-event";

describe("Client Details", () => {
  test("loads WiBioCard page", () => {
    render(
      <MemoryRouter initialEntries={["/client/wibiocard"]}>
        <Routes>
          <Route
            path="/client/:id"
            element={<ClientDetails />}
          />
        </Routes>
      </MemoryRouter>
    );

expect(
  screen.getByRole("heading", {
    level: 1,
    name: "WiBioCard",
  })
).toBeInTheDocument();
  });
});
test("loads QMasters page", () => {
  render(
    <MemoryRouter initialEntries={["/client/qmasters"]}>
      <Routes>
        <Route
          path="/client/:id"
          element={<ClientDetails />}
        />
      </Routes>
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", {
      name: /QMasters Cyber Security Services/i,
    })
  ).toBeInTheDocument();
});
test("shows client not found", () => {
  render(
    <MemoryRouter initialEntries={["/client/invalid"]}>
      <Routes>
        <Route
          path="/client/:id"
          element={<ClientDetails />}
        />
      </Routes>
    </MemoryRouter>
  );

  expect(
    screen.getByText(/Client Not Found/i)
  ).toBeInTheDocument();
});
test("renders back button", () => {
  render(
    <MemoryRouter initialEntries={["/client/wibiocard"]}>
      <Routes>
        <Route
          path="/client/:id"
          element={<ClientDetails />}
        />
      </Routes>
    </MemoryRouter>
  );

  expect(
    screen.getByRole("button", {
      name: /back/i,
    })
  ).toBeInTheDocument();
});
test("loads Fortress page", () => {
  render(
    <MemoryRouter initialEntries={["/client/fortress"]}>
      <Routes>
        <Route
          path="/client/:id"
          element={<ClientDetails />}
        />
      </Routes>
    </MemoryRouter>
  );

expect(
  screen.getByRole("heading", {
    name: /Fortress Cyber/i,
  })
).toBeInTheDocument();
});
test("clicks back button", async () => {
  const user = userEvent.setup();

  render(
    <MemoryRouter initialEntries={["/client/wibiocard"]}>
      <Routes>
        <Route
          path="/client/:id"
          element={<ClientDetails />}
        />
      </Routes>
    </MemoryRouter>
  );

  const backButton = screen.getByRole("button", {
    name: /back/i,
  });

  await user.click(backButton);

  expect(backButton).toBeInTheDocument();
});
test("renders benefits section", () => {
  render(
    <MemoryRouter initialEntries={["/client/wibiocard"]}>
      <Routes>
        <Route
          path="/client/:id"
          element={<ClientDetails />}
        />
      </Routes>
    </MemoryRouter>
  );

  expect(
    screen.getByText("Benefits")
  ).toBeInTheDocument();
});