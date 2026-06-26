import { redirect } from "next/navigation"


export default function TFARedirect() {
  redirect("/verify")
}
