'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  defaultValue?: string;
  className?: string;
  children: React.ReactNode;
}

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
}

interface AccordionTriggerProps {
  className?: string;
  children: React.ReactNode;
}

interface AccordionContentProps {
  className?: string;
  children: React.ReactNode;
}

const AccordionContext = React.createContext<{
  openItems: string[];
  toggleItem: (value: string) => void;
}>({
  openItems: [],
  toggleItem: () => {},
});

const AccordionItemContext = React.createContext<{
  value: string;
  isOpen: boolean;
}>({
  value: '',
  isOpen: false,
});

export function Accordion({ type = 'single', defaultValue, className, children }: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(defaultValue ? [defaultValue] : []);

  const toggleItem = (value: string) => {
    if (type === 'single') {
      setOpenItems(openItems.includes(value) ? [] : [value]);
    } else {
      setOpenItems(
        openItems.includes(value)
          ? openItems.filter((item) => item !== value)
          : [...openItems, value]
      );
    }
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ value, children }: AccordionItemProps) {
  const { openItems } = React.useContext(AccordionContext);
  const isOpen = openItems.includes(value);

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div className="border-b border-gray-200 last:border-b-0">{children}</div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({ className, children }: AccordionTriggerProps) {
  const { value, isOpen } = React.useContext(AccordionItemContext);
  const { toggleItem } = React.useContext(AccordionContext);

  return (
    <button
      onClick={() => toggleItem(value)}
      className={`flex w-full items-start justify-between gap-4 py-4 text-left transition-all hover:underline outline-none ${className || ''}`}
    >
      {children}
      <ChevronDown
        className={`h-4 w-4 shrink-0 text-gray-900 transition-transform duration-200 ${
          isOpen ? 'rotate-180' : ''
        }`}
      />
    </button>
  );
}

export function AccordionContent({ className, children }: AccordionContentProps) {
  const { isOpen } = React.useContext(AccordionItemContext);

  if (!isOpen) return null;

  return (
    <div className={`pb-4 pt-0 ${className || ''}`}>
      {children}
    </div>
  );
}

