import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface LoadingProps {
  message: string;
}

export function Loading({ message }: LoadingProps) {
  return (
    <div className="fixed inset-0 bg-[#5B7B7A]/80 backdrop-blur-sm flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center px-4 w-full max-w-2xl"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="inline-block mb-6"
        >
          <Heart className="w-16 h-16 text-[#C85C40]" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-[#F2E8DC]">
            {message}
          </h2>
          <p className="text-[#D2A878]">
            Estamos analisando suas respostas para criar um resultado personalizado
          </p>
        </motion.div>

        {/* Barra de Progresso */}
        <motion.div 
          className="mt-8 w-full h-2 bg-[#F2E8DC]/20 rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full bg-[#8BA888]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 8,
              ease: "linear"
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
