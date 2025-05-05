import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            BookShelf
          </Link>
          <nav>
            <Button variant="ghost" asChild>
              <Link href="/login">ログイン</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
