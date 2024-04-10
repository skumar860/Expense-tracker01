import headerImage from '../assets/investment-calculator-logo.png'

export default function Header (){
    return <>
    <header>
        <img src={headerImage} alt=" Logo showing a money bag" />
        <h1>Investment Calculator</h1>
    </header>
    </>
}