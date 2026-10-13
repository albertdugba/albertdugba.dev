import Link from "next/link";
import { Overpass } from "next/font/google";
import { HeroBackground } from "./hero-background";
import { HeroArc } from "./hero-lines";
import { CompanyLink } from "./company-link";
import { PracticeSentence } from "./practice-sentence";
import { Socials } from "../socials";

const overpass = Overpass({ subsets: ["latin"] });

export const Hero = () => {
  return (
    <section
      id='about'
      className='relative isolate w-full max-w-[44rem] scroll-mt-8 pt-24 sm:pt-32 lg:pt-36'
    >
      <HeroBackground />
      <HeroArc />

      <div className='relative z-10'>
        <div className='relative'>
          <p className='font-mono text-xs uppercase tracking-[0.14em] text-gray'>
            Software Engineer
          </p>
          <h1
            className={`${overpass.className} mt-5 max-w-[38rem] text-[clamp(2.5rem,5.2vw,4.1rem)] leading-[1.05] tracking-[-0.03em] text-secondary`}
          >
            Building software that makes hard things feel simple
          </h1>
          <Socials size='lg' className='mt-9' />
          <div className='mt-8 h-px max-w-[13rem] bg-light-gray'>
            <div className='h-full w-12 bg-[var(--lemonAccent)]' />
          </div>
        </div>

        <div className='mt-10 space-y-7 text-base leading-7 text-article-color sm:text-lg sm:leading-8'>
          <p className='text-[1.075rem] leading-8 sm:text-xl sm:leading-9'>
            I&apos;m Albert Dugba, a Ghanaian 🇬🇭 software engineer based in the UK. Today, I&apos;m a Product
            Engineer at{" "}
            <CompanyLink href='https://www.deciphex.com/'>Deciphex</CompanyLink>
            , where I build interfaces and internal tools for a digital
            pathology platform.
          </p>

          <p>
            Before that, I was one of the founding frontend engineers at{" "}
            <CompanyLink href='https://www.drdogood.health/'>
              DrDoGood
            </CompanyLink>
            , where I helped build a telemedicine platform for virtual
            consultations and appointment scheduling from its early days.
            Earlier, I worked at{" "}
            <CompanyLink href='https://origo-health.com/'>
              Origo Health
            </CompanyLink>
            , building products that help patients find care and book
            medical appointments, and then at{" "}
            <CompanyLink href='https://www.montech.io/'>
              Montech Studios
            </CompanyLink>
            , shipping products across web3, fintech, and edtech.
          </p>

          <p>
            I work across the whole product, from the interface to the APIs, CI
            pipelines, and infrastructure behind it. I care about software
            that&apos;s fast, reliable, and easy for the next engineer to pick
            up.
          </p>

          <PracticeSentence />

          <p>
            I&apos;m currently doing a deep dive into AI engineering. I&apos;m
            building agents, experimenting with retrieval and evals, and
            learning what it takes to get LLM features working reliably in
            production.
          </p>

          <p>
            When I&apos;m not doing geeky stuff, I enjoy{" "}
            <Link href='/photos' className='font-semibold text-lighter-gray underline decoration-[var(--lemonAccent)] decoration-2 underline-offset-4 transition-colors hover:decoration-secondary'>
              taking photos
            </Link>
            . If you&apos;re into technical articles, head over to{" "}
            <Link href='/blog' className='font-semibold text-lighter-gray underline decoration-[var(--lemonAccent)] decoration-2 underline-offset-4 transition-colors hover:decoration-secondary'>
              my blog
            </Link>
            . I hope you enjoy your stay here!
          </p>
        </div>
      </div>
    </section>
  );
};
