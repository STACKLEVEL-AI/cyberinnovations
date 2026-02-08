import { motion } from 'motion/react';
import { ArrowDown, ArrowRight, Download, Building2, Cpu, DollarSign } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const keyPoints = [
  {
    value: '$200+ млн',
    label: 'целевой объем отраслевого фонда поддержки стартапов',
    icon: DollarSign,
  },
  {
    value: '7',
    label: 'технологических подкомитетов для развития конвергентных технологий',
    icon: Cpu,
  },
  {
    value: 'Гос-во + Бизнес + Наука',
    label: 'единая модель координации инновационной политики Республики Беларусь',
    icon: Building2,
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="about">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="/materials/brandbook-media/image40.png"
          alt="Технологический фон Ассоциации"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0f1115]/90" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#5F68A5]/30 via-transparent to-[#5F891D]/20" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#5F68A5]/25 to-transparent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#5F891D]/25 to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-[#5F68A5]/25 to-transparent" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5F68A5]/15 to-transparent" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5F891D]/15 to-transparent" />
      </div>

      <div className="absolute top-24 -left-40 w-[420px] h-[420px] rounded-full bg-[#5F68A5]/20 blur-[128px]" />
      <div className="absolute bottom-12 -right-40 w-[420px] h-[420px] rounded-full bg-[#5F891D]/20 blur-[128px]" />

      <div className="container mx-auto px-4 relative z-10 py-24 md:py-32">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-[#5F891D]" />
              <span className="text-[#5F891D] text-sm tracking-[0.2em] uppercase font-medium">
                Республика Беларусь
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#F3F4E9] mb-8 font-bebas leading-[0.95] tracking-tight max-w-5xl">
              Ассоциация Цифровых
              <br />
              Технологий и Инноваций
              <br />
              <span className="text-[#5F68A5]">«Кибер Инновации»</span>
            </h1>

            <p className="text-base md:text-xl text-[#F3F4E9]/80 mb-10 leading-relaxed max-w-4xl">
              «Объединяя лидеров в сфере инноваций, мы строим будущую цифровую экономику Республики Беларусь — внедряя
              технологии, которые трансформируют бизнес и общество, укрепляют технологический суверенитет и закладывают
              основы для поколений завтрашнего дня»
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 bg-[#5F891D] text-[#151515] font-bold rounded-full hover:bg-[#5F891D]/90 transition-colors w-full sm:w-auto"
              >
                <span>Подать заявку на вступление</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="/materials/assosiation-3.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 border border-[#F3F4E9]/35 text-[#F3F4E9] font-medium rounded-full hover:bg-[#F3F4E9]/10 transition-colors w-full sm:w-auto"
              >
                <Download className="w-5 h-5" />
                <span>Скачать презентацию (PDF)</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-14 grid md:grid-cols-3 gap-5"
          >
            {keyPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-[#5F68A5]" />
                    <span className="text-xl md:text-2xl font-bold text-[#F3F4E9] font-bebas">{point.value}</span>
                  </div>
                  <p className="text-sm text-[#F3F4E9]/65 leading-relaxed">{point.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-[#F3F4E9]/45"
        >
          <span className="text-xs tracking-wider uppercase">Прокрутите</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
