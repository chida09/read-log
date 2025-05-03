# BookShelf API仕様書

## 認証 API (NextAuth.js)

### エンドポイント
| メソッド | パス | 説明 |
|---------|------|------|
| POST | /api/auth/callback/credentials | ユーザーログイン |
| POST | /api/auth/signout | ログアウト |
| GET | /api/auth/session | セッション情報取得 |

---

## Server Actions API

### 認証関連 (`app/actions/auth.ts`)

#### registerUser
ユーザー登録を行う

**パラメータ**
| 名前 | 型 | 必須 | 説明 |
|------|-----|------|------|
| email | string | ✓ | メールアドレス |
| password | string | ✓ | パスワード（6文字以上） |
| name | string | - | ユーザー名 |

**レスポンス**
```typescript
{
  id: string;
  email: string;
  name: string | null;
  createdAt: Date;
}
```

**エラー**
| コード | メッセージ | 説明 |
|--------|----------|------|
| 400 | バリデーションエラー | 入力値が不正 |
| 409 | このメールアドレスは既に使用されています | メール重複 |

---

### 本の管理 (`app/actions/books.ts`)

#### createBook
本を新規登録する

**パラメータ**
| 名前 | 型 | 必須 | 説明 |
|------|-----|------|------|
| title | string | ✓ | 書名 |
| author | string | ✓ | 著者名 |
| pageCount | number | - | ページ数 |
| coverImageUrl | string | - | 表紙画像URL |
| status | 'UNREAD' \| 'READING' \| 'COMPLETED' | ✓ | 読書ステータス |

**レスポンス**
```typescript
{
  id: string;
  title: string;
  author: string;
  pageCount: number | null;
  coverImageUrl: string | null;
  status: 'UNREAD' | 'READING' | 'COMPLETED';
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}
```

**エラー**
| コード | メッセージ | 説明 |
|--------|----------|------|
| 401 | 認証が必要です | 未ログイン |
| 400 | バリデーションエラー | 入力値が不正 |

---

#### getBooks
ログインユーザーの本一覧を取得する

**パラメータ**
なし

**レスポンス**
```typescript
Array<{
  id: string;
  title: string;
  author: string;
  pageCount: number | null;
  coverImageUrl: string | null;
  status: 'UNREAD' | 'READING' | 'COMPLETED';
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}>
```

**エラー**
| コード | メッセージ | 説明 |
|--------|----------|------|
| 401 | 認証が必要です | 未ログイン |

---

#### getBook
特定の本の詳細を取得する

**パラメータ**
| 名前 | 型 | 必須 | 説明 |
|------|-----|------|------|
| id | string | ✓ | 本のID |

**レスポンス**
```typescript
{
  id: string;
  title: string;
  author: string;
  pageCount: number | null;
  coverImageUrl: string | null;
  status: 'UNREAD' | 'READING' | 'COMPLETED';
  userId: string;
  createdAt: Date;
  updatedAt: Date;
} | null
```

**エラー**
| コード | メッセージ | 説明 |
|--------|----------|------|
| 401 | 認証が必要です | 未ログイン |
| 404 | 本が見つかりません | 存在しないか権限なし |

---

#### updateBook
本の情報を更新する

**パラメータ**
| 名前 | 型 | 必須 | 説明 |
|------|-----|------|------|
| id | string | ✓ | 本のID |
| title | string | ✓ | 書名 |
| author | string | ✓ | 著者名 |
| pageCount | number | - | ページ数 |
| coverImageUrl | string | - | 表紙画像URL |
| status | 'UNREAD' \| 'READING' \| 'COMPLETED' | ✓ | 読書ステータス |

**レスポンス**
```typescript
{
  id: string;
  title: string;
  author: string;
  pageCount: number | null;
  coverImageUrl: string | null;
  status: 'UNREAD' | 'READING' | 'COMPLETED';
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}
```

**エラー**
| コード | メッセージ | 説明 |
|--------|----------|------|
| 401 | 認証が必要です | 未ログイン |
| 404 | 本が見つかりません | 存在しないか権限なし |
| 400 | バリデーションエラー | 入力値が不正 |

---

#### deleteBook
本を削除する

**パラメータ**
| 名前 | 型 | 必須 | 説明 |
|------|-----|------|------|
| id | string | ✓ | 本のID |

**レスポンス**
```typescript
void
```

**エラー**
| コード | メッセージ | 説明 |
|--------|----------|------|
| 401 | 認証が必要です | 未ログイン |
| 404 | 本が見つかりません | 存在しないか権限なし |

---

## データ型定義

### User
```typescript
interface User {
  id: string;
  email: string;
  name: string | null;
  createdAt: Date;
}
```

### Book
```typescript
interface Book {
  id: string;
  title: string;
  author: string;
  pageCount: number | null;
  coverImageUrl: string | null;
  status: 'UNREAD' | 'READING' | 'COMPLETED';
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}
```

### BookStatus
```typescript
type BookStatus = 'UNREAD' | 'READING' | 'COMPLETED';
```

---

## エラーハンドリング

すべてのServer Actionsは以下のエラー形式で例外をスローします：

```typescript
class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500
  )
}
```

一般的なエラーコード：
- 400: バリデーションエラー
- 401: 認証エラー
- 404: リソースが見つからない
- 409: 競合（重複など）
- 500: サーバーエラー
