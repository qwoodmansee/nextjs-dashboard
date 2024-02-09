/* example from chapter 2 showing you can do both tailwind and css modules */
import '@/app/ui/global.css'; // tailwind, modules can be found in app/page.tsx + app/ui/home.module.css

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
