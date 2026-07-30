export default function MainLayout() {
  return (
    <div className="main-layout">
      <h2>Header test</h2>

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}