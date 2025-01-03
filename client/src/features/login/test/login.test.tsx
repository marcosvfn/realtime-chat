import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { LoginModelProps, LoginViewModel } from "@/features/login";

import { MockUserServiceSuccess } from "@/entities/user";

import { renderView } from "@/shared/lib/test/render-view";

describe("login", () => {
  it("renders the login form with correct fields and labels", () => {
    renderLogin({ userService: MockUserServiceSuccess });

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("should show notification errors when required fields are empty", async () => {
    const onSubmitMock = vi.fn();
    const { click } = renderLogin({
      userService: {
        ...MockUserServiceSuccess,
        register: onSubmitMock,
      },
    });

    const submitButton = screen.getByRole("button", { name: /login/i });
    await click(submitButton);

    await waitFor(() => {
      expect(onSubmitMock).not.toHaveBeenCalled();

      expect(screen.getByTestId("register-email-error")).toBeInTheDocument();
      expect(screen.getByTestId("register-password-error")).toBeInTheDocument();
    });
  });

  it("allows user to fill out the form and submit and show successfully notification ", async () => {
    const onSubmitMock = vi.fn();
    const { type, click } = renderLogin({
      userService: {
        ...MockUserServiceSuccess,
        login: onSubmitMock,
      },
    });

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /login/i });

    await type(emailInput, "testuser@example.com");
    await type(passwordInput, "password123");

    expect(emailInput).toHaveValue("testuser@example.com");
    expect(passwordInput).toHaveValue("password123");

    await click(submitButton);

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith({
        email: "testuser@example.com",
        password: "password123",
      });

      expect(screen.findByTestId("toast-notification")).toBeDefined();
    });
  });
});

const renderLogin = ({ userService }: LoginModelProps) => {
  const user = userEvent.setup();
  const renderResult = renderView(<LoginViewModel userService={userService} />);

  return { ...user, ...renderResult };
};
