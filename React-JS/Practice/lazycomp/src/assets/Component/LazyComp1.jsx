import react from "react";
class ApiManager {
    isProcess = true;
    data = null;

    doFetch = async function () {
        const rowdata = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsondata = await rowdata.json();
        return jsondata;
    }
    start = function () {
        if (this.isProcess) {
            throw this.doFetch().then((r) => { this.data = r; this.isProcess = false }, (e) => { this.data = e; this.data = false })
        } else {
            if (this.data instanceof Error) {
                throw this.data;
            } else {
                return this.data;
            }

        }
    }
}
const x = new ApiManager();
export default function LazyComp1() {
    const result = JSON.stringify(x.start())
    return (<h1>{result}</h1>)
}