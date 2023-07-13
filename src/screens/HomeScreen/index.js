import Head from "next/head";
import Footer from "../../components/patterns/Footer";
import Navbar from "../../components/patterns/Navbar";
import Link from "../../components/Link";
import { theme } from "../../theme/theme";
import { Image, Box, Text, Icon, Input, Button } from "../../theme/components";
import Home from "../../components/patterns/Home";
import About from "../../components/patterns/About";

const AVATAR_URL = "images/avatar.jpg";
const SIDE_IMAGE_URL = "https://fakeimg.pl/2878x1640";

export default function HomeScreen() {
  return (
    <Box>
      <Head>
        <title>Home Page</title>
      </Head>
      <Navbar />
      <Home />
      <About />
      <Footer />
    </Box>
  );
}
