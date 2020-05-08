import React from "react";

import './Bank.scss'
import HeaderApp from "../../utils/HeaderApp";
import AppContainer from "../../utils/AppContainer";

import ShoppingCartIcon from '../../../assets/icons/shopping-cart.png';
import AtmIcon from '../../../assets/icons/atm.png';
import CardIcon from '../../../assets/icons/card.png';
import SalaryIcon from '../../../assets/icons/salary.png';

const iconList = {
    'atm': AtmIcon,
    'shop': ShoppingCartIcon,
    'card': CardIcon,
}

interface ITransaction {
    amount: number,
    name: string,
    date: string,
    icon: keyof typeof iconList
};

interface ITransactionGroup {
    label: string,
    transactions: ITransaction[]
};

const defaultTransactions: ITransactionGroup[] = [
    { label: 'Today', transactions: [{ amount: -12.95, name: 'LTD North', date: 'July 27', icon: 'shop' }] },
    {
        label: 'Yesterday', transactions: [
            { amount: 500, name: 'Uber', date: 'July 26', icon: 'card' },
            { amount: -1500, name: 'Fleeca Bank ATM', date: 'July 26', icon: 'atm' },
            { amount: -68.95, name: 'LTD North', date: 'July 26', icon: 'shop' }]
    },
    {
        label: 'Earlier this month', transactions: [
            { amount: 1278.55, name: 'Fleeca Bank ATM', date: 'July 25', icon: 'atm' },
            { amount: -1254, name: 'LSPD', date: 'July 22', icon: 'card' },
            { amount: -1254, name: 'LSPD', date: 'July 18', icon: 'card' },
            { amount: -1254, name: 'LSPD', date: 'July 16', icon: 'card' }
        ]
    },
]

const AccountPage: React.FC = () => {

    const getAllTransactions = () => defaultTransactions.map(group => (
        <div className="transaction-group">
            <h3 className="transaction-group-label">{group.label}</h3>
            <ul className="transaction-list">
                {group.transactions.map(transaction => <Transaction {...transaction} />)}
            </ul>
        </div>
    )
    );

    return (
        <div className="account-container">
            <div className="account-header">
                <h1 className="balance">$25,986.00</h1>
                <h2 className="text-light balance-label">Current balance</h2>
            </div>
            {getAllTransactions()}
        </div>
    );
};

const Transaction: React.FC<ITransaction> = (props: ITransaction) => {
    const formatAmount = (amount: number) => (amount > 0 ? '$' : '-$') + Math.abs(amount);

    return (
        <li>
            <div className="transaction-img-container">
                <img src={iconList[props.icon]} />
            </div>
            <div className="transaction-details">
                <h4 className="transaction-name">{props.name}</h4>
                <div className="text-light">{props.date}</div>
            </div>
            <div className={props.amount > 0 ? "income" : ""}>
                {formatAmount(props.amount)}
            </div>
        </li>
    );
}


const Bank: React.FC = () => {
    return (
        <AppContainer>
            <HeaderApp title="Bank" />
            <AccountPage />
        </AppContainer>
    )
};

export default Bank;