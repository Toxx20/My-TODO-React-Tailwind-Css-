import { Button } from "./Button.jsx"
/**
 * 
 * @param {string} value 
 * @param {function} onChange 
 * @returns {JSX}
 */
export function Input({name,onSubmit}){
    return <form className="checked--flex" onSubmit={onSubmit}>
        <input type="text"
                id="ka" 
                name={name}
                placeholder="Add new task" 
                className="roboto-bold text-[16px] placeholder:text-gray-one dark:text-gray border-b border-gray-one dark:border-amber-100 w-[90%] h-12"
        />
        <Button type="submit" title="Add"
            children={<i> 
                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-7">
                    <rect width="33" height="33" rx="5" fill="#575556"/>
                    <path d="M15.125 17.875H8.25C7.86042 17.875 7.53409 17.743 7.271 17.479C7.00792 17.215 6.87592 16.8887 6.875 16.5C6.87409 16.1113 7.00609 15.785 7.271 15.521C7.53592 15.257 7.86225 15.125 8.25 15.125H15.125V8.25C15.125 7.86042 15.257 7.53409 15.521 7.271C15.785 7.00792 16.1113 6.87592 16.5 6.875C16.8887 6.87409 17.2155 7.00609 17.4804 7.271C17.7453 7.53592 17.8768 7.86225 17.875 8.25V15.125H24.75C25.1396 15.125 25.4664 15.257 25.7304 15.521C25.9944 15.785 26.1259 16.1113 26.125 16.5C26.1241 16.8887 25.9921 17.2155 25.729 17.4804C25.4659 17.7453 25.1396 17.8768 24.75 17.875H17.875V24.75C17.875 25.1396 17.743 25.4664 17.479 25.7304C17.215 25.9944 16.8887 26.1259 16.5 26.125C16.1113 26.1241 15.785 25.9921 15.521 25.729C15.257 25.4659 15.125 25.1396 15.125 24.75V17.875Z" className="fill-white dark:fill-green"/>
                    </svg>
                </i>}>            
        </Button>
    </form>
}