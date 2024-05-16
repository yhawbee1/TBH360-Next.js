import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
      <main className="bg-tbhgreen">
          <Header/>
          {children}
          {/* Footer */}
    </main>
  );
}
