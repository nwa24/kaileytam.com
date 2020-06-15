import React from "react"
import InstagramIcon from "../../images/instagram-logo.png"

const InstagramLogo = () => {
  return (
    <a
      href="https://www.instagram.com/wordsbykailey/"
      className="instagramLogo"
    >
      <img src={InstagramIcon} alt="logo" />
    </a>
  )
}

export default InstagramLogo
