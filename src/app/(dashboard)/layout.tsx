export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダーやナビゲーションは後で追加 */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
