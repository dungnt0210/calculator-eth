import CalculateContract from "../contracts/Calculate.json";
import Web3 from 'web3';

let selectedAccount;

let calculateContract;

let isInitialized = false;

export const init = async () => {
	const providerUrl = 'http://localhost:8545';
	const web3 = new Web3(providerUrl);
	let provider = window.ethereum;

	if (typeof provider !== 'undefined') {
		provider
			.request({ method: 'eth_requestAccounts' })
			.then((accounts) => {
				selectedAccount = accounts[0];
				console.log(`Selected account is ${selectedAccount}`);
			})
			.catch((err) => {
				console.log(err);
				return;
			});

		window.ethereum.on('accountsChanged', function (accounts) {
			selectedAccount = accounts[0];
			console.log(`Selected account changed to ${selectedAccount}`);
		});
	}

	// const web3 = new Web3(provider);

	// const networkId = await web3.eth.net.getId();

	// calculateContract = new web3.eth.Contract(
	// 	CalculateContract.abi,
	// 	CalculateContract.networks[networkId].address
	// );

	isInitialized = true;
};

export const add = async (param1, param2) => {
	if (!isInitialized) {
		await init();
	}

	return calculateContract.methods
		.add(param1, param2)
		.call()
		.then((res) => {
			return res;
		});
};

export const minus = async (param1, param2) => {
	if (!isInitialized) {
		await init();
	}

	return calculateContract.methods
		.minus(param1, param2)
		.call()
		.then((res) => {
			return res;
		});
};

export const multiple = async (param1, param2) => {
	if (!isInitialized) {
		await init();
	}

	return calculateContract.methods
		.multiple(param1, param2)
		.call()
		.then((res) => {
			return res;
		});
};

export const divide = async (param1, param2) => {
	if (!isInitialized) {
		await init();
	}

	return calculateContract.methods
		.divide(param1, param2)
		.call()
		.then((res) => {
			return res;
		});
};

export const square = async (param1) => {
	if (!isInitialized) {
		await init();
	}

	return calculateContract.methods
		.square(param1)
		.call()
		.then((res) => {
			return res;
		});
};

export const squareRoot = async (param1) => {
	if (!isInitialized) {
		await init();
	}

	return calculateContract.methods
		.square_root(param1)
		.call()
		.then((res) => {
			return res;
		});
};