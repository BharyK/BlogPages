import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import useMediaQuery from '@mui/material/useMediaQuery';

function BlogPageHeader() {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <Box>
      <Typography gutterBottom variant="h3" component="div" mt={5} mb={3}>
        Artikel Unggulan
      </Typography>
      <Typography
        component="div"
        mb={3}
        fontWeight="400"
        fontSize="16px"
        color="#667085"
      >
        Temukan artikel seputar informasi mengenai skor kredit dan tips-tips
        finansial lainnya di sini.
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={6}>
          <Box display="flex" justifyContent="center" flexDirection="column">
            <img
              src="https://skorlife.com/assets/feature-articles-desktop-bagaimana-cara-lepas-dari-jeratan-pinjaman-online.jpg"
              alt=""
            />
            <Typography
              variant="body2"
              color="#0376fc"
              fontWeight="600"
              fontSize="14px"
              mt={1}
            >
              Debby Nurhanani • 28 November 2022 reading time clock 5 Mins Read
            </Typography>
            <Typography variant="h6" component="div" mt={2}>
              Bagaimana Cara Lepas dari Jeratan Pinjaman Online?
            </Typography>
            <Typography
              component="div"
              mt={2}
              fontWeight="400"
              fontSize="16px"
              color="#667085"
            >
              Jika Anda gagal melakukan pembayaran pinjaman online tentu akan
              menambah masalah baru. Lalu, bagaimana cara paling efektif agar
              lepas dari jeratan pinjol?...
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box display="flex" pl={2}>
            <img
              src="https://skorlife.com/assets/feature-articles-desktop-cara-efektif-menghapus-iuran-tahunan-kartu-kredit.jpg"
              alt=""
              width={matches ? "250px" : "150px"}
            />
            <Box ml={3}>
              <Typography fontSize={matches ? "20px" : "14px"} component="div">
                Cara Mudah Mencairkan Rekening Orang yang Sudah Meninggal
              </Typography>
              <Typography
                variant="body2"
                color="#0376fc"
                fontWeight="600"
                fontSize={matches ? "12px" : "14px"}
              >
                28 Nov 2022 clock 5 Mins Read
              </Typography>
            </Box>
          </Box>

          <Box display="flex" mt={2} pl={2}>
            <img
              src="https://skorlife.com/assets/feature-articles-desktop-cara-mengurus-rekening-orang-meninggal.jpg"
              alt=""
              width={matches ? "250px" : "150px"}
            />
            <Box ml={4}>
              <Typography fontSize={matches ? "20px" : "14px"} component="div">
                Cara Mudah Mencairkan Rekening Orang yang Sudah Meninggal
              </Typography>
              <Typography
                variant="body2"
                color="#0376fc"
                fontWeight="600"
                fontSize={matches ? "12px" : "14px"}
              >
                28 Nov 2022  clock 5 Mins Read
              </Typography>
            </Box>
          </Box>

          <Box display="flex" mt={2} pl={2}>
            <img
              src="https://skorlife.com/assets/feature-articles-desktop-kredit-ditolak-bank-harus-bagaimana.jpg"
              alt=""
              width={matches ? "250px" : "150px"}
            />
            <Box ml={4}>
              <Typography fontSize={matches ? "20px" : "14px"} component="div">
                Cara Mudah Mencairkan Rekening Orang yang Sudah Meninggal
              </Typography>
              <Typography
                variant="body2"
                color="#0376fc"
                fontWeight="600"
                fontSize={matches ? "12px" : "14px"}
              >
                28 Nov 2022  clock 5 Mins Read
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export { BlogPageHeader };
