import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Header } from './header'

describe('Header', () => {
  it('ロゴテキストが表示される', () => {
    const { getByText } = render(<Header />)
    expect(getByText('BookShelf')).toBeInTheDocument()
  })

  it('ログインリンクが表示される', () => {
    const { getByText } = render(<Header />)
    expect(getByText('ログイン')).toBeInTheDocument()
  })
})
