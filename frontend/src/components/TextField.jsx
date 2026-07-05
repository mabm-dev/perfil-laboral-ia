function TextField({ label, type, value, onChange, required = true}) {
    return (
        <label>
            {label}
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required ={required}
            />
        </label>
    )
}

export default TextField