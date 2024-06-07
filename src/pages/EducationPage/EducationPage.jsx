import Tile from "../../Components/Tile";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function EducationPage() {
    return (

        <>

        <Header/>

        <Tile 
            img={"https://ajitverma15.github.io/Interactive-Portfolio/Image/Programming.svg"}
            header={"Education"}
            text1={"I did my schooling from Sharda Dnyanpeeth, Buldana Maharashtra and I'm currently doing my B.S degree in Scaler school of technology, Bangalore."}
        />
        <Footer/>
        </>
    )
}

export default EducationPage;