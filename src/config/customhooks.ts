import supabase from "./dbconfig"

export const useFetch = async (tableName: string) => {

    const { error, data } = await supabase.from(tableName).select("*")
    return {
        error,
        data
    }
}