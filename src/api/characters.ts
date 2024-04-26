import { instanceAPI } from "./api";

const endpoint = "character";

export const characters = {
    getAll: function ({ page }: { page : number }) {
        return instanceAPI.get(endpoint, {
            params: {
                page
            }
        })
    }
}