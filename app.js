let walletAddress = "";

async function connectWallet() {

    if (!window.ethereum) {

        alert("请先安装 MetaMask 或 OKX Wallet");

        return;
    }

    const accounts =
        await window.ethereum.request({
            method: "eth_requestAccounts"
        });

    walletAddress = accounts[0];

    document.querySelector(".btn").innerText =
        walletAddress.substring(0,6)
        + "..."
        + walletAddress.substring(
            walletAddress.length - 4
        );
}
