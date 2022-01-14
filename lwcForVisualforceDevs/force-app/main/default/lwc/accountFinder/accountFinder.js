import { LightningElement, wire, api } from 'lwc';
import queryAccountsByRevenue from '@salesforce/apex/AccountListControllerLwc.queryAccountsByRevenue';

export default class AccountFinder extends LightningElement {
    @api annualRevenue;

    handleChange(event) {
        this.annualRevenue = event.detail.value;
    }
    reset(){
        this.annualRevenue = null;
    }
    @wire(queryAccountsByRevenue, {annualRevenue: `$annualRevenue`})
    accounts;
}