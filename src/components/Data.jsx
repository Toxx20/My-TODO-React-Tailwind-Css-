import { Checked } from "./Checked.jsx"
import { Delete } from "./Delete.jsx"
/**
 * 
 * @param {JSON.title} title 
 * @returns 
 */
export function Data({title,valueChecked,onClick,onDeleteData}){
    return <div className="checked--flex rounded-xl roboto-simple px-2.5 border border-gray-one text-gray-one dark:text-gray">
            <Checked value={valueChecked}  onClick={onClick} ></Checked>
        {title}
            <Delete onClick={onDeleteData}></Delete>
    </div>
}
