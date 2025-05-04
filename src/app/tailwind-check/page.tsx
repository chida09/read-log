export default function TailwindCheckPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-primary">
          TailwindCSS Configuration Check
        </h1>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Color System</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-primary text-primary-foreground rounded-md">
              Primary
            </div>
            <div className="p-4 bg-secondary text-secondary-foreground rounded-md">
              Secondary
            </div>
            <div className="p-4 bg-muted text-muted-foreground rounded-md">
              Muted
            </div>
            <div className="p-4 bg-accent text-accent-foreground rounded-md">
              Accent
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Card Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card text-card-foreground p-6 rounded-lg border shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Card Example</h3>
              <p className="text-muted-foreground">
                This is a card component with shadcn/ui style.
              </p>
            </div>
            <div className="bg-popover text-popover-foreground p-6 rounded-lg border shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Popover Example</h3>
              <p className="text-muted-foreground">
                This is a popover style component.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Typography Scale</h2>
          <div className="space-y-2">
            <p className="text-xs">text-xs: Extra small text</p>
            <p className="text-sm">text-sm: Small text</p>
            <p className="text-base">text-base: Base text</p>
            <p className="text-lg">text-lg: Large text</p>
            <p className="text-xl">text-xl: Extra large text</p>
            <p className="text-2xl">text-2xl: 2x large text</p>
            <p className="text-3xl">text-3xl: 3x large text</p>
            <p className="text-4xl">text-4xl: 4x large text</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Border Radius</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-secondary p-4 rounded-sm">
              rounded-sm
            </div>
            <div className="bg-secondary p-4 rounded-md">
              rounded-md
            </div>
            <div className="bg-secondary p-4 rounded-lg">
              rounded-lg
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Animations</h2>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            Hover me (transition-colors)
          </button>
        </section>
      </div>
    </div>
  );
}
