
export function Footer({remaining}){
    return <div className="button--flex-col">
            <h3 className="crimson-text-bold text-black dark:text-gray">Your remaining todos: <span className="text-red-500 dark:text-amber-500">{remaining}</span>  </h3>
            <h4 className="crimson-text-bold text-gray-one dark:text-gray">
            “Doing what you love is the comestone of having anbudance in your
            life”-Wayne Dyer
            </h4>
        </div>
}