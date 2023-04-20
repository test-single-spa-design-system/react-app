import React from "react";

import { colors } from "@spms/styleguide";

import "./styles.css";

export default function ReactButton(props) {
  return (
    <button
      className="reactButton"
      type="button"
      style={{ background: colors.primary }}
    >
      <span style={{ color: colors.secundary }}>React button</span>
    </button>
  );
}
