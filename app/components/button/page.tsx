import Image from "next/image";
// import styles from "./page.module.css";
import Button from "../../../components/button/Button";
import styles from "../components/css/classes.css";


export default function ButtonPage() {
  return (
    <div>
      <main>
        <div>
          <h1 className="h3">Button component</h1>

          <h2 className="h4">Primary</h2>
          <Button
            ctaLabel="Click Here!"
            ctaLink={{ href: "https://www.google.com", target: "_blank" }}
          />
          <h2 className="h4">Secondary</h2>
          <Button
            ctaLabel="Click Here!"
            ctaLink={{ href: "https://www.riascureman.com", target: "_blank" }}
            ctaStyle={{ style: "secondary" }}
            ctaAria="Different aria label"
          />
          <h2 className="h4">Link</h2>
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
