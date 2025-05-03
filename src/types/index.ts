// 型定義は後で追加
export type Book = {
  id: string;
  title: string;
  author: string;
  pageCount?: number;
  coverImageUrl?: string;
  status: 'UNREAD' | 'READING' | 'COMPLETED';
};
