
/**
 * 
 * @param {boolean} value 
 * @param {Event} onClick 
 * @returns {HTMLElement}
 */
export function Checked({value,onClick}){

    const checked = value

    const checkedTrue = <svg className="fill-black dark:fill-gray-one"  width="32" height="32" viewBox="0 0 32 32"  fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="32"     height="32" rx="5" /> <path      d="M14 21.5L9 16.54L10.59 15L14 18.35L21.41 11L23 12.58L14 21.5Z"      fill="white"/>
                            </svg>
    
    const checkedFalse =  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="0.75" y="0.75" width="30.5" height="30.5" rx="4.25" fill="white" /> <rect x="0.75" y="0.75" width="30.5" height="30.5" rx="4.25" className="stroke-gray-one black:stroke-orange" strokeWidth="1.5" />
                            </svg>

    return <i className="mr-1" onClick={onClick}>
            {checked? checkedTrue : checkedFalse }
            </i>
}