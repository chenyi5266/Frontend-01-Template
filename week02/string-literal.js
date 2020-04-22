/**
 * StringLiteral
 *    DoubleStringCharacters(opt)
 *    SingleStringCharacters(opt)
 */


 /**
  * DoubleStringCharacters::
  *     DoubleStringCharacter DoubleStringCharacters(opt)
  */

/**
 * SingleStringCharacters::
 *    SingleStringCharacter SingleStringCharacters(opt)
 */


/**
 * DoubleStringCharacter::
 *    SourceCharacter but not one of " or \ or LineTerminator
 *    <LS>
 *    <PS>
 *    \ EscapeSequence
 *    LineContinuation
 */

//  以双引号开头，以双引号结尾，中间不能出现双引号及\的正则
/^["]{1}[\s\S]*[^"\\]["]$/g;

 /**
 * SingleStringCharacter::
 *    SourceCharacter but not one of ' or \ or LineTerminator
 *    <LS>
 *    <PS>
 *    \ EscapeSequence
 *    LineContinuation
 */

//  以单引号开头，以单引号结尾，中间不能出现单引号及\的正则
/^[']{1}[\s\S]*[^'\\][']$/g;


/**
 * LineContinuation::
 *    \ LineTerminatorSequence
 */


/**
 * EscapeSequence::
 *    CharacterEscapeSequence
 *    0 [lookahead ∉ DecimalDigit]
 *    HexEscapeSequence 
 *    UnicodeEscapeSequence
 */


/**
 * CharacterEscapeSequence :: 
 *    SingleEscapeCharacter
 *    NonEscapeCharacter
 */

/**
 * SingleEscapeCharacter :: one of
 *    ' " \ b f n r t v
 */

/**
 * NonEscapeCharacter :: 
 *    SourceCharacter but not one of EscapeCharacter or LineTerminator
 */

/**
 * EscapeCharacter ::
 *    SingleEscapeCharacte
 *    DecimalDigit
 *    x
 *    u
 */


/**
 * HexEscapeSequence ::
 *    x HexDigit HexDigit
 */


/**
 * UnicodeEscapeSequence ::
 *    u Hex4Digits
 *    u{ CodePoint }
 */



/**
 * Hex4Digits ::
 *     HexDigit HexDigit HexDigit HexDigit
 */