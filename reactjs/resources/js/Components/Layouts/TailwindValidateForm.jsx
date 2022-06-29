import React from 'react'

export default function TailwindValidateForm() {
  return (
    <div>
        <body class="w-screen h-screen bg-purple-700 flex justify-center items-center">
    <form class="p-10 bg-white rounded-lg drop-shadow-lg space-y-4" action="">
        <h1 class="text-xl font-light">Contact KindaCode.com</h1>

        <!-- Name -->
        <div class="flex flex-col">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" required class="peer border border-slate-400">

            <p class="invisible peer-invalid:visible text-red-700 font-light">
                Please enter your name
            </p>
        </div>

        <!-- Email -->
        <div class="flex flex-col">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" required class="peer border border-slate-400">
            <p class="invisible peer-invalid:visible text-red-700 font-light">
                Please enter a valid email address
            </p>
        </div>

        <!-- Message -->
        <div class="flex flex-col">
            <label for="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="3" required
                class="peer border border-slate-400"></textarea>
            <p class="invisible peer-invalid:visible text-red-700 font-light">
                This field cannot be empty
            </p>
        </div>
        <button type="submit" class="px-5 py-1 bg-amber-500">Send</button>
    </form>
</body>
    </div>
  )
}
