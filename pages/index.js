import Link from "../src/components/link/link"
import Title from "../src/components/title/title"
import {Roboto} from "next/font/google"

const roboto = Roboto({
  weight:["100","300","400"],
  subsets: ["latin"]
})

const HomePage = () =>{
  return(
    <div className={roboto.className}>
      <Title as="h2">Olá Nando, vamos tentar novamente a vencer o next.js? Eu conto com você!</Title>
      <Link href="/faq">Faq</Link>
    </div>
  )

}
 
export default HomePage