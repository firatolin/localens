import { dark } from "@clerk/themes";

export const clerkAppearance = {
  baseTheme: dark,
  elements: {
    card: "bg-bg-card border border-border-default shadow-none",
    headerTitle: "text-text-primary",
    headerSubtitle: "text-text-secondary",
    socialButtonsBlockButton:
      "bg-bg-subtle border border-border-default text-text-primary hover:bg-bg-elevated",
    formButtonPrimary: "bg-accent-white text-bg-primary hover:bg-white/90",
    footerActionLink: "text-accent-white hover:text-white/80",
    formFieldLabel: "text-text-secondary",
    formFieldInput: "bg-bg-primary border-border-default text-text-primary",
    dividerLine: "bg-border-default",
    dividerText: "text-text-muted",
  },
};
