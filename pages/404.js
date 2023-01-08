import Link from "../src/components/Link"

export default function Page404(){
    return(
        <div>
            <h1> Infelizmente você não encontrou o que precisava</h1>
            <Link href="/">
                Volte para pagina inicial.
            </Link>
        </div>
    )
}