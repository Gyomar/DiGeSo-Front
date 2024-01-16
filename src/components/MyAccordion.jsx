import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function MyAccordion() {
  return (
    <div>
        <Accordion>
            <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography>Enfoque integral</Typography>
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
        <Accordion>
            <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Typography>Trabajo Colaborativo</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Valoramos la colaboración, trabajando de la mano con nuestros clientes para 
                    alcanzar objetivos compartidos. Nuestra dedicación a la cooperación garantiza
                    resultados excepcionales y el logro conjunto de metas.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Typography>Soluciones Personalizadas</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Diseñamos soluciones digitales que se adaptan a las necesidades específicas de
                    cada cliente. Nuestro enfoque personalizado garantiza que cada proyecto refleje 
                    la identidad y los objetivos únicos de la empresa, maximizando así su impacto.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Typography>Compromiso con la Innovación</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Nos destacamos por nuestra constante búsqueda de innovación. Comprometidos con 
                    ofrecer servicios a la vanguardia, implementamos soluciones creativas y 
                    tecnológicamente avanzadas para superar las expectativas.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Typography>Empoderamiento de Jóvenes Talentos</Typography>
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