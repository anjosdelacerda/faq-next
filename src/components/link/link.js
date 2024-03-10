import NextLink from "next/link";

const Link = ({children, href, ...props}) => {

    return(
        <NextLink href={href} {...props} passHref>
            {children}
        </NextLink>
    )
}

export default Link