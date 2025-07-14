import { Box, Typography, Button, Link } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';

// Constantes para cores e fontes
const COLORS = {
  background: "#1E2124",
  textPrimary: "#fff",
  textSecondary: "#ccc",
  accent: "#FF4081",
  inactiveText: "#778492",
  white: "#FFFFFF",
};

const FONTS = {
  primary: "'Montserrat', sans-serif",
  secondary: "'Lato', arial, sans-serif",
};

// Estilos reutilizáveis
const commonCardStyles = {
  backgroundColor: COLORS.background, 
  borderRadius: '5px', 
  boxShadow: 2, 
  padding: { xs: '20px', md: '40px' },
  marginBottom: '25px',
};

const sectionTitleStyles = {
  fontSize: { xs: '20px', md: '24px' }, 
  fontWeight: '700', 
  paddingBottom: '10px',
  fontFamily: FONTS.primary,
};

const bodyTextStyles = {
  fontSize: { xs: '14px', md: '16px' },
  fontFamily: FONTS.secondary, 
  color: COLORS.textSecondary,
};

function Home() {
  const expWork = [
    {
      empresa: 'Gold Soluções e Serviços',
      data: 'out 2024 - Atual',
      cargo: 'Assistente de TI',
      descricao:
        "Trabalho como assistente de suporte em infraestrutura de TI, atuando em diversas áreas, como gerenciamento de servidores, redes corporativas e hardware, além de oferecer suporte técnico aos usuários e garantir a disponibilidade dos sistemas. " +
        "Ofereço suporte técnico e manutenção em infraestrutura de TI, abrangendo servidores, hardware, redes e periféricos, garantindo o pleno funcionamento dos sistemas corporativos. " +
        "Realizo configuração, instalação e gerenciamento de servidores físicos e virtuais, utilizando tecnologias como VMware, Hyper-V e servidores Windows/Linux. " +
        "Gerencio redes corporativas, incluindo configuração de roteadores, switches e firewall, bem como a aplicação de políticas de segurança e controle de acessos. "
    },
    {
      empresa: 'IDM Assessoria Empresarial',
      data: 'mar 2024 - out 2024',
      cargo: 'Analista de Suporte ERP',
      descricao:
        "Trabalhei como analista de suporte no ERP TGA Sistemas, oferecendo apoio nos módulos de compras, controle de estoque, caixa, fiscal e financeiro. " +
        "Executei suporte técnico em diferentes níveis (N1, N2 e N3), solucionando chamados através de ferramentas como Brazip MySuite e Mantis Bug Tracker. "
    },
    {
      empresa: 'Brado Logística',
      data: 'jun 2023 - jan 2024',
      cargo: 'Auxiliar Administrativo',
      descricao:
        "Trabalhei na área de conferência e controle operacional, com foco em documentos e processos logísticos. " +
        "Realizei a conferência de documentos e o registro de colaboradores, garantindo a precisão e conformidade dos dados. " +
        "Efetuei o aporte de notas fiscais, assegurando que todas as informações fiscais fossem registradas corretamente. "
    }
  ];

  const projects = [
    {
      name: 'Cadastro de Produtos',
      img: '../image/cadastro de produtos.png',
      description: 'Sistema completo para cadastro e gerenciamento de produtos com pyside6 e banco de dados MySQL.',
      tecnologias: 'React, Express, MySQL',
      url: 'https://github.com/LucasAnchietaAmancio/Cadastro-de-Produtos'
    },
    {
      name: 'Automação Coleta de CTe - IOB',
      img: '../image/Fretelink.png',
      description: 'Aplicação desktop com PySide6 e Selenium para automatização da coleta de CT-e do site IOB, geração de planilhas Excel e vinculo com motoristas via Trigger no banco de dados.',
      tecnologias: 'Python, PySide6, Selenium, Excel, MySQL',
      url: 'https://github.com/LucasAnchietaAmancio/FreteLink'
    },
    {
      name: 'TWTodos',
      img: '../image/TWTOODOS.png',
      description: 'Aplicação web para gerenciamento de tarefas (to-do list). Desenvolvido para praticar Django e manipulação de dados.',
      tecnologias: 'React, Javascript, localStorage',
      url: 'https://github.com/LucasAnchietaAmancio/twtodos'
    },
    {
      name: 'Quiz Geografia',
      img: '../image/GeoQuiz.png',
      description: 'Quiz interativo desenvolvido em React para reforçar conceitos de hooks e controle de estados, com foco educacional em geografia.',
      tecnologias: 'React, Javascript',
      url: 'https://github.com/LucasAnchietaAmancio/GeoQuiz'
    },
    {
      name: 'Bookstore',
      img: '../image/Livraria.png',
      description: 'Simulação de catálogo de livros com busca via API, desenvolvido para prática de requisições HTTP, rotas e renderização de listas.',
      tecnologias: 'React, Javascript, API Rest',
      url: 'https://github.com/LucasAnchietaAmancio/-Bookstore'
    },
    {
      name: 'Api Login',
      img: '../image/Login.png',
      description: 'Sistema de autenticação com JWT, desenvolvido para praticar conceitos de autenticação, rotas protegidas, armazenamento de tokens e integração entre Frontend e Backend. O projeto inclui cadastro, login e validações básicas de segurança com React, Node.js, Express e MySQL.',
      tecnologias: 'React, Javascript, Express, Jwt',
      url: 'https://github.com/LucasAnchietaAmancio/API-Login-JWT'
    }
  ];

  const skills = [
    { name: 'React', value: 70 },
    { name: 'Express', value: 50 },
    { name: 'Node.js', value: 50 },
    { name: 'Mysql', value: 80 },
    { name: 'Selenium', value: 80 },
    { name: 'Pyside', value: 90 },
    { name: 'RestApi', value: 60 }
  ];

  const contactItems = [
    { icon: '../icon/localizador-de-mapa.png', text: 'Rondonópolis - MT' },
    { icon: '../icon/o-email.png', text: 'lucasanchieta1212@gmail.com' },
    { 
      icon: '../icon/internet.png', 
      text: 'Web Site ',
      link: { text: 'Anchieta.dev', url: 'https://Anchieta.dev' }
    }
  ];

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      padding: {xs:'10px',md:'2rem'},
      flexDirection: { xs: 'column', md: 'row' },
      gap: { xs: '2rem', md: 0 },
    }}>
      <Box sx={{ 
        maxWidth: { xs: '100%', md: '1400px' }, 
        paddingTop: '2rem', 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: '2rem', md: '20px' },
      }}>
        {/* Left Content */}
        <Box sx={{ flex: { xs: 'unset', md: '2' }, width: { xs: '100%', md: 'auto' } }}>
          {/* SOBRE MIM */}
          <Box sx={commonCardStyles}>
            <Typography variant="h4" gutterBottom sx={sectionTitleStyles}>
              <strong>Sobre mim</strong>
            </Typography>
            <Typography sx={bodyTextStyles}>
              Sou Lucas Anchieta, desenvolvedor full stack mais voltado para o desenvolvimento backend com experiência em suporte técnico, infraestrutura e desenvolvimento de sistemas. Trabalho com Node.js, Express, MySQL e Python, focando em soluções eficientes e automação. Estou cursando Análise e Desenvolvimento de Sistemas e sempre buscando aprender e crescer profissionalmente.
            </Typography>
          </Box>

          {/* EXPERIÊNCIA */}
          <Box sx={commonCardStyles}>
            <Typography variant="h4" gutterBottom sx={sectionTitleStyles}>
              <strong>Experiência</strong>
            </Typography>
            
            <Box>
              {expWork.map((infoExp, index) => (
                <Box key={index} sx={{ marginBottom: '20px', transition: '0.3s' }}>
                  <Box sx={{ display: 'flex', gap: '5px', flexWrap: 'wrap' ,alignItems:'center'}}>
                    <Typography variant="subtitle1" sx={{ 
                      fontWeight: '700', 
                      color: COLORS.textPrimary, 
                      fontSize: { xs: '14px', md: '16px' } 
                    }}>
                      {infoExp.cargo}
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: '#aaa', 
                      fontSize: { xs: '14px', md: '16px' } 
                    }}>
                      - {infoExp.empresa} ({infoExp.data})
                    </Typography>
                  </Box>
                  <Typography sx={{ 
                    mt: 1, 
                    fontSize: { xs: '13px', md: '16px' }, 
                    textAlign: 'justify', 
                    maxWidth: '100%', 
                    color: COLORS.textSecondary,
                    fontFamily: FONTS.secondary
                  }}>
                    {infoExp.descricao}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box sx={{display:'flex', alignItems:'center', gap: 1 }}>
                <Box component="img" src="../icon/Link.png" alt="link icon" sx={{ width: '15px', height: '15px'}} />
                <Link 
                  href='https://www.linkedin.com/in/lucas-anchieta-5b1758242/' 
                  sx={{
                    color: COLORS.accent,
                    fontSize:'15px',
                    textDecoration:'none',
                    fontFamily: FONTS.secondary,
                    fontWeight: 'bold'
                  }}
                >
                  Veja mais no linkedin
                </Link>
            </Box>
          </Box>

          {/* PROJETOS */}
          <Box sx={commonCardStyles}>
            <Typography variant="h4" gutterBottom sx={sectionTitleStyles}>
              <strong>Projetos</strong>
            </Typography>
            {projects.map((infoProd, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  marginBottom: '28px',
                  transition: '0.3s',
                }}
              >
                <Box 
                  component="img" 
                  src={infoProd.img} 
                  alt={infoProd.name}
                  sx={{ 
                    width: { xs: '100%', sm: '300px' }, 
                    maxHeight: '200px', 
                    cursor: 'pointer', 
                    borderRadius: '8px',
                    objectFit: 'cover',
                    transition: 'filter 0.3s ease',
                    '&:hover': { filter: 'brightness(0.8)' },
                  }} 
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, flex: 1 }}>
                  <Typography sx={{ 
                    color: COLORS.textPrimary, 
                    fontSize: { xs: '18px', md: '20px' },
                    fontFamily: FONTS.primary,
                    fontWeight: '700' 
                  }}>
                    {infoProd.name}
                  </Typography>
                  <Typography sx={{ 
                    ...bodyTextStyles,
                    maxWidth: { xs: '100%', sm: '600px' }, 
                    textAlign: 'justify',
                  }}>
                    {infoProd.description}
                  </Typography>
                  <Link 
                    href={infoProd.url} 
                    target="_blank" 
                    rel="noopener" 
                    sx={{ 
                      color: COLORS.accent, 
                      fontWeight: 'bold', 
                      fontSize: { xs: '14px', md: '15px' }, 
                      textDecoration: 'none', 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      fontFamily: FONTS.secondary,
                      gap: '6px' 
                    }}
                  >
                    <Box component="img" src="../icon/Link.png" alt="link icon" sx={{ width: '15px', height: '15px' }} />
                    Acessar Projeto
                  </Link>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Right Content */}
        <Box sx={{ flex: { xs: 'unset', md: '1' }, width: { xs: '100%', md: 'auto' }, marginTop: { xs: '2rem', md: 0 } }}>
          {/* CONTATO */}
          <Box sx={commonCardStyles}>
            {contactItems.map((item, index) => (
              <Box key={index} sx={{ display:'flex', alignItems:'center', gap: 1, mt: index > 0 ? 2.5 : 0 }}>
                <Box component="img" src={item.icon} alt="icon" sx={{ width: '18px', height: '18px' }} />
                <Typography sx={bodyTextStyles}>
                  {item.text}
                  {item.link && (
                    <Link 
                      href={item.link.url}
                      sx={{ 
                        color: COLORS.accent, 
                        textDecoration:'none',
                        marginLeft: '4px'
                      }}
                    >
                      {item.link.text}
                    </Link>
                  )}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* HARD SKILLS */}
          <Box sx={commonCardStyles}>
            <Typography variant="h4" gutterBottom sx={sectionTitleStyles}>
              <strong>Hard Skills</strong>
            </Typography>
            <Box sx={{ width: '100%' }}>
              {skills.map((skill, idx) => (
                <Box key={idx} sx={{ marginBottom: 1.5 }}>
                  <Typography sx={{ 
                    ...bodyTextStyles, 
                    marginBottom: '6px' 
                  }}>
                    {skill.name}
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={skill.value} 
                    sx={{ 
                      height: '22px', 
                      borderRadius: '15px',
                      backgroundColor: COLORS.white,
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: COLORS.accent
                      }
                    }} 
                  />
                </Box>
              ))}
            </Box>
          </Box>

          {/* FORMAÇÃO */}
          <Box sx={commonCardStyles}>
            <Typography variant="h2" gutterBottom sx={sectionTitleStyles}>
              Formação
            </Typography>
            <Box sx={{ display:'flex', flexDirection:'column', gap: 1}}>
              <Typography sx={{ 
                fontSize: '16px', 
                display:'flex', 
                gap: '7px', 
                fontWeight: '700',
                fontFamily: FONTS.primary
              }}>
                <Box component="img" src="../icon/educacao.png" alt="link icon" sx={{ width: '22px', height: '22px' }} />
                Análise e Desenvolvimento de Sistemas
              </Typography>
              <Typography sx={bodyTextStyles}>
                Fatec Senai Rondonópolis (2024 - em andamento)
              </Typography>
            </Box>
          </Box>

          {/* CERTIFICAÇÃO */}
          <Box sx={commonCardStyles}>
            <Typography variant="h4" gutterBottom sx={sectionTitleStyles}>
              Certificação
            </Typography>
            <Typography sx={{ 
              fontSize: '16px',
              fontWeight: '700',
              fontFamily: FONTS.primary
            }}>
              AWS Certified Al Practitioner (AIF-C01)
            </Typography>
            <Typography sx={bodyTextStyles}>
              Certificação AWS que valida conhecimentos básicos sobre serviços em nuvem e fundamentos de inteligência artificial e machine learning na AWS.
              <Typography sx={{ color: COLORS.inactiveText }}>(Mar 2025)</Typography>
            </Typography>
            <Typography sx={{ 
              fontSize: '16px', 
              paddingTop: "14px",
              fontWeight: '700',
              fontFamily: FONTS.primary
            }}>
              AWS Educate Introduction to Generative AI
            </Typography>
            <Typography sx={bodyTextStyles}>
              Certificação da AWS que apresenta os conceitos básicos de IA generativa e suas aplicações.
              <Typography sx={{ color: COLORS.inactiveText }}>(Mar 2025)</Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
