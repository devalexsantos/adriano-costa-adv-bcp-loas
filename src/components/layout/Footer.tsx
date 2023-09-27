export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] px-10 pt-5 pb-32 sm:pb-4 text-sm text-center flex flex-col md:flex-row items-center gap-2 justify-center">
      © COPYRIGHT - ADRIANO COSTA ADVOCACIA - DESENVOLVIDO POR:{' '}
      <a
        className="text-brand underline"
        href="https://devalex.com.br"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/assets/logo-da-white.svg" width={35} alt="Logo DevAlex" />
      </a>
    </footer>
  )
}
