import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowUpRight, MapPin, Users, Rocket, Server, Globe } from 'lucide-react';
import { withBasePath } from '../utils/withBasePath';

interface Achievement {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  participants?: string;
  highlight?: string;
}

const achievements: Achievement[] = [
  {
    title: 'Рабочие сессии по запуску BELARUS AI DATA CENTER',
    description:
      'Совместно с государством, бизнесом и экспертами прорабатываем архитектуру, требования и модель доступа к вычислительной инфраструктуре для проектов национального масштаба.',
    date: '2025–2026',
    location: 'Минск, Республика Беларусь',
    image: withBasePath('/materials/brandbook-media/image26.png'),
    participants: 'Профильные рабочие группы',
    highlight: 'Ключевой проект',
  },
  {
    title: 'Меморандумы и партнёрские договорённости',
    description:
      'Развиваем сеть национальных и международных партнёров для совместных проектов, пилотов и отраслевой кооперации.',
    date: 'Регулярно',
    location: 'Беларусь / Международные площадки',
    image: withBasePath('/materials/brandbook-media/image39.png'),
  },
  {
    title: 'Круглые столы по нормативной и инвестиционной повестке',
    description:
      'Согласовываем приоритеты, требования и механики внедрения: государство, наука, инвесторы и технологические компании.',
    date: 'Ежеквартально',
    location: 'Минск, Республика Беларусь',
    image: withBasePath('/materials/brandbook-media/image40.png'),
    participants: 'Эксперты и члены Ассоциации',
  },
];

const projects = [
  {
    title: 'BELARUS AI DATA CENTER',
    status: 'Проектирование инфраструктуры',
    description: 'Создаём национальный контур вычислительных мощностей для ИИ-проектов и прикладных исследований.',
    icon: Server,
    progress: 35,
  },
  {
    title: 'Партнёрское финансирование',
    status: 'Подготовка запуска в 2026',
    description: 'Механика отбора и финансирования проектов: экспертиза, критерии, сопровождение до пилота и масштабирования.',
    icon: Users,
    progress: 60,
  },
  {
    title: 'Международная конференция',
    status: 'Формирование деловой программы',
    description: 'Площадка по конвергентным технологиям: кейсы внедрения, стандарты, инвестиции, экспорт.',
    icon: Globe,
    progress: 20,
  },
  {
    title: 'Общая экосистема участников',
    status: 'MVP-проект',
    description: 'Единая среда для коммуникации и кооперации: рабочие группы, запросы, проекты, календарь активностей.',
    icon: Rocket,
    progress: 45,
  },
];

function DotPattern({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="100" height="100" viewBox="0 0 100 100" fill="none">
      {[...Array(10)].map((_, i) =>
        [...Array(10)].map((__, j) => <circle key={`${i}-${j}`} cx={i * 10 + 5} cy={j * 10 + 5} r="1.5" fill="currentColor" opacity="0.3" />),
      )}
    </svg>
  );
}

export function Achievements() {
  return (
    <section className="py-24 relative overflow-hidden" id="projects">
      <div className="absolute inset-0 bg-[#151515]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5F68A5]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5F891D]/50 to-transparent" />

      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#5F68A5]/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-[#5F891D]/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 max-w-16 bg-[#5F68A5]" />
            <span className="text-[#5F68A5] text-sm tracking-[0.3em] uppercase font-medium">Достижения и проекты</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#F3F4E9] font-bebas tracking-tight">
            Реальные шаги в развитии экосистемы
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 lg:row-span-2 group"
          >
            <div className="relative h-full min-h-[520px] rounded-2xl overflow-hidden bg-[#1a1a1a] border border-white/5">
              <ImageWithFallback
                src={achievements[0].image}
                alt={achievements[0].title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/65 to-transparent" />

              <div className="absolute top-6 right-6 text-[#5F891D]/40 hidden sm:block">
                <DotPattern />
              </div>

              {achievements[0].highlight && (
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5F891D] text-[#151515] text-xs font-bold uppercase tracking-wider rounded-full">
                    <span className="w-2 h-2 bg-[#151515] rounded-full animate-pulse" />
                    {achievements[0].highlight}
                  </span>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex flex-wrap items-center gap-5 mb-4 text-[#F3F4E9]/60 text-sm">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {achievements[0].location}
                  </span>
                  {achievements[0].participants && (
                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {achievements[0].participants}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#F3F4E9] mb-3 font-bebas tracking-wide leading-tight">
                  {achievements[0].title}
                </h3>
                <p className="text-[#F3F4E9]/72 text-base max-w-2xl mb-4 leading-relaxed">{achievements[0].description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-[#5F68A5] font-semibold">{achievements[0].date}</span>
                  <span className="flex items-center gap-2 text-[#F3F4E9]">
                    <span className="text-sm font-medium">Ключевая активность</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {[achievements[1], achievements[2]].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + idx * 0.1 }}
              className="lg:col-span-4 group"
            >
              <div className="relative h-full min-h-[250px] rounded-2xl overflow-hidden bg-[#1a1a1a] border border-white/5 hover:border-[#5F68A5]/30 transition-colors">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/80 to-[#151515]/60" />

                <div className="relative h-full p-6 flex flex-col justify-end">
                  <span className="text-[#5F68A5] text-xs font-semibold tracking-wider uppercase mb-2">{item.date}</span>
                  <h3 className="text-lg font-bold text-[#F3F4E9] mb-2 font-bebas tracking-wide leading-tight">{item.title}</h3>
                  <p className="text-[#F3F4E9]/65 text-sm leading-relaxed">{item.description}</p>

                  <div className="mt-4 flex flex-wrap items-center gap-3 text-[#F3F4E9]/50 text-xs">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                    {item.participants && (
                      <span className="flex items-center gap-2">
                        <Users className="w-3 h-3" />
                        {item.participants}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-[#F3F4E9] font-bebas tracking-wide">Текущие проекты</h3>
            <div className="h-px flex-1 bg-white/10" />
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="group"
                >
                  <div className="relative p-6 rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-[#5F68A5]/30 transition-all duration-300 h-full">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-white/5 rounded-t-2xl overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 + index * 0.08 }}
                        className="h-full bg-gradient-to-r from-[#5F68A5] to-[#5F891D]"
                      />
                    </div>

                    <div className="mb-5 flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#5F68A5]/10 flex items-center justify-center text-[#5F68A5] group-hover:bg-[#5F68A5] group-hover:text-[#151515] transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono text-[#5F891D]">{project.progress}%</span>
                    </div>

                    <div className="mb-3">
                      <span className="inline-flex items-center gap-2 text-xs text-[#F3F4E9]/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5F891D] animate-pulse" />
                        {project.status}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-[#F3F4E9] mb-2 font-bebas tracking-wide">{project.title}</h4>
                    <p className="text-sm text-[#F3F4E9]/62 leading-relaxed">{project.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#documents"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 text-[#F3F4E9]/65 hover:border-[#5F68A5]/50 hover:text-[#F3F4E9] transition-all"
          >
            <span className="text-sm">Документы, регламенты и материалы по проектам</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
