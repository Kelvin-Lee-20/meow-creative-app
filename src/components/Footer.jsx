export default function Footer() {
  return (
    <footer className="border-t border-solid border-[var(--line)]">
      <div className="max-w-[1160px] mx-auto px-[24px] py-[32px] flex flex-col md:flex-row items-center justify-between gap-[12px] text-[15px] text-[var(--ink-muted)]">
        <div className="flex items-center gap-[8px] font-['Fredoka'] font-[600] text-[var(--ink)]">
          <i className="fa-solid fa-paw text-[var(--accent)]" aria-hidden="true" />
          Meow Creative App Studio
        </div>
        <div>Japanese Word Match · Purr Memo · Kawaii Photo Frame</div>
        <div>© 2026 Meow Creative App Studio</div>
      </div>
    </footer>
  );
}