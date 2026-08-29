import { Checked } from "./Checked.jsx"
import { Delete } from "./Delete.jsx"
/**
 * 
 * @param {JSON.title} title 
 * @returns 
 */
export function Data({title,valueChecked,onClick,onDeleteData}){
    return <div className="checked--flex roboto-simple text-gray">
            <Checked value={valueChecked}  onClick={onClick} ></Checked>
        {title}
            <Delete onClick={onDeleteData}></Delete>
    </div>
}
