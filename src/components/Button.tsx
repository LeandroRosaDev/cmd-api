import { useFormStatus } from "react-dom";

export function Button({ children }: any) {
  const status = useFormStatus();
  return (
    <button type="submit" disabled={status.pending}>
      {children}
    </button>
  );
}
