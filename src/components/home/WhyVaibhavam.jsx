import Section from '../common/Section'
import ScrollableCards from '../common/ScrollableCards'
import { WHY_CARDS } from '../../constants'

function WhyVaibhavam() {
  return (
    <Section
      badge="Why Vaibhavam"
      title="Design. Install. Support."
      description="With Z-Wave and Wi-Fi connectivity, Vaibhavam's smart home solutions offer effortless automation, low-power control, and reliable performance. Designed for Indian homes, our systems are easy to install and support your evolving needs."
      bgImage="https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2026/01/Welcome-to-the-Future-of-Smart-Living.webp"
    >
      <ScrollableCards items={WHY_CARDS} />
    </Section>
  )
}

export default WhyVaibhavam
