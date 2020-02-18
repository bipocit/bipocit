import React from "react"

const H1 = ({ children }) => (
  <h1 className="font-semibold text-3xl md:text-4xl leading-none mt-10 mb-4">{children}</h1>
)

const H2 = ({ children }) => (
  <h2 className="font-semibold text-2xl md:text-3xl leading-none mt-10 mb-4">{children}</h2>
)

const H3 = ({ children }) => (
  <h3 className="font-semibold text-xl md:text-2xl leading-none mt-10 mb-4">{children}</h3>
)

const H4 = ({ children }) => (
  <h4 className="font-semibold text-xl leading-none my-4">{children}</h4>
)

const P = ({ children }) => (
  <p className="my-4 text-xl leading-tight tracking-tight">{children}</p>
)

const UL = ({ children }) => (
  <ul className="ml-8 my-4 text-lg md:text-xl">{children}</ul>
)

const A = ({ children, href }) => (
  <a className="underline text-purple-200 hover:text-purple-300 transition-colors duration-150 ease-in-out cursor-pointer" href={href}>{children}</a>
)

export default {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  ul: UL,
  a: A,
}