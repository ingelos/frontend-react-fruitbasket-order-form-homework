import Button from "./Button.jsx";

function Counter({fruitCounter, setFruitCounter}) {

    return (
        <>
        <Button
            type='button'
            onClick={() => setFruitCounter(fruitCounter > 0 ? fruitCounter - 1 : 0)}>
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