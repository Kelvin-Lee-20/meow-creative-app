// 1. 引入所有三个图片
import japaneseWordMatchIcon from '../assets/japanese_word_match_app_icon.png';
import purrMemoIcon from '../assets/purr_memo_icon.png';
import kawaiiPhotoFrameIcon from '../assets/kawaii_photo_frame_app_icon.png';

export default function Hero({ onScrollTo }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-[-120px] right-[-100px] w-[420px] h-[420px] rounded-[999px] bg-[#b6c9f080]" />
      <div className="absolute bottom-[-140px] left-[-120px] w-[360px] h-[360px] rounded-[999px] bg-[#ffe5e2]" />

      <div className="relative max-w-[1160px] mx-auto px-[24px] pt-[72px] pb-[88px] grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-[48px] items-center">
        <div>
          <span className="inline-block bg-[var(--accent-soft)] text-[var(--accent)] font-[700] text-[13px] uppercase tracking-[0.12em] rounded-[999px] px-[16px] py-[6px]">
            Indie iOS studio
          </span>
          <h1 className="font-['Fredoka'] font-[600] text-[clamp(2.4rem,6vw,4.4rem)] leading-[1.08] mt-[20px]">
            Little apps that make every day a bit more{' '}
            <span className="text-[var(--accent)]">purr-fect</span>
          </h1>
          
          {/* 👇 这里更新了文案 */}
          <p className="text-[var(--ink-muted)] text-[19px] max-w-[52ch] mt-[20px]">
            Meow Creative App Studio crafts cute, thoughtful iPhone apps for learning,
            remembering and creating. Explore our latest releases, with more on the way.
          </p>

          <div className="flex flex-wrap gap-[14px] mt-[32px]">
            <button
              className="bg-[var(--accent)] text-[var(--on-accent)] font-[700] rounded-[999px] px-[30px] py-[14px] shadow-[0_10px_24px_rgba(233,59,129,0.3)] hover:opacity-90"
              onClick={() => onScrollTo('apps')}
            >
              Explore our apps <i className="fa-solid fa-arrow-down ml-[6px]" />
            </button>
            <button
              className="bg-[var(--surface)] text-[var(--ink)] font-[700] rounded-[999px] px-[30px] py-[14px] border-2 border-solid border-[var(--line)] hover:border-[var(--accent)]"
              onClick={() => onScrollTo('about')}
            >
              Meet the studio
            </button>
          </div>
        </div>

        <div className="relative h-[380px] flex items-center justify-center">
          {/* 左上角粉色框：purr_memo_icon */}
          <div className="absolute w-[230px] h-[230px] rounded-[56px] bg-[linear-gradient(135deg,#ff9dbd,#e93b81)] -rotate-[8deg] left-[4%] top-[8%] shadow-[0_20px_40px_rgba(233,59,129,0.3)] flex items-center justify-center animate-[floaty_5s_ease-in-out_infinite] overflow-hidden">
            <img 
              src={purrMemoIcon} 
              alt="Purr Memo App Icon" 
              className="w-full h-full object-cover rounded-[56px]" 
            />
          </div>
          
          {/* 右上角蓝色框：japanese_word_match_app_icon */}
          <div className="absolute w-[190px] h-[190px] rounded-[48px] bg-[linear-gradient(135deg,#d3e0ff,#7f9fe6)] rotate-[9deg] right-[2%] top-[2%] shadow-[0_20px_40px_rgba(127,159,230,0.35)] flex items-center justify-center animate-[floaty_6s_ease-in-out_infinite] overflow-hidden">
            <img 
              src={japaneseWordMatchIcon} 
              alt="Japanese Word Match App Icon" 
              className="w-full h-full object-cover rounded-[48px]" 
            />
          </div>

          {/* 右下角黄色框：kawaii_photo_frame_app_icon */}
          <div className="absolute w-[170px] h-[170px] rounded-[44px] bg-[linear-gradient(135deg,#ffe9a8,#ffb86b)] -rotate-[4deg] right-[18%] bottom-[0%] shadow-[0_20px_40px_rgba(255,184,107,0.35)] flex items-center justify-center animate-[floaty_7s_ease-in-out_infinite] overflow-hidden">
            <img 
              src={kawaiiPhotoFrameIcon} 
              alt="Kawaii Photo Frame App Icon" 
              className="w-full h-full object-cover rounded-[44px]" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}