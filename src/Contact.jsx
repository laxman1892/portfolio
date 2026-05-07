import { Code2, ExternalLink, Mail, Send } from "lucide-react";
import { useState } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "laxman.rijal1892@gmail.com",
    href: "mailto:laxman.rijal1892@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/laxman-rijal",
    href: "https://www.linkedin.com/in/laxman-rijal",
    icon: ExternalLink,
  },
  {
    label: "GitHub",
    value: "github.com/laxman1892",
    href: "https://www.github.com/laxman1892",
    icon: Code2,
  },
];

const web3FormsEndpoint = ["https://api.web3forms.com", "submit"].join("/");

function Contact() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("botcheck")) {
      return;
    }

    if (!accessKey) {
      setStatus("error");
      setMessage("Contact form is missing its Web3Forms access key.");
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("subject", "New portfolio contact message");
    formData.append("from_name", "Laxman Rijal Portfolio");

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch(web3FormsEndpoint, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Message could not be sent.");
      }

      form.reset();
      setStatus("success");
      setMessage("Message sent. I will get back to you soon.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please email me directly."
      );
    }
  }

  return (
    <div className="motion-fade-up mx-auto min-h-screen max-w-6xl px-6 pt-36 sm:px-10">
      <section className="grid gap-16 pb-28 sm:grid-cols-[0.9fr_1.1fr] sm:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-black/45 dark:text-white/45">
            Contact
          </p>
          <h1 className="mt-4 text-5xl font-black leading-tight text-black dark:text-white sm:text-6xl">
            Let&apos;s talk about the next useful thing to build.
          </h1>
          <p className="mt-6 max-w-2xl leading-8 text-black/70 dark:text-white/65">
            I&apos;m open to junior frontend, junior full-stack, backend-focused
            roles, internships, and practical collaborations. Send a message
            through the form or reach me directly through the links below.
          </p>

          <div className="mt-10 grid gap-4">
            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  className="group flex items-center gap-4 rounded-lg border border-black/10 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f7f7f5] dark:border-white/10 dark:hover:bg-white/10"
                  href={link.href}
                  key={link.label}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-black text-white transition-colors group-hover:bg-black/80 dark:bg-white dark:text-black dark:group-hover:bg-white/80">
                    <Icon size={18} />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-black dark:text-white">
                      {link.label}
                    </span>
                    <span className="mt-1 block text-sm text-black/55 dark:text-white/55">
                      {link.value}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="rounded-lg border border-black/10 bg-[#f7f7f5] p-5 transition-all duration-300 dark:border-white/10 dark:bg-white/5 sm:p-7">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-black/45 dark:text-white/45">
              Message
            </p>
            <h2 className="mt-3 text-2xl font-black text-black dark:text-white">
              Send a note
            </h2>
            <p className="mt-3 leading-7 text-black/60 dark:text-white/60">
              Send a message directly to my inbox.
            </p>
          </div>

          <form className="mt-8 space-y-5" method="post" onSubmit={handleSubmit}>
            <input className="hidden" name="botcheck" tabIndex="-1" />
            <div>
              <label className="sr-only" htmlFor="name">
                Your Name
              </label>
              <input
                className="h-12 w-full rounded border border-black/10 bg-white px-4 text-sm text-black placeholder:text-black/55 transition-colors focus:border-black focus:outline-none dark:border-white/25 dark:bg-neutral-950 dark:text-white dark:placeholder:text-white/55 dark:focus:border-white dark:focus:ring-1 dark:focus:ring-white/40"
                name="name"
                placeholder="Name"
                required
                type="text"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="email">
                Your Email
              </label>
              <input
                className="h-12 w-full rounded border border-black/10 bg-white px-4 text-sm text-black placeholder:text-black/55 transition-colors focus:border-black focus:outline-none dark:border-white/25 dark:bg-neutral-950 dark:text-white dark:placeholder:text-white/55 dark:focus:border-white dark:focus:ring-1 dark:focus:ring-white/40"
                name="email"
                placeholder="Email address"
                required
                type="email"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
                Your Message
              </label>
              <textarea
                className="min-h-72 w-full resize-none rounded border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/55 transition-colors focus:border-black focus:outline-none dark:border-white/25 dark:bg-neutral-950 dark:text-white dark:placeholder:text-white/55 dark:focus:border-white dark:focus:ring-1 dark:focus:ring-white/40"
                name="message"
                placeholder="Message"
                required
              ></textarea>
            </div>

            <button
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded bg-black px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-white/80"
              disabled={status === "submitting"}
              type="submit"
            >
              {status === "submitting" ? "Sending..." : "Submit"}
              <Send size={16} />
            </button>
            {message && (
              <p
                aria-live="polite"
                className={`rounded border px-4 py-3 text-sm ${
                  status === "success"
                    ? "border-green-700/20 bg-green-700/10 text-green-700 dark:text-green-300"
                    : "border-red-600/20 bg-red-600/10 text-red-600 dark:text-red-300"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
