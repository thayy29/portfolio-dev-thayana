import Link from "next/link"
import GlobalStyles from "../theme/GlobalStyle";


 function Title({children, as}){
  const Tag = as;
  return(
    <>
    <Tag>{children}</Tag>
      {/* <style jsx>
    {
      `
        ${Tag} {
          color: red;
        }
      `
    }
    </style> */}
    </>
  )
}

export default function homePage() {
  return (
    <div>
      <GlobalStyles/>
      <Title as ="h1">Portfolio Page</Title>
      <Link href="/faq">Ir para o FAQ</Link>
    </div>
  )
}
