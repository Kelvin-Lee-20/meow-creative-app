export default function Header({ onScrollTo }) {
  return (
    <header className="sticky top-0 z-50 bg-[#fff7f4e6] backdrop-blur-[10px] border-b border-solid border-[var(--line)]">
      <div className="max-w-[1160px] mx-auto px-[24px] py-[14px] flex items-center justify-between gap-[16px]">
        <button
          className="flex items-center gap-[10px] font-['Fredoka'] font-[600] text-[20px] text-[var(--ink)]"
          onClick={() => onScrollTo('top')}
        >
          <span className="w-[40px] h-[40px] rounded-[14px] bg-[linear-gradient(135deg,#ff9dbd,#e93b81)] text-white text-[20px] flex items-center justify-center">
            <i className="fa-solid fa-cat" aria-hidden="true" />
          </span>
          <span>Meow Creative</span>
        </button>

        <nav className="hidden md:flex items-center gap-[28px] font-[600] text-[16px]">
          <button className="text-[var(--ink)] hover:text-[var(--accent)]" onClick={() => onScrollTo('apps')}>Apps</button>
          <button className="text-[var(--ink)] hover:text-[var(--accent)]" onClick={() => onScrollTo('about')}>About</button>
          <button className="text-[var(--ink)] hover:text-[var(--accent)]" onClick={() => onScrollTo('values')}>Our promise</button>
        </nav>

        <button
          className="bg-[var(--accent)] text-[var(--on-accent)] font-[700] text-[15px] rounded-[999px] px-[22px] py-[10px] hover:opacity-90"
          onClick={() => onScrollTo('contact')}
        >
          Say hello
        </button>
      </div>
    </header>
  );
}