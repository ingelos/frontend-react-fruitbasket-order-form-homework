import Button from "./Button.jsx";

function Counter({fruitCounter, setFruitCounter}) {

    return (
        <>
        <Button
            type='button'
            disabled={fruitCounter === 0} onClick={() => setFruitCounter(fruitCounter - 1)}>
            -
        </Button>
            <p>{fruitCounter}</p>
            <Button
            type='button'
            onClick={() => setFruitCounter(fruitCounter + 1)}>
           +
     </Button>
        </>
    );
}

export default Counter
