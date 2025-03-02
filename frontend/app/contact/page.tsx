"use client"

import { useActionState } from "react"
import { submit } from "./actions"

const initialState = {
  message: "",
}

export default function ContactPage() {
  const [state, formAction] = useActionState(submit, initialState)

  return (
    <>
      {state?.message && <p className="text-center">{state.message}</p>}
      <form action={formAction} className="max-w-lg mx-auto p-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input type="text" id="name" name="name" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="text" id="email" name="email" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
          <input type="text" id="subject" name="subject" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea id="message" name="message" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"></textarea>
        </div>
        <div className="flex items-center justify-between">
          <input type="submit" value="Submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none" />
        </div>
      </form>
    </>
  )
}
