// pragma solidity ^0.8.17;

// import "./CustomERC20Token.sol";
// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

// contract Crowdfunding is Ownable {
//     // Variables to store contract owner, funding goal, total funds raised, and deadline
//     struct Project {
//         address payable owner;
//         uint256 fundingGoal;
//         uint256 deadline;
//         uint256 totalFundsRaised;
//         bool active;
//         bool exists;
//         mapping(address => uint256) investments;
//     }

//     CustomERC20Token public token;
//     mapping(uint256 => Project) public projects;
//     uint256 public projectId;

//     constructor(CustomERC20Token _token) {
//         token = _token;
//     }

//     function createProject(uint256 fundingGoal, uint256 durationInDays) public {
//         projectId++;
//         projects[projectId] = Project({
//             owner: payable(msg.sender),
//             fundingGoal: fundingGoal,
//             deadline: block.timestamp + (durationInDays * 1 days),
//             totalFundsRaised: 0,
//             active: true,
//             exists: true
//         });
//     }

//     function fundProject(uint256 _projectId, uint256 amount) public {
//         require(projects[_projectId].exists, "Project does not exist");
//         require(projects[_projectId].active, "Project is not active");
//         require(block.timestamp < projects[_projectId].deadline, "Crowdfunding has ended");
//         require(projects[_projectId].totalFundsRaised + amount <= projects[_projectId].fundingGoal, "Funding goal exceeded");

//         // Transfer the ERC20 tokens from the investor to the contract
//         token.transferFrom(msg.sender, address(this), amount);

//         projects[_projectId].investments[msg.sender] += amount;
//         projects[_projectId].totalFundsRaised += amount;

//         if (projects[_projectId].totalFundsRaised == projects[_projectId].fundingGoal) {
//             projects[_projectId].active = false;
//         }
//     }

//     function withdrawFunds(uint256 _projectId) public {
//         require(projects[_projectId].exists, "Project does not exist");
//         require(!projects[_projectId].active, "Project is still active");
//         require(projects[_projectId].owner == msg.sender, "Only the project owner can withdraw funds");

//         uint256 amount = projects[_projectId].totalFundsRaised;
//         projects[_projectId].totalFundsRaised = 0;

//         // Transfer the ERC20 tokens from the contract to the project owner
//         token.transfer(msg.sender, amount);
//     }

//     function getRefund(uint256 _projectId) public {
//         require(projects[_projectId].exists, "Project does not exist");
//         require(block.timestamp >= projects[_projectId].deadline, "Crowdfunding is still ongoing");
//         require(projects[_projectId].totalFundsRaised < projects[_projectId].fundingGoal, "Funding goal reached, no refunds");

//         uint256 investedAmount = projects[_projectId].investments[msg.sender];
//         projects[_projectId].investments[msg.sender] = 0;

//         // Transfer the ERC20 tokens from the contract to the investor
//         token.transfer(msg.sender, investedAmount);
//     }
// }
