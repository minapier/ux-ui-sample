import Image from "next/image";
import styles from "./page.module.css";
import Button from "../components/button/Button";
// import styles from "../components/css/classes.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.banner}>
        <div className="vertical-center">
          <h1>RSD Style Design mockup</h1>
          <p>
            This is a microsite for the style design of the Ria Scureman Designs
            site I developed in Webflow. The components were imported from
            Webflow into this Next.js site. This is primarily to show my skills
            as a React/Next.js and UX/UI developer.
          </p>
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

      <Link href="/components/button" aria-label="Button component">
        Button component
      </Link>
    </>
  );
}
