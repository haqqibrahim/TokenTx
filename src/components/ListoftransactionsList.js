// LIBRARIES IMPORTS
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import ListItemIcon from '@mui/material/ListItemIcon';
// CSS FILES
import "./LIstoftransactionsList.css"

// SVG IMPORTS
import { ReactComponent as BTC } from './btc.svg'
import { ReactComponent as ETH } from './eth.svg'

function ListoftransactionsList() {
	const transactions = [
		{
			id: '1',
			image: <BTC />,
			balance: '10,000',
			currency: 'Bitcoin BTC',
			sent: "2,000",
			to: "0x3F036C08BF9...",
			new_balance: '8,000'
		},
		{
			id: '2',
			image: <ETH />,
			balance: '8,000',
			currency: 'Ethereum ETH',
			sent: "4,000",
			to: "0x3F036C08BF9...",
			new_balance: '4,000'
		}, {
			id: '3',
			image: <BTC />,
			balance: '4,000',
			currency: 'Bitcoin BTC',
			sent: "1,000",
			to: "0x3F036C08BF9...",
			new_balance: '3,000'
		},
	];
	return (
		transactions.map(transaction =>
			<div className="listContainer">
				<List className="listContainer"
					sx={{
						//maxWidth: 800,
					}}>
					<ListItem>
						<ListItemIcon>
							{transaction.image}
						</ListItemIcon>
						<ListItemText className='list' primary="ID" secondary={transaction.id} />
						<ListItemText className='list' primary="Balance" secondary={transaction.balance} />
						<ListItemText className='list' primary="Currency" secondary={transaction.currency} />
						<ListItemText className='list addA' primary="Recipient" secondary={transaction.to} />
						<ListItemText className='list addB' primary="Amount" secondary={transaction.sent} />
						<ListItemText primary="New Balance" secondary={transaction.new_balance} />
					</ListItem>
				</List>
			</div>
		)
	);
}

export default ListoftransactionsList;
