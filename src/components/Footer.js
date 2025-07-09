import { Box, Typography } from "@mui/material";

// Constantes para estilos reutilizáveis
const styles = {
  footerContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#32383E',
    padding: { xs: '10px', sm: '15px' },
    textAlign: 'center' // Adicionado para melhor alinhamento em telas pequenas
  },
  footerText: {
    fontSize: { xs: '12px', sm: '14px' }, // Tamanho menor em telas pequenas
    fontFamily: "'Lato', arial, sans-serif",
    color: '#ffffff',
    padding: { xs: '0 10px', sm: '0' }, // Adiciona padding lateral em telas muito pequenas
    maxWidth: '90%' // Evita que o texto fique colado nas bordas
  }
};

function Footer() {
  return (
    <Box sx={styles.footerContainer}>
      <Typography sx={styles.footerText}>
        Codificado com café, feito com coração — por Lucas Anchieta.
      </Typography>
    </Box>
  );
}

export default Footer;