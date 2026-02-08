import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logo from '../../../logos/Logo-ACI-RUS.ver2.svg';

const navItems = [
  { label: 'О нас', href: '#about' },
  { label: 'Цели', href: '#goals' },
  { label: 'Вызовы', href: '#challenges' },
  { label: 'Аудитория', href: '#audience' },
  { label: 'Подкомитеты', href: '#directions' },
  { label: 'Приоритеты', href: '#priorities' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Документы', href: '#documents' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#151515]/95 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between h-18 sm:h-20">
            <a href="#about" className="flex items-center gap-3 min-w-0 flex-1 pr-3">
              <img
                src={logo}
                alt="Ассоциация Цифровых Технологий и Инноваций Кибер Инновации"
                className="h-10 sm:h-12 md:h-14 w-auto max-w-[170px] sm:max-w-[220px] md:max-w-[340px] object-contain"
              />
            </a>

            <nav className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative px-3 py-2 text-sm text-[#F3F4E9]/80 hover:text-[#F3F4E9] transition-colors group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-[#5F891D] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              ))}
            </nav>

            <div className="hidden xl:flex items-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  scrolled
                    ? 'bg-[#5F891D] text-[#151515] hover:bg-[#5F891D]/90'
                    : 'bg-[#F3F4E9] text-[#151515] hover:bg-white'
                }`}
              >
                <span>Подать заявку</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>

            <button
              className="xl:hidden w-10 h-10 rounded-full flex items-center justify-center text-[#F3F4E9] bg-white/10 flex-shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 xl:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#151515]/95 backdrop-blur-xl"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.nav
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ delay: 0.08 }}
              className="relative h-full flex flex-col px-6 sm:px-8 pt-24 pb-8 overflow-y-auto"
            >
              <div className="space-y-1 sm:space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.04 }}
                    className="block text-2xl sm:text-3xl font-bold text-[#F3F4E9] py-2 font-bebas tracking-wide hover:text-[#5F891D] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-8"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 px-7 py-4 bg-[#5F891D] text-[#151515] font-bold rounded-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Подать заявку</span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-auto pt-8"
              >
                <div className="h-px bg-white/10 mb-5" />
                <p className="text-[#F3F4E9]/40 text-sm">
                  © {new Date().getFullYear()} Кибер Инновации
                </p>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
