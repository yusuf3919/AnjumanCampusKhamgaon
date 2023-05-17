import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceIcon from '@mui/icons-material/Place';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#2f2f2f' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: '#fff',
}));
const Footer = () => {
  return (
    <div style={{ background: '#2f2f2f', height: '100%' }}>
      <Box
        sx={{
          // flexGrow: 1,
          // margin: '5rem 5rem 2rem 5rem',
          padding: '1rem',
          background: '#2f2f2f',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Item
              sx={{
                background: '#2f2f2f',
                boxShadow: 'none',
                // marginLeft: '4rem',
              }}
            >
              <Typography>Anjuman Mufidul Islam</Typography>
              <Typography>Home</Typography>
              <Typography>Why Anjuman</Typography>
              <Typography>Old Photos gallery</Typography>
              <Typography>Branch</Typography>
              <Typography>Contact US</Typography>
              <Typography>Free CET Classes</Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Item
              sx={{
                background: '#2f2f2f',
                boxShadow: 'none',
                // marginLeft: '4rem',
              }}
            >
              <Typography>About Anjuman</Typography>
              <Typography>Courses</Typography>
              <Typography>Videos</Typography>
              <Typography>Careers</Typography>
              <Typography>Privacy Policy, Terms and</Typography>
              <Typography>conditions</Typography>
              <Typography>Refund Policy</Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Item
              sx={{
                background: '#2f2f2f',
                boxShadow: 'none',
                // marginLeft: '4rem',
              }}
            >
              <Typography>Anjuman Mufidul Islam</Typography>
              <Typography>Home</Typography>
              <Typography>Why sheetal</Typography>
              <Typography>Photos</Typography>
              <Typography>Branch</Typography>
              <Typography>Contact US</Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Item
              sx={{
                background: '#2f2f2f',
                boxShadow: 'none',
                // marginLeft: '4rem',
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                GET IN TOUCH
              </Typography>
              <Typography>Phone: 07263-252208</Typography>
              <Typography>Email: anjumanmufidulislam@gmail.com</Typography>
              <Typography>
                Address: Jalamb Naka,Khamgaon, Buldhana, Maharashtra, India
              </Typography>
              <br />
              <Typography>
                <PlaceIcon
                  style={{
                    margin: '0 5 5 5',
                    cursor: 'pointer',
                  }}
                />
                Open in Google Maps
              </Typography>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.8365277379116!2d76.56281896474188!3d20.71686178616812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd750c4b2786e01%3A0x8cdedf6352d81330!2sAnjuman%20High%20school%20%26%20Junior%20College!5e0!3m2!1sen!2sin!4v1675911849080!5m2!1sen!2sin"
                width="300"
                height="200"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                title="Anjuman-map"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Item>
          </Grid>
        </Grid>
        <div className="flex justify-center items-center">
          <FacebookIcon
            color="primary"
            style={{
              margin: '0 5',
              cursor: 'pointer',
            }}
          />
          <InstagramIcon
            color="secondary"
            style={{
              margin: '0 5',
              cursor: 'pointer',
            }}
          />
          <WhatsAppIcon
            color="success"
            style={{
              margin: '0 5',
              cursor: 'pointer',
            }}
          />
          <YouTubeIcon
            color="error"
            style={{
              margin: '0 5',
              cursor: 'pointer',
            }}
          />
          <a href="mailto:ahfazkhan@in.com">
            <MailOutlineIcon
              color="info"
              style={{
                margin: '0 5',
                cursor: 'pointer',
              }}
            />
          </a>
          <span aria-label="hh" role={'img'}>
            ☎️
          </span>
          <Typography variant="body1">
            <a
              href="tel:+91-9822221432"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              9822221432, 07263-252208
            </a>
          </Typography>
        </div>
      </Box>
      <div className="flex flex-col justify-center items-center px-5">
        <hr
          style={{
            width: '100%',
            height: '3px',
            color: '#8b8c8d',
            background: '#8b8c8d',
            border: 'inherit',
          }}
        />
        <br />
        <Typography
          variant="h6"
          sx={{ color: '#fff', paddingBottom: '1rem' }}
          className="max-sm:text-[5px]"
        >
          <span style={{ color: '#8b8c8d' }}>
            {' '}
            © 2018 All rights reserved. @
          </span>{' '}
          Anjuman Mufidul Islam{' '}
          <span style={{ color: '#8b8c8d' }}>Designed & Developed By</span>{' '}
          M.Yusuf Technical Solution - Privacy Policy - Refund Policy
        </Typography>
      </div>
    </div>
  );
};
export default Footer;
