import '@app/global.css'
import Navbar from '@app/navbar'
import Footer from '@app/footer'

export const metadata = {
  title: 'Nutrition Copilot',
  description: 'Make eating easy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-screen'>
      <body className='h-screen'>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
