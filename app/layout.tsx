import '../styles/globals.css'
import ContextProvider from './contextProvider/ContextProvider'
import Head from './head'
import Header from './header/Header'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <Head />
      <body className='bg-gray-100 transition-all duration-500 dark:bg-zinc-900 overflow-x-hidden'>
        <ContextProvider>
          <Header/>
        </ContextProvider>
        <main>{children}</main>
      </body>
    </html>
  )
}
 