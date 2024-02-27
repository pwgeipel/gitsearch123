const Button = ({ children, className = 'btn-primary'}) => {
    return (
        <button className={`btn ${className}`}>{children}</button>
    )

}

export default Button