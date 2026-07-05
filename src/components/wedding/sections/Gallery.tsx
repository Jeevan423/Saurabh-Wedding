import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import { Section, SectionTitle } from "../Primitives";

const photos = [
  { src: g1, alt: "The couple walking hand in hand", caption: "Two Souls" },
  { src: g2, alt: "Joyful haldi ceremony", caption: "Haldi Glow" },
  { src: g3, alt: "Intricate mehendi on the bride's hands", caption: "Mehendi Art" },
  { src: g4, alt: "Decorated wedding mandap glowing with diyas", caption: "The Mandap" },
  { src: g1, alt: "Candid wedding moment", caption: "Forever" },
];

export default function Gallery() {
  return (
    <Section id="gallery" glow={false} className="bg-gradient-to-b from-secondary/40 to-background">
      <SectionTitle
        deva="॥ आठवणी ॥"
        kicker="Cherished Moments"
        title="Our Gallery"
        subtitle="A glimpse into the joy, colour and love that surround our celebration."
      />

      <div className="[--swiper-pagination-color:var(--gold)] [--swiper-pagination-bullet-inactive-color:var(--gold-deep)]">
        <Swiper
          modules={[EffectCoverflow, Pagination, Autoplay]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView="auto"
          autoplay={{ delay: 3200, disableOnInteraction: false }}
          coverflowEffect={{ rotate: 8, stretch: 0, depth: 160, modifier: 1.6, slideShadows: false }}
          pagination={{ clickable: true }}
          className="!pb-14"
        >
          {photos.map((p, i) => (
            <SwiperSlide
              key={i}
              className="!w-[280px] sm:!w-[380px] md:!w-[440px]"
            >
              <figure className="group relative overflow-hidden rounded-3xl border border-gold/40 shadow-luxe">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/70 via-transparent to-transparent" />
                <figcaption className="absolute bottom-5 left-5 font-display text-xl font-semibold text-cream drop-shadow">
                  {p.caption}
                </figcaption>
                <span className="pointer-events-none absolute inset-3 rounded-2xl border border-gold/40" />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
}
