import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function MyAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '70%', flexShrink: 0 }}>
            Enfoque integral
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ofrecemos una perspectiva completa que abarca desde el desarrollo inicial
            hasta el análisis de negocios detallado. Nuestra atención se centra en cada
            etapa, asegurando soluciones digitales cohesivas y estratégicas que impulsen
            el éxito comercial.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '70%', flexShrink: 0 }}>Trabajo Colaborativo</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Valoramos la colaboración, trabajando de la mano con nuestros clientes para 
            alcanzar objetivos compartidos. Nuestra dedicación a la cooperación garantiza
            resultados excepcionales y el logro conjunto de metas.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '70%', flexShrink: 0 }}>
            Soluciones Personalizadas
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Diseñamos soluciones digitales que se adaptan a las necesidades específicas de
            cada cliente. Nuestro enfoque personalizado garantiza que cada proyecto refleje 
            la identidad y los objetivos únicos de la empresa, maximizando así su impacto.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '70%', flexShrink: 0 }}>Compromiso con la Innovación</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nos destacamos por nuestra constante búsqueda de innovación. Comprometidos con 
            ofrecer servicios a la vanguardia, implementamos soluciones creativas y 
            tecnológicamente avanzadas para superar las expectativas.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ width: '70%', flexShrink: 0 }}>Empoderamiento de Jóvenes Talentos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Creemos en brindar oportunidades significativas a jóvenes talentosos en tecnología. 
            Al proporcionarles experiencias profesionales valiosas, no solo contribuimos al crecimiento 
            de la empresa, sino que también impulsamos el desarrollo de la próxima generación de profesionales.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}












