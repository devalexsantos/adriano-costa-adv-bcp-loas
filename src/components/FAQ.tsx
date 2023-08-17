import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { questions } from '@/mock/questions'
import WhatsAppButton from './WhatsAppButton'

export default function FAQ() {
  return (
    <section className="flex flex-col items-center pb-10">
      <h1 className="text-2xl font-bold text-center">Perguntas frequentes</h1>
      <div className="flex w-full max-w-[500px] justify-center px-10">
        <Accordion
          className="w-full mt-4 mb-5 flex flex-col gap-1"
          type="single"
          collapsible
        >
          {questions.map((question, index) => (
            <AccordionItem
              className="bg-[#320606] px-3 border-none rounded-xl"
              value={`item-${index}`}
              key={index}
            >
              <AccordionTrigger className="font-bold text-brand text-left">
                {question.title}
              </AccordionTrigger>
              <AccordionContent>
                {question.answers.map((text, textIndex) => (
                  <p className="py-1" key={textIndex}>
                    {text.text}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <WhatsAppButton text="Falar com um advogado" />
    </section>
  )
}
