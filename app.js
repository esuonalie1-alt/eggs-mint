async function connectWallet() {

    if (!window.ethereum) {

        alert("请先安装 MetaMask 或 OKX Wallet");

        return;
    }

    await window.ethereum.request({
        method: "eth_requestAccounts"
    });

    alert("钱包连接成功");
}
