import {observable, computed, action} from 'mobx';

export default class Store {

    @observable currentData = {
        id: null,
        reference: '',
        name: ''
    }

    @observable data = [
        {
            reference: 1,
            name: 'Test 1'
        }, {
            reference: 2,
            name: 'Test 2'
        }
    ];

    @computed get qtd() {
        return this.data.length;
    }

    getAll() {
        return this.data;
    }

    @action changeData(field, value) {
        this.currentData[field] = value;
    }

    @action persistData() {
        if (this.currentData.id === null) { // new data
            this.data.push(this.currentData); // todo retirar id
        } else {
            this.data[this.currentData.id] = this.currentData;
        }
        this.clearData();
    }

    @action removeData() {
        if (this.currentData.id !== null) { // new data
            this.data.splice(this.currentData.id, 1);
        }
        this.clearData();
    }

    @action clearData() {
        this.currentData = {
            id: null,
            reference: '',
            name: ''
        }
    }

    @action getDataById(id) {
        this.currentData = {
            id: id,
            reference: this.data[id].reference,
            name: this.data[id].name
        }
    }

}
