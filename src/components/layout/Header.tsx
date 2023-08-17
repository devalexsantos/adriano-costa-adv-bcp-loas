import WhatsAppButton from '../WhatsAppButton'

export default function Header() {
  return (
    <header className="py-20 m-auto flex flex-col items-center bg-hero bg-cover bg-no-repeat">
      <div className="w-full max-w-5xl px-10 flex flex-col gap-4 items-center">
        <img
          src="./assets/adriano-costa.png"
          width={250}
          height={250}
          alt="Foto do Adriano Costa"
        />
        <h1 className="text-3xl font-bold text-center mt-3 text-brand">
          Especialista em BPC/LOAS
        </h1>
        <h2 className="text-xl font-bold mt-3 text-center">
          Pedimos seu BPC/LOAS pelo celular
        </h2>
        <WhatsAppButton text="Falar com advogado" />
        <p className="text-xl font-bold mt-3 text-center">
          Encaminhamos seu BPC/LOAS no mesmo dia
        </p>
        <p className="text-2xl font-bold mt-3 text-center text-brand">
          Atendimento em todo o Brasil!
        </p>
      </div>
      <a href="#steps">
        <img
          className="mt-10"
          src="./assets/iconArrowDown.svg"
          width={32}
          height={32}
          alt="Ícone de uma seta apontando para baixo"
        />
      </a>
    </header>
  )
}
