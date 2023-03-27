import Image from 'next/image'

export default async function Home() {
  return (
    <>
      <section className="bg-gray-50 mb-12">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Join ChatGPT&apos;s Custom Nutrition Plan Program for a Healthier You
            </h2>

            <p className="hidden text-gray-500 sm:mt-4 sm:block">
            Get a custom nutrition plan tailored to your needs with ChatGPT. Our AI-powered chatbot will craft a plan that helps you achieve your health and nutrition goals.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-xl">
            <form action="/result" className="sm:flex sm:gap-4">
              <div className="sm:flex-1">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="text"
                  placeholder="How much is salad?"
                  className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                  name="question" />
              </div>

              <button
                type="submit"
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
              >
                <span className="text-sm font-medium"> Sign up </span>

                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <Image
                  src="https://images.unsplash.com/photo-1660505465468-c898ea7ff674?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
                  alt="food platter"
                  width={800}
                  height={500}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span
                className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"
              ></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">
                Transform Your Health with Custom Nutrition Plans Created by ChatGPT
                </h2>

                <p className="mt-4 text-gray-600">
                Looking to improve your health and nutrition, but not sure where to start? Look no further than our custom nutrition plans, created with the help of ChatGPT!

Our AI-powered chatbot, ChatGPT, is ready to assist you in crafting a personalized nutrition plan that fits your unique goals, lifestyle, and preferences. With ChatGPT&apos;s vast knowledge of nutrition and health, you can trust that your plan will be both effective and sustainable.

Say goodbye to generic diets and cookie-cutter meal plans. Our nutrition plans are tailored specifically to you, taking into account your dietary restrictions, activity level, and even food preferences. Whether you&apos;re looking to lose weight, gain muscle, or just feel better overall, ChatGPT can help you get there.

So what are you waiting for? Start your journey to better health and nutrition today with ChatGPT and our custom nutrition plans. Click the button below to get started!
                </p>

                <a
                  href="#"
                  className="mt-8 inline-block rounded border bg-rose-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
