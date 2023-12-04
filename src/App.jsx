import './App.css'
import {useState} from "react";
import Button from "./components/Button.jsx";
import Counter from "./components/Counter.jsx";
import Input from "./components/Input.jsx";

function App() {

    const [bananas, setBananas] = useState(0);
    const [strawberries, setStrawberries] = useState(0);
    const [apples, setApples] = useState(0);
    const [kiwis, setKiwis] = useState(0);

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState(0);
    const [postalcode, setPostalcode] = useState('');
    const [deliveryFrequency, toggleDeliveryFrequency] = useState('weekly');
    const [deliveryTime, toggleDeliveryTime] = useState('daytime');
    const [message, setMessage] = useState('');
    const [termsAndConditions, toggleTermsAndConditions] = useState(false);



    function resetFruit() {
        setBananas(0);
        setStrawberries(0);
        setApples(0);
        setKiwis(0);
    }


    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
            Voornaam: ${firstname},
            Achternaam: ${lastname},
            Leeftijd: ${age}, 
            Postcode: ${postalcode},
            Bezorgfrequentie: ${deliveryFrequency},
            Bezorgtijd: ${deliveryTime},
            Opmerking: ${message},
            Algemene voorwaarden: ${termsAndConditions}`
        );
        console.log(`Fruitmand bestelling: bananen: ${bananas}, aardbeien: ${strawberries}, appels: ${apples}, kiwi's: ${kiwis}`)
    }


    return (
        <>
            <main onSubmit={handleSubmit}>
                <h1>Fruitmand bezorgservice</h1>
                <section className='article-section'>

                    <article className='fruit-article'>
                        <p>🍌 Bananen</p>
                        <Counter
                            fruitCounter={bananas}
                            setFruitCounter={setBananas}
                        />
                    </article>

                    <article className='fruit-article'>
                        <p>🍓 Aardbeien</p>
                        <Counter
                            fruitCounter={strawberries}
                            setFruitCounter={setStrawberries}
                        />
                    </article>

                    <article className='fruit-article'>
                        <p>🍏 Appels</p>
                        <Counter
                            fruitCounter={apples}
                            setFruitCounter={setApples}
                        />
                    </article>

                    <article className='fruit-article'>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p>🥝 Kiwi's</p>
                        <Counter
                            fruitCounter={kiwis}
                            setFruitCounter={setKiwis}
                        />
                    </article>

                    <div>
                        <Button
                            id='reset-button'
                            type='button'
                            buttonText='Reset'
                            onClick={resetFruit}
                        >Reset
                        </Button>
                    </div>
                </section>

                <form onSubmit={handleSubmit}>
                    <section>
                        <Input
                            label='Voornaam'
                            id='firstname-field'
                            type='text'
                            name='firstname'
                            value={firstname}
                            onChange={setFirstname}
                        />
                    </section>
                    <section>
                        <Input
                            label='Achternaam'
                            id='firstname-field'
                            type='text'
                            name='lastname'
                            value={lastname}
                            onChange={setLastname}
                        />
                    </section>
                    <section>
                        <Input
                            label='Leeftijd'
                            id='age-field'
                            type='number'
                            name='age'
                            value={age}
                            onChange={setAge}
                        />
                    </section>
                    <section>
                        <Input
                            label='Postcode'
                            id='postalcode-field'
                            type='text'
                            name='postalcode'
                            value={postalcode}
                            onChange={setPostalcode}
                        />
                    </section>
                    <section>
                        <label htmlFor='Bezorgfrequentie'>Bezorgfrequentie</label>
                        <select name='delivery'
                                id='delivery-frequency'
                                value={deliveryFrequency}
                                onChange={(e) => toggleDeliveryFrequency(e.target.value)}>
                            <option value='weekly'>Iedere week</option>
                            <option value='biweekly'>Om de week</option>
                            <option value='monthly'>Iedere maand</option>
                        </select>
                    </section>
                    <section>
                        <input type='radio'
                               id='delivery-daytime'
                               name='time'
                               value='daytime'
                               checked={deliveryTime === 'daytime'}
                               onChange={(e) => toggleDeliveryTime(e.target.value)}
                        />
                        <label htmlFor='delivery-daytime'>Overdag</label>
                        <input type='radio'
                               id='delivery-evening'
                               name='time'
                               value='evening'
                               checked={deliveryTime === 'evening'}
                               onChange={(e) => toggleDeliveryTime(e.target.value)}
                        />
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <label htmlFor='delivery-evening'>'s Avonds</label>
                    </section>

                    <section>
                        <label htmlFor='-message-field'>Opmerking</label>
                        <textarea id='-message-field'
                                  name='message'
                                  rows='4'
                                  cols='40'
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </section>
                    <section>
                        <label htmlFor='terms-and-conditions-field'>Ik ga akkoord met de voorwaarden</label>
                        <input type='checkbox'
                               id='form-terms-and-conditions-field'
                               name='terms'
                               checked={termsAndConditions}
                               onChange={(e) => toggleTermsAndConditions(e.target.checked)}
                        />
                    </section>
                    <Button
                        type='submit'
                        onClick={handleSubmit}
                    >
                        Verzend
                    </Button>
                </form>
            </main>
        </>
    )
}

export default App


//
// <label htmlFor='firstname-field'>Voornaam</label>
// <input type='text'
//        id='firstname-field'
//        name='firstname'
//        value={firstname}
//        onChange={(e) => setFirstname(e.target.value)}/>
//
// <label htmlFor='lastname-field'>Achternaam </label>
// <input type='text'
//        id='lastname-field'
//        name='lastName'
//        value={lastname}
//        onChange={(e) => setLastname(e.target.value)}
// />
//
// <label htmlFor='age-field'>Leeftijd</label>
// <input type='number'
//        id='age-field'
//        name='age'
//        value={age}
//        onChange={(e) => setAge(parseInt(e.target.value))}
// // />
// <label htmlFor='postalcode-field'>Postcode</label>
// <input type='text'
//        id='postalcode-field'
//        name='postalcode'
//        value={postalcode}
//        onChange={(e) => setPostalcode(e.target.value)}
// />
