import Link from "../src/components/link/link"
import Title from "../src/components/title/title"

export const getStaticProps = async () =>{
    const API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json"
    const res =  await fetch(API_URL)
    const faq = await res.json()

    return {
        props: {
            qualquercoisa: "hahaha to aqui version 12",
            faq
        }
    }
}

const Faq = ({faq}) =>{

    return(
        <div>
            <Title as="h2">Chegamos no querido Faq</Title>
            <Link href="/">Home</Link>
            <ul>
                {faq.map(({question, answer}) =>(
                    <li key={question}>
                        <article>
                            <h3>{question}</h3>
                            <p>{answer}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Faq