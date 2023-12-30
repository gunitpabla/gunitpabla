export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-neutral-500 via-zinc-100/30 to-neutral-500 ">
      {children}
    </div>
  );
}
