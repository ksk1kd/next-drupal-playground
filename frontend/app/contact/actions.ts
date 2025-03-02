"use server"

import { drupal } from "@/lib/drupal"

export async function submit(prevState: any, formData: FormData) {
  const url = drupal.buildUrl("/webform_rest/submit")
  const result = await drupal.fetch(url.toString(), {
    method: "POST",
    body: JSON.stringify({
      webform_id: "contact",
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })

  if (!result.ok) {
    return { message: "An error occurred while submitting the form." }
  }

  return { message: "Form submitted successfully." }
}