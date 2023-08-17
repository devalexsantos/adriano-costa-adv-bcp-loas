import WhatsAppButton from './WhatsAppButton'

export default function StepByStep() {
  return (
    <section id="steps" className="p-10 flex flex-col items-center gap-3">
      <h1 className="text-2xl text-center mb-4">Veja como é simples!</h1>
      <ul className="max-w-[500px] flex flex-col gap-2 mb-4">
        <li className="bg-[#320606] p-3 rounded-xl flex items-center gap-3">
          <img src="./assets/chat-icon.svg" alt="Ícone de Chat" />
          Você me conta o caso em uma reunião online
        </li>
        <li className="bg-[#320606] p-3 rounded-xl flex items-center gap-3">
          <img src="./assets/media-icon.svg" alt="Ícone de Chat" />
          Você me envia fotos dos documentos
        </li>
        <li className="bg-[#320606] p-3 rounded-xl flex items-center gap-3">
          <img src="./assets/paper-icon.svg" alt="Ícone de Chat" />
          Eu preparo o procedimento online
        </li>
        <li className="bg-[#320606] p-3 rounded-xl flex items-center gap-3">
          <img src="./assets/smartphone-icon.svg" alt="Ícone de Chat" />
          Você assina pelo celular
        </li>
        <li className="bg-[#320606] p-3 rounded-xl flex items-center gap-3">
          <img src="./assets/law-balance-icon.svg" alt="Ícone de Chat" />
          Eu mando para o INSS ou para o juiz no mesmo dia ou no dia seguinte
        </li>
      </ul>
      <WhatsAppButton text="Falar com um especialista" />
    </section>
  )
}
