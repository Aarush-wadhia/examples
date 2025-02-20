import { useStorage } from "@plasmohq/storage"
import type { PlasmoContentScript } from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["https://www.plasmo.com/*"]
}

// Idea for an UI API, for popup, notification badge, or mounting UI
// Idea for static mount
// Idea for styling injection support (inline or with custom emotion cache)

export const getRootContainer = () => {
  return document.querySelector("#feature")
}

const PlasmoOverlay = () => {
  const [checked] = useStorage("checked", false)

  return (
    <span
      style={{
        padding: 12
      }}>
      <h1>HELLO WORLD ROOT CONTAINER</h1>
      <input type={"checkbox"} readOnly checked={checked} />
    </span>
  )
}

export default PlasmoOverlay
