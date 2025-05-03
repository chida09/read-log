import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function UITest() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">shadcn/ui コンポーネントテスト</h1>
      
      <Card className="max-w-md mb-4">
        <CardHeader>
          <CardTitle>カードコンポーネント</CardTitle>
          <CardDescription>これはテスト用のカードコンポーネントです</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">カードの中身を表示しています。</p>
          <div className="space-x-2">
            <Button>デフォルトボタン</Button>
            <Button variant="secondary">セカンダリ</Button>
            <Button variant="destructive">削除</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
