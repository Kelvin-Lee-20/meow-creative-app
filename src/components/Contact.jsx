import { useRef, useState } from 'react';

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | pending | error | submitted
  const [showValidation, setShowValidation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form || !form.checkValidity()) {
      setShowValidation(true);
      return;
    }
    setShowValidation(false);
    setStatus('pending');
    // Replace with your own submission endpoint.
    setTimeout(() => setStatus('submitted'), 1200);
  };

  return (
    <section id="contact" className="max-w-[1160px] mx-auto px-[24px] pb-[88px]">
      <div className="bg-[var(--bg-inverse)] text-[var(--ink-inverse)] rounded-[40px] px-[28px] py-[56px] md:px-[64px] grid grid-cols-1 md:grid-cols-2 gap-[40px]">
        <div>
          <h2 className="font-['Fredoka'] font-[600] text-[clamp(2rem,4vw,2.8rem)] leading-[1.15]">
            Say hello to the studio
          </h2>
          <p className="text-[#e9dcee] mt-[14px]">
            Feedback, ideas, support questions or collaboration, we love hearing from you.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-[14px]"
        >
          {status !== 'submitted' && (
            <>
              <label htmlFor="c-name" className="font-[700] text-[14px]">
                Your name
              </label>
              <input
                id="c-name"
                name="name"
                type="text"
                required
                className="rounded-[16px] bg-white text-[var(--ink)] px-[18px] py-[12px] focus:outline-[3px] focus:outline-solid focus:outline-[var(--accent)]"
              />

              <label htmlFor="c-email" className="font-[700] text-[14px]">
                Email
              </label>
              <input
                id="c-email"
                name="email"
                type="email"
                required
                className="rounded-[16px] bg-white text-[var(--ink)] px-[18px] py-[12px] focus:outline-[3px] focus:outline-solid focus:outline-[var(--accent)]"
              />

              <label htmlFor="c-msg" className="font-[700] text-[14px]">
                Message
              </label>
              <textarea
                id="c-msg"
                name="message"
                rows={4}
                required
                className="rounded-[16px] bg-white text-[var(--ink)] px-[18px] py-[12px] focus:outline-[3px] focus:outline-solid focus:outline-[var(--accent)]"
              />

              {showValidation && (
                <p className="text-[#ffb3c9] font-[600] text-[14px]">
                  Please fill in every field with a valid email.
                </p>
              )}
              {status === 'error' && (
                <p className="text-[#ffb3c9] font-[600] text-[14px]">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'pending'}
                className="self-start bg-[var(--accent)] text-[var(--on-accent)] font-[700] rounded-[999px] px-[30px] py-[13px] hover:opacity-90 disabled:opacity-50 disabled:pointer-events-none"
              >
                {status === 'pending' ? 'Sending...' : 'Send message'}
              </button>
            </>
          )}

          {status === 'submitted' && (
            <div className="bg-white/10 rounded-[24px] p-[28px]">
              <div className="font-['Fredoka'] font-[600] text-[24px]">Thank you!</div>
              <p className="mt-[6px] text-[#e9dcee]">
                Your message has landed safely. We will get back to you soon.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}