import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const whyChooseList = [
  {
    panel: 'panel1',
    title: 'Enfoque integral',
    description: `Ofrecemos una perspectiva completa que abarca desde el desarrollo inicial
  hasta el análisis de negocios detallado. Nuestra atención se centra en cada
  etapa, asegurando soluciones digitales cohesivas y estratégicas que impulsen
  el éxito comercial.`,
  },
  {
    panel: 'panel2',
    title: 'Trabajo Colaborativo',
    description: `Valoramos la colaboración, trabajando de la mano con nuestros clientes para 
  alcanzar objetivos compartidos. Nuestra dedicación a la cooperación garantiza
  resultados excepcionales y el logro conjunto de metas.`,
  },
  {
    panel: 'panel3',
    title: 'Soluciones Personalizadas',
    description: `Diseñamos soluciones digitales que se adaptan a las necesidades específicas de
  cada cliente. Nuestro enfoque personalizado garantiza que cada proyecto refleje 
  la identidad y los objetivos únicos de la empresa, maximizando así su impacto.`,
  },
  {
    panel: 'panel4',
    title: 'Compromiso con la Innovación',
    description: `Nos destacamos por nuestra constante búsqueda de innovación. Comprometidos con 
  ofrecer servicios a la vanguardia, implementamos soluciones creativas y 
  tecnológicamente avanzadas para superar las expectativas.`,
  },
  {
    panel: 'panel5',
    title: 'Empoderamiento de Jóvenes Talentos',
    description: `Creemos en brindar oportunidades significativas a jóvenes talentosos en tecnología. 
  Al proporcionarles experiencias profesionales valiosas, no solo contribuimos al crecimiento 
  de la empresa, sino que también impulsamos el desarrollo de la próxima generación de profesionales.`,
  },
];

const WhyChooseAccordion = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {whyChooseList.map((item) => (
        <Accordion
          key={item.title}
          expanded={expanded === item.panel}
          onChange={handleChange(item.panel)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ width: '70%', flexShrink: 0 }}>
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default WhyChooseAccordion;
