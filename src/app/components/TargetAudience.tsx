import { motion } from 'motion/react';
import { Building2, GraduationCap, Briefcase, Rocket, Users, Check, ArrowUpRight } from 'lucide-react';

interface AudienceGroup {
  icon: React.ElementType;
  shortLabel: string;
  title: string;
  subtitle: string;
  benefits: string[];
  color: string;
}

const audiences: AudienceGroup[] = [
  {
    icon: Building2,
    shortLabel: 'Госорганы',
    title: 'Государственным органам',
    subtitle: 'Стратегическая экспертиза',
    benefits: [
      'Экспертный контур для нормативных инициатив, стандартов и методик внедрения.',
      'Подбор решений и команд для пилотов в госинфраструктуре и приоритетных отраслях.',
      'Площадка согласования требований: государство ↔ бизнес ↔ наука.',
      'Единое окно отраслевых коммуникаций и международного взаимодействия.',
    ],
    color: '#5F68A5',
  },
  {
    icon: GraduationCap,
    shortLabel: 'Академия',
    title: 'Академической среде',
    subtitle: 'От теории к практике',
    benefits: [
      'Канал внедрения R&D в реальный сектор: проекты, заказчики, партнёры.',
      'Совместные программы с индустрией: прикладные исследования и пилоты.',
      'Поддержка молодых специалистов: наставники, стажировки, индустриальные задачи.',
      'Международные связи: партнёрства и кооперация с научными центрами.',
    ],
    color: '#5F891D',
  },
  {
    icon: Briefcase,
    shortLabel: 'Бизнес',
    title: 'Бизнесу',
    subtitle: 'Масштабирование и влияние',
    benefits: [
      'Влияние на правила рынка и стандарты через рабочие группы и экспертизу.',
      'Доступ к пилотным площадкам и отраслевым заказчикам для апробации решений.',
      'Привлечение ресурсов: партнёрское финансирование и инвест-контакты.',
      'Масштабирование через кооперацию внутри экосистемы.',
    ],
    color: '#5F68A5',
  },
  {
    icon: Rocket,
    shortLabel: 'Стартапы',
    title: 'Стартапам и инвесторам',
    subtitle: 'Акселерация капитала',
    benefits: [
      'Быстрая экспертиза проектов и подготовка к пилоту/сделке.',
      'Доступ к заказчикам и точкам апробации внутри национальной экосистемы.',
      'Подключение к акселераторам и международным контактам.',
      'Smart Money: менторство по стратегии, продажам и масштабированию.',
    ],
    color: '#5F891D',
  },
  {
    icon: Users,
    shortLabel: 'Таланты',
    title: 'Студентам и специалистам',
    subtitle: 'Трамплин в индустрию',
    benefits: [
      'Стажировки и участие в реальных проектах участников Ассоциации.',
      'Наставничество и карьерные консультации от лидеров отрасли.',
      'Портфолио через конкурсы, хакатоны и прикладные задачи.',
      'Профессиональный нетворкинг и доступ к мероприятиям.',
    ],
    color: '#5F68A5',
  },
];

const orbitPositions = [
  'lg:absolute lg:top-3 lg:left-1/2 lg:-translate-x-1/2',
  'lg:absolute lg:top-1/2 lg:right-2 lg:-translate-y-1/2',
  'lg:absolute lg:bottom-5 lg:right-1/4',
  'lg:absolute lg:bottom-5 lg:left-1/4',
  'lg:absolute lg:top-1/2 lg:left-2 lg:-translate-y-1/2',
];

const partners = ['BRICS Pay', 'НЦОД', 'СБХ', 'АУРВА', 'Бел. ТПП', 'ПЛАС', 'БелВЭБ', 'ПВТ', 'BYCLOUD'];

