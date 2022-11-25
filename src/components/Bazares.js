import Footer from "./Footer";
import {useEffect, useState} from 'react';
import Bazar from "../components/Bazar";

function Bazares() {
    const [bazares, setBazares] = useState([]);

    async function getBazares(){
        const respuesta = await fetch('https://us-central1-big-bazar-d807c.cloudfunctions.net/bazarServices/bazares', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                },
            });
        const data = await respuesta.json();
        setBazares(data);
    }

    useEffect( () => {
        async function fetchBazares(){
            await getBazares();
        }
        fetchBazares();
    }, []);

    return (
        <>
            <div className="container">
                <div>
                    <div className="col-4">
                        {
                            bazares.map(item =>(
                                <Bazar bazar={item}/>
                            )) 
                        }
                        {console.log(bazares)}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Bazares;