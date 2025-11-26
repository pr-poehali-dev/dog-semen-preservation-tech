import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const processSteps = [
    {
      number: "01",
      title: "Сбор биоматериала",
      description: "Получение эякулята производится мануальным методом в стерильных условиях ветеринарной клиники. Материал собирается в предварительно подготовленную стерильную емкость.",
      icon: "TestTube",
      details: ["Контроль температуры 37°C", "Стерильная среда", "Время сбора: 5-10 мин"]
    },
    {
      number: "02",
      title: "Оценка качества",
      description: "Проводится микроскопическое исследование образца для определения концентрации, подвижности и морфологии сперматозоидов. Оценивается пригодность материала для криоконсервации.",
      icon: "Microscope",
      details: ["Подвижность >70%", "Концентрация >200 млн/мл", "Морфология >80%"]
    },
    {
      number: "03",
      title: "Подготовка криопротектора",
      description: "Добавление специального криопротекторного раствора, содержащего глицерин, яичный желток и буферные компоненты. Криопротектор защищает клетки от повреждения при замораживании.",
      icon: "Droplets",
      details: ["Глицерин 5-7%", "Яичный желток 20%", "Поэтапное смешивание"]
    },
    {
      number: "04",
      title: "Эквилибрация",
      description: "Охлаждение подготовленного материала до +4°C в течение 1-2 часов. Этот этап необходим для равномерного распределения криопротектора и адаптации клеток к низким температурам.",
      icon: "Thermometer",
      details: ["Температура +4°C", "Время: 1-2 часа", "Контроль скорости охлаждения"]
    },
    {
      number: "05",
      title: "Расфасовка",
      description: "Распределение подготовленного материала по криопробиркам или пайетам объемом 0.25-0.5 мл. Каждая доза маркируется идентификационными данными животного.",
      icon: "FlaskConical",
      details: ["Объем дозы: 0.25-0.5 мл", "Маркировка образца", "Учетная документация"]
    },
    {
      number: "06",
      title: "Замораживание",
      description: "Контролируемое замораживание в парах жидкого азота с постепенным снижением температуры до -196°C. Используется программируемый криобиологический замораживатель.",
      icon: "Snowflake",
      details: ["Скорость: -5°C/мин до -80°C", "Далее погружение в азот", "Температура хранения: -196°C"]
    },
    {
      number: "07",
      title: "Хранение",
      description: "Долгосрочное хранение биоматериала в жидком азоте при температуре -196°C в специализированных криохранилищах с системой мониторинга и резервного питания.",
      icon: "Database",
      details: ["Срок хранения: неограничен", "Контроль температуры 24/7", "Система безопасности"]
    }
  ];

  const advantages = [
    {
      title: "Сохранение генофонда",
      description: "Возможность использования генетического материала ценных производителей на протяжении десятилетий",
      icon: "Dna"
    },
    {
      title: "Транспортировка",
      description: "Безопасная пересылка биоматериала в любую точку мира без потери качества",
      icon: "Plane"
    },
    {
      title: "Планирование разведения",
      description: "Гибкое планирование вязок независимо от географического расположения животных",
      icon: "Calendar"
    },
    {
      title: "Здоровье животных",
      description: "Минимизация рисков инфекционных заболеваний при использовании проверенного материала",
      icon: "ShieldCheck"
    }
  ];

  const statistics = [
    { value: "85-90%", label: "Выживаемость сперматозоидов после размораживания" },
    { value: "65-75%", label: "Успешность оплодотворения криоконсервированным материалом" },
    { value: "∞", label: "Срок хранения при соблюдении условий" },
    { value: "-196°C", label: "Температура хранения в жидком азоте" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Icon name="Microscope" className="text-primary" size={32} />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Криоконсервация семени кобелей</h1>
              <p className="text-sm text-muted-foreground">Научно обоснованная технология сохранения генетического материала</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4" variant="outline">Ветеринарная репродуктология</Badge>
            <h2 className="text-4xl font-bold mb-4 text-foreground">Технология криоконсервации</h2>
            <p className="text-lg text-muted-foreground">
              Криоконсервация семени — это научно обоснованный метод длительного хранения генетического материала 
              при сверхнизких температурах с сохранением биологической активности сперматозоидов
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {statistics.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Этапы процедуры</h2>
            <p className="text-muted-foreground">
              Процесс криоконсервации включает семь последовательных этапов, каждый из которых критически важен 
              для обеспечения высокого качества сохраненного биоматериала
            </p>
          </div>

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-muted/30">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name={step.icon} className="text-primary" size={28} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-mono text-primary font-semibold">{step.number}</span>
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base">{step.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex flex-wrap gap-2">
                    {step.details.map((detail, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {detail}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        <section className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Преимущества технологии</h2>
            <p className="text-muted-foreground">
              Криоконсервация открывает новые возможности в области племенного разведения собак 
              и сохранения генетического разнообразия
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon name={advantage.icon} className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-lg">{advantage.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{advantage.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <div className="flex items-start gap-4">
                <Icon name="Info" className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <CardTitle className="mb-2">Научная основа</CardTitle>
                  <CardDescription className="text-base">
                    Технология криоконсервации основана на принципах криобиологии и использует свойство жидкого азота 
                    останавливать все биологические процессы на клеточном уровне. При температуре -196°C полностью 
                    прекращается метаболизм, что позволяет сохранять биологический материал теоретически бесконечно долго. 
                    Использование криопротекторов предотвращает образование внутриклеточных кристаллов льда, которые могут 
                    повредить клеточные структуры.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </section>
      </main>

      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-sm text-muted-foreground">
            Информационный материал о технологии криоконсервации семени кобелей
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
