import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

interface DepoimentoCardProps {
  nome: string;
  idade: number;
  cidade: string;
  texto: string;
}

export function DepoimentoCard({ nome, idade, cidade, texto }: DepoimentoCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow bg-white">
      <CardContent className="p-6 relative">
        <QuoteIcon className="w-8 h-8 text-[#C85C40] absolute top-4 right-4" />
        <div className="space-y-4">
          <p className="text-[#AA8878] italic relative z-10">
            &ldquo;{texto}&rdquo;
          </p>
          <div className="text-sm border-t border-[#F2E8DC] pt-4">
            <p className="font-semibold text-[#5B7B7A]">{nome}, {idade}</p>
            <p className="text-[#AA8878]">{cidade}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
