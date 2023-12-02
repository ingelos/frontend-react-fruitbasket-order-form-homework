import './App.css'
import React, {useState} from "react";

function App() {
    // const counters //
    const [bananaCounter, setBananaCounter] = React.useState(0);
    const [strawberryCounter, setStrawberryCounter] = React.useState(0);
    const [appleCounter, setAppleCounter] = React.useState(0);
    const [kiwiCounter, setKiwiCounter] = React.useState(0);
    // const form //
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState(0);
    const [postalcode, setPostalcode] = useState('');
    const [deliveryFrequency, toggleDeliveryFrequency] = useState('weekly');
    const [deliveryTime, toggleDeliveryTime] = useState('daytime');
    const [message, setMessage] = useState('');
    const [termsAndConditions, toggleTermsAndConditions] = useState(false);


    function resetFruit() {
        setBananaCounter(0);
            setStrawberryCounter(0);
            setAppleCounter(0);
        setKiwiCounter(0);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
            Voornaam: ${firstname},
            Achternaam: ${lastname},
            Leeftijd: ${age}, 
            Postcode: ${postalcode},
            Bezorgfrequentie: ${deliveryFrequency},
            Opmerking: ${message},
            Algemene voorwaarden: ${termsAndConditions}`
        );
        console.log(`Fruitmand bestelling: bananen: ${bananaCounter}, aardbeien: ${strawberryCounter}, appels: ${appleCounter}, kiwi's: ${kiwiCounter}`)
    }


    return (
        <>
            <main onSubmit={handleSubmit}>
                <h1>Fruitmand bezorgservice</h1>
                <section className='article-section'>
                    <article className='fruit-article'>
                        <p>🍌 Bananen</p>
                        <button
                            type='button'
                            name='minus-button'
                            onClick={() => setBananaCounter(bananaCounter > 0 ? bananaCounter - 1 : 0)}
                        >-
                        </button>
                        <p>{bananaCounter}</p>
                        <button
                            type='button'
                            name='plus-button'
                            onClick={() => setBananaCounter(bananaCounter + 1)}
                        >+
                        </button>
                    </article>
                    <article className='fruit-article'>

                        <p>🍓 Aardbeien</p>
                        <button
                            type='button'
                            name='minus-button'
                            onClick={() => setStrawberryCounter(strawberryCounter > 0 ? strawberryCounter - 1 : 0)}
                        >-
                        </button>
                        <p>{strawberryCounter}</p>
                        <button
                            type='button'
                            name='minus-button'
                            onClick={() => setStrawberryCounter(strawberryCounter + 1)}
                        >+
                        </button>
                    </article>

                    <article className='fruit-article'>
                        <p>🍏 Appels</p>
                        <button
                            type='button'
                            name='minus-button'
                            onClick={() => setAppleCounter(appleCounter > 0 ? appleCounter - 1 : 0)}
                        >-
                        </button>
                        <p>{appleCounter}</p>
                        <button
                            type='button'
                            name='minus-button'
                            onClick={() => setAppleCounter(appleCounter + 1)}
                        >+
                        </button>
                    </article>

                    <article className='fruit-article'>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p>🥝 Kiwi's</p>
                        <button
                            type='button'
                            name='minus-button'
                            onClick={() => setKiwiCounter(kiwiCounter > 0 ? kiwiCounter - 1 : 0)}
                        >-
                        </button>
                        <p>{kiwiCounter}</p>
                        <button
                            type='button'
                            name='minus-button'
                            onClick={() => setKiwiCounter(kiwiCounter + 1)}
                        >+
                        </button>
                    </article>
                    <div>
                        <button
                            id='reset-button'
                            type='button'
                            onClick={() => resetFruit()}>Reset</button>
                    </div>
                </section>

                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor='first-name-info'>Voornaam</label>
                        <input type='text'
                               id='firstname-field'
                               name='firstname'
                               value={firstname}
                               onChange={(e) => setFirstname(e.target.value)}/>
                    </section>
                    <section>
                        <label htmlFor='last-name-info'>Achternaam </label>
                        <input type='text'
                               id='lastname-field'
                               name='lastName'
                               value={lastname}
                               onChange={(e) => setLastname(e.target.value)}
                        />
                    </section>
                    <section>
                        <label htmlFor='age'>Leeftijd</label>
                        <input type='number'
                               id='age-field'
                               name='age'
                               value={age}
                               onChange={(e) => setAge(parseInt(e.target.value))}
                        />
                    </section>
                    <section>
                        <label htmlFor='postalcode'>Postcode</label>
                        <input type='text'
                               id='postalcode-field'
                               name='postalcode'
                               value={postalcode}
                               onChange={(e) => setPostalcode(e.target.value)}
                        />
                    </section>
                    <section>
                        <label htmlFor='delivery-frequency'>Bezorgfrequentie</label>
                        <select name='delivery-frequency'
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
                               id='delivery'
                               name='time'
                               value='daytime'
                               checked={deliveryTime === 'daytime'}
                               onChange={(e) => toggleDeliveryTime(e.target.value)}
                        />
                        <label htmlFor='delivery-time'>Overdag</label>
                        <input type='radio'
                               id='delivery'
                               name='time'
                               value='evening'
                               checked={deliveryTime === 'evening'}
                               onChange={(e) => toggleDeliveryTime(e.target.value)}
                        />
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <label htmlFor='delivery-time'>'s Avonds</label>
                    </section>
                    <section>
                        <label htmlFor='form-message'>Opmerking</label>
                        <textarea id='-message-field'
                                  name='message'
                                  rows='4'
                                  cols='40'
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </section>
                    <section>
                        <label htmlFor='form-terms-and-conditions'>Ik ga akkoord met de voorwaarden</label>
                        <input type='checkbox'
                               id='form-terms-and-conditions'
                               name='terms'
                               checked={termsAndConditions}
                               onChange={() => toggleTermsAndConditions(!termsAndConditions)}
                        />
                    </section>
                    <button type='submit'>Verzend</button>
                </form>
            </main>
        </>
    )
}

export default App
