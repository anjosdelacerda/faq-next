const GlobalStyle = () =>{

    return(
        <style global jsx>{`
            body{
                display: flex;
                flex-direction: column;
                background-color: #f8efbd;
                justify-content: center;
                align-items: center;
            }

            h1, h2, h3, h4, h5 {
                color: #422c07;
                font-size: 2rem;
                font-weight: bold;
            }

            p{
                color: #746407;
            }
        `}</style>
    )
}

export default GlobalStyle