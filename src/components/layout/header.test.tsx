import { render, screen } from '@testing-library/react'
import { Header } from './header'

describe('Header', () => {
  it('ロゴテキストが表示される', () => {
    render(<Header />)
    expect(screen.getByText('BookShelf')).toBeInTheDocument()
  })

  it('ログインリンクが表示される', () => {
    render(<Header />)
    expect(screen.getByText('ログイン')).toBeInTheDocument()
  })
})
