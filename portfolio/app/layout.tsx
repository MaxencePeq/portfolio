export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={``}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
