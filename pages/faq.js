import Link from "../src/components/Link"
import Head from 'next/head'

export const getStaticProps = async () => {
  const res = await fetch("https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json")
  const faq = await res.json()
  return { props: {
    faq
  }
};
};

export default function FaqPage ({faq}) {
  return(
    <div>
       <Head>
        <title>
          FAQ Page
        </title>
      </Head>
    <h1>Página de Perguntas - FAQ</h1>
      <Link href="/">Back to Home page</Link>
    <ul>
      {faq.map(({question, answer}) => (
            <li key={question}>
              <article>
                <h2>{question}</h2>
                <p>{answer}</p>
              </article>
            </li>
        ))}
    </ul>
    </div>

  )
}
