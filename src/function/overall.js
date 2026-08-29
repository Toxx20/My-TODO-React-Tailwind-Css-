/**
 * 
 * @param {URL} url 
 * @param {method} options 
 * @returns {JSON}
 */
export async function fetchJson(url,options){
    const r =  await fetch(url,{...options})
    const json = await r.json()
    return json
}

/**
 * 
 * @param {number} id 
 * @param {string} title 
 * @param {boolean} completed 
 * @returns {string{}}
 */
export function dataCreated(id,title,completed=false){
    return {id:id,title:title,completed:completed}
}