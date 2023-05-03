import './globals.css'

export const metadata = {
  title: 'Dev Daniel Maicá',
  description: ' Portifolio do Desenvolvedor Full Stack Daniel Maicá.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-zinc-200 text-zinc-900'>{children}</body>
    </html>
  )
}
