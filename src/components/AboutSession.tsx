import WhatsAppButton from './WhatsAppButton'

export default function AboutSession() {
  return (
    <section className="p-10 pt-4 flex flex-col items-center">
      <img
        src="./assets/adriano-costa.png"
        width={150}
        height={150}
        alt="Foto do advogado Adriano Costa"
      />
      <h1 className="text-2xl text-brand font-bold">Adriano Costa</h1>
      <ul className="flex flex-col gap-3 mt-3 max-w-[500px] mb-4">
        <li className="flex gap-3">
          <img
            src="./assets/check-list.svg"
            alt="Ícone que representa um check"
          />
          Advocacia especializada em Benefícios do INSS
        </li>
        <li className="flex gap-3">
          <img
            src="./assets/check-list.svg"
            alt="Ícone que representa um check"
          />
          Atendimento 100% online em todo o Brasil
        </li>
        <li className="flex gap-3">
          <img
            src="./assets/check-list.svg"
            alt="Ícone que representa um check"
          />
          Já ajudei em centenas de benefícios
        </li>
        <li className="flex gap-3">
          <img
            src="./assets/check-list.svg"
            alt="Ícone que representa um check"
          />
          Dou entrada no seu pedido em 24 horas
        </li>
      </ul>
      <WhatsAppButton text="Falar com Adriano agora" />
    </section>
  )
}
