class tree{
    constructor(){
        this.connectors = [];
        this.jsonObject = {};
    }
    addConnection = (id1, id2) =>{
        this.connectors.push([id1, id2]);
        var connectionId = this.connectors.length + 1;
        this.jsonObject[connectionId + 1] = [id1, id2]
        return connectionId;
    }
    removeConnection = (connectionid) =>{
        delete this.jsonObject[connectionid]
    }
    deleteAll = () =>{
        this.connectors = [];
        this.jsonObject = {};
    }
    getById = (id) => {
        return this.jsonObject[id];
    }
    parseIn = (string) => {
        this.jsonObject = JSON.parse(string);
        this.connectors = this.jsonObject.values
    }
    parseOut = () => {
        return JSON.parse(JSON.stringify(this.jsonObject));
    }
}