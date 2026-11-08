const APPS = [
  {
    title: 'Japanese Word Match',
    category: 'Education / Games',
    description:
      'Learn Japanese vocabulary by matching words and meanings in quick, playful rounds. Perfect for a few minutes a day.',
    gradient: 'bg-[linear-gradient(135deg,#d3e0ff,#7f9fe6)]',
    icon: 'fa-solid fa-language',
  },
  {
    title: 'Purr Memo',
    category: 'Productivity / Notes',
    description:
      'A cozy memo and notes app with a cat-loving heart. Jot down ideas, lists and reminders without any fuss.',
    gradient: 'bg-[linear-gradient(135deg,#ff9dbd,#e93b81)]',
    icon: 'fa-solid fa-paw',
  },
  {
    title: 'Kawaii Photo Frame',
    category: 'Photo / Creativity',
    description:
      'Dress up your photos with adorable frames and stickers, then share your cutest moments with friends.',
    gradient: 'bg-[linear-gradient(135deg,#ffe9a8,#ffb86b)]',
    icon: 'fa-solid fa-camera-retro',
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
          <article
            key={app.title}
            className="bg-[var(--surface)] rounded-[32px] border-2 border-solid border-[var(--line)] p-[32px] flex flex-col shadow-[0_12px_30px_rgba(59,42,74,0.06)] hover:shadow-[0_18px_40px_rgba(59,42,74,0.12)] transition"
          >
            <div className={`w-[88px] h-[88px] rounded-[26px] ${app.gradient} text-white text-[40px] flex items-center justify-center`}>
              <i className={app.icon} />
            </div>
            <h3 className="font-['Fredoka'] font-[600] text-[26px] mt-[24px]">{app.title}</h3>
            <span className="text-[var(--accent)] font-[700] text-[13px] uppercase tracking-[0.1em] mt-[4px]">
              {app.category}
            </span>
            <p className="text-[var(--ink-muted)] mt-[14px] flex-1">{app.description}</p>
            <div className="mt-[24px] inline-flex items-center gap-[8px] self-start bg-[var(--bg-inverse)] text-[var(--ink-inverse)] font-[700] text-[14px] rounded-[999px] px-[18px] py-[10px]">
              <i className="fa-brands fa-apple text-[18px]" /> App Store
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}