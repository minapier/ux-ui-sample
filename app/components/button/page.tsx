import Image from "next/image";
// import styles from "./page.module.css";
import Button from "../../../components/button/Button";
import styles from "../components/css/classes.css";


export default function Home() {
  return (
    <div>
      <main>
        <div>
          <h1>Button component</h1>

          <h2>Primary</h2>
          <Button
            ctaLabel="Click Here!"
            ctaLink={{ href: "https://www.google.com", target: "_blank" }}
          />
          <h2>Secondary</h2>
          <Button
            ctaLabel="Click Here!"
            ctaLink={{ href: "https://www.riascureman.com", target: "_blank" }}
            ctaStyle={{ style: "secondary" }} ctaAria="Different aria label"
          />
          <h2>Link</h2>
          <Button
            ctaLabel="Click Here!"
            ctaLink={{ href: "https://www.riascureman.com", target: "_blank" }}
            ctaStyle={{ type: "link" }}
          />
        </div>
      </main>
    </div>
  );
}
