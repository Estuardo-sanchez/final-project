import {React, useRef }from "react";
import '../styles/Button.css';
import { Link } from "react-router-dom";

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export default function ScrollButton({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const ref = useRef(null);

  const handleClick = () => {
    const element = document.getElementById('testScroll')
    element.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'});
  };

  return (
    <Link className="btn-mobile">
      <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={handleClick}
      type={type}
      ref={ref}
      >
        {children}
      </button>
    </Link>
  )
};