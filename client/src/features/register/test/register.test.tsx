import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { RegisterModelProps, RegisterViewModel } from "@/features/register";
import { MockUserServiceSuccess } from "@/features/register/test/__mocks__/register.mocks";

import { renderView } from "@/shared/lib/test/render-view";

describe("register", () => {
  it("renders the register form with correct fields and labels", () => {
    renderRegister({ userService: MockUserServiceSuccess });

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /register/i })).toBeInTheDocument();
  });

  it("should show notification errors when required fields are empty", async () => {
    const onSubmitMock = vi.fn();
    const { click } = renderRegister({
      userService: {
        ...MockUserServiceSuccess,
        register: onSubmitMock,
      },
    });

    const submitButton = screen.getByRole("button", { name: /register/i });
    await click(submitButton);

    await waitFor(() => {
      expect(onSubmitMock).not.toHaveBeenCalled();

      expect(screen.getByTestId("register-username-error")).toBeInTheDocument();
      expect(screen.getByTestId("register-email-error")).toBeInTheDocument();
      expect(screen.getByTestId("register-password-error")).toBeInTheDocument();
    });
  });

  it("allows user to fill out the form and submit and show successfully notification ", async () => {
    const onSubmitMock = vi.fn();
    const { type, click } = renderRegister({
      userService: {
        ...MockUserServiceSuccess,
        register: onSubmitMock,
      },
    });

    const usernameInput = screen.getByLabelText(/username/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /register/i });

    await type(usernameInput, "testuser");
    await type(emailInput, "testuser@example.com");
    await type(passwordInput, "password123");

    expect(usernameInput).toHaveValue("testuser");
    expect(emailInput).toHaveValue("testuser@example.com");
    expect(passwordInput).toHaveValue("password123");

    await click(submitButton);

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith({
        username: "testuser",
        email: "testuser@example.com",
        password: "password123",
      });

      expect(screen.findByTestId("toast-notification")).toBeDefined();
    });
  });
});

const renderRegister = ({ userService }: RegisterModelProps) => {
  const user = userEvent.setup();
  const renderResult = renderView(<RegisterViewModel userService={userService} />);

  return { ...user, ...renderResult };
};
