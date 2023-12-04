
function Button({id, type, onClick, children}) {

    return (
        <button
            id={id}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button