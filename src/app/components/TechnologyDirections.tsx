import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Link, Radio, Shield, Cpu, Cloud, Zap, ArrowUpRight, X } from 'lucide-react';

interface Direction {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  color: string;
}

const directions: Direction[] = [
  {
    icon: Brain,
    title: 'Нейронные сети',
    subtitle: 'AI',
    description:
      'Ассоциация содействует внедрению ИИ в реальный сектор, обеспечивая бизнесу доступ к государственным наборам данных (Datasets) для обучения моделей. Мы выступаем экспертным центром для госорганов в разработке этических и правовых стандартов использования ИИ, а для академической среды создаем площадки для коммерциализации наукоемких алгоритмов через пилотные проекты.',
    color: '#5F68A5',
  },
  {
    icon: Link,
    title: 'Распределенные реестры',
    subtitle: 'Blockchain',
    description:
      'Мы формируем прозрачную правовую среду для блокчейн-проектов, обеспечивая бизнесу защиту интересов при работе с цифровыми активами. Ассоциация помогает инвесторам находить надежные финтех-стартапы, а государству — внедрять защищенные реестры в систему управления, укрепляя технологический суверенитет и доверие к цифровым операциям.',
    color: '#5F891D',
  },
  {
    icon: Radio,
    title: 'Интернет вещей',
    subtitle: 'IoT',
    description:
      'Создаем «зеленый коридор» для тестирования IoT-решений, предоставляя стартапам и компаниям доступ к промышленной и городской инфраструктуре. Комитет координирует внедрение систем «умного города» в рамках госпрограмм, а для студентов и инженеров организует хакатоны по разработке прикладных датчиков и систем мониторинга.',
    color: '#5F68A5',
  },
  {
    icon: Shield,
    title: 'Кибербезопасность',
    subtitle: 'Cybersecurity',
    description:
      'Разрабатываем единые стандарты защиты критической инфраструктуры, обеспечивая государству высокий уровень национальной безопасности. Мы помогаем ИТ-компаниям сертифицировать свои продукты и выходить на международные рынки как надежные поставщики, а для специалистов организуем доступ к глобальной экспертизе и форумам по отражению киберугроз.',
    color: '#5F891D',
  },
  {
    icon: Cpu,
    title: 'Микроэлектроника и робототехника',
    subtitle: 'Microelectronics & Robotics',
    description:
      'Связываем фундаментальную науку с реальным производством для создания отечественной компонентной базы. Комитет лоббирует налоговые льготы и меры поддержки для производителей «железа», помогая предприятиям проводить глубокую автоматизацию и внедрять робототехнические комплексы в рамках импортозамещения.',
    color: '#5F68A5',
  },
  {
    icon: Cloud,
    title: 'Инфраструктура для вычислений',
    subtitle: 'Cloud Computing',
    description:
      'Обеспечиваем коллективный доступ членов Ассоциации к мощным вычислительным ресурсам, снижая затраты бизнеса на хранение и обработку данных. Мы помогаем госорганам в создании устойчивых национальных облачных платформ, а академической среде — в получении мощностей для проведения масштабных цифровых экспериментов.',
    color: '#5F891D',
  },
  {
    icon: Zap,
    title: 'Энергетическая инфраструктура',
    subtitle: 'Energy',
    description:
      'Фокусируемся на энергетической безопасности IT-сектора, внедряя технологии Smart Grid и возобновляемых источников. Ассоциация помогает энергетическим компаниям интегрировать инновационные разработки в энергосистему страны, обеспечивая инвесторам возвратность вложений через повышение энергоэффективности крупных ЦОДов и производств.',
    color: '#5F68A5',
  },
];

export function TechnologyDirections() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden" id="directions">
      <div className="absolute inset-0 bg-[#151515]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5F68A5]/30 to-transparent" />

      <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-[#5F68A5]/10 blur-[100px]" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full bg-[#5F891D]/10 blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#5F68A5]" />
            <span className="text-[#5F68A5] text-sm tracking-[0.2em] uppercase font-medium">Подкомитеты Ассоциации</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F3F4E9] font-bebas leading-[0.95]">
              7 направлений
              <br />
              <span className="text-[#5F891D]">конвергентных технологий</span>
            </h2>
            <p className="text-lg text-[#F3F4E9]/65 leading-relaxed max-w-lg">
              Ассоциация является добровольным объединением юридических лиц, сфокусированным на развитии и внедрении
              прикладных технологических решений.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {directions.map((direction, index) => {
            const Icon = direction.icon;
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`${index === 6 ? 'md:col-start-2' : ''}`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className={`
                    relative p-6 rounded-2xl cursor-pointer transition-all duration-300 h-full min-h-[220px]
                    ${
                      isActive
                        ? 'bg-[#F3F4E9] text-[#151515]'
                        : 'bg-[#1a1a1a] border border-white/5 hover:border-white/10 text-[#F3F4E9]'
                    }
                  `}
                >
                  <div
                    className={`absolute top-4 right-4 text-5xl font-bebas leading-none transition-colors duration-300 ${
                      isActive ? 'text-[#151515]/10' : 'text-white/5'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? `${direction.color}22` : `${direction.color}15`,
                      color: direction.color,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3
                    className={`text-lg font-bold font-bebas tracking-wide mb-2 leading-tight transition-colors duration-300 ${
                      isActive ? 'text-[#151515]' : 'text-[#F3F4E9]'
                    }`}
                  >
                    {direction.title}
                  </h3>
                  <p className="text-xs font-medium transition-colors duration-300" style={{ color: direction.color }}>
                    {direction.subtitle}
                  </p>

                  <div className={`absolute bottom-4 right-4 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    <ArrowUpRight className="w-4 h-4" style={{ color: direction.color }} />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              <div className="relative rounded-2xl bg-[#1a1a1a] border border-white/10 p-8 md:p-10">
                <button
                  onClick={() => setActiveIndex(null)}
                  className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                  aria-label="Закрыть подробности"
                >
                  <X className="w-5 h-5 text-[#F3F4E9]/60" />
                </button>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                      style={{
                        backgroundColor: `${directions[activeIndex].color}20`,
                        color: directions[activeIndex].color,
                      }}
                    >
                      {(() => {
                        const Icon = directions[activeIndex].icon;
                        return <Icon className="w-8 h-8" />;
                      })()}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#F3F4E9] font-bebas tracking-wide mb-2">
                      {directions[activeIndex].title}
                    </h3>
                    <p className="text-sm font-medium" style={{ color: directions[activeIndex].color }}>
                      {directions[activeIndex].subtitle}
                    </p>
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="text-[#F3F4E9]/75 leading-relaxed text-base">{directions[activeIndex].description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-[#F3F4E9]/40">Нажмите на карточку, чтобы открыть подробное описание направления</p>
        </motion.div>
      </div>
    </section>
  );
}
