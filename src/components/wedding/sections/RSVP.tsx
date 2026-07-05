import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegPaperPlane, FaCheck, FaWhatsapp } from "react-icons/fa";
import { wedding } from "@/data/wedding";
import { Section, SectionTitle, Corners } from "../Primitives";
import { Diya } from "../Ornaments";

export default function RSVP() {
  const [form, setForm] = useState({ name: "", phone: "", guests: "1", attending: "yes", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1100);
  };

  const whatsappHref = `https://wa.me/${wedding.contact.whatsapp}?text=${encodeURIComponent(
    `RSVP for ${wedding.hashtag}\nName: ${form.name}\nPhone: ${form.phone}\nAttending: ${form.attending}\nGuests: ${form.guests}\nMessage: ${form.message}`,
  )}`;

  const field =
    "w-full rounded-xl border border-gold/40 bg-cream/60 px-4 py-3 font-sans text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/70 focus:border-gold focus:ring-2 focus:ring-gold/30";

  return (
    <Section id="rsvp">
      <SectionTitle
        deva="|| Your Presence ||"
        kicker="Kindly Respond"
        title="RSVP"
        subtitle="Your presence is the greatest blessing. Please let us know if you'll be joining us."
      />

      <div className="mx-auto max-w-xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-gold/50 bg-card p-2 shadow-luxe">
          <Corners />
          <div className="rounded-[1.6rem] border border-gold/30 bg-gradient-to-b from-cream to-secondary/40 p-7 sm:p-10">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-8 text-center"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-gold text-maroon-deep shadow-gold">
                    <FaCheck className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-maroon">Thank You, {form.name.split(" ")[0]}!</h3>
                  <p className="mt-2 font-serif text-lg italic text-muted-foreground">
                    Your response fills our hearts with joy. We can't wait to celebrate with you.
                  </p>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/50 px-5 py-2.5 font-sans text-xs uppercase tracking-[0.2em] text-maroon transition-colors hover:bg-gold/10"
                  >
                    <FaWhatsapp className="text-[#25D366]" /> Also send on WhatsApp
                  </a>
                  <div className="mt-6"><Diya className="mx-auto w-16" /></div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={submit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="mb-1.5 block font-sans text-xs uppercase tracking-wide text-gold-deep">Full Name</label>
                    <input
                      className={field}
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Your good name"
                      required
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block font-sans text-xs uppercase tracking-wide text-gold-deep">Phone</label>
                      <input
                        className={field}
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="Contact number"
                        type="tel"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block font-sans text-xs uppercase tracking-wide text-gold-deep">Guests</label>
                      <select className={field} value={form.guests} onChange={(e) => update("guests", e.target.value)}>
                        {["1", "2", "3", "4", "5+"].map((g) => (
                          <option key={g} value={g}>{g}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block font-sans text-xs uppercase tracking-wide text-gold-deep">Will you attend?</label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { v: "yes", l: "Joyfully Yes" },
                        { v: "no", l: "Regretfully No" },
                      ].map((o) => (
                        <button
                          type="button"
                          key={o.v}
                          onClick={() => update("attending", o.v)}
                          className={`rounded-xl border px-4 py-3 font-sans text-sm transition-all ${
                            form.attending === o.v
                              ? "border-gold bg-gradient-gold text-maroon-deep shadow-gold"
                              : "border-gold/40 bg-cream/60 text-muted-foreground hover:border-gold"
                          }`}
                        >
                          {o.l}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block font-sans text-xs uppercase tracking-wide text-gold-deep">Your Blessings</label>
                    <textarea
                      className={`${field} min-h-24 resize-none`}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Share your warm wishes for the couple..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-gold px-8 py-4 font-sans text-sm font-medium uppercase tracking-[0.2em] text-maroon-deep shadow-gold transition-transform hover:scale-[1.02] active:scale-95 disabled:opacity-70"
                    data-cursor
                  >
                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <span className="relative z-10 flex items-center gap-2">
                      {loading ? "Sending..." : "Send RSVP"} <FaRegPaperPlane />
                    </span>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  );
}
