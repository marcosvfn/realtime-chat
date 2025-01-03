import { render } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

const renderWithReactHookForm = (ui: ReactElement, { defaultValues = {} } = {}): any => {
  const Wrapper = ({ children }: { children: ReactNode }) => {
    const methods = useForm({ defaultValues });

    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  return {
    ...render(ui, { wrapper: Wrapper }),
  };
};

export default renderWithReactHookForm;
