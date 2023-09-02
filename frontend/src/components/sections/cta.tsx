import type { CTAService } from '#types/services';

const CTA = ({ title }: CTAService) => (
  <section>
    <p>{title}</p>
  </section>
);

export { CTA };
