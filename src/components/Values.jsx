const VALUES = [
  {
    icon: 'fa-solid fa-heart',
    title: 'Made with care',
    text: 'Every pixel and interaction is considered, so using our apps feels good.',
  },
  {
    icon: 'fa-solid fa-feather',
    title: 'Simple and light',
    text: 'Focused apps that do one thing well, with no clutter and no confusion.',
  },
  {
    icon: 'fa-solid fa-shield-heart',
    title: 'Respectful of you',
    text: 'Your data and your attention are treated gently, always.',
  },
];

export default function Values() {
  return (
    <section id="values" className="max-w-[1160px] mx-auto px-[24px] py-[80px]">
      <div className="text-center max-w-[640px] mx-auto">
        <h2 className="font-['Fredoka'] font-[600] text-[clamp(2rem,4vw,3rem)] leading-[1.15]">
          Our promise
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[28px] mt-[44px]">
        {VALUES.map((v) => (
          <div key={v.title} className="text-center px-[16px]">
            <div className="w-[72px] h-[72px] mx-auto rounded-full bg-[var(--accent-soft)] text-[var(--accent)] text-[28px] flex items-center justify-center">
              <i className={v.icon} />
            </div>
            <h3 className="font-['Fredoka'] font-[600] text-[22px] mt-[18px]">{v.title}</h3>
            <p className="text-[var(--ink-muted)] mt-[8px]">{v.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}