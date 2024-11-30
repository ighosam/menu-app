import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const buyTip = () => {
  return (
    <Accordion type="single" collapsible >
  <AccordionItem value="item-1" >
    <AccordionTrigger className="text-2xl">Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">

    <AccordionTrigger>Is it?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>

</Accordion>
  )
}

export default buyTip