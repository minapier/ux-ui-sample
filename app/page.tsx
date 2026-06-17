import Image from "next/image";
import styles from "./page.module.css";
import Button from "../components/button/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.banner}>
        <div className="vertical-center">
          <h1 className="h3">RSD Style Design mockup</h1>
          <p>
            This is a microsite for the design system of the Ria Scureman Designs
            site I developed in Webflow. The components were imported from
            Webflow into this Next.js site, and design tokens were imported from Figma. This is primarily to show my skills
            as a React/Next.js and UX/UI developer.
          </p>
          <Button
            ctaLink={{ href: "https://www.riascureman.com", target: "_blank" }}
            ctaLabel="Ria Secureman Designs"
            ctaStyle={{ type: "link" }}
          />
          <Button
            ctaLink={{
              href: "https://github.com/minapier/ux-ui-sample",
              target: "_blank",
            }}
            ctaLabel="GitHub Repository"
            ctaStyle={{ type: "link" }}
          />
        </div>
        <div>
          <Image
            src="/images/rsd-homepage.png"
            alt=""
            className={styles.bannerImage}
            width={1440}
            height={600}
          />
        </div>
      </div>
      <div>
        <h2 className="h4">Components</h2>
        <p>
          <Link href="/components/button" aria-label="Button component">
            Button
          </Link>
        </p>
        <p>
          <Link href="/components/accordion" aria-label="Accordion component">
            Accordion
          </Link>
        </p>
      </div>
    </>
  );
}
