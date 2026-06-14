import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Clients from "./clients";
import userEvent from "@testing-library/user-event";
describe("Clients Page", () => {
  test("renders hero heading", () => {
    render(
      <BrowserRouter>
        <Clients />
      </BrowserRouter>
    );

expect(
  screen.getByText(
    /Strategic Clients &/i
  )
).toBeInTheDocument();
  });
});
test("renders Fortress Cyber card", () => {
  render(
    <BrowserRouter>
      <Clients />
    </BrowserRouter>
  );

  expect(
    screen.getByRole("heading", {
      name: /Fortress Cyber/i,
    })
  ).toBeInTheDocument();
});
test("renders WiBioCard card", () => {
  render(
    <BrowserRouter>
      <Clients />
    </BrowserRouter>
  );

  expect(
    screen.getByRole("heading", {
      name: /WiBioCard/i,
    })
  ).toBeInTheDocument();
});

test("renders QMasters card", () => {
  render(
    <BrowserRouter>
      <Clients />
    </BrowserRouter>
  );

  expect(
    screen.getByRole("heading", {
      name: /QMasters Cyber Security Services/i,
    })
  ).toBeInTheDocument();
});

test("renders partnership highlights", () => {
  render(
    <BrowserRouter>
      <Clients />
    </BrowserRouter>
  );

  expect(
    screen.getByText(/Partnership Highlights/i)
  ).toBeInTheDocument();
});
test("renders all client action buttons", () => {
  render(
    <BrowserRouter>
      <Clients />
    </BrowserRouter>
  );

  expect(
    screen.getAllByRole("button")
  ).toHaveLength(3);
});
test("renders all partnership buttons", () => {
  render(
    <BrowserRouter>
      <Clients />
    </BrowserRouter>
  );

  expect(
    screen.getAllByRole("button")
  ).toHaveLength(3);
});
test("clicks fortress partnership button", async () => {
  render(
    <BrowserRouter>
      <Clients />
    </BrowserRouter>
  );

  const buttons =
    screen.getAllByRole("button");

  await userEvent.click(buttons[0]);

  expect(buttons[0]).toBeInTheDocument();
});
test("clicks wibiocard partnership button", async () => {
  render(
    <BrowserRouter>
      <Clients />
    </BrowserRouter>
  );

  const buttons =
    screen.getAllByRole("button");

  await userEvent.click(buttons[1]);

  expect(buttons[1]).toBeInTheDocument();
});
test("clicks qmasters partnership button", async () => {
  render(
    <BrowserRouter>
      <Clients />
    </BrowserRouter>
  );

  const button =
    screen.getByText(/View Partnership/i);

  await userEvent.click(button);

  expect(button).toBeInTheDocument();
});