
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
      <h1>inner ikhlas layout </h1>
      {children}
      <h1>inner ikhlas layout </h1>
      </>
    )
  }
  