"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { useRouter } from 'next/navigation';

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const pages = [
  {
    group: "Informações sobre a dengue",
    pages: [
      {
        value: "como é transmitida?",
        label: "Como é transmitida?",
        href: "/dengue#transmissão",
      },
      {
        value: "formas de prevenção",
        label: "Formas de prevenção",
        href: "/dengue#preveninir",
      },
      {
        value: "sintomas",
        label: "Sintomas",
        href: "/dengue#sintomas",
      },
    ],
  },
  {
    group: "Cuidados e prevenção",
    pages: [
      {
        value: "vacina",
        label: "Vacina",
        href: "/cuidados#vacina",
      },
      {
        value: "medicamentos contra indicados",
        label: "Medicamentos contra indicados",
        href: "/cuidados#medicamentos",
      },
    ],
  },
  {
    group: "Estatísticas",
    pages: [
      {
        value: "estatísticas",
        label: "Estatísticas",
        href: "/estatisticas",
      },
    ],
  },
];

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const { push } = useRouter();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline_clear"
          role="combobox"
          aria-expanded={open}
          className="w-[240px] justify-between rounded-full bg-transparent text-white border-green-500 hidden md:flex"
        >
          {value
            ? pages
                .flatMap((group) => group.pages)
                .find((page) => page.value === value)?.label
            : "O que você está procurando?"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Pesquisar..." />
          <CommandList>
            <CommandEmpty>Nenhuma informação encontrada</CommandEmpty>
            {pages.map((group) => (
              <CommandGroup key={group.group} heading={group.group}>
                {group.pages.map((page) => (
                  <CommandItem
                    key={page.value}
                    value={page.value}
                    onSelect={(currentValue) => {
                      console.log(page.href)
                      push(page.href);
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === page.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {page.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
