import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react';
import logo from '../../../logos/Logo-ACI-RUS.ver1.svg';
import { withBasePath } from '../utils/withBasePath';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const presentationPdf = withBasePath('/materials/assosiation-3.pdf');

  const navLinks = [
    { label: 'О нас', href: '#about' },
    { label: 'Цели', href: '#goals' },
    { label: 'Вызовы', href: '#challenges' },
    { label: 'Аудитория', href: '#audience' },
    { label: 'Подкомитеты', href: '#directions' },
    { label: 'Приоритеты', href: '#priorities' },
    { label: 'Проекты', href: '#projects' },
    { label: 'Документы', href: '#documents' },
    { label: 'Заявка', href: '#contact' },
  ];

  const techLinks = [
    'Нейронные сети (AI)',
    'Распределенные реестры (Blockchain)',
    'Интернет вещей (IoT)',
    'Кибербезопасность',
    'Микроэлектроника и робототехника',
    'Облачная инфраструктура',
    'Энергетическая инфраструктура',
  ];

  return (
    <footer className="relative overflow-hidden">
      <div className="bg-[#5F891D]">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#151515] font-bebas tracking-wide mb-2">
                Готовы к совместным инициативам?
              </h3>
              <p className="text-[#151515]/75 max-w-2xl">
                Подключайтесь к экосистеме Ассоциации для реализации проектов в Беларуси и на международном уровне.
              </p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#151515] text-[#F3F4E9] font-bold rounded-full hover:bg-[#151515]/90 transition-colors w-full sm:w-auto"
            >
              <span>Подать заявку</span>
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>

      <div className="bg-[#151515] text-[#F3F4E9]">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-14">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <img src={logo} alt="Кибер Инновации" className="h-12 w-auto" />
              </div>
              <p className="text-[#F3F4E9]/62 leading-relaxed mb-6">
                Ассоциация Цифровых Технологий и Инноваций «Кибер Инновации» — платформа координации государства,
                науки и бизнеса для развития технологического суверенитета Республики Беларусь.
              </p>

              <a
                href={presentationPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#F3F4E9]/75 hover:text-[#5F891D] transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Открыть презентацию Ассоциации</span>
              </a>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold text-[#F3F4E9] uppercase tracking-wider mb-6">Навигация</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[#F3F4E9]/62 hover:text-[#5F891D] transition-colors inline-flex items-center gap-2 group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold text-[#F3F4E9] uppercase tracking-wider mb-6">Направления</h4>
              <ul className="space-y-3">
                {techLinks.map((tech) => (
                  <li key={tech} className="text-[#F3F4E9]/62 text-sm leading-relaxed">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-sm font-bold text-[#F3F4E9] uppercase tracking-wider mb-6">Контакты</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:info@cyberinnovations.by"
                    className="flex items-start gap-3 text-[#F3F4E9]/62 hover:text-[#5F891D] transition-colors"
                  >
                    <Mail className="w-4 h-4 mt-1" />
                    <span className="text-sm">info@cyberinnovations.by</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+375"
                    className="flex items-start gap-3 text-[#F3F4E9]/62 hover:text-[#5F891D] transition-colors"
                  >
                    <Phone className="w-4 h-4 mt-1" />
                    <span className="text-sm">+375 (XX) XXX-XX-XX</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-[#F3F4E9]/62">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span className="text-sm">Минск, Республика Беларусь</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#F3F4E9]/42">
            <p>© {currentYear} Ассоциация «Кибер Инновации». Все права защищены.</p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
              <a href="#" className="hover:text-[#F3F4E9] transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-[#F3F4E9] transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 py-8 overflow-hidden">
          <div className="container mx-auto px-4">
            <p className="text-[8vw] md:text-[6vw] font-bebas text-white/[0.03] leading-none tracking-tight whitespace-nowrap">
              CYBER INNOVATIONS • TECHNOLOGY SOVEREIGNTY • BELARUS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
