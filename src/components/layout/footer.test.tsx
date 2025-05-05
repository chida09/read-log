import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Footer } from './footer'

describe('Footer', () => {
  it('コピーライトが表示される', () => {
    const { getByText } = render(<Footer />)
    const currentYear = new Date().getFullYear()
    expect(getByText(`© ${currentYear} BookShelf. All rights reserved.`)).toBeInTheDocument()
  })
})
