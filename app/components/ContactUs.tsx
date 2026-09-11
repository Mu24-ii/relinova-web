'use client';

export default function ContactUs() {
  return (
    <section className="py-20 bg-[#0B1628] text-white" dir="ltr">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
        <form className="grid gap-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="p-4 rounded-xl bg-[#142238] border border-white/10 text-white placeholder-[#B8C2D1] focus:outline-none focus:border-[#D9A62E] transition-colors w-full shadow-lg" 
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="p-4 rounded-xl bg-[#142238] border border-white/10 text-white placeholder-[#B8C2D1] focus:outline-none focus:border-[#D9A62E] transition-colors w-full shadow-lg" 
          />
          <textarea 
            placeholder="Your Message" 
            className="p-4 rounded-xl bg-[#142238] border border-white/10 text-white placeholder-[#B8C2D1] focus:outline-none focus:border-[#D9A62E] transition-colors w-full h-32 shadow-lg"
          ></textarea>
          <button className="bg-[#D9A62E] text-[#0B1628] py-4 rounded-xl font-bold hover:bg-[#F2C75C] transition-all shadow-md">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}