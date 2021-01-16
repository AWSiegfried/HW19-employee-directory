import axios from "axios";

export default {
    getUsers: function() {
        return axios.get("https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?results=200&nat=us")
    }
}