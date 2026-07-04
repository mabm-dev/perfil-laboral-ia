function TextField({ label, type, value, onChange}) {
    return (
        <label>
            {label}
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required
            />
        </label>
    )
}

export default TextField