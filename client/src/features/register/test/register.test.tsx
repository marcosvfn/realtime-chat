import { RegisterModelProps, RegisterView, useRegisterModel } from "@/features/register";

import { renderWithQueryClient } from "@/shared/lib/test/query-client.mock";

const renderRegister = ({ userService }: RegisterModelProps) => {
  const methods = useRegisterModel({ userService });
  return renderWithQueryClient(<RegisterView {...methods} />);
};
