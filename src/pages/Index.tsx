import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const benefits = [
    {
      icon: 'Target',
      title: 'Точное попадание',
      description: 'Реклама показывается только целевой аудитории по вашим ключевым запросам'
    },
    {
      icon: 'TrendingUp',
      title: 'Быстрый результат',
      description: 'Первые клиенты и заявки уже в первый день запуска рекламной кампании'
    },
    {
      icon: 'DollarSign',
      title: 'Контроль бюджета',
      description: 'Платите только за реальные переходы на сайт, полный контроль расходов'
    },
    {
      icon: 'LineChart',
      title: 'Аналитика в реальном времени',
      description: 'Отслеживайте эффективность каждого рубля в удобном личном кабинете'
    },
    {
      icon: 'Zap',
      title: 'Гибкая настройка',
      description: 'Настраиваем показы по геолокации, времени суток и интересам аудитории'
    },
    {
      icon: 'Award',
      title: 'Экспертная поддержка',
      description: 'Сопровождаем кампанию на всех этапах и оптимизируем для лучших результатов'
    }
  ];

  const stats = [
    { value: '300+', label: 'Довольных клиентов' },
    { value: '5.2x', label: 'Средний ROI' },
    { value: '78%', label: 'Рост конверсий' },
    { value: '24/7', label: 'Поддержка' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <a 
        href="https://t.me/+79894869826" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-[#0088cc] to-[#229ED9] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-[#0088cc]/50 animate-scale-in"
        aria-label="Написать в Telegram"
      >
        <Icon name="Send" size={28} className="text-white" />
      </a>

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-10 animate-gradient bg-[length:200%_200%]"></div>
        
        <section className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-8 shadow-lg">
              <Icon name="Sparkles" size={20} className="text-primary" />
              <span className="text-sm font-semibold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Эффективное продвижение вашего бизнеса
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Привлекайте клиентов с Яндекс Директ
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
              Настроим рекламу, которая приносит реальные продажи. Без переплат и сливов бюджета.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Rocket" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2 hover:bg-white/50 transition-all"
              >
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Смотреть кейсы
              </Button>
            </div>
          </div>
        </section>

        <section className="relative container mx-auto px-4 py-20">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Преимущества Яндекс Директ
            </h2>
            <p className="text-xl text-gray-600">
              Почему тысячи компаний выбирают контекстную рекламу
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 animate-scale-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name={benefit.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="relative container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <Card className="p-12 bg-gradient-to-br from-primary via-secondary to-accent text-white overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJWMzZ6bTAtNGgydjJoLTJ6bTAtNGgydjJoLTJ6bTAtNGgydjJoLTJ6bTAtNGgydjJoLTJ6bTAtNGgydjJoLTJ6bTAtNGgydjJoLTJ6bTAtNGgydjJoLTJ6bTAtNGgydjJoLTJ6bTItMnYyaC0yVjB6bTAtMmgtMlYwaDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
              
              <div className="relative">
                <div className="text-center mb-12">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                    Результаты наших клиентов
                  </h2>
                  <p className="text-xl text-white/90">
                    Цифры, которые говорят сами за себя
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <div 
                      key={index}
                      className="text-center animate-scale-in"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="text-5xl lg:text-6xl font-bold mb-2 animate-pulse-glow">
                        {stat.value}
                      </div>
                      <div className="text-lg text-white/80">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="flex items-start gap-4">
                    <Icon name="Quote" size={32} className="text-white/60 flex-shrink-0" />
                    <div>
                      <p className="text-lg mb-4 italic">
                        "За 3 месяца работы с Яндекс Директ мы увеличили количество заявок в 4 раза при том же бюджете. 
                        Профессиональная настройка и постоянная оптимизация дали отличный результат!"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                          <Icon name="User" size={24} />
                        </div>
                        <div>
                          <div className="font-semibold">Алексей Петров</div>
                          <div className="text-sm text-white/70">CEO, ООО "Строймастер"</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="contact" className="relative container mx-auto px-4 py-20 scroll-mt-20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Начните привлекать клиентов сегодня
              </h2>
              <p className="text-xl text-gray-600">
                Оставьте заявку и получите бесплатный аудит вашей ниши
              </p>
            </div>

            <Card className="p-8 lg:p-12 bg-white/80 backdrop-blur-sm shadow-2xl border-2 border-primary/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Ваше имя
                  </label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 text-lg border-2 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Телефон
                  </label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12 text-lg border-2 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Расскажите о вашем бизнесе
                  </label>
                  <Textarea 
                    placeholder="Чем занимается ваша компания и какие цели вы хотите достичь?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="text-lg border-2 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full text-lg py-6 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Получить бесплатную консультацию
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </Card>
          </div>
        </section>

        <footer className="relative container mx-auto px-4 py-12 border-t border-gray-200 mt-20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <Icon name="Rocket" size={24} className="text-primary" />
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Яндекс Директ Pro
                </span>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600">
                <a href="tel:+79894869826" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Icon name="Phone" size={18} />
                  +7 (989) 486-98-26
                </a>
                <a href="mailto:Imiraslanov.A@mail.ru" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Icon name="Mail" size={18} />
                  Imiraslanov.A@mail.ru
                </a>
                <a href="https://t.me/+79894869826" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Icon name="Send" size={18} />
                  Telegram
                </a>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200 text-gray-500 text-sm">
              © 2024 Яндекс Директ Pro. Все права защищены.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;