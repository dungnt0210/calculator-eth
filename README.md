# Installion
git clone https://github.com/dungnt0210/calculator-eth.git

cd client/

npm install

cd smart_contracts/

Open Ganache

truffle deploy

# Testing
- Connect http://localhost:3000
- Open metamask
- Add network:
    Network Name: Ganache
    New RPC URL: http://127.0.0.1:7545
    Chain ID: 1337
- Switch to new network and add account by importing private key
- With plus, minus, divide, multiple: a + b =
- With square, square_root: a ^2
- Use C button in the right of calculator to reset after each calculation