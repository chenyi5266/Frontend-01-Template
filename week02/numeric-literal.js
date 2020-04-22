/**
 * 1.
 * NumericLiteral::
 *    DecimalLiteral
 *    BinaryIntegerLiteral
 *    OctalIntegerLiteral
 *    HexIntegerLiteral
 */

/**
 * 2. 十进制
 * DecimalLiteral::
 *    DecimalIntegerLiteral . DecimalDigits(opt) ExponentPart(opt)
 *    . DecimalDigits ExponentPart(opt)
 *    DecimalIntegerLiteral ExponentPart(opt)
 */

// 符合十进制的字面量
/^[0-9]*(.[0-9]*)?/g;

 /**
  * 2.1
  * DecimalIntegerLiteral::
  *     0
  *     NonZeroDigit DecimalDigits(opt)
  */



/**
 * 2.2
 * DecimalDigits::
 *    DecimalDigit
 *    DecimalDigits DecimalDigit
 */


/**
 * 2.3
* DecimalDigit::one of
*     0 1 2 3 4 5 6 7 8 9
*/

/**
 * 2.4
 * NonZeroDigit::one of
 *    1 2 3 4 5 6 7 8 9
 */

  /**
   * 2.5
  * ExponentPart::
  *   ExponentIndicator SignedInteger
  */

/**
 * 2.6
 * ExponentIndicator::one of
 *    e E
 */

// 符合 e 的字面量
/^[0-9]*[eE]?[0-9]*/g;


 /**
  * SignedInteger::
  *     DecimalDigits
  *     + DecimalDigits
  *     - DecimalDigits
  */

// 符合 +- 号的字面量
 /^([+\-]?[0-9])?(.[0-9]*)?/g;


/**
 * 3. 二进制
 * BinaryIntegerLiteral::
 *    0b BinaryDigits
 *    0B BinaryDigits
 */

// 二进制字面量
 /[0-1]*/g;

/**
 * BinaryDigits::
 *    BinaryDigit
 *    BinaryDigits BinaryDigit
 */


/**
 * BinaryDigit::one of
 *    0 1
 */


/**
 *  4. 八进制
 *  OctalIntegerLiteral::
 *  0o OctalDigits
 *  0O OctalDigits 
 */

// 符合八进制的字面量
/0[oO][0-7]+/g;

/**
 * 4.1
 * OctalDigits::
 *    OctalDigit
 *    OctalDigits OctalDigit
 */
  

/**
 * 4.2
 * OctalDigit::one of
 *    0 1 2 3 4 5 6 7
 */


/**
 * 5. 十六进制
 * HexIntegerLiteral::
 *    0x HexDigits
 *    0X HexDigits
 */

// 符合十六进制的字面量
/0[xX][0-9a-fA-F]+/g;

/**
 * HexDigits::
 *    HexDigit
 *    HexDigits HexDigit
 */

/**
 * HexDigit::one of
 *    0 1 2 3 4 5 6 7 8 9 a b c d e f A B C D E F
 */