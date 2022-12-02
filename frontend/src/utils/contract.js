export const legacyAddress = "0x916C215bd1429Ae27d82C4B136f5ef002249B3e7";

export const legacyAbi = [
    "function checkUpKeep(bytes) view returns(bool, bytes)",
    "function getLegacy(address) view returns(tuple(address, address, address[], uint256, uint256, bool))",
    "function getLegacyTokens(address) view returns(address[])",
    "function hasLegacy(address) view returns(bool)",
    "function create(address, uint256)",
    "function addTokens(address[] _tokens)",
    "function checkIn()",
    "function cancel()",
    "function performUpKeep(bytes)",
    "function update(address, uint256)",
    "function updateCheckInterval(uint)",
    "function updateLegatee(address)"
]