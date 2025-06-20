import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Portfolio Sultan | Data Scientist & AI/ML Engineer',
    template: '%s | Portfolio Sultan',
  },
  description: 'Machine Learning and Data Science specialist with strong several tech-stack, such as Python, R, C++, PHP proficiency and practical experience in real-world data analysis, automation, and predictive modeling. Passionate about building impactful AI driven-solutions and scalable application.',
  keywords: ['Machine Learning', 'Data Scientist', 'Data Analyst', 'Tensorflow', 'Muhammad Sultan Alhakim', 'Portfolio', 'Sultan', 'Programmer Indonesia'],
  creator: 'Muhammad Sultan Alhakim',
  publisher: 'Muhammad Sultan Alhakim',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id"> {/* Ganti ke 'id' untuk Bahasa Indonesia */}
      <body>{children}</body>
    </html>
  )
}