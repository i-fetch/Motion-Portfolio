"use client"

import { useEffect } from "react"

export default function CalendlyPopupButton() {
  useEffect(() => {
    // Inject CSS
    const link = document.createElement("link")
    link.href = "https://assets.calendly.com/assets/external/widget.css"
    link.rel = "stylesheet"
    document.head.appendChild(link)

    // Inject JS
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    // Initialize widget after Calendly script loads
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/jiben026/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=280628&text_color=ffffff&primary_color=be00ff",
          text: "Schedule time with me",
          color: "#330c41",
          textColor: "#ffffff"
        })
      }
    }

    return () => {
      document.body.removeChild(script)
      document.head.removeChild(link)
    }
  }, [])

  return null
}
