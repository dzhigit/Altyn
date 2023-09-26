// AltynICO.sol 2023.06.22 started

/* Token sale for Altyn

Works with AltynToken.sol as the contract for the Altyn Token

The contract is intended to handle both presale and full ICO, though, if necessary a new contract could be used for the full ICO, with the token contract unchanged apart from its owner.

Min purchase Ether 0.1
No end date - just cap or pause

*/

pragma solidity ^0.4.15;

import "./AltynToken.sol"; // which imports Owned.sol, DSMath.sol, ERC20Token.sol

contract AltynICO is Owned, DSMath {
  string public name;         // Contract name
  uint public  startTime;     // start time of the sale
  uint public  aicosCap;      // Cap for the sale
  uint public  aicosSold;     // Cumulative Picos sold which should == AIOE.pTokensIssued
  uint public  aicosPerEther; // 3,000,000,000,000,000 for ETH = $300 and target AltyenTEph price = $0.10
  uint public  weiRaised;     // cumulative wei raised
  AltynToken public AIOE;     // the Altyn token contract
  address private pPCwalletA; // address of the Altyn Core wallet to receive funds raised

  // Constructor not payable
  // -----------
  //
  function AltynICO() {
    pausedB = true; // start paused
  }

  // Events
  // ------
  event LogPrepareToStart(string Name, uint StartTime, uint AicosCap, AltynToken TokenContract, address PCwallet);
  event LogSetAicosPerEther(uint AicosPerEther);
  event LogChangePCWallet(address PCwallet);
  event LogSale(address indexed Purchaser, uint SaleWei, uint Aicos);
  event LogAllocate(address indexed Supplier, uint SuppliedWei, uint Aicos);
  event LogSaleCapReached(uint WeiRaised, uint PicosSold);

  // PrepareToStart()
  // --------------
  // To be called manually by owner just prior to the start of the presale or the full ICO
  // Can also be called by owner to adjust settings. With care!!
  function PrepareToStart(string vNameS, uint vStartTime, uint vAicosCap, uint vAicosPerEther, AltynToken vTokenA, address vPCwalletA) IsOwner {
    require(vTokenA != address(0)
         && vPCwalletA != address(0));
    name       = vNameS;     // Altyn Presale | Altyn Token Sale
    startTime  = vStartTime;
    aicosCap   = vAicosCap;  // Cap for the sale, 20 Million AIOEs = 20,000,000,000,000,000,000 = 20**19 Picos for the Presale
    AIOE       = vTokenA;    // The token contract
    pPCwalletA = vPCwalletA; // Altyn Code wallet to receive funds
    pausedB    = false;
    AIOE.PrepareForSale();   // stops transfers
    LogPrepareToStart(vNameS, vStartTime, vAicosCap, vTokenA, vPCwalletA);
    SetAicosPerEther(vAicosPerEther);
  }

  // Public Constant Methods
  // -----------------------
  // None. Used public variables instead which result in getter functions

  // State changing public method made pause-able
  // ----------------------------

  // Buy()
  // Fn to be called to buy AIOEs
  function Buy() payable IsActive {
    require(now >= startTime);       // sale is running (in conjunction with the IsActive test)
    require(msg.value >= 0.1 ether); // sent >= the min
    uint aicos = mul(aicosPerEther, msg.value) / 10**18; // aicos = aicos per ETH * Wei / 10^18 <=== calc for integer arithmetic as in Solidity
    weiRaised = add(weiRaised, msg.value);
    pPCwalletA.transfer(this.balance); // throws on failure
    AIOE.Issue(msg.sender, aicos);
    LogSale(msg.sender, msg.value, aicos);
    aicosSold += aicos; // ok wo overflow protection as AIOE.Issue() would have thrown on overflow
    if (aicosSold >= aicosCap) {
      // Cap reached so end the sale
      pausedB = true;
      AIOE.SaleCapReached(); // Allows transfers
      LogSaleCapReached(weiRaised, aicosSold);
    }
  }

  // Functions to be called Manually
  // ===============================
  // SetAicosPerEther()
  // Fn to be called daily (hourly?) or on significant Ether price movement to set the Altyn price
  function SetAicosPerEther(uint vAicosPerEther) IsOwner {
    aicosPerEther = vAicosPerEther; // 3,000,000,000,000,000 for ETH = $300 and target AIOE price = $0.10
    LogSetAicosPerEther(aicosPerEther);
  }

  // ChangePCWallet()
  // Fn to be called to change the PC Wallet to receive funds raised. This is set initially via PrepareToStart()
  function ChangePCWallet(address vPCwalletA) IsOwner {
    require(vPCwalletA != address(0));
    pPCwalletA = vPCwalletA;
    LogChangePCWallet(vPCwalletA);
  }

  // Allocate()
  // Allocate in lieu for goods or services or fiat supplied valued at wad wei in return for picos issued. Not payable
  // no picosCap check
  // wad is only for logging
  function Allocate(address vSupplierA, uint wad, uint aicos) IsOwner IsActive {
     AIOE.Issue(vSupplierA, aicos);
    LogAllocate(vSupplierA, wad, aicos);
    aicosSold += aicos; // ok wo overflow protection as AIOE.Issue() would have thrown on overflow
  }

  // Token Contract Functions to be called Manually via Owner calls to ICO Contract
  // ==============================================================================
  // ChangeTokenContractOwner()
  // To be called manually if a new sale contract is deployed to change the owner of the PacioToken contract to it.
  // Expects the sale contract to have been paused
  // Calling ChangeTokenContractOwner() will stop calls from the old sale contract to token contract IsOwner functions from working
  function ChangeTokenContractOwner(address vNewOwnerA) IsOwner {
    require(pausedB);
    AIOE.ChangeOwner(vNewOwnerA);
  }

  // PauseTokenContract()
  // To be called manually to pause the token contract
  function PauseTokenContract() IsOwner {
    AIOE.Pause();
  }

  // ResumeTokenContract()
  // To be called manually to resume the token contract
  function ResumeTokenContract() IsOwner {
    AIOE.Resume();
  }

  // Mint()
  // To be called manually if necessary e.g. re full ICO going over the cap
  // Expects the sale contract to have been paused
  function Mint(uint aicos) IsOwner {
    require(pausedB);
    AIOE.Mint(aicos);
  }

  // IcoCompleted()
  // To be be called manually after full ICO ends. Could be called before cap is reached if ....
  // Expects the sale contract to have been paused
  function IcoCompleted() IsOwner {
    require(pausedB);
    AIOE.IcoCompleted();
  }

  // SetFFSettings()
  // Allows setting Founder and Foundation addresses (or changing them if an appropriate transfer has been done)
  //  plus optionally changing the allocations which are set by the PacioToken constructor, so that they can be varied post deployment if required re a change of plan
  // All values are optional - zeros can be passed
  // Must have been called with non-zero Founder and Foundation addresses before Founder and Foundation vesting can be done
  function SetFFSettings(address vFounderTokensA, address vFoundationTokensA, uint vFounderTokensAllocation, uint vFoundationTokensAllocation) IsOwner {
    AIOE.SetFFSettings(vFounderTokensA, vFoundationTokensA, vFounderTokensAllocation, vFoundationTokensAllocation);
  }

  // VestFFTokens()
  // To vest Founder and/or Foundation tokens
  // 0 can be passed meaning skip that one
  // SetFFSettings() must have been called with non-zero Founder and Foundation addresses before this fn can be used
  function VestFFTokens(uint vFounderTokensVesting, uint vFoundationTokensVesting) IsOwner {
    AIOE.VestFFTokens(vFounderTokensVesting, vFoundationTokensVesting);
  }

  // Burn()
  // For use when transferring issued AIOEs to PIOs
  // To be replaced by a new transfer contract to be written which is set to own the PacioToken contract
  function Burn(address src, uint aicos) IsOwner {
    AIOE.Burn(src, aicos);
  }

  // Destroy()
  // For use when transferring unissued AIOEs to PIOs
  // To be replaced by a new transfer contract to be written which is set to own the PacioToken contract
  function Destroy(uint aicos) IsOwner {
    AIOE.Destroy(aicos);
  }

  // Fallback function
  // =================
  // No sending ether to this contract!
  // Not payable so trying to send ether will throw
  function() {
    revert(); // reject any attempt to access the token contract other than via the defined methods with their testing for valid access
  }

} // End AltynICO contract

