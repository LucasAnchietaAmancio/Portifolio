import { Box, Typography, Link } from "@mui/material";

function Header() {
  return (
    <Box
      className="container-header"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '3rem',
        backgroundColor: '#1E2124',
        paddingBottom: '25px',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1400px',
          px: { xs: 2, md: 0 }, // padding horizontal responsivo
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' }, // coluna no mobile, linha no desktop
            gap: { xs: 2, md: 4 },
          }}
        >
          <Box
            component="img"
            src="../image/1745501845061.jpg"
            alt="Lucas Anchieta"
            sx={{
              maxHeight: { xs: 180, md: 270 },
              width: { xs: 180, md: 'auto' },
              borderRadius: '50%', // círculo perfeito
              objectFit: 'cover',
              alignSelf: { xs: 'center', md: 'auto' },
            }}
          />
          <Box
            sx={{
              padding: { xs: '10px 0 0 0', md: '20px' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700 , fontFamily: 'Montserrat, sans-serif'}}>
              Lucas Anchieta
            </Typography>
            <Typography variant="h5" sx={{ mt: 1,  fontFamily: 'Montserrat, sans-serif' }}>
              Desenvolvedor Full Stack | Back End
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, pt: '20px', gap: '15px' }}>
              <Link href="https://github.com/LucasAnchietaAmancio" target="_blank" rel="noopener">
                <Box
                  component="img"
                  src="../icon/github (1).png"
                  alt="GitHub"
                  sx={{ width: 32, height: 32 }}
                />
              </Link>
              <Link href="https://www.linkedin.com/in/lucas-anchieta-5b1758242/" target="_blank" rel="noopener">
                <Box
                  component="img"
                  src="../icon/linkedin (1).png"
                  alt="LinkedIn"
                  sx={{ width: 32, height: 32 }}
                />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
