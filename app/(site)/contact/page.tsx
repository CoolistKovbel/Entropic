import ContactForm from "@/app/components/contact-form";

const Page = () => {
  return (
    <main className="min-h-screen w-full bg-[#111] text-white flex items-center justify-center">
      <div className="max-w-3xl p-8 rounded-lg border-2 border-gray-800">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Need to answer a question?
        </h2>
        <p className="text-lg mb-6">
          Needsome help with your projects, designs, or just want to ask a
          question, leave a name, title, and i guess message, and ill be able to
          get in touch with you as soon I can.
        </p>

        {/* Contact Form */}
        <ContactForm />

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Connect with Me:</h3>
            <ul className="flex gap-4">
              <li>
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-400 hover:text-purple-300">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Or Drop an Email:</h3>
            <p className="text-gray-400">lyub@gg.com</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
