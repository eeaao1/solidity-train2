// 导入 ethers 和 upgrades 模块
const { ethers, upgrades } = require("hardhat");

// 定义主函数
async function main() {
    // 获取 BoxV1 合约工厂
    const BoxV1 = await ethers.getContractFactory("BoxV1");

    // 部署 BoxV1 合约的代理实例，使用初始函数 store
    const box = await upgrades.deployProxy(BoxV1, { initializer: "store" });

    // 等待合约部署完成
    await box.deployed();

    // 打印 BoxV1 合约的地址
    console.log("BoxV1 deployed to:", box.address);

    // 获取 BoxV2 合约工厂
    const BoxV2 = await ethers.getContractFactory("BoxV2");

    // 升级 BoxV1 合约到 BoxV2
    const upgradedBox = await upgrades.upgradeProxy(box.address, BoxV2);

    // 打印升级后的合约地址
    console.log("Box upgraded to:", upgradedBox.address);
}

// 调用主函数并处理错误
main().catch((error) => {
    console.error(error); // 打印错误信息
    process.exitCode = 1; // 设置退出代码为 1 表示发生错误
});