export function TargetAudience() {
  return (
    <section className="py-24 relative overflow-hidden" id="audience">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#151515]/10 to-transparent" />

      <div className="absolute top-40 -right-40 w-80 h-80 rounded-full bg-[#5F68A5]/5 blur-3xl" />
      <div className="absolute bottom-40 -left-40 w-80 h-80 rounded-full bg-[#5F891D]/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#5F891D]" />
            <span className="text-[#5F891D] text-sm tracking-[0.2em] uppercase font-medium">Целевая аудитория</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#151515] mb-6 font-bebas leading-[0.95]">
            Доверительное партнерство
            <br />
            <span className="text-[#5F68A5]">для устойчивого роста</span>
          </h2>

          <p className="text-lg text-[#151515]/70 leading-relaxed max-w-3xl">
            Объединяем участников экосистемы, чтобы ускорять внедрение технологий: согласовывать приоритеты, запускать пилоты и масштабировать решения в экономике Республики Беларусь.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-[#151515]/10 bg-[#F3F4E9]/65 p-6 md:p-10 mb-14"
        >
          <div className="relative min-h-[420px] lg:min-h-[540px]">
            <div className="grid gap-4 lg:hidden mb-8">
              {audiences.map((item) => (
                <div key={item.title} className="rounded-2xl bg-white border border-[#151515]/10 px-4 py-3">
                  <p className="text-sm font-semibold text-[#151515]">{item.shortLabel}</p>
                </div>
              ))}
            </div>

            <div className="hidden lg:block absolute inset-0">
              {audiences.map((item, index) => (
                <div key={item.title} className={`${orbitPositions[index]} w-32 xl:w-40`}>
                  <div className="rounded-2xl bg-white border border-[#151515]/10 px-4 py-3 shadow-sm">
                    <p className="text-sm font-semibold text-[#151515] text-center">{item.shortLabel}</p>
                  </div>
                </div>
              ))}

              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
                  <circle cx="50" cy="50" r="36" fill="none" stroke="#5F68A530" strokeDasharray="2 2" />
                  <circle cx="50" cy="50" r="25" fill="none" stroke="#5F891D25" strokeDasharray="1.6 2.8" />
                </svg>
              </div>
            </div>

            <div className="relative mt-4 lg:mt-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-full lg:w-[350px]">
              <div className="rounded-3xl bg-[#151515] border border-white/10 p-6 md:p-8 text-center">
                <div className="mx-auto w-14 h-14 rounded-2xl bg-[#5F891D]/20 text-[#5F891D] flex items-center justify-center mb-4">
                  <Building2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bebas text-[#F3F4E9] leading-tight mb-3">
                  Ассоциация
                  <br />
                  «Кибер Инновации»
                </h3>
                <p className="text-sm text-[#F3F4E9]/70 leading-relaxed">
                  Координационная платформа государства, науки и бизнеса: экспертиза, рабочие группы, пилоты, стандарты и развитие кадров.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#5F891D] text-[#151515] font-bold rounded-full hover:bg-[#5F891D]/90 transition-colors"
            >
              <span>Познакомиться с сообществом</span>
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <div className="h-full p-7 rounded-2xl bg-[#F3F4E9] border border-[#151515]/10">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${audience.color}18`, color: audience.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium tracking-[0.16em] uppercase" style={{ color: audience.color }}>
                      {audience.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#151515] font-bebas tracking-wide mb-4">{audience.title}</h3>

                  <ul className="space-y-3">
                    {audience.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#151515]/75 leading-relaxed">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${audience.color}15` }}
                        >
                          <Check className="w-3 h-3" style={{ color: audience.color }} />
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-[#151515] text-[#F3F4E9] p-8 md:p-10 mb-16"
        >
          <p className="text-base md:text-lg text-[#F3F4E9]/80 leading-relaxed max-w-5xl">
            Ассоциация — практическая площадка, где запрос государства и компетенции бизнеса превращаются в пилоты, внедрения и измеримый эффект для экономики.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <span className="text-sm text-[#151515]/40 tracking-[0.2em] uppercase">Партнеры и соглашения</span>
          </div>

          <div className="relative overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10" />

            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
              className="flex gap-4 md:gap-7 items-center"
            >
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-6 py-3 rounded-xl border border-[#151515]/10 bg-[#F3F4E9]/60"
                >
                  <span className="text-[#151515]/75 font-semibold whitespace-nowrap">{partner}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
