import link from "next/link";

export default function Link({children, href, ...props}) {
  return(
    <>
      <h1>Link</h1>
      <Link href={children}></Link>
    </>
  )
}
