import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaTeX Modal Logic Symbols - Necessity, Possibility, Box Diamond | Free Symbol Reference",
  description: "Complete list of LaTeX modal logic symbols. Copy-paste □ necessity, ◇ possibility, temporal logic, epistemic logic with LaTeX commands.",
  keywords: [
    "modal logic symbols",
    "necessity possibility symbols",
    "latex box diamond",
    "latex necessity",
    "latex possibility",
    "temporal logic latex",
    "epistemic logic latex",
    "knows believes latex",
    "common knowledge latex",
    "until next latex",
    "kripke model latex",
    "possible worlds latex",
    "deontic logic latex",
    "ought permitted latex",
    "accessibility relation latex",
    "philosophy logic symbols",
    "computer science logic",
    "formal verification symbols",
    "math symbols",
  ],
  openGraph: {
    title: "LaTeX Modal Logic Symbols - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for necessity, possibility, and modal operators.",
  },
};

export default function ModalLogicLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

