/* =====================================================================
   CONFIGURAÇÃO DO SITE — GW Odontologia
   ===================================================================== */
const CONFIG = {

  /* ---------- Marca ---------- */
  brand: {
    name: "GW Odontologia",
    specialty: "Referência em Bruxismo e Endodontia",
    city: "Pinheiros, São Paulo - SP",
    title: "GW Odontologia | Dentista em Pinheiros, São Paulo - SP",
    description: "Clínica odontológica em Pinheiros liderada pelo Dr. Guilad Weil (USP). Atendimento especializado em bruxismo, canal em sessão única, laserterapia e clínica geral."
  },

  /* ---------- Cores ---------- */
  theme: {
    primary: "#12324a",   
    accent:  "#c5a059",   
    whatsapp: "#25d366"
  },

  /* ---------- Contato ---------- */
  contact: {
    whatsapp: "5511975532110",                      
    message: "Olá! Gostaria de agendar uma avaliação na GW Odontologia.",
    buttonShort: "Agendar",
    instagram: "guiladweil",                         
    email: "",
    address: "Rua Cristiano Viana, 401 - Cj. 1311 - Pinheiros, São Paulo - SP",
    hours: "Segunda a sexta, das 8h30 às 18h | Sábado, das 9h às 12h",
    mapsUrl: "https://g.page/r/CQEwrCOG2m2REBM"
  },

  /* ---------- Seções ---------- */
  sections: {
    marquee: true, about: true, results: true, services: true,
    differential: true, testimonials: true, why: true, faq: true
  },

  /* ---------- Topo / Hero ---------- */
  hero: {
    eyebrow: "Dr. Guilad Weil • Formado pela USP",
    title: "Odontologia de alta precisão e acolhimento em",
    highlight: "Pinheiros",
    text: "Soluções avançadas em bruxismo, tratamento de canal em sessão única, laserterapia e cuidados humanizados para toda a família.",
    cta: "Agendar avaliação pelo WhatsApp",
    secondary: "Conhecer serviços",
    checks: ["Mais de 30 anos de experiência", "Atendimento em inglês (Foreign Patients)", "Tecnologia de ponta e laserterapia"],
    badgeTitle: "Avaliação 5 Estrelas",
    badgeText: "Reconhecido pela excelência e cuidado humanizado"
  },

  /* ---------- Faixa rolante ---------- */
  marquee: ["Tratamento de Bruxismo", "Canal em Sessão Única", "Laserterapia Avançada", "Clínica Geral", "Check-up Digital", "Atendimento bilíngue (English Speaking)"],

  /* ---------- Sobre ---------- */
  about: {
    eyebrow: "Sobre o Dr. Guilad Weil",
    title: "Excelência, rigor científico e atendimento humanizado",
    paragraphs: [
      "Fundada e liderada pelo cirurgião-dentista Dr. Guilad Weil[cite: 1] — formado pela Universidade de São Paulo (USP)[cite: 2] e com mais de 3 décadas de dedicação à odontologia —, a GW Odontologia une precisão técnica e inovação científica em um ambiente rigorosamente limpo, seguro e acolhedor.",
      "Nosso compromisso é proporcionar uma experiência confortável e transparente, desde check-ups preventivos e limpezas até reabilitações complexas, tratamentos de canal rápidos e terapias modernas para o alívio de dores faciais e bruxismo."
    ],
    stats: [
      { value: "32+",  label: "Anos de experiência" },
      { value: "100%", label: "Compromisso com o paciente" },
      { value: "USP",  label: "Formação de referência" }
    ],
    cta: "Falar com nossa equipe"
  },

  /* ---------- Antes e depois / Resultados ---------- */
  results: {
    eyebrow: "Resultados e Casos",
    title: "Transformações reais e saúde em dia",
    sub: "Conheça algumas das soluções aplicadas no dia a dia do nosso consultório em Pinheiros.",
    items: [
      "Tratamento completo para alívio e controle do bruxismo com placas especializadas (NTI/LIVA)",
      "Recuperação rápida e cicatrização acelerada de lesões com laserterapia avançada",
      "Endodontia segura e sem dor realizada em sessão única"
    ]
  },

  /* ---------- Serviços ---------- */
  services: {
    eyebrow: "Áreas de Atuação",
    title: "Tratamentos especializados para o seu sorriso",
    sub: "Contamos com estrutura moderna para garantir rapidez, conforto e eficácia em cada procedimento.",
    items: [
      { title: "Clínica Geral", text: "Check-up digital detalhado, limpezas preventivas, restaurações estéticas e coroas de alta durabilidade." },
      { title: "Tratamento de Bruxismo", text: "Avaliação personalizada e terapias direcionadas, incluindo o uso de placas especiais (NTI e LIVA) e toxina botulínica." },
      { title: "Tratamento de Canal (Endodontia)", text: "Tecnologia de ponta para a realização do tratamento de canal em sessão única, proporcionando muito mais praticidade." },
      { title: "Laserterapia Avançada", text: "Prevenção e tratamento rápido para herpes labial, além de procedimentos de clareamento dental a laser." },
      { title: "Atendimento de Urgência", text: "Pronta resposta e suporte ágil para emergências odontológicas e crises de dor." },
      { title: "Atendimento Bilíngue (English)", text: "Suporte completo e fluído voltado também para pacientes estrangeiros (foreign patients)." },
      { title: "Odontologia Preventiva", text: "Acompanhamento periódico focado na saúde gengival e na prevenção de tártaro e cáries." },
      { title: "Estética do Sorriso", text: "Procedimentos voltados para harmonizar a estética e a função mastigatória com total naturalidade." }
    ]
  },

  /* ---------- Diferencial / Espaço ---------- */
  differential: {
    eyebrow: "Nosso Espaço",
    title: "Um ambiente moderno, seguro e acolhedor",
    text: "Localizado no coração de Pinheiros, nosso consultório foi planejado nos mínimos detalhes para que você se sinta em casa, unindo tecnologia de ponta e um atendimento extremamente empático.",
    list: ["Consultório limpíssimo com rigorosos protocolos de biossegurança", "Equipamentos de última geração para diagnósticos precisos", "Localização privilegiada na Rua Cristiano Viana (Pinheiros)"],
    cta: "Agendar uma visita"
  },

  /* ---------- Avaliações (depoimentos) ---------- */
  testimonials: {
    eyebrow: "Avaliações do Google",
    title: "O que dizem nossos pacientes",
    sub: "Depoimentos reais de quem confia no trabalho do Dr. Guilad Weil e sua equipe.",
    source: "Avaliação verificada do Google",      
    items: [
      { name: "Renato Aguiar", date: "há 3 meses", text: "O Dr. Guilad é um excelente profissional e tem um profundo conhecimento da odontologia. Consultório limpíssimo e atendimento preciso e honesto. Vale muito a pena!" },
      { name: "Camila P", date: "há 4 meses", text: "A laserterapia deu bastante resultado em pouco tempo. Vale super a pena. Fui muito bem atendida com agilidade e conforto." },
      { name: "Daniela Munhoz", date: "há 2 anos", text: "Tive uma crise de herpes e acessei o Dr. Guilad em plena sexta à noite. Ele respondeu prontamente, foi extremamente atencioso e me atendeu no sábado pela manhã." },
      { name: "Mariana Musardo", date: "há 1 ano", text: "Atendimento humanizado e muito profissional. Tanto o Dr. Guilad como a Ângela me atenderam super bem. Ele tem bastante conhecimento e se atualiza sempre. Recomendo!" },
      { name: "Szycie Towarzyskie", date: "há 2 anos", text: "O Doutor Guilad é uma ótima pessoa e se preocupa com o paciente. Ele também fala inglês perfeitamente, o que é uma grande vantagem. Recomendo para todos!" },
      { name: "Thaina Drefahl", date: "há 1 ano", text: "Fiz uma placa para bruxismo e tratei os problemas causados. O Dr. Guilad foi didático, explicou tudo com clareza e o agendamento foi super fácil." }
    ]
  },

  /* ---------- Por que escolher ---------- */
  why: {
    eyebrow: "Por que nos escolher",
    title: "Diferenciais que fazem a diferença na sua saúde",
    items: [
      { title: "Tradição e Formação USP", text: "Liderado por um profissional com mais de 30 anos de experiência e formação pela Universidade de São Paulo[cite: 1, 2]." },
      { title: "Pronta Resposta", text: "Agilidade e suporte humanizado para casos de urgência e emergências odontológicas." },
      { title: "Sessão Única", text: "Tratamentos de canal realizados com alta tecnologia em apenas uma consulta para sua comodidade." },
      { title: "Ambiente Acolhedor", text: "Atmospheric sóbria, limpa e segura para eliminar qualquer receio de ir ao dentista." },
      { title: "Tecnologia Moderna", text: "Uso de laserterapia e equipamentos de ponta para resultados rápidos e confortáveis." },
      { title: "Atendimento Bilíngue", text: "Facilidade completa na comunicação para pacientes estrangeiros (English speaking)." }
    ]
  },

  /* ---------- Perguntas frequentes ---------- */
  faq: {
    eyebrow: "Dúvidas frequentes",
    title: "Perguntas que sempre recebemos",
    items: [
      { q: "Onde a clínica está localizada?", a: "Estamos na Rua Cristiano Viana, 401 - Cj. 1311 - Pinheiros, São Paulo - SP." },
      { q: "O tratamento de canal é feito em quantas sessões?", a: "Na GW Odontologia, realizamos o tratamento de canal (endodontia) preferencialmente em sessão única, garantindo maior praticidade e conforto para o paciente." },
      { q: "Como funciona o tratamento para bruxismo?", a: "O tratamento é individualizado e focado no alívio das dores e proteção dos dentes, podendo envolver o uso de placas especiais (como NTI e LIVA) e aplicações de toxina botulínica." },
      { q: "A laserterapia ajuda em casos de herpes labial?", a: "Sim! A laserterapia avançada é altamente eficaz para prevenir o surgimento de novas lesões, aliviar a dor rapidamente e acelerar a cicatrização." }
    ]
  },

  /* ---------- Chamada final ---------- */
  cta: {
    title: "Pronto para cuidar do seu sorriso com quem é referência?",
    text: "Entre em contato agora mesmo pelo WhatsApp e agende sua avaliação em Pinheiros.",
    button: "Quero agendar pelo WhatsApp"
  },

  /* ---------- Rodapé ---------- */
  footer: {
    about: "Clínica odontológica em Pinheiros liderada pelo Dr. Guilad Weil (USP), focada em excelência, laserterapia, bruxismo e atendimento humanizado.",
    credit: ""                          
  },

  /* ---------- Imagens ---------- */
  showPlaceholders: true,               
  images: {
    logo: "img/logo.png",                           
    hero: "img/hero.png",
    about: "img/sobre.png",
    space: "img/estudio.webp",
    service1: "img/service.webp", service2: "img/service2.webp", service3: "img/service3.webp", service4: "img/service4.webp",
    service5: "img/service5.png", service6: "img/service6.png", service7: "img/service7.png", service8: "img/service8.png",
    before1: "img/before1.png", after1: "img/after1.png",
    before2: "img/before2.png", after2: "img/after2.png",
    before3: "img/before3.png", after3: "img/after3.png"
  }
};