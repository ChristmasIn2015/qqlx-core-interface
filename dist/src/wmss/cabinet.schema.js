"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAP_ENUM_POUNDS_FORMULA = exports.ENUM_POUNDS_FORMULA = exports.MAP_ENUM_LAYOUT_CABINET = exports.ENUM_LAYOUT_CABINET = void 0;
/** 货架上，商品的摆放方式 */
var ENUM_LAYOUT_CABINET;
(function (ENUM_LAYOUT_CABINET) {
    ENUM_LAYOUT_CABINET[ENUM_LAYOUT_CABINET["SUMMARY"] = 1] = "SUMMARY";
    ENUM_LAYOUT_CABINET[ENUM_LAYOUT_CABINET["INDIVIDUAL"] = 2] = "INDIVIDUAL";
})(ENUM_LAYOUT_CABINET = exports.ENUM_LAYOUT_CABINET || (exports.ENUM_LAYOUT_CABINET = {}));
const MAP_ENUM_LAYOUT_CABINET = new Map();
exports.MAP_ENUM_LAYOUT_CABINET = MAP_ENUM_LAYOUT_CABINET;
MAP_ENUM_LAYOUT_CABINET.set(ENUM_LAYOUT_CABINET.SUMMARY, {
    value: ENUM_LAYOUT_CABINET.SUMMARY,
    text: "普通",
    tip: "仓库入库发货后，您可以看见商品一共剩余多少库存",
});
MAP_ENUM_LAYOUT_CABINET.set(ENUM_LAYOUT_CABINET.INDIVIDUAL, {
    value: ENUM_LAYOUT_CABINET.INDIVIDUAL,
    text: "大件商品",
    tip: "您可以具体看见，每一个入库后的“大件商品”的剩余库存（如冷轧卷等）",
});
/** 开单时的自动称重方法 */
var ENUM_POUNDS_FORMULA;
(function (ENUM_POUNDS_FORMULA) {
    ENUM_POUNDS_FORMULA[ENUM_POUNDS_FORMULA["NONE"] = 1] = "NONE";
    /** 薄钢板理算 厚度mm*宽度mm*长度mm */
    ENUM_POUNDS_FORMULA[ENUM_POUNDS_FORMULA["STEEL_PLATE"] = 2] = "STEEL_PLATE";
})(ENUM_POUNDS_FORMULA = exports.ENUM_POUNDS_FORMULA || (exports.ENUM_POUNDS_FORMULA = {}));
const MAP_ENUM_POUNDS_FORMULA = new Map();
exports.MAP_ENUM_POUNDS_FORMULA = MAP_ENUM_POUNDS_FORMULA;
MAP_ENUM_POUNDS_FORMULA.set(ENUM_POUNDS_FORMULA.NONE, { value: ENUM_POUNDS_FORMULA.NONE, text: "无", tip: "" });
MAP_ENUM_POUNDS_FORMULA.set(ENUM_POUNDS_FORMULA.STEEL_PLATE, {
    value: ENUM_LAYOUT_CABINET.INDIVIDUAL,
    text: "板材专用",
    tip: "如：1张 1.0mm*1250mm*2500mm 的钢板理算重量将会计算为 0.025 吨",
});
