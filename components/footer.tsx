/** @jsx h */
import { h } from "../deps.ts";

export default function Footer() {
  return (
    <div class="about">
      <p class="about-divider">* * * * *</p>
      <p class="about-text">
        This site was built with{" "}
        <a href="https://github.com/lucacasonato/fresh" target="_blank">
          Fresh
        </a>{" "}
        by Jamalam
      </p>
    </div>
  );
}
