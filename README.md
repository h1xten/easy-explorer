# EasyExplorer

<img src='./public/EasyExplorer.png' alt='logo' >

**EasyExplorer** is a multichain explorer. EasyExplorer allows users to easily find address data on provided networks.<br/>
Using this explorer you can searching for completed transactions and checking their status, checking the presence of tokens in the wallet and information about these tokens.
The user can log in using **Unstoppable** and see all the information about his wallet.


## Development
Developed with 
- [React.js](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Covalent Blockchain Data API](https://www.covalenthq.com/docs/developer/)
- [Login With Unstoppable](https://docs.unstoppabledomains.com/login-with-unstoppable/)

## Covalent API Endpoints
- /v1/:chain_id/address/:address/balances_v2/  - Get token balances for address
- /v1/:chain_id/address/:address/transactions_v2/  - Get transactions for address

## Usage
- [Demo App Site](https://easy-explorer.vercel.app/)
- [Video Demo](https://www.youtube.com/watch?v=PZqpofOkA2k)

## Contacts
- [Telegram](https://t.me/h1xten) </br>
- Discord - h1xten#3783 </br>
- [Project Repo](https://github.com/h1xten/easy-explorer)

## License
[GPLv3](LICENSE)

#### Notice
This project is not audited and should not be used in a production environment.
