"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface FaqSectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  items: {
    question: string;
    answer: string;
  }[];
}

export function Faq({ title, description, items, ...props }: FaqSectionProps) {
  return (
    <section {...props}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center mb-12"
      >
        <h2 className="text-3xl font-semibold mb-3 text-foreground/70">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </motion.div>
      {/* FAQ Items */}
      <Accordion type="multiple" className="max-w-2xl mx-auto space-y-2">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.2 }}
          >
            <AccordionItem
              value={`question-${index + 1}`}
              className={cn(
                "border border-border/50 rounded-md",
                "data-[state=open]:bg-gradient-to-br from-background via-muted/50 to-background" // Controls the Background on open
              )}
            >
              <AccordionTrigger className="text-base font-medium hover:bg-muted/50 text-foreground/70 data-[state=open]:text-foreground">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </section>
  );
}
