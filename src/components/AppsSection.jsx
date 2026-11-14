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
    link: 'https://apps.apple.com/us/app/japanese-word-match/id6811630364',
    isAvailable: true, // 👈 新增：已上架
  },
  {
    title: 'Purr Memo',
    category: 'Productivity / Notes',
    description:
      'A cozy memo and notes app with a cat-loving heart. Jot down ideas, lists and reminders without any fuss.',
    gradient: 'bg-[linear-gradient(135deg,#ff9dbd,#e93b81)]',
    image: purrMemoIcon,
    link: 'https://apps.apple.com/us/app/purr-memo/id6819768927', 
    isAvailable: true, // 👈 新增：已上架
  },
  {
    title: 'Kawaii Photo Frame',
    category: 'Photo / Creativity',
    description:
      'Dress up your photos with adorable frames and stickers, then share your cutest moments with friends.',
    gradient: 'bg-[linear-gradient(135deg,#ffe9a8,#ffb86b)]',
    image: kawaiiPhotoFrameIcon,
    link: '#', // 暂时留空
    isAvailable: false, // 👈 新增：还在审核中
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
        {APPS.map((app) => {
          // 根据是否上架，动态决定外层容器是 <a> 还是 <div>
          const CardWrapper = app.isAvailable ? 'a' : 'div';
          
          return (
            <CardWrapper
              key={app.title}
              // 只有已上架的 App 才赋予 href 和点击属性
              {...(app.isAvailable ? {
                href: app.link,
                target: "_blank",
                rel: "noopener noreferrer"
              } : {})}
              // 如果未上架，去掉 hover 时的上浮和阴影加深效果，让它看起来“不可点”
              className={`bg-[var(--surface)] rounded-[32px] border-2 border-solid border-[var(--line)] p-[32px] flex flex-col shadow-[0_12px_30px_rgba(59,42,74,0.06)] transition-all duration-300 ${
                app.isAvailable 
                  ? 'group hover:shadow-[0_18px_40px_rgba(59,42,74,0.12)] hover:-translate-y-1 cursor-pointer' 
                  : 'opacity-90'
              }`}
            >
              <div className={`w-[88px] h-[88px] rounded-[26px] ${app.gradient} flex items-center justify-center overflow-hidden`}>
                <img 
                  src={app.image} 
                  alt={`${app.title} icon`} 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {/* 标题：只有可点击时，才有 hover 变色效果 */}
              <h3 className={`font-['Fredoka'] font-[600] text-[26px] mt-[24px] text-[var(--ink)] transition-colors ${
                app.isAvailable ? 'group-hover:text-[var(--accent)]' : ''
              }`}>
                {app.title}
              </h3>
              
              <span className="text-[var(--accent)] font-[700] text-[13px] uppercase tracking-[0.1em] mt-[4px]">
                {app.category}
              </span>
              
              <p className="text-[var(--ink-muted)] mt-[14px] flex-1">{app.description}</p>
              
              {/* 底部按钮区域：根据状态显示不同样式 */}
              <div className="mt-[24px] self-start">
                {app.isAvailable ? (
                  // 已上架：黑色按钮，hover 变粉色
                  <div className="inline-flex items-center gap-[8px] bg-[var(--bg-inverse)] text-[var(--ink-inverse)] font-[700] text-[14px] rounded-[999px] px-[18px] py-[10px] group-hover:bg-[var(--accent)] group-hover:text-white transition-colors duration-300">
                    <i className="fa-brands fa-apple text-[18px]" /> App Store
                  </div>
                ) : (
                  // 未上架：浅色描边按钮，带小沙漏图标
                  <div className="inline-flex items-center gap-[8px] bg-[var(--accent-soft)] text-[var(--accent)] font-[700] text-[14px] rounded-[999px] px-[18px] py-[10px] border-2 border-transparent">
                    <i className="fa-solid fa-hourglass-half text-[16px]" /> Coming Soon
                  </div>
                )}
              </div>
            </CardWrapper>
          );
        })}
      </div>
    </section>
  );
}