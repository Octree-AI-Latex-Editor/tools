import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaTeX Currency & Finance Symbols - Dollar, Euro, Formulas | Free Symbol Reference",
  description: "Complete list of LaTeX currency and finance symbols. Copy-paste $, €, £, ¥, ₹, ₿, %, NPV, IRR, compound interest formulas with LaTeX commands.",
  keywords: [
    // Core keywords
    "latex symbols",
    "symbol copy paste",
    "unicode math symbols",
    // Finance keywords
    "latex currency symbols",
    "latex finance symbols",
    "latex dollar sign",
    "latex euro symbol",
    "latex pound symbol",
    "latex yen symbol",
    "latex rupee symbol",
    "latex bitcoin symbol",
    "latex percent",
    "latex per mille",
    "latex npv irr",
    "latex present value",
    "latex compound interest",
    "latex financial formulas",
    "latex summation finance",
    "latex interest rate",
    "money symbols latex",
    "academic symbols",
    "research symbols",
  ],
  openGraph: {
    title: "LaTeX Currency & Finance Symbols - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for currency symbols and financial notation.",
  },
};

export default function FinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
