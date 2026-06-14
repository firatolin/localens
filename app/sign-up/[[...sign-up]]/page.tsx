import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary">
      <SignUp
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "bg-bg-card border border-border-default shadow-none",
            headerTitle: "text-text-primary",
            headerSubtitle: "text-text-secondary",
            formButtonPrimary:
              "bg-accent-white text-bg-primary hover:bg-white/90",
          },
        }}
      />
    </div>
  );
}
