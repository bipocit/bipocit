import React from "react"

const H1 = ({ children }) => (
  <h1 className="font-semibold text-3xl md:text-5xl leading-snug md:leading-none">{children}</h1>
)

const H2 = ({ children }) => (
  <h2 className="font-semibold text-2xl md:text-3xl leading-snug md:leading-none">{children}</h2>
)

const P = ({ children }) => (
  <p className="mt-4">{children}</p>
)

export default {
  h1: H1,
  h2: H2,
  p: P,
}