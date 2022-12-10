export const sort = (data: any[], fieldValue:string, order: "ASC" | "DESC") => {
    if(order === "ASC"){
        data.sort((a, b) => a[`${fieldValue}`] - b[`${fieldValue}`]);
    }
    if(order === "DESC"){
        data.sort((a, b) => b[`${fieldValue}`] - a[`${fieldValue}`]);
    }
    return data;
}