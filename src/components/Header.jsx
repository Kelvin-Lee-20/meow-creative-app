// 1. 在文件最顶部引入刚刚保存的图片
import catLogo from '../assets/cat-logo.png'; // 请确保路径和文件名与你实际的一致

export default function Header({ onScrollTo }) {
  return (
    <header className="sticky top-0 z-50 bg-[#fff7f4e6] backdrop-blur-[10px] border-b border-solid border-[var(--line)]">
      <div className="max-w-[1160px] mx-auto px-[24px] py-[14px] flex items-center justify-between gap-[16px]">
        <button
          className="flex items-center gap-[10px] font-['Fredoka'] font-[600] text-[20px] text-[var(--ink)]"
          onClick={() => onScrollTo('top')}
        >
          {/* 2. 替换原来的 span 为 img 标签 */}
          <img 
            src={catLogo} 
            alt="Meow Creative Logo" 
            className="w-[40px] h-[40px] object-contain rounded-[14px]" 
          />
          
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