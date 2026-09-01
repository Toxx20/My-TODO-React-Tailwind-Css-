export function Button({type,title, onClick,className,children}){
    return <button type={type} onClick={onClick} title={title} className={className}>
        {children}
        </button>
}