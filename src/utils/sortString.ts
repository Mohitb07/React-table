export const sortString = (data: any[], fieldValue:string, order: "ASC" | "DESC") => {
    if(order === "ASC"){
        data.sort((a, b) => a[`${fieldValue}`].localeCompare(b[`${fieldValue}`]));
    }
    if(order === "DESC"){
        data.sort((a, b) => b[`${fieldValue}`].localeCompare(a[`${fieldValue}`]));
    }
    return data;
}