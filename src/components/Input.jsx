function Input({label, type, id, name, value, onChange}) {

    return (
        <>
            <label htmlFor={name}>{label}</label>
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            />
        </>
    );
}

export default Input