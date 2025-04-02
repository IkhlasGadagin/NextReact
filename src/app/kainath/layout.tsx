
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <h1>inner layout Header</h1>
    {children}
    <h1>inner layout Footer</h1>
    </>
  )
}
