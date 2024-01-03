import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { _Owner } from "../stream-user/schema";

/** 账簿记录的类型
 * @ToC_Pur 根据采购单-签立合同（借）在途物资 60w 应交税费（未开）8w（贷）应付账款 68w
 * @ToC_Pur 根据入库单-收到货物（借）库存商品 60w（贷）在途物资 60w
 * @ToC_Pur 根据多笔付款记录-合计收到货款（借）应付账款 68w（贷）货币资金 68w
 * @ToC_Pur 根据多笔发票记录-合计开出发票，仅仅（借）应交税费（已开）8w
 * 
 * @ToC_Pur 根据采购单-签立合同（借）在途物资 2k（贷）应付账款 2k
 * @ToC_Pur 根据入库单-收到货物（借）库存商品 2k（贷）在途物资 2k
 * @ToC_Pur 根据多笔付款记录-合计收到货款（借）应付账款 2k（贷）货币资金 2k
 * 
 * @ToB_Sale 根据销售单-签立合同（借）应收账款 100w（贷）主营业务收入 87w 应交税费（未开） 13w
 * @ToB_Sale 根据发货单-发出货物（借）主营业务成本 60w（贷）库存商品 60w
 * @ToB_Sale 根据多笔收款记录-合计收到货款（借）货币资金 100w（贷）应收账款 100w
 * @ToB_Sale 根据多笔发票记录-合计开出发票，仅仅（贷）应交税费（已开）13w
 * 
 * @ToC_Sale 根据销售单-签立合同（借）应收账款 6k（贷）发出商品 6k
 * @ToC_Sale 根据发货单-发出货物（借）发出商品 6k（贷）库存商品 6k
 * @ToC_Sale 根据多笔收款记录-合计收到货款（借）货币资金 6k（贷）应收账款 6k
 */
export enum ENUM_BOOK_TYPE {

    /** 基本存款账户，是税务机关核查企业经营收入的主要来源）*/
    CUN_KUAN_ZHANG_HU_JI_BEN = 100201,

    /** 一般存款账户，是存款人因借款或其他结算需要而开设的资金账户）*/
    CUN_KUAN_ZHANG_HU_YI_BAN = 100202,

    /** 应收账款（对公） */
    YING_SHOU_ZHANG_KUAN_DAN_WEI = 112201,

    /** 应收账款（个人） */
    YING_SHOU_ZHANG_KUAN_GE_REN = 112202,

    /** 应收账款（对公） */
    YING_FU_ZHANG_KUAN_DAN_WEI = 220201,

    /** 应收账款（个人） */
    YING_FU_ZHANG_KUAN_GE_REN = 220202
}

/** 账簿记录的借贷方向 */
export enum ENUM_BOOK_DIRECTION {
    JIE = 1000,
    DAI = 2000,
}

/** 账簿记录
 * @amount 分
*/
export type Book = PgBaseSchema & _Owner & {
    tradeId: INTEGER_PG;

    type: ENUM_BOOK_TYPE;
    direction: ENUM_BOOK_DIRECTION;
    amount: INTEGER_PG
}