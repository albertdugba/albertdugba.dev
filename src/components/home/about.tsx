import { SectionHeading } from "./section-heading";

export const About = () => {
  return (
    <section className='lg:mt-28 mt-20'>
      <SectionHeading label='About' />

      <div className='grid gap-12 border-t border-light-gray pt-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.65fr)] lg:pt-10'>
        <p className='max-w-2xl text-2xl font-semibold leading-[1.25] tracking-tight text-lighter-gray sm:text-3xl'>
          I turn difficult workflows into interfaces that make sense on first
          use—and systems that stay useful as products and teams grow.
        </p>

        <div className='space-y-6 text-base leading-7 text-article-color'>
          <p>
            Previously, I was one of the founding frontend engineers at{" "}
            <a href='https://www.drdogood.health/' target='_blank' rel='noopener noreferrer' className='font-semibold text-secondary underline decoration-[var(--lemonAccent)] decoration-2 underline-offset-2'>DrDoGood</a>,
            building a telemedicine platform for virtual consultations and
            appointment scheduling. Before that, I built interfaces across
            web3, blockchain, fintech, and edtech at Montech Studios.
          </p>
          <p>
            My practice spans product UI, design systems, frontend
            infrastructure, CI/CD, and the developer experience that helps a
            team ship with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};
