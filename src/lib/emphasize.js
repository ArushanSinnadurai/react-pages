import { Fragment } from "react";

/**
 * Renders `**bold**` spans inside résumé bullets as highlighted text, so the
 * metrics ("40%", "100,000+ records") carry without hand-writing JSX per bullet.
 */
const emphasize = (text) =>
  text.split("**").map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-semibold text-white">
        {part}
      </strong>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    )
  );

export default emphasize;
