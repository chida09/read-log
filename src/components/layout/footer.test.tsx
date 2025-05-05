import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Footer } from './footer'

describe('Footer', () => {
  it('コピーライトが表示される', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(`© ${currentYear} BookShelf. All rights reserved.`)).toBeInTheDocument()
  })
})
