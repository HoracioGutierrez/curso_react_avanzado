import React , {useContext,useEffect} from 'react'
import context , {Consumer} from "../../api/context"

/* class Footer extends React.Component {

    static contextType = context

    componentDidMount(){
        console.log(this.context)
    }
    
    render(){
        console.log(this.context)
        return(
            <footer>
                <p>&copy; Copyright 2020</p>
            </footer>
        )
    }
}
 */

const Footer = () => {

    let contexto = useContext(context)

    console.log(contexto.x)
    useEffect(() => {
        contexto.cambiarX()
    }, [])

    return (
        <footer>
            <p>&copy; Copyright 2020{contexto.x}</p>
        </footer>
    )
} 

/* const Footer = () => {
    return (
        <footer>
            <p>&copy; Copyright 2020</p>
        </footer>
    )
} */

export default Footer
