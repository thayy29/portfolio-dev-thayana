import NextLink from 'next/link';
import { Box, Text } from '../../../theme/components';
import { theme } from "../../../theme/theme"

export default function Navbar() {
  return(
  <>
    <NextLink
        styleSheet={{
        color: theme.colors.neutral["000"] ,
        textDecoration: "none"
        }}
        href="/about">
        About me
    </NextLink>
    <NextLink href="/projects">Projects</NextLink>
    <NextLink href="/contact">Contact</NextLink>
    <NextLink href="/music">Music</NextLink>
  </>
  )
}
