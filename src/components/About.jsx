// 1. 在顶部导入你的小猫 Logo
// 确保路径 '../assets/cat-logo.png' 与你实际的图片路径和文件名一致
import catLogo from '../assets/cat-logo.png'; 

export default function About() {
  const stats = [
    { value: '3', label: 'Apps released' },
    { value: 'iOS', label: 'Made for iPhone' },
    { value: '100%', label: 'Handcrafted' },
  ];

  return (
    <section id="about" className="bg-[var(--surface)] border-y border-solid border-[var(--line)]">
      <div className="max-w-[1160px] mx-auto px-[24px] py-[80px] grid grid-cols-1 md:grid-cols-2 gap-[48px] items-center">
        
        {/* 2. 替换左侧的渐变框内容 */}
        <div className="rounded-[40px] -bg-[linear-gradient(135deg,#ffe5e2,#b6c9f0)] min-h-[320px] flex items-center justify-center p-[32px]">
          <img 
            src={catLogo} 
            alt="Meow Creative App Studio Logo" 
            // mix-blend-multiply 可以把图片的白色背景过滤掉，融入渐变背景
            className="w-[240px] h-[240px] object-contain mix-blend-multiply drop-shadow-sm" 
          />
        </div>

        <div>
          <h2 className="font-['Fredoka'] font-[600] text-[clamp(2rem,4vw,3rem)] leading-[1.15]">
            A tiny studio with a big love for cute things
          </h2>
          <p className="text-[var(--ink-muted)] mt-[18px]">
            Meow Creative App Studio is an independent iOS developer making apps that feel
            warm, simple and a little bit magical. Everything is designed, built and polished
            by hand.
          </p>
          <p className="text-[var(--ink-muted)] mt-[14px]">
            We believe useful software can also be delightful, so every app gets friendly
            visuals, smooth interactions and care for the details.
          </p>

          <div className="grid grid-cols-3 gap-[16px] mt-[32px]">
            {stats.map((s) => (
              <div key={s.label} className="bg-[var(--accent-soft)] rounded-[22px] p-[18px] text-center">
                <div className="font-['Fredoka'] font-[700] text-[34px] text-[var(--accent)]">
                  {s.value}
                </div>
                <div className="text-[14px] text-[var(--ink-muted)] font-[600]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}