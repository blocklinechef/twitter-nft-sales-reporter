"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CROSS_CHAIN_SEAPORT_ADDRESS = exports.KNOWN_CONDUIT_KEYS_TO_CONDUIT = exports.NO_CONDUIT = exports.ONE_HUNDRED_PERCENT_BP = exports.MAX_INT = exports.BasicOrderRouteType = exports.Side = exports.ItemType = exports.OrderType = exports.EIP_712_ORDER_TYPE = exports.SEAPORT_CONTRACT_VERSION = exports.SEAPORT_CONTRACT_NAME = void 0;
var ethers_1 = require("ethers");
exports.SEAPORT_CONTRACT_NAME = "Seaport";
exports.SEAPORT_CONTRACT_VERSION = "1.1";
exports.EIP_712_ORDER_TYPE = {
    OrderComponents: [
        { name: "offerer", type: "address" },
        { name: "zone", type: "address" },
        { name: "offer", type: "OfferItem[]" },
        { name: "consideration", type: "ConsiderationItem[]" },
        { name: "orderType", type: "uint8" },
        { name: "startTime", type: "uint256" },
        { name: "endTime", type: "uint256" },
        { name: "zoneHash", type: "bytes32" },
        { name: "salt", type: "uint256" },
        { name: "conduitKey", type: "bytes32" },
        { name: "counter", type: "uint256" },
    ],
    OfferItem: [
        { name: "itemType", type: "uint8" },
        { name: "token", type: "address" },
        { name: "identifierOrCriteria", type: "uint256" },
        { name: "startAmount", type: "uint256" },
        { name: "endAmount", type: "uint256" },
    ],
    ConsiderationItem: [
        { name: "itemType", type: "uint8" },
        { name: "token", type: "address" },
        { name: "identifierOrCriteria", type: "uint256" },
        { name: "startAmount", type: "uint256" },
        { name: "endAmount", type: "uint256" },
        { name: "recipient", type: "address" },
    ],
};
var OrderType;
(function (OrderType) {
    OrderType[OrderType["FULL_OPEN"] = 0] = "FULL_OPEN";
    OrderType[OrderType["PARTIAL_OPEN"] = 1] = "PARTIAL_OPEN";
    OrderType[OrderType["FULL_RESTRICTED"] = 2] = "FULL_RESTRICTED";
    OrderType[OrderType["PARTIAL_RESTRICTED"] = 3] = "PARTIAL_RESTRICTED";
})(OrderType = exports.OrderType || (exports.OrderType = {}));
var ItemType;
(function (ItemType) {
    ItemType[ItemType["NATIVE"] = 0] = "NATIVE";
    ItemType[ItemType["ERC20"] = 1] = "ERC20";
    ItemType[ItemType["ERC721"] = 2] = "ERC721";
    ItemType[ItemType["ERC1155"] = 3] = "ERC1155";
    ItemType[ItemType["ERC721_WITH_CRITERIA"] = 4] = "ERC721_WITH_CRITERIA";
    ItemType[ItemType["ERC1155_WITH_CRITERIA"] = 5] = "ERC1155_WITH_CRITERIA";
})(ItemType = exports.ItemType || (exports.ItemType = {}));
var Side;
(function (Side) {
    Side[Side["OFFER"] = 0] = "OFFER";
    Side[Side["CONSIDERATION"] = 1] = "CONSIDERATION";
})(Side = exports.Side || (exports.Side = {}));
var BasicOrderRouteType;
(function (BasicOrderRouteType) {
    BasicOrderRouteType[BasicOrderRouteType["ETH_TO_ERC721"] = 0] = "ETH_TO_ERC721";
    BasicOrderRouteType[BasicOrderRouteType["ETH_TO_ERC1155"] = 1] = "ETH_TO_ERC1155";
    BasicOrderRouteType[BasicOrderRouteType["ERC20_TO_ERC721"] = 2] = "ERC20_TO_ERC721";
    BasicOrderRouteType[BasicOrderRouteType["ERC20_TO_ERC1155"] = 3] = "ERC20_TO_ERC1155";
    BasicOrderRouteType[BasicOrderRouteType["ERC721_TO_ERC20"] = 4] = "ERC721_TO_ERC20";
    BasicOrderRouteType[BasicOrderRouteType["ERC1155_TO_ERC20"] = 5] = "ERC1155_TO_ERC20";
})(BasicOrderRouteType = exports.BasicOrderRouteType || (exports.BasicOrderRouteType = {}));
exports.MAX_INT = ethers_1.BigNumber.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
exports.ONE_HUNDRED_PERCENT_BP = 10000;
exports.NO_CONDUIT = "0x0000000000000000000000000000000000000000000000000000000000000000";
// Supply here any known conduit keys as well as their conduits
exports.KNOWN_CONDUIT_KEYS_TO_CONDUIT = {};
exports.CROSS_CHAIN_SEAPORT_ADDRESS = "0x00000000006c3852cbef3e08e8df289169ede581";
//# sourceMappingURL=constants.js.map