import React, { useRef } from 'react'

interface IEscapeHTMLProps {
  element: string
  html: string
  className?: string
}

/*
  Renders raw HTML in a React component.
*/

const EscapeHTML: React.FC<IEscapeHTMLProps> = props => {
  const { element, html, className } = props

  return null
}

export default EscapeHTML
