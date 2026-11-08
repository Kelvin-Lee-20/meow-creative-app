import japaneseWordMatchIcon from '../assets/japanese_word_match_app_icon.png';
import purrMemoIcon from '../assets/purr_memo_icon.png';
import kawaiiPhotoFrameIcon from '../assets/kawaii_photo_frame_app_icon.png';

const APPS = [
  {
    title: 'Japanese Word Match',
    category: 'Education / Games',
    description:
      'Learn Japanese vocabulary by matching words and meanings in quick, playful rounds. Perfect for a few minutes a day.',
    gradient: 'bg-[linear-gradient(135deg,#d3e0ff,#7f9fe6)]',
    image: japaneseWordMatchIcon,
    link: 'https://apps.apple.com/us/app/japanese-word-match/id6811630364', // 拿到链接后替换，例如 'https://apps.apple.com/...'
  },
  {
    title: 'Purr Memo',
    category: 'Productivity / Notes',
    description:
      'A cozy memo and notes app with a cat-loving heart. Jot down ideas, lists and reminders without any fuss.',
    gradient: 'bg-[linear-gradient(135deg,#ff9dbd,#e93b81)]',
    image: purrMemoIcon,
    // ⬇️ 添加了真实的 App Store 链接
    link: 'https://apps.apple.com/us/app/purr-memo/id6819768927', 
  },
  {
    title: 'Kawaii Photo Frame',
    category: 'Photo / Creativity',
    description:
      'Dress up your photos with adorable frames and stickers, then share your cutest moments with friends.',
    gradient: 'bg-[linear-gradient(135deg,#ffe9a8,#ffb86b)]',
    image: kawaiiPhotoFrameIcon,
    link: 'https://apps.apple.com/us/app/kawaii-photo-frame-cute-edit/id6826065632',
  },
];

export default function AppsSection() {
  return (
    <section id="apps" className="max-w-[1160px] mx-auto px-[24px] py-[80px]">
      <div className="text-center max-w-[640px] mx-auto">
        <h2 className="font-['Fredoka'] font-[600] text-[clamp(2rem,4vw,3rem)] leading-[1.15]">
          Our apps
        </h2>
        <p className="text-[var(--ink-muted)] mt-[12px]">
          Three small, friendly tools, each designed to do one thing really well.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[28px] mt-[48px]">
        {APPS.map((app) => (
          // 1. 把 article 改成了 a 标签，并加上了 group 类用于控制内部按钮的 hover 效果
          <a
            key={app.title}
            href={app.link}
            target="_blank" // 在新标签页打开
            rel="noopener noreferrer" // 安全防范
            className="group bg-[var(--surface)] rounded-[32px] border-2 border-solid border-[var(--line)] p-[32px] flex flex-col shadow-[0_12px_30px_rgba(59,42,74,0.06)] hover:shadow-[0_18px_40px_rgba(59,42,74,0.12)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className={`w-[88px] h-[88px] rounded-[26px] ${app.gradient} flex items-center justify-center overflow-hidden`}>
              <img 
                src={app.image} 
                alt={`${app.title} icon`} 
                className="w-full h-full object-cover" 
              />
            </div>
            
            <h3 className="font-['Fredoka'] font-[600] text-[26px] mt-[24px] text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
              {app.title}
            </h3>
            <span className="text-[var(--accent)] font-[700] text-[13px] uppercase tracking-[0.1em] mt-[4px]">
              {app.category}
            </span>
            <p className="text-[var(--ink-muted)] mt-[14px] flex-1">{app.description}</p>
            
            {/* 2. 给按钮加上了 group-hover 效果，当鼠标悬停在整个卡片上时，按钮会变色提示可点击 */}
            <div className="mt-[24px] inline-flex items-center gap-[8px] self-start bg-[var(--bg-inverse)] text-[var(--ink-inverse)] font-[700] text-[14px] rounded-[999px] px-[18px] py-[10px] group-hover:bg-[var(--accent)] group-hover:text-white transition-colors duration-300">
              <i className="fa-brands fa-apple text-[18px]" /> App Store
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}