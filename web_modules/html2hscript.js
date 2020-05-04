import { g as getCjsExportFromNamespace, c as createCommonjsModule, u as unwrapExports, a as commonjsGlobal } from './common/_commonjsHelpers-7dcf7119.js';
import events from 'events';
import buffer from 'buffer';
import punycode from 'punycode';

var decode = {
  "0": 65533,
  "128": 8364,
  "130": 8218,
  "131": 402,
  "132": 8222,
  "133": 8230,
  "134": 8224,
  "135": 8225,
  "136": 710,
  "137": 8240,
  "138": 352,
  "139": 8249,
  "140": 338,
  "142": 381,
  "145": 8216,
  "146": 8217,
  "147": 8220,
  "148": 8221,
  "149": 8226,
  "150": 8211,
  "151": 8212,
  "152": 732,
  "153": 8482,
  "154": 353,
  "155": 8250,
  "156": 339,
  "158": 382,
  "159": 376
};

var decode$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': decode
});

var decodeMap = getCjsExportFromNamespace(decode$1);

var decode_codepoint = decodeCodePoint;

// modified version of https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
function decodeCodePoint(codePoint) {
    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
        return "\uFFFD";
    }

    if (codePoint in decodeMap) {
        codePoint = decodeMap[codePoint];
    }

    var output = "";

    if (codePoint > 0xffff) {
        codePoint -= 0x10000;
        output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
        codePoint = 0xdc00 | (codePoint & 0x3ff);
    }

    output += String.fromCharCode(codePoint);
    return output;
}

const Aacute = "Á";
const aacute = "á";
const Abreve = "Ă";
const abreve = "ă";
const ac = "∾";
const acd = "∿";
const acE = "∾̳";
const Acirc = "Â";
const acirc = "â";
const acute = "´";
const Acy = "А";
const acy = "а";
const AElig = "Æ";
const aelig = "æ";
const af = "⁡";
const Afr = "𝔄";
const afr = "𝔞";
const Agrave = "À";
const agrave = "à";
const alefsym = "ℵ";
const aleph = "ℵ";
const Alpha = "Α";
const alpha = "α";
const Amacr = "Ā";
const amacr = "ā";
const amalg = "⨿";
const amp = "&";
const AMP = "&";
const andand = "⩕";
const And = "⩓";
const and = "∧";
const andd = "⩜";
const andslope = "⩘";
const andv = "⩚";
const ang = "∠";
const ange = "⦤";
const angle = "∠";
const angmsdaa = "⦨";
const angmsdab = "⦩";
const angmsdac = "⦪";
const angmsdad = "⦫";
const angmsdae = "⦬";
const angmsdaf = "⦭";
const angmsdag = "⦮";
const angmsdah = "⦯";
const angmsd = "∡";
const angrt = "∟";
const angrtvb = "⊾";
const angrtvbd = "⦝";
const angsph = "∢";
const angst = "Å";
const angzarr = "⍼";
const Aogon = "Ą";
const aogon = "ą";
const Aopf = "𝔸";
const aopf = "𝕒";
const apacir = "⩯";
const ap = "≈";
const apE = "⩰";
const ape = "≊";
const apid = "≋";
const apos = "'";
const ApplyFunction = "⁡";
const approx = "≈";
const approxeq = "≊";
const Aring = "Å";
const aring = "å";
const Ascr = "𝒜";
const ascr = "𝒶";
const Assign = "≔";
const ast = "*";
const asymp = "≈";
const asympeq = "≍";
const Atilde = "Ã";
const atilde = "ã";
const Auml = "Ä";
const auml = "ä";
const awconint = "∳";
const awint = "⨑";
const backcong = "≌";
const backepsilon = "϶";
const backprime = "‵";
const backsim = "∽";
const backsimeq = "⋍";
const Backslash = "∖";
const Barv = "⫧";
const barvee = "⊽";
const barwed = "⌅";
const Barwed = "⌆";
const barwedge = "⌅";
const bbrk = "⎵";
const bbrktbrk = "⎶";
const bcong = "≌";
const Bcy = "Б";
const bcy = "б";
const bdquo = "„";
const becaus = "∵";
const because = "∵";
const Because = "∵";
const bemptyv = "⦰";
const bepsi = "϶";
const bernou = "ℬ";
const Bernoullis = "ℬ";
const Beta = "Β";
const beta = "β";
const beth = "ℶ";
const between = "≬";
const Bfr = "𝔅";
const bfr = "𝔟";
const bigcap = "⋂";
const bigcirc = "◯";
const bigcup = "⋃";
const bigodot = "⨀";
const bigoplus = "⨁";
const bigotimes = "⨂";
const bigsqcup = "⨆";
const bigstar = "★";
const bigtriangledown = "▽";
const bigtriangleup = "△";
const biguplus = "⨄";
const bigvee = "⋁";
const bigwedge = "⋀";
const bkarow = "⤍";
const blacklozenge = "⧫";
const blacksquare = "▪";
const blacktriangle = "▴";
const blacktriangledown = "▾";
const blacktriangleleft = "◂";
const blacktriangleright = "▸";
const blank = "␣";
const blk12 = "▒";
const blk14 = "░";
const blk34 = "▓";
const block = "█";
const bne = "=⃥";
const bnequiv = "≡⃥";
const bNot = "⫭";
const bnot = "⌐";
const Bopf = "𝔹";
const bopf = "𝕓";
const bot = "⊥";
const bottom = "⊥";
const bowtie = "⋈";
const boxbox = "⧉";
const boxdl = "┐";
const boxdL = "╕";
const boxDl = "╖";
const boxDL = "╗";
const boxdr = "┌";
const boxdR = "╒";
const boxDr = "╓";
const boxDR = "╔";
const boxh = "─";
const boxH = "═";
const boxhd = "┬";
const boxHd = "╤";
const boxhD = "╥";
const boxHD = "╦";
const boxhu = "┴";
const boxHu = "╧";
const boxhU = "╨";
const boxHU = "╩";
const boxminus = "⊟";
const boxplus = "⊞";
const boxtimes = "⊠";
const boxul = "┘";
const boxuL = "╛";
const boxUl = "╜";
const boxUL = "╝";
const boxur = "└";
const boxuR = "╘";
const boxUr = "╙";
const boxUR = "╚";
const boxv = "│";
const boxV = "║";
const boxvh = "┼";
const boxvH = "╪";
const boxVh = "╫";
const boxVH = "╬";
const boxvl = "┤";
const boxvL = "╡";
const boxVl = "╢";
const boxVL = "╣";
const boxvr = "├";
const boxvR = "╞";
const boxVr = "╟";
const boxVR = "╠";
const bprime = "‵";
const breve = "˘";
const Breve = "˘";
const brvbar = "¦";
const bscr = "𝒷";
const Bscr = "ℬ";
const bsemi = "⁏";
const bsim = "∽";
const bsime = "⋍";
const bsolb = "⧅";
const bsol = "\\";
const bsolhsub = "⟈";
const bull = "•";
const bullet = "•";
const bump = "≎";
const bumpE = "⪮";
const bumpe = "≏";
const Bumpeq = "≎";
const bumpeq = "≏";
const Cacute = "Ć";
const cacute = "ć";
const capand = "⩄";
const capbrcup = "⩉";
const capcap = "⩋";
const cap = "∩";
const Cap = "⋒";
const capcup = "⩇";
const capdot = "⩀";
const CapitalDifferentialD = "ⅅ";
const caps = "∩︀";
const caret = "⁁";
const caron = "ˇ";
const Cayleys = "ℭ";
const ccaps = "⩍";
const Ccaron = "Č";
const ccaron = "č";
const Ccedil = "Ç";
const ccedil = "ç";
const Ccirc = "Ĉ";
const ccirc = "ĉ";
const Cconint = "∰";
const ccups = "⩌";
const ccupssm = "⩐";
const Cdot = "Ċ";
const cdot = "ċ";
const cedil = "¸";
const Cedilla = "¸";
const cemptyv = "⦲";
const cent = "¢";
const centerdot = "·";
const CenterDot = "·";
const cfr = "𝔠";
const Cfr = "ℭ";
const CHcy = "Ч";
const chcy = "ч";
const check = "✓";
const checkmark = "✓";
const Chi = "Χ";
const chi = "χ";
const circ = "ˆ";
const circeq = "≗";
const circlearrowleft = "↺";
const circlearrowright = "↻";
const circledast = "⊛";
const circledcirc = "⊚";
const circleddash = "⊝";
const CircleDot = "⊙";
const circledR = "®";
const circledS = "Ⓢ";
const CircleMinus = "⊖";
const CirclePlus = "⊕";
const CircleTimes = "⊗";
const cir = "○";
const cirE = "⧃";
const cire = "≗";
const cirfnint = "⨐";
const cirmid = "⫯";
const cirscir = "⧂";
const ClockwiseContourIntegral = "∲";
const CloseCurlyDoubleQuote = "”";
const CloseCurlyQuote = "’";
const clubs = "♣";
const clubsuit = "♣";
const colon = ":";
const Colon = "∷";
const Colone = "⩴";
const colone = "≔";
const coloneq = "≔";
const comma = ",";
const commat = "@";
const comp = "∁";
const compfn = "∘";
const complement = "∁";
const complexes = "ℂ";
const cong = "≅";
const congdot = "⩭";
const Congruent = "≡";
const conint = "∮";
const Conint = "∯";
const ContourIntegral = "∮";
const copf = "𝕔";
const Copf = "ℂ";
const coprod = "∐";
const Coproduct = "∐";
const copy = "©";
const COPY = "©";
const copysr = "℗";
const CounterClockwiseContourIntegral = "∳";
const crarr = "↵";
const cross = "✗";
const Cross = "⨯";
const Cscr = "𝒞";
const cscr = "𝒸";
const csub = "⫏";
const csube = "⫑";
const csup = "⫐";
const csupe = "⫒";
const ctdot = "⋯";
const cudarrl = "⤸";
const cudarrr = "⤵";
const cuepr = "⋞";
const cuesc = "⋟";
const cularr = "↶";
const cularrp = "⤽";
const cupbrcap = "⩈";
const cupcap = "⩆";
const CupCap = "≍";
const cup = "∪";
const Cup = "⋓";
const cupcup = "⩊";
const cupdot = "⊍";
const cupor = "⩅";
const cups = "∪︀";
const curarr = "↷";
const curarrm = "⤼";
const curlyeqprec = "⋞";
const curlyeqsucc = "⋟";
const curlyvee = "⋎";
const curlywedge = "⋏";
const curren = "¤";
const curvearrowleft = "↶";
const curvearrowright = "↷";
const cuvee = "⋎";
const cuwed = "⋏";
const cwconint = "∲";
const cwint = "∱";
const cylcty = "⌭";
const dagger = "†";
const Dagger = "‡";
const daleth = "ℸ";
const darr = "↓";
const Darr = "↡";
const dArr = "⇓";
const dash = "‐";
const Dashv = "⫤";
const dashv = "⊣";
const dbkarow = "⤏";
const dblac = "˝";
const Dcaron = "Ď";
const dcaron = "ď";
const Dcy = "Д";
const dcy = "д";
const ddagger = "‡";
const ddarr = "⇊";
const DD = "ⅅ";
const dd = "ⅆ";
const DDotrahd = "⤑";
const ddotseq = "⩷";
const deg = "°";
const Del = "∇";
const Delta = "Δ";
const delta = "δ";
const demptyv = "⦱";
const dfisht = "⥿";
const Dfr = "𝔇";
const dfr = "𝔡";
const dHar = "⥥";
const dharl = "⇃";
const dharr = "⇂";
const DiacriticalAcute = "´";
const DiacriticalDot = "˙";
const DiacriticalDoubleAcute = "˝";
const DiacriticalGrave = "`";
const DiacriticalTilde = "˜";
const diam = "⋄";
const diamond = "⋄";
const Diamond = "⋄";
const diamondsuit = "♦";
const diams = "♦";
const die = "¨";
const DifferentialD = "ⅆ";
const digamma = "ϝ";
const disin = "⋲";
const div = "÷";
const divide = "÷";
const divideontimes = "⋇";
const divonx = "⋇";
const DJcy = "Ђ";
const djcy = "ђ";
const dlcorn = "⌞";
const dlcrop = "⌍";
const dollar = "$";
const Dopf = "𝔻";
const dopf = "𝕕";
const Dot = "¨";
const dot = "˙";
const DotDot = "⃜";
const doteq = "≐";
const doteqdot = "≑";
const DotEqual = "≐";
const dotminus = "∸";
const dotplus = "∔";
const dotsquare = "⊡";
const doublebarwedge = "⌆";
const DoubleContourIntegral = "∯";
const DoubleDot = "¨";
const DoubleDownArrow = "⇓";
const DoubleLeftArrow = "⇐";
const DoubleLeftRightArrow = "⇔";
const DoubleLeftTee = "⫤";
const DoubleLongLeftArrow = "⟸";
const DoubleLongLeftRightArrow = "⟺";
const DoubleLongRightArrow = "⟹";
const DoubleRightArrow = "⇒";
const DoubleRightTee = "⊨";
const DoubleUpArrow = "⇑";
const DoubleUpDownArrow = "⇕";
const DoubleVerticalBar = "∥";
const DownArrowBar = "⤓";
const downarrow = "↓";
const DownArrow = "↓";
const Downarrow = "⇓";
const DownArrowUpArrow = "⇵";
const DownBreve = "̑";
const downdownarrows = "⇊";
const downharpoonleft = "⇃";
const downharpoonright = "⇂";
const DownLeftRightVector = "⥐";
const DownLeftTeeVector = "⥞";
const DownLeftVectorBar = "⥖";
const DownLeftVector = "↽";
const DownRightTeeVector = "⥟";
const DownRightVectorBar = "⥗";
const DownRightVector = "⇁";
const DownTeeArrow = "↧";
const DownTee = "⊤";
const drbkarow = "⤐";
const drcorn = "⌟";
const drcrop = "⌌";
const Dscr = "𝒟";
const dscr = "𝒹";
const DScy = "Ѕ";
const dscy = "ѕ";
const dsol = "⧶";
const Dstrok = "Đ";
const dstrok = "đ";
const dtdot = "⋱";
const dtri = "▿";
const dtrif = "▾";
const duarr = "⇵";
const duhar = "⥯";
const dwangle = "⦦";
const DZcy = "Џ";
const dzcy = "џ";
const dzigrarr = "⟿";
const Eacute = "É";
const eacute = "é";
const easter = "⩮";
const Ecaron = "Ě";
const ecaron = "ě";
const Ecirc = "Ê";
const ecirc = "ê";
const ecir = "≖";
const ecolon = "≕";
const Ecy = "Э";
const ecy = "э";
const eDDot = "⩷";
const Edot = "Ė";
const edot = "ė";
const eDot = "≑";
const ee = "ⅇ";
const efDot = "≒";
const Efr = "𝔈";
const efr = "𝔢";
const eg = "⪚";
const Egrave = "È";
const egrave = "è";
const egs = "⪖";
const egsdot = "⪘";
const el = "⪙";
const Element = "∈";
const elinters = "⏧";
const ell = "ℓ";
const els = "⪕";
const elsdot = "⪗";
const Emacr = "Ē";
const emacr = "ē";
const empty = "∅";
const emptyset = "∅";
const EmptySmallSquare = "◻";
const emptyv = "∅";
const EmptyVerySmallSquare = "▫";
const emsp13 = " ";
const emsp14 = " ";
const emsp = " ";
const ENG = "Ŋ";
const eng = "ŋ";
const ensp = " ";
const Eogon = "Ę";
const eogon = "ę";
const Eopf = "𝔼";
const eopf = "𝕖";
const epar = "⋕";
const eparsl = "⧣";
const eplus = "⩱";
const epsi = "ε";
const Epsilon = "Ε";
const epsilon = "ε";
const epsiv = "ϵ";
const eqcirc = "≖";
const eqcolon = "≕";
const eqsim = "≂";
const eqslantgtr = "⪖";
const eqslantless = "⪕";
const Equal = "⩵";
const equals = "=";
const EqualTilde = "≂";
const equest = "≟";
const Equilibrium = "⇌";
const equiv = "≡";
const equivDD = "⩸";
const eqvparsl = "⧥";
const erarr = "⥱";
const erDot = "≓";
const escr = "ℯ";
const Escr = "ℰ";
const esdot = "≐";
const Esim = "⩳";
const esim = "≂";
const Eta = "Η";
const eta = "η";
const ETH = "Ð";
const eth = "ð";
const Euml = "Ë";
const euml = "ë";
const euro = "€";
const excl = "!";
const exist = "∃";
const Exists = "∃";
const expectation = "ℰ";
const exponentiale = "ⅇ";
const ExponentialE = "ⅇ";
const fallingdotseq = "≒";
const Fcy = "Ф";
const fcy = "ф";
const female = "♀";
const ffilig = "ﬃ";
const fflig = "ﬀ";
const ffllig = "ﬄ";
const Ffr = "𝔉";
const ffr = "𝔣";
const filig = "ﬁ";
const FilledSmallSquare = "◼";
const FilledVerySmallSquare = "▪";
const fjlig = "fj";
const flat = "♭";
const fllig = "ﬂ";
const fltns = "▱";
const fnof = "ƒ";
const Fopf = "𝔽";
const fopf = "𝕗";
const forall = "∀";
const ForAll = "∀";
const fork = "⋔";
const forkv = "⫙";
const Fouriertrf = "ℱ";
const fpartint = "⨍";
const frac12 = "½";
const frac13 = "⅓";
const frac14 = "¼";
const frac15 = "⅕";
const frac16 = "⅙";
const frac18 = "⅛";
const frac23 = "⅔";
const frac25 = "⅖";
const frac34 = "¾";
const frac35 = "⅗";
const frac38 = "⅜";
const frac45 = "⅘";
const frac56 = "⅚";
const frac58 = "⅝";
const frac78 = "⅞";
const frasl = "⁄";
const frown = "⌢";
const fscr = "𝒻";
const Fscr = "ℱ";
const gacute = "ǵ";
const Gamma = "Γ";
const gamma = "γ";
const Gammad = "Ϝ";
const gammad = "ϝ";
const gap = "⪆";
const Gbreve = "Ğ";
const gbreve = "ğ";
const Gcedil = "Ģ";
const Gcirc = "Ĝ";
const gcirc = "ĝ";
const Gcy = "Г";
const gcy = "г";
const Gdot = "Ġ";
const gdot = "ġ";
const ge = "≥";
const gE = "≧";
const gEl = "⪌";
const gel = "⋛";
const geq = "≥";
const geqq = "≧";
const geqslant = "⩾";
const gescc = "⪩";
const ges = "⩾";
const gesdot = "⪀";
const gesdoto = "⪂";
const gesdotol = "⪄";
const gesl = "⋛︀";
const gesles = "⪔";
const Gfr = "𝔊";
const gfr = "𝔤";
const gg = "≫";
const Gg = "⋙";
const ggg = "⋙";
const gimel = "ℷ";
const GJcy = "Ѓ";
const gjcy = "ѓ";
const gla = "⪥";
const gl = "≷";
const glE = "⪒";
const glj = "⪤";
const gnap = "⪊";
const gnapprox = "⪊";
const gne = "⪈";
const gnE = "≩";
const gneq = "⪈";
const gneqq = "≩";
const gnsim = "⋧";
const Gopf = "𝔾";
const gopf = "𝕘";
const grave = "`";
const GreaterEqual = "≥";
const GreaterEqualLess = "⋛";
const GreaterFullEqual = "≧";
const GreaterGreater = "⪢";
const GreaterLess = "≷";
const GreaterSlantEqual = "⩾";
const GreaterTilde = "≳";
const Gscr = "𝒢";
const gscr = "ℊ";
const gsim = "≳";
const gsime = "⪎";
const gsiml = "⪐";
const gtcc = "⪧";
const gtcir = "⩺";
const gt = ">";
const GT = ">";
const Gt = "≫";
const gtdot = "⋗";
const gtlPar = "⦕";
const gtquest = "⩼";
const gtrapprox = "⪆";
const gtrarr = "⥸";
const gtrdot = "⋗";
const gtreqless = "⋛";
const gtreqqless = "⪌";
const gtrless = "≷";
const gtrsim = "≳";
const gvertneqq = "≩︀";
const gvnE = "≩︀";
const Hacek = "ˇ";
const hairsp = " ";
const half = "½";
const hamilt = "ℋ";
const HARDcy = "Ъ";
const hardcy = "ъ";
const harrcir = "⥈";
const harr = "↔";
const hArr = "⇔";
const harrw = "↭";
const Hat = "^";
const hbar = "ℏ";
const Hcirc = "Ĥ";
const hcirc = "ĥ";
const hearts = "♥";
const heartsuit = "♥";
const hellip = "…";
const hercon = "⊹";
const hfr = "𝔥";
const Hfr = "ℌ";
const HilbertSpace = "ℋ";
const hksearow = "⤥";
const hkswarow = "⤦";
const hoarr = "⇿";
const homtht = "∻";
const hookleftarrow = "↩";
const hookrightarrow = "↪";
const hopf = "𝕙";
const Hopf = "ℍ";
const horbar = "―";
const HorizontalLine = "─";
const hscr = "𝒽";
const Hscr = "ℋ";
const hslash = "ℏ";
const Hstrok = "Ħ";
const hstrok = "ħ";
const HumpDownHump = "≎";
const HumpEqual = "≏";
const hybull = "⁃";
const hyphen = "‐";
const Iacute = "Í";
const iacute = "í";
const ic = "⁣";
const Icirc = "Î";
const icirc = "î";
const Icy = "И";
const icy = "и";
const Idot = "İ";
const IEcy = "Е";
const iecy = "е";
const iexcl = "¡";
const iff = "⇔";
const ifr = "𝔦";
const Ifr = "ℑ";
const Igrave = "Ì";
const igrave = "ì";
const ii = "ⅈ";
const iiiint = "⨌";
const iiint = "∭";
const iinfin = "⧜";
const iiota = "℩";
const IJlig = "Ĳ";
const ijlig = "ĳ";
const Imacr = "Ī";
const imacr = "ī";
const image = "ℑ";
const ImaginaryI = "ⅈ";
const imagline = "ℐ";
const imagpart = "ℑ";
const imath = "ı";
const Im = "ℑ";
const imof = "⊷";
const imped = "Ƶ";
const Implies = "⇒";
const incare = "℅";
const infin = "∞";
const infintie = "⧝";
const inodot = "ı";
const intcal = "⊺";
const int = "∫";
const Int = "∬";
const integers = "ℤ";
const Integral = "∫";
const intercal = "⊺";
const Intersection = "⋂";
const intlarhk = "⨗";
const intprod = "⨼";
const InvisibleComma = "⁣";
const InvisibleTimes = "⁢";
const IOcy = "Ё";
const iocy = "ё";
const Iogon = "Į";
const iogon = "į";
const Iopf = "𝕀";
const iopf = "𝕚";
const Iota = "Ι";
const iota = "ι";
const iprod = "⨼";
const iquest = "¿";
const iscr = "𝒾";
const Iscr = "ℐ";
const isin = "∈";
const isindot = "⋵";
const isinE = "⋹";
const isins = "⋴";
const isinsv = "⋳";
const isinv = "∈";
const it = "⁢";
const Itilde = "Ĩ";
const itilde = "ĩ";
const Iukcy = "І";
const iukcy = "і";
const Iuml = "Ï";
const iuml = "ï";
const Jcirc = "Ĵ";
const jcirc = "ĵ";
const Jcy = "Й";
const jcy = "й";
const Jfr = "𝔍";
const jfr = "𝔧";
const jmath = "ȷ";
const Jopf = "𝕁";
const jopf = "𝕛";
const Jscr = "𝒥";
const jscr = "𝒿";
const Jsercy = "Ј";
const jsercy = "ј";
const Jukcy = "Є";
const jukcy = "є";
const Kappa = "Κ";
const kappa = "κ";
const kappav = "ϰ";
const Kcedil = "Ķ";
const kcedil = "ķ";
const Kcy = "К";
const kcy = "к";
const Kfr = "𝔎";
const kfr = "𝔨";
const kgreen = "ĸ";
const KHcy = "Х";
const khcy = "х";
const KJcy = "Ќ";
const kjcy = "ќ";
const Kopf = "𝕂";
const kopf = "𝕜";
const Kscr = "𝒦";
const kscr = "𝓀";
const lAarr = "⇚";
const Lacute = "Ĺ";
const lacute = "ĺ";
const laemptyv = "⦴";
const lagran = "ℒ";
const Lambda = "Λ";
const lambda = "λ";
const lang = "⟨";
const Lang = "⟪";
const langd = "⦑";
const langle = "⟨";
const lap = "⪅";
const Laplacetrf = "ℒ";
const laquo = "«";
const larrb = "⇤";
const larrbfs = "⤟";
const larr = "←";
const Larr = "↞";
const lArr = "⇐";
const larrfs = "⤝";
const larrhk = "↩";
const larrlp = "↫";
const larrpl = "⤹";
const larrsim = "⥳";
const larrtl = "↢";
const latail = "⤙";
const lAtail = "⤛";
const lat = "⪫";
const late = "⪭";
const lates = "⪭︀";
const lbarr = "⤌";
const lBarr = "⤎";
const lbbrk = "❲";
const lbrace = "{";
const lbrack = "[";
const lbrke = "⦋";
const lbrksld = "⦏";
const lbrkslu = "⦍";
const Lcaron = "Ľ";
const lcaron = "ľ";
const Lcedil = "Ļ";
const lcedil = "ļ";
const lceil = "⌈";
const lcub = "{";
const Lcy = "Л";
const lcy = "л";
const ldca = "⤶";
const ldquo = "“";
const ldquor = "„";
const ldrdhar = "⥧";
const ldrushar = "⥋";
const ldsh = "↲";
const le = "≤";
const lE = "≦";
const LeftAngleBracket = "⟨";
const LeftArrowBar = "⇤";
const leftarrow = "←";
const LeftArrow = "←";
const Leftarrow = "⇐";
const LeftArrowRightArrow = "⇆";
const leftarrowtail = "↢";
const LeftCeiling = "⌈";
const LeftDoubleBracket = "⟦";
const LeftDownTeeVector = "⥡";
const LeftDownVectorBar = "⥙";
const LeftDownVector = "⇃";
const LeftFloor = "⌊";
const leftharpoondown = "↽";
const leftharpoonup = "↼";
const leftleftarrows = "⇇";
const leftrightarrow = "↔";
const LeftRightArrow = "↔";
const Leftrightarrow = "⇔";
const leftrightarrows = "⇆";
const leftrightharpoons = "⇋";
const leftrightsquigarrow = "↭";
const LeftRightVector = "⥎";
const LeftTeeArrow = "↤";
const LeftTee = "⊣";
const LeftTeeVector = "⥚";
const leftthreetimes = "⋋";
const LeftTriangleBar = "⧏";
const LeftTriangle = "⊲";
const LeftTriangleEqual = "⊴";
const LeftUpDownVector = "⥑";
const LeftUpTeeVector = "⥠";
const LeftUpVectorBar = "⥘";
const LeftUpVector = "↿";
const LeftVectorBar = "⥒";
const LeftVector = "↼";
const lEg = "⪋";
const leg = "⋚";
const leq = "≤";
const leqq = "≦";
const leqslant = "⩽";
const lescc = "⪨";
const les = "⩽";
const lesdot = "⩿";
const lesdoto = "⪁";
const lesdotor = "⪃";
const lesg = "⋚︀";
const lesges = "⪓";
const lessapprox = "⪅";
const lessdot = "⋖";
const lesseqgtr = "⋚";
const lesseqqgtr = "⪋";
const LessEqualGreater = "⋚";
const LessFullEqual = "≦";
const LessGreater = "≶";
const lessgtr = "≶";
const LessLess = "⪡";
const lesssim = "≲";
const LessSlantEqual = "⩽";
const LessTilde = "≲";
const lfisht = "⥼";
const lfloor = "⌊";
const Lfr = "𝔏";
const lfr = "𝔩";
const lg = "≶";
const lgE = "⪑";
const lHar = "⥢";
const lhard = "↽";
const lharu = "↼";
const lharul = "⥪";
const lhblk = "▄";
const LJcy = "Љ";
const ljcy = "љ";
const llarr = "⇇";
const ll = "≪";
const Ll = "⋘";
const llcorner = "⌞";
const Lleftarrow = "⇚";
const llhard = "⥫";
const lltri = "◺";
const Lmidot = "Ŀ";
const lmidot = "ŀ";
const lmoustache = "⎰";
const lmoust = "⎰";
const lnap = "⪉";
const lnapprox = "⪉";
const lne = "⪇";
const lnE = "≨";
const lneq = "⪇";
const lneqq = "≨";
const lnsim = "⋦";
const loang = "⟬";
const loarr = "⇽";
const lobrk = "⟦";
const longleftarrow = "⟵";
const LongLeftArrow = "⟵";
const Longleftarrow = "⟸";
const longleftrightarrow = "⟷";
const LongLeftRightArrow = "⟷";
const Longleftrightarrow = "⟺";
const longmapsto = "⟼";
const longrightarrow = "⟶";
const LongRightArrow = "⟶";
const Longrightarrow = "⟹";
const looparrowleft = "↫";
const looparrowright = "↬";
const lopar = "⦅";
const Lopf = "𝕃";
const lopf = "𝕝";
const loplus = "⨭";
const lotimes = "⨴";
const lowast = "∗";
const lowbar = "_";
const LowerLeftArrow = "↙";
const LowerRightArrow = "↘";
const loz = "◊";
const lozenge = "◊";
const lozf = "⧫";
const lpar = "(";
const lparlt = "⦓";
const lrarr = "⇆";
const lrcorner = "⌟";
const lrhar = "⇋";
const lrhard = "⥭";
const lrm = "‎";
const lrtri = "⊿";
const lsaquo = "‹";
const lscr = "𝓁";
const Lscr = "ℒ";
const lsh = "↰";
const Lsh = "↰";
const lsim = "≲";
const lsime = "⪍";
const lsimg = "⪏";
const lsqb = "[";
const lsquo = "‘";
const lsquor = "‚";
const Lstrok = "Ł";
const lstrok = "ł";
const ltcc = "⪦";
const ltcir = "⩹";
const lt = "<";
const LT = "<";
const Lt = "≪";
const ltdot = "⋖";
const lthree = "⋋";
const ltimes = "⋉";
const ltlarr = "⥶";
const ltquest = "⩻";
const ltri = "◃";
const ltrie = "⊴";
const ltrif = "◂";
const ltrPar = "⦖";
const lurdshar = "⥊";
const luruhar = "⥦";
const lvertneqq = "≨︀";
const lvnE = "≨︀";
const macr = "¯";
const male = "♂";
const malt = "✠";
const maltese = "✠";
const map = "↦";
const mapsto = "↦";
const mapstodown = "↧";
const mapstoleft = "↤";
const mapstoup = "↥";
const marker = "▮";
const mcomma = "⨩";
const Mcy = "М";
const mcy = "м";
const mdash = "—";
const mDDot = "∺";
const measuredangle = "∡";
const MediumSpace = " ";
const Mellintrf = "ℳ";
const Mfr = "𝔐";
const mfr = "𝔪";
const mho = "℧";
const micro = "µ";
const midast = "*";
const midcir = "⫰";
const mid = "∣";
const middot = "·";
const minusb = "⊟";
const minus = "−";
const minusd = "∸";
const minusdu = "⨪";
const MinusPlus = "∓";
const mlcp = "⫛";
const mldr = "…";
const mnplus = "∓";
const models = "⊧";
const Mopf = "𝕄";
const mopf = "𝕞";
const mp = "∓";
const mscr = "𝓂";
const Mscr = "ℳ";
const mstpos = "∾";
const Mu = "Μ";
const mu = "μ";
const multimap = "⊸";
const mumap = "⊸";
const nabla = "∇";
const Nacute = "Ń";
const nacute = "ń";
const nang = "∠⃒";
const nap = "≉";
const napE = "⩰̸";
const napid = "≋̸";
const napos = "ŉ";
const napprox = "≉";
const natural = "♮";
const naturals = "ℕ";
const natur = "♮";
const nbsp = " ";
const nbump = "≎̸";
const nbumpe = "≏̸";
const ncap = "⩃";
const Ncaron = "Ň";
const ncaron = "ň";
const Ncedil = "Ņ";
const ncedil = "ņ";
const ncong = "≇";
const ncongdot = "⩭̸";
const ncup = "⩂";
const Ncy = "Н";
const ncy = "н";
const ndash = "–";
const nearhk = "⤤";
const nearr = "↗";
const neArr = "⇗";
const nearrow = "↗";
const ne = "≠";
const nedot = "≐̸";
const NegativeMediumSpace = "​";
const NegativeThickSpace = "​";
const NegativeThinSpace = "​";
const NegativeVeryThinSpace = "​";
const nequiv = "≢";
const nesear = "⤨";
const nesim = "≂̸";
const NestedGreaterGreater = "≫";
const NestedLessLess = "≪";
const NewLine = "\n";
const nexist = "∄";
const nexists = "∄";
const Nfr = "𝔑";
const nfr = "𝔫";
const ngE = "≧̸";
const nge = "≱";
const ngeq = "≱";
const ngeqq = "≧̸";
const ngeqslant = "⩾̸";
const nges = "⩾̸";
const nGg = "⋙̸";
const ngsim = "≵";
const nGt = "≫⃒";
const ngt = "≯";
const ngtr = "≯";
const nGtv = "≫̸";
const nharr = "↮";
const nhArr = "⇎";
const nhpar = "⫲";
const ni = "∋";
const nis = "⋼";
const nisd = "⋺";
const niv = "∋";
const NJcy = "Њ";
const njcy = "њ";
const nlarr = "↚";
const nlArr = "⇍";
const nldr = "‥";
const nlE = "≦̸";
const nle = "≰";
const nleftarrow = "↚";
const nLeftarrow = "⇍";
const nleftrightarrow = "↮";
const nLeftrightarrow = "⇎";
const nleq = "≰";
const nleqq = "≦̸";
const nleqslant = "⩽̸";
const nles = "⩽̸";
const nless = "≮";
const nLl = "⋘̸";
const nlsim = "≴";
const nLt = "≪⃒";
const nlt = "≮";
const nltri = "⋪";
const nltrie = "⋬";
const nLtv = "≪̸";
const nmid = "∤";
const NoBreak = "⁠";
const NonBreakingSpace = " ";
const nopf = "𝕟";
const Nopf = "ℕ";
const Not = "⫬";
const not = "¬";
const NotCongruent = "≢";
const NotCupCap = "≭";
const NotDoubleVerticalBar = "∦";
const NotElement = "∉";
const NotEqual = "≠";
const NotEqualTilde = "≂̸";
const NotExists = "∄";
const NotGreater = "≯";
const NotGreaterEqual = "≱";
const NotGreaterFullEqual = "≧̸";
const NotGreaterGreater = "≫̸";
const NotGreaterLess = "≹";
const NotGreaterSlantEqual = "⩾̸";
const NotGreaterTilde = "≵";
const NotHumpDownHump = "≎̸";
const NotHumpEqual = "≏̸";
const notin = "∉";
const notindot = "⋵̸";
const notinE = "⋹̸";
const notinva = "∉";
const notinvb = "⋷";
const notinvc = "⋶";
const NotLeftTriangleBar = "⧏̸";
const NotLeftTriangle = "⋪";
const NotLeftTriangleEqual = "⋬";
const NotLess = "≮";
const NotLessEqual = "≰";
const NotLessGreater = "≸";
const NotLessLess = "≪̸";
const NotLessSlantEqual = "⩽̸";
const NotLessTilde = "≴";
const NotNestedGreaterGreater = "⪢̸";
const NotNestedLessLess = "⪡̸";
const notni = "∌";
const notniva = "∌";
const notnivb = "⋾";
const notnivc = "⋽";
const NotPrecedes = "⊀";
const NotPrecedesEqual = "⪯̸";
const NotPrecedesSlantEqual = "⋠";
const NotReverseElement = "∌";
const NotRightTriangleBar = "⧐̸";
const NotRightTriangle = "⋫";
const NotRightTriangleEqual = "⋭";
const NotSquareSubset = "⊏̸";
const NotSquareSubsetEqual = "⋢";
const NotSquareSuperset = "⊐̸";
const NotSquareSupersetEqual = "⋣";
const NotSubset = "⊂⃒";
const NotSubsetEqual = "⊈";
const NotSucceeds = "⊁";
const NotSucceedsEqual = "⪰̸";
const NotSucceedsSlantEqual = "⋡";
const NotSucceedsTilde = "≿̸";
const NotSuperset = "⊃⃒";
const NotSupersetEqual = "⊉";
const NotTilde = "≁";
const NotTildeEqual = "≄";
const NotTildeFullEqual = "≇";
const NotTildeTilde = "≉";
const NotVerticalBar = "∤";
const nparallel = "∦";
const npar = "∦";
const nparsl = "⫽⃥";
const npart = "∂̸";
const npolint = "⨔";
const npr = "⊀";
const nprcue = "⋠";
const nprec = "⊀";
const npreceq = "⪯̸";
const npre = "⪯̸";
const nrarrc = "⤳̸";
const nrarr = "↛";
const nrArr = "⇏";
const nrarrw = "↝̸";
const nrightarrow = "↛";
const nRightarrow = "⇏";
const nrtri = "⋫";
const nrtrie = "⋭";
const nsc = "⊁";
const nsccue = "⋡";
const nsce = "⪰̸";
const Nscr = "𝒩";
const nscr = "𝓃";
const nshortmid = "∤";
const nshortparallel = "∦";
const nsim = "≁";
const nsime = "≄";
const nsimeq = "≄";
const nsmid = "∤";
const nspar = "∦";
const nsqsube = "⋢";
const nsqsupe = "⋣";
const nsub = "⊄";
const nsubE = "⫅̸";
const nsube = "⊈";
const nsubset = "⊂⃒";
const nsubseteq = "⊈";
const nsubseteqq = "⫅̸";
const nsucc = "⊁";
const nsucceq = "⪰̸";
const nsup = "⊅";
const nsupE = "⫆̸";
const nsupe = "⊉";
const nsupset = "⊃⃒";
const nsupseteq = "⊉";
const nsupseteqq = "⫆̸";
const ntgl = "≹";
const Ntilde = "Ñ";
const ntilde = "ñ";
const ntlg = "≸";
const ntriangleleft = "⋪";
const ntrianglelefteq = "⋬";
const ntriangleright = "⋫";
const ntrianglerighteq = "⋭";
const Nu = "Ν";
const nu = "ν";
const num = "#";
const numero = "№";
const numsp = " ";
const nvap = "≍⃒";
const nvdash = "⊬";
const nvDash = "⊭";
const nVdash = "⊮";
const nVDash = "⊯";
const nvge = "≥⃒";
const nvgt = ">⃒";
const nvHarr = "⤄";
const nvinfin = "⧞";
const nvlArr = "⤂";
const nvle = "≤⃒";
const nvlt = "<⃒";
const nvltrie = "⊴⃒";
const nvrArr = "⤃";
const nvrtrie = "⊵⃒";
const nvsim = "∼⃒";
const nwarhk = "⤣";
const nwarr = "↖";
const nwArr = "⇖";
const nwarrow = "↖";
const nwnear = "⤧";
const Oacute = "Ó";
const oacute = "ó";
const oast = "⊛";
const Ocirc = "Ô";
const ocirc = "ô";
const ocir = "⊚";
const Ocy = "О";
const ocy = "о";
const odash = "⊝";
const Odblac = "Ő";
const odblac = "ő";
const odiv = "⨸";
const odot = "⊙";
const odsold = "⦼";
const OElig = "Œ";
const oelig = "œ";
const ofcir = "⦿";
const Ofr = "𝔒";
const ofr = "𝔬";
const ogon = "˛";
const Ograve = "Ò";
const ograve = "ò";
const ogt = "⧁";
const ohbar = "⦵";
const ohm = "Ω";
const oint = "∮";
const olarr = "↺";
const olcir = "⦾";
const olcross = "⦻";
const oline = "‾";
const olt = "⧀";
const Omacr = "Ō";
const omacr = "ō";
const Omega = "Ω";
const omega = "ω";
const Omicron = "Ο";
const omicron = "ο";
const omid = "⦶";
const ominus = "⊖";
const Oopf = "𝕆";
const oopf = "𝕠";
const opar = "⦷";
const OpenCurlyDoubleQuote = "“";
const OpenCurlyQuote = "‘";
const operp = "⦹";
const oplus = "⊕";
const orarr = "↻";
const Or = "⩔";
const or = "∨";
const ord = "⩝";
const order = "ℴ";
const orderof = "ℴ";
const ordf = "ª";
const ordm = "º";
const origof = "⊶";
const oror = "⩖";
const orslope = "⩗";
const orv = "⩛";
const oS = "Ⓢ";
const Oscr = "𝒪";
const oscr = "ℴ";
const Oslash = "Ø";
const oslash = "ø";
const osol = "⊘";
const Otilde = "Õ";
const otilde = "õ";
const otimesas = "⨶";
const Otimes = "⨷";
const otimes = "⊗";
const Ouml = "Ö";
const ouml = "ö";
const ovbar = "⌽";
const OverBar = "‾";
const OverBrace = "⏞";
const OverBracket = "⎴";
const OverParenthesis = "⏜";
const para = "¶";
const parallel = "∥";
const par = "∥";
const parsim = "⫳";
const parsl = "⫽";
const part = "∂";
const PartialD = "∂";
const Pcy = "П";
const pcy = "п";
const percnt = "%";
const period = ".";
const permil = "‰";
const perp = "⊥";
const pertenk = "‱";
const Pfr = "𝔓";
const pfr = "𝔭";
const Phi = "Φ";
const phi = "φ";
const phiv = "ϕ";
const phmmat = "ℳ";
const phone = "☎";
const Pi = "Π";
const pi = "π";
const pitchfork = "⋔";
const piv = "ϖ";
const planck = "ℏ";
const planckh = "ℎ";
const plankv = "ℏ";
const plusacir = "⨣";
const plusb = "⊞";
const pluscir = "⨢";
const plus = "+";
const plusdo = "∔";
const plusdu = "⨥";
const pluse = "⩲";
const PlusMinus = "±";
const plusmn = "±";
const plussim = "⨦";
const plustwo = "⨧";
const pm = "±";
const Poincareplane = "ℌ";
const pointint = "⨕";
const popf = "𝕡";
const Popf = "ℙ";
const pound = "£";
const prap = "⪷";
const Pr = "⪻";
const pr = "≺";
const prcue = "≼";
const precapprox = "⪷";
const prec = "≺";
const preccurlyeq = "≼";
const Precedes = "≺";
const PrecedesEqual = "⪯";
const PrecedesSlantEqual = "≼";
const PrecedesTilde = "≾";
const preceq = "⪯";
const precnapprox = "⪹";
const precneqq = "⪵";
const precnsim = "⋨";
const pre = "⪯";
const prE = "⪳";
const precsim = "≾";
const prime = "′";
const Prime = "″";
const primes = "ℙ";
const prnap = "⪹";
const prnE = "⪵";
const prnsim = "⋨";
const prod = "∏";
const Product = "∏";
const profalar = "⌮";
const profline = "⌒";
const profsurf = "⌓";
const prop = "∝";
const Proportional = "∝";
const Proportion = "∷";
const propto = "∝";
const prsim = "≾";
const prurel = "⊰";
const Pscr = "𝒫";
const pscr = "𝓅";
const Psi = "Ψ";
const psi = "ψ";
const puncsp = " ";
const Qfr = "𝔔";
const qfr = "𝔮";
const qint = "⨌";
const qopf = "𝕢";
const Qopf = "ℚ";
const qprime = "⁗";
const Qscr = "𝒬";
const qscr = "𝓆";
const quaternions = "ℍ";
const quatint = "⨖";
const quest = "?";
const questeq = "≟";
const quot = "\"";
const QUOT = "\"";
const rAarr = "⇛";
const race = "∽̱";
const Racute = "Ŕ";
const racute = "ŕ";
const radic = "√";
const raemptyv = "⦳";
const rang = "⟩";
const Rang = "⟫";
const rangd = "⦒";
const range = "⦥";
const rangle = "⟩";
const raquo = "»";
const rarrap = "⥵";
const rarrb = "⇥";
const rarrbfs = "⤠";
const rarrc = "⤳";
const rarr = "→";
const Rarr = "↠";
const rArr = "⇒";
const rarrfs = "⤞";
const rarrhk = "↪";
const rarrlp = "↬";
const rarrpl = "⥅";
const rarrsim = "⥴";
const Rarrtl = "⤖";
const rarrtl = "↣";
const rarrw = "↝";
const ratail = "⤚";
const rAtail = "⤜";
const ratio = "∶";
const rationals = "ℚ";
const rbarr = "⤍";
const rBarr = "⤏";
const RBarr = "⤐";
const rbbrk = "❳";
const rbrace = "}";
const rbrack = "]";
const rbrke = "⦌";
const rbrksld = "⦎";
const rbrkslu = "⦐";
const Rcaron = "Ř";
const rcaron = "ř";
const Rcedil = "Ŗ";
const rcedil = "ŗ";
const rceil = "⌉";
const rcub = "}";
const Rcy = "Р";
const rcy = "р";
const rdca = "⤷";
const rdldhar = "⥩";
const rdquo = "”";
const rdquor = "”";
const rdsh = "↳";
const real = "ℜ";
const realine = "ℛ";
const realpart = "ℜ";
const reals = "ℝ";
const Re = "ℜ";
const rect = "▭";
const reg = "®";
const REG = "®";
const ReverseElement = "∋";
const ReverseEquilibrium = "⇋";
const ReverseUpEquilibrium = "⥯";
const rfisht = "⥽";
const rfloor = "⌋";
const rfr = "𝔯";
const Rfr = "ℜ";
const rHar = "⥤";
const rhard = "⇁";
const rharu = "⇀";
const rharul = "⥬";
const Rho = "Ρ";
const rho = "ρ";
const rhov = "ϱ";
const RightAngleBracket = "⟩";
const RightArrowBar = "⇥";
const rightarrow = "→";
const RightArrow = "→";
const Rightarrow = "⇒";
const RightArrowLeftArrow = "⇄";
const rightarrowtail = "↣";
const RightCeiling = "⌉";
const RightDoubleBracket = "⟧";
const RightDownTeeVector = "⥝";
const RightDownVectorBar = "⥕";
const RightDownVector = "⇂";
const RightFloor = "⌋";
const rightharpoondown = "⇁";
const rightharpoonup = "⇀";
const rightleftarrows = "⇄";
const rightleftharpoons = "⇌";
const rightrightarrows = "⇉";
const rightsquigarrow = "↝";
const RightTeeArrow = "↦";
const RightTee = "⊢";
const RightTeeVector = "⥛";
const rightthreetimes = "⋌";
const RightTriangleBar = "⧐";
const RightTriangle = "⊳";
const RightTriangleEqual = "⊵";
const RightUpDownVector = "⥏";
const RightUpTeeVector = "⥜";
const RightUpVectorBar = "⥔";
const RightUpVector = "↾";
const RightVectorBar = "⥓";
const RightVector = "⇀";
const ring = "˚";
const risingdotseq = "≓";
const rlarr = "⇄";
const rlhar = "⇌";
const rlm = "‏";
const rmoustache = "⎱";
const rmoust = "⎱";
const rnmid = "⫮";
const roang = "⟭";
const roarr = "⇾";
const robrk = "⟧";
const ropar = "⦆";
const ropf = "𝕣";
const Ropf = "ℝ";
const roplus = "⨮";
const rotimes = "⨵";
const RoundImplies = "⥰";
const rpar = ")";
const rpargt = "⦔";
const rppolint = "⨒";
const rrarr = "⇉";
const Rrightarrow = "⇛";
const rsaquo = "›";
const rscr = "𝓇";
const Rscr = "ℛ";
const rsh = "↱";
const Rsh = "↱";
const rsqb = "]";
const rsquo = "’";
const rsquor = "’";
const rthree = "⋌";
const rtimes = "⋊";
const rtri = "▹";
const rtrie = "⊵";
const rtrif = "▸";
const rtriltri = "⧎";
const RuleDelayed = "⧴";
const ruluhar = "⥨";
const rx = "℞";
const Sacute = "Ś";
const sacute = "ś";
const sbquo = "‚";
const scap = "⪸";
const Scaron = "Š";
const scaron = "š";
const Sc = "⪼";
const sc = "≻";
const sccue = "≽";
const sce = "⪰";
const scE = "⪴";
const Scedil = "Ş";
const scedil = "ş";
const Scirc = "Ŝ";
const scirc = "ŝ";
const scnap = "⪺";
const scnE = "⪶";
const scnsim = "⋩";
const scpolint = "⨓";
const scsim = "≿";
const Scy = "С";
const scy = "с";
const sdotb = "⊡";
const sdot = "⋅";
const sdote = "⩦";
const searhk = "⤥";
const searr = "↘";
const seArr = "⇘";
const searrow = "↘";
const sect = "§";
const semi = ";";
const seswar = "⤩";
const setminus = "∖";
const setmn = "∖";
const sext = "✶";
const Sfr = "𝔖";
const sfr = "𝔰";
const sfrown = "⌢";
const sharp = "♯";
const SHCHcy = "Щ";
const shchcy = "щ";
const SHcy = "Ш";
const shcy = "ш";
const ShortDownArrow = "↓";
const ShortLeftArrow = "←";
const shortmid = "∣";
const shortparallel = "∥";
const ShortRightArrow = "→";
const ShortUpArrow = "↑";
const shy = "­";
const Sigma = "Σ";
const sigma = "σ";
const sigmaf = "ς";
const sigmav = "ς";
const sim = "∼";
const simdot = "⩪";
const sime = "≃";
const simeq = "≃";
const simg = "⪞";
const simgE = "⪠";
const siml = "⪝";
const simlE = "⪟";
const simne = "≆";
const simplus = "⨤";
const simrarr = "⥲";
const slarr = "←";
const SmallCircle = "∘";
const smallsetminus = "∖";
const smashp = "⨳";
const smeparsl = "⧤";
const smid = "∣";
const smile = "⌣";
const smt = "⪪";
const smte = "⪬";
const smtes = "⪬︀";
const SOFTcy = "Ь";
const softcy = "ь";
const solbar = "⌿";
const solb = "⧄";
const sol = "/";
const Sopf = "𝕊";
const sopf = "𝕤";
const spades = "♠";
const spadesuit = "♠";
const spar = "∥";
const sqcap = "⊓";
const sqcaps = "⊓︀";
const sqcup = "⊔";
const sqcups = "⊔︀";
const Sqrt = "√";
const sqsub = "⊏";
const sqsube = "⊑";
const sqsubset = "⊏";
const sqsubseteq = "⊑";
const sqsup = "⊐";
const sqsupe = "⊒";
const sqsupset = "⊐";
const sqsupseteq = "⊒";
const square = "□";
const Square = "□";
const SquareIntersection = "⊓";
const SquareSubset = "⊏";
const SquareSubsetEqual = "⊑";
const SquareSuperset = "⊐";
const SquareSupersetEqual = "⊒";
const SquareUnion = "⊔";
const squarf = "▪";
const squ = "□";
const squf = "▪";
const srarr = "→";
const Sscr = "𝒮";
const sscr = "𝓈";
const ssetmn = "∖";
const ssmile = "⌣";
const sstarf = "⋆";
const Star = "⋆";
const star = "☆";
const starf = "★";
const straightepsilon = "ϵ";
const straightphi = "ϕ";
const strns = "¯";
const sub = "⊂";
const Sub = "⋐";
const subdot = "⪽";
const subE = "⫅";
const sube = "⊆";
const subedot = "⫃";
const submult = "⫁";
const subnE = "⫋";
const subne = "⊊";
const subplus = "⪿";
const subrarr = "⥹";
const subset = "⊂";
const Subset = "⋐";
const subseteq = "⊆";
const subseteqq = "⫅";
const SubsetEqual = "⊆";
const subsetneq = "⊊";
const subsetneqq = "⫋";
const subsim = "⫇";
const subsub = "⫕";
const subsup = "⫓";
const succapprox = "⪸";
const succ = "≻";
const succcurlyeq = "≽";
const Succeeds = "≻";
const SucceedsEqual = "⪰";
const SucceedsSlantEqual = "≽";
const SucceedsTilde = "≿";
const succeq = "⪰";
const succnapprox = "⪺";
const succneqq = "⪶";
const succnsim = "⋩";
const succsim = "≿";
const SuchThat = "∋";
const sum = "∑";
const Sum = "∑";
const sung = "♪";
const sup1 = "¹";
const sup2 = "²";
const sup3 = "³";
const sup = "⊃";
const Sup = "⋑";
const supdot = "⪾";
const supdsub = "⫘";
const supE = "⫆";
const supe = "⊇";
const supedot = "⫄";
const Superset = "⊃";
const SupersetEqual = "⊇";
const suphsol = "⟉";
const suphsub = "⫗";
const suplarr = "⥻";
const supmult = "⫂";
const supnE = "⫌";
const supne = "⊋";
const supplus = "⫀";
const supset = "⊃";
const Supset = "⋑";
const supseteq = "⊇";
const supseteqq = "⫆";
const supsetneq = "⊋";
const supsetneqq = "⫌";
const supsim = "⫈";
const supsub = "⫔";
const supsup = "⫖";
const swarhk = "⤦";
const swarr = "↙";
const swArr = "⇙";
const swarrow = "↙";
const swnwar = "⤪";
const szlig = "ß";
const Tab = "\t";
const target = "⌖";
const Tau = "Τ";
const tau = "τ";
const tbrk = "⎴";
const Tcaron = "Ť";
const tcaron = "ť";
const Tcedil = "Ţ";
const tcedil = "ţ";
const Tcy = "Т";
const tcy = "т";
const tdot = "⃛";
const telrec = "⌕";
const Tfr = "𝔗";
const tfr = "𝔱";
const there4 = "∴";
const therefore = "∴";
const Therefore = "∴";
const Theta = "Θ";
const theta = "θ";
const thetasym = "ϑ";
const thetav = "ϑ";
const thickapprox = "≈";
const thicksim = "∼";
const ThickSpace = "  ";
const ThinSpace = " ";
const thinsp = " ";
const thkap = "≈";
const thksim = "∼";
const THORN = "Þ";
const thorn = "þ";
const tilde = "˜";
const Tilde = "∼";
const TildeEqual = "≃";
const TildeFullEqual = "≅";
const TildeTilde = "≈";
const timesbar = "⨱";
const timesb = "⊠";
const times = "×";
const timesd = "⨰";
const tint = "∭";
const toea = "⤨";
const topbot = "⌶";
const topcir = "⫱";
const top = "⊤";
const Topf = "𝕋";
const topf = "𝕥";
const topfork = "⫚";
const tosa = "⤩";
const tprime = "‴";
const trade = "™";
const TRADE = "™";
const triangle = "▵";
const triangledown = "▿";
const triangleleft = "◃";
const trianglelefteq = "⊴";
const triangleq = "≜";
const triangleright = "▹";
const trianglerighteq = "⊵";
const tridot = "◬";
const trie = "≜";
const triminus = "⨺";
const TripleDot = "⃛";
const triplus = "⨹";
const trisb = "⧍";
const tritime = "⨻";
const trpezium = "⏢";
const Tscr = "𝒯";
const tscr = "𝓉";
const TScy = "Ц";
const tscy = "ц";
const TSHcy = "Ћ";
const tshcy = "ћ";
const Tstrok = "Ŧ";
const tstrok = "ŧ";
const twixt = "≬";
const twoheadleftarrow = "↞";
const twoheadrightarrow = "↠";
const Uacute = "Ú";
const uacute = "ú";
const uarr = "↑";
const Uarr = "↟";
const uArr = "⇑";
const Uarrocir = "⥉";
const Ubrcy = "Ў";
const ubrcy = "ў";
const Ubreve = "Ŭ";
const ubreve = "ŭ";
const Ucirc = "Û";
const ucirc = "û";
const Ucy = "У";
const ucy = "у";
const udarr = "⇅";
const Udblac = "Ű";
const udblac = "ű";
const udhar = "⥮";
const ufisht = "⥾";
const Ufr = "𝔘";
const ufr = "𝔲";
const Ugrave = "Ù";
const ugrave = "ù";
const uHar = "⥣";
const uharl = "↿";
const uharr = "↾";
const uhblk = "▀";
const ulcorn = "⌜";
const ulcorner = "⌜";
const ulcrop = "⌏";
const ultri = "◸";
const Umacr = "Ū";
const umacr = "ū";
const uml = "¨";
const UnderBar = "_";
const UnderBrace = "⏟";
const UnderBracket = "⎵";
const UnderParenthesis = "⏝";
const Union = "⋃";
const UnionPlus = "⊎";
const Uogon = "Ų";
const uogon = "ų";
const Uopf = "𝕌";
const uopf = "𝕦";
const UpArrowBar = "⤒";
const uparrow = "↑";
const UpArrow = "↑";
const Uparrow = "⇑";
const UpArrowDownArrow = "⇅";
const updownarrow = "↕";
const UpDownArrow = "↕";
const Updownarrow = "⇕";
const UpEquilibrium = "⥮";
const upharpoonleft = "↿";
const upharpoonright = "↾";
const uplus = "⊎";
const UpperLeftArrow = "↖";
const UpperRightArrow = "↗";
const upsi = "υ";
const Upsi = "ϒ";
const upsih = "ϒ";
const Upsilon = "Υ";
const upsilon = "υ";
const UpTeeArrow = "↥";
const UpTee = "⊥";
const upuparrows = "⇈";
const urcorn = "⌝";
const urcorner = "⌝";
const urcrop = "⌎";
const Uring = "Ů";
const uring = "ů";
const urtri = "◹";
const Uscr = "𝒰";
const uscr = "𝓊";
const utdot = "⋰";
const Utilde = "Ũ";
const utilde = "ũ";
const utri = "▵";
const utrif = "▴";
const uuarr = "⇈";
const Uuml = "Ü";
const uuml = "ü";
const uwangle = "⦧";
const vangrt = "⦜";
const varepsilon = "ϵ";
const varkappa = "ϰ";
const varnothing = "∅";
const varphi = "ϕ";
const varpi = "ϖ";
const varpropto = "∝";
const varr = "↕";
const vArr = "⇕";
const varrho = "ϱ";
const varsigma = "ς";
const varsubsetneq = "⊊︀";
const varsubsetneqq = "⫋︀";
const varsupsetneq = "⊋︀";
const varsupsetneqq = "⫌︀";
const vartheta = "ϑ";
const vartriangleleft = "⊲";
const vartriangleright = "⊳";
const vBar = "⫨";
const Vbar = "⫫";
const vBarv = "⫩";
const Vcy = "В";
const vcy = "в";
const vdash = "⊢";
const vDash = "⊨";
const Vdash = "⊩";
const VDash = "⊫";
const Vdashl = "⫦";
const veebar = "⊻";
const vee = "∨";
const Vee = "⋁";
const veeeq = "≚";
const vellip = "⋮";
const verbar = "|";
const Verbar = "‖";
const vert = "|";
const Vert = "‖";
const VerticalBar = "∣";
const VerticalLine = "|";
const VerticalSeparator = "❘";
const VerticalTilde = "≀";
const VeryThinSpace = " ";
const Vfr = "𝔙";
const vfr = "𝔳";
const vltri = "⊲";
const vnsub = "⊂⃒";
const vnsup = "⊃⃒";
const Vopf = "𝕍";
const vopf = "𝕧";
const vprop = "∝";
const vrtri = "⊳";
const Vscr = "𝒱";
const vscr = "𝓋";
const vsubnE = "⫋︀";
const vsubne = "⊊︀";
const vsupnE = "⫌︀";
const vsupne = "⊋︀";
const Vvdash = "⊪";
const vzigzag = "⦚";
const Wcirc = "Ŵ";
const wcirc = "ŵ";
const wedbar = "⩟";
const wedge = "∧";
const Wedge = "⋀";
const wedgeq = "≙";
const weierp = "℘";
const Wfr = "𝔚";
const wfr = "𝔴";
const Wopf = "𝕎";
const wopf = "𝕨";
const wp = "℘";
const wr = "≀";
const wreath = "≀";
const Wscr = "𝒲";
const wscr = "𝓌";
const xcap = "⋂";
const xcirc = "◯";
const xcup = "⋃";
const xdtri = "▽";
const Xfr = "𝔛";
const xfr = "𝔵";
const xharr = "⟷";
const xhArr = "⟺";
const Xi = "Ξ";
const xi = "ξ";
const xlarr = "⟵";
const xlArr = "⟸";
const xmap = "⟼";
const xnis = "⋻";
const xodot = "⨀";
const Xopf = "𝕏";
const xopf = "𝕩";
const xoplus = "⨁";
const xotime = "⨂";
const xrarr = "⟶";
const xrArr = "⟹";
const Xscr = "𝒳";
const xscr = "𝓍";
const xsqcup = "⨆";
const xuplus = "⨄";
const xutri = "△";
const xvee = "⋁";
const xwedge = "⋀";
const Yacute = "Ý";
const yacute = "ý";
const YAcy = "Я";
const yacy = "я";
const Ycirc = "Ŷ";
const ycirc = "ŷ";
const Ycy = "Ы";
const ycy = "ы";
const yen = "¥";
const Yfr = "𝔜";
const yfr = "𝔶";
const YIcy = "Ї";
const yicy = "ї";
const Yopf = "𝕐";
const yopf = "𝕪";
const Yscr = "𝒴";
const yscr = "𝓎";
const YUcy = "Ю";
const yucy = "ю";
const yuml = "ÿ";
const Yuml = "Ÿ";
const Zacute = "Ź";
const zacute = "ź";
const Zcaron = "Ž";
const zcaron = "ž";
const Zcy = "З";
const zcy = "з";
const Zdot = "Ż";
const zdot = "ż";
const zeetrf = "ℨ";
const ZeroWidthSpace = "​";
const Zeta = "Ζ";
const zeta = "ζ";
const zfr = "𝔷";
const Zfr = "ℨ";
const ZHcy = "Ж";
const zhcy = "ж";
const zigrarr = "⇝";
const zopf = "𝕫";
const Zopf = "ℤ";
const Zscr = "𝒵";
const zscr = "𝓏";
const zwj = "‍";
const zwnj = "‌";
var entities = {
  Aacute: Aacute,
  aacute: aacute,
  Abreve: Abreve,
  abreve: abreve,
  ac: ac,
  acd: acd,
  acE: acE,
  Acirc: Acirc,
  acirc: acirc,
  acute: acute,
  Acy: Acy,
  acy: acy,
  AElig: AElig,
  aelig: aelig,
  af: af,
  Afr: Afr,
  afr: afr,
  Agrave: Agrave,
  agrave: agrave,
  alefsym: alefsym,
  aleph: aleph,
  Alpha: Alpha,
  alpha: alpha,
  Amacr: Amacr,
  amacr: amacr,
  amalg: amalg,
  amp: amp,
  AMP: AMP,
  andand: andand,
  And: And,
  and: and,
  andd: andd,
  andslope: andslope,
  andv: andv,
  ang: ang,
  ange: ange,
  angle: angle,
  angmsdaa: angmsdaa,
  angmsdab: angmsdab,
  angmsdac: angmsdac,
  angmsdad: angmsdad,
  angmsdae: angmsdae,
  angmsdaf: angmsdaf,
  angmsdag: angmsdag,
  angmsdah: angmsdah,
  angmsd: angmsd,
  angrt: angrt,
  angrtvb: angrtvb,
  angrtvbd: angrtvbd,
  angsph: angsph,
  angst: angst,
  angzarr: angzarr,
  Aogon: Aogon,
  aogon: aogon,
  Aopf: Aopf,
  aopf: aopf,
  apacir: apacir,
  ap: ap,
  apE: apE,
  ape: ape,
  apid: apid,
  apos: apos,
  ApplyFunction: ApplyFunction,
  approx: approx,
  approxeq: approxeq,
  Aring: Aring,
  aring: aring,
  Ascr: Ascr,
  ascr: ascr,
  Assign: Assign,
  ast: ast,
  asymp: asymp,
  asympeq: asympeq,
  Atilde: Atilde,
  atilde: atilde,
  Auml: Auml,
  auml: auml,
  awconint: awconint,
  awint: awint,
  backcong: backcong,
  backepsilon: backepsilon,
  backprime: backprime,
  backsim: backsim,
  backsimeq: backsimeq,
  Backslash: Backslash,
  Barv: Barv,
  barvee: barvee,
  barwed: barwed,
  Barwed: Barwed,
  barwedge: barwedge,
  bbrk: bbrk,
  bbrktbrk: bbrktbrk,
  bcong: bcong,
  Bcy: Bcy,
  bcy: bcy,
  bdquo: bdquo,
  becaus: becaus,
  because: because,
  Because: Because,
  bemptyv: bemptyv,
  bepsi: bepsi,
  bernou: bernou,
  Bernoullis: Bernoullis,
  Beta: Beta,
  beta: beta,
  beth: beth,
  between: between,
  Bfr: Bfr,
  bfr: bfr,
  bigcap: bigcap,
  bigcirc: bigcirc,
  bigcup: bigcup,
  bigodot: bigodot,
  bigoplus: bigoplus,
  bigotimes: bigotimes,
  bigsqcup: bigsqcup,
  bigstar: bigstar,
  bigtriangledown: bigtriangledown,
  bigtriangleup: bigtriangleup,
  biguplus: biguplus,
  bigvee: bigvee,
  bigwedge: bigwedge,
  bkarow: bkarow,
  blacklozenge: blacklozenge,
  blacksquare: blacksquare,
  blacktriangle: blacktriangle,
  blacktriangledown: blacktriangledown,
  blacktriangleleft: blacktriangleleft,
  blacktriangleright: blacktriangleright,
  blank: blank,
  blk12: blk12,
  blk14: blk14,
  blk34: blk34,
  block: block,
  bne: bne,
  bnequiv: bnequiv,
  bNot: bNot,
  bnot: bnot,
  Bopf: Bopf,
  bopf: bopf,
  bot: bot,
  bottom: bottom,
  bowtie: bowtie,
  boxbox: boxbox,
  boxdl: boxdl,
  boxdL: boxdL,
  boxDl: boxDl,
  boxDL: boxDL,
  boxdr: boxdr,
  boxdR: boxdR,
  boxDr: boxDr,
  boxDR: boxDR,
  boxh: boxh,
  boxH: boxH,
  boxhd: boxhd,
  boxHd: boxHd,
  boxhD: boxhD,
  boxHD: boxHD,
  boxhu: boxhu,
  boxHu: boxHu,
  boxhU: boxhU,
  boxHU: boxHU,
  boxminus: boxminus,
  boxplus: boxplus,
  boxtimes: boxtimes,
  boxul: boxul,
  boxuL: boxuL,
  boxUl: boxUl,
  boxUL: boxUL,
  boxur: boxur,
  boxuR: boxuR,
  boxUr: boxUr,
  boxUR: boxUR,
  boxv: boxv,
  boxV: boxV,
  boxvh: boxvh,
  boxvH: boxvH,
  boxVh: boxVh,
  boxVH: boxVH,
  boxvl: boxvl,
  boxvL: boxvL,
  boxVl: boxVl,
  boxVL: boxVL,
  boxvr: boxvr,
  boxvR: boxvR,
  boxVr: boxVr,
  boxVR: boxVR,
  bprime: bprime,
  breve: breve,
  Breve: Breve,
  brvbar: brvbar,
  bscr: bscr,
  Bscr: Bscr,
  bsemi: bsemi,
  bsim: bsim,
  bsime: bsime,
  bsolb: bsolb,
  bsol: bsol,
  bsolhsub: bsolhsub,
  bull: bull,
  bullet: bullet,
  bump: bump,
  bumpE: bumpE,
  bumpe: bumpe,
  Bumpeq: Bumpeq,
  bumpeq: bumpeq,
  Cacute: Cacute,
  cacute: cacute,
  capand: capand,
  capbrcup: capbrcup,
  capcap: capcap,
  cap: cap,
  Cap: Cap,
  capcup: capcup,
  capdot: capdot,
  CapitalDifferentialD: CapitalDifferentialD,
  caps: caps,
  caret: caret,
  caron: caron,
  Cayleys: Cayleys,
  ccaps: ccaps,
  Ccaron: Ccaron,
  ccaron: ccaron,
  Ccedil: Ccedil,
  ccedil: ccedil,
  Ccirc: Ccirc,
  ccirc: ccirc,
  Cconint: Cconint,
  ccups: ccups,
  ccupssm: ccupssm,
  Cdot: Cdot,
  cdot: cdot,
  cedil: cedil,
  Cedilla: Cedilla,
  cemptyv: cemptyv,
  cent: cent,
  centerdot: centerdot,
  CenterDot: CenterDot,
  cfr: cfr,
  Cfr: Cfr,
  CHcy: CHcy,
  chcy: chcy,
  check: check,
  checkmark: checkmark,
  Chi: Chi,
  chi: chi,
  circ: circ,
  circeq: circeq,
  circlearrowleft: circlearrowleft,
  circlearrowright: circlearrowright,
  circledast: circledast,
  circledcirc: circledcirc,
  circleddash: circleddash,
  CircleDot: CircleDot,
  circledR: circledR,
  circledS: circledS,
  CircleMinus: CircleMinus,
  CirclePlus: CirclePlus,
  CircleTimes: CircleTimes,
  cir: cir,
  cirE: cirE,
  cire: cire,
  cirfnint: cirfnint,
  cirmid: cirmid,
  cirscir: cirscir,
  ClockwiseContourIntegral: ClockwiseContourIntegral,
  CloseCurlyDoubleQuote: CloseCurlyDoubleQuote,
  CloseCurlyQuote: CloseCurlyQuote,
  clubs: clubs,
  clubsuit: clubsuit,
  colon: colon,
  Colon: Colon,
  Colone: Colone,
  colone: colone,
  coloneq: coloneq,
  comma: comma,
  commat: commat,
  comp: comp,
  compfn: compfn,
  complement: complement,
  complexes: complexes,
  cong: cong,
  congdot: congdot,
  Congruent: Congruent,
  conint: conint,
  Conint: Conint,
  ContourIntegral: ContourIntegral,
  copf: copf,
  Copf: Copf,
  coprod: coprod,
  Coproduct: Coproduct,
  copy: copy,
  COPY: COPY,
  copysr: copysr,
  CounterClockwiseContourIntegral: CounterClockwiseContourIntegral,
  crarr: crarr,
  cross: cross,
  Cross: Cross,
  Cscr: Cscr,
  cscr: cscr,
  csub: csub,
  csube: csube,
  csup: csup,
  csupe: csupe,
  ctdot: ctdot,
  cudarrl: cudarrl,
  cudarrr: cudarrr,
  cuepr: cuepr,
  cuesc: cuesc,
  cularr: cularr,
  cularrp: cularrp,
  cupbrcap: cupbrcap,
  cupcap: cupcap,
  CupCap: CupCap,
  cup: cup,
  Cup: Cup,
  cupcup: cupcup,
  cupdot: cupdot,
  cupor: cupor,
  cups: cups,
  curarr: curarr,
  curarrm: curarrm,
  curlyeqprec: curlyeqprec,
  curlyeqsucc: curlyeqsucc,
  curlyvee: curlyvee,
  curlywedge: curlywedge,
  curren: curren,
  curvearrowleft: curvearrowleft,
  curvearrowright: curvearrowright,
  cuvee: cuvee,
  cuwed: cuwed,
  cwconint: cwconint,
  cwint: cwint,
  cylcty: cylcty,
  dagger: dagger,
  Dagger: Dagger,
  daleth: daleth,
  darr: darr,
  Darr: Darr,
  dArr: dArr,
  dash: dash,
  Dashv: Dashv,
  dashv: dashv,
  dbkarow: dbkarow,
  dblac: dblac,
  Dcaron: Dcaron,
  dcaron: dcaron,
  Dcy: Dcy,
  dcy: dcy,
  ddagger: ddagger,
  ddarr: ddarr,
  DD: DD,
  dd: dd,
  DDotrahd: DDotrahd,
  ddotseq: ddotseq,
  deg: deg,
  Del: Del,
  Delta: Delta,
  delta: delta,
  demptyv: demptyv,
  dfisht: dfisht,
  Dfr: Dfr,
  dfr: dfr,
  dHar: dHar,
  dharl: dharl,
  dharr: dharr,
  DiacriticalAcute: DiacriticalAcute,
  DiacriticalDot: DiacriticalDot,
  DiacriticalDoubleAcute: DiacriticalDoubleAcute,
  DiacriticalGrave: DiacriticalGrave,
  DiacriticalTilde: DiacriticalTilde,
  diam: diam,
  diamond: diamond,
  Diamond: Diamond,
  diamondsuit: diamondsuit,
  diams: diams,
  die: die,
  DifferentialD: DifferentialD,
  digamma: digamma,
  disin: disin,
  div: div,
  divide: divide,
  divideontimes: divideontimes,
  divonx: divonx,
  DJcy: DJcy,
  djcy: djcy,
  dlcorn: dlcorn,
  dlcrop: dlcrop,
  dollar: dollar,
  Dopf: Dopf,
  dopf: dopf,
  Dot: Dot,
  dot: dot,
  DotDot: DotDot,
  doteq: doteq,
  doteqdot: doteqdot,
  DotEqual: DotEqual,
  dotminus: dotminus,
  dotplus: dotplus,
  dotsquare: dotsquare,
  doublebarwedge: doublebarwedge,
  DoubleContourIntegral: DoubleContourIntegral,
  DoubleDot: DoubleDot,
  DoubleDownArrow: DoubleDownArrow,
  DoubleLeftArrow: DoubleLeftArrow,
  DoubleLeftRightArrow: DoubleLeftRightArrow,
  DoubleLeftTee: DoubleLeftTee,
  DoubleLongLeftArrow: DoubleLongLeftArrow,
  DoubleLongLeftRightArrow: DoubleLongLeftRightArrow,
  DoubleLongRightArrow: DoubleLongRightArrow,
  DoubleRightArrow: DoubleRightArrow,
  DoubleRightTee: DoubleRightTee,
  DoubleUpArrow: DoubleUpArrow,
  DoubleUpDownArrow: DoubleUpDownArrow,
  DoubleVerticalBar: DoubleVerticalBar,
  DownArrowBar: DownArrowBar,
  downarrow: downarrow,
  DownArrow: DownArrow,
  Downarrow: Downarrow,
  DownArrowUpArrow: DownArrowUpArrow,
  DownBreve: DownBreve,
  downdownarrows: downdownarrows,
  downharpoonleft: downharpoonleft,
  downharpoonright: downharpoonright,
  DownLeftRightVector: DownLeftRightVector,
  DownLeftTeeVector: DownLeftTeeVector,
  DownLeftVectorBar: DownLeftVectorBar,
  DownLeftVector: DownLeftVector,
  DownRightTeeVector: DownRightTeeVector,
  DownRightVectorBar: DownRightVectorBar,
  DownRightVector: DownRightVector,
  DownTeeArrow: DownTeeArrow,
  DownTee: DownTee,
  drbkarow: drbkarow,
  drcorn: drcorn,
  drcrop: drcrop,
  Dscr: Dscr,
  dscr: dscr,
  DScy: DScy,
  dscy: dscy,
  dsol: dsol,
  Dstrok: Dstrok,
  dstrok: dstrok,
  dtdot: dtdot,
  dtri: dtri,
  dtrif: dtrif,
  duarr: duarr,
  duhar: duhar,
  dwangle: dwangle,
  DZcy: DZcy,
  dzcy: dzcy,
  dzigrarr: dzigrarr,
  Eacute: Eacute,
  eacute: eacute,
  easter: easter,
  Ecaron: Ecaron,
  ecaron: ecaron,
  Ecirc: Ecirc,
  ecirc: ecirc,
  ecir: ecir,
  ecolon: ecolon,
  Ecy: Ecy,
  ecy: ecy,
  eDDot: eDDot,
  Edot: Edot,
  edot: edot,
  eDot: eDot,
  ee: ee,
  efDot: efDot,
  Efr: Efr,
  efr: efr,
  eg: eg,
  Egrave: Egrave,
  egrave: egrave,
  egs: egs,
  egsdot: egsdot,
  el: el,
  Element: Element,
  elinters: elinters,
  ell: ell,
  els: els,
  elsdot: elsdot,
  Emacr: Emacr,
  emacr: emacr,
  empty: empty,
  emptyset: emptyset,
  EmptySmallSquare: EmptySmallSquare,
  emptyv: emptyv,
  EmptyVerySmallSquare: EmptyVerySmallSquare,
  emsp13: emsp13,
  emsp14: emsp14,
  emsp: emsp,
  ENG: ENG,
  eng: eng,
  ensp: ensp,
  Eogon: Eogon,
  eogon: eogon,
  Eopf: Eopf,
  eopf: eopf,
  epar: epar,
  eparsl: eparsl,
  eplus: eplus,
  epsi: epsi,
  Epsilon: Epsilon,
  epsilon: epsilon,
  epsiv: epsiv,
  eqcirc: eqcirc,
  eqcolon: eqcolon,
  eqsim: eqsim,
  eqslantgtr: eqslantgtr,
  eqslantless: eqslantless,
  Equal: Equal,
  equals: equals,
  EqualTilde: EqualTilde,
  equest: equest,
  Equilibrium: Equilibrium,
  equiv: equiv,
  equivDD: equivDD,
  eqvparsl: eqvparsl,
  erarr: erarr,
  erDot: erDot,
  escr: escr,
  Escr: Escr,
  esdot: esdot,
  Esim: Esim,
  esim: esim,
  Eta: Eta,
  eta: eta,
  ETH: ETH,
  eth: eth,
  Euml: Euml,
  euml: euml,
  euro: euro,
  excl: excl,
  exist: exist,
  Exists: Exists,
  expectation: expectation,
  exponentiale: exponentiale,
  ExponentialE: ExponentialE,
  fallingdotseq: fallingdotseq,
  Fcy: Fcy,
  fcy: fcy,
  female: female,
  ffilig: ffilig,
  fflig: fflig,
  ffllig: ffllig,
  Ffr: Ffr,
  ffr: ffr,
  filig: filig,
  FilledSmallSquare: FilledSmallSquare,
  FilledVerySmallSquare: FilledVerySmallSquare,
  fjlig: fjlig,
  flat: flat,
  fllig: fllig,
  fltns: fltns,
  fnof: fnof,
  Fopf: Fopf,
  fopf: fopf,
  forall: forall,
  ForAll: ForAll,
  fork: fork,
  forkv: forkv,
  Fouriertrf: Fouriertrf,
  fpartint: fpartint,
  frac12: frac12,
  frac13: frac13,
  frac14: frac14,
  frac15: frac15,
  frac16: frac16,
  frac18: frac18,
  frac23: frac23,
  frac25: frac25,
  frac34: frac34,
  frac35: frac35,
  frac38: frac38,
  frac45: frac45,
  frac56: frac56,
  frac58: frac58,
  frac78: frac78,
  frasl: frasl,
  frown: frown,
  fscr: fscr,
  Fscr: Fscr,
  gacute: gacute,
  Gamma: Gamma,
  gamma: gamma,
  Gammad: Gammad,
  gammad: gammad,
  gap: gap,
  Gbreve: Gbreve,
  gbreve: gbreve,
  Gcedil: Gcedil,
  Gcirc: Gcirc,
  gcirc: gcirc,
  Gcy: Gcy,
  gcy: gcy,
  Gdot: Gdot,
  gdot: gdot,
  ge: ge,
  gE: gE,
  gEl: gEl,
  gel: gel,
  geq: geq,
  geqq: geqq,
  geqslant: geqslant,
  gescc: gescc,
  ges: ges,
  gesdot: gesdot,
  gesdoto: gesdoto,
  gesdotol: gesdotol,
  gesl: gesl,
  gesles: gesles,
  Gfr: Gfr,
  gfr: gfr,
  gg: gg,
  Gg: Gg,
  ggg: ggg,
  gimel: gimel,
  GJcy: GJcy,
  gjcy: gjcy,
  gla: gla,
  gl: gl,
  glE: glE,
  glj: glj,
  gnap: gnap,
  gnapprox: gnapprox,
  gne: gne,
  gnE: gnE,
  gneq: gneq,
  gneqq: gneqq,
  gnsim: gnsim,
  Gopf: Gopf,
  gopf: gopf,
  grave: grave,
  GreaterEqual: GreaterEqual,
  GreaterEqualLess: GreaterEqualLess,
  GreaterFullEqual: GreaterFullEqual,
  GreaterGreater: GreaterGreater,
  GreaterLess: GreaterLess,
  GreaterSlantEqual: GreaterSlantEqual,
  GreaterTilde: GreaterTilde,
  Gscr: Gscr,
  gscr: gscr,
  gsim: gsim,
  gsime: gsime,
  gsiml: gsiml,
  gtcc: gtcc,
  gtcir: gtcir,
  gt: gt,
  GT: GT,
  Gt: Gt,
  gtdot: gtdot,
  gtlPar: gtlPar,
  gtquest: gtquest,
  gtrapprox: gtrapprox,
  gtrarr: gtrarr,
  gtrdot: gtrdot,
  gtreqless: gtreqless,
  gtreqqless: gtreqqless,
  gtrless: gtrless,
  gtrsim: gtrsim,
  gvertneqq: gvertneqq,
  gvnE: gvnE,
  Hacek: Hacek,
  hairsp: hairsp,
  half: half,
  hamilt: hamilt,
  HARDcy: HARDcy,
  hardcy: hardcy,
  harrcir: harrcir,
  harr: harr,
  hArr: hArr,
  harrw: harrw,
  Hat: Hat,
  hbar: hbar,
  Hcirc: Hcirc,
  hcirc: hcirc,
  hearts: hearts,
  heartsuit: heartsuit,
  hellip: hellip,
  hercon: hercon,
  hfr: hfr,
  Hfr: Hfr,
  HilbertSpace: HilbertSpace,
  hksearow: hksearow,
  hkswarow: hkswarow,
  hoarr: hoarr,
  homtht: homtht,
  hookleftarrow: hookleftarrow,
  hookrightarrow: hookrightarrow,
  hopf: hopf,
  Hopf: Hopf,
  horbar: horbar,
  HorizontalLine: HorizontalLine,
  hscr: hscr,
  Hscr: Hscr,
  hslash: hslash,
  Hstrok: Hstrok,
  hstrok: hstrok,
  HumpDownHump: HumpDownHump,
  HumpEqual: HumpEqual,
  hybull: hybull,
  hyphen: hyphen,
  Iacute: Iacute,
  iacute: iacute,
  ic: ic,
  Icirc: Icirc,
  icirc: icirc,
  Icy: Icy,
  icy: icy,
  Idot: Idot,
  IEcy: IEcy,
  iecy: iecy,
  iexcl: iexcl,
  iff: iff,
  ifr: ifr,
  Ifr: Ifr,
  Igrave: Igrave,
  igrave: igrave,
  ii: ii,
  iiiint: iiiint,
  iiint: iiint,
  iinfin: iinfin,
  iiota: iiota,
  IJlig: IJlig,
  ijlig: ijlig,
  Imacr: Imacr,
  imacr: imacr,
  image: image,
  ImaginaryI: ImaginaryI,
  imagline: imagline,
  imagpart: imagpart,
  imath: imath,
  Im: Im,
  imof: imof,
  imped: imped,
  Implies: Implies,
  incare: incare,
  "in": "∈",
  infin: infin,
  infintie: infintie,
  inodot: inodot,
  intcal: intcal,
  int: int,
  Int: Int,
  integers: integers,
  Integral: Integral,
  intercal: intercal,
  Intersection: Intersection,
  intlarhk: intlarhk,
  intprod: intprod,
  InvisibleComma: InvisibleComma,
  InvisibleTimes: InvisibleTimes,
  IOcy: IOcy,
  iocy: iocy,
  Iogon: Iogon,
  iogon: iogon,
  Iopf: Iopf,
  iopf: iopf,
  Iota: Iota,
  iota: iota,
  iprod: iprod,
  iquest: iquest,
  iscr: iscr,
  Iscr: Iscr,
  isin: isin,
  isindot: isindot,
  isinE: isinE,
  isins: isins,
  isinsv: isinsv,
  isinv: isinv,
  it: it,
  Itilde: Itilde,
  itilde: itilde,
  Iukcy: Iukcy,
  iukcy: iukcy,
  Iuml: Iuml,
  iuml: iuml,
  Jcirc: Jcirc,
  jcirc: jcirc,
  Jcy: Jcy,
  jcy: jcy,
  Jfr: Jfr,
  jfr: jfr,
  jmath: jmath,
  Jopf: Jopf,
  jopf: jopf,
  Jscr: Jscr,
  jscr: jscr,
  Jsercy: Jsercy,
  jsercy: jsercy,
  Jukcy: Jukcy,
  jukcy: jukcy,
  Kappa: Kappa,
  kappa: kappa,
  kappav: kappav,
  Kcedil: Kcedil,
  kcedil: kcedil,
  Kcy: Kcy,
  kcy: kcy,
  Kfr: Kfr,
  kfr: kfr,
  kgreen: kgreen,
  KHcy: KHcy,
  khcy: khcy,
  KJcy: KJcy,
  kjcy: kjcy,
  Kopf: Kopf,
  kopf: kopf,
  Kscr: Kscr,
  kscr: kscr,
  lAarr: lAarr,
  Lacute: Lacute,
  lacute: lacute,
  laemptyv: laemptyv,
  lagran: lagran,
  Lambda: Lambda,
  lambda: lambda,
  lang: lang,
  Lang: Lang,
  langd: langd,
  langle: langle,
  lap: lap,
  Laplacetrf: Laplacetrf,
  laquo: laquo,
  larrb: larrb,
  larrbfs: larrbfs,
  larr: larr,
  Larr: Larr,
  lArr: lArr,
  larrfs: larrfs,
  larrhk: larrhk,
  larrlp: larrlp,
  larrpl: larrpl,
  larrsim: larrsim,
  larrtl: larrtl,
  latail: latail,
  lAtail: lAtail,
  lat: lat,
  late: late,
  lates: lates,
  lbarr: lbarr,
  lBarr: lBarr,
  lbbrk: lbbrk,
  lbrace: lbrace,
  lbrack: lbrack,
  lbrke: lbrke,
  lbrksld: lbrksld,
  lbrkslu: lbrkslu,
  Lcaron: Lcaron,
  lcaron: lcaron,
  Lcedil: Lcedil,
  lcedil: lcedil,
  lceil: lceil,
  lcub: lcub,
  Lcy: Lcy,
  lcy: lcy,
  ldca: ldca,
  ldquo: ldquo,
  ldquor: ldquor,
  ldrdhar: ldrdhar,
  ldrushar: ldrushar,
  ldsh: ldsh,
  le: le,
  lE: lE,
  LeftAngleBracket: LeftAngleBracket,
  LeftArrowBar: LeftArrowBar,
  leftarrow: leftarrow,
  LeftArrow: LeftArrow,
  Leftarrow: Leftarrow,
  LeftArrowRightArrow: LeftArrowRightArrow,
  leftarrowtail: leftarrowtail,
  LeftCeiling: LeftCeiling,
  LeftDoubleBracket: LeftDoubleBracket,
  LeftDownTeeVector: LeftDownTeeVector,
  LeftDownVectorBar: LeftDownVectorBar,
  LeftDownVector: LeftDownVector,
  LeftFloor: LeftFloor,
  leftharpoondown: leftharpoondown,
  leftharpoonup: leftharpoonup,
  leftleftarrows: leftleftarrows,
  leftrightarrow: leftrightarrow,
  LeftRightArrow: LeftRightArrow,
  Leftrightarrow: Leftrightarrow,
  leftrightarrows: leftrightarrows,
  leftrightharpoons: leftrightharpoons,
  leftrightsquigarrow: leftrightsquigarrow,
  LeftRightVector: LeftRightVector,
  LeftTeeArrow: LeftTeeArrow,
  LeftTee: LeftTee,
  LeftTeeVector: LeftTeeVector,
  leftthreetimes: leftthreetimes,
  LeftTriangleBar: LeftTriangleBar,
  LeftTriangle: LeftTriangle,
  LeftTriangleEqual: LeftTriangleEqual,
  LeftUpDownVector: LeftUpDownVector,
  LeftUpTeeVector: LeftUpTeeVector,
  LeftUpVectorBar: LeftUpVectorBar,
  LeftUpVector: LeftUpVector,
  LeftVectorBar: LeftVectorBar,
  LeftVector: LeftVector,
  lEg: lEg,
  leg: leg,
  leq: leq,
  leqq: leqq,
  leqslant: leqslant,
  lescc: lescc,
  les: les,
  lesdot: lesdot,
  lesdoto: lesdoto,
  lesdotor: lesdotor,
  lesg: lesg,
  lesges: lesges,
  lessapprox: lessapprox,
  lessdot: lessdot,
  lesseqgtr: lesseqgtr,
  lesseqqgtr: lesseqqgtr,
  LessEqualGreater: LessEqualGreater,
  LessFullEqual: LessFullEqual,
  LessGreater: LessGreater,
  lessgtr: lessgtr,
  LessLess: LessLess,
  lesssim: lesssim,
  LessSlantEqual: LessSlantEqual,
  LessTilde: LessTilde,
  lfisht: lfisht,
  lfloor: lfloor,
  Lfr: Lfr,
  lfr: lfr,
  lg: lg,
  lgE: lgE,
  lHar: lHar,
  lhard: lhard,
  lharu: lharu,
  lharul: lharul,
  lhblk: lhblk,
  LJcy: LJcy,
  ljcy: ljcy,
  llarr: llarr,
  ll: ll,
  Ll: Ll,
  llcorner: llcorner,
  Lleftarrow: Lleftarrow,
  llhard: llhard,
  lltri: lltri,
  Lmidot: Lmidot,
  lmidot: lmidot,
  lmoustache: lmoustache,
  lmoust: lmoust,
  lnap: lnap,
  lnapprox: lnapprox,
  lne: lne,
  lnE: lnE,
  lneq: lneq,
  lneqq: lneqq,
  lnsim: lnsim,
  loang: loang,
  loarr: loarr,
  lobrk: lobrk,
  longleftarrow: longleftarrow,
  LongLeftArrow: LongLeftArrow,
  Longleftarrow: Longleftarrow,
  longleftrightarrow: longleftrightarrow,
  LongLeftRightArrow: LongLeftRightArrow,
  Longleftrightarrow: Longleftrightarrow,
  longmapsto: longmapsto,
  longrightarrow: longrightarrow,
  LongRightArrow: LongRightArrow,
  Longrightarrow: Longrightarrow,
  looparrowleft: looparrowleft,
  looparrowright: looparrowright,
  lopar: lopar,
  Lopf: Lopf,
  lopf: lopf,
  loplus: loplus,
  lotimes: lotimes,
  lowast: lowast,
  lowbar: lowbar,
  LowerLeftArrow: LowerLeftArrow,
  LowerRightArrow: LowerRightArrow,
  loz: loz,
  lozenge: lozenge,
  lozf: lozf,
  lpar: lpar,
  lparlt: lparlt,
  lrarr: lrarr,
  lrcorner: lrcorner,
  lrhar: lrhar,
  lrhard: lrhard,
  lrm: lrm,
  lrtri: lrtri,
  lsaquo: lsaquo,
  lscr: lscr,
  Lscr: Lscr,
  lsh: lsh,
  Lsh: Lsh,
  lsim: lsim,
  lsime: lsime,
  lsimg: lsimg,
  lsqb: lsqb,
  lsquo: lsquo,
  lsquor: lsquor,
  Lstrok: Lstrok,
  lstrok: lstrok,
  ltcc: ltcc,
  ltcir: ltcir,
  lt: lt,
  LT: LT,
  Lt: Lt,
  ltdot: ltdot,
  lthree: lthree,
  ltimes: ltimes,
  ltlarr: ltlarr,
  ltquest: ltquest,
  ltri: ltri,
  ltrie: ltrie,
  ltrif: ltrif,
  ltrPar: ltrPar,
  lurdshar: lurdshar,
  luruhar: luruhar,
  lvertneqq: lvertneqq,
  lvnE: lvnE,
  macr: macr,
  male: male,
  malt: malt,
  maltese: maltese,
  "Map": "⤅",
  map: map,
  mapsto: mapsto,
  mapstodown: mapstodown,
  mapstoleft: mapstoleft,
  mapstoup: mapstoup,
  marker: marker,
  mcomma: mcomma,
  Mcy: Mcy,
  mcy: mcy,
  mdash: mdash,
  mDDot: mDDot,
  measuredangle: measuredangle,
  MediumSpace: MediumSpace,
  Mellintrf: Mellintrf,
  Mfr: Mfr,
  mfr: mfr,
  mho: mho,
  micro: micro,
  midast: midast,
  midcir: midcir,
  mid: mid,
  middot: middot,
  minusb: minusb,
  minus: minus,
  minusd: minusd,
  minusdu: minusdu,
  MinusPlus: MinusPlus,
  mlcp: mlcp,
  mldr: mldr,
  mnplus: mnplus,
  models: models,
  Mopf: Mopf,
  mopf: mopf,
  mp: mp,
  mscr: mscr,
  Mscr: Mscr,
  mstpos: mstpos,
  Mu: Mu,
  mu: mu,
  multimap: multimap,
  mumap: mumap,
  nabla: nabla,
  Nacute: Nacute,
  nacute: nacute,
  nang: nang,
  nap: nap,
  napE: napE,
  napid: napid,
  napos: napos,
  napprox: napprox,
  natural: natural,
  naturals: naturals,
  natur: natur,
  nbsp: nbsp,
  nbump: nbump,
  nbumpe: nbumpe,
  ncap: ncap,
  Ncaron: Ncaron,
  ncaron: ncaron,
  Ncedil: Ncedil,
  ncedil: ncedil,
  ncong: ncong,
  ncongdot: ncongdot,
  ncup: ncup,
  Ncy: Ncy,
  ncy: ncy,
  ndash: ndash,
  nearhk: nearhk,
  nearr: nearr,
  neArr: neArr,
  nearrow: nearrow,
  ne: ne,
  nedot: nedot,
  NegativeMediumSpace: NegativeMediumSpace,
  NegativeThickSpace: NegativeThickSpace,
  NegativeThinSpace: NegativeThinSpace,
  NegativeVeryThinSpace: NegativeVeryThinSpace,
  nequiv: nequiv,
  nesear: nesear,
  nesim: nesim,
  NestedGreaterGreater: NestedGreaterGreater,
  NestedLessLess: NestedLessLess,
  NewLine: NewLine,
  nexist: nexist,
  nexists: nexists,
  Nfr: Nfr,
  nfr: nfr,
  ngE: ngE,
  nge: nge,
  ngeq: ngeq,
  ngeqq: ngeqq,
  ngeqslant: ngeqslant,
  nges: nges,
  nGg: nGg,
  ngsim: ngsim,
  nGt: nGt,
  ngt: ngt,
  ngtr: ngtr,
  nGtv: nGtv,
  nharr: nharr,
  nhArr: nhArr,
  nhpar: nhpar,
  ni: ni,
  nis: nis,
  nisd: nisd,
  niv: niv,
  NJcy: NJcy,
  njcy: njcy,
  nlarr: nlarr,
  nlArr: nlArr,
  nldr: nldr,
  nlE: nlE,
  nle: nle,
  nleftarrow: nleftarrow,
  nLeftarrow: nLeftarrow,
  nleftrightarrow: nleftrightarrow,
  nLeftrightarrow: nLeftrightarrow,
  nleq: nleq,
  nleqq: nleqq,
  nleqslant: nleqslant,
  nles: nles,
  nless: nless,
  nLl: nLl,
  nlsim: nlsim,
  nLt: nLt,
  nlt: nlt,
  nltri: nltri,
  nltrie: nltrie,
  nLtv: nLtv,
  nmid: nmid,
  NoBreak: NoBreak,
  NonBreakingSpace: NonBreakingSpace,
  nopf: nopf,
  Nopf: Nopf,
  Not: Not,
  not: not,
  NotCongruent: NotCongruent,
  NotCupCap: NotCupCap,
  NotDoubleVerticalBar: NotDoubleVerticalBar,
  NotElement: NotElement,
  NotEqual: NotEqual,
  NotEqualTilde: NotEqualTilde,
  NotExists: NotExists,
  NotGreater: NotGreater,
  NotGreaterEqual: NotGreaterEqual,
  NotGreaterFullEqual: NotGreaterFullEqual,
  NotGreaterGreater: NotGreaterGreater,
  NotGreaterLess: NotGreaterLess,
  NotGreaterSlantEqual: NotGreaterSlantEqual,
  NotGreaterTilde: NotGreaterTilde,
  NotHumpDownHump: NotHumpDownHump,
  NotHumpEqual: NotHumpEqual,
  notin: notin,
  notindot: notindot,
  notinE: notinE,
  notinva: notinva,
  notinvb: notinvb,
  notinvc: notinvc,
  NotLeftTriangleBar: NotLeftTriangleBar,
  NotLeftTriangle: NotLeftTriangle,
  NotLeftTriangleEqual: NotLeftTriangleEqual,
  NotLess: NotLess,
  NotLessEqual: NotLessEqual,
  NotLessGreater: NotLessGreater,
  NotLessLess: NotLessLess,
  NotLessSlantEqual: NotLessSlantEqual,
  NotLessTilde: NotLessTilde,
  NotNestedGreaterGreater: NotNestedGreaterGreater,
  NotNestedLessLess: NotNestedLessLess,
  notni: notni,
  notniva: notniva,
  notnivb: notnivb,
  notnivc: notnivc,
  NotPrecedes: NotPrecedes,
  NotPrecedesEqual: NotPrecedesEqual,
  NotPrecedesSlantEqual: NotPrecedesSlantEqual,
  NotReverseElement: NotReverseElement,
  NotRightTriangleBar: NotRightTriangleBar,
  NotRightTriangle: NotRightTriangle,
  NotRightTriangleEqual: NotRightTriangleEqual,
  NotSquareSubset: NotSquareSubset,
  NotSquareSubsetEqual: NotSquareSubsetEqual,
  NotSquareSuperset: NotSquareSuperset,
  NotSquareSupersetEqual: NotSquareSupersetEqual,
  NotSubset: NotSubset,
  NotSubsetEqual: NotSubsetEqual,
  NotSucceeds: NotSucceeds,
  NotSucceedsEqual: NotSucceedsEqual,
  NotSucceedsSlantEqual: NotSucceedsSlantEqual,
  NotSucceedsTilde: NotSucceedsTilde,
  NotSuperset: NotSuperset,
  NotSupersetEqual: NotSupersetEqual,
  NotTilde: NotTilde,
  NotTildeEqual: NotTildeEqual,
  NotTildeFullEqual: NotTildeFullEqual,
  NotTildeTilde: NotTildeTilde,
  NotVerticalBar: NotVerticalBar,
  nparallel: nparallel,
  npar: npar,
  nparsl: nparsl,
  npart: npart,
  npolint: npolint,
  npr: npr,
  nprcue: nprcue,
  nprec: nprec,
  npreceq: npreceq,
  npre: npre,
  nrarrc: nrarrc,
  nrarr: nrarr,
  nrArr: nrArr,
  nrarrw: nrarrw,
  nrightarrow: nrightarrow,
  nRightarrow: nRightarrow,
  nrtri: nrtri,
  nrtrie: nrtrie,
  nsc: nsc,
  nsccue: nsccue,
  nsce: nsce,
  Nscr: Nscr,
  nscr: nscr,
  nshortmid: nshortmid,
  nshortparallel: nshortparallel,
  nsim: nsim,
  nsime: nsime,
  nsimeq: nsimeq,
  nsmid: nsmid,
  nspar: nspar,
  nsqsube: nsqsube,
  nsqsupe: nsqsupe,
  nsub: nsub,
  nsubE: nsubE,
  nsube: nsube,
  nsubset: nsubset,
  nsubseteq: nsubseteq,
  nsubseteqq: nsubseteqq,
  nsucc: nsucc,
  nsucceq: nsucceq,
  nsup: nsup,
  nsupE: nsupE,
  nsupe: nsupe,
  nsupset: nsupset,
  nsupseteq: nsupseteq,
  nsupseteqq: nsupseteqq,
  ntgl: ntgl,
  Ntilde: Ntilde,
  ntilde: ntilde,
  ntlg: ntlg,
  ntriangleleft: ntriangleleft,
  ntrianglelefteq: ntrianglelefteq,
  ntriangleright: ntriangleright,
  ntrianglerighteq: ntrianglerighteq,
  Nu: Nu,
  nu: nu,
  num: num,
  numero: numero,
  numsp: numsp,
  nvap: nvap,
  nvdash: nvdash,
  nvDash: nvDash,
  nVdash: nVdash,
  nVDash: nVDash,
  nvge: nvge,
  nvgt: nvgt,
  nvHarr: nvHarr,
  nvinfin: nvinfin,
  nvlArr: nvlArr,
  nvle: nvle,
  nvlt: nvlt,
  nvltrie: nvltrie,
  nvrArr: nvrArr,
  nvrtrie: nvrtrie,
  nvsim: nvsim,
  nwarhk: nwarhk,
  nwarr: nwarr,
  nwArr: nwArr,
  nwarrow: nwarrow,
  nwnear: nwnear,
  Oacute: Oacute,
  oacute: oacute,
  oast: oast,
  Ocirc: Ocirc,
  ocirc: ocirc,
  ocir: ocir,
  Ocy: Ocy,
  ocy: ocy,
  odash: odash,
  Odblac: Odblac,
  odblac: odblac,
  odiv: odiv,
  odot: odot,
  odsold: odsold,
  OElig: OElig,
  oelig: oelig,
  ofcir: ofcir,
  Ofr: Ofr,
  ofr: ofr,
  ogon: ogon,
  Ograve: Ograve,
  ograve: ograve,
  ogt: ogt,
  ohbar: ohbar,
  ohm: ohm,
  oint: oint,
  olarr: olarr,
  olcir: olcir,
  olcross: olcross,
  oline: oline,
  olt: olt,
  Omacr: Omacr,
  omacr: omacr,
  Omega: Omega,
  omega: omega,
  Omicron: Omicron,
  omicron: omicron,
  omid: omid,
  ominus: ominus,
  Oopf: Oopf,
  oopf: oopf,
  opar: opar,
  OpenCurlyDoubleQuote: OpenCurlyDoubleQuote,
  OpenCurlyQuote: OpenCurlyQuote,
  operp: operp,
  oplus: oplus,
  orarr: orarr,
  Or: Or,
  or: or,
  ord: ord,
  order: order,
  orderof: orderof,
  ordf: ordf,
  ordm: ordm,
  origof: origof,
  oror: oror,
  orslope: orslope,
  orv: orv,
  oS: oS,
  Oscr: Oscr,
  oscr: oscr,
  Oslash: Oslash,
  oslash: oslash,
  osol: osol,
  Otilde: Otilde,
  otilde: otilde,
  otimesas: otimesas,
  Otimes: Otimes,
  otimes: otimes,
  Ouml: Ouml,
  ouml: ouml,
  ovbar: ovbar,
  OverBar: OverBar,
  OverBrace: OverBrace,
  OverBracket: OverBracket,
  OverParenthesis: OverParenthesis,
  para: para,
  parallel: parallel,
  par: par,
  parsim: parsim,
  parsl: parsl,
  part: part,
  PartialD: PartialD,
  Pcy: Pcy,
  pcy: pcy,
  percnt: percnt,
  period: period,
  permil: permil,
  perp: perp,
  pertenk: pertenk,
  Pfr: Pfr,
  pfr: pfr,
  Phi: Phi,
  phi: phi,
  phiv: phiv,
  phmmat: phmmat,
  phone: phone,
  Pi: Pi,
  pi: pi,
  pitchfork: pitchfork,
  piv: piv,
  planck: planck,
  planckh: planckh,
  plankv: plankv,
  plusacir: plusacir,
  plusb: plusb,
  pluscir: pluscir,
  plus: plus,
  plusdo: plusdo,
  plusdu: plusdu,
  pluse: pluse,
  PlusMinus: PlusMinus,
  plusmn: plusmn,
  plussim: plussim,
  plustwo: plustwo,
  pm: pm,
  Poincareplane: Poincareplane,
  pointint: pointint,
  popf: popf,
  Popf: Popf,
  pound: pound,
  prap: prap,
  Pr: Pr,
  pr: pr,
  prcue: prcue,
  precapprox: precapprox,
  prec: prec,
  preccurlyeq: preccurlyeq,
  Precedes: Precedes,
  PrecedesEqual: PrecedesEqual,
  PrecedesSlantEqual: PrecedesSlantEqual,
  PrecedesTilde: PrecedesTilde,
  preceq: preceq,
  precnapprox: precnapprox,
  precneqq: precneqq,
  precnsim: precnsim,
  pre: pre,
  prE: prE,
  precsim: precsim,
  prime: prime,
  Prime: Prime,
  primes: primes,
  prnap: prnap,
  prnE: prnE,
  prnsim: prnsim,
  prod: prod,
  Product: Product,
  profalar: profalar,
  profline: profline,
  profsurf: profsurf,
  prop: prop,
  Proportional: Proportional,
  Proportion: Proportion,
  propto: propto,
  prsim: prsim,
  prurel: prurel,
  Pscr: Pscr,
  pscr: pscr,
  Psi: Psi,
  psi: psi,
  puncsp: puncsp,
  Qfr: Qfr,
  qfr: qfr,
  qint: qint,
  qopf: qopf,
  Qopf: Qopf,
  qprime: qprime,
  Qscr: Qscr,
  qscr: qscr,
  quaternions: quaternions,
  quatint: quatint,
  quest: quest,
  questeq: questeq,
  quot: quot,
  QUOT: QUOT,
  rAarr: rAarr,
  race: race,
  Racute: Racute,
  racute: racute,
  radic: radic,
  raemptyv: raemptyv,
  rang: rang,
  Rang: Rang,
  rangd: rangd,
  range: range,
  rangle: rangle,
  raquo: raquo,
  rarrap: rarrap,
  rarrb: rarrb,
  rarrbfs: rarrbfs,
  rarrc: rarrc,
  rarr: rarr,
  Rarr: Rarr,
  rArr: rArr,
  rarrfs: rarrfs,
  rarrhk: rarrhk,
  rarrlp: rarrlp,
  rarrpl: rarrpl,
  rarrsim: rarrsim,
  Rarrtl: Rarrtl,
  rarrtl: rarrtl,
  rarrw: rarrw,
  ratail: ratail,
  rAtail: rAtail,
  ratio: ratio,
  rationals: rationals,
  rbarr: rbarr,
  rBarr: rBarr,
  RBarr: RBarr,
  rbbrk: rbbrk,
  rbrace: rbrace,
  rbrack: rbrack,
  rbrke: rbrke,
  rbrksld: rbrksld,
  rbrkslu: rbrkslu,
  Rcaron: Rcaron,
  rcaron: rcaron,
  Rcedil: Rcedil,
  rcedil: rcedil,
  rceil: rceil,
  rcub: rcub,
  Rcy: Rcy,
  rcy: rcy,
  rdca: rdca,
  rdldhar: rdldhar,
  rdquo: rdquo,
  rdquor: rdquor,
  rdsh: rdsh,
  real: real,
  realine: realine,
  realpart: realpart,
  reals: reals,
  Re: Re,
  rect: rect,
  reg: reg,
  REG: REG,
  ReverseElement: ReverseElement,
  ReverseEquilibrium: ReverseEquilibrium,
  ReverseUpEquilibrium: ReverseUpEquilibrium,
  rfisht: rfisht,
  rfloor: rfloor,
  rfr: rfr,
  Rfr: Rfr,
  rHar: rHar,
  rhard: rhard,
  rharu: rharu,
  rharul: rharul,
  Rho: Rho,
  rho: rho,
  rhov: rhov,
  RightAngleBracket: RightAngleBracket,
  RightArrowBar: RightArrowBar,
  rightarrow: rightarrow,
  RightArrow: RightArrow,
  Rightarrow: Rightarrow,
  RightArrowLeftArrow: RightArrowLeftArrow,
  rightarrowtail: rightarrowtail,
  RightCeiling: RightCeiling,
  RightDoubleBracket: RightDoubleBracket,
  RightDownTeeVector: RightDownTeeVector,
  RightDownVectorBar: RightDownVectorBar,
  RightDownVector: RightDownVector,
  RightFloor: RightFloor,
  rightharpoondown: rightharpoondown,
  rightharpoonup: rightharpoonup,
  rightleftarrows: rightleftarrows,
  rightleftharpoons: rightleftharpoons,
  rightrightarrows: rightrightarrows,
  rightsquigarrow: rightsquigarrow,
  RightTeeArrow: RightTeeArrow,
  RightTee: RightTee,
  RightTeeVector: RightTeeVector,
  rightthreetimes: rightthreetimes,
  RightTriangleBar: RightTriangleBar,
  RightTriangle: RightTriangle,
  RightTriangleEqual: RightTriangleEqual,
  RightUpDownVector: RightUpDownVector,
  RightUpTeeVector: RightUpTeeVector,
  RightUpVectorBar: RightUpVectorBar,
  RightUpVector: RightUpVector,
  RightVectorBar: RightVectorBar,
  RightVector: RightVector,
  ring: ring,
  risingdotseq: risingdotseq,
  rlarr: rlarr,
  rlhar: rlhar,
  rlm: rlm,
  rmoustache: rmoustache,
  rmoust: rmoust,
  rnmid: rnmid,
  roang: roang,
  roarr: roarr,
  robrk: robrk,
  ropar: ropar,
  ropf: ropf,
  Ropf: Ropf,
  roplus: roplus,
  rotimes: rotimes,
  RoundImplies: RoundImplies,
  rpar: rpar,
  rpargt: rpargt,
  rppolint: rppolint,
  rrarr: rrarr,
  Rrightarrow: Rrightarrow,
  rsaquo: rsaquo,
  rscr: rscr,
  Rscr: Rscr,
  rsh: rsh,
  Rsh: Rsh,
  rsqb: rsqb,
  rsquo: rsquo,
  rsquor: rsquor,
  rthree: rthree,
  rtimes: rtimes,
  rtri: rtri,
  rtrie: rtrie,
  rtrif: rtrif,
  rtriltri: rtriltri,
  RuleDelayed: RuleDelayed,
  ruluhar: ruluhar,
  rx: rx,
  Sacute: Sacute,
  sacute: sacute,
  sbquo: sbquo,
  scap: scap,
  Scaron: Scaron,
  scaron: scaron,
  Sc: Sc,
  sc: sc,
  sccue: sccue,
  sce: sce,
  scE: scE,
  Scedil: Scedil,
  scedil: scedil,
  Scirc: Scirc,
  scirc: scirc,
  scnap: scnap,
  scnE: scnE,
  scnsim: scnsim,
  scpolint: scpolint,
  scsim: scsim,
  Scy: Scy,
  scy: scy,
  sdotb: sdotb,
  sdot: sdot,
  sdote: sdote,
  searhk: searhk,
  searr: searr,
  seArr: seArr,
  searrow: searrow,
  sect: sect,
  semi: semi,
  seswar: seswar,
  setminus: setminus,
  setmn: setmn,
  sext: sext,
  Sfr: Sfr,
  sfr: sfr,
  sfrown: sfrown,
  sharp: sharp,
  SHCHcy: SHCHcy,
  shchcy: shchcy,
  SHcy: SHcy,
  shcy: shcy,
  ShortDownArrow: ShortDownArrow,
  ShortLeftArrow: ShortLeftArrow,
  shortmid: shortmid,
  shortparallel: shortparallel,
  ShortRightArrow: ShortRightArrow,
  ShortUpArrow: ShortUpArrow,
  shy: shy,
  Sigma: Sigma,
  sigma: sigma,
  sigmaf: sigmaf,
  sigmav: sigmav,
  sim: sim,
  simdot: simdot,
  sime: sime,
  simeq: simeq,
  simg: simg,
  simgE: simgE,
  siml: siml,
  simlE: simlE,
  simne: simne,
  simplus: simplus,
  simrarr: simrarr,
  slarr: slarr,
  SmallCircle: SmallCircle,
  smallsetminus: smallsetminus,
  smashp: smashp,
  smeparsl: smeparsl,
  smid: smid,
  smile: smile,
  smt: smt,
  smte: smte,
  smtes: smtes,
  SOFTcy: SOFTcy,
  softcy: softcy,
  solbar: solbar,
  solb: solb,
  sol: sol,
  Sopf: Sopf,
  sopf: sopf,
  spades: spades,
  spadesuit: spadesuit,
  spar: spar,
  sqcap: sqcap,
  sqcaps: sqcaps,
  sqcup: sqcup,
  sqcups: sqcups,
  Sqrt: Sqrt,
  sqsub: sqsub,
  sqsube: sqsube,
  sqsubset: sqsubset,
  sqsubseteq: sqsubseteq,
  sqsup: sqsup,
  sqsupe: sqsupe,
  sqsupset: sqsupset,
  sqsupseteq: sqsupseteq,
  square: square,
  Square: Square,
  SquareIntersection: SquareIntersection,
  SquareSubset: SquareSubset,
  SquareSubsetEqual: SquareSubsetEqual,
  SquareSuperset: SquareSuperset,
  SquareSupersetEqual: SquareSupersetEqual,
  SquareUnion: SquareUnion,
  squarf: squarf,
  squ: squ,
  squf: squf,
  srarr: srarr,
  Sscr: Sscr,
  sscr: sscr,
  ssetmn: ssetmn,
  ssmile: ssmile,
  sstarf: sstarf,
  Star: Star,
  star: star,
  starf: starf,
  straightepsilon: straightepsilon,
  straightphi: straightphi,
  strns: strns,
  sub: sub,
  Sub: Sub,
  subdot: subdot,
  subE: subE,
  sube: sube,
  subedot: subedot,
  submult: submult,
  subnE: subnE,
  subne: subne,
  subplus: subplus,
  subrarr: subrarr,
  subset: subset,
  Subset: Subset,
  subseteq: subseteq,
  subseteqq: subseteqq,
  SubsetEqual: SubsetEqual,
  subsetneq: subsetneq,
  subsetneqq: subsetneqq,
  subsim: subsim,
  subsub: subsub,
  subsup: subsup,
  succapprox: succapprox,
  succ: succ,
  succcurlyeq: succcurlyeq,
  Succeeds: Succeeds,
  SucceedsEqual: SucceedsEqual,
  SucceedsSlantEqual: SucceedsSlantEqual,
  SucceedsTilde: SucceedsTilde,
  succeq: succeq,
  succnapprox: succnapprox,
  succneqq: succneqq,
  succnsim: succnsim,
  succsim: succsim,
  SuchThat: SuchThat,
  sum: sum,
  Sum: Sum,
  sung: sung,
  sup1: sup1,
  sup2: sup2,
  sup3: sup3,
  sup: sup,
  Sup: Sup,
  supdot: supdot,
  supdsub: supdsub,
  supE: supE,
  supe: supe,
  supedot: supedot,
  Superset: Superset,
  SupersetEqual: SupersetEqual,
  suphsol: suphsol,
  suphsub: suphsub,
  suplarr: suplarr,
  supmult: supmult,
  supnE: supnE,
  supne: supne,
  supplus: supplus,
  supset: supset,
  Supset: Supset,
  supseteq: supseteq,
  supseteqq: supseteqq,
  supsetneq: supsetneq,
  supsetneqq: supsetneqq,
  supsim: supsim,
  supsub: supsub,
  supsup: supsup,
  swarhk: swarhk,
  swarr: swarr,
  swArr: swArr,
  swarrow: swarrow,
  swnwar: swnwar,
  szlig: szlig,
  Tab: Tab,
  target: target,
  Tau: Tau,
  tau: tau,
  tbrk: tbrk,
  Tcaron: Tcaron,
  tcaron: tcaron,
  Tcedil: Tcedil,
  tcedil: tcedil,
  Tcy: Tcy,
  tcy: tcy,
  tdot: tdot,
  telrec: telrec,
  Tfr: Tfr,
  tfr: tfr,
  there4: there4,
  therefore: therefore,
  Therefore: Therefore,
  Theta: Theta,
  theta: theta,
  thetasym: thetasym,
  thetav: thetav,
  thickapprox: thickapprox,
  thicksim: thicksim,
  ThickSpace: ThickSpace,
  ThinSpace: ThinSpace,
  thinsp: thinsp,
  thkap: thkap,
  thksim: thksim,
  THORN: THORN,
  thorn: thorn,
  tilde: tilde,
  Tilde: Tilde,
  TildeEqual: TildeEqual,
  TildeFullEqual: TildeFullEqual,
  TildeTilde: TildeTilde,
  timesbar: timesbar,
  timesb: timesb,
  times: times,
  timesd: timesd,
  tint: tint,
  toea: toea,
  topbot: topbot,
  topcir: topcir,
  top: top,
  Topf: Topf,
  topf: topf,
  topfork: topfork,
  tosa: tosa,
  tprime: tprime,
  trade: trade,
  TRADE: TRADE,
  triangle: triangle,
  triangledown: triangledown,
  triangleleft: triangleleft,
  trianglelefteq: trianglelefteq,
  triangleq: triangleq,
  triangleright: triangleright,
  trianglerighteq: trianglerighteq,
  tridot: tridot,
  trie: trie,
  triminus: triminus,
  TripleDot: TripleDot,
  triplus: triplus,
  trisb: trisb,
  tritime: tritime,
  trpezium: trpezium,
  Tscr: Tscr,
  tscr: tscr,
  TScy: TScy,
  tscy: tscy,
  TSHcy: TSHcy,
  tshcy: tshcy,
  Tstrok: Tstrok,
  tstrok: tstrok,
  twixt: twixt,
  twoheadleftarrow: twoheadleftarrow,
  twoheadrightarrow: twoheadrightarrow,
  Uacute: Uacute,
  uacute: uacute,
  uarr: uarr,
  Uarr: Uarr,
  uArr: uArr,
  Uarrocir: Uarrocir,
  Ubrcy: Ubrcy,
  ubrcy: ubrcy,
  Ubreve: Ubreve,
  ubreve: ubreve,
  Ucirc: Ucirc,
  ucirc: ucirc,
  Ucy: Ucy,
  ucy: ucy,
  udarr: udarr,
  Udblac: Udblac,
  udblac: udblac,
  udhar: udhar,
  ufisht: ufisht,
  Ufr: Ufr,
  ufr: ufr,
  Ugrave: Ugrave,
  ugrave: ugrave,
  uHar: uHar,
  uharl: uharl,
  uharr: uharr,
  uhblk: uhblk,
  ulcorn: ulcorn,
  ulcorner: ulcorner,
  ulcrop: ulcrop,
  ultri: ultri,
  Umacr: Umacr,
  umacr: umacr,
  uml: uml,
  UnderBar: UnderBar,
  UnderBrace: UnderBrace,
  UnderBracket: UnderBracket,
  UnderParenthesis: UnderParenthesis,
  Union: Union,
  UnionPlus: UnionPlus,
  Uogon: Uogon,
  uogon: uogon,
  Uopf: Uopf,
  uopf: uopf,
  UpArrowBar: UpArrowBar,
  uparrow: uparrow,
  UpArrow: UpArrow,
  Uparrow: Uparrow,
  UpArrowDownArrow: UpArrowDownArrow,
  updownarrow: updownarrow,
  UpDownArrow: UpDownArrow,
  Updownarrow: Updownarrow,
  UpEquilibrium: UpEquilibrium,
  upharpoonleft: upharpoonleft,
  upharpoonright: upharpoonright,
  uplus: uplus,
  UpperLeftArrow: UpperLeftArrow,
  UpperRightArrow: UpperRightArrow,
  upsi: upsi,
  Upsi: Upsi,
  upsih: upsih,
  Upsilon: Upsilon,
  upsilon: upsilon,
  UpTeeArrow: UpTeeArrow,
  UpTee: UpTee,
  upuparrows: upuparrows,
  urcorn: urcorn,
  urcorner: urcorner,
  urcrop: urcrop,
  Uring: Uring,
  uring: uring,
  urtri: urtri,
  Uscr: Uscr,
  uscr: uscr,
  utdot: utdot,
  Utilde: Utilde,
  utilde: utilde,
  utri: utri,
  utrif: utrif,
  uuarr: uuarr,
  Uuml: Uuml,
  uuml: uuml,
  uwangle: uwangle,
  vangrt: vangrt,
  varepsilon: varepsilon,
  varkappa: varkappa,
  varnothing: varnothing,
  varphi: varphi,
  varpi: varpi,
  varpropto: varpropto,
  varr: varr,
  vArr: vArr,
  varrho: varrho,
  varsigma: varsigma,
  varsubsetneq: varsubsetneq,
  varsubsetneqq: varsubsetneqq,
  varsupsetneq: varsupsetneq,
  varsupsetneqq: varsupsetneqq,
  vartheta: vartheta,
  vartriangleleft: vartriangleleft,
  vartriangleright: vartriangleright,
  vBar: vBar,
  Vbar: Vbar,
  vBarv: vBarv,
  Vcy: Vcy,
  vcy: vcy,
  vdash: vdash,
  vDash: vDash,
  Vdash: Vdash,
  VDash: VDash,
  Vdashl: Vdashl,
  veebar: veebar,
  vee: vee,
  Vee: Vee,
  veeeq: veeeq,
  vellip: vellip,
  verbar: verbar,
  Verbar: Verbar,
  vert: vert,
  Vert: Vert,
  VerticalBar: VerticalBar,
  VerticalLine: VerticalLine,
  VerticalSeparator: VerticalSeparator,
  VerticalTilde: VerticalTilde,
  VeryThinSpace: VeryThinSpace,
  Vfr: Vfr,
  vfr: vfr,
  vltri: vltri,
  vnsub: vnsub,
  vnsup: vnsup,
  Vopf: Vopf,
  vopf: vopf,
  vprop: vprop,
  vrtri: vrtri,
  Vscr: Vscr,
  vscr: vscr,
  vsubnE: vsubnE,
  vsubne: vsubne,
  vsupnE: vsupnE,
  vsupne: vsupne,
  Vvdash: Vvdash,
  vzigzag: vzigzag,
  Wcirc: Wcirc,
  wcirc: wcirc,
  wedbar: wedbar,
  wedge: wedge,
  Wedge: Wedge,
  wedgeq: wedgeq,
  weierp: weierp,
  Wfr: Wfr,
  wfr: wfr,
  Wopf: Wopf,
  wopf: wopf,
  wp: wp,
  wr: wr,
  wreath: wreath,
  Wscr: Wscr,
  wscr: wscr,
  xcap: xcap,
  xcirc: xcirc,
  xcup: xcup,
  xdtri: xdtri,
  Xfr: Xfr,
  xfr: xfr,
  xharr: xharr,
  xhArr: xhArr,
  Xi: Xi,
  xi: xi,
  xlarr: xlarr,
  xlArr: xlArr,
  xmap: xmap,
  xnis: xnis,
  xodot: xodot,
  Xopf: Xopf,
  xopf: xopf,
  xoplus: xoplus,
  xotime: xotime,
  xrarr: xrarr,
  xrArr: xrArr,
  Xscr: Xscr,
  xscr: xscr,
  xsqcup: xsqcup,
  xuplus: xuplus,
  xutri: xutri,
  xvee: xvee,
  xwedge: xwedge,
  Yacute: Yacute,
  yacute: yacute,
  YAcy: YAcy,
  yacy: yacy,
  Ycirc: Ycirc,
  ycirc: ycirc,
  Ycy: Ycy,
  ycy: ycy,
  yen: yen,
  Yfr: Yfr,
  yfr: yfr,
  YIcy: YIcy,
  yicy: yicy,
  Yopf: Yopf,
  yopf: yopf,
  Yscr: Yscr,
  yscr: yscr,
  YUcy: YUcy,
  yucy: yucy,
  yuml: yuml,
  Yuml: Yuml,
  Zacute: Zacute,
  zacute: zacute,
  Zcaron: Zcaron,
  zcaron: zcaron,
  Zcy: Zcy,
  zcy: zcy,
  Zdot: Zdot,
  zdot: zdot,
  zeetrf: zeetrf,
  ZeroWidthSpace: ZeroWidthSpace,
  Zeta: Zeta,
  zeta: zeta,
  zfr: zfr,
  Zfr: Zfr,
  ZHcy: ZHcy,
  zhcy: zhcy,
  zigrarr: zigrarr,
  zopf: zopf,
  Zopf: Zopf,
  Zscr: Zscr,
  zscr: zscr,
  zwj: zwj,
  zwnj: zwnj
};

var entities$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Aacute: Aacute,
    aacute: aacute,
    Abreve: Abreve,
    abreve: abreve,
    ac: ac,
    acd: acd,
    acE: acE,
    Acirc: Acirc,
    acirc: acirc,
    acute: acute,
    Acy: Acy,
    acy: acy,
    AElig: AElig,
    aelig: aelig,
    af: af,
    Afr: Afr,
    afr: afr,
    Agrave: Agrave,
    agrave: agrave,
    alefsym: alefsym,
    aleph: aleph,
    Alpha: Alpha,
    alpha: alpha,
    Amacr: Amacr,
    amacr: amacr,
    amalg: amalg,
    amp: amp,
    AMP: AMP,
    andand: andand,
    And: And,
    and: and,
    andd: andd,
    andslope: andslope,
    andv: andv,
    ang: ang,
    ange: ange,
    angle: angle,
    angmsdaa: angmsdaa,
    angmsdab: angmsdab,
    angmsdac: angmsdac,
    angmsdad: angmsdad,
    angmsdae: angmsdae,
    angmsdaf: angmsdaf,
    angmsdag: angmsdag,
    angmsdah: angmsdah,
    angmsd: angmsd,
    angrt: angrt,
    angrtvb: angrtvb,
    angrtvbd: angrtvbd,
    angsph: angsph,
    angst: angst,
    angzarr: angzarr,
    Aogon: Aogon,
    aogon: aogon,
    Aopf: Aopf,
    aopf: aopf,
    apacir: apacir,
    ap: ap,
    apE: apE,
    ape: ape,
    apid: apid,
    apos: apos,
    ApplyFunction: ApplyFunction,
    approx: approx,
    approxeq: approxeq,
    Aring: Aring,
    aring: aring,
    Ascr: Ascr,
    ascr: ascr,
    Assign: Assign,
    ast: ast,
    asymp: asymp,
    asympeq: asympeq,
    Atilde: Atilde,
    atilde: atilde,
    Auml: Auml,
    auml: auml,
    awconint: awconint,
    awint: awint,
    backcong: backcong,
    backepsilon: backepsilon,
    backprime: backprime,
    backsim: backsim,
    backsimeq: backsimeq,
    Backslash: Backslash,
    Barv: Barv,
    barvee: barvee,
    barwed: barwed,
    Barwed: Barwed,
    barwedge: barwedge,
    bbrk: bbrk,
    bbrktbrk: bbrktbrk,
    bcong: bcong,
    Bcy: Bcy,
    bcy: bcy,
    bdquo: bdquo,
    becaus: becaus,
    because: because,
    Because: Because,
    bemptyv: bemptyv,
    bepsi: bepsi,
    bernou: bernou,
    Bernoullis: Bernoullis,
    Beta: Beta,
    beta: beta,
    beth: beth,
    between: between,
    Bfr: Bfr,
    bfr: bfr,
    bigcap: bigcap,
    bigcirc: bigcirc,
    bigcup: bigcup,
    bigodot: bigodot,
    bigoplus: bigoplus,
    bigotimes: bigotimes,
    bigsqcup: bigsqcup,
    bigstar: bigstar,
    bigtriangledown: bigtriangledown,
    bigtriangleup: bigtriangleup,
    biguplus: biguplus,
    bigvee: bigvee,
    bigwedge: bigwedge,
    bkarow: bkarow,
    blacklozenge: blacklozenge,
    blacksquare: blacksquare,
    blacktriangle: blacktriangle,
    blacktriangledown: blacktriangledown,
    blacktriangleleft: blacktriangleleft,
    blacktriangleright: blacktriangleright,
    blank: blank,
    blk12: blk12,
    blk14: blk14,
    blk34: blk34,
    block: block,
    bne: bne,
    bnequiv: bnequiv,
    bNot: bNot,
    bnot: bnot,
    Bopf: Bopf,
    bopf: bopf,
    bot: bot,
    bottom: bottom,
    bowtie: bowtie,
    boxbox: boxbox,
    boxdl: boxdl,
    boxdL: boxdL,
    boxDl: boxDl,
    boxDL: boxDL,
    boxdr: boxdr,
    boxdR: boxdR,
    boxDr: boxDr,
    boxDR: boxDR,
    boxh: boxh,
    boxH: boxH,
    boxhd: boxhd,
    boxHd: boxHd,
    boxhD: boxhD,
    boxHD: boxHD,
    boxhu: boxhu,
    boxHu: boxHu,
    boxhU: boxhU,
    boxHU: boxHU,
    boxminus: boxminus,
    boxplus: boxplus,
    boxtimes: boxtimes,
    boxul: boxul,
    boxuL: boxuL,
    boxUl: boxUl,
    boxUL: boxUL,
    boxur: boxur,
    boxuR: boxuR,
    boxUr: boxUr,
    boxUR: boxUR,
    boxv: boxv,
    boxV: boxV,
    boxvh: boxvh,
    boxvH: boxvH,
    boxVh: boxVh,
    boxVH: boxVH,
    boxvl: boxvl,
    boxvL: boxvL,
    boxVl: boxVl,
    boxVL: boxVL,
    boxvr: boxvr,
    boxvR: boxvR,
    boxVr: boxVr,
    boxVR: boxVR,
    bprime: bprime,
    breve: breve,
    Breve: Breve,
    brvbar: brvbar,
    bscr: bscr,
    Bscr: Bscr,
    bsemi: bsemi,
    bsim: bsim,
    bsime: bsime,
    bsolb: bsolb,
    bsol: bsol,
    bsolhsub: bsolhsub,
    bull: bull,
    bullet: bullet,
    bump: bump,
    bumpE: bumpE,
    bumpe: bumpe,
    Bumpeq: Bumpeq,
    bumpeq: bumpeq,
    Cacute: Cacute,
    cacute: cacute,
    capand: capand,
    capbrcup: capbrcup,
    capcap: capcap,
    cap: cap,
    Cap: Cap,
    capcup: capcup,
    capdot: capdot,
    CapitalDifferentialD: CapitalDifferentialD,
    caps: caps,
    caret: caret,
    caron: caron,
    Cayleys: Cayleys,
    ccaps: ccaps,
    Ccaron: Ccaron,
    ccaron: ccaron,
    Ccedil: Ccedil,
    ccedil: ccedil,
    Ccirc: Ccirc,
    ccirc: ccirc,
    Cconint: Cconint,
    ccups: ccups,
    ccupssm: ccupssm,
    Cdot: Cdot,
    cdot: cdot,
    cedil: cedil,
    Cedilla: Cedilla,
    cemptyv: cemptyv,
    cent: cent,
    centerdot: centerdot,
    CenterDot: CenterDot,
    cfr: cfr,
    Cfr: Cfr,
    CHcy: CHcy,
    chcy: chcy,
    check: check,
    checkmark: checkmark,
    Chi: Chi,
    chi: chi,
    circ: circ,
    circeq: circeq,
    circlearrowleft: circlearrowleft,
    circlearrowright: circlearrowright,
    circledast: circledast,
    circledcirc: circledcirc,
    circleddash: circleddash,
    CircleDot: CircleDot,
    circledR: circledR,
    circledS: circledS,
    CircleMinus: CircleMinus,
    CirclePlus: CirclePlus,
    CircleTimes: CircleTimes,
    cir: cir,
    cirE: cirE,
    cire: cire,
    cirfnint: cirfnint,
    cirmid: cirmid,
    cirscir: cirscir,
    ClockwiseContourIntegral: ClockwiseContourIntegral,
    CloseCurlyDoubleQuote: CloseCurlyDoubleQuote,
    CloseCurlyQuote: CloseCurlyQuote,
    clubs: clubs,
    clubsuit: clubsuit,
    colon: colon,
    Colon: Colon,
    Colone: Colone,
    colone: colone,
    coloneq: coloneq,
    comma: comma,
    commat: commat,
    comp: comp,
    compfn: compfn,
    complement: complement,
    complexes: complexes,
    cong: cong,
    congdot: congdot,
    Congruent: Congruent,
    conint: conint,
    Conint: Conint,
    ContourIntegral: ContourIntegral,
    copf: copf,
    Copf: Copf,
    coprod: coprod,
    Coproduct: Coproduct,
    copy: copy,
    COPY: COPY,
    copysr: copysr,
    CounterClockwiseContourIntegral: CounterClockwiseContourIntegral,
    crarr: crarr,
    cross: cross,
    Cross: Cross,
    Cscr: Cscr,
    cscr: cscr,
    csub: csub,
    csube: csube,
    csup: csup,
    csupe: csupe,
    ctdot: ctdot,
    cudarrl: cudarrl,
    cudarrr: cudarrr,
    cuepr: cuepr,
    cuesc: cuesc,
    cularr: cularr,
    cularrp: cularrp,
    cupbrcap: cupbrcap,
    cupcap: cupcap,
    CupCap: CupCap,
    cup: cup,
    Cup: Cup,
    cupcup: cupcup,
    cupdot: cupdot,
    cupor: cupor,
    cups: cups,
    curarr: curarr,
    curarrm: curarrm,
    curlyeqprec: curlyeqprec,
    curlyeqsucc: curlyeqsucc,
    curlyvee: curlyvee,
    curlywedge: curlywedge,
    curren: curren,
    curvearrowleft: curvearrowleft,
    curvearrowright: curvearrowright,
    cuvee: cuvee,
    cuwed: cuwed,
    cwconint: cwconint,
    cwint: cwint,
    cylcty: cylcty,
    dagger: dagger,
    Dagger: Dagger,
    daleth: daleth,
    darr: darr,
    Darr: Darr,
    dArr: dArr,
    dash: dash,
    Dashv: Dashv,
    dashv: dashv,
    dbkarow: dbkarow,
    dblac: dblac,
    Dcaron: Dcaron,
    dcaron: dcaron,
    Dcy: Dcy,
    dcy: dcy,
    ddagger: ddagger,
    ddarr: ddarr,
    DD: DD,
    dd: dd,
    DDotrahd: DDotrahd,
    ddotseq: ddotseq,
    deg: deg,
    Del: Del,
    Delta: Delta,
    delta: delta,
    demptyv: demptyv,
    dfisht: dfisht,
    Dfr: Dfr,
    dfr: dfr,
    dHar: dHar,
    dharl: dharl,
    dharr: dharr,
    DiacriticalAcute: DiacriticalAcute,
    DiacriticalDot: DiacriticalDot,
    DiacriticalDoubleAcute: DiacriticalDoubleAcute,
    DiacriticalGrave: DiacriticalGrave,
    DiacriticalTilde: DiacriticalTilde,
    diam: diam,
    diamond: diamond,
    Diamond: Diamond,
    diamondsuit: diamondsuit,
    diams: diams,
    die: die,
    DifferentialD: DifferentialD,
    digamma: digamma,
    disin: disin,
    div: div,
    divide: divide,
    divideontimes: divideontimes,
    divonx: divonx,
    DJcy: DJcy,
    djcy: djcy,
    dlcorn: dlcorn,
    dlcrop: dlcrop,
    dollar: dollar,
    Dopf: Dopf,
    dopf: dopf,
    Dot: Dot,
    dot: dot,
    DotDot: DotDot,
    doteq: doteq,
    doteqdot: doteqdot,
    DotEqual: DotEqual,
    dotminus: dotminus,
    dotplus: dotplus,
    dotsquare: dotsquare,
    doublebarwedge: doublebarwedge,
    DoubleContourIntegral: DoubleContourIntegral,
    DoubleDot: DoubleDot,
    DoubleDownArrow: DoubleDownArrow,
    DoubleLeftArrow: DoubleLeftArrow,
    DoubleLeftRightArrow: DoubleLeftRightArrow,
    DoubleLeftTee: DoubleLeftTee,
    DoubleLongLeftArrow: DoubleLongLeftArrow,
    DoubleLongLeftRightArrow: DoubleLongLeftRightArrow,
    DoubleLongRightArrow: DoubleLongRightArrow,
    DoubleRightArrow: DoubleRightArrow,
    DoubleRightTee: DoubleRightTee,
    DoubleUpArrow: DoubleUpArrow,
    DoubleUpDownArrow: DoubleUpDownArrow,
    DoubleVerticalBar: DoubleVerticalBar,
    DownArrowBar: DownArrowBar,
    downarrow: downarrow,
    DownArrow: DownArrow,
    Downarrow: Downarrow,
    DownArrowUpArrow: DownArrowUpArrow,
    DownBreve: DownBreve,
    downdownarrows: downdownarrows,
    downharpoonleft: downharpoonleft,
    downharpoonright: downharpoonright,
    DownLeftRightVector: DownLeftRightVector,
    DownLeftTeeVector: DownLeftTeeVector,
    DownLeftVectorBar: DownLeftVectorBar,
    DownLeftVector: DownLeftVector,
    DownRightTeeVector: DownRightTeeVector,
    DownRightVectorBar: DownRightVectorBar,
    DownRightVector: DownRightVector,
    DownTeeArrow: DownTeeArrow,
    DownTee: DownTee,
    drbkarow: drbkarow,
    drcorn: drcorn,
    drcrop: drcrop,
    Dscr: Dscr,
    dscr: dscr,
    DScy: DScy,
    dscy: dscy,
    dsol: dsol,
    Dstrok: Dstrok,
    dstrok: dstrok,
    dtdot: dtdot,
    dtri: dtri,
    dtrif: dtrif,
    duarr: duarr,
    duhar: duhar,
    dwangle: dwangle,
    DZcy: DZcy,
    dzcy: dzcy,
    dzigrarr: dzigrarr,
    Eacute: Eacute,
    eacute: eacute,
    easter: easter,
    Ecaron: Ecaron,
    ecaron: ecaron,
    Ecirc: Ecirc,
    ecirc: ecirc,
    ecir: ecir,
    ecolon: ecolon,
    Ecy: Ecy,
    ecy: ecy,
    eDDot: eDDot,
    Edot: Edot,
    edot: edot,
    eDot: eDot,
    ee: ee,
    efDot: efDot,
    Efr: Efr,
    efr: efr,
    eg: eg,
    Egrave: Egrave,
    egrave: egrave,
    egs: egs,
    egsdot: egsdot,
    el: el,
    Element: Element,
    elinters: elinters,
    ell: ell,
    els: els,
    elsdot: elsdot,
    Emacr: Emacr,
    emacr: emacr,
    empty: empty,
    emptyset: emptyset,
    EmptySmallSquare: EmptySmallSquare,
    emptyv: emptyv,
    EmptyVerySmallSquare: EmptyVerySmallSquare,
    emsp13: emsp13,
    emsp14: emsp14,
    emsp: emsp,
    ENG: ENG,
    eng: eng,
    ensp: ensp,
    Eogon: Eogon,
    eogon: eogon,
    Eopf: Eopf,
    eopf: eopf,
    epar: epar,
    eparsl: eparsl,
    eplus: eplus,
    epsi: epsi,
    Epsilon: Epsilon,
    epsilon: epsilon,
    epsiv: epsiv,
    eqcirc: eqcirc,
    eqcolon: eqcolon,
    eqsim: eqsim,
    eqslantgtr: eqslantgtr,
    eqslantless: eqslantless,
    Equal: Equal,
    equals: equals,
    EqualTilde: EqualTilde,
    equest: equest,
    Equilibrium: Equilibrium,
    equiv: equiv,
    equivDD: equivDD,
    eqvparsl: eqvparsl,
    erarr: erarr,
    erDot: erDot,
    escr: escr,
    Escr: Escr,
    esdot: esdot,
    Esim: Esim,
    esim: esim,
    Eta: Eta,
    eta: eta,
    ETH: ETH,
    eth: eth,
    Euml: Euml,
    euml: euml,
    euro: euro,
    excl: excl,
    exist: exist,
    Exists: Exists,
    expectation: expectation,
    exponentiale: exponentiale,
    ExponentialE: ExponentialE,
    fallingdotseq: fallingdotseq,
    Fcy: Fcy,
    fcy: fcy,
    female: female,
    ffilig: ffilig,
    fflig: fflig,
    ffllig: ffllig,
    Ffr: Ffr,
    ffr: ffr,
    filig: filig,
    FilledSmallSquare: FilledSmallSquare,
    FilledVerySmallSquare: FilledVerySmallSquare,
    fjlig: fjlig,
    flat: flat,
    fllig: fllig,
    fltns: fltns,
    fnof: fnof,
    Fopf: Fopf,
    fopf: fopf,
    forall: forall,
    ForAll: ForAll,
    fork: fork,
    forkv: forkv,
    Fouriertrf: Fouriertrf,
    fpartint: fpartint,
    frac12: frac12,
    frac13: frac13,
    frac14: frac14,
    frac15: frac15,
    frac16: frac16,
    frac18: frac18,
    frac23: frac23,
    frac25: frac25,
    frac34: frac34,
    frac35: frac35,
    frac38: frac38,
    frac45: frac45,
    frac56: frac56,
    frac58: frac58,
    frac78: frac78,
    frasl: frasl,
    frown: frown,
    fscr: fscr,
    Fscr: Fscr,
    gacute: gacute,
    Gamma: Gamma,
    gamma: gamma,
    Gammad: Gammad,
    gammad: gammad,
    gap: gap,
    Gbreve: Gbreve,
    gbreve: gbreve,
    Gcedil: Gcedil,
    Gcirc: Gcirc,
    gcirc: gcirc,
    Gcy: Gcy,
    gcy: gcy,
    Gdot: Gdot,
    gdot: gdot,
    ge: ge,
    gE: gE,
    gEl: gEl,
    gel: gel,
    geq: geq,
    geqq: geqq,
    geqslant: geqslant,
    gescc: gescc,
    ges: ges,
    gesdot: gesdot,
    gesdoto: gesdoto,
    gesdotol: gesdotol,
    gesl: gesl,
    gesles: gesles,
    Gfr: Gfr,
    gfr: gfr,
    gg: gg,
    Gg: Gg,
    ggg: ggg,
    gimel: gimel,
    GJcy: GJcy,
    gjcy: gjcy,
    gla: gla,
    gl: gl,
    glE: glE,
    glj: glj,
    gnap: gnap,
    gnapprox: gnapprox,
    gne: gne,
    gnE: gnE,
    gneq: gneq,
    gneqq: gneqq,
    gnsim: gnsim,
    Gopf: Gopf,
    gopf: gopf,
    grave: grave,
    GreaterEqual: GreaterEqual,
    GreaterEqualLess: GreaterEqualLess,
    GreaterFullEqual: GreaterFullEqual,
    GreaterGreater: GreaterGreater,
    GreaterLess: GreaterLess,
    GreaterSlantEqual: GreaterSlantEqual,
    GreaterTilde: GreaterTilde,
    Gscr: Gscr,
    gscr: gscr,
    gsim: gsim,
    gsime: gsime,
    gsiml: gsiml,
    gtcc: gtcc,
    gtcir: gtcir,
    gt: gt,
    GT: GT,
    Gt: Gt,
    gtdot: gtdot,
    gtlPar: gtlPar,
    gtquest: gtquest,
    gtrapprox: gtrapprox,
    gtrarr: gtrarr,
    gtrdot: gtrdot,
    gtreqless: gtreqless,
    gtreqqless: gtreqqless,
    gtrless: gtrless,
    gtrsim: gtrsim,
    gvertneqq: gvertneqq,
    gvnE: gvnE,
    Hacek: Hacek,
    hairsp: hairsp,
    half: half,
    hamilt: hamilt,
    HARDcy: HARDcy,
    hardcy: hardcy,
    harrcir: harrcir,
    harr: harr,
    hArr: hArr,
    harrw: harrw,
    Hat: Hat,
    hbar: hbar,
    Hcirc: Hcirc,
    hcirc: hcirc,
    hearts: hearts,
    heartsuit: heartsuit,
    hellip: hellip,
    hercon: hercon,
    hfr: hfr,
    Hfr: Hfr,
    HilbertSpace: HilbertSpace,
    hksearow: hksearow,
    hkswarow: hkswarow,
    hoarr: hoarr,
    homtht: homtht,
    hookleftarrow: hookleftarrow,
    hookrightarrow: hookrightarrow,
    hopf: hopf,
    Hopf: Hopf,
    horbar: horbar,
    HorizontalLine: HorizontalLine,
    hscr: hscr,
    Hscr: Hscr,
    hslash: hslash,
    Hstrok: Hstrok,
    hstrok: hstrok,
    HumpDownHump: HumpDownHump,
    HumpEqual: HumpEqual,
    hybull: hybull,
    hyphen: hyphen,
    Iacute: Iacute,
    iacute: iacute,
    ic: ic,
    Icirc: Icirc,
    icirc: icirc,
    Icy: Icy,
    icy: icy,
    Idot: Idot,
    IEcy: IEcy,
    iecy: iecy,
    iexcl: iexcl,
    iff: iff,
    ifr: ifr,
    Ifr: Ifr,
    Igrave: Igrave,
    igrave: igrave,
    ii: ii,
    iiiint: iiiint,
    iiint: iiint,
    iinfin: iinfin,
    iiota: iiota,
    IJlig: IJlig,
    ijlig: ijlig,
    Imacr: Imacr,
    imacr: imacr,
    image: image,
    ImaginaryI: ImaginaryI,
    imagline: imagline,
    imagpart: imagpart,
    imath: imath,
    Im: Im,
    imof: imof,
    imped: imped,
    Implies: Implies,
    incare: incare,
    infin: infin,
    infintie: infintie,
    inodot: inodot,
    intcal: intcal,
    int: int,
    Int: Int,
    integers: integers,
    Integral: Integral,
    intercal: intercal,
    Intersection: Intersection,
    intlarhk: intlarhk,
    intprod: intprod,
    InvisibleComma: InvisibleComma,
    InvisibleTimes: InvisibleTimes,
    IOcy: IOcy,
    iocy: iocy,
    Iogon: Iogon,
    iogon: iogon,
    Iopf: Iopf,
    iopf: iopf,
    Iota: Iota,
    iota: iota,
    iprod: iprod,
    iquest: iquest,
    iscr: iscr,
    Iscr: Iscr,
    isin: isin,
    isindot: isindot,
    isinE: isinE,
    isins: isins,
    isinsv: isinsv,
    isinv: isinv,
    it: it,
    Itilde: Itilde,
    itilde: itilde,
    Iukcy: Iukcy,
    iukcy: iukcy,
    Iuml: Iuml,
    iuml: iuml,
    Jcirc: Jcirc,
    jcirc: jcirc,
    Jcy: Jcy,
    jcy: jcy,
    Jfr: Jfr,
    jfr: jfr,
    jmath: jmath,
    Jopf: Jopf,
    jopf: jopf,
    Jscr: Jscr,
    jscr: jscr,
    Jsercy: Jsercy,
    jsercy: jsercy,
    Jukcy: Jukcy,
    jukcy: jukcy,
    Kappa: Kappa,
    kappa: kappa,
    kappav: kappav,
    Kcedil: Kcedil,
    kcedil: kcedil,
    Kcy: Kcy,
    kcy: kcy,
    Kfr: Kfr,
    kfr: kfr,
    kgreen: kgreen,
    KHcy: KHcy,
    khcy: khcy,
    KJcy: KJcy,
    kjcy: kjcy,
    Kopf: Kopf,
    kopf: kopf,
    Kscr: Kscr,
    kscr: kscr,
    lAarr: lAarr,
    Lacute: Lacute,
    lacute: lacute,
    laemptyv: laemptyv,
    lagran: lagran,
    Lambda: Lambda,
    lambda: lambda,
    lang: lang,
    Lang: Lang,
    langd: langd,
    langle: langle,
    lap: lap,
    Laplacetrf: Laplacetrf,
    laquo: laquo,
    larrb: larrb,
    larrbfs: larrbfs,
    larr: larr,
    Larr: Larr,
    lArr: lArr,
    larrfs: larrfs,
    larrhk: larrhk,
    larrlp: larrlp,
    larrpl: larrpl,
    larrsim: larrsim,
    larrtl: larrtl,
    latail: latail,
    lAtail: lAtail,
    lat: lat,
    late: late,
    lates: lates,
    lbarr: lbarr,
    lBarr: lBarr,
    lbbrk: lbbrk,
    lbrace: lbrace,
    lbrack: lbrack,
    lbrke: lbrke,
    lbrksld: lbrksld,
    lbrkslu: lbrkslu,
    Lcaron: Lcaron,
    lcaron: lcaron,
    Lcedil: Lcedil,
    lcedil: lcedil,
    lceil: lceil,
    lcub: lcub,
    Lcy: Lcy,
    lcy: lcy,
    ldca: ldca,
    ldquo: ldquo,
    ldquor: ldquor,
    ldrdhar: ldrdhar,
    ldrushar: ldrushar,
    ldsh: ldsh,
    le: le,
    lE: lE,
    LeftAngleBracket: LeftAngleBracket,
    LeftArrowBar: LeftArrowBar,
    leftarrow: leftarrow,
    LeftArrow: LeftArrow,
    Leftarrow: Leftarrow,
    LeftArrowRightArrow: LeftArrowRightArrow,
    leftarrowtail: leftarrowtail,
    LeftCeiling: LeftCeiling,
    LeftDoubleBracket: LeftDoubleBracket,
    LeftDownTeeVector: LeftDownTeeVector,
    LeftDownVectorBar: LeftDownVectorBar,
    LeftDownVector: LeftDownVector,
    LeftFloor: LeftFloor,
    leftharpoondown: leftharpoondown,
    leftharpoonup: leftharpoonup,
    leftleftarrows: leftleftarrows,
    leftrightarrow: leftrightarrow,
    LeftRightArrow: LeftRightArrow,
    Leftrightarrow: Leftrightarrow,
    leftrightarrows: leftrightarrows,
    leftrightharpoons: leftrightharpoons,
    leftrightsquigarrow: leftrightsquigarrow,
    LeftRightVector: LeftRightVector,
    LeftTeeArrow: LeftTeeArrow,
    LeftTee: LeftTee,
    LeftTeeVector: LeftTeeVector,
    leftthreetimes: leftthreetimes,
    LeftTriangleBar: LeftTriangleBar,
    LeftTriangle: LeftTriangle,
    LeftTriangleEqual: LeftTriangleEqual,
    LeftUpDownVector: LeftUpDownVector,
    LeftUpTeeVector: LeftUpTeeVector,
    LeftUpVectorBar: LeftUpVectorBar,
    LeftUpVector: LeftUpVector,
    LeftVectorBar: LeftVectorBar,
    LeftVector: LeftVector,
    lEg: lEg,
    leg: leg,
    leq: leq,
    leqq: leqq,
    leqslant: leqslant,
    lescc: lescc,
    les: les,
    lesdot: lesdot,
    lesdoto: lesdoto,
    lesdotor: lesdotor,
    lesg: lesg,
    lesges: lesges,
    lessapprox: lessapprox,
    lessdot: lessdot,
    lesseqgtr: lesseqgtr,
    lesseqqgtr: lesseqqgtr,
    LessEqualGreater: LessEqualGreater,
    LessFullEqual: LessFullEqual,
    LessGreater: LessGreater,
    lessgtr: lessgtr,
    LessLess: LessLess,
    lesssim: lesssim,
    LessSlantEqual: LessSlantEqual,
    LessTilde: LessTilde,
    lfisht: lfisht,
    lfloor: lfloor,
    Lfr: Lfr,
    lfr: lfr,
    lg: lg,
    lgE: lgE,
    lHar: lHar,
    lhard: lhard,
    lharu: lharu,
    lharul: lharul,
    lhblk: lhblk,
    LJcy: LJcy,
    ljcy: ljcy,
    llarr: llarr,
    ll: ll,
    Ll: Ll,
    llcorner: llcorner,
    Lleftarrow: Lleftarrow,
    llhard: llhard,
    lltri: lltri,
    Lmidot: Lmidot,
    lmidot: lmidot,
    lmoustache: lmoustache,
    lmoust: lmoust,
    lnap: lnap,
    lnapprox: lnapprox,
    lne: lne,
    lnE: lnE,
    lneq: lneq,
    lneqq: lneqq,
    lnsim: lnsim,
    loang: loang,
    loarr: loarr,
    lobrk: lobrk,
    longleftarrow: longleftarrow,
    LongLeftArrow: LongLeftArrow,
    Longleftarrow: Longleftarrow,
    longleftrightarrow: longleftrightarrow,
    LongLeftRightArrow: LongLeftRightArrow,
    Longleftrightarrow: Longleftrightarrow,
    longmapsto: longmapsto,
    longrightarrow: longrightarrow,
    LongRightArrow: LongRightArrow,
    Longrightarrow: Longrightarrow,
    looparrowleft: looparrowleft,
    looparrowright: looparrowright,
    lopar: lopar,
    Lopf: Lopf,
    lopf: lopf,
    loplus: loplus,
    lotimes: lotimes,
    lowast: lowast,
    lowbar: lowbar,
    LowerLeftArrow: LowerLeftArrow,
    LowerRightArrow: LowerRightArrow,
    loz: loz,
    lozenge: lozenge,
    lozf: lozf,
    lpar: lpar,
    lparlt: lparlt,
    lrarr: lrarr,
    lrcorner: lrcorner,
    lrhar: lrhar,
    lrhard: lrhard,
    lrm: lrm,
    lrtri: lrtri,
    lsaquo: lsaquo,
    lscr: lscr,
    Lscr: Lscr,
    lsh: lsh,
    Lsh: Lsh,
    lsim: lsim,
    lsime: lsime,
    lsimg: lsimg,
    lsqb: lsqb,
    lsquo: lsquo,
    lsquor: lsquor,
    Lstrok: Lstrok,
    lstrok: lstrok,
    ltcc: ltcc,
    ltcir: ltcir,
    lt: lt,
    LT: LT,
    Lt: Lt,
    ltdot: ltdot,
    lthree: lthree,
    ltimes: ltimes,
    ltlarr: ltlarr,
    ltquest: ltquest,
    ltri: ltri,
    ltrie: ltrie,
    ltrif: ltrif,
    ltrPar: ltrPar,
    lurdshar: lurdshar,
    luruhar: luruhar,
    lvertneqq: lvertneqq,
    lvnE: lvnE,
    macr: macr,
    male: male,
    malt: malt,
    maltese: maltese,
    map: map,
    mapsto: mapsto,
    mapstodown: mapstodown,
    mapstoleft: mapstoleft,
    mapstoup: mapstoup,
    marker: marker,
    mcomma: mcomma,
    Mcy: Mcy,
    mcy: mcy,
    mdash: mdash,
    mDDot: mDDot,
    measuredangle: measuredangle,
    MediumSpace: MediumSpace,
    Mellintrf: Mellintrf,
    Mfr: Mfr,
    mfr: mfr,
    mho: mho,
    micro: micro,
    midast: midast,
    midcir: midcir,
    mid: mid,
    middot: middot,
    minusb: minusb,
    minus: minus,
    minusd: minusd,
    minusdu: minusdu,
    MinusPlus: MinusPlus,
    mlcp: mlcp,
    mldr: mldr,
    mnplus: mnplus,
    models: models,
    Mopf: Mopf,
    mopf: mopf,
    mp: mp,
    mscr: mscr,
    Mscr: Mscr,
    mstpos: mstpos,
    Mu: Mu,
    mu: mu,
    multimap: multimap,
    mumap: mumap,
    nabla: nabla,
    Nacute: Nacute,
    nacute: nacute,
    nang: nang,
    nap: nap,
    napE: napE,
    napid: napid,
    napos: napos,
    napprox: napprox,
    natural: natural,
    naturals: naturals,
    natur: natur,
    nbsp: nbsp,
    nbump: nbump,
    nbumpe: nbumpe,
    ncap: ncap,
    Ncaron: Ncaron,
    ncaron: ncaron,
    Ncedil: Ncedil,
    ncedil: ncedil,
    ncong: ncong,
    ncongdot: ncongdot,
    ncup: ncup,
    Ncy: Ncy,
    ncy: ncy,
    ndash: ndash,
    nearhk: nearhk,
    nearr: nearr,
    neArr: neArr,
    nearrow: nearrow,
    ne: ne,
    nedot: nedot,
    NegativeMediumSpace: NegativeMediumSpace,
    NegativeThickSpace: NegativeThickSpace,
    NegativeThinSpace: NegativeThinSpace,
    NegativeVeryThinSpace: NegativeVeryThinSpace,
    nequiv: nequiv,
    nesear: nesear,
    nesim: nesim,
    NestedGreaterGreater: NestedGreaterGreater,
    NestedLessLess: NestedLessLess,
    NewLine: NewLine,
    nexist: nexist,
    nexists: nexists,
    Nfr: Nfr,
    nfr: nfr,
    ngE: ngE,
    nge: nge,
    ngeq: ngeq,
    ngeqq: ngeqq,
    ngeqslant: ngeqslant,
    nges: nges,
    nGg: nGg,
    ngsim: ngsim,
    nGt: nGt,
    ngt: ngt,
    ngtr: ngtr,
    nGtv: nGtv,
    nharr: nharr,
    nhArr: nhArr,
    nhpar: nhpar,
    ni: ni,
    nis: nis,
    nisd: nisd,
    niv: niv,
    NJcy: NJcy,
    njcy: njcy,
    nlarr: nlarr,
    nlArr: nlArr,
    nldr: nldr,
    nlE: nlE,
    nle: nle,
    nleftarrow: nleftarrow,
    nLeftarrow: nLeftarrow,
    nleftrightarrow: nleftrightarrow,
    nLeftrightarrow: nLeftrightarrow,
    nleq: nleq,
    nleqq: nleqq,
    nleqslant: nleqslant,
    nles: nles,
    nless: nless,
    nLl: nLl,
    nlsim: nlsim,
    nLt: nLt,
    nlt: nlt,
    nltri: nltri,
    nltrie: nltrie,
    nLtv: nLtv,
    nmid: nmid,
    NoBreak: NoBreak,
    NonBreakingSpace: NonBreakingSpace,
    nopf: nopf,
    Nopf: Nopf,
    Not: Not,
    not: not,
    NotCongruent: NotCongruent,
    NotCupCap: NotCupCap,
    NotDoubleVerticalBar: NotDoubleVerticalBar,
    NotElement: NotElement,
    NotEqual: NotEqual,
    NotEqualTilde: NotEqualTilde,
    NotExists: NotExists,
    NotGreater: NotGreater,
    NotGreaterEqual: NotGreaterEqual,
    NotGreaterFullEqual: NotGreaterFullEqual,
    NotGreaterGreater: NotGreaterGreater,
    NotGreaterLess: NotGreaterLess,
    NotGreaterSlantEqual: NotGreaterSlantEqual,
    NotGreaterTilde: NotGreaterTilde,
    NotHumpDownHump: NotHumpDownHump,
    NotHumpEqual: NotHumpEqual,
    notin: notin,
    notindot: notindot,
    notinE: notinE,
    notinva: notinva,
    notinvb: notinvb,
    notinvc: notinvc,
    NotLeftTriangleBar: NotLeftTriangleBar,
    NotLeftTriangle: NotLeftTriangle,
    NotLeftTriangleEqual: NotLeftTriangleEqual,
    NotLess: NotLess,
    NotLessEqual: NotLessEqual,
    NotLessGreater: NotLessGreater,
    NotLessLess: NotLessLess,
    NotLessSlantEqual: NotLessSlantEqual,
    NotLessTilde: NotLessTilde,
    NotNestedGreaterGreater: NotNestedGreaterGreater,
    NotNestedLessLess: NotNestedLessLess,
    notni: notni,
    notniva: notniva,
    notnivb: notnivb,
    notnivc: notnivc,
    NotPrecedes: NotPrecedes,
    NotPrecedesEqual: NotPrecedesEqual,
    NotPrecedesSlantEqual: NotPrecedesSlantEqual,
    NotReverseElement: NotReverseElement,
    NotRightTriangleBar: NotRightTriangleBar,
    NotRightTriangle: NotRightTriangle,
    NotRightTriangleEqual: NotRightTriangleEqual,
    NotSquareSubset: NotSquareSubset,
    NotSquareSubsetEqual: NotSquareSubsetEqual,
    NotSquareSuperset: NotSquareSuperset,
    NotSquareSupersetEqual: NotSquareSupersetEqual,
    NotSubset: NotSubset,
    NotSubsetEqual: NotSubsetEqual,
    NotSucceeds: NotSucceeds,
    NotSucceedsEqual: NotSucceedsEqual,
    NotSucceedsSlantEqual: NotSucceedsSlantEqual,
    NotSucceedsTilde: NotSucceedsTilde,
    NotSuperset: NotSuperset,
    NotSupersetEqual: NotSupersetEqual,
    NotTilde: NotTilde,
    NotTildeEqual: NotTildeEqual,
    NotTildeFullEqual: NotTildeFullEqual,
    NotTildeTilde: NotTildeTilde,
    NotVerticalBar: NotVerticalBar,
    nparallel: nparallel,
    npar: npar,
    nparsl: nparsl,
    npart: npart,
    npolint: npolint,
    npr: npr,
    nprcue: nprcue,
    nprec: nprec,
    npreceq: npreceq,
    npre: npre,
    nrarrc: nrarrc,
    nrarr: nrarr,
    nrArr: nrArr,
    nrarrw: nrarrw,
    nrightarrow: nrightarrow,
    nRightarrow: nRightarrow,
    nrtri: nrtri,
    nrtrie: nrtrie,
    nsc: nsc,
    nsccue: nsccue,
    nsce: nsce,
    Nscr: Nscr,
    nscr: nscr,
    nshortmid: nshortmid,
    nshortparallel: nshortparallel,
    nsim: nsim,
    nsime: nsime,
    nsimeq: nsimeq,
    nsmid: nsmid,
    nspar: nspar,
    nsqsube: nsqsube,
    nsqsupe: nsqsupe,
    nsub: nsub,
    nsubE: nsubE,
    nsube: nsube,
    nsubset: nsubset,
    nsubseteq: nsubseteq,
    nsubseteqq: nsubseteqq,
    nsucc: nsucc,
    nsucceq: nsucceq,
    nsup: nsup,
    nsupE: nsupE,
    nsupe: nsupe,
    nsupset: nsupset,
    nsupseteq: nsupseteq,
    nsupseteqq: nsupseteqq,
    ntgl: ntgl,
    Ntilde: Ntilde,
    ntilde: ntilde,
    ntlg: ntlg,
    ntriangleleft: ntriangleleft,
    ntrianglelefteq: ntrianglelefteq,
    ntriangleright: ntriangleright,
    ntrianglerighteq: ntrianglerighteq,
    Nu: Nu,
    nu: nu,
    num: num,
    numero: numero,
    numsp: numsp,
    nvap: nvap,
    nvdash: nvdash,
    nvDash: nvDash,
    nVdash: nVdash,
    nVDash: nVDash,
    nvge: nvge,
    nvgt: nvgt,
    nvHarr: nvHarr,
    nvinfin: nvinfin,
    nvlArr: nvlArr,
    nvle: nvle,
    nvlt: nvlt,
    nvltrie: nvltrie,
    nvrArr: nvrArr,
    nvrtrie: nvrtrie,
    nvsim: nvsim,
    nwarhk: nwarhk,
    nwarr: nwarr,
    nwArr: nwArr,
    nwarrow: nwarrow,
    nwnear: nwnear,
    Oacute: Oacute,
    oacute: oacute,
    oast: oast,
    Ocirc: Ocirc,
    ocirc: ocirc,
    ocir: ocir,
    Ocy: Ocy,
    ocy: ocy,
    odash: odash,
    Odblac: Odblac,
    odblac: odblac,
    odiv: odiv,
    odot: odot,
    odsold: odsold,
    OElig: OElig,
    oelig: oelig,
    ofcir: ofcir,
    Ofr: Ofr,
    ofr: ofr,
    ogon: ogon,
    Ograve: Ograve,
    ograve: ograve,
    ogt: ogt,
    ohbar: ohbar,
    ohm: ohm,
    oint: oint,
    olarr: olarr,
    olcir: olcir,
    olcross: olcross,
    oline: oline,
    olt: olt,
    Omacr: Omacr,
    omacr: omacr,
    Omega: Omega,
    omega: omega,
    Omicron: Omicron,
    omicron: omicron,
    omid: omid,
    ominus: ominus,
    Oopf: Oopf,
    oopf: oopf,
    opar: opar,
    OpenCurlyDoubleQuote: OpenCurlyDoubleQuote,
    OpenCurlyQuote: OpenCurlyQuote,
    operp: operp,
    oplus: oplus,
    orarr: orarr,
    Or: Or,
    or: or,
    ord: ord,
    order: order,
    orderof: orderof,
    ordf: ordf,
    ordm: ordm,
    origof: origof,
    oror: oror,
    orslope: orslope,
    orv: orv,
    oS: oS,
    Oscr: Oscr,
    oscr: oscr,
    Oslash: Oslash,
    oslash: oslash,
    osol: osol,
    Otilde: Otilde,
    otilde: otilde,
    otimesas: otimesas,
    Otimes: Otimes,
    otimes: otimes,
    Ouml: Ouml,
    ouml: ouml,
    ovbar: ovbar,
    OverBar: OverBar,
    OverBrace: OverBrace,
    OverBracket: OverBracket,
    OverParenthesis: OverParenthesis,
    para: para,
    parallel: parallel,
    par: par,
    parsim: parsim,
    parsl: parsl,
    part: part,
    PartialD: PartialD,
    Pcy: Pcy,
    pcy: pcy,
    percnt: percnt,
    period: period,
    permil: permil,
    perp: perp,
    pertenk: pertenk,
    Pfr: Pfr,
    pfr: pfr,
    Phi: Phi,
    phi: phi,
    phiv: phiv,
    phmmat: phmmat,
    phone: phone,
    Pi: Pi,
    pi: pi,
    pitchfork: pitchfork,
    piv: piv,
    planck: planck,
    planckh: planckh,
    plankv: plankv,
    plusacir: plusacir,
    plusb: plusb,
    pluscir: pluscir,
    plus: plus,
    plusdo: plusdo,
    plusdu: plusdu,
    pluse: pluse,
    PlusMinus: PlusMinus,
    plusmn: plusmn,
    plussim: plussim,
    plustwo: plustwo,
    pm: pm,
    Poincareplane: Poincareplane,
    pointint: pointint,
    popf: popf,
    Popf: Popf,
    pound: pound,
    prap: prap,
    Pr: Pr,
    pr: pr,
    prcue: prcue,
    precapprox: precapprox,
    prec: prec,
    preccurlyeq: preccurlyeq,
    Precedes: Precedes,
    PrecedesEqual: PrecedesEqual,
    PrecedesSlantEqual: PrecedesSlantEqual,
    PrecedesTilde: PrecedesTilde,
    preceq: preceq,
    precnapprox: precnapprox,
    precneqq: precneqq,
    precnsim: precnsim,
    pre: pre,
    prE: prE,
    precsim: precsim,
    prime: prime,
    Prime: Prime,
    primes: primes,
    prnap: prnap,
    prnE: prnE,
    prnsim: prnsim,
    prod: prod,
    Product: Product,
    profalar: profalar,
    profline: profline,
    profsurf: profsurf,
    prop: prop,
    Proportional: Proportional,
    Proportion: Proportion,
    propto: propto,
    prsim: prsim,
    prurel: prurel,
    Pscr: Pscr,
    pscr: pscr,
    Psi: Psi,
    psi: psi,
    puncsp: puncsp,
    Qfr: Qfr,
    qfr: qfr,
    qint: qint,
    qopf: qopf,
    Qopf: Qopf,
    qprime: qprime,
    Qscr: Qscr,
    qscr: qscr,
    quaternions: quaternions,
    quatint: quatint,
    quest: quest,
    questeq: questeq,
    quot: quot,
    QUOT: QUOT,
    rAarr: rAarr,
    race: race,
    Racute: Racute,
    racute: racute,
    radic: radic,
    raemptyv: raemptyv,
    rang: rang,
    Rang: Rang,
    rangd: rangd,
    range: range,
    rangle: rangle,
    raquo: raquo,
    rarrap: rarrap,
    rarrb: rarrb,
    rarrbfs: rarrbfs,
    rarrc: rarrc,
    rarr: rarr,
    Rarr: Rarr,
    rArr: rArr,
    rarrfs: rarrfs,
    rarrhk: rarrhk,
    rarrlp: rarrlp,
    rarrpl: rarrpl,
    rarrsim: rarrsim,
    Rarrtl: Rarrtl,
    rarrtl: rarrtl,
    rarrw: rarrw,
    ratail: ratail,
    rAtail: rAtail,
    ratio: ratio,
    rationals: rationals,
    rbarr: rbarr,
    rBarr: rBarr,
    RBarr: RBarr,
    rbbrk: rbbrk,
    rbrace: rbrace,
    rbrack: rbrack,
    rbrke: rbrke,
    rbrksld: rbrksld,
    rbrkslu: rbrkslu,
    Rcaron: Rcaron,
    rcaron: rcaron,
    Rcedil: Rcedil,
    rcedil: rcedil,
    rceil: rceil,
    rcub: rcub,
    Rcy: Rcy,
    rcy: rcy,
    rdca: rdca,
    rdldhar: rdldhar,
    rdquo: rdquo,
    rdquor: rdquor,
    rdsh: rdsh,
    real: real,
    realine: realine,
    realpart: realpart,
    reals: reals,
    Re: Re,
    rect: rect,
    reg: reg,
    REG: REG,
    ReverseElement: ReverseElement,
    ReverseEquilibrium: ReverseEquilibrium,
    ReverseUpEquilibrium: ReverseUpEquilibrium,
    rfisht: rfisht,
    rfloor: rfloor,
    rfr: rfr,
    Rfr: Rfr,
    rHar: rHar,
    rhard: rhard,
    rharu: rharu,
    rharul: rharul,
    Rho: Rho,
    rho: rho,
    rhov: rhov,
    RightAngleBracket: RightAngleBracket,
    RightArrowBar: RightArrowBar,
    rightarrow: rightarrow,
    RightArrow: RightArrow,
    Rightarrow: Rightarrow,
    RightArrowLeftArrow: RightArrowLeftArrow,
    rightarrowtail: rightarrowtail,
    RightCeiling: RightCeiling,
    RightDoubleBracket: RightDoubleBracket,
    RightDownTeeVector: RightDownTeeVector,
    RightDownVectorBar: RightDownVectorBar,
    RightDownVector: RightDownVector,
    RightFloor: RightFloor,
    rightharpoondown: rightharpoondown,
    rightharpoonup: rightharpoonup,
    rightleftarrows: rightleftarrows,
    rightleftharpoons: rightleftharpoons,
    rightrightarrows: rightrightarrows,
    rightsquigarrow: rightsquigarrow,
    RightTeeArrow: RightTeeArrow,
    RightTee: RightTee,
    RightTeeVector: RightTeeVector,
    rightthreetimes: rightthreetimes,
    RightTriangleBar: RightTriangleBar,
    RightTriangle: RightTriangle,
    RightTriangleEqual: RightTriangleEqual,
    RightUpDownVector: RightUpDownVector,
    RightUpTeeVector: RightUpTeeVector,
    RightUpVectorBar: RightUpVectorBar,
    RightUpVector: RightUpVector,
    RightVectorBar: RightVectorBar,
    RightVector: RightVector,
    ring: ring,
    risingdotseq: risingdotseq,
    rlarr: rlarr,
    rlhar: rlhar,
    rlm: rlm,
    rmoustache: rmoustache,
    rmoust: rmoust,
    rnmid: rnmid,
    roang: roang,
    roarr: roarr,
    robrk: robrk,
    ropar: ropar,
    ropf: ropf,
    Ropf: Ropf,
    roplus: roplus,
    rotimes: rotimes,
    RoundImplies: RoundImplies,
    rpar: rpar,
    rpargt: rpargt,
    rppolint: rppolint,
    rrarr: rrarr,
    Rrightarrow: Rrightarrow,
    rsaquo: rsaquo,
    rscr: rscr,
    Rscr: Rscr,
    rsh: rsh,
    Rsh: Rsh,
    rsqb: rsqb,
    rsquo: rsquo,
    rsquor: rsquor,
    rthree: rthree,
    rtimes: rtimes,
    rtri: rtri,
    rtrie: rtrie,
    rtrif: rtrif,
    rtriltri: rtriltri,
    RuleDelayed: RuleDelayed,
    ruluhar: ruluhar,
    rx: rx,
    Sacute: Sacute,
    sacute: sacute,
    sbquo: sbquo,
    scap: scap,
    Scaron: Scaron,
    scaron: scaron,
    Sc: Sc,
    sc: sc,
    sccue: sccue,
    sce: sce,
    scE: scE,
    Scedil: Scedil,
    scedil: scedil,
    Scirc: Scirc,
    scirc: scirc,
    scnap: scnap,
    scnE: scnE,
    scnsim: scnsim,
    scpolint: scpolint,
    scsim: scsim,
    Scy: Scy,
    scy: scy,
    sdotb: sdotb,
    sdot: sdot,
    sdote: sdote,
    searhk: searhk,
    searr: searr,
    seArr: seArr,
    searrow: searrow,
    sect: sect,
    semi: semi,
    seswar: seswar,
    setminus: setminus,
    setmn: setmn,
    sext: sext,
    Sfr: Sfr,
    sfr: sfr,
    sfrown: sfrown,
    sharp: sharp,
    SHCHcy: SHCHcy,
    shchcy: shchcy,
    SHcy: SHcy,
    shcy: shcy,
    ShortDownArrow: ShortDownArrow,
    ShortLeftArrow: ShortLeftArrow,
    shortmid: shortmid,
    shortparallel: shortparallel,
    ShortRightArrow: ShortRightArrow,
    ShortUpArrow: ShortUpArrow,
    shy: shy,
    Sigma: Sigma,
    sigma: sigma,
    sigmaf: sigmaf,
    sigmav: sigmav,
    sim: sim,
    simdot: simdot,
    sime: sime,
    simeq: simeq,
    simg: simg,
    simgE: simgE,
    siml: siml,
    simlE: simlE,
    simne: simne,
    simplus: simplus,
    simrarr: simrarr,
    slarr: slarr,
    SmallCircle: SmallCircle,
    smallsetminus: smallsetminus,
    smashp: smashp,
    smeparsl: smeparsl,
    smid: smid,
    smile: smile,
    smt: smt,
    smte: smte,
    smtes: smtes,
    SOFTcy: SOFTcy,
    softcy: softcy,
    solbar: solbar,
    solb: solb,
    sol: sol,
    Sopf: Sopf,
    sopf: sopf,
    spades: spades,
    spadesuit: spadesuit,
    spar: spar,
    sqcap: sqcap,
    sqcaps: sqcaps,
    sqcup: sqcup,
    sqcups: sqcups,
    Sqrt: Sqrt,
    sqsub: sqsub,
    sqsube: sqsube,
    sqsubset: sqsubset,
    sqsubseteq: sqsubseteq,
    sqsup: sqsup,
    sqsupe: sqsupe,
    sqsupset: sqsupset,
    sqsupseteq: sqsupseteq,
    square: square,
    Square: Square,
    SquareIntersection: SquareIntersection,
    SquareSubset: SquareSubset,
    SquareSubsetEqual: SquareSubsetEqual,
    SquareSuperset: SquareSuperset,
    SquareSupersetEqual: SquareSupersetEqual,
    SquareUnion: SquareUnion,
    squarf: squarf,
    squ: squ,
    squf: squf,
    srarr: srarr,
    Sscr: Sscr,
    sscr: sscr,
    ssetmn: ssetmn,
    ssmile: ssmile,
    sstarf: sstarf,
    Star: Star,
    star: star,
    starf: starf,
    straightepsilon: straightepsilon,
    straightphi: straightphi,
    strns: strns,
    sub: sub,
    Sub: Sub,
    subdot: subdot,
    subE: subE,
    sube: sube,
    subedot: subedot,
    submult: submult,
    subnE: subnE,
    subne: subne,
    subplus: subplus,
    subrarr: subrarr,
    subset: subset,
    Subset: Subset,
    subseteq: subseteq,
    subseteqq: subseteqq,
    SubsetEqual: SubsetEqual,
    subsetneq: subsetneq,
    subsetneqq: subsetneqq,
    subsim: subsim,
    subsub: subsub,
    subsup: subsup,
    succapprox: succapprox,
    succ: succ,
    succcurlyeq: succcurlyeq,
    Succeeds: Succeeds,
    SucceedsEqual: SucceedsEqual,
    SucceedsSlantEqual: SucceedsSlantEqual,
    SucceedsTilde: SucceedsTilde,
    succeq: succeq,
    succnapprox: succnapprox,
    succneqq: succneqq,
    succnsim: succnsim,
    succsim: succsim,
    SuchThat: SuchThat,
    sum: sum,
    Sum: Sum,
    sung: sung,
    sup1: sup1,
    sup2: sup2,
    sup3: sup3,
    sup: sup,
    Sup: Sup,
    supdot: supdot,
    supdsub: supdsub,
    supE: supE,
    supe: supe,
    supedot: supedot,
    Superset: Superset,
    SupersetEqual: SupersetEqual,
    suphsol: suphsol,
    suphsub: suphsub,
    suplarr: suplarr,
    supmult: supmult,
    supnE: supnE,
    supne: supne,
    supplus: supplus,
    supset: supset,
    Supset: Supset,
    supseteq: supseteq,
    supseteqq: supseteqq,
    supsetneq: supsetneq,
    supsetneqq: supsetneqq,
    supsim: supsim,
    supsub: supsub,
    supsup: supsup,
    swarhk: swarhk,
    swarr: swarr,
    swArr: swArr,
    swarrow: swarrow,
    swnwar: swnwar,
    szlig: szlig,
    Tab: Tab,
    target: target,
    Tau: Tau,
    tau: tau,
    tbrk: tbrk,
    Tcaron: Tcaron,
    tcaron: tcaron,
    Tcedil: Tcedil,
    tcedil: tcedil,
    Tcy: Tcy,
    tcy: tcy,
    tdot: tdot,
    telrec: telrec,
    Tfr: Tfr,
    tfr: tfr,
    there4: there4,
    therefore: therefore,
    Therefore: Therefore,
    Theta: Theta,
    theta: theta,
    thetasym: thetasym,
    thetav: thetav,
    thickapprox: thickapprox,
    thicksim: thicksim,
    ThickSpace: ThickSpace,
    ThinSpace: ThinSpace,
    thinsp: thinsp,
    thkap: thkap,
    thksim: thksim,
    THORN: THORN,
    thorn: thorn,
    tilde: tilde,
    Tilde: Tilde,
    TildeEqual: TildeEqual,
    TildeFullEqual: TildeFullEqual,
    TildeTilde: TildeTilde,
    timesbar: timesbar,
    timesb: timesb,
    times: times,
    timesd: timesd,
    tint: tint,
    toea: toea,
    topbot: topbot,
    topcir: topcir,
    top: top,
    Topf: Topf,
    topf: topf,
    topfork: topfork,
    tosa: tosa,
    tprime: tprime,
    trade: trade,
    TRADE: TRADE,
    triangle: triangle,
    triangledown: triangledown,
    triangleleft: triangleleft,
    trianglelefteq: trianglelefteq,
    triangleq: triangleq,
    triangleright: triangleright,
    trianglerighteq: trianglerighteq,
    tridot: tridot,
    trie: trie,
    triminus: triminus,
    TripleDot: TripleDot,
    triplus: triplus,
    trisb: trisb,
    tritime: tritime,
    trpezium: trpezium,
    Tscr: Tscr,
    tscr: tscr,
    TScy: TScy,
    tscy: tscy,
    TSHcy: TSHcy,
    tshcy: tshcy,
    Tstrok: Tstrok,
    tstrok: tstrok,
    twixt: twixt,
    twoheadleftarrow: twoheadleftarrow,
    twoheadrightarrow: twoheadrightarrow,
    Uacute: Uacute,
    uacute: uacute,
    uarr: uarr,
    Uarr: Uarr,
    uArr: uArr,
    Uarrocir: Uarrocir,
    Ubrcy: Ubrcy,
    ubrcy: ubrcy,
    Ubreve: Ubreve,
    ubreve: ubreve,
    Ucirc: Ucirc,
    ucirc: ucirc,
    Ucy: Ucy,
    ucy: ucy,
    udarr: udarr,
    Udblac: Udblac,
    udblac: udblac,
    udhar: udhar,
    ufisht: ufisht,
    Ufr: Ufr,
    ufr: ufr,
    Ugrave: Ugrave,
    ugrave: ugrave,
    uHar: uHar,
    uharl: uharl,
    uharr: uharr,
    uhblk: uhblk,
    ulcorn: ulcorn,
    ulcorner: ulcorner,
    ulcrop: ulcrop,
    ultri: ultri,
    Umacr: Umacr,
    umacr: umacr,
    uml: uml,
    UnderBar: UnderBar,
    UnderBrace: UnderBrace,
    UnderBracket: UnderBracket,
    UnderParenthesis: UnderParenthesis,
    Union: Union,
    UnionPlus: UnionPlus,
    Uogon: Uogon,
    uogon: uogon,
    Uopf: Uopf,
    uopf: uopf,
    UpArrowBar: UpArrowBar,
    uparrow: uparrow,
    UpArrow: UpArrow,
    Uparrow: Uparrow,
    UpArrowDownArrow: UpArrowDownArrow,
    updownarrow: updownarrow,
    UpDownArrow: UpDownArrow,
    Updownarrow: Updownarrow,
    UpEquilibrium: UpEquilibrium,
    upharpoonleft: upharpoonleft,
    upharpoonright: upharpoonright,
    uplus: uplus,
    UpperLeftArrow: UpperLeftArrow,
    UpperRightArrow: UpperRightArrow,
    upsi: upsi,
    Upsi: Upsi,
    upsih: upsih,
    Upsilon: Upsilon,
    upsilon: upsilon,
    UpTeeArrow: UpTeeArrow,
    UpTee: UpTee,
    upuparrows: upuparrows,
    urcorn: urcorn,
    urcorner: urcorner,
    urcrop: urcrop,
    Uring: Uring,
    uring: uring,
    urtri: urtri,
    Uscr: Uscr,
    uscr: uscr,
    utdot: utdot,
    Utilde: Utilde,
    utilde: utilde,
    utri: utri,
    utrif: utrif,
    uuarr: uuarr,
    Uuml: Uuml,
    uuml: uuml,
    uwangle: uwangle,
    vangrt: vangrt,
    varepsilon: varepsilon,
    varkappa: varkappa,
    varnothing: varnothing,
    varphi: varphi,
    varpi: varpi,
    varpropto: varpropto,
    varr: varr,
    vArr: vArr,
    varrho: varrho,
    varsigma: varsigma,
    varsubsetneq: varsubsetneq,
    varsubsetneqq: varsubsetneqq,
    varsupsetneq: varsupsetneq,
    varsupsetneqq: varsupsetneqq,
    vartheta: vartheta,
    vartriangleleft: vartriangleleft,
    vartriangleright: vartriangleright,
    vBar: vBar,
    Vbar: Vbar,
    vBarv: vBarv,
    Vcy: Vcy,
    vcy: vcy,
    vdash: vdash,
    vDash: vDash,
    Vdash: Vdash,
    VDash: VDash,
    Vdashl: Vdashl,
    veebar: veebar,
    vee: vee,
    Vee: Vee,
    veeeq: veeeq,
    vellip: vellip,
    verbar: verbar,
    Verbar: Verbar,
    vert: vert,
    Vert: Vert,
    VerticalBar: VerticalBar,
    VerticalLine: VerticalLine,
    VerticalSeparator: VerticalSeparator,
    VerticalTilde: VerticalTilde,
    VeryThinSpace: VeryThinSpace,
    Vfr: Vfr,
    vfr: vfr,
    vltri: vltri,
    vnsub: vnsub,
    vnsup: vnsup,
    Vopf: Vopf,
    vopf: vopf,
    vprop: vprop,
    vrtri: vrtri,
    Vscr: Vscr,
    vscr: vscr,
    vsubnE: vsubnE,
    vsubne: vsubne,
    vsupnE: vsupnE,
    vsupne: vsupne,
    Vvdash: Vvdash,
    vzigzag: vzigzag,
    Wcirc: Wcirc,
    wcirc: wcirc,
    wedbar: wedbar,
    wedge: wedge,
    Wedge: Wedge,
    wedgeq: wedgeq,
    weierp: weierp,
    Wfr: Wfr,
    wfr: wfr,
    Wopf: Wopf,
    wopf: wopf,
    wp: wp,
    wr: wr,
    wreath: wreath,
    Wscr: Wscr,
    wscr: wscr,
    xcap: xcap,
    xcirc: xcirc,
    xcup: xcup,
    xdtri: xdtri,
    Xfr: Xfr,
    xfr: xfr,
    xharr: xharr,
    xhArr: xhArr,
    Xi: Xi,
    xi: xi,
    xlarr: xlarr,
    xlArr: xlArr,
    xmap: xmap,
    xnis: xnis,
    xodot: xodot,
    Xopf: Xopf,
    xopf: xopf,
    xoplus: xoplus,
    xotime: xotime,
    xrarr: xrarr,
    xrArr: xrArr,
    Xscr: Xscr,
    xscr: xscr,
    xsqcup: xsqcup,
    xuplus: xuplus,
    xutri: xutri,
    xvee: xvee,
    xwedge: xwedge,
    Yacute: Yacute,
    yacute: yacute,
    YAcy: YAcy,
    yacy: yacy,
    Ycirc: Ycirc,
    ycirc: ycirc,
    Ycy: Ycy,
    ycy: ycy,
    yen: yen,
    Yfr: Yfr,
    yfr: yfr,
    YIcy: YIcy,
    yicy: yicy,
    Yopf: Yopf,
    yopf: yopf,
    Yscr: Yscr,
    yscr: yscr,
    YUcy: YUcy,
    yucy: yucy,
    yuml: yuml,
    Yuml: Yuml,
    Zacute: Zacute,
    zacute: zacute,
    Zcaron: Zcaron,
    zcaron: zcaron,
    Zcy: Zcy,
    zcy: zcy,
    Zdot: Zdot,
    zdot: zdot,
    zeetrf: zeetrf,
    ZeroWidthSpace: ZeroWidthSpace,
    Zeta: Zeta,
    zeta: zeta,
    zfr: zfr,
    Zfr: Zfr,
    ZHcy: ZHcy,
    zhcy: zhcy,
    zigrarr: zigrarr,
    zopf: zopf,
    Zopf: Zopf,
    Zscr: Zscr,
    zscr: zscr,
    zwj: zwj,
    zwnj: zwnj,
    'default': entities
});

const Aacute$1 = "Á";
const aacute$1 = "á";
const Acirc$1 = "Â";
const acirc$1 = "â";
const acute$1 = "´";
const AElig$1 = "Æ";
const aelig$1 = "æ";
const Agrave$1 = "À";
const agrave$1 = "à";
const amp$1 = "&";
const AMP$1 = "&";
const Aring$1 = "Å";
const aring$1 = "å";
const Atilde$1 = "Ã";
const atilde$1 = "ã";
const Auml$1 = "Ä";
const auml$1 = "ä";
const brvbar$1 = "¦";
const Ccedil$1 = "Ç";
const ccedil$1 = "ç";
const cedil$1 = "¸";
const cent$1 = "¢";
const copy$1 = "©";
const COPY$1 = "©";
const curren$1 = "¤";
const deg$1 = "°";
const divide$1 = "÷";
const Eacute$1 = "É";
const eacute$1 = "é";
const Ecirc$1 = "Ê";
const ecirc$1 = "ê";
const Egrave$1 = "È";
const egrave$1 = "è";
const ETH$1 = "Ð";
const eth$1 = "ð";
const Euml$1 = "Ë";
const euml$1 = "ë";
const frac12$1 = "½";
const frac14$1 = "¼";
const frac34$1 = "¾";
const gt$1 = ">";
const GT$1 = ">";
const Iacute$1 = "Í";
const iacute$1 = "í";
const Icirc$1 = "Î";
const icirc$1 = "î";
const iexcl$1 = "¡";
const Igrave$1 = "Ì";
const igrave$1 = "ì";
const iquest$1 = "¿";
const Iuml$1 = "Ï";
const iuml$1 = "ï";
const laquo$1 = "«";
const lt$1 = "<";
const LT$1 = "<";
const macr$1 = "¯";
const micro$1 = "µ";
const middot$1 = "·";
const nbsp$1 = " ";
const not$1 = "¬";
const Ntilde$1 = "Ñ";
const ntilde$1 = "ñ";
const Oacute$1 = "Ó";
const oacute$1 = "ó";
const Ocirc$1 = "Ô";
const ocirc$1 = "ô";
const Ograve$1 = "Ò";
const ograve$1 = "ò";
const ordf$1 = "ª";
const ordm$1 = "º";
const Oslash$1 = "Ø";
const oslash$1 = "ø";
const Otilde$1 = "Õ";
const otilde$1 = "õ";
const Ouml$1 = "Ö";
const ouml$1 = "ö";
const para$1 = "¶";
const plusmn$1 = "±";
const pound$1 = "£";
const quot$1 = "\"";
const QUOT$1 = "\"";
const raquo$1 = "»";
const reg$1 = "®";
const REG$1 = "®";
const sect$1 = "§";
const shy$1 = "­";
const sup1$1 = "¹";
const sup2$1 = "²";
const sup3$1 = "³";
const szlig$1 = "ß";
const THORN$1 = "Þ";
const thorn$1 = "þ";
const times$1 = "×";
const Uacute$1 = "Ú";
const uacute$1 = "ú";
const Ucirc$1 = "Û";
const ucirc$1 = "û";
const Ugrave$1 = "Ù";
const ugrave$1 = "ù";
const uml$1 = "¨";
const Uuml$1 = "Ü";
const uuml$1 = "ü";
const Yacute$1 = "Ý";
const yacute$1 = "ý";
const yen$1 = "¥";
const yuml$1 = "ÿ";
var legacy = {
  Aacute: Aacute$1,
  aacute: aacute$1,
  Acirc: Acirc$1,
  acirc: acirc$1,
  acute: acute$1,
  AElig: AElig$1,
  aelig: aelig$1,
  Agrave: Agrave$1,
  agrave: agrave$1,
  amp: amp$1,
  AMP: AMP$1,
  Aring: Aring$1,
  aring: aring$1,
  Atilde: Atilde$1,
  atilde: atilde$1,
  Auml: Auml$1,
  auml: auml$1,
  brvbar: brvbar$1,
  Ccedil: Ccedil$1,
  ccedil: ccedil$1,
  cedil: cedil$1,
  cent: cent$1,
  copy: copy$1,
  COPY: COPY$1,
  curren: curren$1,
  deg: deg$1,
  divide: divide$1,
  Eacute: Eacute$1,
  eacute: eacute$1,
  Ecirc: Ecirc$1,
  ecirc: ecirc$1,
  Egrave: Egrave$1,
  egrave: egrave$1,
  ETH: ETH$1,
  eth: eth$1,
  Euml: Euml$1,
  euml: euml$1,
  frac12: frac12$1,
  frac14: frac14$1,
  frac34: frac34$1,
  gt: gt$1,
  GT: GT$1,
  Iacute: Iacute$1,
  iacute: iacute$1,
  Icirc: Icirc$1,
  icirc: icirc$1,
  iexcl: iexcl$1,
  Igrave: Igrave$1,
  igrave: igrave$1,
  iquest: iquest$1,
  Iuml: Iuml$1,
  iuml: iuml$1,
  laquo: laquo$1,
  lt: lt$1,
  LT: LT$1,
  macr: macr$1,
  micro: micro$1,
  middot: middot$1,
  nbsp: nbsp$1,
  not: not$1,
  Ntilde: Ntilde$1,
  ntilde: ntilde$1,
  Oacute: Oacute$1,
  oacute: oacute$1,
  Ocirc: Ocirc$1,
  ocirc: ocirc$1,
  Ograve: Ograve$1,
  ograve: ograve$1,
  ordf: ordf$1,
  ordm: ordm$1,
  Oslash: Oslash$1,
  oslash: oslash$1,
  Otilde: Otilde$1,
  otilde: otilde$1,
  Ouml: Ouml$1,
  ouml: ouml$1,
  para: para$1,
  plusmn: plusmn$1,
  pound: pound$1,
  quot: quot$1,
  QUOT: QUOT$1,
  raquo: raquo$1,
  reg: reg$1,
  REG: REG$1,
  sect: sect$1,
  shy: shy$1,
  sup1: sup1$1,
  sup2: sup2$1,
  sup3: sup3$1,
  szlig: szlig$1,
  THORN: THORN$1,
  thorn: thorn$1,
  times: times$1,
  Uacute: Uacute$1,
  uacute: uacute$1,
  Ucirc: Ucirc$1,
  ucirc: ucirc$1,
  Ugrave: Ugrave$1,
  ugrave: ugrave$1,
  uml: uml$1,
  Uuml: Uuml$1,
  uuml: uuml$1,
  Yacute: Yacute$1,
  yacute: yacute$1,
  yen: yen$1,
  yuml: yuml$1
};

var legacy$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Aacute: Aacute$1,
    aacute: aacute$1,
    Acirc: Acirc$1,
    acirc: acirc$1,
    acute: acute$1,
    AElig: AElig$1,
    aelig: aelig$1,
    Agrave: Agrave$1,
    agrave: agrave$1,
    amp: amp$1,
    AMP: AMP$1,
    Aring: Aring$1,
    aring: aring$1,
    Atilde: Atilde$1,
    atilde: atilde$1,
    Auml: Auml$1,
    auml: auml$1,
    brvbar: brvbar$1,
    Ccedil: Ccedil$1,
    ccedil: ccedil$1,
    cedil: cedil$1,
    cent: cent$1,
    copy: copy$1,
    COPY: COPY$1,
    curren: curren$1,
    deg: deg$1,
    divide: divide$1,
    Eacute: Eacute$1,
    eacute: eacute$1,
    Ecirc: Ecirc$1,
    ecirc: ecirc$1,
    Egrave: Egrave$1,
    egrave: egrave$1,
    ETH: ETH$1,
    eth: eth$1,
    Euml: Euml$1,
    euml: euml$1,
    frac12: frac12$1,
    frac14: frac14$1,
    frac34: frac34$1,
    gt: gt$1,
    GT: GT$1,
    Iacute: Iacute$1,
    iacute: iacute$1,
    Icirc: Icirc$1,
    icirc: icirc$1,
    iexcl: iexcl$1,
    Igrave: Igrave$1,
    igrave: igrave$1,
    iquest: iquest$1,
    Iuml: Iuml$1,
    iuml: iuml$1,
    laquo: laquo$1,
    lt: lt$1,
    LT: LT$1,
    macr: macr$1,
    micro: micro$1,
    middot: middot$1,
    nbsp: nbsp$1,
    not: not$1,
    Ntilde: Ntilde$1,
    ntilde: ntilde$1,
    Oacute: Oacute$1,
    oacute: oacute$1,
    Ocirc: Ocirc$1,
    ocirc: ocirc$1,
    Ograve: Ograve$1,
    ograve: ograve$1,
    ordf: ordf$1,
    ordm: ordm$1,
    Oslash: Oslash$1,
    oslash: oslash$1,
    Otilde: Otilde$1,
    otilde: otilde$1,
    Ouml: Ouml$1,
    ouml: ouml$1,
    para: para$1,
    plusmn: plusmn$1,
    pound: pound$1,
    quot: quot$1,
    QUOT: QUOT$1,
    raquo: raquo$1,
    reg: reg$1,
    REG: REG$1,
    sect: sect$1,
    shy: shy$1,
    sup1: sup1$1,
    sup2: sup2$1,
    sup3: sup3$1,
    szlig: szlig$1,
    THORN: THORN$1,
    thorn: thorn$1,
    times: times$1,
    Uacute: Uacute$1,
    uacute: uacute$1,
    Ucirc: Ucirc$1,
    ucirc: ucirc$1,
    Ugrave: Ugrave$1,
    ugrave: ugrave$1,
    uml: uml$1,
    Uuml: Uuml$1,
    uuml: uuml$1,
    Yacute: Yacute$1,
    yacute: yacute$1,
    yen: yen$1,
    yuml: yuml$1,
    'default': legacy
});

const amp$2 = "&";
const apos$1 = "'";
const gt$2 = ">";
const lt$2 = "<";
const quot$2 = "\"";
var xml = {
  amp: amp$2,
  apos: apos$1,
  gt: gt$2,
  lt: lt$2,
  quot: quot$2
};

var xml$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    amp: amp$2,
    apos: apos$1,
    gt: gt$2,
    lt: lt$2,
    quot: quot$2,
    'default': xml
});

var entityMap = getCjsExportFromNamespace(entities$1);

var legacyMap = getCjsExportFromNamespace(legacy$1);

var xmlMap = getCjsExportFromNamespace(xml$1);

var Tokenizer_1 = Tokenizer;






var i = 0;

var TEXT = i++;
var BEFORE_TAG_NAME = i++; //after <
var IN_TAG_NAME = i++;
var IN_SELF_CLOSING_TAG = i++;
var BEFORE_CLOSING_TAG_NAME = i++;
var IN_CLOSING_TAG_NAME = i++;
var AFTER_CLOSING_TAG_NAME = i++;

//attributes
var BEFORE_ATTRIBUTE_NAME = i++;
var IN_ATTRIBUTE_NAME = i++;
var AFTER_ATTRIBUTE_NAME = i++;
var BEFORE_ATTRIBUTE_VALUE = i++;
var IN_ATTRIBUTE_VALUE_DQ = i++; // "
var IN_ATTRIBUTE_VALUE_SQ = i++; // '
var IN_ATTRIBUTE_VALUE_NQ = i++;

//declarations
var BEFORE_DECLARATION = i++; // !
var IN_DECLARATION = i++;

//processing instructions
var IN_PROCESSING_INSTRUCTION = i++; // ?

//comments
var BEFORE_COMMENT = i++;
var IN_COMMENT = i++;
var AFTER_COMMENT_1 = i++;
var AFTER_COMMENT_2 = i++;

//cdata
var BEFORE_CDATA_1 = i++; // [
var BEFORE_CDATA_2 = i++; // C
var BEFORE_CDATA_3 = i++; // D
var BEFORE_CDATA_4 = i++; // A
var BEFORE_CDATA_5 = i++; // T
var BEFORE_CDATA_6 = i++; // A
var IN_CDATA = i++; // [
var AFTER_CDATA_1 = i++; // ]
var AFTER_CDATA_2 = i++; // ]

//special tags
var BEFORE_SPECIAL = i++; //S
var BEFORE_SPECIAL_END = i++; //S

var BEFORE_SCRIPT_1 = i++; //C
var BEFORE_SCRIPT_2 = i++; //R
var BEFORE_SCRIPT_3 = i++; //I
var BEFORE_SCRIPT_4 = i++; //P
var BEFORE_SCRIPT_5 = i++; //T
var AFTER_SCRIPT_1 = i++; //C
var AFTER_SCRIPT_2 = i++; //R
var AFTER_SCRIPT_3 = i++; //I
var AFTER_SCRIPT_4 = i++; //P
var AFTER_SCRIPT_5 = i++; //T

var BEFORE_STYLE_1 = i++; //T
var BEFORE_STYLE_2 = i++; //Y
var BEFORE_STYLE_3 = i++; //L
var BEFORE_STYLE_4 = i++; //E
var AFTER_STYLE_1 = i++; //T
var AFTER_STYLE_2 = i++; //Y
var AFTER_STYLE_3 = i++; //L
var AFTER_STYLE_4 = i++; //E

var BEFORE_ENTITY = i++; //&
var BEFORE_NUMERIC_ENTITY = i++; //#
var IN_NAMED_ENTITY = i++;
var IN_NUMERIC_ENTITY = i++;
var IN_HEX_ENTITY = i++; //X

var j = 0;

var SPECIAL_NONE = j++;
var SPECIAL_SCRIPT = j++;
var SPECIAL_STYLE = j++;

function whitespace(c) {
    return c === " " || c === "\n" || c === "\t" || c === "\f" || c === "\r";
}

function ifElseState(upper, SUCCESS, FAILURE) {
    var lower = upper.toLowerCase();

    if (upper === lower) {
        return function(c) {
            if (c === lower) {
                this._state = SUCCESS;
            } else {
                this._state = FAILURE;
                this._index--;
            }
        };
    } else {
        return function(c) {
            if (c === lower || c === upper) {
                this._state = SUCCESS;
            } else {
                this._state = FAILURE;
                this._index--;
            }
        };
    }
}

function consumeSpecialNameChar(upper, NEXT_STATE) {
    var lower = upper.toLowerCase();

    return function(c) {
        if (c === lower || c === upper) {
            this._state = NEXT_STATE;
        } else {
            this._state = IN_TAG_NAME;
            this._index--; //consume the token again
        }
    };
}

function Tokenizer(options, cbs) {
    this._state = TEXT;
    this._buffer = "";
    this._sectionStart = 0;
    this._index = 0;
    this._bufferOffset = 0; //chars removed from _buffer
    this._baseState = TEXT;
    this._special = SPECIAL_NONE;
    this._cbs = cbs;
    this._running = true;
    this._ended = false;
    this._xmlMode = !!(options && options.xmlMode);
    this._decodeEntities = !!(options && options.decodeEntities);
}

Tokenizer.prototype._stateText = function(c) {
    if (c === "<") {
        if (this._index > this._sectionStart) {
            this._cbs.ontext(this._getSection());
        }
        this._state = BEFORE_TAG_NAME;
        this._sectionStart = this._index;
    } else if (
        this._decodeEntities &&
        this._special === SPECIAL_NONE &&
        c === "&"
    ) {
        if (this._index > this._sectionStart) {
            this._cbs.ontext(this._getSection());
        }
        this._baseState = TEXT;
        this._state = BEFORE_ENTITY;
        this._sectionStart = this._index;
    }
};

Tokenizer.prototype._stateBeforeTagName = function(c) {
    if (c === "/") {
        this._state = BEFORE_CLOSING_TAG_NAME;
    } else if (c === "<") {
        this._cbs.ontext(this._getSection());
        this._sectionStart = this._index;
    } else if (c === ">" || this._special !== SPECIAL_NONE || whitespace(c)) {
        this._state = TEXT;
    } else if (c === "!") {
        this._state = BEFORE_DECLARATION;
        this._sectionStart = this._index + 1;
    } else if (c === "?") {
        this._state = IN_PROCESSING_INSTRUCTION;
        this._sectionStart = this._index + 1;
    } else {
        this._state =
            !this._xmlMode && (c === "s" || c === "S")
                ? BEFORE_SPECIAL
                : IN_TAG_NAME;
        this._sectionStart = this._index;
    }
};

Tokenizer.prototype._stateInTagName = function(c) {
    if (c === "/" || c === ">" || whitespace(c)) {
        this._emitToken("onopentagname");
        this._state = BEFORE_ATTRIBUTE_NAME;
        this._index--;
    }
};

Tokenizer.prototype._stateBeforeCloseingTagName = function(c) {
    if (whitespace(c));
    else if (c === ">") {
        this._state = TEXT;
    } else if (this._special !== SPECIAL_NONE) {
        if (c === "s" || c === "S") {
            this._state = BEFORE_SPECIAL_END;
        } else {
            this._state = TEXT;
            this._index--;
        }
    } else {
        this._state = IN_CLOSING_TAG_NAME;
        this._sectionStart = this._index;
    }
};

Tokenizer.prototype._stateInCloseingTagName = function(c) {
    if (c === ">" || whitespace(c)) {
        this._emitToken("onclosetag");
        this._state = AFTER_CLOSING_TAG_NAME;
        this._index--;
    }
};

Tokenizer.prototype._stateAfterCloseingTagName = function(c) {
    //skip everything until ">"
    if (c === ">") {
        this._state = TEXT;
        this._sectionStart = this._index + 1;
    }
};

Tokenizer.prototype._stateBeforeAttributeName = function(c) {
    if (c === ">") {
        this._cbs.onopentagend();
        this._state = TEXT;
        this._sectionStart = this._index + 1;
    } else if (c === "/") {
        this._state = IN_SELF_CLOSING_TAG;
    } else if (!whitespace(c)) {
        this._state = IN_ATTRIBUTE_NAME;
        this._sectionStart = this._index;
    }
};

Tokenizer.prototype._stateInSelfClosingTag = function(c) {
    if (c === ">") {
        this._cbs.onselfclosingtag();
        this._state = TEXT;
        this._sectionStart = this._index + 1;
    } else if (!whitespace(c)) {
        this._state = BEFORE_ATTRIBUTE_NAME;
        this._index--;
    }
};

Tokenizer.prototype._stateInAttributeName = function(c) {
    if (c === "=" || c === "/" || c === ">" || whitespace(c)) {
        this._cbs.onattribname(this._getSection());
        this._sectionStart = -1;
        this._state = AFTER_ATTRIBUTE_NAME;
        this._index--;
    }
};

Tokenizer.prototype._stateAfterAttributeName = function(c) {
    if (c === "=") {
        this._state = BEFORE_ATTRIBUTE_VALUE;
    } else if (c === "/" || c === ">") {
        this._cbs.onattribend();
        this._state = BEFORE_ATTRIBUTE_NAME;
        this._index--;
    } else if (!whitespace(c)) {
        this._cbs.onattribend();
        this._state = IN_ATTRIBUTE_NAME;
        this._sectionStart = this._index;
    }
};

Tokenizer.prototype._stateBeforeAttributeValue = function(c) {
    if (c === '"') {
        this._state = IN_ATTRIBUTE_VALUE_DQ;
        this._sectionStart = this._index + 1;
    } else if (c === "'") {
        this._state = IN_ATTRIBUTE_VALUE_SQ;
        this._sectionStart = this._index + 1;
    } else if (!whitespace(c)) {
        this._state = IN_ATTRIBUTE_VALUE_NQ;
        this._sectionStart = this._index;
        this._index--; //reconsume token
    }
};

Tokenizer.prototype._stateInAttributeValueDoubleQuotes = function(c) {
    if (c === '"') {
        this._emitToken("onattribdata");
        this._cbs.onattribend();
        this._state = BEFORE_ATTRIBUTE_NAME;
    } else if (this._decodeEntities && c === "&") {
        this._emitToken("onattribdata");
        this._baseState = this._state;
        this._state = BEFORE_ENTITY;
        this._sectionStart = this._index;
    }
};

Tokenizer.prototype._stateInAttributeValueSingleQuotes = function(c) {
    if (c === "'") {
        this._emitToken("onattribdata");
        this._cbs.onattribend();
        this._state = BEFORE_ATTRIBUTE_NAME;
    } else if (this._decodeEntities && c === "&") {
        this._emitToken("onattribdata");
        this._baseState = this._state;
        this._state = BEFORE_ENTITY;
        this._sectionStart = this._index;
    }
};

Tokenizer.prototype._stateInAttributeValueNoQuotes = function(c) {
    if (whitespace(c) || c === ">") {
        this._emitToken("onattribdata");
        this._cbs.onattribend();
        this._state = BEFORE_ATTRIBUTE_NAME;
        this._index--;
    } else if (this._decodeEntities && c === "&") {
        this._emitToken("onattribdata");
        this._baseState = this._state;
        this._state = BEFORE_ENTITY;
        this._sectionStart = this._index;
    }
};

Tokenizer.prototype._stateBeforeDeclaration = function(c) {
    this._state =
        c === "["
            ? BEFORE_CDATA_1
            : c === "-"
                ? BEFORE_COMMENT
                : IN_DECLARATION;
};

Tokenizer.prototype._stateInDeclaration = function(c) {
    if (c === ">") {
        this._cbs.ondeclaration(this._getSection());
        this._state = TEXT;
        this._sectionStart = this._index + 1;
    }
};

Tokenizer.prototype._stateInProcessingInstruction = function(c) {
    if (c === ">") {
        this._cbs.onprocessinginstruction(this._getSection());
        this._state = TEXT;
        this._sectionStart = this._index + 1;
    }
};

Tokenizer.prototype._stateBeforeComment = function(c) {
    if (c === "-") {
        this._state = IN_COMMENT;
        this._sectionStart = this._index + 1;
    } else {
        this._state = IN_DECLARATION;
    }
};

Tokenizer.prototype._stateInComment = function(c) {
    if (c === "-") this._state = AFTER_COMMENT_1;
};

Tokenizer.prototype._stateAfterComment1 = function(c) {
    if (c === "-") {
        this._state = AFTER_COMMENT_2;
    } else {
        this._state = IN_COMMENT;
    }
};

Tokenizer.prototype._stateAfterComment2 = function(c) {
    if (c === ">") {
        //remove 2 trailing chars
        this._cbs.oncomment(
            this._buffer.substring(this._sectionStart, this._index - 2)
        );
        this._state = TEXT;
        this._sectionStart = this._index + 1;
    } else if (c !== "-") {
        this._state = IN_COMMENT;
    }
    // else: stay in AFTER_COMMENT_2 (`--->`)
};

Tokenizer.prototype._stateBeforeCdata1 = ifElseState(
    "C",
    BEFORE_CDATA_2,
    IN_DECLARATION
);
Tokenizer.prototype._stateBeforeCdata2 = ifElseState(
    "D",
    BEFORE_CDATA_3,
    IN_DECLARATION
);
Tokenizer.prototype._stateBeforeCdata3 = ifElseState(
    "A",
    BEFORE_CDATA_4,
    IN_DECLARATION
);
Tokenizer.prototype._stateBeforeCdata4 = ifElseState(
    "T",
    BEFORE_CDATA_5,
    IN_DECLARATION
);
Tokenizer.prototype._stateBeforeCdata5 = ifElseState(
    "A",
    BEFORE_CDATA_6,
    IN_DECLARATION
);

Tokenizer.prototype._stateBeforeCdata6 = function(c) {
    if (c === "[") {
        this._state = IN_CDATA;
        this._sectionStart = this._index + 1;
    } else {
        this._state = IN_DECLARATION;
        this._index--;
    }
};

Tokenizer.prototype._stateInCdata = function(c) {
    if (c === "]") this._state = AFTER_CDATA_1;
};

Tokenizer.prototype._stateAfterCdata1 = function(c) {
    if (c === "]") this._state = AFTER_CDATA_2;
    else this._state = IN_CDATA;
};

Tokenizer.prototype._stateAfterCdata2 = function(c) {
    if (c === ">") {
        //remove 2 trailing chars
        this._cbs.oncdata(
            this._buffer.substring(this._sectionStart, this._index - 2)
        );
        this._state = TEXT;
        this._sectionStart = this._index + 1;
    } else if (c !== "]") {
        this._state = IN_CDATA;
    }
    //else: stay in AFTER_CDATA_2 (`]]]>`)
};

Tokenizer.prototype._stateBeforeSpecial = function(c) {
    if (c === "c" || c === "C") {
        this._state = BEFORE_SCRIPT_1;
    } else if (c === "t" || c === "T") {
        this._state = BEFORE_STYLE_1;
    } else {
        this._state = IN_TAG_NAME;
        this._index--; //consume the token again
    }
};

Tokenizer.prototype._stateBeforeSpecialEnd = function(c) {
    if (this._special === SPECIAL_SCRIPT && (c === "c" || c === "C")) {
        this._state = AFTER_SCRIPT_1;
    } else if (this._special === SPECIAL_STYLE && (c === "t" || c === "T")) {
        this._state = AFTER_STYLE_1;
    } else this._state = TEXT;
};

Tokenizer.prototype._stateBeforeScript1 = consumeSpecialNameChar(
    "R",
    BEFORE_SCRIPT_2
);
Tokenizer.prototype._stateBeforeScript2 = consumeSpecialNameChar(
    "I",
    BEFORE_SCRIPT_3
);
Tokenizer.prototype._stateBeforeScript3 = consumeSpecialNameChar(
    "P",
    BEFORE_SCRIPT_4
);
Tokenizer.prototype._stateBeforeScript4 = consumeSpecialNameChar(
    "T",
    BEFORE_SCRIPT_5
);

Tokenizer.prototype._stateBeforeScript5 = function(c) {
    if (c === "/" || c === ">" || whitespace(c)) {
        this._special = SPECIAL_SCRIPT;
    }
    this._state = IN_TAG_NAME;
    this._index--; //consume the token again
};

Tokenizer.prototype._stateAfterScript1 = ifElseState("R", AFTER_SCRIPT_2, TEXT);
Tokenizer.prototype._stateAfterScript2 = ifElseState("I", AFTER_SCRIPT_3, TEXT);
Tokenizer.prototype._stateAfterScript3 = ifElseState("P", AFTER_SCRIPT_4, TEXT);
Tokenizer.prototype._stateAfterScript4 = ifElseState("T", AFTER_SCRIPT_5, TEXT);

Tokenizer.prototype._stateAfterScript5 = function(c) {
    if (c === ">" || whitespace(c)) {
        this._special = SPECIAL_NONE;
        this._state = IN_CLOSING_TAG_NAME;
        this._sectionStart = this._index - 6;
        this._index--; //reconsume the token
    } else this._state = TEXT;
};

Tokenizer.prototype._stateBeforeStyle1 = consumeSpecialNameChar(
    "Y",
    BEFORE_STYLE_2
);
Tokenizer.prototype._stateBeforeStyle2 = consumeSpecialNameChar(
    "L",
    BEFORE_STYLE_3
);
Tokenizer.prototype._stateBeforeStyle3 = consumeSpecialNameChar(
    "E",
    BEFORE_STYLE_4
);

Tokenizer.prototype._stateBeforeStyle4 = function(c) {
    if (c === "/" || c === ">" || whitespace(c)) {
        this._special = SPECIAL_STYLE;
    }
    this._state = IN_TAG_NAME;
    this._index--; //consume the token again
};

Tokenizer.prototype._stateAfterStyle1 = ifElseState("Y", AFTER_STYLE_2, TEXT);
Tokenizer.prototype._stateAfterStyle2 = ifElseState("L", AFTER_STYLE_3, TEXT);
Tokenizer.prototype._stateAfterStyle3 = ifElseState("E", AFTER_STYLE_4, TEXT);

Tokenizer.prototype._stateAfterStyle4 = function(c) {
    if (c === ">" || whitespace(c)) {
        this._special = SPECIAL_NONE;
        this._state = IN_CLOSING_TAG_NAME;
        this._sectionStart = this._index - 5;
        this._index--; //reconsume the token
    } else this._state = TEXT;
};

Tokenizer.prototype._stateBeforeEntity = ifElseState(
    "#",
    BEFORE_NUMERIC_ENTITY,
    IN_NAMED_ENTITY
);
Tokenizer.prototype._stateBeforeNumericEntity = ifElseState(
    "X",
    IN_HEX_ENTITY,
    IN_NUMERIC_ENTITY
);

//for entities terminated with a semicolon
Tokenizer.prototype._parseNamedEntityStrict = function() {
    //offset = 1
    if (this._sectionStart + 1 < this._index) {
        var entity = this._buffer.substring(
                this._sectionStart + 1,
                this._index
            ),
            map = this._xmlMode ? xmlMap : entityMap;

        if (map.hasOwnProperty(entity)) {
            this._emitPartial(map[entity]);
            this._sectionStart = this._index + 1;
        }
    }
};

//parses legacy entities (without trailing semicolon)
Tokenizer.prototype._parseLegacyEntity = function() {
    var start = this._sectionStart + 1,
        limit = this._index - start;

    if (limit > 6) limit = 6; //the max length of legacy entities is 6

    while (limit >= 2) {
        //the min length of legacy entities is 2
        var entity = this._buffer.substr(start, limit);

        if (legacyMap.hasOwnProperty(entity)) {
            this._emitPartial(legacyMap[entity]);
            this._sectionStart += limit + 1;
            return;
        } else {
            limit--;
        }
    }
};

Tokenizer.prototype._stateInNamedEntity = function(c) {
    if (c === ";") {
        this._parseNamedEntityStrict();
        if (this._sectionStart + 1 < this._index && !this._xmlMode) {
            this._parseLegacyEntity();
        }
        this._state = this._baseState;
    } else if (
        (c < "a" || c > "z") &&
        (c < "A" || c > "Z") &&
        (c < "0" || c > "9")
    ) {
        if (this._xmlMode);
        else if (this._sectionStart + 1 === this._index);
        else if (this._baseState !== TEXT) {
            if (c !== "=") {
                this._parseNamedEntityStrict();
            }
        } else {
            this._parseLegacyEntity();
        }

        this._state = this._baseState;
        this._index--;
    }
};

Tokenizer.prototype._decodeNumericEntity = function(offset, base) {
    var sectionStart = this._sectionStart + offset;

    if (sectionStart !== this._index) {
        //parse entity
        var entity = this._buffer.substring(sectionStart, this._index);
        var parsed = parseInt(entity, base);

        this._emitPartial(decode_codepoint(parsed));
        this._sectionStart = this._index;
    } else {
        this._sectionStart--;
    }

    this._state = this._baseState;
};

Tokenizer.prototype._stateInNumericEntity = function(c) {
    if (c === ";") {
        this._decodeNumericEntity(2, 10);
        this._sectionStart++;
    } else if (c < "0" || c > "9") {
        if (!this._xmlMode) {
            this._decodeNumericEntity(2, 10);
        } else {
            this._state = this._baseState;
        }
        this._index--;
    }
};

Tokenizer.prototype._stateInHexEntity = function(c) {
    if (c === ";") {
        this._decodeNumericEntity(3, 16);
        this._sectionStart++;
    } else if (
        (c < "a" || c > "f") &&
        (c < "A" || c > "F") &&
        (c < "0" || c > "9")
    ) {
        if (!this._xmlMode) {
            this._decodeNumericEntity(3, 16);
        } else {
            this._state = this._baseState;
        }
        this._index--;
    }
};

Tokenizer.prototype._cleanup = function() {
    if (this._sectionStart < 0) {
        this._buffer = "";
        this._bufferOffset += this._index;
        this._index = 0;
    } else if (this._running) {
        if (this._state === TEXT) {
            if (this._sectionStart !== this._index) {
                this._cbs.ontext(this._buffer.substr(this._sectionStart));
            }
            this._buffer = "";
            this._bufferOffset += this._index;
            this._index = 0;
        } else if (this._sectionStart === this._index) {
            //the section just started
            this._buffer = "";
            this._bufferOffset += this._index;
            this._index = 0;
        } else {
            //remove everything unnecessary
            this._buffer = this._buffer.substr(this._sectionStart);
            this._index -= this._sectionStart;
            this._bufferOffset += this._sectionStart;
        }

        this._sectionStart = 0;
    }
};

//TODO make events conditional
Tokenizer.prototype.write = function(chunk) {
    if (this._ended) this._cbs.onerror(Error(".write() after done!"));

    this._buffer += chunk;
    this._parse();
};

Tokenizer.prototype._parse = function() {
    while (this._index < this._buffer.length && this._running) {
        var c = this._buffer.charAt(this._index);
        if (this._state === TEXT) {
            this._stateText(c);
        } else if (this._state === BEFORE_TAG_NAME) {
            this._stateBeforeTagName(c);
        } else if (this._state === IN_TAG_NAME) {
            this._stateInTagName(c);
        } else if (this._state === BEFORE_CLOSING_TAG_NAME) {
            this._stateBeforeCloseingTagName(c);
        } else if (this._state === IN_CLOSING_TAG_NAME) {
            this._stateInCloseingTagName(c);
        } else if (this._state === AFTER_CLOSING_TAG_NAME) {
            this._stateAfterCloseingTagName(c);
        } else if (this._state === IN_SELF_CLOSING_TAG) {
            this._stateInSelfClosingTag(c);
        } else if (this._state === BEFORE_ATTRIBUTE_NAME) {

        /*
		*	attributes
		*/
            this._stateBeforeAttributeName(c);
        } else if (this._state === IN_ATTRIBUTE_NAME) {
            this._stateInAttributeName(c);
        } else if (this._state === AFTER_ATTRIBUTE_NAME) {
            this._stateAfterAttributeName(c);
        } else if (this._state === BEFORE_ATTRIBUTE_VALUE) {
            this._stateBeforeAttributeValue(c);
        } else if (this._state === IN_ATTRIBUTE_VALUE_DQ) {
            this._stateInAttributeValueDoubleQuotes(c);
        } else if (this._state === IN_ATTRIBUTE_VALUE_SQ) {
            this._stateInAttributeValueSingleQuotes(c);
        } else if (this._state === IN_ATTRIBUTE_VALUE_NQ) {
            this._stateInAttributeValueNoQuotes(c);
        } else if (this._state === BEFORE_DECLARATION) {

        /*
		*	declarations
		*/
            this._stateBeforeDeclaration(c);
        } else if (this._state === IN_DECLARATION) {
            this._stateInDeclaration(c);
        } else if (this._state === IN_PROCESSING_INSTRUCTION) {

        /*
		*	processing instructions
		*/
            this._stateInProcessingInstruction(c);
        } else if (this._state === BEFORE_COMMENT) {

        /*
		*	comments
		*/
            this._stateBeforeComment(c);
        } else if (this._state === IN_COMMENT) {
            this._stateInComment(c);
        } else if (this._state === AFTER_COMMENT_1) {
            this._stateAfterComment1(c);
        } else if (this._state === AFTER_COMMENT_2) {
            this._stateAfterComment2(c);
        } else if (this._state === BEFORE_CDATA_1) {

        /*
		*	cdata
		*/
            this._stateBeforeCdata1(c);
        } else if (this._state === BEFORE_CDATA_2) {
            this._stateBeforeCdata2(c);
        } else if (this._state === BEFORE_CDATA_3) {
            this._stateBeforeCdata3(c);
        } else if (this._state === BEFORE_CDATA_4) {
            this._stateBeforeCdata4(c);
        } else if (this._state === BEFORE_CDATA_5) {
            this._stateBeforeCdata5(c);
        } else if (this._state === BEFORE_CDATA_6) {
            this._stateBeforeCdata6(c);
        } else if (this._state === IN_CDATA) {
            this._stateInCdata(c);
        } else if (this._state === AFTER_CDATA_1) {
            this._stateAfterCdata1(c);
        } else if (this._state === AFTER_CDATA_2) {
            this._stateAfterCdata2(c);
        } else if (this._state === BEFORE_SPECIAL) {

        /*
		* special tags
		*/
            this._stateBeforeSpecial(c);
        } else if (this._state === BEFORE_SPECIAL_END) {
            this._stateBeforeSpecialEnd(c);
        } else if (this._state === BEFORE_SCRIPT_1) {

        /*
		* script
		*/
            this._stateBeforeScript1(c);
        } else if (this._state === BEFORE_SCRIPT_2) {
            this._stateBeforeScript2(c);
        } else if (this._state === BEFORE_SCRIPT_3) {
            this._stateBeforeScript3(c);
        } else if (this._state === BEFORE_SCRIPT_4) {
            this._stateBeforeScript4(c);
        } else if (this._state === BEFORE_SCRIPT_5) {
            this._stateBeforeScript5(c);
        } else if (this._state === AFTER_SCRIPT_1) {
            this._stateAfterScript1(c);
        } else if (this._state === AFTER_SCRIPT_2) {
            this._stateAfterScript2(c);
        } else if (this._state === AFTER_SCRIPT_3) {
            this._stateAfterScript3(c);
        } else if (this._state === AFTER_SCRIPT_4) {
            this._stateAfterScript4(c);
        } else if (this._state === AFTER_SCRIPT_5) {
            this._stateAfterScript5(c);
        } else if (this._state === BEFORE_STYLE_1) {

        /*
		* style
		*/
            this._stateBeforeStyle1(c);
        } else if (this._state === BEFORE_STYLE_2) {
            this._stateBeforeStyle2(c);
        } else if (this._state === BEFORE_STYLE_3) {
            this._stateBeforeStyle3(c);
        } else if (this._state === BEFORE_STYLE_4) {
            this._stateBeforeStyle4(c);
        } else if (this._state === AFTER_STYLE_1) {
            this._stateAfterStyle1(c);
        } else if (this._state === AFTER_STYLE_2) {
            this._stateAfterStyle2(c);
        } else if (this._state === AFTER_STYLE_3) {
            this._stateAfterStyle3(c);
        } else if (this._state === AFTER_STYLE_4) {
            this._stateAfterStyle4(c);
        } else if (this._state === BEFORE_ENTITY) {

        /*
		* entities
		*/
            this._stateBeforeEntity(c);
        } else if (this._state === BEFORE_NUMERIC_ENTITY) {
            this._stateBeforeNumericEntity(c);
        } else if (this._state === IN_NAMED_ENTITY) {
            this._stateInNamedEntity(c);
        } else if (this._state === IN_NUMERIC_ENTITY) {
            this._stateInNumericEntity(c);
        } else if (this._state === IN_HEX_ENTITY) {
            this._stateInHexEntity(c);
        } else {
            this._cbs.onerror(Error("unknown _state"), this._state);
        }

        this._index++;
    }

    this._cleanup();
};

Tokenizer.prototype.pause = function() {
    this._running = false;
};
Tokenizer.prototype.resume = function() {
    this._running = true;

    if (this._index < this._buffer.length) {
        this._parse();
    }
    if (this._ended) {
        this._finish();
    }
};

Tokenizer.prototype.end = function(chunk) {
    if (this._ended) this._cbs.onerror(Error(".end() after done!"));
    if (chunk) this.write(chunk);

    this._ended = true;

    if (this._running) this._finish();
};

Tokenizer.prototype._finish = function() {
    //if there is remaining data, emit it in a reasonable way
    if (this._sectionStart < this._index) {
        this._handleTrailingData();
    }

    this._cbs.onend();
};

Tokenizer.prototype._handleTrailingData = function() {
    var data = this._buffer.substr(this._sectionStart);

    if (
        this._state === IN_CDATA ||
        this._state === AFTER_CDATA_1 ||
        this._state === AFTER_CDATA_2
    ) {
        this._cbs.oncdata(data);
    } else if (
        this._state === IN_COMMENT ||
        this._state === AFTER_COMMENT_1 ||
        this._state === AFTER_COMMENT_2
    ) {
        this._cbs.oncomment(data);
    } else if (this._state === IN_NAMED_ENTITY && !this._xmlMode) {
        this._parseLegacyEntity();
        if (this._sectionStart < this._index) {
            this._state = this._baseState;
            this._handleTrailingData();
        }
    } else if (this._state === IN_NUMERIC_ENTITY && !this._xmlMode) {
        this._decodeNumericEntity(2, 10);
        if (this._sectionStart < this._index) {
            this._state = this._baseState;
            this._handleTrailingData();
        }
    } else if (this._state === IN_HEX_ENTITY && !this._xmlMode) {
        this._decodeNumericEntity(3, 16);
        if (this._sectionStart < this._index) {
            this._state = this._baseState;
            this._handleTrailingData();
        }
    } else if (
        this._state !== IN_TAG_NAME &&
        this._state !== BEFORE_ATTRIBUTE_NAME &&
        this._state !== BEFORE_ATTRIBUTE_VALUE &&
        this._state !== AFTER_ATTRIBUTE_NAME &&
        this._state !== IN_ATTRIBUTE_NAME &&
        this._state !== IN_ATTRIBUTE_VALUE_SQ &&
        this._state !== IN_ATTRIBUTE_VALUE_DQ &&
        this._state !== IN_ATTRIBUTE_VALUE_NQ &&
        this._state !== IN_CLOSING_TAG_NAME
    ) {
        this._cbs.ontext(data);
    }
    //else, ignore remaining data
    //TODO add a way to remove current tag
};

Tokenizer.prototype.reset = function() {
    Tokenizer.call(
        this,
        { xmlMode: this._xmlMode, decodeEntities: this._decodeEntities },
        this._cbs
    );
};

Tokenizer.prototype.getAbsoluteIndex = function() {
    return this._bufferOffset + this._index;
};

Tokenizer.prototype._getSection = function() {
    return this._buffer.substring(this._sectionStart, this._index);
};

Tokenizer.prototype._emitToken = function(name) {
    this._cbs[name](this._getSection());
    this._sectionStart = -1;
};

Tokenizer.prototype._emitPartial = function(value) {
    if (this._baseState !== TEXT) {
        this._cbs.onattribdata(value); //TODO implement the new event
    } else {
        this._cbs.ontext(value);
    }
};

var inherits_browser = createCommonjsModule(function (module) {
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function () {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
  };
}
});

var Tokenizer$1 = Tokenizer_1;

/*
	Options:

	xmlMode: Disables the special behavior for script/style tags (false by default)
	lowerCaseAttributeNames: call .toLowerCase for each attribute name (true if xmlMode is `false`)
	lowerCaseTags: call .toLowerCase for each tag name (true if xmlMode is `false`)
*/

/*
	Callbacks:

	oncdataend,
	oncdatastart,
	onclosetag,
	oncomment,
	oncommentend,
	onerror,
	onopentag,
	onprocessinginstruction,
	onreset,
	ontext
*/

var formTags = {
    input: true,
    option: true,
    optgroup: true,
    select: true,
    button: true,
    datalist: true,
    textarea: true
};

var openImpliesClose = {
    tr: { tr: true, th: true, td: true },
    th: { th: true },
    td: { thead: true, th: true, td: true },
    body: { head: true, link: true, script: true },
    li: { li: true },
    p: { p: true },
    h1: { p: true },
    h2: { p: true },
    h3: { p: true },
    h4: { p: true },
    h5: { p: true },
    h6: { p: true },
    select: formTags,
    input: formTags,
    output: formTags,
    button: formTags,
    datalist: formTags,
    textarea: formTags,
    option: { option: true },
    optgroup: { optgroup: true }
};

var voidElements = {
    __proto__: null,
    area: true,
    base: true,
    basefont: true,
    br: true,
    col: true,
    command: true,
    embed: true,
    frame: true,
    hr: true,
    img: true,
    input: true,
    isindex: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
};

var foreignContextElements = {
    __proto__: null,
    math: true,
    svg: true
};
var htmlIntegrationElements = {
    __proto__: null,
    mi: true,
    mo: true,
    mn: true,
    ms: true,
    mtext: true,
    "annotation-xml": true,
    foreignObject: true,
    desc: true,
    title: true
};

var re_nameEnd = /\s|\//;

function Parser(cbs, options) {
    this._options = options || {};
    this._cbs = cbs || {};

    this._tagname = "";
    this._attribname = "";
    this._attribvalue = "";
    this._attribs = null;
    this._stack = [];
    this._foreignContext = [];

    this.startIndex = 0;
    this.endIndex = null;

    this._lowerCaseTagNames =
        "lowerCaseTags" in this._options
            ? !!this._options.lowerCaseTags
            : !this._options.xmlMode;
    this._lowerCaseAttributeNames =
        "lowerCaseAttributeNames" in this._options
            ? !!this._options.lowerCaseAttributeNames
            : !this._options.xmlMode;

    if (this._options.Tokenizer) {
        Tokenizer$1 = this._options.Tokenizer;
    }
    this._tokenizer = new Tokenizer$1(this._options, this);

    if (this._cbs.onparserinit) this._cbs.onparserinit(this);
}

inherits_browser(Parser, events.EventEmitter);

Parser.prototype._updatePosition = function(initialOffset) {
    if (this.endIndex === null) {
        if (this._tokenizer._sectionStart <= initialOffset) {
            this.startIndex = 0;
        } else {
            this.startIndex = this._tokenizer._sectionStart - initialOffset;
        }
    } else this.startIndex = this.endIndex + 1;
    this.endIndex = this._tokenizer.getAbsoluteIndex();
};

//Tokenizer event handlers
Parser.prototype.ontext = function(data) {
    this._updatePosition(1);
    this.endIndex--;

    if (this._cbs.ontext) this._cbs.ontext(data);
};

Parser.prototype.onopentagname = function(name) {
    if (this._lowerCaseTagNames) {
        name = name.toLowerCase();
    }

    this._tagname = name;

    if (!this._options.xmlMode && name in openImpliesClose) {
        for (
            var el;
            (el = this._stack[this._stack.length - 1]) in
            openImpliesClose[name];
            this.onclosetag(el)
        );
    }

    if (this._options.xmlMode || !(name in voidElements)) {
        this._stack.push(name);
        if (name in foreignContextElements) this._foreignContext.push(true);
        else if (name in htmlIntegrationElements)
            this._foreignContext.push(false);
    }

    if (this._cbs.onopentagname) this._cbs.onopentagname(name);
    if (this._cbs.onopentag) this._attribs = {};
};

Parser.prototype.onopentagend = function() {
    this._updatePosition(1);

    if (this._attribs) {
        if (this._cbs.onopentag)
            this._cbs.onopentag(this._tagname, this._attribs);
        this._attribs = null;
    }

    if (
        !this._options.xmlMode &&
        this._cbs.onclosetag &&
        this._tagname in voidElements
    ) {
        this._cbs.onclosetag(this._tagname);
    }

    this._tagname = "";
};

Parser.prototype.onclosetag = function(name) {
    this._updatePosition(1);

    if (this._lowerCaseTagNames) {
        name = name.toLowerCase();
    }
    
    if (name in foreignContextElements || name in htmlIntegrationElements) {
        this._foreignContext.pop();
    }

    if (
        this._stack.length &&
        (!(name in voidElements) || this._options.xmlMode)
    ) {
        var pos = this._stack.lastIndexOf(name);
        if (pos !== -1) {
            if (this._cbs.onclosetag) {
                pos = this._stack.length - pos;
                while (pos--) this._cbs.onclosetag(this._stack.pop());
            } else this._stack.length = pos;
        } else if (name === "p" && !this._options.xmlMode) {
            this.onopentagname(name);
            this._closeCurrentTag();
        }
    } else if (!this._options.xmlMode && (name === "br" || name === "p")) {
        this.onopentagname(name);
        this._closeCurrentTag();
    }
};

Parser.prototype.onselfclosingtag = function() {
    if (
        this._options.xmlMode ||
        this._options.recognizeSelfClosing ||
        this._foreignContext[this._foreignContext.length - 1]
    ) {
        this._closeCurrentTag();
    } else {
        this.onopentagend();
    }
};

Parser.prototype._closeCurrentTag = function() {
    var name = this._tagname;

    this.onopentagend();

    //self-closing tags will be on the top of the stack
    //(cheaper check than in onclosetag)
    if (this._stack[this._stack.length - 1] === name) {
        if (this._cbs.onclosetag) {
            this._cbs.onclosetag(name);
        }
        this._stack.pop();
        
    }
};

Parser.prototype.onattribname = function(name) {
    if (this._lowerCaseAttributeNames) {
        name = name.toLowerCase();
    }
    this._attribname = name;
};

Parser.prototype.onattribdata = function(value) {
    this._attribvalue += value;
};

Parser.prototype.onattribend = function() {
    if (this._cbs.onattribute)
        this._cbs.onattribute(this._attribname, this._attribvalue);
    if (
        this._attribs &&
        !Object.prototype.hasOwnProperty.call(this._attribs, this._attribname)
    ) {
        this._attribs[this._attribname] = this._attribvalue;
    }
    this._attribname = "";
    this._attribvalue = "";
};

Parser.prototype._getInstructionName = function(value) {
    var idx = value.search(re_nameEnd),
        name = idx < 0 ? value : value.substr(0, idx);

    if (this._lowerCaseTagNames) {
        name = name.toLowerCase();
    }

    return name;
};

Parser.prototype.ondeclaration = function(value) {
    if (this._cbs.onprocessinginstruction) {
        var name = this._getInstructionName(value);
        this._cbs.onprocessinginstruction("!" + name, "!" + value);
    }
};

Parser.prototype.onprocessinginstruction = function(value) {
    if (this._cbs.onprocessinginstruction) {
        var name = this._getInstructionName(value);
        this._cbs.onprocessinginstruction("?" + name, "?" + value);
    }
};

Parser.prototype.oncomment = function(value) {
    this._updatePosition(4);

    if (this._cbs.oncomment) this._cbs.oncomment(value);
    if (this._cbs.oncommentend) this._cbs.oncommentend();
};

Parser.prototype.oncdata = function(value) {
    this._updatePosition(1);

    if (this._options.xmlMode || this._options.recognizeCDATA) {
        if (this._cbs.oncdatastart) this._cbs.oncdatastart();
        if (this._cbs.ontext) this._cbs.ontext(value);
        if (this._cbs.oncdataend) this._cbs.oncdataend();
    } else {
        this.oncomment("[CDATA[" + value + "]]");
    }
};

Parser.prototype.onerror = function(err) {
    if (this._cbs.onerror) this._cbs.onerror(err);
};

Parser.prototype.onend = function() {
    if (this._cbs.onclosetag) {
        for (
            var i = this._stack.length;
            i > 0;
            this._cbs.onclosetag(this._stack[--i])
        );
    }
    if (this._cbs.onend) this._cbs.onend();
};

//Resets the parser to a blank state, ready to parse a new HTML document
Parser.prototype.reset = function() {
    if (this._cbs.onreset) this._cbs.onreset();
    this._tokenizer.reset();

    this._tagname = "";
    this._attribname = "";
    this._attribs = null;
    this._stack = [];

    if (this._cbs.onparserinit) this._cbs.onparserinit(this);
};

//Parses a complete HTML document and pushes it to the handler
Parser.prototype.parseComplete = function(data) {
    this.reset();
    this.end(data);
};

Parser.prototype.write = function(chunk) {
    this._tokenizer.write(chunk);
};

Parser.prototype.end = function(chunk) {
    this._tokenizer.end(chunk);
};

Parser.prototype.pause = function() {
    this._tokenizer.pause();
};

Parser.prototype.resume = function() {
    this._tokenizer.resume();
};

//alias for backwards compat
Parser.prototype.parseChunk = Parser.prototype.write;
Parser.prototype.done = Parser.prototype.end;

var Parser_1 = Parser;

//Types of elements found in the DOM
var domelementtype = {
	Text: "text", //Text
	Directive: "directive", //<? ... ?>
	Comment: "comment", //<!-- ... -->
	Script: "script", //<script> tags
	Style: "style", //<style> tags
	Tag: "tag", //Any tag
	CDATA: "cdata", //<![CDATA[ ... ]]>
	Doctype: "doctype",

	isTag: function(elem){
		return elem.type === "tag" || elem.type === "script" || elem.type === "style";
	}
};

var node = createCommonjsModule(function (module) {
// This object will be used as the prototype for Nodes when creating a
// DOM-Level-1-compliant structure.
var NodePrototype = module.exports = {
	get firstChild() {
		var children = this.children;
		return children && children[0] || null;
	},
	get lastChild() {
		var children = this.children;
		return children && children[children.length - 1] || null;
	},
	get nodeType() {
		return nodeTypes[this.type] || nodeTypes.element;
	}
};

var domLvl1 = {
	tagName: "name",
	childNodes: "children",
	parentNode: "parent",
	previousSibling: "prev",
	nextSibling: "next",
	nodeValue: "data"
};

var nodeTypes = {
	element: 1,
	text: 3,
	cdata: 4,
	comment: 8
};

Object.keys(domLvl1).forEach(function(key) {
	var shorthand = domLvl1[key];
	Object.defineProperty(NodePrototype, key, {
		get: function() {
			return this[shorthand] || null;
		},
		set: function(val) {
			this[shorthand] = val;
			return val;
		}
	});
});
});
var node_1 = node.firstChild;
var node_2 = node.lastChild;
var node_3 = node.nodeType;

var element = createCommonjsModule(function (module) {
// DOM-Level-1-compliant structure

var ElementPrototype = module.exports = Object.create(node);

var domLvl1 = {
	tagName: "name"
};

Object.keys(domLvl1).forEach(function(key) {
	var shorthand = domLvl1[key];
	Object.defineProperty(ElementPrototype, key, {
		get: function() {
			return this[shorthand] || null;
		},
		set: function(val) {
			this[shorthand] = val;
			return val;
		}
	});
});
});

var re_whitespace = /\s+/g;



function DomHandler(callback, options, elementCB){
	if(typeof callback === "object"){
		elementCB = options;
		options = callback;
		callback = null;
	} else if(typeof options === "function"){
		elementCB = options;
		options = defaultOpts;
	}
	this._callback = callback;
	this._options = options || defaultOpts;
	this._elementCB = elementCB;
	this.dom = [];
	this._done = false;
	this._tagStack = [];
	this._parser = this._parser || null;
}

//default options
var defaultOpts = {
	normalizeWhitespace: false, //Replace all whitespace with single spaces
	withStartIndices: false, //Add startIndex properties to nodes
	withEndIndices: false, //Add endIndex properties to nodes
};

DomHandler.prototype.onparserinit = function(parser){
	this._parser = parser;
};

//Resets the handler back to starting state
DomHandler.prototype.onreset = function(){
	DomHandler.call(this, this._callback, this._options, this._elementCB);
};

//Signals the handler that parsing is done
DomHandler.prototype.onend = function(){
	if(this._done) return;
	this._done = true;
	this._parser = null;
	this._handleCallback(null);
};

DomHandler.prototype._handleCallback =
DomHandler.prototype.onerror = function(error){
	if(typeof this._callback === "function"){
		this._callback(error, this.dom);
	} else {
		if(error) throw error;
	}
};

DomHandler.prototype.onclosetag = function(){
	//if(this._tagStack.pop().name !== name) this._handleCallback(Error("Tagname didn't match!"));
	
	var elem = this._tagStack.pop();

	if(this._options.withEndIndices && elem){
		elem.endIndex = this._parser.endIndex;
	}

	if(this._elementCB) this._elementCB(elem);
};

DomHandler.prototype._createDomElement = function(properties){
	if (!this._options.withDomLvl1) return properties;

	var element$1;
	if (properties.type === "tag") {
		element$1 = Object.create(element);
	} else {
		element$1 = Object.create(node);
	}

	for (var key in properties) {
		if (properties.hasOwnProperty(key)) {
			element$1[key] = properties[key];
		}
	}

	return element$1;
};

DomHandler.prototype._addDomElement = function(element){
	var parent = this._tagStack[this._tagStack.length - 1];
	var siblings = parent ? parent.children : this.dom;
	var previousSibling = siblings[siblings.length - 1];

	element.next = null;

	if(this._options.withStartIndices){
		element.startIndex = this._parser.startIndex;
	}
	if(this._options.withEndIndices){
		element.endIndex = this._parser.endIndex;
	}

	if(previousSibling){
		element.prev = previousSibling;
		previousSibling.next = element;
	} else {
		element.prev = null;
	}

	siblings.push(element);
	element.parent = parent || null;
};

DomHandler.prototype.onopentag = function(name, attribs){
	var properties = {
		type: name === "script" ? domelementtype.Script : name === "style" ? domelementtype.Style : domelementtype.Tag,
		name: name,
		attribs: attribs,
		children: []
	};

	var element = this._createDomElement(properties);

	this._addDomElement(element);

	this._tagStack.push(element);
};

DomHandler.prototype.ontext = function(data){
	//the ignoreWhitespace is officially dropped, but for now,
	//it's an alias for normalizeWhitespace
	var normalize = this._options.normalizeWhitespace || this._options.ignoreWhitespace;

	var lastTag;

	if(!this._tagStack.length && this.dom.length && (lastTag = this.dom[this.dom.length-1]).type === domelementtype.Text){
		if(normalize){
			lastTag.data = (lastTag.data + data).replace(re_whitespace, " ");
		} else {
			lastTag.data += data;
		}
	} else {
		if(
			this._tagStack.length &&
			(lastTag = this._tagStack[this._tagStack.length - 1]) &&
			(lastTag = lastTag.children[lastTag.children.length - 1]) &&
			lastTag.type === domelementtype.Text
		){
			if(normalize){
				lastTag.data = (lastTag.data + data).replace(re_whitespace, " ");
			} else {
				lastTag.data += data;
			}
		} else {
			if(normalize){
				data = data.replace(re_whitespace, " ");
			}

			var element = this._createDomElement({
				data: data,
				type: domelementtype.Text
			});

			this._addDomElement(element);
		}
	}
};

DomHandler.prototype.oncomment = function(data){
	var lastTag = this._tagStack[this._tagStack.length - 1];

	if(lastTag && lastTag.type === domelementtype.Comment){
		lastTag.data += data;
		return;
	}

	var properties = {
		data: data,
		type: domelementtype.Comment
	};

	var element = this._createDomElement(properties);

	this._addDomElement(element);
	this._tagStack.push(element);
};

DomHandler.prototype.oncdatastart = function(){
	var properties = {
		children: [{
			data: "",
			type: domelementtype.Text
		}],
		type: domelementtype.CDATA
	};

	var element = this._createDomElement(properties);

	this._addDomElement(element);
	this._tagStack.push(element);
};

DomHandler.prototype.oncommentend = DomHandler.prototype.oncdataend = function(){
	this._tagStack.pop();
};

DomHandler.prototype.onprocessinginstruction = function(name, data){
	var element = this._createDomElement({
		name: name,
		data: data,
		type: domelementtype.Directive
	});

	this._addDomElement(element);
};

var domhandler = DomHandler;

var lib = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */
function isTag(elem) {
    return (elem.type === "tag" /* Tag */ ||
        elem.type === "script" /* Script */ ||
        elem.type === "style" /* Style */);
}
exports.isTag = isTag;
// Exports for backwards compatibility
exports.Text = "text" /* Text */; //Text
exports.Directive = "directive" /* Directive */; //<? ... ?>
exports.Comment = "comment" /* Comment */; //<!-- ... -->
exports.Script = "script" /* Script */; //<script> tags
exports.Style = "style" /* Style */; //<style> tags
exports.Tag = "tag" /* Tag */; //Any tag
exports.CDATA = "cdata" /* CDATA */; //<![CDATA[ ... ]]>
exports.Doctype = "doctype" /* Doctype */;
});

unwrapExports(lib);
var lib_1 = lib.isTag;
var lib_2 = lib.Text;
var lib_3 = lib.Directive;
var lib_4 = lib.Comment;
var lib_5 = lib.Script;
var lib_6 = lib.Style;
var lib_7 = lib.Tag;
var lib_8 = lib.CDATA;
var lib_9 = lib.Doctype;

const Aacute$2 = "Á";
const aacute$2 = "á";
const Abreve$1 = "Ă";
const abreve$1 = "ă";
const ac$1 = "∾";
const acd$1 = "∿";
const acE$1 = "∾̳";
const Acirc$2 = "Â";
const acirc$2 = "â";
const acute$2 = "´";
const Acy$1 = "А";
const acy$1 = "а";
const AElig$2 = "Æ";
const aelig$2 = "æ";
const af$1 = "⁡";
const Afr$1 = "𝔄";
const afr$1 = "𝔞";
const Agrave$2 = "À";
const agrave$2 = "à";
const alefsym$1 = "ℵ";
const aleph$1 = "ℵ";
const Alpha$1 = "Α";
const alpha$1 = "α";
const Amacr$1 = "Ā";
const amacr$1 = "ā";
const amalg$1 = "⨿";
const amp$3 = "&";
const AMP$2 = "&";
const andand$1 = "⩕";
const And$1 = "⩓";
const and$1 = "∧";
const andd$1 = "⩜";
const andslope$1 = "⩘";
const andv$1 = "⩚";
const ang$1 = "∠";
const ange$1 = "⦤";
const angle$1 = "∠";
const angmsdaa$1 = "⦨";
const angmsdab$1 = "⦩";
const angmsdac$1 = "⦪";
const angmsdad$1 = "⦫";
const angmsdae$1 = "⦬";
const angmsdaf$1 = "⦭";
const angmsdag$1 = "⦮";
const angmsdah$1 = "⦯";
const angmsd$1 = "∡";
const angrt$1 = "∟";
const angrtvb$1 = "⊾";
const angrtvbd$1 = "⦝";
const angsph$1 = "∢";
const angst$1 = "Å";
const angzarr$1 = "⍼";
const Aogon$1 = "Ą";
const aogon$1 = "ą";
const Aopf$1 = "𝔸";
const aopf$1 = "𝕒";
const apacir$1 = "⩯";
const ap$1 = "≈";
const apE$1 = "⩰";
const ape$1 = "≊";
const apid$1 = "≋";
const apos$2 = "'";
const ApplyFunction$1 = "⁡";
const approx$1 = "≈";
const approxeq$1 = "≊";
const Aring$2 = "Å";
const aring$2 = "å";
const Ascr$1 = "𝒜";
const ascr$1 = "𝒶";
const Assign$1 = "≔";
const ast$1 = "*";
const asymp$1 = "≈";
const asympeq$1 = "≍";
const Atilde$2 = "Ã";
const atilde$2 = "ã";
const Auml$2 = "Ä";
const auml$2 = "ä";
const awconint$1 = "∳";
const awint$1 = "⨑";
const backcong$1 = "≌";
const backepsilon$1 = "϶";
const backprime$1 = "‵";
const backsim$1 = "∽";
const backsimeq$1 = "⋍";
const Backslash$1 = "∖";
const Barv$1 = "⫧";
const barvee$1 = "⊽";
const barwed$1 = "⌅";
const Barwed$1 = "⌆";
const barwedge$1 = "⌅";
const bbrk$1 = "⎵";
const bbrktbrk$1 = "⎶";
const bcong$1 = "≌";
const Bcy$1 = "Б";
const bcy$1 = "б";
const bdquo$1 = "„";
const becaus$1 = "∵";
const because$1 = "∵";
const Because$1 = "∵";
const bemptyv$1 = "⦰";
const bepsi$1 = "϶";
const bernou$1 = "ℬ";
const Bernoullis$1 = "ℬ";
const Beta$1 = "Β";
const beta$1 = "β";
const beth$1 = "ℶ";
const between$1 = "≬";
const Bfr$1 = "𝔅";
const bfr$1 = "𝔟";
const bigcap$1 = "⋂";
const bigcirc$1 = "◯";
const bigcup$1 = "⋃";
const bigodot$1 = "⨀";
const bigoplus$1 = "⨁";
const bigotimes$1 = "⨂";
const bigsqcup$1 = "⨆";
const bigstar$1 = "★";
const bigtriangledown$1 = "▽";
const bigtriangleup$1 = "△";
const biguplus$1 = "⨄";
const bigvee$1 = "⋁";
const bigwedge$1 = "⋀";
const bkarow$1 = "⤍";
const blacklozenge$1 = "⧫";
const blacksquare$1 = "▪";
const blacktriangle$1 = "▴";
const blacktriangledown$1 = "▾";
const blacktriangleleft$1 = "◂";
const blacktriangleright$1 = "▸";
const blank$1 = "␣";
const blk12$1 = "▒";
const blk14$1 = "░";
const blk34$1 = "▓";
const block$1 = "█";
const bne$1 = "=⃥";
const bnequiv$1 = "≡⃥";
const bNot$1 = "⫭";
const bnot$1 = "⌐";
const Bopf$1 = "𝔹";
const bopf$1 = "𝕓";
const bot$1 = "⊥";
const bottom$1 = "⊥";
const bowtie$1 = "⋈";
const boxbox$1 = "⧉";
const boxdl$1 = "┐";
const boxdL$1 = "╕";
const boxDl$1 = "╖";
const boxDL$1 = "╗";
const boxdr$1 = "┌";
const boxdR$1 = "╒";
const boxDr$1 = "╓";
const boxDR$1 = "╔";
const boxh$1 = "─";
const boxH$1 = "═";
const boxhd$1 = "┬";
const boxHd$1 = "╤";
const boxhD$1 = "╥";
const boxHD$1 = "╦";
const boxhu$1 = "┴";
const boxHu$1 = "╧";
const boxhU$1 = "╨";
const boxHU$1 = "╩";
const boxminus$1 = "⊟";
const boxplus$1 = "⊞";
const boxtimes$1 = "⊠";
const boxul$1 = "┘";
const boxuL$1 = "╛";
const boxUl$1 = "╜";
const boxUL$1 = "╝";
const boxur$1 = "└";
const boxuR$1 = "╘";
const boxUr$1 = "╙";
const boxUR$1 = "╚";
const boxv$1 = "│";
const boxV$1 = "║";
const boxvh$1 = "┼";
const boxvH$1 = "╪";
const boxVh$1 = "╫";
const boxVH$1 = "╬";
const boxvl$1 = "┤";
const boxvL$1 = "╡";
const boxVl$1 = "╢";
const boxVL$1 = "╣";
const boxvr$1 = "├";
const boxvR$1 = "╞";
const boxVr$1 = "╟";
const boxVR$1 = "╠";
const bprime$1 = "‵";
const breve$1 = "˘";
const Breve$1 = "˘";
const brvbar$2 = "¦";
const bscr$1 = "𝒷";
const Bscr$1 = "ℬ";
const bsemi$1 = "⁏";
const bsim$1 = "∽";
const bsime$1 = "⋍";
const bsolb$1 = "⧅";
const bsol$1 = "\\";
const bsolhsub$1 = "⟈";
const bull$1 = "•";
const bullet$1 = "•";
const bump$1 = "≎";
const bumpE$1 = "⪮";
const bumpe$1 = "≏";
const Bumpeq$1 = "≎";
const bumpeq$1 = "≏";
const Cacute$1 = "Ć";
const cacute$1 = "ć";
const capand$1 = "⩄";
const capbrcup$1 = "⩉";
const capcap$1 = "⩋";
const cap$1 = "∩";
const Cap$1 = "⋒";
const capcup$1 = "⩇";
const capdot$1 = "⩀";
const CapitalDifferentialD$1 = "ⅅ";
const caps$1 = "∩︀";
const caret$1 = "⁁";
const caron$1 = "ˇ";
const Cayleys$1 = "ℭ";
const ccaps$1 = "⩍";
const Ccaron$1 = "Č";
const ccaron$1 = "č";
const Ccedil$2 = "Ç";
const ccedil$2 = "ç";
const Ccirc$1 = "Ĉ";
const ccirc$1 = "ĉ";
const Cconint$1 = "∰";
const ccups$1 = "⩌";
const ccupssm$1 = "⩐";
const Cdot$1 = "Ċ";
const cdot$1 = "ċ";
const cedil$2 = "¸";
const Cedilla$1 = "¸";
const cemptyv$1 = "⦲";
const cent$2 = "¢";
const centerdot$1 = "·";
const CenterDot$1 = "·";
const cfr$1 = "𝔠";
const Cfr$1 = "ℭ";
const CHcy$1 = "Ч";
const chcy$1 = "ч";
const check$1 = "✓";
const checkmark$1 = "✓";
const Chi$1 = "Χ";
const chi$1 = "χ";
const circ$1 = "ˆ";
const circeq$1 = "≗";
const circlearrowleft$1 = "↺";
const circlearrowright$1 = "↻";
const circledast$1 = "⊛";
const circledcirc$1 = "⊚";
const circleddash$1 = "⊝";
const CircleDot$1 = "⊙";
const circledR$1 = "®";
const circledS$1 = "Ⓢ";
const CircleMinus$1 = "⊖";
const CirclePlus$1 = "⊕";
const CircleTimes$1 = "⊗";
const cir$1 = "○";
const cirE$1 = "⧃";
const cire$1 = "≗";
const cirfnint$1 = "⨐";
const cirmid$1 = "⫯";
const cirscir$1 = "⧂";
const ClockwiseContourIntegral$1 = "∲";
const CloseCurlyDoubleQuote$1 = "”";
const CloseCurlyQuote$1 = "’";
const clubs$1 = "♣";
const clubsuit$1 = "♣";
const colon$1 = ":";
const Colon$1 = "∷";
const Colone$1 = "⩴";
const colone$1 = "≔";
const coloneq$1 = "≔";
const comma$1 = ",";
const commat$1 = "@";
const comp$1 = "∁";
const compfn$1 = "∘";
const complement$1 = "∁";
const complexes$1 = "ℂ";
const cong$1 = "≅";
const congdot$1 = "⩭";
const Congruent$1 = "≡";
const conint$1 = "∮";
const Conint$1 = "∯";
const ContourIntegral$1 = "∮";
const copf$1 = "𝕔";
const Copf$1 = "ℂ";
const coprod$1 = "∐";
const Coproduct$1 = "∐";
const copy$2 = "©";
const COPY$2 = "©";
const copysr$1 = "℗";
const CounterClockwiseContourIntegral$1 = "∳";
const crarr$1 = "↵";
const cross$1 = "✗";
const Cross$1 = "⨯";
const Cscr$1 = "𝒞";
const cscr$1 = "𝒸";
const csub$1 = "⫏";
const csube$1 = "⫑";
const csup$1 = "⫐";
const csupe$1 = "⫒";
const ctdot$1 = "⋯";
const cudarrl$1 = "⤸";
const cudarrr$1 = "⤵";
const cuepr$1 = "⋞";
const cuesc$1 = "⋟";
const cularr$1 = "↶";
const cularrp$1 = "⤽";
const cupbrcap$1 = "⩈";
const cupcap$1 = "⩆";
const CupCap$1 = "≍";
const cup$1 = "∪";
const Cup$1 = "⋓";
const cupcup$1 = "⩊";
const cupdot$1 = "⊍";
const cupor$1 = "⩅";
const cups$1 = "∪︀";
const curarr$1 = "↷";
const curarrm$1 = "⤼";
const curlyeqprec$1 = "⋞";
const curlyeqsucc$1 = "⋟";
const curlyvee$1 = "⋎";
const curlywedge$1 = "⋏";
const curren$2 = "¤";
const curvearrowleft$1 = "↶";
const curvearrowright$1 = "↷";
const cuvee$1 = "⋎";
const cuwed$1 = "⋏";
const cwconint$1 = "∲";
const cwint$1 = "∱";
const cylcty$1 = "⌭";
const dagger$1 = "†";
const Dagger$1 = "‡";
const daleth$1 = "ℸ";
const darr$1 = "↓";
const Darr$1 = "↡";
const dArr$1 = "⇓";
const dash$1 = "‐";
const Dashv$1 = "⫤";
const dashv$1 = "⊣";
const dbkarow$1 = "⤏";
const dblac$1 = "˝";
const Dcaron$1 = "Ď";
const dcaron$1 = "ď";
const Dcy$1 = "Д";
const dcy$1 = "д";
const ddagger$1 = "‡";
const ddarr$1 = "⇊";
const DD$1 = "ⅅ";
const dd$1 = "ⅆ";
const DDotrahd$1 = "⤑";
const ddotseq$1 = "⩷";
const deg$2 = "°";
const Del$1 = "∇";
const Delta$1 = "Δ";
const delta$1 = "δ";
const demptyv$1 = "⦱";
const dfisht$1 = "⥿";
const Dfr$1 = "𝔇";
const dfr$1 = "𝔡";
const dHar$1 = "⥥";
const dharl$1 = "⇃";
const dharr$1 = "⇂";
const DiacriticalAcute$1 = "´";
const DiacriticalDot$1 = "˙";
const DiacriticalDoubleAcute$1 = "˝";
const DiacriticalGrave$1 = "`";
const DiacriticalTilde$1 = "˜";
const diam$1 = "⋄";
const diamond$1 = "⋄";
const Diamond$1 = "⋄";
const diamondsuit$1 = "♦";
const diams$1 = "♦";
const die$1 = "¨";
const DifferentialD$1 = "ⅆ";
const digamma$1 = "ϝ";
const disin$1 = "⋲";
const div$1 = "÷";
const divide$2 = "÷";
const divideontimes$1 = "⋇";
const divonx$1 = "⋇";
const DJcy$1 = "Ђ";
const djcy$1 = "ђ";
const dlcorn$1 = "⌞";
const dlcrop$1 = "⌍";
const dollar$1 = "$";
const Dopf$1 = "𝔻";
const dopf$1 = "𝕕";
const Dot$1 = "¨";
const dot$1 = "˙";
const DotDot$1 = "⃜";
const doteq$1 = "≐";
const doteqdot$1 = "≑";
const DotEqual$1 = "≐";
const dotminus$1 = "∸";
const dotplus$1 = "∔";
const dotsquare$1 = "⊡";
const doublebarwedge$1 = "⌆";
const DoubleContourIntegral$1 = "∯";
const DoubleDot$1 = "¨";
const DoubleDownArrow$1 = "⇓";
const DoubleLeftArrow$1 = "⇐";
const DoubleLeftRightArrow$1 = "⇔";
const DoubleLeftTee$1 = "⫤";
const DoubleLongLeftArrow$1 = "⟸";
const DoubleLongLeftRightArrow$1 = "⟺";
const DoubleLongRightArrow$1 = "⟹";
const DoubleRightArrow$1 = "⇒";
const DoubleRightTee$1 = "⊨";
const DoubleUpArrow$1 = "⇑";
const DoubleUpDownArrow$1 = "⇕";
const DoubleVerticalBar$1 = "∥";
const DownArrowBar$1 = "⤓";
const downarrow$1 = "↓";
const DownArrow$1 = "↓";
const Downarrow$1 = "⇓";
const DownArrowUpArrow$1 = "⇵";
const DownBreve$1 = "̑";
const downdownarrows$1 = "⇊";
const downharpoonleft$1 = "⇃";
const downharpoonright$1 = "⇂";
const DownLeftRightVector$1 = "⥐";
const DownLeftTeeVector$1 = "⥞";
const DownLeftVectorBar$1 = "⥖";
const DownLeftVector$1 = "↽";
const DownRightTeeVector$1 = "⥟";
const DownRightVectorBar$1 = "⥗";
const DownRightVector$1 = "⇁";
const DownTeeArrow$1 = "↧";
const DownTee$1 = "⊤";
const drbkarow$1 = "⤐";
const drcorn$1 = "⌟";
const drcrop$1 = "⌌";
const Dscr$1 = "𝒟";
const dscr$1 = "𝒹";
const DScy$1 = "Ѕ";
const dscy$1 = "ѕ";
const dsol$1 = "⧶";
const Dstrok$1 = "Đ";
const dstrok$1 = "đ";
const dtdot$1 = "⋱";
const dtri$1 = "▿";
const dtrif$1 = "▾";
const duarr$1 = "⇵";
const duhar$1 = "⥯";
const dwangle$1 = "⦦";
const DZcy$1 = "Џ";
const dzcy$1 = "џ";
const dzigrarr$1 = "⟿";
const Eacute$2 = "É";
const eacute$2 = "é";
const easter$1 = "⩮";
const Ecaron$1 = "Ě";
const ecaron$1 = "ě";
const Ecirc$2 = "Ê";
const ecirc$2 = "ê";
const ecir$1 = "≖";
const ecolon$1 = "≕";
const Ecy$1 = "Э";
const ecy$1 = "э";
const eDDot$1 = "⩷";
const Edot$1 = "Ė";
const edot$1 = "ė";
const eDot$1 = "≑";
const ee$1 = "ⅇ";
const efDot$1 = "≒";
const Efr$1 = "𝔈";
const efr$1 = "𝔢";
const eg$1 = "⪚";
const Egrave$2 = "È";
const egrave$2 = "è";
const egs$1 = "⪖";
const egsdot$1 = "⪘";
const el$1 = "⪙";
const Element$1 = "∈";
const elinters$1 = "⏧";
const ell$1 = "ℓ";
const els$1 = "⪕";
const elsdot$1 = "⪗";
const Emacr$1 = "Ē";
const emacr$1 = "ē";
const empty$1 = "∅";
const emptyset$1 = "∅";
const EmptySmallSquare$1 = "◻";
const emptyv$1 = "∅";
const EmptyVerySmallSquare$1 = "▫";
const emsp13$1 = " ";
const emsp14$1 = " ";
const emsp$1 = " ";
const ENG$1 = "Ŋ";
const eng$1 = "ŋ";
const ensp$1 = " ";
const Eogon$1 = "Ę";
const eogon$1 = "ę";
const Eopf$1 = "𝔼";
const eopf$1 = "𝕖";
const epar$1 = "⋕";
const eparsl$1 = "⧣";
const eplus$1 = "⩱";
const epsi$1 = "ε";
const Epsilon$1 = "Ε";
const epsilon$1 = "ε";
const epsiv$1 = "ϵ";
const eqcirc$1 = "≖";
const eqcolon$1 = "≕";
const eqsim$1 = "≂";
const eqslantgtr$1 = "⪖";
const eqslantless$1 = "⪕";
const Equal$1 = "⩵";
const equals$1 = "=";
const EqualTilde$1 = "≂";
const equest$1 = "≟";
const Equilibrium$1 = "⇌";
const equiv$1 = "≡";
const equivDD$1 = "⩸";
const eqvparsl$1 = "⧥";
const erarr$1 = "⥱";
const erDot$1 = "≓";
const escr$1 = "ℯ";
const Escr$1 = "ℰ";
const esdot$1 = "≐";
const Esim$1 = "⩳";
const esim$1 = "≂";
const Eta$1 = "Η";
const eta$1 = "η";
const ETH$2 = "Ð";
const eth$2 = "ð";
const Euml$2 = "Ë";
const euml$2 = "ë";
const euro$1 = "€";
const excl$1 = "!";
const exist$1 = "∃";
const Exists$1 = "∃";
const expectation$1 = "ℰ";
const exponentiale$1 = "ⅇ";
const ExponentialE$1 = "ⅇ";
const fallingdotseq$1 = "≒";
const Fcy$1 = "Ф";
const fcy$1 = "ф";
const female$1 = "♀";
const ffilig$1 = "ﬃ";
const fflig$1 = "ﬀ";
const ffllig$1 = "ﬄ";
const Ffr$1 = "𝔉";
const ffr$1 = "𝔣";
const filig$1 = "ﬁ";
const FilledSmallSquare$1 = "◼";
const FilledVerySmallSquare$1 = "▪";
const fjlig$1 = "fj";
const flat$1 = "♭";
const fllig$1 = "ﬂ";
const fltns$1 = "▱";
const fnof$1 = "ƒ";
const Fopf$1 = "𝔽";
const fopf$1 = "𝕗";
const forall$1 = "∀";
const ForAll$1 = "∀";
const fork$1 = "⋔";
const forkv$1 = "⫙";
const Fouriertrf$1 = "ℱ";
const fpartint$1 = "⨍";
const frac12$2 = "½";
const frac13$1 = "⅓";
const frac14$2 = "¼";
const frac15$1 = "⅕";
const frac16$1 = "⅙";
const frac18$1 = "⅛";
const frac23$1 = "⅔";
const frac25$1 = "⅖";
const frac34$2 = "¾";
const frac35$1 = "⅗";
const frac38$1 = "⅜";
const frac45$1 = "⅘";
const frac56$1 = "⅚";
const frac58$1 = "⅝";
const frac78$1 = "⅞";
const frasl$1 = "⁄";
const frown$1 = "⌢";
const fscr$1 = "𝒻";
const Fscr$1 = "ℱ";
const gacute$1 = "ǵ";
const Gamma$1 = "Γ";
const gamma$1 = "γ";
const Gammad$1 = "Ϝ";
const gammad$1 = "ϝ";
const gap$1 = "⪆";
const Gbreve$1 = "Ğ";
const gbreve$1 = "ğ";
const Gcedil$1 = "Ģ";
const Gcirc$1 = "Ĝ";
const gcirc$1 = "ĝ";
const Gcy$1 = "Г";
const gcy$1 = "г";
const Gdot$1 = "Ġ";
const gdot$1 = "ġ";
const ge$1 = "≥";
const gE$1 = "≧";
const gEl$1 = "⪌";
const gel$1 = "⋛";
const geq$1 = "≥";
const geqq$1 = "≧";
const geqslant$1 = "⩾";
const gescc$1 = "⪩";
const ges$1 = "⩾";
const gesdot$1 = "⪀";
const gesdoto$1 = "⪂";
const gesdotol$1 = "⪄";
const gesl$1 = "⋛︀";
const gesles$1 = "⪔";
const Gfr$1 = "𝔊";
const gfr$1 = "𝔤";
const gg$1 = "≫";
const Gg$1 = "⋙";
const ggg$1 = "⋙";
const gimel$1 = "ℷ";
const GJcy$1 = "Ѓ";
const gjcy$1 = "ѓ";
const gla$1 = "⪥";
const gl$1 = "≷";
const glE$1 = "⪒";
const glj$1 = "⪤";
const gnap$1 = "⪊";
const gnapprox$1 = "⪊";
const gne$1 = "⪈";
const gnE$1 = "≩";
const gneq$1 = "⪈";
const gneqq$1 = "≩";
const gnsim$1 = "⋧";
const Gopf$1 = "𝔾";
const gopf$1 = "𝕘";
const grave$1 = "`";
const GreaterEqual$1 = "≥";
const GreaterEqualLess$1 = "⋛";
const GreaterFullEqual$1 = "≧";
const GreaterGreater$1 = "⪢";
const GreaterLess$1 = "≷";
const GreaterSlantEqual$1 = "⩾";
const GreaterTilde$1 = "≳";
const Gscr$1 = "𝒢";
const gscr$1 = "ℊ";
const gsim$1 = "≳";
const gsime$1 = "⪎";
const gsiml$1 = "⪐";
const gtcc$1 = "⪧";
const gtcir$1 = "⩺";
const gt$3 = ">";
const GT$2 = ">";
const Gt$1 = "≫";
const gtdot$1 = "⋗";
const gtlPar$1 = "⦕";
const gtquest$1 = "⩼";
const gtrapprox$1 = "⪆";
const gtrarr$1 = "⥸";
const gtrdot$1 = "⋗";
const gtreqless$1 = "⋛";
const gtreqqless$1 = "⪌";
const gtrless$1 = "≷";
const gtrsim$1 = "≳";
const gvertneqq$1 = "≩︀";
const gvnE$1 = "≩︀";
const Hacek$1 = "ˇ";
const hairsp$1 = " ";
const half$1 = "½";
const hamilt$1 = "ℋ";
const HARDcy$1 = "Ъ";
const hardcy$1 = "ъ";
const harrcir$1 = "⥈";
const harr$1 = "↔";
const hArr$1 = "⇔";
const harrw$1 = "↭";
const Hat$1 = "^";
const hbar$1 = "ℏ";
const Hcirc$1 = "Ĥ";
const hcirc$1 = "ĥ";
const hearts$1 = "♥";
const heartsuit$1 = "♥";
const hellip$1 = "…";
const hercon$1 = "⊹";
const hfr$1 = "𝔥";
const Hfr$1 = "ℌ";
const HilbertSpace$1 = "ℋ";
const hksearow$1 = "⤥";
const hkswarow$1 = "⤦";
const hoarr$1 = "⇿";
const homtht$1 = "∻";
const hookleftarrow$1 = "↩";
const hookrightarrow$1 = "↪";
const hopf$1 = "𝕙";
const Hopf$1 = "ℍ";
const horbar$1 = "―";
const HorizontalLine$1 = "─";
const hscr$1 = "𝒽";
const Hscr$1 = "ℋ";
const hslash$1 = "ℏ";
const Hstrok$1 = "Ħ";
const hstrok$1 = "ħ";
const HumpDownHump$1 = "≎";
const HumpEqual$1 = "≏";
const hybull$1 = "⁃";
const hyphen$1 = "‐";
const Iacute$2 = "Í";
const iacute$2 = "í";
const ic$1 = "⁣";
const Icirc$2 = "Î";
const icirc$2 = "î";
const Icy$1 = "И";
const icy$1 = "и";
const Idot$1 = "İ";
const IEcy$1 = "Е";
const iecy$1 = "е";
const iexcl$2 = "¡";
const iff$1 = "⇔";
const ifr$1 = "𝔦";
const Ifr$1 = "ℑ";
const Igrave$2 = "Ì";
const igrave$2 = "ì";
const ii$1 = "ⅈ";
const iiiint$1 = "⨌";
const iiint$1 = "∭";
const iinfin$1 = "⧜";
const iiota$1 = "℩";
const IJlig$1 = "Ĳ";
const ijlig$1 = "ĳ";
const Imacr$1 = "Ī";
const imacr$1 = "ī";
const image$1 = "ℑ";
const ImaginaryI$1 = "ⅈ";
const imagline$1 = "ℐ";
const imagpart$1 = "ℑ";
const imath$1 = "ı";
const Im$1 = "ℑ";
const imof$1 = "⊷";
const imped$1 = "Ƶ";
const Implies$1 = "⇒";
const incare$1 = "℅";
const infin$1 = "∞";
const infintie$1 = "⧝";
const inodot$1 = "ı";
const intcal$1 = "⊺";
const int$1 = "∫";
const Int$1 = "∬";
const integers$1 = "ℤ";
const Integral$1 = "∫";
const intercal$1 = "⊺";
const Intersection$1 = "⋂";
const intlarhk$1 = "⨗";
const intprod$1 = "⨼";
const InvisibleComma$1 = "⁣";
const InvisibleTimes$1 = "⁢";
const IOcy$1 = "Ё";
const iocy$1 = "ё";
const Iogon$1 = "Į";
const iogon$1 = "į";
const Iopf$1 = "𝕀";
const iopf$1 = "𝕚";
const Iota$1 = "Ι";
const iota$1 = "ι";
const iprod$1 = "⨼";
const iquest$2 = "¿";
const iscr$1 = "𝒾";
const Iscr$1 = "ℐ";
const isin$1 = "∈";
const isindot$1 = "⋵";
const isinE$1 = "⋹";
const isins$1 = "⋴";
const isinsv$1 = "⋳";
const isinv$1 = "∈";
const it$1 = "⁢";
const Itilde$1 = "Ĩ";
const itilde$1 = "ĩ";
const Iukcy$1 = "І";
const iukcy$1 = "і";
const Iuml$2 = "Ï";
const iuml$2 = "ï";
const Jcirc$1 = "Ĵ";
const jcirc$1 = "ĵ";
const Jcy$1 = "Й";
const jcy$1 = "й";
const Jfr$1 = "𝔍";
const jfr$1 = "𝔧";
const jmath$1 = "ȷ";
const Jopf$1 = "𝕁";
const jopf$1 = "𝕛";
const Jscr$1 = "𝒥";
const jscr$1 = "𝒿";
const Jsercy$1 = "Ј";
const jsercy$1 = "ј";
const Jukcy$1 = "Є";
const jukcy$1 = "є";
const Kappa$1 = "Κ";
const kappa$1 = "κ";
const kappav$1 = "ϰ";
const Kcedil$1 = "Ķ";
const kcedil$1 = "ķ";
const Kcy$1 = "К";
const kcy$1 = "к";
const Kfr$1 = "𝔎";
const kfr$1 = "𝔨";
const kgreen$1 = "ĸ";
const KHcy$1 = "Х";
const khcy$1 = "х";
const KJcy$1 = "Ќ";
const kjcy$1 = "ќ";
const Kopf$1 = "𝕂";
const kopf$1 = "𝕜";
const Kscr$1 = "𝒦";
const kscr$1 = "𝓀";
const lAarr$1 = "⇚";
const Lacute$1 = "Ĺ";
const lacute$1 = "ĺ";
const laemptyv$1 = "⦴";
const lagran$1 = "ℒ";
const Lambda$1 = "Λ";
const lambda$1 = "λ";
const lang$1 = "⟨";
const Lang$1 = "⟪";
const langd$1 = "⦑";
const langle$1 = "⟨";
const lap$1 = "⪅";
const Laplacetrf$1 = "ℒ";
const laquo$2 = "«";
const larrb$1 = "⇤";
const larrbfs$1 = "⤟";
const larr$1 = "←";
const Larr$1 = "↞";
const lArr$1 = "⇐";
const larrfs$1 = "⤝";
const larrhk$1 = "↩";
const larrlp$1 = "↫";
const larrpl$1 = "⤹";
const larrsim$1 = "⥳";
const larrtl$1 = "↢";
const latail$1 = "⤙";
const lAtail$1 = "⤛";
const lat$1 = "⪫";
const late$1 = "⪭";
const lates$1 = "⪭︀";
const lbarr$1 = "⤌";
const lBarr$1 = "⤎";
const lbbrk$1 = "❲";
const lbrace$1 = "{";
const lbrack$1 = "[";
const lbrke$1 = "⦋";
const lbrksld$1 = "⦏";
const lbrkslu$1 = "⦍";
const Lcaron$1 = "Ľ";
const lcaron$1 = "ľ";
const Lcedil$1 = "Ļ";
const lcedil$1 = "ļ";
const lceil$1 = "⌈";
const lcub$1 = "{";
const Lcy$1 = "Л";
const lcy$1 = "л";
const ldca$1 = "⤶";
const ldquo$1 = "“";
const ldquor$1 = "„";
const ldrdhar$1 = "⥧";
const ldrushar$1 = "⥋";
const ldsh$1 = "↲";
const le$1 = "≤";
const lE$1 = "≦";
const LeftAngleBracket$1 = "⟨";
const LeftArrowBar$1 = "⇤";
const leftarrow$1 = "←";
const LeftArrow$1 = "←";
const Leftarrow$1 = "⇐";
const LeftArrowRightArrow$1 = "⇆";
const leftarrowtail$1 = "↢";
const LeftCeiling$1 = "⌈";
const LeftDoubleBracket$1 = "⟦";
const LeftDownTeeVector$1 = "⥡";
const LeftDownVectorBar$1 = "⥙";
const LeftDownVector$1 = "⇃";
const LeftFloor$1 = "⌊";
const leftharpoondown$1 = "↽";
const leftharpoonup$1 = "↼";
const leftleftarrows$1 = "⇇";
const leftrightarrow$1 = "↔";
const LeftRightArrow$1 = "↔";
const Leftrightarrow$1 = "⇔";
const leftrightarrows$1 = "⇆";
const leftrightharpoons$1 = "⇋";
const leftrightsquigarrow$1 = "↭";
const LeftRightVector$1 = "⥎";
const LeftTeeArrow$1 = "↤";
const LeftTee$1 = "⊣";
const LeftTeeVector$1 = "⥚";
const leftthreetimes$1 = "⋋";
const LeftTriangleBar$1 = "⧏";
const LeftTriangle$1 = "⊲";
const LeftTriangleEqual$1 = "⊴";
const LeftUpDownVector$1 = "⥑";
const LeftUpTeeVector$1 = "⥠";
const LeftUpVectorBar$1 = "⥘";
const LeftUpVector$1 = "↿";
const LeftVectorBar$1 = "⥒";
const LeftVector$1 = "↼";
const lEg$1 = "⪋";
const leg$1 = "⋚";
const leq$1 = "≤";
const leqq$1 = "≦";
const leqslant$1 = "⩽";
const lescc$1 = "⪨";
const les$1 = "⩽";
const lesdot$1 = "⩿";
const lesdoto$1 = "⪁";
const lesdotor$1 = "⪃";
const lesg$1 = "⋚︀";
const lesges$1 = "⪓";
const lessapprox$1 = "⪅";
const lessdot$1 = "⋖";
const lesseqgtr$1 = "⋚";
const lesseqqgtr$1 = "⪋";
const LessEqualGreater$1 = "⋚";
const LessFullEqual$1 = "≦";
const LessGreater$1 = "≶";
const lessgtr$1 = "≶";
const LessLess$1 = "⪡";
const lesssim$1 = "≲";
const LessSlantEqual$1 = "⩽";
const LessTilde$1 = "≲";
const lfisht$1 = "⥼";
const lfloor$1 = "⌊";
const Lfr$1 = "𝔏";
const lfr$1 = "𝔩";
const lg$1 = "≶";
const lgE$1 = "⪑";
const lHar$1 = "⥢";
const lhard$1 = "↽";
const lharu$1 = "↼";
const lharul$1 = "⥪";
const lhblk$1 = "▄";
const LJcy$1 = "Љ";
const ljcy$1 = "љ";
const llarr$1 = "⇇";
const ll$1 = "≪";
const Ll$1 = "⋘";
const llcorner$1 = "⌞";
const Lleftarrow$1 = "⇚";
const llhard$1 = "⥫";
const lltri$1 = "◺";
const Lmidot$1 = "Ŀ";
const lmidot$1 = "ŀ";
const lmoustache$1 = "⎰";
const lmoust$1 = "⎰";
const lnap$1 = "⪉";
const lnapprox$1 = "⪉";
const lne$1 = "⪇";
const lnE$1 = "≨";
const lneq$1 = "⪇";
const lneqq$1 = "≨";
const lnsim$1 = "⋦";
const loang$1 = "⟬";
const loarr$1 = "⇽";
const lobrk$1 = "⟦";
const longleftarrow$1 = "⟵";
const LongLeftArrow$1 = "⟵";
const Longleftarrow$1 = "⟸";
const longleftrightarrow$1 = "⟷";
const LongLeftRightArrow$1 = "⟷";
const Longleftrightarrow$1 = "⟺";
const longmapsto$1 = "⟼";
const longrightarrow$1 = "⟶";
const LongRightArrow$1 = "⟶";
const Longrightarrow$1 = "⟹";
const looparrowleft$1 = "↫";
const looparrowright$1 = "↬";
const lopar$1 = "⦅";
const Lopf$1 = "𝕃";
const lopf$1 = "𝕝";
const loplus$1 = "⨭";
const lotimes$1 = "⨴";
const lowast$1 = "∗";
const lowbar$1 = "_";
const LowerLeftArrow$1 = "↙";
const LowerRightArrow$1 = "↘";
const loz$1 = "◊";
const lozenge$1 = "◊";
const lozf$1 = "⧫";
const lpar$1 = "(";
const lparlt$1 = "⦓";
const lrarr$1 = "⇆";
const lrcorner$1 = "⌟";
const lrhar$1 = "⇋";
const lrhard$1 = "⥭";
const lrm$1 = "‎";
const lrtri$1 = "⊿";
const lsaquo$1 = "‹";
const lscr$1 = "𝓁";
const Lscr$1 = "ℒ";
const lsh$1 = "↰";
const Lsh$1 = "↰";
const lsim$1 = "≲";
const lsime$1 = "⪍";
const lsimg$1 = "⪏";
const lsqb$1 = "[";
const lsquo$1 = "‘";
const lsquor$1 = "‚";
const Lstrok$1 = "Ł";
const lstrok$1 = "ł";
const ltcc$1 = "⪦";
const ltcir$1 = "⩹";
const lt$3 = "<";
const LT$2 = "<";
const Lt$1 = "≪";
const ltdot$1 = "⋖";
const lthree$1 = "⋋";
const ltimes$1 = "⋉";
const ltlarr$1 = "⥶";
const ltquest$1 = "⩻";
const ltri$1 = "◃";
const ltrie$1 = "⊴";
const ltrif$1 = "◂";
const ltrPar$1 = "⦖";
const lurdshar$1 = "⥊";
const luruhar$1 = "⥦";
const lvertneqq$1 = "≨︀";
const lvnE$1 = "≨︀";
const macr$2 = "¯";
const male$1 = "♂";
const malt$1 = "✠";
const maltese$1 = "✠";
const map$1 = "↦";
const mapsto$1 = "↦";
const mapstodown$1 = "↧";
const mapstoleft$1 = "↤";
const mapstoup$1 = "↥";
const marker$1 = "▮";
const mcomma$1 = "⨩";
const Mcy$1 = "М";
const mcy$1 = "м";
const mdash$1 = "—";
const mDDot$1 = "∺";
const measuredangle$1 = "∡";
const MediumSpace$1 = " ";
const Mellintrf$1 = "ℳ";
const Mfr$1 = "𝔐";
const mfr$1 = "𝔪";
const mho$1 = "℧";
const micro$2 = "µ";
const midast$1 = "*";
const midcir$1 = "⫰";
const mid$1 = "∣";
const middot$2 = "·";
const minusb$1 = "⊟";
const minus$1 = "−";
const minusd$1 = "∸";
const minusdu$1 = "⨪";
const MinusPlus$1 = "∓";
const mlcp$1 = "⫛";
const mldr$1 = "…";
const mnplus$1 = "∓";
const models$1 = "⊧";
const Mopf$1 = "𝕄";
const mopf$1 = "𝕞";
const mp$1 = "∓";
const mscr$1 = "𝓂";
const Mscr$1 = "ℳ";
const mstpos$1 = "∾";
const Mu$1 = "Μ";
const mu$1 = "μ";
const multimap$1 = "⊸";
const mumap$1 = "⊸";
const nabla$1 = "∇";
const Nacute$1 = "Ń";
const nacute$1 = "ń";
const nang$1 = "∠⃒";
const nap$1 = "≉";
const napE$1 = "⩰̸";
const napid$1 = "≋̸";
const napos$1 = "ŉ";
const napprox$1 = "≉";
const natural$1 = "♮";
const naturals$1 = "ℕ";
const natur$1 = "♮";
const nbsp$2 = " ";
const nbump$1 = "≎̸";
const nbumpe$1 = "≏̸";
const ncap$1 = "⩃";
const Ncaron$1 = "Ň";
const ncaron$1 = "ň";
const Ncedil$1 = "Ņ";
const ncedil$1 = "ņ";
const ncong$1 = "≇";
const ncongdot$1 = "⩭̸";
const ncup$1 = "⩂";
const Ncy$1 = "Н";
const ncy$1 = "н";
const ndash$1 = "–";
const nearhk$1 = "⤤";
const nearr$1 = "↗";
const neArr$1 = "⇗";
const nearrow$1 = "↗";
const ne$1 = "≠";
const nedot$1 = "≐̸";
const NegativeMediumSpace$1 = "​";
const NegativeThickSpace$1 = "​";
const NegativeThinSpace$1 = "​";
const NegativeVeryThinSpace$1 = "​";
const nequiv$1 = "≢";
const nesear$1 = "⤨";
const nesim$1 = "≂̸";
const NestedGreaterGreater$1 = "≫";
const NestedLessLess$1 = "≪";
const NewLine$1 = "\n";
const nexist$1 = "∄";
const nexists$1 = "∄";
const Nfr$1 = "𝔑";
const nfr$1 = "𝔫";
const ngE$1 = "≧̸";
const nge$1 = "≱";
const ngeq$1 = "≱";
const ngeqq$1 = "≧̸";
const ngeqslant$1 = "⩾̸";
const nges$1 = "⩾̸";
const nGg$1 = "⋙̸";
const ngsim$1 = "≵";
const nGt$1 = "≫⃒";
const ngt$1 = "≯";
const ngtr$1 = "≯";
const nGtv$1 = "≫̸";
const nharr$1 = "↮";
const nhArr$1 = "⇎";
const nhpar$1 = "⫲";
const ni$1 = "∋";
const nis$1 = "⋼";
const nisd$1 = "⋺";
const niv$1 = "∋";
const NJcy$1 = "Њ";
const njcy$1 = "њ";
const nlarr$1 = "↚";
const nlArr$1 = "⇍";
const nldr$1 = "‥";
const nlE$1 = "≦̸";
const nle$1 = "≰";
const nleftarrow$1 = "↚";
const nLeftarrow$1 = "⇍";
const nleftrightarrow$1 = "↮";
const nLeftrightarrow$1 = "⇎";
const nleq$1 = "≰";
const nleqq$1 = "≦̸";
const nleqslant$1 = "⩽̸";
const nles$1 = "⩽̸";
const nless$1 = "≮";
const nLl$1 = "⋘̸";
const nlsim$1 = "≴";
const nLt$1 = "≪⃒";
const nlt$1 = "≮";
const nltri$1 = "⋪";
const nltrie$1 = "⋬";
const nLtv$1 = "≪̸";
const nmid$1 = "∤";
const NoBreak$1 = "⁠";
const NonBreakingSpace$1 = " ";
const nopf$1 = "𝕟";
const Nopf$1 = "ℕ";
const Not$1 = "⫬";
const not$2 = "¬";
const NotCongruent$1 = "≢";
const NotCupCap$1 = "≭";
const NotDoubleVerticalBar$1 = "∦";
const NotElement$1 = "∉";
const NotEqual$1 = "≠";
const NotEqualTilde$1 = "≂̸";
const NotExists$1 = "∄";
const NotGreater$1 = "≯";
const NotGreaterEqual$1 = "≱";
const NotGreaterFullEqual$1 = "≧̸";
const NotGreaterGreater$1 = "≫̸";
const NotGreaterLess$1 = "≹";
const NotGreaterSlantEqual$1 = "⩾̸";
const NotGreaterTilde$1 = "≵";
const NotHumpDownHump$1 = "≎̸";
const NotHumpEqual$1 = "≏̸";
const notin$1 = "∉";
const notindot$1 = "⋵̸";
const notinE$1 = "⋹̸";
const notinva$1 = "∉";
const notinvb$1 = "⋷";
const notinvc$1 = "⋶";
const NotLeftTriangleBar$1 = "⧏̸";
const NotLeftTriangle$1 = "⋪";
const NotLeftTriangleEqual$1 = "⋬";
const NotLess$1 = "≮";
const NotLessEqual$1 = "≰";
const NotLessGreater$1 = "≸";
const NotLessLess$1 = "≪̸";
const NotLessSlantEqual$1 = "⩽̸";
const NotLessTilde$1 = "≴";
const NotNestedGreaterGreater$1 = "⪢̸";
const NotNestedLessLess$1 = "⪡̸";
const notni$1 = "∌";
const notniva$1 = "∌";
const notnivb$1 = "⋾";
const notnivc$1 = "⋽";
const NotPrecedes$1 = "⊀";
const NotPrecedesEqual$1 = "⪯̸";
const NotPrecedesSlantEqual$1 = "⋠";
const NotReverseElement$1 = "∌";
const NotRightTriangleBar$1 = "⧐̸";
const NotRightTriangle$1 = "⋫";
const NotRightTriangleEqual$1 = "⋭";
const NotSquareSubset$1 = "⊏̸";
const NotSquareSubsetEqual$1 = "⋢";
const NotSquareSuperset$1 = "⊐̸";
const NotSquareSupersetEqual$1 = "⋣";
const NotSubset$1 = "⊂⃒";
const NotSubsetEqual$1 = "⊈";
const NotSucceeds$1 = "⊁";
const NotSucceedsEqual$1 = "⪰̸";
const NotSucceedsSlantEqual$1 = "⋡";
const NotSucceedsTilde$1 = "≿̸";
const NotSuperset$1 = "⊃⃒";
const NotSupersetEqual$1 = "⊉";
const NotTilde$1 = "≁";
const NotTildeEqual$1 = "≄";
const NotTildeFullEqual$1 = "≇";
const NotTildeTilde$1 = "≉";
const NotVerticalBar$1 = "∤";
const nparallel$1 = "∦";
const npar$1 = "∦";
const nparsl$1 = "⫽⃥";
const npart$1 = "∂̸";
const npolint$1 = "⨔";
const npr$1 = "⊀";
const nprcue$1 = "⋠";
const nprec$1 = "⊀";
const npreceq$1 = "⪯̸";
const npre$1 = "⪯̸";
const nrarrc$1 = "⤳̸";
const nrarr$1 = "↛";
const nrArr$1 = "⇏";
const nrarrw$1 = "↝̸";
const nrightarrow$1 = "↛";
const nRightarrow$1 = "⇏";
const nrtri$1 = "⋫";
const nrtrie$1 = "⋭";
const nsc$1 = "⊁";
const nsccue$1 = "⋡";
const nsce$1 = "⪰̸";
const Nscr$1 = "𝒩";
const nscr$1 = "𝓃";
const nshortmid$1 = "∤";
const nshortparallel$1 = "∦";
const nsim$1 = "≁";
const nsime$1 = "≄";
const nsimeq$1 = "≄";
const nsmid$1 = "∤";
const nspar$1 = "∦";
const nsqsube$1 = "⋢";
const nsqsupe$1 = "⋣";
const nsub$1 = "⊄";
const nsubE$1 = "⫅̸";
const nsube$1 = "⊈";
const nsubset$1 = "⊂⃒";
const nsubseteq$1 = "⊈";
const nsubseteqq$1 = "⫅̸";
const nsucc$1 = "⊁";
const nsucceq$1 = "⪰̸";
const nsup$1 = "⊅";
const nsupE$1 = "⫆̸";
const nsupe$1 = "⊉";
const nsupset$1 = "⊃⃒";
const nsupseteq$1 = "⊉";
const nsupseteqq$1 = "⫆̸";
const ntgl$1 = "≹";
const Ntilde$2 = "Ñ";
const ntilde$2 = "ñ";
const ntlg$1 = "≸";
const ntriangleleft$1 = "⋪";
const ntrianglelefteq$1 = "⋬";
const ntriangleright$1 = "⋫";
const ntrianglerighteq$1 = "⋭";
const Nu$1 = "Ν";
const nu$1 = "ν";
const num$1 = "#";
const numero$1 = "№";
const numsp$1 = " ";
const nvap$1 = "≍⃒";
const nvdash$1 = "⊬";
const nvDash$1 = "⊭";
const nVdash$1 = "⊮";
const nVDash$1 = "⊯";
const nvge$1 = "≥⃒";
const nvgt$1 = ">⃒";
const nvHarr$1 = "⤄";
const nvinfin$1 = "⧞";
const nvlArr$1 = "⤂";
const nvle$1 = "≤⃒";
const nvlt$1 = "<⃒";
const nvltrie$1 = "⊴⃒";
const nvrArr$1 = "⤃";
const nvrtrie$1 = "⊵⃒";
const nvsim$1 = "∼⃒";
const nwarhk$1 = "⤣";
const nwarr$1 = "↖";
const nwArr$1 = "⇖";
const nwarrow$1 = "↖";
const nwnear$1 = "⤧";
const Oacute$2 = "Ó";
const oacute$2 = "ó";
const oast$1 = "⊛";
const Ocirc$2 = "Ô";
const ocirc$2 = "ô";
const ocir$1 = "⊚";
const Ocy$1 = "О";
const ocy$1 = "о";
const odash$1 = "⊝";
const Odblac$1 = "Ő";
const odblac$1 = "ő";
const odiv$1 = "⨸";
const odot$1 = "⊙";
const odsold$1 = "⦼";
const OElig$1 = "Œ";
const oelig$1 = "œ";
const ofcir$1 = "⦿";
const Ofr$1 = "𝔒";
const ofr$1 = "𝔬";
const ogon$1 = "˛";
const Ograve$2 = "Ò";
const ograve$2 = "ò";
const ogt$1 = "⧁";
const ohbar$1 = "⦵";
const ohm$1 = "Ω";
const oint$1 = "∮";
const olarr$1 = "↺";
const olcir$1 = "⦾";
const olcross$1 = "⦻";
const oline$1 = "‾";
const olt$1 = "⧀";
const Omacr$1 = "Ō";
const omacr$1 = "ō";
const Omega$1 = "Ω";
const omega$1 = "ω";
const Omicron$1 = "Ο";
const omicron$1 = "ο";
const omid$1 = "⦶";
const ominus$1 = "⊖";
const Oopf$1 = "𝕆";
const oopf$1 = "𝕠";
const opar$1 = "⦷";
const OpenCurlyDoubleQuote$1 = "“";
const OpenCurlyQuote$1 = "‘";
const operp$1 = "⦹";
const oplus$1 = "⊕";
const orarr$1 = "↻";
const Or$1 = "⩔";
const or$1 = "∨";
const ord$1 = "⩝";
const order$1 = "ℴ";
const orderof$1 = "ℴ";
const ordf$2 = "ª";
const ordm$2 = "º";
const origof$1 = "⊶";
const oror$1 = "⩖";
const orslope$1 = "⩗";
const orv$1 = "⩛";
const oS$1 = "Ⓢ";
const Oscr$1 = "𝒪";
const oscr$1 = "ℴ";
const Oslash$2 = "Ø";
const oslash$2 = "ø";
const osol$1 = "⊘";
const Otilde$2 = "Õ";
const otilde$2 = "õ";
const otimesas$1 = "⨶";
const Otimes$1 = "⨷";
const otimes$1 = "⊗";
const Ouml$2 = "Ö";
const ouml$2 = "ö";
const ovbar$1 = "⌽";
const OverBar$1 = "‾";
const OverBrace$1 = "⏞";
const OverBracket$1 = "⎴";
const OverParenthesis$1 = "⏜";
const para$2 = "¶";
const parallel$1 = "∥";
const par$1 = "∥";
const parsim$1 = "⫳";
const parsl$1 = "⫽";
const part$1 = "∂";
const PartialD$1 = "∂";
const Pcy$1 = "П";
const pcy$1 = "п";
const percnt$1 = "%";
const period$1 = ".";
const permil$1 = "‰";
const perp$1 = "⊥";
const pertenk$1 = "‱";
const Pfr$1 = "𝔓";
const pfr$1 = "𝔭";
const Phi$1 = "Φ";
const phi$1 = "φ";
const phiv$1 = "ϕ";
const phmmat$1 = "ℳ";
const phone$1 = "☎";
const Pi$1 = "Π";
const pi$1 = "π";
const pitchfork$1 = "⋔";
const piv$1 = "ϖ";
const planck$1 = "ℏ";
const planckh$1 = "ℎ";
const plankv$1 = "ℏ";
const plusacir$1 = "⨣";
const plusb$1 = "⊞";
const pluscir$1 = "⨢";
const plus$1 = "+";
const plusdo$1 = "∔";
const plusdu$1 = "⨥";
const pluse$1 = "⩲";
const PlusMinus$1 = "±";
const plusmn$2 = "±";
const plussim$1 = "⨦";
const plustwo$1 = "⨧";
const pm$1 = "±";
const Poincareplane$1 = "ℌ";
const pointint$1 = "⨕";
const popf$1 = "𝕡";
const Popf$1 = "ℙ";
const pound$2 = "£";
const prap$1 = "⪷";
const Pr$1 = "⪻";
const pr$1 = "≺";
const prcue$1 = "≼";
const precapprox$1 = "⪷";
const prec$1 = "≺";
const preccurlyeq$1 = "≼";
const Precedes$1 = "≺";
const PrecedesEqual$1 = "⪯";
const PrecedesSlantEqual$1 = "≼";
const PrecedesTilde$1 = "≾";
const preceq$1 = "⪯";
const precnapprox$1 = "⪹";
const precneqq$1 = "⪵";
const precnsim$1 = "⋨";
const pre$1 = "⪯";
const prE$1 = "⪳";
const precsim$1 = "≾";
const prime$1 = "′";
const Prime$1 = "″";
const primes$1 = "ℙ";
const prnap$1 = "⪹";
const prnE$1 = "⪵";
const prnsim$1 = "⋨";
const prod$1 = "∏";
const Product$1 = "∏";
const profalar$1 = "⌮";
const profline$1 = "⌒";
const profsurf$1 = "⌓";
const prop$1 = "∝";
const Proportional$1 = "∝";
const Proportion$1 = "∷";
const propto$1 = "∝";
const prsim$1 = "≾";
const prurel$1 = "⊰";
const Pscr$1 = "𝒫";
const pscr$1 = "𝓅";
const Psi$1 = "Ψ";
const psi$1 = "ψ";
const puncsp$1 = " ";
const Qfr$1 = "𝔔";
const qfr$1 = "𝔮";
const qint$1 = "⨌";
const qopf$1 = "𝕢";
const Qopf$1 = "ℚ";
const qprime$1 = "⁗";
const Qscr$1 = "𝒬";
const qscr$1 = "𝓆";
const quaternions$1 = "ℍ";
const quatint$1 = "⨖";
const quest$1 = "?";
const questeq$1 = "≟";
const quot$3 = "\"";
const QUOT$2 = "\"";
const rAarr$1 = "⇛";
const race$1 = "∽̱";
const Racute$1 = "Ŕ";
const racute$1 = "ŕ";
const radic$1 = "√";
const raemptyv$1 = "⦳";
const rang$1 = "⟩";
const Rang$1 = "⟫";
const rangd$1 = "⦒";
const range$1 = "⦥";
const rangle$1 = "⟩";
const raquo$2 = "»";
const rarrap$1 = "⥵";
const rarrb$1 = "⇥";
const rarrbfs$1 = "⤠";
const rarrc$1 = "⤳";
const rarr$1 = "→";
const Rarr$1 = "↠";
const rArr$1 = "⇒";
const rarrfs$1 = "⤞";
const rarrhk$1 = "↪";
const rarrlp$1 = "↬";
const rarrpl$1 = "⥅";
const rarrsim$1 = "⥴";
const Rarrtl$1 = "⤖";
const rarrtl$1 = "↣";
const rarrw$1 = "↝";
const ratail$1 = "⤚";
const rAtail$1 = "⤜";
const ratio$1 = "∶";
const rationals$1 = "ℚ";
const rbarr$1 = "⤍";
const rBarr$1 = "⤏";
const RBarr$1 = "⤐";
const rbbrk$1 = "❳";
const rbrace$1 = "}";
const rbrack$1 = "]";
const rbrke$1 = "⦌";
const rbrksld$1 = "⦎";
const rbrkslu$1 = "⦐";
const Rcaron$1 = "Ř";
const rcaron$1 = "ř";
const Rcedil$1 = "Ŗ";
const rcedil$1 = "ŗ";
const rceil$1 = "⌉";
const rcub$1 = "}";
const Rcy$1 = "Р";
const rcy$1 = "р";
const rdca$1 = "⤷";
const rdldhar$1 = "⥩";
const rdquo$1 = "”";
const rdquor$1 = "”";
const rdsh$1 = "↳";
const real$1 = "ℜ";
const realine$1 = "ℛ";
const realpart$1 = "ℜ";
const reals$1 = "ℝ";
const Re$1 = "ℜ";
const rect$1 = "▭";
const reg$2 = "®";
const REG$2 = "®";
const ReverseElement$1 = "∋";
const ReverseEquilibrium$1 = "⇋";
const ReverseUpEquilibrium$1 = "⥯";
const rfisht$1 = "⥽";
const rfloor$1 = "⌋";
const rfr$1 = "𝔯";
const Rfr$1 = "ℜ";
const rHar$1 = "⥤";
const rhard$1 = "⇁";
const rharu$1 = "⇀";
const rharul$1 = "⥬";
const Rho$1 = "Ρ";
const rho$1 = "ρ";
const rhov$1 = "ϱ";
const RightAngleBracket$1 = "⟩";
const RightArrowBar$1 = "⇥";
const rightarrow$1 = "→";
const RightArrow$1 = "→";
const Rightarrow$1 = "⇒";
const RightArrowLeftArrow$1 = "⇄";
const rightarrowtail$1 = "↣";
const RightCeiling$1 = "⌉";
const RightDoubleBracket$1 = "⟧";
const RightDownTeeVector$1 = "⥝";
const RightDownVectorBar$1 = "⥕";
const RightDownVector$1 = "⇂";
const RightFloor$1 = "⌋";
const rightharpoondown$1 = "⇁";
const rightharpoonup$1 = "⇀";
const rightleftarrows$1 = "⇄";
const rightleftharpoons$1 = "⇌";
const rightrightarrows$1 = "⇉";
const rightsquigarrow$1 = "↝";
const RightTeeArrow$1 = "↦";
const RightTee$1 = "⊢";
const RightTeeVector$1 = "⥛";
const rightthreetimes$1 = "⋌";
const RightTriangleBar$1 = "⧐";
const RightTriangle$1 = "⊳";
const RightTriangleEqual$1 = "⊵";
const RightUpDownVector$1 = "⥏";
const RightUpTeeVector$1 = "⥜";
const RightUpVectorBar$1 = "⥔";
const RightUpVector$1 = "↾";
const RightVectorBar$1 = "⥓";
const RightVector$1 = "⇀";
const ring$1 = "˚";
const risingdotseq$1 = "≓";
const rlarr$1 = "⇄";
const rlhar$1 = "⇌";
const rlm$1 = "‏";
const rmoustache$1 = "⎱";
const rmoust$1 = "⎱";
const rnmid$1 = "⫮";
const roang$1 = "⟭";
const roarr$1 = "⇾";
const robrk$1 = "⟧";
const ropar$1 = "⦆";
const ropf$1 = "𝕣";
const Ropf$1 = "ℝ";
const roplus$1 = "⨮";
const rotimes$1 = "⨵";
const RoundImplies$1 = "⥰";
const rpar$1 = ")";
const rpargt$1 = "⦔";
const rppolint$1 = "⨒";
const rrarr$1 = "⇉";
const Rrightarrow$1 = "⇛";
const rsaquo$1 = "›";
const rscr$1 = "𝓇";
const Rscr$1 = "ℛ";
const rsh$1 = "↱";
const Rsh$1 = "↱";
const rsqb$1 = "]";
const rsquo$1 = "’";
const rsquor$1 = "’";
const rthree$1 = "⋌";
const rtimes$1 = "⋊";
const rtri$1 = "▹";
const rtrie$1 = "⊵";
const rtrif$1 = "▸";
const rtriltri$1 = "⧎";
const RuleDelayed$1 = "⧴";
const ruluhar$1 = "⥨";
const rx$1 = "℞";
const Sacute$1 = "Ś";
const sacute$1 = "ś";
const sbquo$1 = "‚";
const scap$1 = "⪸";
const Scaron$1 = "Š";
const scaron$1 = "š";
const Sc$1 = "⪼";
const sc$1 = "≻";
const sccue$1 = "≽";
const sce$1 = "⪰";
const scE$1 = "⪴";
const Scedil$1 = "Ş";
const scedil$1 = "ş";
const Scirc$1 = "Ŝ";
const scirc$1 = "ŝ";
const scnap$1 = "⪺";
const scnE$1 = "⪶";
const scnsim$1 = "⋩";
const scpolint$1 = "⨓";
const scsim$1 = "≿";
const Scy$1 = "С";
const scy$1 = "с";
const sdotb$1 = "⊡";
const sdot$1 = "⋅";
const sdote$1 = "⩦";
const searhk$1 = "⤥";
const searr$1 = "↘";
const seArr$1 = "⇘";
const searrow$1 = "↘";
const sect$2 = "§";
const semi$1 = ";";
const seswar$1 = "⤩";
const setminus$1 = "∖";
const setmn$1 = "∖";
const sext$1 = "✶";
const Sfr$1 = "𝔖";
const sfr$1 = "𝔰";
const sfrown$1 = "⌢";
const sharp$1 = "♯";
const SHCHcy$1 = "Щ";
const shchcy$1 = "щ";
const SHcy$1 = "Ш";
const shcy$1 = "ш";
const ShortDownArrow$1 = "↓";
const ShortLeftArrow$1 = "←";
const shortmid$1 = "∣";
const shortparallel$1 = "∥";
const ShortRightArrow$1 = "→";
const ShortUpArrow$1 = "↑";
const shy$2 = "­";
const Sigma$1 = "Σ";
const sigma$1 = "σ";
const sigmaf$1 = "ς";
const sigmav$1 = "ς";
const sim$1 = "∼";
const simdot$1 = "⩪";
const sime$1 = "≃";
const simeq$1 = "≃";
const simg$1 = "⪞";
const simgE$1 = "⪠";
const siml$1 = "⪝";
const simlE$1 = "⪟";
const simne$1 = "≆";
const simplus$1 = "⨤";
const simrarr$1 = "⥲";
const slarr$1 = "←";
const SmallCircle$1 = "∘";
const smallsetminus$1 = "∖";
const smashp$1 = "⨳";
const smeparsl$1 = "⧤";
const smid$1 = "∣";
const smile$1 = "⌣";
const smt$1 = "⪪";
const smte$1 = "⪬";
const smtes$1 = "⪬︀";
const SOFTcy$1 = "Ь";
const softcy$1 = "ь";
const solbar$1 = "⌿";
const solb$1 = "⧄";
const sol$1 = "/";
const Sopf$1 = "𝕊";
const sopf$1 = "𝕤";
const spades$1 = "♠";
const spadesuit$1 = "♠";
const spar$1 = "∥";
const sqcap$1 = "⊓";
const sqcaps$1 = "⊓︀";
const sqcup$1 = "⊔";
const sqcups$1 = "⊔︀";
const Sqrt$1 = "√";
const sqsub$1 = "⊏";
const sqsube$1 = "⊑";
const sqsubset$1 = "⊏";
const sqsubseteq$1 = "⊑";
const sqsup$1 = "⊐";
const sqsupe$1 = "⊒";
const sqsupset$1 = "⊐";
const sqsupseteq$1 = "⊒";
const square$1 = "□";
const Square$1 = "□";
const SquareIntersection$1 = "⊓";
const SquareSubset$1 = "⊏";
const SquareSubsetEqual$1 = "⊑";
const SquareSuperset$1 = "⊐";
const SquareSupersetEqual$1 = "⊒";
const SquareUnion$1 = "⊔";
const squarf$1 = "▪";
const squ$1 = "□";
const squf$1 = "▪";
const srarr$1 = "→";
const Sscr$1 = "𝒮";
const sscr$1 = "𝓈";
const ssetmn$1 = "∖";
const ssmile$1 = "⌣";
const sstarf$1 = "⋆";
const Star$1 = "⋆";
const star$1 = "☆";
const starf$1 = "★";
const straightepsilon$1 = "ϵ";
const straightphi$1 = "ϕ";
const strns$1 = "¯";
const sub$1 = "⊂";
const Sub$1 = "⋐";
const subdot$1 = "⪽";
const subE$1 = "⫅";
const sube$1 = "⊆";
const subedot$1 = "⫃";
const submult$1 = "⫁";
const subnE$1 = "⫋";
const subne$1 = "⊊";
const subplus$1 = "⪿";
const subrarr$1 = "⥹";
const subset$1 = "⊂";
const Subset$1 = "⋐";
const subseteq$1 = "⊆";
const subseteqq$1 = "⫅";
const SubsetEqual$1 = "⊆";
const subsetneq$1 = "⊊";
const subsetneqq$1 = "⫋";
const subsim$1 = "⫇";
const subsub$1 = "⫕";
const subsup$1 = "⫓";
const succapprox$1 = "⪸";
const succ$1 = "≻";
const succcurlyeq$1 = "≽";
const Succeeds$1 = "≻";
const SucceedsEqual$1 = "⪰";
const SucceedsSlantEqual$1 = "≽";
const SucceedsTilde$1 = "≿";
const succeq$1 = "⪰";
const succnapprox$1 = "⪺";
const succneqq$1 = "⪶";
const succnsim$1 = "⋩";
const succsim$1 = "≿";
const SuchThat$1 = "∋";
const sum$1 = "∑";
const Sum$1 = "∑";
const sung$1 = "♪";
const sup1$2 = "¹";
const sup2$2 = "²";
const sup3$2 = "³";
const sup$1 = "⊃";
const Sup$1 = "⋑";
const supdot$1 = "⪾";
const supdsub$1 = "⫘";
const supE$1 = "⫆";
const supe$1 = "⊇";
const supedot$1 = "⫄";
const Superset$1 = "⊃";
const SupersetEqual$1 = "⊇";
const suphsol$1 = "⟉";
const suphsub$1 = "⫗";
const suplarr$1 = "⥻";
const supmult$1 = "⫂";
const supnE$1 = "⫌";
const supne$1 = "⊋";
const supplus$1 = "⫀";
const supset$1 = "⊃";
const Supset$1 = "⋑";
const supseteq$1 = "⊇";
const supseteqq$1 = "⫆";
const supsetneq$1 = "⊋";
const supsetneqq$1 = "⫌";
const supsim$1 = "⫈";
const supsub$1 = "⫔";
const supsup$1 = "⫖";
const swarhk$1 = "⤦";
const swarr$1 = "↙";
const swArr$1 = "⇙";
const swarrow$1 = "↙";
const swnwar$1 = "⤪";
const szlig$2 = "ß";
const Tab$1 = "\t";
const target$1 = "⌖";
const Tau$1 = "Τ";
const tau$1 = "τ";
const tbrk$1 = "⎴";
const Tcaron$1 = "Ť";
const tcaron$1 = "ť";
const Tcedil$1 = "Ţ";
const tcedil$1 = "ţ";
const Tcy$1 = "Т";
const tcy$1 = "т";
const tdot$1 = "⃛";
const telrec$1 = "⌕";
const Tfr$1 = "𝔗";
const tfr$1 = "𝔱";
const there4$1 = "∴";
const therefore$1 = "∴";
const Therefore$1 = "∴";
const Theta$1 = "Θ";
const theta$1 = "θ";
const thetasym$1 = "ϑ";
const thetav$1 = "ϑ";
const thickapprox$1 = "≈";
const thicksim$1 = "∼";
const ThickSpace$1 = "  ";
const ThinSpace$1 = " ";
const thinsp$1 = " ";
const thkap$1 = "≈";
const thksim$1 = "∼";
const THORN$2 = "Þ";
const thorn$2 = "þ";
const tilde$1 = "˜";
const Tilde$1 = "∼";
const TildeEqual$1 = "≃";
const TildeFullEqual$1 = "≅";
const TildeTilde$1 = "≈";
const timesbar$1 = "⨱";
const timesb$1 = "⊠";
const times$2 = "×";
const timesd$1 = "⨰";
const tint$1 = "∭";
const toea$1 = "⤨";
const topbot$1 = "⌶";
const topcir$1 = "⫱";
const top$1 = "⊤";
const Topf$1 = "𝕋";
const topf$1 = "𝕥";
const topfork$1 = "⫚";
const tosa$1 = "⤩";
const tprime$1 = "‴";
const trade$1 = "™";
const TRADE$1 = "™";
const triangle$1 = "▵";
const triangledown$1 = "▿";
const triangleleft$1 = "◃";
const trianglelefteq$1 = "⊴";
const triangleq$1 = "≜";
const triangleright$1 = "▹";
const trianglerighteq$1 = "⊵";
const tridot$1 = "◬";
const trie$1 = "≜";
const triminus$1 = "⨺";
const TripleDot$1 = "⃛";
const triplus$1 = "⨹";
const trisb$1 = "⧍";
const tritime$1 = "⨻";
const trpezium$1 = "⏢";
const Tscr$1 = "𝒯";
const tscr$1 = "𝓉";
const TScy$1 = "Ц";
const tscy$1 = "ц";
const TSHcy$1 = "Ћ";
const tshcy$1 = "ћ";
const Tstrok$1 = "Ŧ";
const tstrok$1 = "ŧ";
const twixt$1 = "≬";
const twoheadleftarrow$1 = "↞";
const twoheadrightarrow$1 = "↠";
const Uacute$2 = "Ú";
const uacute$2 = "ú";
const uarr$1 = "↑";
const Uarr$1 = "↟";
const uArr$1 = "⇑";
const Uarrocir$1 = "⥉";
const Ubrcy$1 = "Ў";
const ubrcy$1 = "ў";
const Ubreve$1 = "Ŭ";
const ubreve$1 = "ŭ";
const Ucirc$2 = "Û";
const ucirc$2 = "û";
const Ucy$1 = "У";
const ucy$1 = "у";
const udarr$1 = "⇅";
const Udblac$1 = "Ű";
const udblac$1 = "ű";
const udhar$1 = "⥮";
const ufisht$1 = "⥾";
const Ufr$1 = "𝔘";
const ufr$1 = "𝔲";
const Ugrave$2 = "Ù";
const ugrave$2 = "ù";
const uHar$1 = "⥣";
const uharl$1 = "↿";
const uharr$1 = "↾";
const uhblk$1 = "▀";
const ulcorn$1 = "⌜";
const ulcorner$1 = "⌜";
const ulcrop$1 = "⌏";
const ultri$1 = "◸";
const Umacr$1 = "Ū";
const umacr$1 = "ū";
const uml$2 = "¨";
const UnderBar$1 = "_";
const UnderBrace$1 = "⏟";
const UnderBracket$1 = "⎵";
const UnderParenthesis$1 = "⏝";
const Union$1 = "⋃";
const UnionPlus$1 = "⊎";
const Uogon$1 = "Ų";
const uogon$1 = "ų";
const Uopf$1 = "𝕌";
const uopf$1 = "𝕦";
const UpArrowBar$1 = "⤒";
const uparrow$1 = "↑";
const UpArrow$1 = "↑";
const Uparrow$1 = "⇑";
const UpArrowDownArrow$1 = "⇅";
const updownarrow$1 = "↕";
const UpDownArrow$1 = "↕";
const Updownarrow$1 = "⇕";
const UpEquilibrium$1 = "⥮";
const upharpoonleft$1 = "↿";
const upharpoonright$1 = "↾";
const uplus$1 = "⊎";
const UpperLeftArrow$1 = "↖";
const UpperRightArrow$1 = "↗";
const upsi$1 = "υ";
const Upsi$1 = "ϒ";
const upsih$1 = "ϒ";
const Upsilon$1 = "Υ";
const upsilon$1 = "υ";
const UpTeeArrow$1 = "↥";
const UpTee$1 = "⊥";
const upuparrows$1 = "⇈";
const urcorn$1 = "⌝";
const urcorner$1 = "⌝";
const urcrop$1 = "⌎";
const Uring$1 = "Ů";
const uring$1 = "ů";
const urtri$1 = "◹";
const Uscr$1 = "𝒰";
const uscr$1 = "𝓊";
const utdot$1 = "⋰";
const Utilde$1 = "Ũ";
const utilde$1 = "ũ";
const utri$1 = "▵";
const utrif$1 = "▴";
const uuarr$1 = "⇈";
const Uuml$2 = "Ü";
const uuml$2 = "ü";
const uwangle$1 = "⦧";
const vangrt$1 = "⦜";
const varepsilon$1 = "ϵ";
const varkappa$1 = "ϰ";
const varnothing$1 = "∅";
const varphi$1 = "ϕ";
const varpi$1 = "ϖ";
const varpropto$1 = "∝";
const varr$1 = "↕";
const vArr$1 = "⇕";
const varrho$1 = "ϱ";
const varsigma$1 = "ς";
const varsubsetneq$1 = "⊊︀";
const varsubsetneqq$1 = "⫋︀";
const varsupsetneq$1 = "⊋︀";
const varsupsetneqq$1 = "⫌︀";
const vartheta$1 = "ϑ";
const vartriangleleft$1 = "⊲";
const vartriangleright$1 = "⊳";
const vBar$1 = "⫨";
const Vbar$1 = "⫫";
const vBarv$1 = "⫩";
const Vcy$1 = "В";
const vcy$1 = "в";
const vdash$1 = "⊢";
const vDash$1 = "⊨";
const Vdash$1 = "⊩";
const VDash$1 = "⊫";
const Vdashl$1 = "⫦";
const veebar$1 = "⊻";
const vee$1 = "∨";
const Vee$1 = "⋁";
const veeeq$1 = "≚";
const vellip$1 = "⋮";
const verbar$1 = "|";
const Verbar$1 = "‖";
const vert$1 = "|";
const Vert$1 = "‖";
const VerticalBar$1 = "∣";
const VerticalLine$1 = "|";
const VerticalSeparator$1 = "❘";
const VerticalTilde$1 = "≀";
const VeryThinSpace$1 = " ";
const Vfr$1 = "𝔙";
const vfr$1 = "𝔳";
const vltri$1 = "⊲";
const vnsub$1 = "⊂⃒";
const vnsup$1 = "⊃⃒";
const Vopf$1 = "𝕍";
const vopf$1 = "𝕧";
const vprop$1 = "∝";
const vrtri$1 = "⊳";
const Vscr$1 = "𝒱";
const vscr$1 = "𝓋";
const vsubnE$1 = "⫋︀";
const vsubne$1 = "⊊︀";
const vsupnE$1 = "⫌︀";
const vsupne$1 = "⊋︀";
const Vvdash$1 = "⊪";
const vzigzag$1 = "⦚";
const Wcirc$1 = "Ŵ";
const wcirc$1 = "ŵ";
const wedbar$1 = "⩟";
const wedge$1 = "∧";
const Wedge$1 = "⋀";
const wedgeq$1 = "≙";
const weierp$1 = "℘";
const Wfr$1 = "𝔚";
const wfr$1 = "𝔴";
const Wopf$1 = "𝕎";
const wopf$1 = "𝕨";
const wp$1 = "℘";
const wr$1 = "≀";
const wreath$1 = "≀";
const Wscr$1 = "𝒲";
const wscr$1 = "𝓌";
const xcap$1 = "⋂";
const xcirc$1 = "◯";
const xcup$1 = "⋃";
const xdtri$1 = "▽";
const Xfr$1 = "𝔛";
const xfr$1 = "𝔵";
const xharr$1 = "⟷";
const xhArr$1 = "⟺";
const Xi$1 = "Ξ";
const xi$1 = "ξ";
const xlarr$1 = "⟵";
const xlArr$1 = "⟸";
const xmap$1 = "⟼";
const xnis$1 = "⋻";
const xodot$1 = "⨀";
const Xopf$1 = "𝕏";
const xopf$1 = "𝕩";
const xoplus$1 = "⨁";
const xotime$1 = "⨂";
const xrarr$1 = "⟶";
const xrArr$1 = "⟹";
const Xscr$1 = "𝒳";
const xscr$1 = "𝓍";
const xsqcup$1 = "⨆";
const xuplus$1 = "⨄";
const xutri$1 = "△";
const xvee$1 = "⋁";
const xwedge$1 = "⋀";
const Yacute$2 = "Ý";
const yacute$2 = "ý";
const YAcy$1 = "Я";
const yacy$1 = "я";
const Ycirc$1 = "Ŷ";
const ycirc$1 = "ŷ";
const Ycy$1 = "Ы";
const ycy$1 = "ы";
const yen$2 = "¥";
const Yfr$1 = "𝔜";
const yfr$1 = "𝔶";
const YIcy$1 = "Ї";
const yicy$1 = "ї";
const Yopf$1 = "𝕐";
const yopf$1 = "𝕪";
const Yscr$1 = "𝒴";
const yscr$1 = "𝓎";
const YUcy$1 = "Ю";
const yucy$1 = "ю";
const yuml$2 = "ÿ";
const Yuml$1 = "Ÿ";
const Zacute$1 = "Ź";
const zacute$1 = "ź";
const Zcaron$1 = "Ž";
const zcaron$1 = "ž";
const Zcy$1 = "З";
const zcy$1 = "з";
const Zdot$1 = "Ż";
const zdot$1 = "ż";
const zeetrf$1 = "ℨ";
const ZeroWidthSpace$1 = "​";
const Zeta$1 = "Ζ";
const zeta$1 = "ζ";
const zfr$1 = "𝔷";
const Zfr$1 = "ℨ";
const ZHcy$1 = "Ж";
const zhcy$1 = "ж";
const zigrarr$1 = "⇝";
const zopf$1 = "𝕫";
const Zopf$1 = "ℤ";
const Zscr$1 = "𝒵";
const zscr$1 = "𝓏";
const zwj$1 = "‍";
const zwnj$1 = "‌";
var entities$2 = {
  Aacute: Aacute$2,
  aacute: aacute$2,
  Abreve: Abreve$1,
  abreve: abreve$1,
  ac: ac$1,
  acd: acd$1,
  acE: acE$1,
  Acirc: Acirc$2,
  acirc: acirc$2,
  acute: acute$2,
  Acy: Acy$1,
  acy: acy$1,
  AElig: AElig$2,
  aelig: aelig$2,
  af: af$1,
  Afr: Afr$1,
  afr: afr$1,
  Agrave: Agrave$2,
  agrave: agrave$2,
  alefsym: alefsym$1,
  aleph: aleph$1,
  Alpha: Alpha$1,
  alpha: alpha$1,
  Amacr: Amacr$1,
  amacr: amacr$1,
  amalg: amalg$1,
  amp: amp$3,
  AMP: AMP$2,
  andand: andand$1,
  And: And$1,
  and: and$1,
  andd: andd$1,
  andslope: andslope$1,
  andv: andv$1,
  ang: ang$1,
  ange: ange$1,
  angle: angle$1,
  angmsdaa: angmsdaa$1,
  angmsdab: angmsdab$1,
  angmsdac: angmsdac$1,
  angmsdad: angmsdad$1,
  angmsdae: angmsdae$1,
  angmsdaf: angmsdaf$1,
  angmsdag: angmsdag$1,
  angmsdah: angmsdah$1,
  angmsd: angmsd$1,
  angrt: angrt$1,
  angrtvb: angrtvb$1,
  angrtvbd: angrtvbd$1,
  angsph: angsph$1,
  angst: angst$1,
  angzarr: angzarr$1,
  Aogon: Aogon$1,
  aogon: aogon$1,
  Aopf: Aopf$1,
  aopf: aopf$1,
  apacir: apacir$1,
  ap: ap$1,
  apE: apE$1,
  ape: ape$1,
  apid: apid$1,
  apos: apos$2,
  ApplyFunction: ApplyFunction$1,
  approx: approx$1,
  approxeq: approxeq$1,
  Aring: Aring$2,
  aring: aring$2,
  Ascr: Ascr$1,
  ascr: ascr$1,
  Assign: Assign$1,
  ast: ast$1,
  asymp: asymp$1,
  asympeq: asympeq$1,
  Atilde: Atilde$2,
  atilde: atilde$2,
  Auml: Auml$2,
  auml: auml$2,
  awconint: awconint$1,
  awint: awint$1,
  backcong: backcong$1,
  backepsilon: backepsilon$1,
  backprime: backprime$1,
  backsim: backsim$1,
  backsimeq: backsimeq$1,
  Backslash: Backslash$1,
  Barv: Barv$1,
  barvee: barvee$1,
  barwed: barwed$1,
  Barwed: Barwed$1,
  barwedge: barwedge$1,
  bbrk: bbrk$1,
  bbrktbrk: bbrktbrk$1,
  bcong: bcong$1,
  Bcy: Bcy$1,
  bcy: bcy$1,
  bdquo: bdquo$1,
  becaus: becaus$1,
  because: because$1,
  Because: Because$1,
  bemptyv: bemptyv$1,
  bepsi: bepsi$1,
  bernou: bernou$1,
  Bernoullis: Bernoullis$1,
  Beta: Beta$1,
  beta: beta$1,
  beth: beth$1,
  between: between$1,
  Bfr: Bfr$1,
  bfr: bfr$1,
  bigcap: bigcap$1,
  bigcirc: bigcirc$1,
  bigcup: bigcup$1,
  bigodot: bigodot$1,
  bigoplus: bigoplus$1,
  bigotimes: bigotimes$1,
  bigsqcup: bigsqcup$1,
  bigstar: bigstar$1,
  bigtriangledown: bigtriangledown$1,
  bigtriangleup: bigtriangleup$1,
  biguplus: biguplus$1,
  bigvee: bigvee$1,
  bigwedge: bigwedge$1,
  bkarow: bkarow$1,
  blacklozenge: blacklozenge$1,
  blacksquare: blacksquare$1,
  blacktriangle: blacktriangle$1,
  blacktriangledown: blacktriangledown$1,
  blacktriangleleft: blacktriangleleft$1,
  blacktriangleright: blacktriangleright$1,
  blank: blank$1,
  blk12: blk12$1,
  blk14: blk14$1,
  blk34: blk34$1,
  block: block$1,
  bne: bne$1,
  bnequiv: bnequiv$1,
  bNot: bNot$1,
  bnot: bnot$1,
  Bopf: Bopf$1,
  bopf: bopf$1,
  bot: bot$1,
  bottom: bottom$1,
  bowtie: bowtie$1,
  boxbox: boxbox$1,
  boxdl: boxdl$1,
  boxdL: boxdL$1,
  boxDl: boxDl$1,
  boxDL: boxDL$1,
  boxdr: boxdr$1,
  boxdR: boxdR$1,
  boxDr: boxDr$1,
  boxDR: boxDR$1,
  boxh: boxh$1,
  boxH: boxH$1,
  boxhd: boxhd$1,
  boxHd: boxHd$1,
  boxhD: boxhD$1,
  boxHD: boxHD$1,
  boxhu: boxhu$1,
  boxHu: boxHu$1,
  boxhU: boxhU$1,
  boxHU: boxHU$1,
  boxminus: boxminus$1,
  boxplus: boxplus$1,
  boxtimes: boxtimes$1,
  boxul: boxul$1,
  boxuL: boxuL$1,
  boxUl: boxUl$1,
  boxUL: boxUL$1,
  boxur: boxur$1,
  boxuR: boxuR$1,
  boxUr: boxUr$1,
  boxUR: boxUR$1,
  boxv: boxv$1,
  boxV: boxV$1,
  boxvh: boxvh$1,
  boxvH: boxvH$1,
  boxVh: boxVh$1,
  boxVH: boxVH$1,
  boxvl: boxvl$1,
  boxvL: boxvL$1,
  boxVl: boxVl$1,
  boxVL: boxVL$1,
  boxvr: boxvr$1,
  boxvR: boxvR$1,
  boxVr: boxVr$1,
  boxVR: boxVR$1,
  bprime: bprime$1,
  breve: breve$1,
  Breve: Breve$1,
  brvbar: brvbar$2,
  bscr: bscr$1,
  Bscr: Bscr$1,
  bsemi: bsemi$1,
  bsim: bsim$1,
  bsime: bsime$1,
  bsolb: bsolb$1,
  bsol: bsol$1,
  bsolhsub: bsolhsub$1,
  bull: bull$1,
  bullet: bullet$1,
  bump: bump$1,
  bumpE: bumpE$1,
  bumpe: bumpe$1,
  Bumpeq: Bumpeq$1,
  bumpeq: bumpeq$1,
  Cacute: Cacute$1,
  cacute: cacute$1,
  capand: capand$1,
  capbrcup: capbrcup$1,
  capcap: capcap$1,
  cap: cap$1,
  Cap: Cap$1,
  capcup: capcup$1,
  capdot: capdot$1,
  CapitalDifferentialD: CapitalDifferentialD$1,
  caps: caps$1,
  caret: caret$1,
  caron: caron$1,
  Cayleys: Cayleys$1,
  ccaps: ccaps$1,
  Ccaron: Ccaron$1,
  ccaron: ccaron$1,
  Ccedil: Ccedil$2,
  ccedil: ccedil$2,
  Ccirc: Ccirc$1,
  ccirc: ccirc$1,
  Cconint: Cconint$1,
  ccups: ccups$1,
  ccupssm: ccupssm$1,
  Cdot: Cdot$1,
  cdot: cdot$1,
  cedil: cedil$2,
  Cedilla: Cedilla$1,
  cemptyv: cemptyv$1,
  cent: cent$2,
  centerdot: centerdot$1,
  CenterDot: CenterDot$1,
  cfr: cfr$1,
  Cfr: Cfr$1,
  CHcy: CHcy$1,
  chcy: chcy$1,
  check: check$1,
  checkmark: checkmark$1,
  Chi: Chi$1,
  chi: chi$1,
  circ: circ$1,
  circeq: circeq$1,
  circlearrowleft: circlearrowleft$1,
  circlearrowright: circlearrowright$1,
  circledast: circledast$1,
  circledcirc: circledcirc$1,
  circleddash: circleddash$1,
  CircleDot: CircleDot$1,
  circledR: circledR$1,
  circledS: circledS$1,
  CircleMinus: CircleMinus$1,
  CirclePlus: CirclePlus$1,
  CircleTimes: CircleTimes$1,
  cir: cir$1,
  cirE: cirE$1,
  cire: cire$1,
  cirfnint: cirfnint$1,
  cirmid: cirmid$1,
  cirscir: cirscir$1,
  ClockwiseContourIntegral: ClockwiseContourIntegral$1,
  CloseCurlyDoubleQuote: CloseCurlyDoubleQuote$1,
  CloseCurlyQuote: CloseCurlyQuote$1,
  clubs: clubs$1,
  clubsuit: clubsuit$1,
  colon: colon$1,
  Colon: Colon$1,
  Colone: Colone$1,
  colone: colone$1,
  coloneq: coloneq$1,
  comma: comma$1,
  commat: commat$1,
  comp: comp$1,
  compfn: compfn$1,
  complement: complement$1,
  complexes: complexes$1,
  cong: cong$1,
  congdot: congdot$1,
  Congruent: Congruent$1,
  conint: conint$1,
  Conint: Conint$1,
  ContourIntegral: ContourIntegral$1,
  copf: copf$1,
  Copf: Copf$1,
  coprod: coprod$1,
  Coproduct: Coproduct$1,
  copy: copy$2,
  COPY: COPY$2,
  copysr: copysr$1,
  CounterClockwiseContourIntegral: CounterClockwiseContourIntegral$1,
  crarr: crarr$1,
  cross: cross$1,
  Cross: Cross$1,
  Cscr: Cscr$1,
  cscr: cscr$1,
  csub: csub$1,
  csube: csube$1,
  csup: csup$1,
  csupe: csupe$1,
  ctdot: ctdot$1,
  cudarrl: cudarrl$1,
  cudarrr: cudarrr$1,
  cuepr: cuepr$1,
  cuesc: cuesc$1,
  cularr: cularr$1,
  cularrp: cularrp$1,
  cupbrcap: cupbrcap$1,
  cupcap: cupcap$1,
  CupCap: CupCap$1,
  cup: cup$1,
  Cup: Cup$1,
  cupcup: cupcup$1,
  cupdot: cupdot$1,
  cupor: cupor$1,
  cups: cups$1,
  curarr: curarr$1,
  curarrm: curarrm$1,
  curlyeqprec: curlyeqprec$1,
  curlyeqsucc: curlyeqsucc$1,
  curlyvee: curlyvee$1,
  curlywedge: curlywedge$1,
  curren: curren$2,
  curvearrowleft: curvearrowleft$1,
  curvearrowright: curvearrowright$1,
  cuvee: cuvee$1,
  cuwed: cuwed$1,
  cwconint: cwconint$1,
  cwint: cwint$1,
  cylcty: cylcty$1,
  dagger: dagger$1,
  Dagger: Dagger$1,
  daleth: daleth$1,
  darr: darr$1,
  Darr: Darr$1,
  dArr: dArr$1,
  dash: dash$1,
  Dashv: Dashv$1,
  dashv: dashv$1,
  dbkarow: dbkarow$1,
  dblac: dblac$1,
  Dcaron: Dcaron$1,
  dcaron: dcaron$1,
  Dcy: Dcy$1,
  dcy: dcy$1,
  ddagger: ddagger$1,
  ddarr: ddarr$1,
  DD: DD$1,
  dd: dd$1,
  DDotrahd: DDotrahd$1,
  ddotseq: ddotseq$1,
  deg: deg$2,
  Del: Del$1,
  Delta: Delta$1,
  delta: delta$1,
  demptyv: demptyv$1,
  dfisht: dfisht$1,
  Dfr: Dfr$1,
  dfr: dfr$1,
  dHar: dHar$1,
  dharl: dharl$1,
  dharr: dharr$1,
  DiacriticalAcute: DiacriticalAcute$1,
  DiacriticalDot: DiacriticalDot$1,
  DiacriticalDoubleAcute: DiacriticalDoubleAcute$1,
  DiacriticalGrave: DiacriticalGrave$1,
  DiacriticalTilde: DiacriticalTilde$1,
  diam: diam$1,
  diamond: diamond$1,
  Diamond: Diamond$1,
  diamondsuit: diamondsuit$1,
  diams: diams$1,
  die: die$1,
  DifferentialD: DifferentialD$1,
  digamma: digamma$1,
  disin: disin$1,
  div: div$1,
  divide: divide$2,
  divideontimes: divideontimes$1,
  divonx: divonx$1,
  DJcy: DJcy$1,
  djcy: djcy$1,
  dlcorn: dlcorn$1,
  dlcrop: dlcrop$1,
  dollar: dollar$1,
  Dopf: Dopf$1,
  dopf: dopf$1,
  Dot: Dot$1,
  dot: dot$1,
  DotDot: DotDot$1,
  doteq: doteq$1,
  doteqdot: doteqdot$1,
  DotEqual: DotEqual$1,
  dotminus: dotminus$1,
  dotplus: dotplus$1,
  dotsquare: dotsquare$1,
  doublebarwedge: doublebarwedge$1,
  DoubleContourIntegral: DoubleContourIntegral$1,
  DoubleDot: DoubleDot$1,
  DoubleDownArrow: DoubleDownArrow$1,
  DoubleLeftArrow: DoubleLeftArrow$1,
  DoubleLeftRightArrow: DoubleLeftRightArrow$1,
  DoubleLeftTee: DoubleLeftTee$1,
  DoubleLongLeftArrow: DoubleLongLeftArrow$1,
  DoubleLongLeftRightArrow: DoubleLongLeftRightArrow$1,
  DoubleLongRightArrow: DoubleLongRightArrow$1,
  DoubleRightArrow: DoubleRightArrow$1,
  DoubleRightTee: DoubleRightTee$1,
  DoubleUpArrow: DoubleUpArrow$1,
  DoubleUpDownArrow: DoubleUpDownArrow$1,
  DoubleVerticalBar: DoubleVerticalBar$1,
  DownArrowBar: DownArrowBar$1,
  downarrow: downarrow$1,
  DownArrow: DownArrow$1,
  Downarrow: Downarrow$1,
  DownArrowUpArrow: DownArrowUpArrow$1,
  DownBreve: DownBreve$1,
  downdownarrows: downdownarrows$1,
  downharpoonleft: downharpoonleft$1,
  downharpoonright: downharpoonright$1,
  DownLeftRightVector: DownLeftRightVector$1,
  DownLeftTeeVector: DownLeftTeeVector$1,
  DownLeftVectorBar: DownLeftVectorBar$1,
  DownLeftVector: DownLeftVector$1,
  DownRightTeeVector: DownRightTeeVector$1,
  DownRightVectorBar: DownRightVectorBar$1,
  DownRightVector: DownRightVector$1,
  DownTeeArrow: DownTeeArrow$1,
  DownTee: DownTee$1,
  drbkarow: drbkarow$1,
  drcorn: drcorn$1,
  drcrop: drcrop$1,
  Dscr: Dscr$1,
  dscr: dscr$1,
  DScy: DScy$1,
  dscy: dscy$1,
  dsol: dsol$1,
  Dstrok: Dstrok$1,
  dstrok: dstrok$1,
  dtdot: dtdot$1,
  dtri: dtri$1,
  dtrif: dtrif$1,
  duarr: duarr$1,
  duhar: duhar$1,
  dwangle: dwangle$1,
  DZcy: DZcy$1,
  dzcy: dzcy$1,
  dzigrarr: dzigrarr$1,
  Eacute: Eacute$2,
  eacute: eacute$2,
  easter: easter$1,
  Ecaron: Ecaron$1,
  ecaron: ecaron$1,
  Ecirc: Ecirc$2,
  ecirc: ecirc$2,
  ecir: ecir$1,
  ecolon: ecolon$1,
  Ecy: Ecy$1,
  ecy: ecy$1,
  eDDot: eDDot$1,
  Edot: Edot$1,
  edot: edot$1,
  eDot: eDot$1,
  ee: ee$1,
  efDot: efDot$1,
  Efr: Efr$1,
  efr: efr$1,
  eg: eg$1,
  Egrave: Egrave$2,
  egrave: egrave$2,
  egs: egs$1,
  egsdot: egsdot$1,
  el: el$1,
  Element: Element$1,
  elinters: elinters$1,
  ell: ell$1,
  els: els$1,
  elsdot: elsdot$1,
  Emacr: Emacr$1,
  emacr: emacr$1,
  empty: empty$1,
  emptyset: emptyset$1,
  EmptySmallSquare: EmptySmallSquare$1,
  emptyv: emptyv$1,
  EmptyVerySmallSquare: EmptyVerySmallSquare$1,
  emsp13: emsp13$1,
  emsp14: emsp14$1,
  emsp: emsp$1,
  ENG: ENG$1,
  eng: eng$1,
  ensp: ensp$1,
  Eogon: Eogon$1,
  eogon: eogon$1,
  Eopf: Eopf$1,
  eopf: eopf$1,
  epar: epar$1,
  eparsl: eparsl$1,
  eplus: eplus$1,
  epsi: epsi$1,
  Epsilon: Epsilon$1,
  epsilon: epsilon$1,
  epsiv: epsiv$1,
  eqcirc: eqcirc$1,
  eqcolon: eqcolon$1,
  eqsim: eqsim$1,
  eqslantgtr: eqslantgtr$1,
  eqslantless: eqslantless$1,
  Equal: Equal$1,
  equals: equals$1,
  EqualTilde: EqualTilde$1,
  equest: equest$1,
  Equilibrium: Equilibrium$1,
  equiv: equiv$1,
  equivDD: equivDD$1,
  eqvparsl: eqvparsl$1,
  erarr: erarr$1,
  erDot: erDot$1,
  escr: escr$1,
  Escr: Escr$1,
  esdot: esdot$1,
  Esim: Esim$1,
  esim: esim$1,
  Eta: Eta$1,
  eta: eta$1,
  ETH: ETH$2,
  eth: eth$2,
  Euml: Euml$2,
  euml: euml$2,
  euro: euro$1,
  excl: excl$1,
  exist: exist$1,
  Exists: Exists$1,
  expectation: expectation$1,
  exponentiale: exponentiale$1,
  ExponentialE: ExponentialE$1,
  fallingdotseq: fallingdotseq$1,
  Fcy: Fcy$1,
  fcy: fcy$1,
  female: female$1,
  ffilig: ffilig$1,
  fflig: fflig$1,
  ffllig: ffllig$1,
  Ffr: Ffr$1,
  ffr: ffr$1,
  filig: filig$1,
  FilledSmallSquare: FilledSmallSquare$1,
  FilledVerySmallSquare: FilledVerySmallSquare$1,
  fjlig: fjlig$1,
  flat: flat$1,
  fllig: fllig$1,
  fltns: fltns$1,
  fnof: fnof$1,
  Fopf: Fopf$1,
  fopf: fopf$1,
  forall: forall$1,
  ForAll: ForAll$1,
  fork: fork$1,
  forkv: forkv$1,
  Fouriertrf: Fouriertrf$1,
  fpartint: fpartint$1,
  frac12: frac12$2,
  frac13: frac13$1,
  frac14: frac14$2,
  frac15: frac15$1,
  frac16: frac16$1,
  frac18: frac18$1,
  frac23: frac23$1,
  frac25: frac25$1,
  frac34: frac34$2,
  frac35: frac35$1,
  frac38: frac38$1,
  frac45: frac45$1,
  frac56: frac56$1,
  frac58: frac58$1,
  frac78: frac78$1,
  frasl: frasl$1,
  frown: frown$1,
  fscr: fscr$1,
  Fscr: Fscr$1,
  gacute: gacute$1,
  Gamma: Gamma$1,
  gamma: gamma$1,
  Gammad: Gammad$1,
  gammad: gammad$1,
  gap: gap$1,
  Gbreve: Gbreve$1,
  gbreve: gbreve$1,
  Gcedil: Gcedil$1,
  Gcirc: Gcirc$1,
  gcirc: gcirc$1,
  Gcy: Gcy$1,
  gcy: gcy$1,
  Gdot: Gdot$1,
  gdot: gdot$1,
  ge: ge$1,
  gE: gE$1,
  gEl: gEl$1,
  gel: gel$1,
  geq: geq$1,
  geqq: geqq$1,
  geqslant: geqslant$1,
  gescc: gescc$1,
  ges: ges$1,
  gesdot: gesdot$1,
  gesdoto: gesdoto$1,
  gesdotol: gesdotol$1,
  gesl: gesl$1,
  gesles: gesles$1,
  Gfr: Gfr$1,
  gfr: gfr$1,
  gg: gg$1,
  Gg: Gg$1,
  ggg: ggg$1,
  gimel: gimel$1,
  GJcy: GJcy$1,
  gjcy: gjcy$1,
  gla: gla$1,
  gl: gl$1,
  glE: glE$1,
  glj: glj$1,
  gnap: gnap$1,
  gnapprox: gnapprox$1,
  gne: gne$1,
  gnE: gnE$1,
  gneq: gneq$1,
  gneqq: gneqq$1,
  gnsim: gnsim$1,
  Gopf: Gopf$1,
  gopf: gopf$1,
  grave: grave$1,
  GreaterEqual: GreaterEqual$1,
  GreaterEqualLess: GreaterEqualLess$1,
  GreaterFullEqual: GreaterFullEqual$1,
  GreaterGreater: GreaterGreater$1,
  GreaterLess: GreaterLess$1,
  GreaterSlantEqual: GreaterSlantEqual$1,
  GreaterTilde: GreaterTilde$1,
  Gscr: Gscr$1,
  gscr: gscr$1,
  gsim: gsim$1,
  gsime: gsime$1,
  gsiml: gsiml$1,
  gtcc: gtcc$1,
  gtcir: gtcir$1,
  gt: gt$3,
  GT: GT$2,
  Gt: Gt$1,
  gtdot: gtdot$1,
  gtlPar: gtlPar$1,
  gtquest: gtquest$1,
  gtrapprox: gtrapprox$1,
  gtrarr: gtrarr$1,
  gtrdot: gtrdot$1,
  gtreqless: gtreqless$1,
  gtreqqless: gtreqqless$1,
  gtrless: gtrless$1,
  gtrsim: gtrsim$1,
  gvertneqq: gvertneqq$1,
  gvnE: gvnE$1,
  Hacek: Hacek$1,
  hairsp: hairsp$1,
  half: half$1,
  hamilt: hamilt$1,
  HARDcy: HARDcy$1,
  hardcy: hardcy$1,
  harrcir: harrcir$1,
  harr: harr$1,
  hArr: hArr$1,
  harrw: harrw$1,
  Hat: Hat$1,
  hbar: hbar$1,
  Hcirc: Hcirc$1,
  hcirc: hcirc$1,
  hearts: hearts$1,
  heartsuit: heartsuit$1,
  hellip: hellip$1,
  hercon: hercon$1,
  hfr: hfr$1,
  Hfr: Hfr$1,
  HilbertSpace: HilbertSpace$1,
  hksearow: hksearow$1,
  hkswarow: hkswarow$1,
  hoarr: hoarr$1,
  homtht: homtht$1,
  hookleftarrow: hookleftarrow$1,
  hookrightarrow: hookrightarrow$1,
  hopf: hopf$1,
  Hopf: Hopf$1,
  horbar: horbar$1,
  HorizontalLine: HorizontalLine$1,
  hscr: hscr$1,
  Hscr: Hscr$1,
  hslash: hslash$1,
  Hstrok: Hstrok$1,
  hstrok: hstrok$1,
  HumpDownHump: HumpDownHump$1,
  HumpEqual: HumpEqual$1,
  hybull: hybull$1,
  hyphen: hyphen$1,
  Iacute: Iacute$2,
  iacute: iacute$2,
  ic: ic$1,
  Icirc: Icirc$2,
  icirc: icirc$2,
  Icy: Icy$1,
  icy: icy$1,
  Idot: Idot$1,
  IEcy: IEcy$1,
  iecy: iecy$1,
  iexcl: iexcl$2,
  iff: iff$1,
  ifr: ifr$1,
  Ifr: Ifr$1,
  Igrave: Igrave$2,
  igrave: igrave$2,
  ii: ii$1,
  iiiint: iiiint$1,
  iiint: iiint$1,
  iinfin: iinfin$1,
  iiota: iiota$1,
  IJlig: IJlig$1,
  ijlig: ijlig$1,
  Imacr: Imacr$1,
  imacr: imacr$1,
  image: image$1,
  ImaginaryI: ImaginaryI$1,
  imagline: imagline$1,
  imagpart: imagpart$1,
  imath: imath$1,
  Im: Im$1,
  imof: imof$1,
  imped: imped$1,
  Implies: Implies$1,
  incare: incare$1,
  "in": "∈",
  infin: infin$1,
  infintie: infintie$1,
  inodot: inodot$1,
  intcal: intcal$1,
  int: int$1,
  Int: Int$1,
  integers: integers$1,
  Integral: Integral$1,
  intercal: intercal$1,
  Intersection: Intersection$1,
  intlarhk: intlarhk$1,
  intprod: intprod$1,
  InvisibleComma: InvisibleComma$1,
  InvisibleTimes: InvisibleTimes$1,
  IOcy: IOcy$1,
  iocy: iocy$1,
  Iogon: Iogon$1,
  iogon: iogon$1,
  Iopf: Iopf$1,
  iopf: iopf$1,
  Iota: Iota$1,
  iota: iota$1,
  iprod: iprod$1,
  iquest: iquest$2,
  iscr: iscr$1,
  Iscr: Iscr$1,
  isin: isin$1,
  isindot: isindot$1,
  isinE: isinE$1,
  isins: isins$1,
  isinsv: isinsv$1,
  isinv: isinv$1,
  it: it$1,
  Itilde: Itilde$1,
  itilde: itilde$1,
  Iukcy: Iukcy$1,
  iukcy: iukcy$1,
  Iuml: Iuml$2,
  iuml: iuml$2,
  Jcirc: Jcirc$1,
  jcirc: jcirc$1,
  Jcy: Jcy$1,
  jcy: jcy$1,
  Jfr: Jfr$1,
  jfr: jfr$1,
  jmath: jmath$1,
  Jopf: Jopf$1,
  jopf: jopf$1,
  Jscr: Jscr$1,
  jscr: jscr$1,
  Jsercy: Jsercy$1,
  jsercy: jsercy$1,
  Jukcy: Jukcy$1,
  jukcy: jukcy$1,
  Kappa: Kappa$1,
  kappa: kappa$1,
  kappav: kappav$1,
  Kcedil: Kcedil$1,
  kcedil: kcedil$1,
  Kcy: Kcy$1,
  kcy: kcy$1,
  Kfr: Kfr$1,
  kfr: kfr$1,
  kgreen: kgreen$1,
  KHcy: KHcy$1,
  khcy: khcy$1,
  KJcy: KJcy$1,
  kjcy: kjcy$1,
  Kopf: Kopf$1,
  kopf: kopf$1,
  Kscr: Kscr$1,
  kscr: kscr$1,
  lAarr: lAarr$1,
  Lacute: Lacute$1,
  lacute: lacute$1,
  laemptyv: laemptyv$1,
  lagran: lagran$1,
  Lambda: Lambda$1,
  lambda: lambda$1,
  lang: lang$1,
  Lang: Lang$1,
  langd: langd$1,
  langle: langle$1,
  lap: lap$1,
  Laplacetrf: Laplacetrf$1,
  laquo: laquo$2,
  larrb: larrb$1,
  larrbfs: larrbfs$1,
  larr: larr$1,
  Larr: Larr$1,
  lArr: lArr$1,
  larrfs: larrfs$1,
  larrhk: larrhk$1,
  larrlp: larrlp$1,
  larrpl: larrpl$1,
  larrsim: larrsim$1,
  larrtl: larrtl$1,
  latail: latail$1,
  lAtail: lAtail$1,
  lat: lat$1,
  late: late$1,
  lates: lates$1,
  lbarr: lbarr$1,
  lBarr: lBarr$1,
  lbbrk: lbbrk$1,
  lbrace: lbrace$1,
  lbrack: lbrack$1,
  lbrke: lbrke$1,
  lbrksld: lbrksld$1,
  lbrkslu: lbrkslu$1,
  Lcaron: Lcaron$1,
  lcaron: lcaron$1,
  Lcedil: Lcedil$1,
  lcedil: lcedil$1,
  lceil: lceil$1,
  lcub: lcub$1,
  Lcy: Lcy$1,
  lcy: lcy$1,
  ldca: ldca$1,
  ldquo: ldquo$1,
  ldquor: ldquor$1,
  ldrdhar: ldrdhar$1,
  ldrushar: ldrushar$1,
  ldsh: ldsh$1,
  le: le$1,
  lE: lE$1,
  LeftAngleBracket: LeftAngleBracket$1,
  LeftArrowBar: LeftArrowBar$1,
  leftarrow: leftarrow$1,
  LeftArrow: LeftArrow$1,
  Leftarrow: Leftarrow$1,
  LeftArrowRightArrow: LeftArrowRightArrow$1,
  leftarrowtail: leftarrowtail$1,
  LeftCeiling: LeftCeiling$1,
  LeftDoubleBracket: LeftDoubleBracket$1,
  LeftDownTeeVector: LeftDownTeeVector$1,
  LeftDownVectorBar: LeftDownVectorBar$1,
  LeftDownVector: LeftDownVector$1,
  LeftFloor: LeftFloor$1,
  leftharpoondown: leftharpoondown$1,
  leftharpoonup: leftharpoonup$1,
  leftleftarrows: leftleftarrows$1,
  leftrightarrow: leftrightarrow$1,
  LeftRightArrow: LeftRightArrow$1,
  Leftrightarrow: Leftrightarrow$1,
  leftrightarrows: leftrightarrows$1,
  leftrightharpoons: leftrightharpoons$1,
  leftrightsquigarrow: leftrightsquigarrow$1,
  LeftRightVector: LeftRightVector$1,
  LeftTeeArrow: LeftTeeArrow$1,
  LeftTee: LeftTee$1,
  LeftTeeVector: LeftTeeVector$1,
  leftthreetimes: leftthreetimes$1,
  LeftTriangleBar: LeftTriangleBar$1,
  LeftTriangle: LeftTriangle$1,
  LeftTriangleEqual: LeftTriangleEqual$1,
  LeftUpDownVector: LeftUpDownVector$1,
  LeftUpTeeVector: LeftUpTeeVector$1,
  LeftUpVectorBar: LeftUpVectorBar$1,
  LeftUpVector: LeftUpVector$1,
  LeftVectorBar: LeftVectorBar$1,
  LeftVector: LeftVector$1,
  lEg: lEg$1,
  leg: leg$1,
  leq: leq$1,
  leqq: leqq$1,
  leqslant: leqslant$1,
  lescc: lescc$1,
  les: les$1,
  lesdot: lesdot$1,
  lesdoto: lesdoto$1,
  lesdotor: lesdotor$1,
  lesg: lesg$1,
  lesges: lesges$1,
  lessapprox: lessapprox$1,
  lessdot: lessdot$1,
  lesseqgtr: lesseqgtr$1,
  lesseqqgtr: lesseqqgtr$1,
  LessEqualGreater: LessEqualGreater$1,
  LessFullEqual: LessFullEqual$1,
  LessGreater: LessGreater$1,
  lessgtr: lessgtr$1,
  LessLess: LessLess$1,
  lesssim: lesssim$1,
  LessSlantEqual: LessSlantEqual$1,
  LessTilde: LessTilde$1,
  lfisht: lfisht$1,
  lfloor: lfloor$1,
  Lfr: Lfr$1,
  lfr: lfr$1,
  lg: lg$1,
  lgE: lgE$1,
  lHar: lHar$1,
  lhard: lhard$1,
  lharu: lharu$1,
  lharul: lharul$1,
  lhblk: lhblk$1,
  LJcy: LJcy$1,
  ljcy: ljcy$1,
  llarr: llarr$1,
  ll: ll$1,
  Ll: Ll$1,
  llcorner: llcorner$1,
  Lleftarrow: Lleftarrow$1,
  llhard: llhard$1,
  lltri: lltri$1,
  Lmidot: Lmidot$1,
  lmidot: lmidot$1,
  lmoustache: lmoustache$1,
  lmoust: lmoust$1,
  lnap: lnap$1,
  lnapprox: lnapprox$1,
  lne: lne$1,
  lnE: lnE$1,
  lneq: lneq$1,
  lneqq: lneqq$1,
  lnsim: lnsim$1,
  loang: loang$1,
  loarr: loarr$1,
  lobrk: lobrk$1,
  longleftarrow: longleftarrow$1,
  LongLeftArrow: LongLeftArrow$1,
  Longleftarrow: Longleftarrow$1,
  longleftrightarrow: longleftrightarrow$1,
  LongLeftRightArrow: LongLeftRightArrow$1,
  Longleftrightarrow: Longleftrightarrow$1,
  longmapsto: longmapsto$1,
  longrightarrow: longrightarrow$1,
  LongRightArrow: LongRightArrow$1,
  Longrightarrow: Longrightarrow$1,
  looparrowleft: looparrowleft$1,
  looparrowright: looparrowright$1,
  lopar: lopar$1,
  Lopf: Lopf$1,
  lopf: lopf$1,
  loplus: loplus$1,
  lotimes: lotimes$1,
  lowast: lowast$1,
  lowbar: lowbar$1,
  LowerLeftArrow: LowerLeftArrow$1,
  LowerRightArrow: LowerRightArrow$1,
  loz: loz$1,
  lozenge: lozenge$1,
  lozf: lozf$1,
  lpar: lpar$1,
  lparlt: lparlt$1,
  lrarr: lrarr$1,
  lrcorner: lrcorner$1,
  lrhar: lrhar$1,
  lrhard: lrhard$1,
  lrm: lrm$1,
  lrtri: lrtri$1,
  lsaquo: lsaquo$1,
  lscr: lscr$1,
  Lscr: Lscr$1,
  lsh: lsh$1,
  Lsh: Lsh$1,
  lsim: lsim$1,
  lsime: lsime$1,
  lsimg: lsimg$1,
  lsqb: lsqb$1,
  lsquo: lsquo$1,
  lsquor: lsquor$1,
  Lstrok: Lstrok$1,
  lstrok: lstrok$1,
  ltcc: ltcc$1,
  ltcir: ltcir$1,
  lt: lt$3,
  LT: LT$2,
  Lt: Lt$1,
  ltdot: ltdot$1,
  lthree: lthree$1,
  ltimes: ltimes$1,
  ltlarr: ltlarr$1,
  ltquest: ltquest$1,
  ltri: ltri$1,
  ltrie: ltrie$1,
  ltrif: ltrif$1,
  ltrPar: ltrPar$1,
  lurdshar: lurdshar$1,
  luruhar: luruhar$1,
  lvertneqq: lvertneqq$1,
  lvnE: lvnE$1,
  macr: macr$2,
  male: male$1,
  malt: malt$1,
  maltese: maltese$1,
  "Map": "⤅",
  map: map$1,
  mapsto: mapsto$1,
  mapstodown: mapstodown$1,
  mapstoleft: mapstoleft$1,
  mapstoup: mapstoup$1,
  marker: marker$1,
  mcomma: mcomma$1,
  Mcy: Mcy$1,
  mcy: mcy$1,
  mdash: mdash$1,
  mDDot: mDDot$1,
  measuredangle: measuredangle$1,
  MediumSpace: MediumSpace$1,
  Mellintrf: Mellintrf$1,
  Mfr: Mfr$1,
  mfr: mfr$1,
  mho: mho$1,
  micro: micro$2,
  midast: midast$1,
  midcir: midcir$1,
  mid: mid$1,
  middot: middot$2,
  minusb: minusb$1,
  minus: minus$1,
  minusd: minusd$1,
  minusdu: minusdu$1,
  MinusPlus: MinusPlus$1,
  mlcp: mlcp$1,
  mldr: mldr$1,
  mnplus: mnplus$1,
  models: models$1,
  Mopf: Mopf$1,
  mopf: mopf$1,
  mp: mp$1,
  mscr: mscr$1,
  Mscr: Mscr$1,
  mstpos: mstpos$1,
  Mu: Mu$1,
  mu: mu$1,
  multimap: multimap$1,
  mumap: mumap$1,
  nabla: nabla$1,
  Nacute: Nacute$1,
  nacute: nacute$1,
  nang: nang$1,
  nap: nap$1,
  napE: napE$1,
  napid: napid$1,
  napos: napos$1,
  napprox: napprox$1,
  natural: natural$1,
  naturals: naturals$1,
  natur: natur$1,
  nbsp: nbsp$2,
  nbump: nbump$1,
  nbumpe: nbumpe$1,
  ncap: ncap$1,
  Ncaron: Ncaron$1,
  ncaron: ncaron$1,
  Ncedil: Ncedil$1,
  ncedil: ncedil$1,
  ncong: ncong$1,
  ncongdot: ncongdot$1,
  ncup: ncup$1,
  Ncy: Ncy$1,
  ncy: ncy$1,
  ndash: ndash$1,
  nearhk: nearhk$1,
  nearr: nearr$1,
  neArr: neArr$1,
  nearrow: nearrow$1,
  ne: ne$1,
  nedot: nedot$1,
  NegativeMediumSpace: NegativeMediumSpace$1,
  NegativeThickSpace: NegativeThickSpace$1,
  NegativeThinSpace: NegativeThinSpace$1,
  NegativeVeryThinSpace: NegativeVeryThinSpace$1,
  nequiv: nequiv$1,
  nesear: nesear$1,
  nesim: nesim$1,
  NestedGreaterGreater: NestedGreaterGreater$1,
  NestedLessLess: NestedLessLess$1,
  NewLine: NewLine$1,
  nexist: nexist$1,
  nexists: nexists$1,
  Nfr: Nfr$1,
  nfr: nfr$1,
  ngE: ngE$1,
  nge: nge$1,
  ngeq: ngeq$1,
  ngeqq: ngeqq$1,
  ngeqslant: ngeqslant$1,
  nges: nges$1,
  nGg: nGg$1,
  ngsim: ngsim$1,
  nGt: nGt$1,
  ngt: ngt$1,
  ngtr: ngtr$1,
  nGtv: nGtv$1,
  nharr: nharr$1,
  nhArr: nhArr$1,
  nhpar: nhpar$1,
  ni: ni$1,
  nis: nis$1,
  nisd: nisd$1,
  niv: niv$1,
  NJcy: NJcy$1,
  njcy: njcy$1,
  nlarr: nlarr$1,
  nlArr: nlArr$1,
  nldr: nldr$1,
  nlE: nlE$1,
  nle: nle$1,
  nleftarrow: nleftarrow$1,
  nLeftarrow: nLeftarrow$1,
  nleftrightarrow: nleftrightarrow$1,
  nLeftrightarrow: nLeftrightarrow$1,
  nleq: nleq$1,
  nleqq: nleqq$1,
  nleqslant: nleqslant$1,
  nles: nles$1,
  nless: nless$1,
  nLl: nLl$1,
  nlsim: nlsim$1,
  nLt: nLt$1,
  nlt: nlt$1,
  nltri: nltri$1,
  nltrie: nltrie$1,
  nLtv: nLtv$1,
  nmid: nmid$1,
  NoBreak: NoBreak$1,
  NonBreakingSpace: NonBreakingSpace$1,
  nopf: nopf$1,
  Nopf: Nopf$1,
  Not: Not$1,
  not: not$2,
  NotCongruent: NotCongruent$1,
  NotCupCap: NotCupCap$1,
  NotDoubleVerticalBar: NotDoubleVerticalBar$1,
  NotElement: NotElement$1,
  NotEqual: NotEqual$1,
  NotEqualTilde: NotEqualTilde$1,
  NotExists: NotExists$1,
  NotGreater: NotGreater$1,
  NotGreaterEqual: NotGreaterEqual$1,
  NotGreaterFullEqual: NotGreaterFullEqual$1,
  NotGreaterGreater: NotGreaterGreater$1,
  NotGreaterLess: NotGreaterLess$1,
  NotGreaterSlantEqual: NotGreaterSlantEqual$1,
  NotGreaterTilde: NotGreaterTilde$1,
  NotHumpDownHump: NotHumpDownHump$1,
  NotHumpEqual: NotHumpEqual$1,
  notin: notin$1,
  notindot: notindot$1,
  notinE: notinE$1,
  notinva: notinva$1,
  notinvb: notinvb$1,
  notinvc: notinvc$1,
  NotLeftTriangleBar: NotLeftTriangleBar$1,
  NotLeftTriangle: NotLeftTriangle$1,
  NotLeftTriangleEqual: NotLeftTriangleEqual$1,
  NotLess: NotLess$1,
  NotLessEqual: NotLessEqual$1,
  NotLessGreater: NotLessGreater$1,
  NotLessLess: NotLessLess$1,
  NotLessSlantEqual: NotLessSlantEqual$1,
  NotLessTilde: NotLessTilde$1,
  NotNestedGreaterGreater: NotNestedGreaterGreater$1,
  NotNestedLessLess: NotNestedLessLess$1,
  notni: notni$1,
  notniva: notniva$1,
  notnivb: notnivb$1,
  notnivc: notnivc$1,
  NotPrecedes: NotPrecedes$1,
  NotPrecedesEqual: NotPrecedesEqual$1,
  NotPrecedesSlantEqual: NotPrecedesSlantEqual$1,
  NotReverseElement: NotReverseElement$1,
  NotRightTriangleBar: NotRightTriangleBar$1,
  NotRightTriangle: NotRightTriangle$1,
  NotRightTriangleEqual: NotRightTriangleEqual$1,
  NotSquareSubset: NotSquareSubset$1,
  NotSquareSubsetEqual: NotSquareSubsetEqual$1,
  NotSquareSuperset: NotSquareSuperset$1,
  NotSquareSupersetEqual: NotSquareSupersetEqual$1,
  NotSubset: NotSubset$1,
  NotSubsetEqual: NotSubsetEqual$1,
  NotSucceeds: NotSucceeds$1,
  NotSucceedsEqual: NotSucceedsEqual$1,
  NotSucceedsSlantEqual: NotSucceedsSlantEqual$1,
  NotSucceedsTilde: NotSucceedsTilde$1,
  NotSuperset: NotSuperset$1,
  NotSupersetEqual: NotSupersetEqual$1,
  NotTilde: NotTilde$1,
  NotTildeEqual: NotTildeEqual$1,
  NotTildeFullEqual: NotTildeFullEqual$1,
  NotTildeTilde: NotTildeTilde$1,
  NotVerticalBar: NotVerticalBar$1,
  nparallel: nparallel$1,
  npar: npar$1,
  nparsl: nparsl$1,
  npart: npart$1,
  npolint: npolint$1,
  npr: npr$1,
  nprcue: nprcue$1,
  nprec: nprec$1,
  npreceq: npreceq$1,
  npre: npre$1,
  nrarrc: nrarrc$1,
  nrarr: nrarr$1,
  nrArr: nrArr$1,
  nrarrw: nrarrw$1,
  nrightarrow: nrightarrow$1,
  nRightarrow: nRightarrow$1,
  nrtri: nrtri$1,
  nrtrie: nrtrie$1,
  nsc: nsc$1,
  nsccue: nsccue$1,
  nsce: nsce$1,
  Nscr: Nscr$1,
  nscr: nscr$1,
  nshortmid: nshortmid$1,
  nshortparallel: nshortparallel$1,
  nsim: nsim$1,
  nsime: nsime$1,
  nsimeq: nsimeq$1,
  nsmid: nsmid$1,
  nspar: nspar$1,
  nsqsube: nsqsube$1,
  nsqsupe: nsqsupe$1,
  nsub: nsub$1,
  nsubE: nsubE$1,
  nsube: nsube$1,
  nsubset: nsubset$1,
  nsubseteq: nsubseteq$1,
  nsubseteqq: nsubseteqq$1,
  nsucc: nsucc$1,
  nsucceq: nsucceq$1,
  nsup: nsup$1,
  nsupE: nsupE$1,
  nsupe: nsupe$1,
  nsupset: nsupset$1,
  nsupseteq: nsupseteq$1,
  nsupseteqq: nsupseteqq$1,
  ntgl: ntgl$1,
  Ntilde: Ntilde$2,
  ntilde: ntilde$2,
  ntlg: ntlg$1,
  ntriangleleft: ntriangleleft$1,
  ntrianglelefteq: ntrianglelefteq$1,
  ntriangleright: ntriangleright$1,
  ntrianglerighteq: ntrianglerighteq$1,
  Nu: Nu$1,
  nu: nu$1,
  num: num$1,
  numero: numero$1,
  numsp: numsp$1,
  nvap: nvap$1,
  nvdash: nvdash$1,
  nvDash: nvDash$1,
  nVdash: nVdash$1,
  nVDash: nVDash$1,
  nvge: nvge$1,
  nvgt: nvgt$1,
  nvHarr: nvHarr$1,
  nvinfin: nvinfin$1,
  nvlArr: nvlArr$1,
  nvle: nvle$1,
  nvlt: nvlt$1,
  nvltrie: nvltrie$1,
  nvrArr: nvrArr$1,
  nvrtrie: nvrtrie$1,
  nvsim: nvsim$1,
  nwarhk: nwarhk$1,
  nwarr: nwarr$1,
  nwArr: nwArr$1,
  nwarrow: nwarrow$1,
  nwnear: nwnear$1,
  Oacute: Oacute$2,
  oacute: oacute$2,
  oast: oast$1,
  Ocirc: Ocirc$2,
  ocirc: ocirc$2,
  ocir: ocir$1,
  Ocy: Ocy$1,
  ocy: ocy$1,
  odash: odash$1,
  Odblac: Odblac$1,
  odblac: odblac$1,
  odiv: odiv$1,
  odot: odot$1,
  odsold: odsold$1,
  OElig: OElig$1,
  oelig: oelig$1,
  ofcir: ofcir$1,
  Ofr: Ofr$1,
  ofr: ofr$1,
  ogon: ogon$1,
  Ograve: Ograve$2,
  ograve: ograve$2,
  ogt: ogt$1,
  ohbar: ohbar$1,
  ohm: ohm$1,
  oint: oint$1,
  olarr: olarr$1,
  olcir: olcir$1,
  olcross: olcross$1,
  oline: oline$1,
  olt: olt$1,
  Omacr: Omacr$1,
  omacr: omacr$1,
  Omega: Omega$1,
  omega: omega$1,
  Omicron: Omicron$1,
  omicron: omicron$1,
  omid: omid$1,
  ominus: ominus$1,
  Oopf: Oopf$1,
  oopf: oopf$1,
  opar: opar$1,
  OpenCurlyDoubleQuote: OpenCurlyDoubleQuote$1,
  OpenCurlyQuote: OpenCurlyQuote$1,
  operp: operp$1,
  oplus: oplus$1,
  orarr: orarr$1,
  Or: Or$1,
  or: or$1,
  ord: ord$1,
  order: order$1,
  orderof: orderof$1,
  ordf: ordf$2,
  ordm: ordm$2,
  origof: origof$1,
  oror: oror$1,
  orslope: orslope$1,
  orv: orv$1,
  oS: oS$1,
  Oscr: Oscr$1,
  oscr: oscr$1,
  Oslash: Oslash$2,
  oslash: oslash$2,
  osol: osol$1,
  Otilde: Otilde$2,
  otilde: otilde$2,
  otimesas: otimesas$1,
  Otimes: Otimes$1,
  otimes: otimes$1,
  Ouml: Ouml$2,
  ouml: ouml$2,
  ovbar: ovbar$1,
  OverBar: OverBar$1,
  OverBrace: OverBrace$1,
  OverBracket: OverBracket$1,
  OverParenthesis: OverParenthesis$1,
  para: para$2,
  parallel: parallel$1,
  par: par$1,
  parsim: parsim$1,
  parsl: parsl$1,
  part: part$1,
  PartialD: PartialD$1,
  Pcy: Pcy$1,
  pcy: pcy$1,
  percnt: percnt$1,
  period: period$1,
  permil: permil$1,
  perp: perp$1,
  pertenk: pertenk$1,
  Pfr: Pfr$1,
  pfr: pfr$1,
  Phi: Phi$1,
  phi: phi$1,
  phiv: phiv$1,
  phmmat: phmmat$1,
  phone: phone$1,
  Pi: Pi$1,
  pi: pi$1,
  pitchfork: pitchfork$1,
  piv: piv$1,
  planck: planck$1,
  planckh: planckh$1,
  plankv: plankv$1,
  plusacir: plusacir$1,
  plusb: plusb$1,
  pluscir: pluscir$1,
  plus: plus$1,
  plusdo: plusdo$1,
  plusdu: plusdu$1,
  pluse: pluse$1,
  PlusMinus: PlusMinus$1,
  plusmn: plusmn$2,
  plussim: plussim$1,
  plustwo: plustwo$1,
  pm: pm$1,
  Poincareplane: Poincareplane$1,
  pointint: pointint$1,
  popf: popf$1,
  Popf: Popf$1,
  pound: pound$2,
  prap: prap$1,
  Pr: Pr$1,
  pr: pr$1,
  prcue: prcue$1,
  precapprox: precapprox$1,
  prec: prec$1,
  preccurlyeq: preccurlyeq$1,
  Precedes: Precedes$1,
  PrecedesEqual: PrecedesEqual$1,
  PrecedesSlantEqual: PrecedesSlantEqual$1,
  PrecedesTilde: PrecedesTilde$1,
  preceq: preceq$1,
  precnapprox: precnapprox$1,
  precneqq: precneqq$1,
  precnsim: precnsim$1,
  pre: pre$1,
  prE: prE$1,
  precsim: precsim$1,
  prime: prime$1,
  Prime: Prime$1,
  primes: primes$1,
  prnap: prnap$1,
  prnE: prnE$1,
  prnsim: prnsim$1,
  prod: prod$1,
  Product: Product$1,
  profalar: profalar$1,
  profline: profline$1,
  profsurf: profsurf$1,
  prop: prop$1,
  Proportional: Proportional$1,
  Proportion: Proportion$1,
  propto: propto$1,
  prsim: prsim$1,
  prurel: prurel$1,
  Pscr: Pscr$1,
  pscr: pscr$1,
  Psi: Psi$1,
  psi: psi$1,
  puncsp: puncsp$1,
  Qfr: Qfr$1,
  qfr: qfr$1,
  qint: qint$1,
  qopf: qopf$1,
  Qopf: Qopf$1,
  qprime: qprime$1,
  Qscr: Qscr$1,
  qscr: qscr$1,
  quaternions: quaternions$1,
  quatint: quatint$1,
  quest: quest$1,
  questeq: questeq$1,
  quot: quot$3,
  QUOT: QUOT$2,
  rAarr: rAarr$1,
  race: race$1,
  Racute: Racute$1,
  racute: racute$1,
  radic: radic$1,
  raemptyv: raemptyv$1,
  rang: rang$1,
  Rang: Rang$1,
  rangd: rangd$1,
  range: range$1,
  rangle: rangle$1,
  raquo: raquo$2,
  rarrap: rarrap$1,
  rarrb: rarrb$1,
  rarrbfs: rarrbfs$1,
  rarrc: rarrc$1,
  rarr: rarr$1,
  Rarr: Rarr$1,
  rArr: rArr$1,
  rarrfs: rarrfs$1,
  rarrhk: rarrhk$1,
  rarrlp: rarrlp$1,
  rarrpl: rarrpl$1,
  rarrsim: rarrsim$1,
  Rarrtl: Rarrtl$1,
  rarrtl: rarrtl$1,
  rarrw: rarrw$1,
  ratail: ratail$1,
  rAtail: rAtail$1,
  ratio: ratio$1,
  rationals: rationals$1,
  rbarr: rbarr$1,
  rBarr: rBarr$1,
  RBarr: RBarr$1,
  rbbrk: rbbrk$1,
  rbrace: rbrace$1,
  rbrack: rbrack$1,
  rbrke: rbrke$1,
  rbrksld: rbrksld$1,
  rbrkslu: rbrkslu$1,
  Rcaron: Rcaron$1,
  rcaron: rcaron$1,
  Rcedil: Rcedil$1,
  rcedil: rcedil$1,
  rceil: rceil$1,
  rcub: rcub$1,
  Rcy: Rcy$1,
  rcy: rcy$1,
  rdca: rdca$1,
  rdldhar: rdldhar$1,
  rdquo: rdquo$1,
  rdquor: rdquor$1,
  rdsh: rdsh$1,
  real: real$1,
  realine: realine$1,
  realpart: realpart$1,
  reals: reals$1,
  Re: Re$1,
  rect: rect$1,
  reg: reg$2,
  REG: REG$2,
  ReverseElement: ReverseElement$1,
  ReverseEquilibrium: ReverseEquilibrium$1,
  ReverseUpEquilibrium: ReverseUpEquilibrium$1,
  rfisht: rfisht$1,
  rfloor: rfloor$1,
  rfr: rfr$1,
  Rfr: Rfr$1,
  rHar: rHar$1,
  rhard: rhard$1,
  rharu: rharu$1,
  rharul: rharul$1,
  Rho: Rho$1,
  rho: rho$1,
  rhov: rhov$1,
  RightAngleBracket: RightAngleBracket$1,
  RightArrowBar: RightArrowBar$1,
  rightarrow: rightarrow$1,
  RightArrow: RightArrow$1,
  Rightarrow: Rightarrow$1,
  RightArrowLeftArrow: RightArrowLeftArrow$1,
  rightarrowtail: rightarrowtail$1,
  RightCeiling: RightCeiling$1,
  RightDoubleBracket: RightDoubleBracket$1,
  RightDownTeeVector: RightDownTeeVector$1,
  RightDownVectorBar: RightDownVectorBar$1,
  RightDownVector: RightDownVector$1,
  RightFloor: RightFloor$1,
  rightharpoondown: rightharpoondown$1,
  rightharpoonup: rightharpoonup$1,
  rightleftarrows: rightleftarrows$1,
  rightleftharpoons: rightleftharpoons$1,
  rightrightarrows: rightrightarrows$1,
  rightsquigarrow: rightsquigarrow$1,
  RightTeeArrow: RightTeeArrow$1,
  RightTee: RightTee$1,
  RightTeeVector: RightTeeVector$1,
  rightthreetimes: rightthreetimes$1,
  RightTriangleBar: RightTriangleBar$1,
  RightTriangle: RightTriangle$1,
  RightTriangleEqual: RightTriangleEqual$1,
  RightUpDownVector: RightUpDownVector$1,
  RightUpTeeVector: RightUpTeeVector$1,
  RightUpVectorBar: RightUpVectorBar$1,
  RightUpVector: RightUpVector$1,
  RightVectorBar: RightVectorBar$1,
  RightVector: RightVector$1,
  ring: ring$1,
  risingdotseq: risingdotseq$1,
  rlarr: rlarr$1,
  rlhar: rlhar$1,
  rlm: rlm$1,
  rmoustache: rmoustache$1,
  rmoust: rmoust$1,
  rnmid: rnmid$1,
  roang: roang$1,
  roarr: roarr$1,
  robrk: robrk$1,
  ropar: ropar$1,
  ropf: ropf$1,
  Ropf: Ropf$1,
  roplus: roplus$1,
  rotimes: rotimes$1,
  RoundImplies: RoundImplies$1,
  rpar: rpar$1,
  rpargt: rpargt$1,
  rppolint: rppolint$1,
  rrarr: rrarr$1,
  Rrightarrow: Rrightarrow$1,
  rsaquo: rsaquo$1,
  rscr: rscr$1,
  Rscr: Rscr$1,
  rsh: rsh$1,
  Rsh: Rsh$1,
  rsqb: rsqb$1,
  rsquo: rsquo$1,
  rsquor: rsquor$1,
  rthree: rthree$1,
  rtimes: rtimes$1,
  rtri: rtri$1,
  rtrie: rtrie$1,
  rtrif: rtrif$1,
  rtriltri: rtriltri$1,
  RuleDelayed: RuleDelayed$1,
  ruluhar: ruluhar$1,
  rx: rx$1,
  Sacute: Sacute$1,
  sacute: sacute$1,
  sbquo: sbquo$1,
  scap: scap$1,
  Scaron: Scaron$1,
  scaron: scaron$1,
  Sc: Sc$1,
  sc: sc$1,
  sccue: sccue$1,
  sce: sce$1,
  scE: scE$1,
  Scedil: Scedil$1,
  scedil: scedil$1,
  Scirc: Scirc$1,
  scirc: scirc$1,
  scnap: scnap$1,
  scnE: scnE$1,
  scnsim: scnsim$1,
  scpolint: scpolint$1,
  scsim: scsim$1,
  Scy: Scy$1,
  scy: scy$1,
  sdotb: sdotb$1,
  sdot: sdot$1,
  sdote: sdote$1,
  searhk: searhk$1,
  searr: searr$1,
  seArr: seArr$1,
  searrow: searrow$1,
  sect: sect$2,
  semi: semi$1,
  seswar: seswar$1,
  setminus: setminus$1,
  setmn: setmn$1,
  sext: sext$1,
  Sfr: Sfr$1,
  sfr: sfr$1,
  sfrown: sfrown$1,
  sharp: sharp$1,
  SHCHcy: SHCHcy$1,
  shchcy: shchcy$1,
  SHcy: SHcy$1,
  shcy: shcy$1,
  ShortDownArrow: ShortDownArrow$1,
  ShortLeftArrow: ShortLeftArrow$1,
  shortmid: shortmid$1,
  shortparallel: shortparallel$1,
  ShortRightArrow: ShortRightArrow$1,
  ShortUpArrow: ShortUpArrow$1,
  shy: shy$2,
  Sigma: Sigma$1,
  sigma: sigma$1,
  sigmaf: sigmaf$1,
  sigmav: sigmav$1,
  sim: sim$1,
  simdot: simdot$1,
  sime: sime$1,
  simeq: simeq$1,
  simg: simg$1,
  simgE: simgE$1,
  siml: siml$1,
  simlE: simlE$1,
  simne: simne$1,
  simplus: simplus$1,
  simrarr: simrarr$1,
  slarr: slarr$1,
  SmallCircle: SmallCircle$1,
  smallsetminus: smallsetminus$1,
  smashp: smashp$1,
  smeparsl: smeparsl$1,
  smid: smid$1,
  smile: smile$1,
  smt: smt$1,
  smte: smte$1,
  smtes: smtes$1,
  SOFTcy: SOFTcy$1,
  softcy: softcy$1,
  solbar: solbar$1,
  solb: solb$1,
  sol: sol$1,
  Sopf: Sopf$1,
  sopf: sopf$1,
  spades: spades$1,
  spadesuit: spadesuit$1,
  spar: spar$1,
  sqcap: sqcap$1,
  sqcaps: sqcaps$1,
  sqcup: sqcup$1,
  sqcups: sqcups$1,
  Sqrt: Sqrt$1,
  sqsub: sqsub$1,
  sqsube: sqsube$1,
  sqsubset: sqsubset$1,
  sqsubseteq: sqsubseteq$1,
  sqsup: sqsup$1,
  sqsupe: sqsupe$1,
  sqsupset: sqsupset$1,
  sqsupseteq: sqsupseteq$1,
  square: square$1,
  Square: Square$1,
  SquareIntersection: SquareIntersection$1,
  SquareSubset: SquareSubset$1,
  SquareSubsetEqual: SquareSubsetEqual$1,
  SquareSuperset: SquareSuperset$1,
  SquareSupersetEqual: SquareSupersetEqual$1,
  SquareUnion: SquareUnion$1,
  squarf: squarf$1,
  squ: squ$1,
  squf: squf$1,
  srarr: srarr$1,
  Sscr: Sscr$1,
  sscr: sscr$1,
  ssetmn: ssetmn$1,
  ssmile: ssmile$1,
  sstarf: sstarf$1,
  Star: Star$1,
  star: star$1,
  starf: starf$1,
  straightepsilon: straightepsilon$1,
  straightphi: straightphi$1,
  strns: strns$1,
  sub: sub$1,
  Sub: Sub$1,
  subdot: subdot$1,
  subE: subE$1,
  sube: sube$1,
  subedot: subedot$1,
  submult: submult$1,
  subnE: subnE$1,
  subne: subne$1,
  subplus: subplus$1,
  subrarr: subrarr$1,
  subset: subset$1,
  Subset: Subset$1,
  subseteq: subseteq$1,
  subseteqq: subseteqq$1,
  SubsetEqual: SubsetEqual$1,
  subsetneq: subsetneq$1,
  subsetneqq: subsetneqq$1,
  subsim: subsim$1,
  subsub: subsub$1,
  subsup: subsup$1,
  succapprox: succapprox$1,
  succ: succ$1,
  succcurlyeq: succcurlyeq$1,
  Succeeds: Succeeds$1,
  SucceedsEqual: SucceedsEqual$1,
  SucceedsSlantEqual: SucceedsSlantEqual$1,
  SucceedsTilde: SucceedsTilde$1,
  succeq: succeq$1,
  succnapprox: succnapprox$1,
  succneqq: succneqq$1,
  succnsim: succnsim$1,
  succsim: succsim$1,
  SuchThat: SuchThat$1,
  sum: sum$1,
  Sum: Sum$1,
  sung: sung$1,
  sup1: sup1$2,
  sup2: sup2$2,
  sup3: sup3$2,
  sup: sup$1,
  Sup: Sup$1,
  supdot: supdot$1,
  supdsub: supdsub$1,
  supE: supE$1,
  supe: supe$1,
  supedot: supedot$1,
  Superset: Superset$1,
  SupersetEqual: SupersetEqual$1,
  suphsol: suphsol$1,
  suphsub: suphsub$1,
  suplarr: suplarr$1,
  supmult: supmult$1,
  supnE: supnE$1,
  supne: supne$1,
  supplus: supplus$1,
  supset: supset$1,
  Supset: Supset$1,
  supseteq: supseteq$1,
  supseteqq: supseteqq$1,
  supsetneq: supsetneq$1,
  supsetneqq: supsetneqq$1,
  supsim: supsim$1,
  supsub: supsub$1,
  supsup: supsup$1,
  swarhk: swarhk$1,
  swarr: swarr$1,
  swArr: swArr$1,
  swarrow: swarrow$1,
  swnwar: swnwar$1,
  szlig: szlig$2,
  Tab: Tab$1,
  target: target$1,
  Tau: Tau$1,
  tau: tau$1,
  tbrk: tbrk$1,
  Tcaron: Tcaron$1,
  tcaron: tcaron$1,
  Tcedil: Tcedil$1,
  tcedil: tcedil$1,
  Tcy: Tcy$1,
  tcy: tcy$1,
  tdot: tdot$1,
  telrec: telrec$1,
  Tfr: Tfr$1,
  tfr: tfr$1,
  there4: there4$1,
  therefore: therefore$1,
  Therefore: Therefore$1,
  Theta: Theta$1,
  theta: theta$1,
  thetasym: thetasym$1,
  thetav: thetav$1,
  thickapprox: thickapprox$1,
  thicksim: thicksim$1,
  ThickSpace: ThickSpace$1,
  ThinSpace: ThinSpace$1,
  thinsp: thinsp$1,
  thkap: thkap$1,
  thksim: thksim$1,
  THORN: THORN$2,
  thorn: thorn$2,
  tilde: tilde$1,
  Tilde: Tilde$1,
  TildeEqual: TildeEqual$1,
  TildeFullEqual: TildeFullEqual$1,
  TildeTilde: TildeTilde$1,
  timesbar: timesbar$1,
  timesb: timesb$1,
  times: times$2,
  timesd: timesd$1,
  tint: tint$1,
  toea: toea$1,
  topbot: topbot$1,
  topcir: topcir$1,
  top: top$1,
  Topf: Topf$1,
  topf: topf$1,
  topfork: topfork$1,
  tosa: tosa$1,
  tprime: tprime$1,
  trade: trade$1,
  TRADE: TRADE$1,
  triangle: triangle$1,
  triangledown: triangledown$1,
  triangleleft: triangleleft$1,
  trianglelefteq: trianglelefteq$1,
  triangleq: triangleq$1,
  triangleright: triangleright$1,
  trianglerighteq: trianglerighteq$1,
  tridot: tridot$1,
  trie: trie$1,
  triminus: triminus$1,
  TripleDot: TripleDot$1,
  triplus: triplus$1,
  trisb: trisb$1,
  tritime: tritime$1,
  trpezium: trpezium$1,
  Tscr: Tscr$1,
  tscr: tscr$1,
  TScy: TScy$1,
  tscy: tscy$1,
  TSHcy: TSHcy$1,
  tshcy: tshcy$1,
  Tstrok: Tstrok$1,
  tstrok: tstrok$1,
  twixt: twixt$1,
  twoheadleftarrow: twoheadleftarrow$1,
  twoheadrightarrow: twoheadrightarrow$1,
  Uacute: Uacute$2,
  uacute: uacute$2,
  uarr: uarr$1,
  Uarr: Uarr$1,
  uArr: uArr$1,
  Uarrocir: Uarrocir$1,
  Ubrcy: Ubrcy$1,
  ubrcy: ubrcy$1,
  Ubreve: Ubreve$1,
  ubreve: ubreve$1,
  Ucirc: Ucirc$2,
  ucirc: ucirc$2,
  Ucy: Ucy$1,
  ucy: ucy$1,
  udarr: udarr$1,
  Udblac: Udblac$1,
  udblac: udblac$1,
  udhar: udhar$1,
  ufisht: ufisht$1,
  Ufr: Ufr$1,
  ufr: ufr$1,
  Ugrave: Ugrave$2,
  ugrave: ugrave$2,
  uHar: uHar$1,
  uharl: uharl$1,
  uharr: uharr$1,
  uhblk: uhblk$1,
  ulcorn: ulcorn$1,
  ulcorner: ulcorner$1,
  ulcrop: ulcrop$1,
  ultri: ultri$1,
  Umacr: Umacr$1,
  umacr: umacr$1,
  uml: uml$2,
  UnderBar: UnderBar$1,
  UnderBrace: UnderBrace$1,
  UnderBracket: UnderBracket$1,
  UnderParenthesis: UnderParenthesis$1,
  Union: Union$1,
  UnionPlus: UnionPlus$1,
  Uogon: Uogon$1,
  uogon: uogon$1,
  Uopf: Uopf$1,
  uopf: uopf$1,
  UpArrowBar: UpArrowBar$1,
  uparrow: uparrow$1,
  UpArrow: UpArrow$1,
  Uparrow: Uparrow$1,
  UpArrowDownArrow: UpArrowDownArrow$1,
  updownarrow: updownarrow$1,
  UpDownArrow: UpDownArrow$1,
  Updownarrow: Updownarrow$1,
  UpEquilibrium: UpEquilibrium$1,
  upharpoonleft: upharpoonleft$1,
  upharpoonright: upharpoonright$1,
  uplus: uplus$1,
  UpperLeftArrow: UpperLeftArrow$1,
  UpperRightArrow: UpperRightArrow$1,
  upsi: upsi$1,
  Upsi: Upsi$1,
  upsih: upsih$1,
  Upsilon: Upsilon$1,
  upsilon: upsilon$1,
  UpTeeArrow: UpTeeArrow$1,
  UpTee: UpTee$1,
  upuparrows: upuparrows$1,
  urcorn: urcorn$1,
  urcorner: urcorner$1,
  urcrop: urcrop$1,
  Uring: Uring$1,
  uring: uring$1,
  urtri: urtri$1,
  Uscr: Uscr$1,
  uscr: uscr$1,
  utdot: utdot$1,
  Utilde: Utilde$1,
  utilde: utilde$1,
  utri: utri$1,
  utrif: utrif$1,
  uuarr: uuarr$1,
  Uuml: Uuml$2,
  uuml: uuml$2,
  uwangle: uwangle$1,
  vangrt: vangrt$1,
  varepsilon: varepsilon$1,
  varkappa: varkappa$1,
  varnothing: varnothing$1,
  varphi: varphi$1,
  varpi: varpi$1,
  varpropto: varpropto$1,
  varr: varr$1,
  vArr: vArr$1,
  varrho: varrho$1,
  varsigma: varsigma$1,
  varsubsetneq: varsubsetneq$1,
  varsubsetneqq: varsubsetneqq$1,
  varsupsetneq: varsupsetneq$1,
  varsupsetneqq: varsupsetneqq$1,
  vartheta: vartheta$1,
  vartriangleleft: vartriangleleft$1,
  vartriangleright: vartriangleright$1,
  vBar: vBar$1,
  Vbar: Vbar$1,
  vBarv: vBarv$1,
  Vcy: Vcy$1,
  vcy: vcy$1,
  vdash: vdash$1,
  vDash: vDash$1,
  Vdash: Vdash$1,
  VDash: VDash$1,
  Vdashl: Vdashl$1,
  veebar: veebar$1,
  vee: vee$1,
  Vee: Vee$1,
  veeeq: veeeq$1,
  vellip: vellip$1,
  verbar: verbar$1,
  Verbar: Verbar$1,
  vert: vert$1,
  Vert: Vert$1,
  VerticalBar: VerticalBar$1,
  VerticalLine: VerticalLine$1,
  VerticalSeparator: VerticalSeparator$1,
  VerticalTilde: VerticalTilde$1,
  VeryThinSpace: VeryThinSpace$1,
  Vfr: Vfr$1,
  vfr: vfr$1,
  vltri: vltri$1,
  vnsub: vnsub$1,
  vnsup: vnsup$1,
  Vopf: Vopf$1,
  vopf: vopf$1,
  vprop: vprop$1,
  vrtri: vrtri$1,
  Vscr: Vscr$1,
  vscr: vscr$1,
  vsubnE: vsubnE$1,
  vsubne: vsubne$1,
  vsupnE: vsupnE$1,
  vsupne: vsupne$1,
  Vvdash: Vvdash$1,
  vzigzag: vzigzag$1,
  Wcirc: Wcirc$1,
  wcirc: wcirc$1,
  wedbar: wedbar$1,
  wedge: wedge$1,
  Wedge: Wedge$1,
  wedgeq: wedgeq$1,
  weierp: weierp$1,
  Wfr: Wfr$1,
  wfr: wfr$1,
  Wopf: Wopf$1,
  wopf: wopf$1,
  wp: wp$1,
  wr: wr$1,
  wreath: wreath$1,
  Wscr: Wscr$1,
  wscr: wscr$1,
  xcap: xcap$1,
  xcirc: xcirc$1,
  xcup: xcup$1,
  xdtri: xdtri$1,
  Xfr: Xfr$1,
  xfr: xfr$1,
  xharr: xharr$1,
  xhArr: xhArr$1,
  Xi: Xi$1,
  xi: xi$1,
  xlarr: xlarr$1,
  xlArr: xlArr$1,
  xmap: xmap$1,
  xnis: xnis$1,
  xodot: xodot$1,
  Xopf: Xopf$1,
  xopf: xopf$1,
  xoplus: xoplus$1,
  xotime: xotime$1,
  xrarr: xrarr$1,
  xrArr: xrArr$1,
  Xscr: Xscr$1,
  xscr: xscr$1,
  xsqcup: xsqcup$1,
  xuplus: xuplus$1,
  xutri: xutri$1,
  xvee: xvee$1,
  xwedge: xwedge$1,
  Yacute: Yacute$2,
  yacute: yacute$2,
  YAcy: YAcy$1,
  yacy: yacy$1,
  Ycirc: Ycirc$1,
  ycirc: ycirc$1,
  Ycy: Ycy$1,
  ycy: ycy$1,
  yen: yen$2,
  Yfr: Yfr$1,
  yfr: yfr$1,
  YIcy: YIcy$1,
  yicy: yicy$1,
  Yopf: Yopf$1,
  yopf: yopf$1,
  Yscr: Yscr$1,
  yscr: yscr$1,
  YUcy: YUcy$1,
  yucy: yucy$1,
  yuml: yuml$2,
  Yuml: Yuml$1,
  Zacute: Zacute$1,
  zacute: zacute$1,
  Zcaron: Zcaron$1,
  zcaron: zcaron$1,
  Zcy: Zcy$1,
  zcy: zcy$1,
  Zdot: Zdot$1,
  zdot: zdot$1,
  zeetrf: zeetrf$1,
  ZeroWidthSpace: ZeroWidthSpace$1,
  Zeta: Zeta$1,
  zeta: zeta$1,
  zfr: zfr$1,
  Zfr: Zfr$1,
  ZHcy: ZHcy$1,
  zhcy: zhcy$1,
  zigrarr: zigrarr$1,
  zopf: zopf$1,
  Zopf: Zopf$1,
  Zscr: Zscr$1,
  zscr: zscr$1,
  zwj: zwj$1,
  zwnj: zwnj$1
};

var entities$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Aacute: Aacute$2,
    aacute: aacute$2,
    Abreve: Abreve$1,
    abreve: abreve$1,
    ac: ac$1,
    acd: acd$1,
    acE: acE$1,
    Acirc: Acirc$2,
    acirc: acirc$2,
    acute: acute$2,
    Acy: Acy$1,
    acy: acy$1,
    AElig: AElig$2,
    aelig: aelig$2,
    af: af$1,
    Afr: Afr$1,
    afr: afr$1,
    Agrave: Agrave$2,
    agrave: agrave$2,
    alefsym: alefsym$1,
    aleph: aleph$1,
    Alpha: Alpha$1,
    alpha: alpha$1,
    Amacr: Amacr$1,
    amacr: amacr$1,
    amalg: amalg$1,
    amp: amp$3,
    AMP: AMP$2,
    andand: andand$1,
    And: And$1,
    and: and$1,
    andd: andd$1,
    andslope: andslope$1,
    andv: andv$1,
    ang: ang$1,
    ange: ange$1,
    angle: angle$1,
    angmsdaa: angmsdaa$1,
    angmsdab: angmsdab$1,
    angmsdac: angmsdac$1,
    angmsdad: angmsdad$1,
    angmsdae: angmsdae$1,
    angmsdaf: angmsdaf$1,
    angmsdag: angmsdag$1,
    angmsdah: angmsdah$1,
    angmsd: angmsd$1,
    angrt: angrt$1,
    angrtvb: angrtvb$1,
    angrtvbd: angrtvbd$1,
    angsph: angsph$1,
    angst: angst$1,
    angzarr: angzarr$1,
    Aogon: Aogon$1,
    aogon: aogon$1,
    Aopf: Aopf$1,
    aopf: aopf$1,
    apacir: apacir$1,
    ap: ap$1,
    apE: apE$1,
    ape: ape$1,
    apid: apid$1,
    apos: apos$2,
    ApplyFunction: ApplyFunction$1,
    approx: approx$1,
    approxeq: approxeq$1,
    Aring: Aring$2,
    aring: aring$2,
    Ascr: Ascr$1,
    ascr: ascr$1,
    Assign: Assign$1,
    ast: ast$1,
    asymp: asymp$1,
    asympeq: asympeq$1,
    Atilde: Atilde$2,
    atilde: atilde$2,
    Auml: Auml$2,
    auml: auml$2,
    awconint: awconint$1,
    awint: awint$1,
    backcong: backcong$1,
    backepsilon: backepsilon$1,
    backprime: backprime$1,
    backsim: backsim$1,
    backsimeq: backsimeq$1,
    Backslash: Backslash$1,
    Barv: Barv$1,
    barvee: barvee$1,
    barwed: barwed$1,
    Barwed: Barwed$1,
    barwedge: barwedge$1,
    bbrk: bbrk$1,
    bbrktbrk: bbrktbrk$1,
    bcong: bcong$1,
    Bcy: Bcy$1,
    bcy: bcy$1,
    bdquo: bdquo$1,
    becaus: becaus$1,
    because: because$1,
    Because: Because$1,
    bemptyv: bemptyv$1,
    bepsi: bepsi$1,
    bernou: bernou$1,
    Bernoullis: Bernoullis$1,
    Beta: Beta$1,
    beta: beta$1,
    beth: beth$1,
    between: between$1,
    Bfr: Bfr$1,
    bfr: bfr$1,
    bigcap: bigcap$1,
    bigcirc: bigcirc$1,
    bigcup: bigcup$1,
    bigodot: bigodot$1,
    bigoplus: bigoplus$1,
    bigotimes: bigotimes$1,
    bigsqcup: bigsqcup$1,
    bigstar: bigstar$1,
    bigtriangledown: bigtriangledown$1,
    bigtriangleup: bigtriangleup$1,
    biguplus: biguplus$1,
    bigvee: bigvee$1,
    bigwedge: bigwedge$1,
    bkarow: bkarow$1,
    blacklozenge: blacklozenge$1,
    blacksquare: blacksquare$1,
    blacktriangle: blacktriangle$1,
    blacktriangledown: blacktriangledown$1,
    blacktriangleleft: blacktriangleleft$1,
    blacktriangleright: blacktriangleright$1,
    blank: blank$1,
    blk12: blk12$1,
    blk14: blk14$1,
    blk34: blk34$1,
    block: block$1,
    bne: bne$1,
    bnequiv: bnequiv$1,
    bNot: bNot$1,
    bnot: bnot$1,
    Bopf: Bopf$1,
    bopf: bopf$1,
    bot: bot$1,
    bottom: bottom$1,
    bowtie: bowtie$1,
    boxbox: boxbox$1,
    boxdl: boxdl$1,
    boxdL: boxdL$1,
    boxDl: boxDl$1,
    boxDL: boxDL$1,
    boxdr: boxdr$1,
    boxdR: boxdR$1,
    boxDr: boxDr$1,
    boxDR: boxDR$1,
    boxh: boxh$1,
    boxH: boxH$1,
    boxhd: boxhd$1,
    boxHd: boxHd$1,
    boxhD: boxhD$1,
    boxHD: boxHD$1,
    boxhu: boxhu$1,
    boxHu: boxHu$1,
    boxhU: boxhU$1,
    boxHU: boxHU$1,
    boxminus: boxminus$1,
    boxplus: boxplus$1,
    boxtimes: boxtimes$1,
    boxul: boxul$1,
    boxuL: boxuL$1,
    boxUl: boxUl$1,
    boxUL: boxUL$1,
    boxur: boxur$1,
    boxuR: boxuR$1,
    boxUr: boxUr$1,
    boxUR: boxUR$1,
    boxv: boxv$1,
    boxV: boxV$1,
    boxvh: boxvh$1,
    boxvH: boxvH$1,
    boxVh: boxVh$1,
    boxVH: boxVH$1,
    boxvl: boxvl$1,
    boxvL: boxvL$1,
    boxVl: boxVl$1,
    boxVL: boxVL$1,
    boxvr: boxvr$1,
    boxvR: boxvR$1,
    boxVr: boxVr$1,
    boxVR: boxVR$1,
    bprime: bprime$1,
    breve: breve$1,
    Breve: Breve$1,
    brvbar: brvbar$2,
    bscr: bscr$1,
    Bscr: Bscr$1,
    bsemi: bsemi$1,
    bsim: bsim$1,
    bsime: bsime$1,
    bsolb: bsolb$1,
    bsol: bsol$1,
    bsolhsub: bsolhsub$1,
    bull: bull$1,
    bullet: bullet$1,
    bump: bump$1,
    bumpE: bumpE$1,
    bumpe: bumpe$1,
    Bumpeq: Bumpeq$1,
    bumpeq: bumpeq$1,
    Cacute: Cacute$1,
    cacute: cacute$1,
    capand: capand$1,
    capbrcup: capbrcup$1,
    capcap: capcap$1,
    cap: cap$1,
    Cap: Cap$1,
    capcup: capcup$1,
    capdot: capdot$1,
    CapitalDifferentialD: CapitalDifferentialD$1,
    caps: caps$1,
    caret: caret$1,
    caron: caron$1,
    Cayleys: Cayleys$1,
    ccaps: ccaps$1,
    Ccaron: Ccaron$1,
    ccaron: ccaron$1,
    Ccedil: Ccedil$2,
    ccedil: ccedil$2,
    Ccirc: Ccirc$1,
    ccirc: ccirc$1,
    Cconint: Cconint$1,
    ccups: ccups$1,
    ccupssm: ccupssm$1,
    Cdot: Cdot$1,
    cdot: cdot$1,
    cedil: cedil$2,
    Cedilla: Cedilla$1,
    cemptyv: cemptyv$1,
    cent: cent$2,
    centerdot: centerdot$1,
    CenterDot: CenterDot$1,
    cfr: cfr$1,
    Cfr: Cfr$1,
    CHcy: CHcy$1,
    chcy: chcy$1,
    check: check$1,
    checkmark: checkmark$1,
    Chi: Chi$1,
    chi: chi$1,
    circ: circ$1,
    circeq: circeq$1,
    circlearrowleft: circlearrowleft$1,
    circlearrowright: circlearrowright$1,
    circledast: circledast$1,
    circledcirc: circledcirc$1,
    circleddash: circleddash$1,
    CircleDot: CircleDot$1,
    circledR: circledR$1,
    circledS: circledS$1,
    CircleMinus: CircleMinus$1,
    CirclePlus: CirclePlus$1,
    CircleTimes: CircleTimes$1,
    cir: cir$1,
    cirE: cirE$1,
    cire: cire$1,
    cirfnint: cirfnint$1,
    cirmid: cirmid$1,
    cirscir: cirscir$1,
    ClockwiseContourIntegral: ClockwiseContourIntegral$1,
    CloseCurlyDoubleQuote: CloseCurlyDoubleQuote$1,
    CloseCurlyQuote: CloseCurlyQuote$1,
    clubs: clubs$1,
    clubsuit: clubsuit$1,
    colon: colon$1,
    Colon: Colon$1,
    Colone: Colone$1,
    colone: colone$1,
    coloneq: coloneq$1,
    comma: comma$1,
    commat: commat$1,
    comp: comp$1,
    compfn: compfn$1,
    complement: complement$1,
    complexes: complexes$1,
    cong: cong$1,
    congdot: congdot$1,
    Congruent: Congruent$1,
    conint: conint$1,
    Conint: Conint$1,
    ContourIntegral: ContourIntegral$1,
    copf: copf$1,
    Copf: Copf$1,
    coprod: coprod$1,
    Coproduct: Coproduct$1,
    copy: copy$2,
    COPY: COPY$2,
    copysr: copysr$1,
    CounterClockwiseContourIntegral: CounterClockwiseContourIntegral$1,
    crarr: crarr$1,
    cross: cross$1,
    Cross: Cross$1,
    Cscr: Cscr$1,
    cscr: cscr$1,
    csub: csub$1,
    csube: csube$1,
    csup: csup$1,
    csupe: csupe$1,
    ctdot: ctdot$1,
    cudarrl: cudarrl$1,
    cudarrr: cudarrr$1,
    cuepr: cuepr$1,
    cuesc: cuesc$1,
    cularr: cularr$1,
    cularrp: cularrp$1,
    cupbrcap: cupbrcap$1,
    cupcap: cupcap$1,
    CupCap: CupCap$1,
    cup: cup$1,
    Cup: Cup$1,
    cupcup: cupcup$1,
    cupdot: cupdot$1,
    cupor: cupor$1,
    cups: cups$1,
    curarr: curarr$1,
    curarrm: curarrm$1,
    curlyeqprec: curlyeqprec$1,
    curlyeqsucc: curlyeqsucc$1,
    curlyvee: curlyvee$1,
    curlywedge: curlywedge$1,
    curren: curren$2,
    curvearrowleft: curvearrowleft$1,
    curvearrowright: curvearrowright$1,
    cuvee: cuvee$1,
    cuwed: cuwed$1,
    cwconint: cwconint$1,
    cwint: cwint$1,
    cylcty: cylcty$1,
    dagger: dagger$1,
    Dagger: Dagger$1,
    daleth: daleth$1,
    darr: darr$1,
    Darr: Darr$1,
    dArr: dArr$1,
    dash: dash$1,
    Dashv: Dashv$1,
    dashv: dashv$1,
    dbkarow: dbkarow$1,
    dblac: dblac$1,
    Dcaron: Dcaron$1,
    dcaron: dcaron$1,
    Dcy: Dcy$1,
    dcy: dcy$1,
    ddagger: ddagger$1,
    ddarr: ddarr$1,
    DD: DD$1,
    dd: dd$1,
    DDotrahd: DDotrahd$1,
    ddotseq: ddotseq$1,
    deg: deg$2,
    Del: Del$1,
    Delta: Delta$1,
    delta: delta$1,
    demptyv: demptyv$1,
    dfisht: dfisht$1,
    Dfr: Dfr$1,
    dfr: dfr$1,
    dHar: dHar$1,
    dharl: dharl$1,
    dharr: dharr$1,
    DiacriticalAcute: DiacriticalAcute$1,
    DiacriticalDot: DiacriticalDot$1,
    DiacriticalDoubleAcute: DiacriticalDoubleAcute$1,
    DiacriticalGrave: DiacriticalGrave$1,
    DiacriticalTilde: DiacriticalTilde$1,
    diam: diam$1,
    diamond: diamond$1,
    Diamond: Diamond$1,
    diamondsuit: diamondsuit$1,
    diams: diams$1,
    die: die$1,
    DifferentialD: DifferentialD$1,
    digamma: digamma$1,
    disin: disin$1,
    div: div$1,
    divide: divide$2,
    divideontimes: divideontimes$1,
    divonx: divonx$1,
    DJcy: DJcy$1,
    djcy: djcy$1,
    dlcorn: dlcorn$1,
    dlcrop: dlcrop$1,
    dollar: dollar$1,
    Dopf: Dopf$1,
    dopf: dopf$1,
    Dot: Dot$1,
    dot: dot$1,
    DotDot: DotDot$1,
    doteq: doteq$1,
    doteqdot: doteqdot$1,
    DotEqual: DotEqual$1,
    dotminus: dotminus$1,
    dotplus: dotplus$1,
    dotsquare: dotsquare$1,
    doublebarwedge: doublebarwedge$1,
    DoubleContourIntegral: DoubleContourIntegral$1,
    DoubleDot: DoubleDot$1,
    DoubleDownArrow: DoubleDownArrow$1,
    DoubleLeftArrow: DoubleLeftArrow$1,
    DoubleLeftRightArrow: DoubleLeftRightArrow$1,
    DoubleLeftTee: DoubleLeftTee$1,
    DoubleLongLeftArrow: DoubleLongLeftArrow$1,
    DoubleLongLeftRightArrow: DoubleLongLeftRightArrow$1,
    DoubleLongRightArrow: DoubleLongRightArrow$1,
    DoubleRightArrow: DoubleRightArrow$1,
    DoubleRightTee: DoubleRightTee$1,
    DoubleUpArrow: DoubleUpArrow$1,
    DoubleUpDownArrow: DoubleUpDownArrow$1,
    DoubleVerticalBar: DoubleVerticalBar$1,
    DownArrowBar: DownArrowBar$1,
    downarrow: downarrow$1,
    DownArrow: DownArrow$1,
    Downarrow: Downarrow$1,
    DownArrowUpArrow: DownArrowUpArrow$1,
    DownBreve: DownBreve$1,
    downdownarrows: downdownarrows$1,
    downharpoonleft: downharpoonleft$1,
    downharpoonright: downharpoonright$1,
    DownLeftRightVector: DownLeftRightVector$1,
    DownLeftTeeVector: DownLeftTeeVector$1,
    DownLeftVectorBar: DownLeftVectorBar$1,
    DownLeftVector: DownLeftVector$1,
    DownRightTeeVector: DownRightTeeVector$1,
    DownRightVectorBar: DownRightVectorBar$1,
    DownRightVector: DownRightVector$1,
    DownTeeArrow: DownTeeArrow$1,
    DownTee: DownTee$1,
    drbkarow: drbkarow$1,
    drcorn: drcorn$1,
    drcrop: drcrop$1,
    Dscr: Dscr$1,
    dscr: dscr$1,
    DScy: DScy$1,
    dscy: dscy$1,
    dsol: dsol$1,
    Dstrok: Dstrok$1,
    dstrok: dstrok$1,
    dtdot: dtdot$1,
    dtri: dtri$1,
    dtrif: dtrif$1,
    duarr: duarr$1,
    duhar: duhar$1,
    dwangle: dwangle$1,
    DZcy: DZcy$1,
    dzcy: dzcy$1,
    dzigrarr: dzigrarr$1,
    Eacute: Eacute$2,
    eacute: eacute$2,
    easter: easter$1,
    Ecaron: Ecaron$1,
    ecaron: ecaron$1,
    Ecirc: Ecirc$2,
    ecirc: ecirc$2,
    ecir: ecir$1,
    ecolon: ecolon$1,
    Ecy: Ecy$1,
    ecy: ecy$1,
    eDDot: eDDot$1,
    Edot: Edot$1,
    edot: edot$1,
    eDot: eDot$1,
    ee: ee$1,
    efDot: efDot$1,
    Efr: Efr$1,
    efr: efr$1,
    eg: eg$1,
    Egrave: Egrave$2,
    egrave: egrave$2,
    egs: egs$1,
    egsdot: egsdot$1,
    el: el$1,
    Element: Element$1,
    elinters: elinters$1,
    ell: ell$1,
    els: els$1,
    elsdot: elsdot$1,
    Emacr: Emacr$1,
    emacr: emacr$1,
    empty: empty$1,
    emptyset: emptyset$1,
    EmptySmallSquare: EmptySmallSquare$1,
    emptyv: emptyv$1,
    EmptyVerySmallSquare: EmptyVerySmallSquare$1,
    emsp13: emsp13$1,
    emsp14: emsp14$1,
    emsp: emsp$1,
    ENG: ENG$1,
    eng: eng$1,
    ensp: ensp$1,
    Eogon: Eogon$1,
    eogon: eogon$1,
    Eopf: Eopf$1,
    eopf: eopf$1,
    epar: epar$1,
    eparsl: eparsl$1,
    eplus: eplus$1,
    epsi: epsi$1,
    Epsilon: Epsilon$1,
    epsilon: epsilon$1,
    epsiv: epsiv$1,
    eqcirc: eqcirc$1,
    eqcolon: eqcolon$1,
    eqsim: eqsim$1,
    eqslantgtr: eqslantgtr$1,
    eqslantless: eqslantless$1,
    Equal: Equal$1,
    equals: equals$1,
    EqualTilde: EqualTilde$1,
    equest: equest$1,
    Equilibrium: Equilibrium$1,
    equiv: equiv$1,
    equivDD: equivDD$1,
    eqvparsl: eqvparsl$1,
    erarr: erarr$1,
    erDot: erDot$1,
    escr: escr$1,
    Escr: Escr$1,
    esdot: esdot$1,
    Esim: Esim$1,
    esim: esim$1,
    Eta: Eta$1,
    eta: eta$1,
    ETH: ETH$2,
    eth: eth$2,
    Euml: Euml$2,
    euml: euml$2,
    euro: euro$1,
    excl: excl$1,
    exist: exist$1,
    Exists: Exists$1,
    expectation: expectation$1,
    exponentiale: exponentiale$1,
    ExponentialE: ExponentialE$1,
    fallingdotseq: fallingdotseq$1,
    Fcy: Fcy$1,
    fcy: fcy$1,
    female: female$1,
    ffilig: ffilig$1,
    fflig: fflig$1,
    ffllig: ffllig$1,
    Ffr: Ffr$1,
    ffr: ffr$1,
    filig: filig$1,
    FilledSmallSquare: FilledSmallSquare$1,
    FilledVerySmallSquare: FilledVerySmallSquare$1,
    fjlig: fjlig$1,
    flat: flat$1,
    fllig: fllig$1,
    fltns: fltns$1,
    fnof: fnof$1,
    Fopf: Fopf$1,
    fopf: fopf$1,
    forall: forall$1,
    ForAll: ForAll$1,
    fork: fork$1,
    forkv: forkv$1,
    Fouriertrf: Fouriertrf$1,
    fpartint: fpartint$1,
    frac12: frac12$2,
    frac13: frac13$1,
    frac14: frac14$2,
    frac15: frac15$1,
    frac16: frac16$1,
    frac18: frac18$1,
    frac23: frac23$1,
    frac25: frac25$1,
    frac34: frac34$2,
    frac35: frac35$1,
    frac38: frac38$1,
    frac45: frac45$1,
    frac56: frac56$1,
    frac58: frac58$1,
    frac78: frac78$1,
    frasl: frasl$1,
    frown: frown$1,
    fscr: fscr$1,
    Fscr: Fscr$1,
    gacute: gacute$1,
    Gamma: Gamma$1,
    gamma: gamma$1,
    Gammad: Gammad$1,
    gammad: gammad$1,
    gap: gap$1,
    Gbreve: Gbreve$1,
    gbreve: gbreve$1,
    Gcedil: Gcedil$1,
    Gcirc: Gcirc$1,
    gcirc: gcirc$1,
    Gcy: Gcy$1,
    gcy: gcy$1,
    Gdot: Gdot$1,
    gdot: gdot$1,
    ge: ge$1,
    gE: gE$1,
    gEl: gEl$1,
    gel: gel$1,
    geq: geq$1,
    geqq: geqq$1,
    geqslant: geqslant$1,
    gescc: gescc$1,
    ges: ges$1,
    gesdot: gesdot$1,
    gesdoto: gesdoto$1,
    gesdotol: gesdotol$1,
    gesl: gesl$1,
    gesles: gesles$1,
    Gfr: Gfr$1,
    gfr: gfr$1,
    gg: gg$1,
    Gg: Gg$1,
    ggg: ggg$1,
    gimel: gimel$1,
    GJcy: GJcy$1,
    gjcy: gjcy$1,
    gla: gla$1,
    gl: gl$1,
    glE: glE$1,
    glj: glj$1,
    gnap: gnap$1,
    gnapprox: gnapprox$1,
    gne: gne$1,
    gnE: gnE$1,
    gneq: gneq$1,
    gneqq: gneqq$1,
    gnsim: gnsim$1,
    Gopf: Gopf$1,
    gopf: gopf$1,
    grave: grave$1,
    GreaterEqual: GreaterEqual$1,
    GreaterEqualLess: GreaterEqualLess$1,
    GreaterFullEqual: GreaterFullEqual$1,
    GreaterGreater: GreaterGreater$1,
    GreaterLess: GreaterLess$1,
    GreaterSlantEqual: GreaterSlantEqual$1,
    GreaterTilde: GreaterTilde$1,
    Gscr: Gscr$1,
    gscr: gscr$1,
    gsim: gsim$1,
    gsime: gsime$1,
    gsiml: gsiml$1,
    gtcc: gtcc$1,
    gtcir: gtcir$1,
    gt: gt$3,
    GT: GT$2,
    Gt: Gt$1,
    gtdot: gtdot$1,
    gtlPar: gtlPar$1,
    gtquest: gtquest$1,
    gtrapprox: gtrapprox$1,
    gtrarr: gtrarr$1,
    gtrdot: gtrdot$1,
    gtreqless: gtreqless$1,
    gtreqqless: gtreqqless$1,
    gtrless: gtrless$1,
    gtrsim: gtrsim$1,
    gvertneqq: gvertneqq$1,
    gvnE: gvnE$1,
    Hacek: Hacek$1,
    hairsp: hairsp$1,
    half: half$1,
    hamilt: hamilt$1,
    HARDcy: HARDcy$1,
    hardcy: hardcy$1,
    harrcir: harrcir$1,
    harr: harr$1,
    hArr: hArr$1,
    harrw: harrw$1,
    Hat: Hat$1,
    hbar: hbar$1,
    Hcirc: Hcirc$1,
    hcirc: hcirc$1,
    hearts: hearts$1,
    heartsuit: heartsuit$1,
    hellip: hellip$1,
    hercon: hercon$1,
    hfr: hfr$1,
    Hfr: Hfr$1,
    HilbertSpace: HilbertSpace$1,
    hksearow: hksearow$1,
    hkswarow: hkswarow$1,
    hoarr: hoarr$1,
    homtht: homtht$1,
    hookleftarrow: hookleftarrow$1,
    hookrightarrow: hookrightarrow$1,
    hopf: hopf$1,
    Hopf: Hopf$1,
    horbar: horbar$1,
    HorizontalLine: HorizontalLine$1,
    hscr: hscr$1,
    Hscr: Hscr$1,
    hslash: hslash$1,
    Hstrok: Hstrok$1,
    hstrok: hstrok$1,
    HumpDownHump: HumpDownHump$1,
    HumpEqual: HumpEqual$1,
    hybull: hybull$1,
    hyphen: hyphen$1,
    Iacute: Iacute$2,
    iacute: iacute$2,
    ic: ic$1,
    Icirc: Icirc$2,
    icirc: icirc$2,
    Icy: Icy$1,
    icy: icy$1,
    Idot: Idot$1,
    IEcy: IEcy$1,
    iecy: iecy$1,
    iexcl: iexcl$2,
    iff: iff$1,
    ifr: ifr$1,
    Ifr: Ifr$1,
    Igrave: Igrave$2,
    igrave: igrave$2,
    ii: ii$1,
    iiiint: iiiint$1,
    iiint: iiint$1,
    iinfin: iinfin$1,
    iiota: iiota$1,
    IJlig: IJlig$1,
    ijlig: ijlig$1,
    Imacr: Imacr$1,
    imacr: imacr$1,
    image: image$1,
    ImaginaryI: ImaginaryI$1,
    imagline: imagline$1,
    imagpart: imagpart$1,
    imath: imath$1,
    Im: Im$1,
    imof: imof$1,
    imped: imped$1,
    Implies: Implies$1,
    incare: incare$1,
    infin: infin$1,
    infintie: infintie$1,
    inodot: inodot$1,
    intcal: intcal$1,
    int: int$1,
    Int: Int$1,
    integers: integers$1,
    Integral: Integral$1,
    intercal: intercal$1,
    Intersection: Intersection$1,
    intlarhk: intlarhk$1,
    intprod: intprod$1,
    InvisibleComma: InvisibleComma$1,
    InvisibleTimes: InvisibleTimes$1,
    IOcy: IOcy$1,
    iocy: iocy$1,
    Iogon: Iogon$1,
    iogon: iogon$1,
    Iopf: Iopf$1,
    iopf: iopf$1,
    Iota: Iota$1,
    iota: iota$1,
    iprod: iprod$1,
    iquest: iquest$2,
    iscr: iscr$1,
    Iscr: Iscr$1,
    isin: isin$1,
    isindot: isindot$1,
    isinE: isinE$1,
    isins: isins$1,
    isinsv: isinsv$1,
    isinv: isinv$1,
    it: it$1,
    Itilde: Itilde$1,
    itilde: itilde$1,
    Iukcy: Iukcy$1,
    iukcy: iukcy$1,
    Iuml: Iuml$2,
    iuml: iuml$2,
    Jcirc: Jcirc$1,
    jcirc: jcirc$1,
    Jcy: Jcy$1,
    jcy: jcy$1,
    Jfr: Jfr$1,
    jfr: jfr$1,
    jmath: jmath$1,
    Jopf: Jopf$1,
    jopf: jopf$1,
    Jscr: Jscr$1,
    jscr: jscr$1,
    Jsercy: Jsercy$1,
    jsercy: jsercy$1,
    Jukcy: Jukcy$1,
    jukcy: jukcy$1,
    Kappa: Kappa$1,
    kappa: kappa$1,
    kappav: kappav$1,
    Kcedil: Kcedil$1,
    kcedil: kcedil$1,
    Kcy: Kcy$1,
    kcy: kcy$1,
    Kfr: Kfr$1,
    kfr: kfr$1,
    kgreen: kgreen$1,
    KHcy: KHcy$1,
    khcy: khcy$1,
    KJcy: KJcy$1,
    kjcy: kjcy$1,
    Kopf: Kopf$1,
    kopf: kopf$1,
    Kscr: Kscr$1,
    kscr: kscr$1,
    lAarr: lAarr$1,
    Lacute: Lacute$1,
    lacute: lacute$1,
    laemptyv: laemptyv$1,
    lagran: lagran$1,
    Lambda: Lambda$1,
    lambda: lambda$1,
    lang: lang$1,
    Lang: Lang$1,
    langd: langd$1,
    langle: langle$1,
    lap: lap$1,
    Laplacetrf: Laplacetrf$1,
    laquo: laquo$2,
    larrb: larrb$1,
    larrbfs: larrbfs$1,
    larr: larr$1,
    Larr: Larr$1,
    lArr: lArr$1,
    larrfs: larrfs$1,
    larrhk: larrhk$1,
    larrlp: larrlp$1,
    larrpl: larrpl$1,
    larrsim: larrsim$1,
    larrtl: larrtl$1,
    latail: latail$1,
    lAtail: lAtail$1,
    lat: lat$1,
    late: late$1,
    lates: lates$1,
    lbarr: lbarr$1,
    lBarr: lBarr$1,
    lbbrk: lbbrk$1,
    lbrace: lbrace$1,
    lbrack: lbrack$1,
    lbrke: lbrke$1,
    lbrksld: lbrksld$1,
    lbrkslu: lbrkslu$1,
    Lcaron: Lcaron$1,
    lcaron: lcaron$1,
    Lcedil: Lcedil$1,
    lcedil: lcedil$1,
    lceil: lceil$1,
    lcub: lcub$1,
    Lcy: Lcy$1,
    lcy: lcy$1,
    ldca: ldca$1,
    ldquo: ldquo$1,
    ldquor: ldquor$1,
    ldrdhar: ldrdhar$1,
    ldrushar: ldrushar$1,
    ldsh: ldsh$1,
    le: le$1,
    lE: lE$1,
    LeftAngleBracket: LeftAngleBracket$1,
    LeftArrowBar: LeftArrowBar$1,
    leftarrow: leftarrow$1,
    LeftArrow: LeftArrow$1,
    Leftarrow: Leftarrow$1,
    LeftArrowRightArrow: LeftArrowRightArrow$1,
    leftarrowtail: leftarrowtail$1,
    LeftCeiling: LeftCeiling$1,
    LeftDoubleBracket: LeftDoubleBracket$1,
    LeftDownTeeVector: LeftDownTeeVector$1,
    LeftDownVectorBar: LeftDownVectorBar$1,
    LeftDownVector: LeftDownVector$1,
    LeftFloor: LeftFloor$1,
    leftharpoondown: leftharpoondown$1,
    leftharpoonup: leftharpoonup$1,
    leftleftarrows: leftleftarrows$1,
    leftrightarrow: leftrightarrow$1,
    LeftRightArrow: LeftRightArrow$1,
    Leftrightarrow: Leftrightarrow$1,
    leftrightarrows: leftrightarrows$1,
    leftrightharpoons: leftrightharpoons$1,
    leftrightsquigarrow: leftrightsquigarrow$1,
    LeftRightVector: LeftRightVector$1,
    LeftTeeArrow: LeftTeeArrow$1,
    LeftTee: LeftTee$1,
    LeftTeeVector: LeftTeeVector$1,
    leftthreetimes: leftthreetimes$1,
    LeftTriangleBar: LeftTriangleBar$1,
    LeftTriangle: LeftTriangle$1,
    LeftTriangleEqual: LeftTriangleEqual$1,
    LeftUpDownVector: LeftUpDownVector$1,
    LeftUpTeeVector: LeftUpTeeVector$1,
    LeftUpVectorBar: LeftUpVectorBar$1,
    LeftUpVector: LeftUpVector$1,
    LeftVectorBar: LeftVectorBar$1,
    LeftVector: LeftVector$1,
    lEg: lEg$1,
    leg: leg$1,
    leq: leq$1,
    leqq: leqq$1,
    leqslant: leqslant$1,
    lescc: lescc$1,
    les: les$1,
    lesdot: lesdot$1,
    lesdoto: lesdoto$1,
    lesdotor: lesdotor$1,
    lesg: lesg$1,
    lesges: lesges$1,
    lessapprox: lessapprox$1,
    lessdot: lessdot$1,
    lesseqgtr: lesseqgtr$1,
    lesseqqgtr: lesseqqgtr$1,
    LessEqualGreater: LessEqualGreater$1,
    LessFullEqual: LessFullEqual$1,
    LessGreater: LessGreater$1,
    lessgtr: lessgtr$1,
    LessLess: LessLess$1,
    lesssim: lesssim$1,
    LessSlantEqual: LessSlantEqual$1,
    LessTilde: LessTilde$1,
    lfisht: lfisht$1,
    lfloor: lfloor$1,
    Lfr: Lfr$1,
    lfr: lfr$1,
    lg: lg$1,
    lgE: lgE$1,
    lHar: lHar$1,
    lhard: lhard$1,
    lharu: lharu$1,
    lharul: lharul$1,
    lhblk: lhblk$1,
    LJcy: LJcy$1,
    ljcy: ljcy$1,
    llarr: llarr$1,
    ll: ll$1,
    Ll: Ll$1,
    llcorner: llcorner$1,
    Lleftarrow: Lleftarrow$1,
    llhard: llhard$1,
    lltri: lltri$1,
    Lmidot: Lmidot$1,
    lmidot: lmidot$1,
    lmoustache: lmoustache$1,
    lmoust: lmoust$1,
    lnap: lnap$1,
    lnapprox: lnapprox$1,
    lne: lne$1,
    lnE: lnE$1,
    lneq: lneq$1,
    lneqq: lneqq$1,
    lnsim: lnsim$1,
    loang: loang$1,
    loarr: loarr$1,
    lobrk: lobrk$1,
    longleftarrow: longleftarrow$1,
    LongLeftArrow: LongLeftArrow$1,
    Longleftarrow: Longleftarrow$1,
    longleftrightarrow: longleftrightarrow$1,
    LongLeftRightArrow: LongLeftRightArrow$1,
    Longleftrightarrow: Longleftrightarrow$1,
    longmapsto: longmapsto$1,
    longrightarrow: longrightarrow$1,
    LongRightArrow: LongRightArrow$1,
    Longrightarrow: Longrightarrow$1,
    looparrowleft: looparrowleft$1,
    looparrowright: looparrowright$1,
    lopar: lopar$1,
    Lopf: Lopf$1,
    lopf: lopf$1,
    loplus: loplus$1,
    lotimes: lotimes$1,
    lowast: lowast$1,
    lowbar: lowbar$1,
    LowerLeftArrow: LowerLeftArrow$1,
    LowerRightArrow: LowerRightArrow$1,
    loz: loz$1,
    lozenge: lozenge$1,
    lozf: lozf$1,
    lpar: lpar$1,
    lparlt: lparlt$1,
    lrarr: lrarr$1,
    lrcorner: lrcorner$1,
    lrhar: lrhar$1,
    lrhard: lrhard$1,
    lrm: lrm$1,
    lrtri: lrtri$1,
    lsaquo: lsaquo$1,
    lscr: lscr$1,
    Lscr: Lscr$1,
    lsh: lsh$1,
    Lsh: Lsh$1,
    lsim: lsim$1,
    lsime: lsime$1,
    lsimg: lsimg$1,
    lsqb: lsqb$1,
    lsquo: lsquo$1,
    lsquor: lsquor$1,
    Lstrok: Lstrok$1,
    lstrok: lstrok$1,
    ltcc: ltcc$1,
    ltcir: ltcir$1,
    lt: lt$3,
    LT: LT$2,
    Lt: Lt$1,
    ltdot: ltdot$1,
    lthree: lthree$1,
    ltimes: ltimes$1,
    ltlarr: ltlarr$1,
    ltquest: ltquest$1,
    ltri: ltri$1,
    ltrie: ltrie$1,
    ltrif: ltrif$1,
    ltrPar: ltrPar$1,
    lurdshar: lurdshar$1,
    luruhar: luruhar$1,
    lvertneqq: lvertneqq$1,
    lvnE: lvnE$1,
    macr: macr$2,
    male: male$1,
    malt: malt$1,
    maltese: maltese$1,
    map: map$1,
    mapsto: mapsto$1,
    mapstodown: mapstodown$1,
    mapstoleft: mapstoleft$1,
    mapstoup: mapstoup$1,
    marker: marker$1,
    mcomma: mcomma$1,
    Mcy: Mcy$1,
    mcy: mcy$1,
    mdash: mdash$1,
    mDDot: mDDot$1,
    measuredangle: measuredangle$1,
    MediumSpace: MediumSpace$1,
    Mellintrf: Mellintrf$1,
    Mfr: Mfr$1,
    mfr: mfr$1,
    mho: mho$1,
    micro: micro$2,
    midast: midast$1,
    midcir: midcir$1,
    mid: mid$1,
    middot: middot$2,
    minusb: minusb$1,
    minus: minus$1,
    minusd: minusd$1,
    minusdu: minusdu$1,
    MinusPlus: MinusPlus$1,
    mlcp: mlcp$1,
    mldr: mldr$1,
    mnplus: mnplus$1,
    models: models$1,
    Mopf: Mopf$1,
    mopf: mopf$1,
    mp: mp$1,
    mscr: mscr$1,
    Mscr: Mscr$1,
    mstpos: mstpos$1,
    Mu: Mu$1,
    mu: mu$1,
    multimap: multimap$1,
    mumap: mumap$1,
    nabla: nabla$1,
    Nacute: Nacute$1,
    nacute: nacute$1,
    nang: nang$1,
    nap: nap$1,
    napE: napE$1,
    napid: napid$1,
    napos: napos$1,
    napprox: napprox$1,
    natural: natural$1,
    naturals: naturals$1,
    natur: natur$1,
    nbsp: nbsp$2,
    nbump: nbump$1,
    nbumpe: nbumpe$1,
    ncap: ncap$1,
    Ncaron: Ncaron$1,
    ncaron: ncaron$1,
    Ncedil: Ncedil$1,
    ncedil: ncedil$1,
    ncong: ncong$1,
    ncongdot: ncongdot$1,
    ncup: ncup$1,
    Ncy: Ncy$1,
    ncy: ncy$1,
    ndash: ndash$1,
    nearhk: nearhk$1,
    nearr: nearr$1,
    neArr: neArr$1,
    nearrow: nearrow$1,
    ne: ne$1,
    nedot: nedot$1,
    NegativeMediumSpace: NegativeMediumSpace$1,
    NegativeThickSpace: NegativeThickSpace$1,
    NegativeThinSpace: NegativeThinSpace$1,
    NegativeVeryThinSpace: NegativeVeryThinSpace$1,
    nequiv: nequiv$1,
    nesear: nesear$1,
    nesim: nesim$1,
    NestedGreaterGreater: NestedGreaterGreater$1,
    NestedLessLess: NestedLessLess$1,
    NewLine: NewLine$1,
    nexist: nexist$1,
    nexists: nexists$1,
    Nfr: Nfr$1,
    nfr: nfr$1,
    ngE: ngE$1,
    nge: nge$1,
    ngeq: ngeq$1,
    ngeqq: ngeqq$1,
    ngeqslant: ngeqslant$1,
    nges: nges$1,
    nGg: nGg$1,
    ngsim: ngsim$1,
    nGt: nGt$1,
    ngt: ngt$1,
    ngtr: ngtr$1,
    nGtv: nGtv$1,
    nharr: nharr$1,
    nhArr: nhArr$1,
    nhpar: nhpar$1,
    ni: ni$1,
    nis: nis$1,
    nisd: nisd$1,
    niv: niv$1,
    NJcy: NJcy$1,
    njcy: njcy$1,
    nlarr: nlarr$1,
    nlArr: nlArr$1,
    nldr: nldr$1,
    nlE: nlE$1,
    nle: nle$1,
    nleftarrow: nleftarrow$1,
    nLeftarrow: nLeftarrow$1,
    nleftrightarrow: nleftrightarrow$1,
    nLeftrightarrow: nLeftrightarrow$1,
    nleq: nleq$1,
    nleqq: nleqq$1,
    nleqslant: nleqslant$1,
    nles: nles$1,
    nless: nless$1,
    nLl: nLl$1,
    nlsim: nlsim$1,
    nLt: nLt$1,
    nlt: nlt$1,
    nltri: nltri$1,
    nltrie: nltrie$1,
    nLtv: nLtv$1,
    nmid: nmid$1,
    NoBreak: NoBreak$1,
    NonBreakingSpace: NonBreakingSpace$1,
    nopf: nopf$1,
    Nopf: Nopf$1,
    Not: Not$1,
    not: not$2,
    NotCongruent: NotCongruent$1,
    NotCupCap: NotCupCap$1,
    NotDoubleVerticalBar: NotDoubleVerticalBar$1,
    NotElement: NotElement$1,
    NotEqual: NotEqual$1,
    NotEqualTilde: NotEqualTilde$1,
    NotExists: NotExists$1,
    NotGreater: NotGreater$1,
    NotGreaterEqual: NotGreaterEqual$1,
    NotGreaterFullEqual: NotGreaterFullEqual$1,
    NotGreaterGreater: NotGreaterGreater$1,
    NotGreaterLess: NotGreaterLess$1,
    NotGreaterSlantEqual: NotGreaterSlantEqual$1,
    NotGreaterTilde: NotGreaterTilde$1,
    NotHumpDownHump: NotHumpDownHump$1,
    NotHumpEqual: NotHumpEqual$1,
    notin: notin$1,
    notindot: notindot$1,
    notinE: notinE$1,
    notinva: notinva$1,
    notinvb: notinvb$1,
    notinvc: notinvc$1,
    NotLeftTriangleBar: NotLeftTriangleBar$1,
    NotLeftTriangle: NotLeftTriangle$1,
    NotLeftTriangleEqual: NotLeftTriangleEqual$1,
    NotLess: NotLess$1,
    NotLessEqual: NotLessEqual$1,
    NotLessGreater: NotLessGreater$1,
    NotLessLess: NotLessLess$1,
    NotLessSlantEqual: NotLessSlantEqual$1,
    NotLessTilde: NotLessTilde$1,
    NotNestedGreaterGreater: NotNestedGreaterGreater$1,
    NotNestedLessLess: NotNestedLessLess$1,
    notni: notni$1,
    notniva: notniva$1,
    notnivb: notnivb$1,
    notnivc: notnivc$1,
    NotPrecedes: NotPrecedes$1,
    NotPrecedesEqual: NotPrecedesEqual$1,
    NotPrecedesSlantEqual: NotPrecedesSlantEqual$1,
    NotReverseElement: NotReverseElement$1,
    NotRightTriangleBar: NotRightTriangleBar$1,
    NotRightTriangle: NotRightTriangle$1,
    NotRightTriangleEqual: NotRightTriangleEqual$1,
    NotSquareSubset: NotSquareSubset$1,
    NotSquareSubsetEqual: NotSquareSubsetEqual$1,
    NotSquareSuperset: NotSquareSuperset$1,
    NotSquareSupersetEqual: NotSquareSupersetEqual$1,
    NotSubset: NotSubset$1,
    NotSubsetEqual: NotSubsetEqual$1,
    NotSucceeds: NotSucceeds$1,
    NotSucceedsEqual: NotSucceedsEqual$1,
    NotSucceedsSlantEqual: NotSucceedsSlantEqual$1,
    NotSucceedsTilde: NotSucceedsTilde$1,
    NotSuperset: NotSuperset$1,
    NotSupersetEqual: NotSupersetEqual$1,
    NotTilde: NotTilde$1,
    NotTildeEqual: NotTildeEqual$1,
    NotTildeFullEqual: NotTildeFullEqual$1,
    NotTildeTilde: NotTildeTilde$1,
    NotVerticalBar: NotVerticalBar$1,
    nparallel: nparallel$1,
    npar: npar$1,
    nparsl: nparsl$1,
    npart: npart$1,
    npolint: npolint$1,
    npr: npr$1,
    nprcue: nprcue$1,
    nprec: nprec$1,
    npreceq: npreceq$1,
    npre: npre$1,
    nrarrc: nrarrc$1,
    nrarr: nrarr$1,
    nrArr: nrArr$1,
    nrarrw: nrarrw$1,
    nrightarrow: nrightarrow$1,
    nRightarrow: nRightarrow$1,
    nrtri: nrtri$1,
    nrtrie: nrtrie$1,
    nsc: nsc$1,
    nsccue: nsccue$1,
    nsce: nsce$1,
    Nscr: Nscr$1,
    nscr: nscr$1,
    nshortmid: nshortmid$1,
    nshortparallel: nshortparallel$1,
    nsim: nsim$1,
    nsime: nsime$1,
    nsimeq: nsimeq$1,
    nsmid: nsmid$1,
    nspar: nspar$1,
    nsqsube: nsqsube$1,
    nsqsupe: nsqsupe$1,
    nsub: nsub$1,
    nsubE: nsubE$1,
    nsube: nsube$1,
    nsubset: nsubset$1,
    nsubseteq: nsubseteq$1,
    nsubseteqq: nsubseteqq$1,
    nsucc: nsucc$1,
    nsucceq: nsucceq$1,
    nsup: nsup$1,
    nsupE: nsupE$1,
    nsupe: nsupe$1,
    nsupset: nsupset$1,
    nsupseteq: nsupseteq$1,
    nsupseteqq: nsupseteqq$1,
    ntgl: ntgl$1,
    Ntilde: Ntilde$2,
    ntilde: ntilde$2,
    ntlg: ntlg$1,
    ntriangleleft: ntriangleleft$1,
    ntrianglelefteq: ntrianglelefteq$1,
    ntriangleright: ntriangleright$1,
    ntrianglerighteq: ntrianglerighteq$1,
    Nu: Nu$1,
    nu: nu$1,
    num: num$1,
    numero: numero$1,
    numsp: numsp$1,
    nvap: nvap$1,
    nvdash: nvdash$1,
    nvDash: nvDash$1,
    nVdash: nVdash$1,
    nVDash: nVDash$1,
    nvge: nvge$1,
    nvgt: nvgt$1,
    nvHarr: nvHarr$1,
    nvinfin: nvinfin$1,
    nvlArr: nvlArr$1,
    nvle: nvle$1,
    nvlt: nvlt$1,
    nvltrie: nvltrie$1,
    nvrArr: nvrArr$1,
    nvrtrie: nvrtrie$1,
    nvsim: nvsim$1,
    nwarhk: nwarhk$1,
    nwarr: nwarr$1,
    nwArr: nwArr$1,
    nwarrow: nwarrow$1,
    nwnear: nwnear$1,
    Oacute: Oacute$2,
    oacute: oacute$2,
    oast: oast$1,
    Ocirc: Ocirc$2,
    ocirc: ocirc$2,
    ocir: ocir$1,
    Ocy: Ocy$1,
    ocy: ocy$1,
    odash: odash$1,
    Odblac: Odblac$1,
    odblac: odblac$1,
    odiv: odiv$1,
    odot: odot$1,
    odsold: odsold$1,
    OElig: OElig$1,
    oelig: oelig$1,
    ofcir: ofcir$1,
    Ofr: Ofr$1,
    ofr: ofr$1,
    ogon: ogon$1,
    Ograve: Ograve$2,
    ograve: ograve$2,
    ogt: ogt$1,
    ohbar: ohbar$1,
    ohm: ohm$1,
    oint: oint$1,
    olarr: olarr$1,
    olcir: olcir$1,
    olcross: olcross$1,
    oline: oline$1,
    olt: olt$1,
    Omacr: Omacr$1,
    omacr: omacr$1,
    Omega: Omega$1,
    omega: omega$1,
    Omicron: Omicron$1,
    omicron: omicron$1,
    omid: omid$1,
    ominus: ominus$1,
    Oopf: Oopf$1,
    oopf: oopf$1,
    opar: opar$1,
    OpenCurlyDoubleQuote: OpenCurlyDoubleQuote$1,
    OpenCurlyQuote: OpenCurlyQuote$1,
    operp: operp$1,
    oplus: oplus$1,
    orarr: orarr$1,
    Or: Or$1,
    or: or$1,
    ord: ord$1,
    order: order$1,
    orderof: orderof$1,
    ordf: ordf$2,
    ordm: ordm$2,
    origof: origof$1,
    oror: oror$1,
    orslope: orslope$1,
    orv: orv$1,
    oS: oS$1,
    Oscr: Oscr$1,
    oscr: oscr$1,
    Oslash: Oslash$2,
    oslash: oslash$2,
    osol: osol$1,
    Otilde: Otilde$2,
    otilde: otilde$2,
    otimesas: otimesas$1,
    Otimes: Otimes$1,
    otimes: otimes$1,
    Ouml: Ouml$2,
    ouml: ouml$2,
    ovbar: ovbar$1,
    OverBar: OverBar$1,
    OverBrace: OverBrace$1,
    OverBracket: OverBracket$1,
    OverParenthesis: OverParenthesis$1,
    para: para$2,
    parallel: parallel$1,
    par: par$1,
    parsim: parsim$1,
    parsl: parsl$1,
    part: part$1,
    PartialD: PartialD$1,
    Pcy: Pcy$1,
    pcy: pcy$1,
    percnt: percnt$1,
    period: period$1,
    permil: permil$1,
    perp: perp$1,
    pertenk: pertenk$1,
    Pfr: Pfr$1,
    pfr: pfr$1,
    Phi: Phi$1,
    phi: phi$1,
    phiv: phiv$1,
    phmmat: phmmat$1,
    phone: phone$1,
    Pi: Pi$1,
    pi: pi$1,
    pitchfork: pitchfork$1,
    piv: piv$1,
    planck: planck$1,
    planckh: planckh$1,
    plankv: plankv$1,
    plusacir: plusacir$1,
    plusb: plusb$1,
    pluscir: pluscir$1,
    plus: plus$1,
    plusdo: plusdo$1,
    plusdu: plusdu$1,
    pluse: pluse$1,
    PlusMinus: PlusMinus$1,
    plusmn: plusmn$2,
    plussim: plussim$1,
    plustwo: plustwo$1,
    pm: pm$1,
    Poincareplane: Poincareplane$1,
    pointint: pointint$1,
    popf: popf$1,
    Popf: Popf$1,
    pound: pound$2,
    prap: prap$1,
    Pr: Pr$1,
    pr: pr$1,
    prcue: prcue$1,
    precapprox: precapprox$1,
    prec: prec$1,
    preccurlyeq: preccurlyeq$1,
    Precedes: Precedes$1,
    PrecedesEqual: PrecedesEqual$1,
    PrecedesSlantEqual: PrecedesSlantEqual$1,
    PrecedesTilde: PrecedesTilde$1,
    preceq: preceq$1,
    precnapprox: precnapprox$1,
    precneqq: precneqq$1,
    precnsim: precnsim$1,
    pre: pre$1,
    prE: prE$1,
    precsim: precsim$1,
    prime: prime$1,
    Prime: Prime$1,
    primes: primes$1,
    prnap: prnap$1,
    prnE: prnE$1,
    prnsim: prnsim$1,
    prod: prod$1,
    Product: Product$1,
    profalar: profalar$1,
    profline: profline$1,
    profsurf: profsurf$1,
    prop: prop$1,
    Proportional: Proportional$1,
    Proportion: Proportion$1,
    propto: propto$1,
    prsim: prsim$1,
    prurel: prurel$1,
    Pscr: Pscr$1,
    pscr: pscr$1,
    Psi: Psi$1,
    psi: psi$1,
    puncsp: puncsp$1,
    Qfr: Qfr$1,
    qfr: qfr$1,
    qint: qint$1,
    qopf: qopf$1,
    Qopf: Qopf$1,
    qprime: qprime$1,
    Qscr: Qscr$1,
    qscr: qscr$1,
    quaternions: quaternions$1,
    quatint: quatint$1,
    quest: quest$1,
    questeq: questeq$1,
    quot: quot$3,
    QUOT: QUOT$2,
    rAarr: rAarr$1,
    race: race$1,
    Racute: Racute$1,
    racute: racute$1,
    radic: radic$1,
    raemptyv: raemptyv$1,
    rang: rang$1,
    Rang: Rang$1,
    rangd: rangd$1,
    range: range$1,
    rangle: rangle$1,
    raquo: raquo$2,
    rarrap: rarrap$1,
    rarrb: rarrb$1,
    rarrbfs: rarrbfs$1,
    rarrc: rarrc$1,
    rarr: rarr$1,
    Rarr: Rarr$1,
    rArr: rArr$1,
    rarrfs: rarrfs$1,
    rarrhk: rarrhk$1,
    rarrlp: rarrlp$1,
    rarrpl: rarrpl$1,
    rarrsim: rarrsim$1,
    Rarrtl: Rarrtl$1,
    rarrtl: rarrtl$1,
    rarrw: rarrw$1,
    ratail: ratail$1,
    rAtail: rAtail$1,
    ratio: ratio$1,
    rationals: rationals$1,
    rbarr: rbarr$1,
    rBarr: rBarr$1,
    RBarr: RBarr$1,
    rbbrk: rbbrk$1,
    rbrace: rbrace$1,
    rbrack: rbrack$1,
    rbrke: rbrke$1,
    rbrksld: rbrksld$1,
    rbrkslu: rbrkslu$1,
    Rcaron: Rcaron$1,
    rcaron: rcaron$1,
    Rcedil: Rcedil$1,
    rcedil: rcedil$1,
    rceil: rceil$1,
    rcub: rcub$1,
    Rcy: Rcy$1,
    rcy: rcy$1,
    rdca: rdca$1,
    rdldhar: rdldhar$1,
    rdquo: rdquo$1,
    rdquor: rdquor$1,
    rdsh: rdsh$1,
    real: real$1,
    realine: realine$1,
    realpart: realpart$1,
    reals: reals$1,
    Re: Re$1,
    rect: rect$1,
    reg: reg$2,
    REG: REG$2,
    ReverseElement: ReverseElement$1,
    ReverseEquilibrium: ReverseEquilibrium$1,
    ReverseUpEquilibrium: ReverseUpEquilibrium$1,
    rfisht: rfisht$1,
    rfloor: rfloor$1,
    rfr: rfr$1,
    Rfr: Rfr$1,
    rHar: rHar$1,
    rhard: rhard$1,
    rharu: rharu$1,
    rharul: rharul$1,
    Rho: Rho$1,
    rho: rho$1,
    rhov: rhov$1,
    RightAngleBracket: RightAngleBracket$1,
    RightArrowBar: RightArrowBar$1,
    rightarrow: rightarrow$1,
    RightArrow: RightArrow$1,
    Rightarrow: Rightarrow$1,
    RightArrowLeftArrow: RightArrowLeftArrow$1,
    rightarrowtail: rightarrowtail$1,
    RightCeiling: RightCeiling$1,
    RightDoubleBracket: RightDoubleBracket$1,
    RightDownTeeVector: RightDownTeeVector$1,
    RightDownVectorBar: RightDownVectorBar$1,
    RightDownVector: RightDownVector$1,
    RightFloor: RightFloor$1,
    rightharpoondown: rightharpoondown$1,
    rightharpoonup: rightharpoonup$1,
    rightleftarrows: rightleftarrows$1,
    rightleftharpoons: rightleftharpoons$1,
    rightrightarrows: rightrightarrows$1,
    rightsquigarrow: rightsquigarrow$1,
    RightTeeArrow: RightTeeArrow$1,
    RightTee: RightTee$1,
    RightTeeVector: RightTeeVector$1,
    rightthreetimes: rightthreetimes$1,
    RightTriangleBar: RightTriangleBar$1,
    RightTriangle: RightTriangle$1,
    RightTriangleEqual: RightTriangleEqual$1,
    RightUpDownVector: RightUpDownVector$1,
    RightUpTeeVector: RightUpTeeVector$1,
    RightUpVectorBar: RightUpVectorBar$1,
    RightUpVector: RightUpVector$1,
    RightVectorBar: RightVectorBar$1,
    RightVector: RightVector$1,
    ring: ring$1,
    risingdotseq: risingdotseq$1,
    rlarr: rlarr$1,
    rlhar: rlhar$1,
    rlm: rlm$1,
    rmoustache: rmoustache$1,
    rmoust: rmoust$1,
    rnmid: rnmid$1,
    roang: roang$1,
    roarr: roarr$1,
    robrk: robrk$1,
    ropar: ropar$1,
    ropf: ropf$1,
    Ropf: Ropf$1,
    roplus: roplus$1,
    rotimes: rotimes$1,
    RoundImplies: RoundImplies$1,
    rpar: rpar$1,
    rpargt: rpargt$1,
    rppolint: rppolint$1,
    rrarr: rrarr$1,
    Rrightarrow: Rrightarrow$1,
    rsaquo: rsaquo$1,
    rscr: rscr$1,
    Rscr: Rscr$1,
    rsh: rsh$1,
    Rsh: Rsh$1,
    rsqb: rsqb$1,
    rsquo: rsquo$1,
    rsquor: rsquor$1,
    rthree: rthree$1,
    rtimes: rtimes$1,
    rtri: rtri$1,
    rtrie: rtrie$1,
    rtrif: rtrif$1,
    rtriltri: rtriltri$1,
    RuleDelayed: RuleDelayed$1,
    ruluhar: ruluhar$1,
    rx: rx$1,
    Sacute: Sacute$1,
    sacute: sacute$1,
    sbquo: sbquo$1,
    scap: scap$1,
    Scaron: Scaron$1,
    scaron: scaron$1,
    Sc: Sc$1,
    sc: sc$1,
    sccue: sccue$1,
    sce: sce$1,
    scE: scE$1,
    Scedil: Scedil$1,
    scedil: scedil$1,
    Scirc: Scirc$1,
    scirc: scirc$1,
    scnap: scnap$1,
    scnE: scnE$1,
    scnsim: scnsim$1,
    scpolint: scpolint$1,
    scsim: scsim$1,
    Scy: Scy$1,
    scy: scy$1,
    sdotb: sdotb$1,
    sdot: sdot$1,
    sdote: sdote$1,
    searhk: searhk$1,
    searr: searr$1,
    seArr: seArr$1,
    searrow: searrow$1,
    sect: sect$2,
    semi: semi$1,
    seswar: seswar$1,
    setminus: setminus$1,
    setmn: setmn$1,
    sext: sext$1,
    Sfr: Sfr$1,
    sfr: sfr$1,
    sfrown: sfrown$1,
    sharp: sharp$1,
    SHCHcy: SHCHcy$1,
    shchcy: shchcy$1,
    SHcy: SHcy$1,
    shcy: shcy$1,
    ShortDownArrow: ShortDownArrow$1,
    ShortLeftArrow: ShortLeftArrow$1,
    shortmid: shortmid$1,
    shortparallel: shortparallel$1,
    ShortRightArrow: ShortRightArrow$1,
    ShortUpArrow: ShortUpArrow$1,
    shy: shy$2,
    Sigma: Sigma$1,
    sigma: sigma$1,
    sigmaf: sigmaf$1,
    sigmav: sigmav$1,
    sim: sim$1,
    simdot: simdot$1,
    sime: sime$1,
    simeq: simeq$1,
    simg: simg$1,
    simgE: simgE$1,
    siml: siml$1,
    simlE: simlE$1,
    simne: simne$1,
    simplus: simplus$1,
    simrarr: simrarr$1,
    slarr: slarr$1,
    SmallCircle: SmallCircle$1,
    smallsetminus: smallsetminus$1,
    smashp: smashp$1,
    smeparsl: smeparsl$1,
    smid: smid$1,
    smile: smile$1,
    smt: smt$1,
    smte: smte$1,
    smtes: smtes$1,
    SOFTcy: SOFTcy$1,
    softcy: softcy$1,
    solbar: solbar$1,
    solb: solb$1,
    sol: sol$1,
    Sopf: Sopf$1,
    sopf: sopf$1,
    spades: spades$1,
    spadesuit: spadesuit$1,
    spar: spar$1,
    sqcap: sqcap$1,
    sqcaps: sqcaps$1,
    sqcup: sqcup$1,
    sqcups: sqcups$1,
    Sqrt: Sqrt$1,
    sqsub: sqsub$1,
    sqsube: sqsube$1,
    sqsubset: sqsubset$1,
    sqsubseteq: sqsubseteq$1,
    sqsup: sqsup$1,
    sqsupe: sqsupe$1,
    sqsupset: sqsupset$1,
    sqsupseteq: sqsupseteq$1,
    square: square$1,
    Square: Square$1,
    SquareIntersection: SquareIntersection$1,
    SquareSubset: SquareSubset$1,
    SquareSubsetEqual: SquareSubsetEqual$1,
    SquareSuperset: SquareSuperset$1,
    SquareSupersetEqual: SquareSupersetEqual$1,
    SquareUnion: SquareUnion$1,
    squarf: squarf$1,
    squ: squ$1,
    squf: squf$1,
    srarr: srarr$1,
    Sscr: Sscr$1,
    sscr: sscr$1,
    ssetmn: ssetmn$1,
    ssmile: ssmile$1,
    sstarf: sstarf$1,
    Star: Star$1,
    star: star$1,
    starf: starf$1,
    straightepsilon: straightepsilon$1,
    straightphi: straightphi$1,
    strns: strns$1,
    sub: sub$1,
    Sub: Sub$1,
    subdot: subdot$1,
    subE: subE$1,
    sube: sube$1,
    subedot: subedot$1,
    submult: submult$1,
    subnE: subnE$1,
    subne: subne$1,
    subplus: subplus$1,
    subrarr: subrarr$1,
    subset: subset$1,
    Subset: Subset$1,
    subseteq: subseteq$1,
    subseteqq: subseteqq$1,
    SubsetEqual: SubsetEqual$1,
    subsetneq: subsetneq$1,
    subsetneqq: subsetneqq$1,
    subsim: subsim$1,
    subsub: subsub$1,
    subsup: subsup$1,
    succapprox: succapprox$1,
    succ: succ$1,
    succcurlyeq: succcurlyeq$1,
    Succeeds: Succeeds$1,
    SucceedsEqual: SucceedsEqual$1,
    SucceedsSlantEqual: SucceedsSlantEqual$1,
    SucceedsTilde: SucceedsTilde$1,
    succeq: succeq$1,
    succnapprox: succnapprox$1,
    succneqq: succneqq$1,
    succnsim: succnsim$1,
    succsim: succsim$1,
    SuchThat: SuchThat$1,
    sum: sum$1,
    Sum: Sum$1,
    sung: sung$1,
    sup1: sup1$2,
    sup2: sup2$2,
    sup3: sup3$2,
    sup: sup$1,
    Sup: Sup$1,
    supdot: supdot$1,
    supdsub: supdsub$1,
    supE: supE$1,
    supe: supe$1,
    supedot: supedot$1,
    Superset: Superset$1,
    SupersetEqual: SupersetEqual$1,
    suphsol: suphsol$1,
    suphsub: suphsub$1,
    suplarr: suplarr$1,
    supmult: supmult$1,
    supnE: supnE$1,
    supne: supne$1,
    supplus: supplus$1,
    supset: supset$1,
    Supset: Supset$1,
    supseteq: supseteq$1,
    supseteqq: supseteqq$1,
    supsetneq: supsetneq$1,
    supsetneqq: supsetneqq$1,
    supsim: supsim$1,
    supsub: supsub$1,
    supsup: supsup$1,
    swarhk: swarhk$1,
    swarr: swarr$1,
    swArr: swArr$1,
    swarrow: swarrow$1,
    swnwar: swnwar$1,
    szlig: szlig$2,
    Tab: Tab$1,
    target: target$1,
    Tau: Tau$1,
    tau: tau$1,
    tbrk: tbrk$1,
    Tcaron: Tcaron$1,
    tcaron: tcaron$1,
    Tcedil: Tcedil$1,
    tcedil: tcedil$1,
    Tcy: Tcy$1,
    tcy: tcy$1,
    tdot: tdot$1,
    telrec: telrec$1,
    Tfr: Tfr$1,
    tfr: tfr$1,
    there4: there4$1,
    therefore: therefore$1,
    Therefore: Therefore$1,
    Theta: Theta$1,
    theta: theta$1,
    thetasym: thetasym$1,
    thetav: thetav$1,
    thickapprox: thickapprox$1,
    thicksim: thicksim$1,
    ThickSpace: ThickSpace$1,
    ThinSpace: ThinSpace$1,
    thinsp: thinsp$1,
    thkap: thkap$1,
    thksim: thksim$1,
    THORN: THORN$2,
    thorn: thorn$2,
    tilde: tilde$1,
    Tilde: Tilde$1,
    TildeEqual: TildeEqual$1,
    TildeFullEqual: TildeFullEqual$1,
    TildeTilde: TildeTilde$1,
    timesbar: timesbar$1,
    timesb: timesb$1,
    times: times$2,
    timesd: timesd$1,
    tint: tint$1,
    toea: toea$1,
    topbot: topbot$1,
    topcir: topcir$1,
    top: top$1,
    Topf: Topf$1,
    topf: topf$1,
    topfork: topfork$1,
    tosa: tosa$1,
    tprime: tprime$1,
    trade: trade$1,
    TRADE: TRADE$1,
    triangle: triangle$1,
    triangledown: triangledown$1,
    triangleleft: triangleleft$1,
    trianglelefteq: trianglelefteq$1,
    triangleq: triangleq$1,
    triangleright: triangleright$1,
    trianglerighteq: trianglerighteq$1,
    tridot: tridot$1,
    trie: trie$1,
    triminus: triminus$1,
    TripleDot: TripleDot$1,
    triplus: triplus$1,
    trisb: trisb$1,
    tritime: tritime$1,
    trpezium: trpezium$1,
    Tscr: Tscr$1,
    tscr: tscr$1,
    TScy: TScy$1,
    tscy: tscy$1,
    TSHcy: TSHcy$1,
    tshcy: tshcy$1,
    Tstrok: Tstrok$1,
    tstrok: tstrok$1,
    twixt: twixt$1,
    twoheadleftarrow: twoheadleftarrow$1,
    twoheadrightarrow: twoheadrightarrow$1,
    Uacute: Uacute$2,
    uacute: uacute$2,
    uarr: uarr$1,
    Uarr: Uarr$1,
    uArr: uArr$1,
    Uarrocir: Uarrocir$1,
    Ubrcy: Ubrcy$1,
    ubrcy: ubrcy$1,
    Ubreve: Ubreve$1,
    ubreve: ubreve$1,
    Ucirc: Ucirc$2,
    ucirc: ucirc$2,
    Ucy: Ucy$1,
    ucy: ucy$1,
    udarr: udarr$1,
    Udblac: Udblac$1,
    udblac: udblac$1,
    udhar: udhar$1,
    ufisht: ufisht$1,
    Ufr: Ufr$1,
    ufr: ufr$1,
    Ugrave: Ugrave$2,
    ugrave: ugrave$2,
    uHar: uHar$1,
    uharl: uharl$1,
    uharr: uharr$1,
    uhblk: uhblk$1,
    ulcorn: ulcorn$1,
    ulcorner: ulcorner$1,
    ulcrop: ulcrop$1,
    ultri: ultri$1,
    Umacr: Umacr$1,
    umacr: umacr$1,
    uml: uml$2,
    UnderBar: UnderBar$1,
    UnderBrace: UnderBrace$1,
    UnderBracket: UnderBracket$1,
    UnderParenthesis: UnderParenthesis$1,
    Union: Union$1,
    UnionPlus: UnionPlus$1,
    Uogon: Uogon$1,
    uogon: uogon$1,
    Uopf: Uopf$1,
    uopf: uopf$1,
    UpArrowBar: UpArrowBar$1,
    uparrow: uparrow$1,
    UpArrow: UpArrow$1,
    Uparrow: Uparrow$1,
    UpArrowDownArrow: UpArrowDownArrow$1,
    updownarrow: updownarrow$1,
    UpDownArrow: UpDownArrow$1,
    Updownarrow: Updownarrow$1,
    UpEquilibrium: UpEquilibrium$1,
    upharpoonleft: upharpoonleft$1,
    upharpoonright: upharpoonright$1,
    uplus: uplus$1,
    UpperLeftArrow: UpperLeftArrow$1,
    UpperRightArrow: UpperRightArrow$1,
    upsi: upsi$1,
    Upsi: Upsi$1,
    upsih: upsih$1,
    Upsilon: Upsilon$1,
    upsilon: upsilon$1,
    UpTeeArrow: UpTeeArrow$1,
    UpTee: UpTee$1,
    upuparrows: upuparrows$1,
    urcorn: urcorn$1,
    urcorner: urcorner$1,
    urcrop: urcrop$1,
    Uring: Uring$1,
    uring: uring$1,
    urtri: urtri$1,
    Uscr: Uscr$1,
    uscr: uscr$1,
    utdot: utdot$1,
    Utilde: Utilde$1,
    utilde: utilde$1,
    utri: utri$1,
    utrif: utrif$1,
    uuarr: uuarr$1,
    Uuml: Uuml$2,
    uuml: uuml$2,
    uwangle: uwangle$1,
    vangrt: vangrt$1,
    varepsilon: varepsilon$1,
    varkappa: varkappa$1,
    varnothing: varnothing$1,
    varphi: varphi$1,
    varpi: varpi$1,
    varpropto: varpropto$1,
    varr: varr$1,
    vArr: vArr$1,
    varrho: varrho$1,
    varsigma: varsigma$1,
    varsubsetneq: varsubsetneq$1,
    varsubsetneqq: varsubsetneqq$1,
    varsupsetneq: varsupsetneq$1,
    varsupsetneqq: varsupsetneqq$1,
    vartheta: vartheta$1,
    vartriangleleft: vartriangleleft$1,
    vartriangleright: vartriangleright$1,
    vBar: vBar$1,
    Vbar: Vbar$1,
    vBarv: vBarv$1,
    Vcy: Vcy$1,
    vcy: vcy$1,
    vdash: vdash$1,
    vDash: vDash$1,
    Vdash: Vdash$1,
    VDash: VDash$1,
    Vdashl: Vdashl$1,
    veebar: veebar$1,
    vee: vee$1,
    Vee: Vee$1,
    veeeq: veeeq$1,
    vellip: vellip$1,
    verbar: verbar$1,
    Verbar: Verbar$1,
    vert: vert$1,
    Vert: Vert$1,
    VerticalBar: VerticalBar$1,
    VerticalLine: VerticalLine$1,
    VerticalSeparator: VerticalSeparator$1,
    VerticalTilde: VerticalTilde$1,
    VeryThinSpace: VeryThinSpace$1,
    Vfr: Vfr$1,
    vfr: vfr$1,
    vltri: vltri$1,
    vnsub: vnsub$1,
    vnsup: vnsup$1,
    Vopf: Vopf$1,
    vopf: vopf$1,
    vprop: vprop$1,
    vrtri: vrtri$1,
    Vscr: Vscr$1,
    vscr: vscr$1,
    vsubnE: vsubnE$1,
    vsubne: vsubne$1,
    vsupnE: vsupnE$1,
    vsupne: vsupne$1,
    Vvdash: Vvdash$1,
    vzigzag: vzigzag$1,
    Wcirc: Wcirc$1,
    wcirc: wcirc$1,
    wedbar: wedbar$1,
    wedge: wedge$1,
    Wedge: Wedge$1,
    wedgeq: wedgeq$1,
    weierp: weierp$1,
    Wfr: Wfr$1,
    wfr: wfr$1,
    Wopf: Wopf$1,
    wopf: wopf$1,
    wp: wp$1,
    wr: wr$1,
    wreath: wreath$1,
    Wscr: Wscr$1,
    wscr: wscr$1,
    xcap: xcap$1,
    xcirc: xcirc$1,
    xcup: xcup$1,
    xdtri: xdtri$1,
    Xfr: Xfr$1,
    xfr: xfr$1,
    xharr: xharr$1,
    xhArr: xhArr$1,
    Xi: Xi$1,
    xi: xi$1,
    xlarr: xlarr$1,
    xlArr: xlArr$1,
    xmap: xmap$1,
    xnis: xnis$1,
    xodot: xodot$1,
    Xopf: Xopf$1,
    xopf: xopf$1,
    xoplus: xoplus$1,
    xotime: xotime$1,
    xrarr: xrarr$1,
    xrArr: xrArr$1,
    Xscr: Xscr$1,
    xscr: xscr$1,
    xsqcup: xsqcup$1,
    xuplus: xuplus$1,
    xutri: xutri$1,
    xvee: xvee$1,
    xwedge: xwedge$1,
    Yacute: Yacute$2,
    yacute: yacute$2,
    YAcy: YAcy$1,
    yacy: yacy$1,
    Ycirc: Ycirc$1,
    ycirc: ycirc$1,
    Ycy: Ycy$1,
    ycy: ycy$1,
    yen: yen$2,
    Yfr: Yfr$1,
    yfr: yfr$1,
    YIcy: YIcy$1,
    yicy: yicy$1,
    Yopf: Yopf$1,
    yopf: yopf$1,
    Yscr: Yscr$1,
    yscr: yscr$1,
    YUcy: YUcy$1,
    yucy: yucy$1,
    yuml: yuml$2,
    Yuml: Yuml$1,
    Zacute: Zacute$1,
    zacute: zacute$1,
    Zcaron: Zcaron$1,
    zcaron: zcaron$1,
    Zcy: Zcy$1,
    zcy: zcy$1,
    Zdot: Zdot$1,
    zdot: zdot$1,
    zeetrf: zeetrf$1,
    ZeroWidthSpace: ZeroWidthSpace$1,
    Zeta: Zeta$1,
    zeta: zeta$1,
    zfr: zfr$1,
    Zfr: Zfr$1,
    ZHcy: ZHcy$1,
    zhcy: zhcy$1,
    zigrarr: zigrarr$1,
    zopf: zopf$1,
    Zopf: Zopf$1,
    Zscr: Zscr$1,
    zscr: zscr$1,
    zwj: zwj$1,
    zwnj: zwnj$1,
    'default': entities$2
});

const Aacute$3 = "Á";
const aacute$3 = "á";
const Acirc$3 = "Â";
const acirc$3 = "â";
const acute$3 = "´";
const AElig$3 = "Æ";
const aelig$3 = "æ";
const Agrave$3 = "À";
const agrave$3 = "à";
const amp$4 = "&";
const AMP$3 = "&";
const Aring$3 = "Å";
const aring$3 = "å";
const Atilde$3 = "Ã";
const atilde$3 = "ã";
const Auml$3 = "Ä";
const auml$3 = "ä";
const brvbar$3 = "¦";
const Ccedil$3 = "Ç";
const ccedil$3 = "ç";
const cedil$3 = "¸";
const cent$3 = "¢";
const copy$3 = "©";
const COPY$3 = "©";
const curren$3 = "¤";
const deg$3 = "°";
const divide$3 = "÷";
const Eacute$3 = "É";
const eacute$3 = "é";
const Ecirc$3 = "Ê";
const ecirc$3 = "ê";
const Egrave$3 = "È";
const egrave$3 = "è";
const ETH$3 = "Ð";
const eth$3 = "ð";
const Euml$3 = "Ë";
const euml$3 = "ë";
const frac12$3 = "½";
const frac14$3 = "¼";
const frac34$3 = "¾";
const gt$4 = ">";
const GT$3 = ">";
const Iacute$3 = "Í";
const iacute$3 = "í";
const Icirc$3 = "Î";
const icirc$3 = "î";
const iexcl$3 = "¡";
const Igrave$3 = "Ì";
const igrave$3 = "ì";
const iquest$3 = "¿";
const Iuml$3 = "Ï";
const iuml$3 = "ï";
const laquo$3 = "«";
const lt$4 = "<";
const LT$3 = "<";
const macr$3 = "¯";
const micro$3 = "µ";
const middot$3 = "·";
const nbsp$3 = " ";
const not$3 = "¬";
const Ntilde$3 = "Ñ";
const ntilde$3 = "ñ";
const Oacute$3 = "Ó";
const oacute$3 = "ó";
const Ocirc$3 = "Ô";
const ocirc$3 = "ô";
const Ograve$3 = "Ò";
const ograve$3 = "ò";
const ordf$3 = "ª";
const ordm$3 = "º";
const Oslash$3 = "Ø";
const oslash$3 = "ø";
const Otilde$3 = "Õ";
const otilde$3 = "õ";
const Ouml$3 = "Ö";
const ouml$3 = "ö";
const para$3 = "¶";
const plusmn$3 = "±";
const pound$3 = "£";
const quot$4 = "\"";
const QUOT$3 = "\"";
const raquo$3 = "»";
const reg$3 = "®";
const REG$3 = "®";
const sect$3 = "§";
const shy$3 = "­";
const sup1$3 = "¹";
const sup2$3 = "²";
const sup3$3 = "³";
const szlig$3 = "ß";
const THORN$3 = "Þ";
const thorn$3 = "þ";
const times$3 = "×";
const Uacute$3 = "Ú";
const uacute$3 = "ú";
const Ucirc$3 = "Û";
const ucirc$3 = "û";
const Ugrave$3 = "Ù";
const ugrave$3 = "ù";
const uml$3 = "¨";
const Uuml$3 = "Ü";
const uuml$3 = "ü";
const Yacute$3 = "Ý";
const yacute$3 = "ý";
const yen$3 = "¥";
const yuml$3 = "ÿ";
var legacy$2 = {
  Aacute: Aacute$3,
  aacute: aacute$3,
  Acirc: Acirc$3,
  acirc: acirc$3,
  acute: acute$3,
  AElig: AElig$3,
  aelig: aelig$3,
  Agrave: Agrave$3,
  agrave: agrave$3,
  amp: amp$4,
  AMP: AMP$3,
  Aring: Aring$3,
  aring: aring$3,
  Atilde: Atilde$3,
  atilde: atilde$3,
  Auml: Auml$3,
  auml: auml$3,
  brvbar: brvbar$3,
  Ccedil: Ccedil$3,
  ccedil: ccedil$3,
  cedil: cedil$3,
  cent: cent$3,
  copy: copy$3,
  COPY: COPY$3,
  curren: curren$3,
  deg: deg$3,
  divide: divide$3,
  Eacute: Eacute$3,
  eacute: eacute$3,
  Ecirc: Ecirc$3,
  ecirc: ecirc$3,
  Egrave: Egrave$3,
  egrave: egrave$3,
  ETH: ETH$3,
  eth: eth$3,
  Euml: Euml$3,
  euml: euml$3,
  frac12: frac12$3,
  frac14: frac14$3,
  frac34: frac34$3,
  gt: gt$4,
  GT: GT$3,
  Iacute: Iacute$3,
  iacute: iacute$3,
  Icirc: Icirc$3,
  icirc: icirc$3,
  iexcl: iexcl$3,
  Igrave: Igrave$3,
  igrave: igrave$3,
  iquest: iquest$3,
  Iuml: Iuml$3,
  iuml: iuml$3,
  laquo: laquo$3,
  lt: lt$4,
  LT: LT$3,
  macr: macr$3,
  micro: micro$3,
  middot: middot$3,
  nbsp: nbsp$3,
  not: not$3,
  Ntilde: Ntilde$3,
  ntilde: ntilde$3,
  Oacute: Oacute$3,
  oacute: oacute$3,
  Ocirc: Ocirc$3,
  ocirc: ocirc$3,
  Ograve: Ograve$3,
  ograve: ograve$3,
  ordf: ordf$3,
  ordm: ordm$3,
  Oslash: Oslash$3,
  oslash: oslash$3,
  Otilde: Otilde$3,
  otilde: otilde$3,
  Ouml: Ouml$3,
  ouml: ouml$3,
  para: para$3,
  plusmn: plusmn$3,
  pound: pound$3,
  quot: quot$4,
  QUOT: QUOT$3,
  raquo: raquo$3,
  reg: reg$3,
  REG: REG$3,
  sect: sect$3,
  shy: shy$3,
  sup1: sup1$3,
  sup2: sup2$3,
  sup3: sup3$3,
  szlig: szlig$3,
  THORN: THORN$3,
  thorn: thorn$3,
  times: times$3,
  Uacute: Uacute$3,
  uacute: uacute$3,
  Ucirc: Ucirc$3,
  ucirc: ucirc$3,
  Ugrave: Ugrave$3,
  ugrave: ugrave$3,
  uml: uml$3,
  Uuml: Uuml$3,
  uuml: uuml$3,
  Yacute: Yacute$3,
  yacute: yacute$3,
  yen: yen$3,
  yuml: yuml$3
};

var legacy$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Aacute: Aacute$3,
    aacute: aacute$3,
    Acirc: Acirc$3,
    acirc: acirc$3,
    acute: acute$3,
    AElig: AElig$3,
    aelig: aelig$3,
    Agrave: Agrave$3,
    agrave: agrave$3,
    amp: amp$4,
    AMP: AMP$3,
    Aring: Aring$3,
    aring: aring$3,
    Atilde: Atilde$3,
    atilde: atilde$3,
    Auml: Auml$3,
    auml: auml$3,
    brvbar: brvbar$3,
    Ccedil: Ccedil$3,
    ccedil: ccedil$3,
    cedil: cedil$3,
    cent: cent$3,
    copy: copy$3,
    COPY: COPY$3,
    curren: curren$3,
    deg: deg$3,
    divide: divide$3,
    Eacute: Eacute$3,
    eacute: eacute$3,
    Ecirc: Ecirc$3,
    ecirc: ecirc$3,
    Egrave: Egrave$3,
    egrave: egrave$3,
    ETH: ETH$3,
    eth: eth$3,
    Euml: Euml$3,
    euml: euml$3,
    frac12: frac12$3,
    frac14: frac14$3,
    frac34: frac34$3,
    gt: gt$4,
    GT: GT$3,
    Iacute: Iacute$3,
    iacute: iacute$3,
    Icirc: Icirc$3,
    icirc: icirc$3,
    iexcl: iexcl$3,
    Igrave: Igrave$3,
    igrave: igrave$3,
    iquest: iquest$3,
    Iuml: Iuml$3,
    iuml: iuml$3,
    laquo: laquo$3,
    lt: lt$4,
    LT: LT$3,
    macr: macr$3,
    micro: micro$3,
    middot: middot$3,
    nbsp: nbsp$3,
    not: not$3,
    Ntilde: Ntilde$3,
    ntilde: ntilde$3,
    Oacute: Oacute$3,
    oacute: oacute$3,
    Ocirc: Ocirc$3,
    ocirc: ocirc$3,
    Ograve: Ograve$3,
    ograve: ograve$3,
    ordf: ordf$3,
    ordm: ordm$3,
    Oslash: Oslash$3,
    oslash: oslash$3,
    Otilde: Otilde$3,
    otilde: otilde$3,
    Ouml: Ouml$3,
    ouml: ouml$3,
    para: para$3,
    plusmn: plusmn$3,
    pound: pound$3,
    quot: quot$4,
    QUOT: QUOT$3,
    raquo: raquo$3,
    reg: reg$3,
    REG: REG$3,
    sect: sect$3,
    shy: shy$3,
    sup1: sup1$3,
    sup2: sup2$3,
    sup3: sup3$3,
    szlig: szlig$3,
    THORN: THORN$3,
    thorn: thorn$3,
    times: times$3,
    Uacute: Uacute$3,
    uacute: uacute$3,
    Ucirc: Ucirc$3,
    ucirc: ucirc$3,
    Ugrave: Ugrave$3,
    ugrave: ugrave$3,
    uml: uml$3,
    Uuml: Uuml$3,
    uuml: uuml$3,
    Yacute: Yacute$3,
    yacute: yacute$3,
    yen: yen$3,
    yuml: yuml$3,
    'default': legacy$2
});

const amp$5 = "&";
const apos$3 = "'";
const gt$5 = ">";
const lt$5 = "<";
const quot$5 = "\"";
var xml$2 = {
  amp: amp$5,
  apos: apos$3,
  gt: gt$5,
  lt: lt$5,
  quot: quot$5
};

var xml$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    amp: amp$5,
    apos: apos$3,
    gt: gt$5,
    lt: lt$5,
    quot: quot$5,
    'default': xml$2
});

var decode$2 = {
  "0": 65533,
  "128": 8364,
  "130": 8218,
  "131": 402,
  "132": 8222,
  "133": 8230,
  "134": 8224,
  "135": 8225,
  "136": 710,
  "137": 8240,
  "138": 352,
  "139": 8249,
  "140": 338,
  "142": 381,
  "145": 8216,
  "146": 8217,
  "147": 8220,
  "148": 8221,
  "149": 8226,
  "150": 8211,
  "151": 8212,
  "152": 732,
  "153": 8482,
  "154": 353,
  "155": 8250,
  "156": 339,
  "158": 382,
  "159": 376
};

var decode$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': decode$2
});

var require$$0 = getCjsExportFromNamespace(decode$3);

var decode_codepoint$1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var decode_json_1 = __importDefault(require$$0);
// modified version of https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
function decodeCodePoint(codePoint) {
    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
        return "\uFFFD";
    }
    if (codePoint in decode_json_1.default) {
        // @ts-ignore
        codePoint = decode_json_1.default[codePoint];
    }
    var output = "";
    if (codePoint > 0xffff) {
        codePoint -= 0x10000;
        output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
        codePoint = 0xdc00 | (codePoint & 0x3ff);
    }
    output += String.fromCharCode(codePoint);
    return output;
}
exports.default = decodeCodePoint;
});

unwrapExports(decode_codepoint$1);

var require$$1 = getCjsExportFromNamespace(entities$3);

var require$$1$1 = getCjsExportFromNamespace(legacy$3);

var require$$0$1 = getCjsExportFromNamespace(xml$3);

var decode$4 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entities_json_1 = __importDefault(require$$1);
var legacy_json_1 = __importDefault(require$$1$1);
var xml_json_1 = __importDefault(require$$0$1);
var decode_codepoint_1 = __importDefault(decode_codepoint$1);
exports.decodeXML = getStrictDecoder(xml_json_1.default);
exports.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
function getStrictDecoder(map) {
    var keys = Object.keys(map).join("|");
    var replace = getReplacer(map);
    keys += "|#[xX][\\da-fA-F]+|#\\d+";
    var re = new RegExp("&(?:" + keys + ");", "g");
    return function (str) { return String(str).replace(re, replace); };
}
var sorter = function (a, b) { return (a < b ? 1 : -1); };
exports.decodeHTML = (function () {
    var legacy = Object.keys(legacy_json_1.default).sort(sorter);
    var keys = Object.keys(entities_json_1.default).sort(sorter);
    for (var i = 0, j = 0; i < keys.length; i++) {
        if (legacy[j] === keys[i]) {
            keys[i] += ";?";
            j++;
        }
        else {
            keys[i] += ";";
        }
    }
    var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
    var replace = getReplacer(entities_json_1.default);
    function replacer(str) {
        if (str.substr(-1) !== ";")
            str += ";";
        return replace(str);
    }
    //TODO consider creating a merged map
    return function (str) {
        return String(str).replace(re, replacer);
    };
})();
function getReplacer(map) {
    return function replace(str) {
        if (str.charAt(1) === "#") {
            if (str.charAt(2) === "X" || str.charAt(2) === "x") {
                return decode_codepoint_1.default(parseInt(str.substr(3), 16));
            }
            return decode_codepoint_1.default(parseInt(str.substr(2), 10));
        }
        return map[str.slice(1, -1)];
    };
}
});

unwrapExports(decode$4);
var decode_1 = decode$4.decodeXML;
var decode_2 = decode$4.decodeHTMLStrict;
var decode_3 = decode$4.decodeHTML;

var encode = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var xml_json_1 = __importDefault(require$$0$1);
var inverseXML = getInverseObj(xml_json_1.default);
var xmlReplacer = getInverseReplacer(inverseXML);
exports.encodeXML = getInverse(inverseXML, xmlReplacer);
var entities_json_1 = __importDefault(require$$1);
var inverseHTML = getInverseObj(entities_json_1.default);
var htmlReplacer = getInverseReplacer(inverseHTML);
exports.encodeHTML = getInverse(inverseHTML, htmlReplacer);
function getInverseObj(obj) {
    return Object.keys(obj)
        .sort()
        .reduce(function (inverse, name) {
        inverse[obj[name]] = "&" + name + ";";
        return inverse;
    }, {});
}
function getInverseReplacer(inverse) {
    var single = [];
    var multiple = [];
    Object.keys(inverse).forEach(function (k) {
        return k.length === 1
            ? // Add value to single array
                single.push("\\" + k)
            : // Add value to multiple array
                multiple.push(k);
    });
    //TODO add ranges
    multiple.unshift("[" + single.join("") + "]");
    return new RegExp(multiple.join("|"), "g");
}
var reNonASCII = /[^\0-\x7F]/g;
var reAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
function singleCharReplacer(c) {
    return "&#x" + c
        .charCodeAt(0)
        .toString(16)
        .toUpperCase() + ";";
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
function astralReplacer(c, _) {
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    var high = c.charCodeAt(0);
    var low = c.charCodeAt(1);
    var codePoint = (high - 0xd800) * 0x400 + low - 0xdc00 + 0x10000;
    return "&#x" + codePoint.toString(16).toUpperCase() + ";";
}
function getInverse(inverse, re) {
    return function (data) {
        return data
            .replace(re, function (name) { return inverse[name]; })
            .replace(reAstralSymbols, astralReplacer)
            .replace(reNonASCII, singleCharReplacer);
    };
}
var reXmlChars = getInverseReplacer(inverseXML);
function escape(data) {
    return data
        .replace(reXmlChars, singleCharReplacer)
        .replace(reAstralSymbols, astralReplacer)
        .replace(reNonASCII, singleCharReplacer);
}
exports.escape = escape;
});

unwrapExports(encode);
var encode_1 = encode.encodeXML;
var encode_2 = encode.encodeHTML;
var encode_3 = encode.escape;

var lib$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


function decode(data, level) {
    return (!level || level <= 0 ? decode$4.decodeXML : decode$4.decodeHTML)(data);
}
exports.decode = decode;
function decodeStrict(data, level) {
    return (!level || level <= 0 ? decode$4.decodeXML : decode$4.decodeHTMLStrict)(data);
}
exports.decodeStrict = decodeStrict;
function encode$1(data, level) {
    return (!level || level <= 0 ? encode.encodeXML : encode.encodeHTML)(data);
}
exports.encode = encode$1;
var encode_2 = encode;
exports.encodeXML = encode_2.encodeXML;
exports.encodeHTML = encode_2.encodeHTML;
exports.escape = encode_2.escape;
// Legacy aliases
exports.encodeHTML4 = encode_2.encodeHTML;
exports.encodeHTML5 = encode_2.encodeHTML;
var decode_2 = decode$4;
exports.decodeXML = decode_2.decodeXML;
exports.decodeHTML = decode_2.decodeHTML;
exports.decodeHTMLStrict = decode_2.decodeHTMLStrict;
// Legacy aliases
exports.decodeHTML4 = decode_2.decodeHTML;
exports.decodeHTML5 = decode_2.decodeHTML;
exports.decodeHTML4Strict = decode_2.decodeHTMLStrict;
exports.decodeHTML5Strict = decode_2.decodeHTMLStrict;
exports.decodeXMLStrict = decode_2.decodeXML;
});

unwrapExports(lib$1);
var lib_1$1 = lib$1.decode;
var lib_2$1 = lib$1.decodeStrict;
var lib_3$1 = lib$1.encode;
var lib_4$1 = lib$1.encodeXML;
var lib_5$1 = lib$1.encodeHTML;
var lib_6$1 = lib$1.escape;
var lib_7$1 = lib$1.encodeHTML4;
var lib_8$1 = lib$1.encodeHTML5;
var lib_9$1 = lib$1.decodeXML;
var lib_10 = lib$1.decodeHTML;
var lib_11 = lib$1.decodeHTMLStrict;
var lib_12 = lib$1.decodeHTML4;
var lib_13 = lib$1.decodeHTML5;
var lib_14 = lib$1.decodeHTML4Strict;
var lib_15 = lib$1.decodeHTML5Strict;
var lib_16 = lib$1.decodeXMLStrict;

const elementNames = {
  altglyph: "altGlyph",
  altglyphdef: "altGlyphDef",
  altglyphitem: "altGlyphItem",
  animatecolor: "animateColor",
  animatemotion: "animateMotion",
  animatetransform: "animateTransform",
  clippath: "clipPath",
  feblend: "feBlend",
  fecolormatrix: "feColorMatrix",
  fecomponenttransfer: "feComponentTransfer",
  fecomposite: "feComposite",
  feconvolvematrix: "feConvolveMatrix",
  fediffuselighting: "feDiffuseLighting",
  fedisplacementmap: "feDisplacementMap",
  fedistantlight: "feDistantLight",
  fedropshadow: "feDropShadow",
  feflood: "feFlood",
  fefunca: "feFuncA",
  fefuncb: "feFuncB",
  fefuncg: "feFuncG",
  fefuncr: "feFuncR",
  fegaussianblur: "feGaussianBlur",
  feimage: "feImage",
  femerge: "feMerge",
  femergenode: "feMergeNode",
  femorphology: "feMorphology",
  feoffset: "feOffset",
  fepointlight: "fePointLight",
  fespecularlighting: "feSpecularLighting",
  fespotlight: "feSpotLight",
  fetile: "feTile",
  feturbulence: "feTurbulence",
  foreignobject: "foreignObject",
  glyphref: "glyphRef",
  lineargradient: "linearGradient",
  radialgradient: "radialGradient",
  textpath: "textPath"
};
const attributeNames = {
  definitionurl: "definitionURL",
  attributename: "attributeName",
  attributetype: "attributeType",
  basefrequency: "baseFrequency",
  baseprofile: "baseProfile",
  calcmode: "calcMode",
  clippathunits: "clipPathUnits",
  diffuseconstant: "diffuseConstant",
  edgemode: "edgeMode",
  filterunits: "filterUnits",
  glyphref: "glyphRef",
  gradienttransform: "gradientTransform",
  gradientunits: "gradientUnits",
  kernelmatrix: "kernelMatrix",
  kernelunitlength: "kernelUnitLength",
  keypoints: "keyPoints",
  keysplines: "keySplines",
  keytimes: "keyTimes",
  lengthadjust: "lengthAdjust",
  limitingconeangle: "limitingConeAngle",
  markerheight: "markerHeight",
  markerunits: "markerUnits",
  markerwidth: "markerWidth",
  maskcontentunits: "maskContentUnits",
  maskunits: "maskUnits",
  numoctaves: "numOctaves",
  pathlength: "pathLength",
  patterncontentunits: "patternContentUnits",
  patterntransform: "patternTransform",
  patternunits: "patternUnits",
  pointsatx: "pointsAtX",
  pointsaty: "pointsAtY",
  pointsatz: "pointsAtZ",
  preservealpha: "preserveAlpha",
  preserveaspectratio: "preserveAspectRatio",
  primitiveunits: "primitiveUnits",
  refx: "refX",
  refy: "refY",
  repeatcount: "repeatCount",
  repeatdur: "repeatDur",
  requiredextensions: "requiredExtensions",
  requiredfeatures: "requiredFeatures",
  specularconstant: "specularConstant",
  specularexponent: "specularExponent",
  spreadmethod: "spreadMethod",
  startoffset: "startOffset",
  stddeviation: "stdDeviation",
  stitchtiles: "stitchTiles",
  surfacescale: "surfaceScale",
  systemlanguage: "systemLanguage",
  tablevalues: "tableValues",
  targetx: "targetX",
  targety: "targetY",
  textlength: "textLength",
  viewbox: "viewBox",
  viewtarget: "viewTarget",
  xchannelselector: "xChannelSelector",
  ychannelselector: "yChannelSelector",
  zoomandpan: "zoomAndPan"
};
var foreignNames = {
  elementNames: elementNames,
  attributeNames: attributeNames
};

var foreignNames$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    elementNames: elementNames,
    attributeNames: attributeNames,
    'default': foreignNames
});

var foreignNames$2 = getCjsExportFromNamespace(foreignNames$1);

var domSerializer = createCommonjsModule(function (module) {
/*
  Module dependencies
*/



/* mixed-case SVG and MathML tags & attributes
   recognized by the HTML parser, see
   https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
*/

foreignNames$2.elementNames.__proto__ = null; /* use as a simple dictionary */
foreignNames$2.attributeNames.__proto__ = null;

var unencodedElements = {
  __proto__: null,
  style: true,
  script: true,
  xmp: true,
  iframe: true,
  noembed: true,
  noframes: true,
  plaintext: true,
  noscript: true
};

/*
  Format attributes
*/
function formatAttrs(attributes, opts) {
  if (!attributes) return;

  var output = '';
  var value;

  // Loop through the attributes
  for (var key in attributes) {
    value = attributes[key];
    if (output) {
      output += ' ';
    }

    if (opts.xmlMode === 'foreign') {
      /* fix up mixed-case attribute names */
      key = foreignNames$2.attributeNames[key] || key;
    }
    output += key;
    if ((value !== null && value !== '') || opts.xmlMode) {
      output +=
        '="' +
        (opts.decodeEntities
          ? lib$1.encodeXML(value)
          : value.replace(/\"/g, '&quot;')) +
        '"';
    }
  }

  return output;
}

/*
  Self-enclosing tags (stolen from node-htmlparser)
*/
var singleTag = {
  __proto__: null,
  area: true,
  base: true,
  basefont: true,
  br: true,
  col: true,
  command: true,
  embed: true,
  frame: true,
  hr: true,
  img: true,
  input: true,
  isindex: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
};

var render = (module.exports = function(dom, opts) {
  if (!Array.isArray(dom) && !dom.cheerio) dom = [dom];
  opts = opts || {};

  var output = '';

  for (var i = 0; i < dom.length; i++) {
    var elem = dom[i];

    if (elem.type === 'root') output += render(elem.children, opts);
    else if (lib.isTag(elem)) output += renderTag(elem, opts);
    else if (elem.type === lib.Directive)
      output += renderDirective(elem);
    else if (elem.type === lib.Comment) output += renderComment(elem);
    else if (elem.type === lib.CDATA) output += renderCdata(elem);
    else output += renderText(elem, opts);
  }

  return output;
});

var foreignModeIntegrationPoints = [
  'mi',
  'mo',
  'mn',
  'ms',
  'mtext',
  'annotation-xml',
  'foreignObject',
  'desc',
  'title'
];

function renderTag(elem, opts) {
  // Handle SVG / MathML in HTML
  if (opts.xmlMode === 'foreign') {
    /* fix up mixed-case element names */
    elem.name = foreignNames$2.elementNames[elem.name] || elem.name;
    /* exit foreign mode at integration points */
    if (
      elem.parent &&
      foreignModeIntegrationPoints.indexOf(elem.parent.name) >= 0
    )
      opts = Object.assign({}, opts, { xmlMode: false });
  }
  if (!opts.xmlMode && ['svg', 'math'].indexOf(elem.name) >= 0) {
    opts = Object.assign({}, opts, { xmlMode: 'foreign' });
  }

  var tag = '<' + elem.name;
  var attribs = formatAttrs(elem.attribs, opts);

  if (attribs) {
    tag += ' ' + attribs;
  }

  if (opts.xmlMode && (!elem.children || elem.children.length === 0)) {
    tag += '/>';
  } else {
    tag += '>';
    if (elem.children) {
      tag += render(elem.children, opts);
    }

    if (!singleTag[elem.name] || opts.xmlMode) {
      tag += '</' + elem.name + '>';
    }
  }

  return tag;
}

function renderDirective(elem) {
  return '<' + elem.data + '>';
}

function renderText(elem, opts) {
  var data = elem.data || '';

  // if entities weren't decoded, no need to encode them back
  if (
    opts.decodeEntities &&
    !(elem.parent && elem.parent.name in unencodedElements)
  ) {
    data = lib$1.encodeXML(data);
  }

  return data;
}

function renderCdata(elem) {
  return '<![CDATA[' + elem.children[0].data + ']]>';
}

function renderComment(elem) {
  return '<!--' + elem.data + '-->';
}
});

var isTag = domelementtype.isTag;

var stringify = {
	getInnerHTML: getInnerHTML,
	getOuterHTML: domSerializer,
	getText: getText
};

function getInnerHTML(elem, opts){
	return elem.children ? elem.children.map(function(elem){
		return domSerializer(elem, opts);
	}).join("") : "";
}

function getText(elem){
	if(Array.isArray(elem)) return elem.map(getText).join("");
	if(isTag(elem)) return elem.name === "br" ? "\n" : getText(elem.children);
	if(elem.type === domelementtype.CDATA) return getText(elem.children);
	if(elem.type === domelementtype.Text) return elem.data;
	return "";
}

var traversal = createCommonjsModule(function (module, exports) {
var getChildren = exports.getChildren = function(elem){
	return elem.children;
};

var getParent = exports.getParent = function(elem){
	return elem.parent;
};

exports.getSiblings = function(elem){
	var parent = getParent(elem);
	return parent ? getChildren(parent) : [elem];
};

exports.getAttributeValue = function(elem, name){
	return elem.attribs && elem.attribs[name];
};

exports.hasAttrib = function(elem, name){
	return !!elem.attribs && hasOwnProperty.call(elem.attribs, name);
};

exports.getName = function(elem){
	return elem.name;
};
});
var traversal_1 = traversal.getChildren;
var traversal_2 = traversal.getParent;
var traversal_3 = traversal.getSiblings;
var traversal_4 = traversal.getAttributeValue;
var traversal_5 = traversal.hasAttrib;
var traversal_6 = traversal.getName;

var removeElement = function(elem){
	if(elem.prev) elem.prev.next = elem.next;
	if(elem.next) elem.next.prev = elem.prev;

	if(elem.parent){
		var childs = elem.parent.children;
		childs.splice(childs.lastIndexOf(elem), 1);
	}
};

var replaceElement = function(elem, replacement){
	var prev = replacement.prev = elem.prev;
	if(prev){
		prev.next = replacement;
	}

	var next = replacement.next = elem.next;
	if(next){
		next.prev = replacement;
	}

	var parent = replacement.parent = elem.parent;
	if(parent){
		var childs = parent.children;
		childs[childs.lastIndexOf(elem)] = replacement;
	}
};

var appendChild = function(elem, child){
	child.parent = elem;

	if(elem.children.push(child) !== 1){
		var sibling = elem.children[elem.children.length - 2];
		sibling.next = child;
		child.prev = sibling;
		child.next = null;
	}
};

var append = function(elem, next){
	var parent = elem.parent,
		currNext = elem.next;

	next.next = currNext;
	next.prev = elem;
	elem.next = next;
	next.parent = parent;

	if(currNext){
		currNext.prev = next;
		if(parent){
			var childs = parent.children;
			childs.splice(childs.lastIndexOf(currNext), 0, next);
		}
	} else if(parent){
		parent.children.push(next);
	}
};

var prepend = function(elem, prev){
	var parent = elem.parent;
	if(parent){
		var childs = parent.children;
		childs.splice(childs.lastIndexOf(elem), 0, prev);
	}

	if(elem.prev){
		elem.prev.next = prev;
	}
	
	prev.parent = parent;
	prev.prev = elem.prev;
	prev.next = elem;
	elem.prev = prev;
};

var manipulation = {
	removeElement: removeElement,
	replaceElement: replaceElement,
	appendChild: appendChild,
	append: append,
	prepend: prepend
};

var isTag$1 = domelementtype.isTag;

var querying = {
	filter: filter,
	find: find,
	findOneChild: findOneChild,
	findOne: findOne,
	existsOne: existsOne,
	findAll: findAll
};

function filter(test, element, recurse, limit){
	if(!Array.isArray(element)) element = [element];

	if(typeof limit !== "number" || !isFinite(limit)){
		limit = Infinity;
	}
	return find(test, element, recurse !== false, limit);
}

function find(test, elems, recurse, limit){
	var result = [], childs;

	for(var i = 0, j = elems.length; i < j; i++){
		if(test(elems[i])){
			result.push(elems[i]);
			if(--limit <= 0) break;
		}

		childs = elems[i].children;
		if(recurse && childs && childs.length > 0){
			childs = find(test, childs, recurse, limit);
			result = result.concat(childs);
			limit -= childs.length;
			if(limit <= 0) break;
		}
	}

	return result;
}

function findOneChild(test, elems){
	for(var i = 0, l = elems.length; i < l; i++){
		if(test(elems[i])) return elems[i];
	}

	return null;
}

function findOne(test, elems){
	var elem = null;

	for(var i = 0, l = elems.length; i < l && !elem; i++){
		if(!isTag$1(elems[i])){
			continue;
		} else if(test(elems[i])){
			elem = elems[i];
		} else if(elems[i].children.length > 0){
			elem = findOne(test, elems[i].children);
		}
	}

	return elem;
}

function existsOne(test, elems){
	for(var i = 0, l = elems.length; i < l; i++){
		if(
			isTag$1(elems[i]) && (
				test(elems[i]) || (
					elems[i].children.length > 0 &&
					existsOne(test, elems[i].children)
				)
			)
		){
			return true;
		}
	}

	return false;
}

function findAll(test, rootElems){
	var result = [];
	var stack = rootElems.slice();
	while(stack.length){
		var elem = stack.shift();
		if(!isTag$1(elem)) continue;
		if (elem.children && elem.children.length > 0) {
			stack.unshift.apply(stack, elem.children);
		}
		if(test(elem)) result.push(elem);
	}
	return result;
}

var legacy$4 = createCommonjsModule(function (module, exports) {
var isTag = exports.isTag = domelementtype.isTag;

exports.testElement = function(options, element){
	for(var key in options){
		if(!options.hasOwnProperty(key));
		else if(key === "tag_name"){
			if(!isTag(element) || !options.tag_name(element.name)){
				return false;
			}
		} else if(key === "tag_type"){
			if(!options.tag_type(element.type)) return false;
		} else if(key === "tag_contains"){
			if(isTag(element) || !options.tag_contains(element.data)){
				return false;
			}
		} else if(!element.attribs || !options[key](element.attribs[key])){
			return false;
		}
	}
	return true;
};

var Checks = {
	tag_name: function(name){
		if(typeof name === "function"){
			return function(elem){ return isTag(elem) && name(elem.name); };
		} else if(name === "*"){
			return isTag;
		} else {
			return function(elem){ return isTag(elem) && elem.name === name; };
		}
	},
	tag_type: function(type){
		if(typeof type === "function"){
			return function(elem){ return type(elem.type); };
		} else {
			return function(elem){ return elem.type === type; };
		}
	},
	tag_contains: function(data){
		if(typeof data === "function"){
			return function(elem){ return !isTag(elem) && data(elem.data); };
		} else {
			return function(elem){ return !isTag(elem) && elem.data === data; };
		}
	}
};

function getAttribCheck(attrib, value){
	if(typeof value === "function"){
		return function(elem){ return elem.attribs && value(elem.attribs[attrib]); };
	} else {
		return function(elem){ return elem.attribs && elem.attribs[attrib] === value; };
	}
}

function combineFuncs(a, b){
	return function(elem){
		return a(elem) || b(elem);
	};
}

exports.getElements = function(options, element, recurse, limit){
	var funcs = Object.keys(options).map(function(key){
		var value = options[key];
		return key in Checks ? Checks[key](value) : getAttribCheck(key, value);
	});

	return funcs.length === 0 ? [] : this.filter(
		funcs.reduce(combineFuncs),
		element, recurse, limit
	);
};

exports.getElementById = function(id, element, recurse){
	if(!Array.isArray(element)) element = [element];
	return this.findOne(getAttribCheck("id", id), element, recurse !== false);
};

exports.getElementsByTagName = function(name, element, recurse, limit){
	return this.filter(Checks.tag_name(name), element, recurse, limit);
};

exports.getElementsByTagType = function(type, element, recurse, limit){
	return this.filter(Checks.tag_type(type), element, recurse, limit);
};
});
var legacy_1 = legacy$4.isTag;
var legacy_2 = legacy$4.testElement;
var legacy_3 = legacy$4.getElements;
var legacy_4 = legacy$4.getElementById;
var legacy_5 = legacy$4.getElementsByTagName;
var legacy_6 = legacy$4.getElementsByTagType;

var helpers = createCommonjsModule(function (module, exports) {
// removeSubsets
// Given an array of nodes, remove any member that is contained by another.
exports.removeSubsets = function(nodes) {
	var idx = nodes.length, node, ancestor, replace;

	// Check if each node (or one of its ancestors) is already contained in the
	// array.
	while (--idx > -1) {
		node = ancestor = nodes[idx];

		// Temporarily remove the node under consideration
		nodes[idx] = null;
		replace = true;

		while (ancestor) {
			if (nodes.indexOf(ancestor) > -1) {
				replace = false;
				nodes.splice(idx, 1);
				break;
			}
			ancestor = ancestor.parent;
		}

		// If the node has been found to be unique, re-insert it.
		if (replace) {
			nodes[idx] = node;
		}
	}

	return nodes;
};

// Source: http://dom.spec.whatwg.org/#dom-node-comparedocumentposition
var POSITION = {
	DISCONNECTED: 1,
	PRECEDING: 2,
	FOLLOWING: 4,
	CONTAINS: 8,
	CONTAINED_BY: 16
};

// Compare the position of one node against another node in any other document.
// The return value is a bitmask with the following values:
//
// document order:
// > There is an ordering, document order, defined on all the nodes in the
// > document corresponding to the order in which the first character of the
// > XML representation of each node occurs in the XML representation of the
// > document after expansion of general entities. Thus, the document element
// > node will be the first node. Element nodes occur before their children.
// > Thus, document order orders element nodes in order of the occurrence of
// > their start-tag in the XML (after expansion of entities). The attribute
// > nodes of an element occur after the element and before its children. The
// > relative order of attribute nodes is implementation-dependent./
// Source:
// http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
//
// @argument {Node} nodaA The first node to use in the comparison
// @argument {Node} nodeB The second node to use in the comparison
//
// @return {Number} A bitmask describing the input nodes' relative position.
//         See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
//         a description of these values.
var comparePos = exports.compareDocumentPosition = function(nodeA, nodeB) {
	var aParents = [];
	var bParents = [];
	var current, sharedParent, siblings, aSibling, bSibling, idx;

	if (nodeA === nodeB) {
		return 0;
	}

	current = nodeA;
	while (current) {
		aParents.unshift(current);
		current = current.parent;
	}
	current = nodeB;
	while (current) {
		bParents.unshift(current);
		current = current.parent;
	}

	idx = 0;
	while (aParents[idx] === bParents[idx]) {
		idx++;
	}

	if (idx === 0) {
		return POSITION.DISCONNECTED;
	}

	sharedParent = aParents[idx - 1];
	siblings = sharedParent.children;
	aSibling = aParents[idx];
	bSibling = bParents[idx];

	if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
		if (sharedParent === nodeB) {
			return POSITION.FOLLOWING | POSITION.CONTAINED_BY;
		}
		return POSITION.FOLLOWING;
	} else {
		if (sharedParent === nodeA) {
			return POSITION.PRECEDING | POSITION.CONTAINS;
		}
		return POSITION.PRECEDING;
	}
};

// Sort an array of nodes based on their relative position in the document and
// remove any duplicate nodes. If the array contains nodes that do not belong
// to the same document, sort order is unspecified.
//
// @argument {Array} nodes Array of DOM nodes
//
// @returns {Array} collection of unique nodes, sorted in document order
exports.uniqueSort = function(nodes) {
	var idx = nodes.length, node, position;

	nodes = nodes.slice();

	while (--idx > -1) {
		node = nodes[idx];
		position = nodes.indexOf(node);
		if (position > -1 && position < idx) {
			nodes.splice(idx, 1);
		}
	}
	nodes.sort(function(a, b) {
		var relative = comparePos(a, b);
		if (relative & POSITION.PRECEDING) {
			return -1;
		} else if (relative & POSITION.FOLLOWING) {
			return 1;
		}
		return 0;
	});

	return nodes;
};
});
var helpers_1 = helpers.removeSubsets;
var helpers_2 = helpers.compareDocumentPosition;
var helpers_3 = helpers.uniqueSort;

var domutils = createCommonjsModule(function (module) {
var DomUtils = module.exports;

[
	stringify,
	traversal,
	manipulation,
	querying,
	legacy$4,
	helpers
].forEach(function(ext){
	Object.keys(ext).forEach(function(key){
		DomUtils[key] = ext[key].bind(DomUtils);
	});
});
});

//TODO: make this a streamable handler
function FeedHandler(callback, options) {
    this.init(callback, options);
}

inherits_browser(FeedHandler, domhandler);

FeedHandler.prototype.init = domhandler;

function getElements(what, where) {
    return domutils.getElementsByTagName(what, where, true);
}
function getOneElement(what, where) {
    return domutils.getElementsByTagName(what, where, true, 1)[0];
}
function fetch(what, where, recurse) {
    return domutils.getText(
        domutils.getElementsByTagName(what, where, recurse, 1)
    ).trim();
}

function addConditionally(obj, prop, what, where, recurse) {
    var tmp = fetch(what, where, recurse);
    if (tmp) obj[prop] = tmp;
}

var isValidFeed = function(value) {
    return value === "rss" || value === "feed" || value === "rdf:RDF";
};

FeedHandler.prototype.onend = function() {
    var feed = {},
        feedRoot = getOneElement(isValidFeed, this.dom),
        tmp,
        childs;

    if (feedRoot) {
        if (feedRoot.name === "feed") {
            childs = feedRoot.children;

            feed.type = "atom";
            addConditionally(feed, "id", "id", childs);
            addConditionally(feed, "title", "title", childs);
            if (
                (tmp = getOneElement("link", childs)) &&
                (tmp = tmp.attribs) &&
                (tmp = tmp.href)
            )
                feed.link = tmp;
            addConditionally(feed, "description", "subtitle", childs);
            if ((tmp = fetch("updated", childs))) feed.updated = new Date(tmp);
            addConditionally(feed, "author", "email", childs, true);

            feed.items = getElements("entry", childs).map(function(item) {
                var entry = {},
                    tmp;

                item = item.children;

                addConditionally(entry, "id", "id", item);
                addConditionally(entry, "title", "title", item);
                if (
                    (tmp = getOneElement("link", item)) &&
                    (tmp = tmp.attribs) &&
                    (tmp = tmp.href)
                )
                    entry.link = tmp;
                if ((tmp = fetch("summary", item) || fetch("content", item)))
                    entry.description = tmp;
                if ((tmp = fetch("updated", item)))
                    entry.pubDate = new Date(tmp);
                return entry;
            });
        } else {
            childs = getOneElement("channel", feedRoot.children).children;

            feed.type = feedRoot.name.substr(0, 3);
            feed.id = "";
            addConditionally(feed, "title", "title", childs);
            addConditionally(feed, "link", "link", childs);
            addConditionally(feed, "description", "description", childs);
            if ((tmp = fetch("lastBuildDate", childs)))
                feed.updated = new Date(tmp);
            addConditionally(feed, "author", "managingEditor", childs, true);

            feed.items = getElements("item", feedRoot.children).map(function(
                item
            ) {
                var entry = {},
                    tmp;

                item = item.children;

                addConditionally(entry, "id", "guid", item);
                addConditionally(entry, "title", "title", item);
                addConditionally(entry, "link", "link", item);
                addConditionally(entry, "description", "description", item);
                if ((tmp = fetch("pubDate", item)))
                    entry.pubDate = new Date(tmp);
                return entry;
            });
        }
    }
    this.dom = feed;
    domhandler.prototype._handleCallback.call(
        this,
        feedRoot ? null : Error("couldn't find root of feed")
    );
};

var FeedHandler_1 = FeedHandler;

var _nodeResolve_empty = {};

var _nodeResolve_empty$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': _nodeResolve_empty
});

var safeBuffer = createCommonjsModule(function (module, exports) {
/* eslint-disable node/no-deprecated-api */

var Buffer = buffer.Buffer;

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key];
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer;
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports);
  exports.Buffer = SafeBuffer;
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.prototype = Object.create(Buffer.prototype);

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer);

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
};

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size);
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding);
    } else {
      buf.fill(fill);
    }
  } else {
    buf.fill(0);
  }
  return buf
};

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
};

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
};
});
var safeBuffer_1 = safeBuffer.Buffer;

/*<replacement>*/

var Buffer = safeBuffer.Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
}
// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
var StringDecoder_1 = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

var string_decoder = {
	StringDecoder: StringDecoder_1
};

var require$$0$2 = getCjsExportFromNamespace(_nodeResolve_empty$1);

var WritableStream_1 = Stream;


var WritableStream = require$$0$2.Writable;
var StringDecoder$1 = string_decoder.StringDecoder;
var Buffer$1 = buffer.Buffer;

function Stream(cbs, options) {
    var parser = (this._parser = new Parser_1(cbs, options));
    var decoder = (this._decoder = new StringDecoder$1());

    WritableStream.call(this, { decodeStrings: false });

    this.once("finish", function() {
        parser.end(decoder.end());
    });
}

inherits_browser(Stream, WritableStream);

Stream.prototype._write = function(chunk, encoding, cb) {
    if (chunk instanceof Buffer$1) chunk = this._decoder.write(chunk);
    this._parser.write(chunk);
    cb();
};

var Stream_1 = Stream$1;



function Stream$1(options) {
    WritableStream_1.call(this, new Cbs(this), options);
}

inherits_browser(Stream$1, WritableStream_1);

Stream$1.prototype.readable = true;

function Cbs(scope) {
    this.scope = scope;
}

var EVENTS = lib$2.EVENTS;

Object.keys(EVENTS).forEach(function(name) {
    if (EVENTS[name] === 0) {
        Cbs.prototype["on" + name] = function() {
            this.scope.emit(name);
        };
    } else if (EVENTS[name] === 1) {
        Cbs.prototype["on" + name] = function(a) {
            this.scope.emit(name, a);
        };
    } else if (EVENTS[name] === 2) {
        Cbs.prototype["on" + name] = function(a, b) {
            this.scope.emit(name, a, b);
        };
    } else {
        throw Error("wrong number of arguments!");
    }
});

var ProxyHandler_1 = ProxyHandler;

function ProxyHandler(cbs) {
    this._cbs = cbs || {};
}

var EVENTS$1 = lib$2.EVENTS;
Object.keys(EVENTS$1).forEach(function(name) {
    if (EVENTS$1[name] === 0) {
        name = "on" + name;
        ProxyHandler.prototype[name] = function() {
            if (this._cbs[name]) this._cbs[name]();
        };
    } else if (EVENTS$1[name] === 1) {
        name = "on" + name;
        ProxyHandler.prototype[name] = function(a) {
            if (this._cbs[name]) this._cbs[name](a);
        };
    } else if (EVENTS$1[name] === 2) {
        name = "on" + name;
        ProxyHandler.prototype[name] = function(a, b) {
            if (this._cbs[name]) this._cbs[name](a, b);
        };
    } else {
        throw Error("wrong number of arguments");
    }
});

var CollectingHandler_1 = CollectingHandler;

function CollectingHandler(cbs) {
    this._cbs = cbs || {};
    this.events = [];
}

var EVENTS$2 = lib$2.EVENTS;
Object.keys(EVENTS$2).forEach(function(name) {
    if (EVENTS$2[name] === 0) {
        name = "on" + name;
        CollectingHandler.prototype[name] = function() {
            this.events.push([name]);
            if (this._cbs[name]) this._cbs[name]();
        };
    } else if (EVENTS$2[name] === 1) {
        name = "on" + name;
        CollectingHandler.prototype[name] = function(a) {
            this.events.push([name, a]);
            if (this._cbs[name]) this._cbs[name](a);
        };
    } else if (EVENTS$2[name] === 2) {
        name = "on" + name;
        CollectingHandler.prototype[name] = function(a, b) {
            this.events.push([name, a, b]);
            if (this._cbs[name]) this._cbs[name](a, b);
        };
    } else {
        throw Error("wrong number of arguments");
    }
});

CollectingHandler.prototype.onreset = function() {
    this.events = [];
    if (this._cbs.onreset) this._cbs.onreset();
};

CollectingHandler.prototype.restart = function() {
    if (this._cbs.onreset) this._cbs.onreset();

    for (var i = 0, len = this.events.length; i < len; i++) {
        if (this._cbs[this.events[i][0]]) {
            var num = this.events[i].length;

            if (num === 1) {
                this._cbs[this.events[i][0]]();
            } else if (num === 2) {
                this._cbs[this.events[i][0]](this.events[i][1]);
            } else {
                this._cbs[this.events[i][0]](
                    this.events[i][1],
                    this.events[i][2]
                );
            }
        }
    }
};

var lib$2 = createCommonjsModule(function (module) {
function defineProp(name, value) {
    delete module.exports[name];
    module.exports[name] = value;
    return value;
}

module.exports = {
    Parser: Parser_1,
    Tokenizer: Tokenizer_1,
    ElementType: domelementtype,
    DomHandler: domhandler,
    get FeedHandler() {
        return defineProp("FeedHandler", FeedHandler_1);
    },
    get Stream() {
        return defineProp("Stream", Stream_1);
    },
    get WritableStream() {
        return defineProp("WritableStream", WritableStream_1);
    },
    get ProxyHandler() {
        return defineProp("ProxyHandler", ProxyHandler_1);
    },
    get DomUtils() {
        return defineProp("DomUtils", domutils);
    },
    get CollectingHandler() {
        return defineProp(
            "CollectingHandler",
            CollectingHandler_1
        );
    },
    // For legacy support
    DefaultHandler: domhandler,
    get RssHandler() {
        return defineProp("RssHandler", this.FeedHandler);
    },
    //helper methods
    parseDOM: function(data, options) {
        var handler = new domhandler(options);
        new Parser_1(handler, options).end(data);
        return handler.dom;
    },
    parseFeed: function(feed, options) {
        var handler = new module.exports.FeedHandler(options);
        new Parser_1(handler, options).end(feed);
        return handler.dom;
    },
    createDomStream: function(cb, options, elementCb) {
        var handler = new domhandler(cb, options, elementCb);
        return new Parser_1(handler, options);
    },
    // List of all events that the parser emits
    EVENTS: {
        /* Format: eventname: number of arguments */
        attribute: 2,
        cdatastart: 0,
        cdataend: 0,
        text: 1,
        processinginstruction: 2,
        comment: 1,
        commentend: 0,
        closetag: 1,
        opentag: 2,
        opentagname: 1,
        error: 1,
        end: 0
    }
};
});
var lib_1$2 = lib$2.Parser;
var lib_2$2 = lib$2.Tokenizer;
var lib_3$2 = lib$2.ElementType;
var lib_4$2 = lib$2.DomHandler;
var lib_5$2 = lib$2.FeedHandler;
var lib_6$2 = lib$2.Stream;
var lib_7$2 = lib$2.WritableStream;
var lib_8$2 = lib$2.ProxyHandler;
var lib_9$2 = lib$2.DomUtils;
var lib_10$1 = lib$2.CollectingHandler;
var lib_11$1 = lib$2.DefaultHandler;
var lib_12$1 = lib$2.RssHandler;
var lib_13$1 = lib$2.parseDOM;
var lib_14$1 = lib$2.parseFeed;
var lib_15$1 = lib$2.createDomStream;
var lib_16$1 = lib$2.EVENTS;

/**
 * Expose `toNoCase`.
 */

var toNoCase_1 = toNoCase;


/**
 * Test whether a string is camel-case.
 */

var hasSpace = /\s/;
var hasCamel = /[a-z][A-Z]/;
var hasSeparator = /[\W_]/;


/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 *
 * @param {String} string
 * @return {String}
 */

function toNoCase (string) {
  if (hasSpace.test(string)) return string.toLowerCase();

  if (hasSeparator.test(string)) string = unseparate(string);
  if (hasCamel.test(string)) string = uncamelize(string);
  return string.toLowerCase();
}


/**
 * Separator splitter.
 */

var separatorSplitter = /[\W_]+(.|$)/g;


/**
 * Un-separate a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function unseparate (string) {
  return string.replace(separatorSplitter, function (m, next) {
    return next ? ' ' + next : '';
  });
}


/**
 * Camelcase splitter.
 */

var camelSplitter = /(.)([A-Z]+)/g;


/**
 * Un-camelcase a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function uncamelize (string) {
  return string.replace(camelSplitter, function (m, previous, uppers) {
    return previous + ' ' + uppers.toLowerCase().split('').join(' ');
  });
}

/**
 * Expose `toSpaceCase`.
 */

var toSpaceCase_1 = toSpaceCase;


/**
 * Convert a `string` to space case.
 *
 * @param {String} string
 * @return {String}
 */


function toSpaceCase (string) {
  return toNoCase_1(string).replace(/[\W_]+(.|$)/g, function (matches, match) {
    return match ? ' ' + match : '';
  });
}

/**
 * Expose `toCamelCase`.
 */

var toCamelCase_1 = toCamelCase;


/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */


function toCamelCase (string) {
  return toSpaceCase_1(string).replace(/\s(\w)/g, function (matches, letter) {
    return letter.toUpperCase();
  });
}

var reversed = {
  "9": "Tab;",
  "10": "NewLine;",
  "33": "excl;",
  "34": "quot;",
  "35": "num;",
  "36": "dollar;",
  "37": "percnt;",
  "38": "amp;",
  "39": "apos;",
  "40": "lpar;",
  "41": "rpar;",
  "42": "midast;",
  "43": "plus;",
  "44": "comma;",
  "46": "period;",
  "47": "sol;",
  "58": "colon;",
  "59": "semi;",
  "60": "lt;",
  "61": "equals;",
  "62": "gt;",
  "63": "quest;",
  "64": "commat;",
  "91": "lsqb;",
  "92": "bsol;",
  "93": "rsqb;",
  "94": "Hat;",
  "95": "UnderBar;",
  "96": "grave;",
  "123": "lcub;",
  "124": "VerticalLine;",
  "125": "rcub;",
  "160": "NonBreakingSpace;",
  "161": "iexcl;",
  "162": "cent;",
  "163": "pound;",
  "164": "curren;",
  "165": "yen;",
  "166": "brvbar;",
  "167": "sect;",
  "168": "uml;",
  "169": "copy;",
  "170": "ordf;",
  "171": "laquo;",
  "172": "not;",
  "173": "shy;",
  "174": "reg;",
  "175": "strns;",
  "176": "deg;",
  "177": "pm;",
  "178": "sup2;",
  "179": "sup3;",
  "180": "DiacriticalAcute;",
  "181": "micro;",
  "182": "para;",
  "183": "middot;",
  "184": "Cedilla;",
  "185": "sup1;",
  "186": "ordm;",
  "187": "raquo;",
  "188": "frac14;",
  "189": "half;",
  "190": "frac34;",
  "191": "iquest;",
  "192": "Agrave;",
  "193": "Aacute;",
  "194": "Acirc;",
  "195": "Atilde;",
  "196": "Auml;",
  "197": "Aring;",
  "198": "AElig;",
  "199": "Ccedil;",
  "200": "Egrave;",
  "201": "Eacute;",
  "202": "Ecirc;",
  "203": "Euml;",
  "204": "Igrave;",
  "205": "Iacute;",
  "206": "Icirc;",
  "207": "Iuml;",
  "208": "ETH;",
  "209": "Ntilde;",
  "210": "Ograve;",
  "211": "Oacute;",
  "212": "Ocirc;",
  "213": "Otilde;",
  "214": "Ouml;",
  "215": "times;",
  "216": "Oslash;",
  "217": "Ugrave;",
  "218": "Uacute;",
  "219": "Ucirc;",
  "220": "Uuml;",
  "221": "Yacute;",
  "222": "THORN;",
  "223": "szlig;",
  "224": "agrave;",
  "225": "aacute;",
  "226": "acirc;",
  "227": "atilde;",
  "228": "auml;",
  "229": "aring;",
  "230": "aelig;",
  "231": "ccedil;",
  "232": "egrave;",
  "233": "eacute;",
  "234": "ecirc;",
  "235": "euml;",
  "236": "igrave;",
  "237": "iacute;",
  "238": "icirc;",
  "239": "iuml;",
  "240": "eth;",
  "241": "ntilde;",
  "242": "ograve;",
  "243": "oacute;",
  "244": "ocirc;",
  "245": "otilde;",
  "246": "ouml;",
  "247": "divide;",
  "248": "oslash;",
  "249": "ugrave;",
  "250": "uacute;",
  "251": "ucirc;",
  "252": "uuml;",
  "253": "yacute;",
  "254": "thorn;",
  "255": "yuml;",
  "256": "Amacr;",
  "257": "amacr;",
  "258": "Abreve;",
  "259": "abreve;",
  "260": "Aogon;",
  "261": "aogon;",
  "262": "Cacute;",
  "263": "cacute;",
  "264": "Ccirc;",
  "265": "ccirc;",
  "266": "Cdot;",
  "267": "cdot;",
  "268": "Ccaron;",
  "269": "ccaron;",
  "270": "Dcaron;",
  "271": "dcaron;",
  "272": "Dstrok;",
  "273": "dstrok;",
  "274": "Emacr;",
  "275": "emacr;",
  "278": "Edot;",
  "279": "edot;",
  "280": "Eogon;",
  "281": "eogon;",
  "282": "Ecaron;",
  "283": "ecaron;",
  "284": "Gcirc;",
  "285": "gcirc;",
  "286": "Gbreve;",
  "287": "gbreve;",
  "288": "Gdot;",
  "289": "gdot;",
  "290": "Gcedil;",
  "292": "Hcirc;",
  "293": "hcirc;",
  "294": "Hstrok;",
  "295": "hstrok;",
  "296": "Itilde;",
  "297": "itilde;",
  "298": "Imacr;",
  "299": "imacr;",
  "302": "Iogon;",
  "303": "iogon;",
  "304": "Idot;",
  "305": "inodot;",
  "306": "IJlig;",
  "307": "ijlig;",
  "308": "Jcirc;",
  "309": "jcirc;",
  "310": "Kcedil;",
  "311": "kcedil;",
  "312": "kgreen;",
  "313": "Lacute;",
  "314": "lacute;",
  "315": "Lcedil;",
  "316": "lcedil;",
  "317": "Lcaron;",
  "318": "lcaron;",
  "319": "Lmidot;",
  "320": "lmidot;",
  "321": "Lstrok;",
  "322": "lstrok;",
  "323": "Nacute;",
  "324": "nacute;",
  "325": "Ncedil;",
  "326": "ncedil;",
  "327": "Ncaron;",
  "328": "ncaron;",
  "329": "napos;",
  "330": "ENG;",
  "331": "eng;",
  "332": "Omacr;",
  "333": "omacr;",
  "336": "Odblac;",
  "337": "odblac;",
  "338": "OElig;",
  "339": "oelig;",
  "340": "Racute;",
  "341": "racute;",
  "342": "Rcedil;",
  "343": "rcedil;",
  "344": "Rcaron;",
  "345": "rcaron;",
  "346": "Sacute;",
  "347": "sacute;",
  "348": "Scirc;",
  "349": "scirc;",
  "350": "Scedil;",
  "351": "scedil;",
  "352": "Scaron;",
  "353": "scaron;",
  "354": "Tcedil;",
  "355": "tcedil;",
  "356": "Tcaron;",
  "357": "tcaron;",
  "358": "Tstrok;",
  "359": "tstrok;",
  "360": "Utilde;",
  "361": "utilde;",
  "362": "Umacr;",
  "363": "umacr;",
  "364": "Ubreve;",
  "365": "ubreve;",
  "366": "Uring;",
  "367": "uring;",
  "368": "Udblac;",
  "369": "udblac;",
  "370": "Uogon;",
  "371": "uogon;",
  "372": "Wcirc;",
  "373": "wcirc;",
  "374": "Ycirc;",
  "375": "ycirc;",
  "376": "Yuml;",
  "377": "Zacute;",
  "378": "zacute;",
  "379": "Zdot;",
  "380": "zdot;",
  "381": "Zcaron;",
  "382": "zcaron;",
  "402": "fnof;",
  "437": "imped;",
  "501": "gacute;",
  "567": "jmath;",
  "710": "circ;",
  "711": "Hacek;",
  "728": "breve;",
  "729": "dot;",
  "730": "ring;",
  "731": "ogon;",
  "732": "tilde;",
  "733": "DiacriticalDoubleAcute;",
  "785": "DownBreve;",
  "913": "Alpha;",
  "914": "Beta;",
  "915": "Gamma;",
  "916": "Delta;",
  "917": "Epsilon;",
  "918": "Zeta;",
  "919": "Eta;",
  "920": "Theta;",
  "921": "Iota;",
  "922": "Kappa;",
  "923": "Lambda;",
  "924": "Mu;",
  "925": "Nu;",
  "926": "Xi;",
  "927": "Omicron;",
  "928": "Pi;",
  "929": "Rho;",
  "931": "Sigma;",
  "932": "Tau;",
  "933": "Upsilon;",
  "934": "Phi;",
  "935": "Chi;",
  "936": "Psi;",
  "937": "Omega;",
  "945": "alpha;",
  "946": "beta;",
  "947": "gamma;",
  "948": "delta;",
  "949": "epsilon;",
  "950": "zeta;",
  "951": "eta;",
  "952": "theta;",
  "953": "iota;",
  "954": "kappa;",
  "955": "lambda;",
  "956": "mu;",
  "957": "nu;",
  "958": "xi;",
  "959": "omicron;",
  "960": "pi;",
  "961": "rho;",
  "962": "varsigma;",
  "963": "sigma;",
  "964": "tau;",
  "965": "upsilon;",
  "966": "phi;",
  "967": "chi;",
  "968": "psi;",
  "969": "omega;",
  "977": "vartheta;",
  "978": "upsih;",
  "981": "varphi;",
  "982": "varpi;",
  "988": "Gammad;",
  "989": "gammad;",
  "1008": "varkappa;",
  "1009": "varrho;",
  "1013": "varepsilon;",
  "1014": "bepsi;",
  "1025": "IOcy;",
  "1026": "DJcy;",
  "1027": "GJcy;",
  "1028": "Jukcy;",
  "1029": "DScy;",
  "1030": "Iukcy;",
  "1031": "YIcy;",
  "1032": "Jsercy;",
  "1033": "LJcy;",
  "1034": "NJcy;",
  "1035": "TSHcy;",
  "1036": "KJcy;",
  "1038": "Ubrcy;",
  "1039": "DZcy;",
  "1040": "Acy;",
  "1041": "Bcy;",
  "1042": "Vcy;",
  "1043": "Gcy;",
  "1044": "Dcy;",
  "1045": "IEcy;",
  "1046": "ZHcy;",
  "1047": "Zcy;",
  "1048": "Icy;",
  "1049": "Jcy;",
  "1050": "Kcy;",
  "1051": "Lcy;",
  "1052": "Mcy;",
  "1053": "Ncy;",
  "1054": "Ocy;",
  "1055": "Pcy;",
  "1056": "Rcy;",
  "1057": "Scy;",
  "1058": "Tcy;",
  "1059": "Ucy;",
  "1060": "Fcy;",
  "1061": "KHcy;",
  "1062": "TScy;",
  "1063": "CHcy;",
  "1064": "SHcy;",
  "1065": "SHCHcy;",
  "1066": "HARDcy;",
  "1067": "Ycy;",
  "1068": "SOFTcy;",
  "1069": "Ecy;",
  "1070": "YUcy;",
  "1071": "YAcy;",
  "1072": "acy;",
  "1073": "bcy;",
  "1074": "vcy;",
  "1075": "gcy;",
  "1076": "dcy;",
  "1077": "iecy;",
  "1078": "zhcy;",
  "1079": "zcy;",
  "1080": "icy;",
  "1081": "jcy;",
  "1082": "kcy;",
  "1083": "lcy;",
  "1084": "mcy;",
  "1085": "ncy;",
  "1086": "ocy;",
  "1087": "pcy;",
  "1088": "rcy;",
  "1089": "scy;",
  "1090": "tcy;",
  "1091": "ucy;",
  "1092": "fcy;",
  "1093": "khcy;",
  "1094": "tscy;",
  "1095": "chcy;",
  "1096": "shcy;",
  "1097": "shchcy;",
  "1098": "hardcy;",
  "1099": "ycy;",
  "1100": "softcy;",
  "1101": "ecy;",
  "1102": "yucy;",
  "1103": "yacy;",
  "1105": "iocy;",
  "1106": "djcy;",
  "1107": "gjcy;",
  "1108": "jukcy;",
  "1109": "dscy;",
  "1110": "iukcy;",
  "1111": "yicy;",
  "1112": "jsercy;",
  "1113": "ljcy;",
  "1114": "njcy;",
  "1115": "tshcy;",
  "1116": "kjcy;",
  "1118": "ubrcy;",
  "1119": "dzcy;",
  "8194": "ensp;",
  "8195": "emsp;",
  "8196": "emsp13;",
  "8197": "emsp14;",
  "8199": "numsp;",
  "8200": "puncsp;",
  "8201": "ThinSpace;",
  "8202": "VeryThinSpace;",
  "8203": "ZeroWidthSpace;",
  "8204": "zwnj;",
  "8205": "zwj;",
  "8206": "lrm;",
  "8207": "rlm;",
  "8208": "hyphen;",
  "8211": "ndash;",
  "8212": "mdash;",
  "8213": "horbar;",
  "8214": "Vert;",
  "8216": "OpenCurlyQuote;",
  "8217": "rsquor;",
  "8218": "sbquo;",
  "8220": "OpenCurlyDoubleQuote;",
  "8221": "rdquor;",
  "8222": "ldquor;",
  "8224": "dagger;",
  "8225": "ddagger;",
  "8226": "bullet;",
  "8229": "nldr;",
  "8230": "mldr;",
  "8240": "permil;",
  "8241": "pertenk;",
  "8242": "prime;",
  "8243": "Prime;",
  "8244": "tprime;",
  "8245": "bprime;",
  "8249": "lsaquo;",
  "8250": "rsaquo;",
  "8254": "OverBar;",
  "8257": "caret;",
  "8259": "hybull;",
  "8260": "frasl;",
  "8271": "bsemi;",
  "8279": "qprime;",
  "8287": "MediumSpace;",
  "8288": "NoBreak;",
  "8289": "ApplyFunction;",
  "8290": "it;",
  "8291": "InvisibleComma;",
  "8364": "euro;",
  "8411": "TripleDot;",
  "8412": "DotDot;",
  "8450": "Copf;",
  "8453": "incare;",
  "8458": "gscr;",
  "8459": "Hscr;",
  "8460": "Poincareplane;",
  "8461": "quaternions;",
  "8462": "planckh;",
  "8463": "plankv;",
  "8464": "Iscr;",
  "8465": "imagpart;",
  "8466": "Lscr;",
  "8467": "ell;",
  "8469": "Nopf;",
  "8470": "numero;",
  "8471": "copysr;",
  "8472": "wp;",
  "8473": "primes;",
  "8474": "rationals;",
  "8475": "Rscr;",
  "8476": "Rfr;",
  "8477": "Ropf;",
  "8478": "rx;",
  "8482": "trade;",
  "8484": "Zopf;",
  "8487": "mho;",
  "8488": "Zfr;",
  "8489": "iiota;",
  "8492": "Bscr;",
  "8493": "Cfr;",
  "8495": "escr;",
  "8496": "expectation;",
  "8497": "Fscr;",
  "8499": "phmmat;",
  "8500": "oscr;",
  "8501": "aleph;",
  "8502": "beth;",
  "8503": "gimel;",
  "8504": "daleth;",
  "8517": "DD;",
  "8518": "DifferentialD;",
  "8519": "exponentiale;",
  "8520": "ImaginaryI;",
  "8531": "frac13;",
  "8532": "frac23;",
  "8533": "frac15;",
  "8534": "frac25;",
  "8535": "frac35;",
  "8536": "frac45;",
  "8537": "frac16;",
  "8538": "frac56;",
  "8539": "frac18;",
  "8540": "frac38;",
  "8541": "frac58;",
  "8542": "frac78;",
  "8592": "slarr;",
  "8593": "uparrow;",
  "8594": "srarr;",
  "8595": "ShortDownArrow;",
  "8596": "leftrightarrow;",
  "8597": "varr;",
  "8598": "UpperLeftArrow;",
  "8599": "UpperRightArrow;",
  "8600": "searrow;",
  "8601": "swarrow;",
  "8602": "nleftarrow;",
  "8603": "nrightarrow;",
  "8605": "rightsquigarrow;",
  "8606": "twoheadleftarrow;",
  "8607": "Uarr;",
  "8608": "twoheadrightarrow;",
  "8609": "Darr;",
  "8610": "leftarrowtail;",
  "8611": "rightarrowtail;",
  "8612": "mapstoleft;",
  "8613": "UpTeeArrow;",
  "8614": "RightTeeArrow;",
  "8615": "mapstodown;",
  "8617": "larrhk;",
  "8618": "rarrhk;",
  "8619": "looparrowleft;",
  "8620": "rarrlp;",
  "8621": "leftrightsquigarrow;",
  "8622": "nleftrightarrow;",
  "8624": "lsh;",
  "8625": "rsh;",
  "8626": "ldsh;",
  "8627": "rdsh;",
  "8629": "crarr;",
  "8630": "curvearrowleft;",
  "8631": "curvearrowright;",
  "8634": "olarr;",
  "8635": "orarr;",
  "8636": "lharu;",
  "8637": "lhard;",
  "8638": "upharpoonright;",
  "8639": "upharpoonleft;",
  "8640": "RightVector;",
  "8641": "rightharpoondown;",
  "8642": "RightDownVector;",
  "8643": "LeftDownVector;",
  "8644": "rlarr;",
  "8645": "UpArrowDownArrow;",
  "8646": "lrarr;",
  "8647": "llarr;",
  "8648": "uuarr;",
  "8649": "rrarr;",
  "8650": "downdownarrows;",
  "8651": "ReverseEquilibrium;",
  "8652": "rlhar;",
  "8653": "nLeftarrow;",
  "8654": "nLeftrightarrow;",
  "8655": "nRightarrow;",
  "8656": "Leftarrow;",
  "8657": "Uparrow;",
  "8658": "Rightarrow;",
  "8659": "Downarrow;",
  "8660": "Leftrightarrow;",
  "8661": "vArr;",
  "8662": "nwArr;",
  "8663": "neArr;",
  "8664": "seArr;",
  "8665": "swArr;",
  "8666": "Lleftarrow;",
  "8667": "Rrightarrow;",
  "8669": "zigrarr;",
  "8676": "LeftArrowBar;",
  "8677": "RightArrowBar;",
  "8693": "duarr;",
  "8701": "loarr;",
  "8702": "roarr;",
  "8703": "hoarr;",
  "8704": "forall;",
  "8705": "complement;",
  "8706": "PartialD;",
  "8707": "Exists;",
  "8708": "NotExists;",
  "8709": "varnothing;",
  "8711": "nabla;",
  "8712": "isinv;",
  "8713": "notinva;",
  "8715": "SuchThat;",
  "8716": "NotReverseElement;",
  "8719": "Product;",
  "8720": "Coproduct;",
  "8721": "sum;",
  "8722": "minus;",
  "8723": "mp;",
  "8724": "plusdo;",
  "8726": "ssetmn;",
  "8727": "lowast;",
  "8728": "SmallCircle;",
  "8730": "Sqrt;",
  "8733": "vprop;",
  "8734": "infin;",
  "8735": "angrt;",
  "8736": "angle;",
  "8737": "measuredangle;",
  "8738": "angsph;",
  "8739": "VerticalBar;",
  "8740": "nsmid;",
  "8741": "spar;",
  "8742": "nspar;",
  "8743": "wedge;",
  "8744": "vee;",
  "8745": "cap;",
  "8746": "cup;",
  "8747": "Integral;",
  "8748": "Int;",
  "8749": "tint;",
  "8750": "oint;",
  "8751": "DoubleContourIntegral;",
  "8752": "Cconint;",
  "8753": "cwint;",
  "8754": "cwconint;",
  "8755": "CounterClockwiseContourIntegral;",
  "8756": "therefore;",
  "8757": "because;",
  "8758": "ratio;",
  "8759": "Proportion;",
  "8760": "minusd;",
  "8762": "mDDot;",
  "8763": "homtht;",
  "8764": "Tilde;",
  "8765": "bsim;",
  "8766": "mstpos;",
  "8767": "acd;",
  "8768": "wreath;",
  "8769": "nsim;",
  "8770": "esim;",
  "8771": "TildeEqual;",
  "8772": "nsimeq;",
  "8773": "TildeFullEqual;",
  "8774": "simne;",
  "8775": "NotTildeFullEqual;",
  "8776": "TildeTilde;",
  "8777": "NotTildeTilde;",
  "8778": "approxeq;",
  "8779": "apid;",
  "8780": "bcong;",
  "8781": "CupCap;",
  "8782": "HumpDownHump;",
  "8783": "HumpEqual;",
  "8784": "esdot;",
  "8785": "eDot;",
  "8786": "fallingdotseq;",
  "8787": "risingdotseq;",
  "8788": "coloneq;",
  "8789": "eqcolon;",
  "8790": "eqcirc;",
  "8791": "cire;",
  "8793": "wedgeq;",
  "8794": "veeeq;",
  "8796": "trie;",
  "8799": "questeq;",
  "8800": "NotEqual;",
  "8801": "equiv;",
  "8802": "NotCongruent;",
  "8804": "leq;",
  "8805": "GreaterEqual;",
  "8806": "LessFullEqual;",
  "8807": "GreaterFullEqual;",
  "8808": "lneqq;",
  "8809": "gneqq;",
  "8810": "NestedLessLess;",
  "8811": "NestedGreaterGreater;",
  "8812": "twixt;",
  "8813": "NotCupCap;",
  "8814": "NotLess;",
  "8815": "NotGreater;",
  "8816": "NotLessEqual;",
  "8817": "NotGreaterEqual;",
  "8818": "lsim;",
  "8819": "gtrsim;",
  "8820": "NotLessTilde;",
  "8821": "NotGreaterTilde;",
  "8822": "lg;",
  "8823": "gtrless;",
  "8824": "ntlg;",
  "8825": "ntgl;",
  "8826": "Precedes;",
  "8827": "Succeeds;",
  "8828": "PrecedesSlantEqual;",
  "8829": "SucceedsSlantEqual;",
  "8830": "prsim;",
  "8831": "succsim;",
  "8832": "nprec;",
  "8833": "nsucc;",
  "8834": "subset;",
  "8835": "supset;",
  "8836": "nsub;",
  "8837": "nsup;",
  "8838": "SubsetEqual;",
  "8839": "supseteq;",
  "8840": "nsubseteq;",
  "8841": "nsupseteq;",
  "8842": "subsetneq;",
  "8843": "supsetneq;",
  "8845": "cupdot;",
  "8846": "uplus;",
  "8847": "SquareSubset;",
  "8848": "SquareSuperset;",
  "8849": "SquareSubsetEqual;",
  "8850": "SquareSupersetEqual;",
  "8851": "SquareIntersection;",
  "8852": "SquareUnion;",
  "8853": "oplus;",
  "8854": "ominus;",
  "8855": "otimes;",
  "8856": "osol;",
  "8857": "odot;",
  "8858": "ocir;",
  "8859": "oast;",
  "8861": "odash;",
  "8862": "plusb;",
  "8863": "minusb;",
  "8864": "timesb;",
  "8865": "sdotb;",
  "8866": "vdash;",
  "8867": "LeftTee;",
  "8868": "top;",
  "8869": "UpTee;",
  "8871": "models;",
  "8872": "vDash;",
  "8873": "Vdash;",
  "8874": "Vvdash;",
  "8875": "VDash;",
  "8876": "nvdash;",
  "8877": "nvDash;",
  "8878": "nVdash;",
  "8879": "nVDash;",
  "8880": "prurel;",
  "8882": "vltri;",
  "8883": "vrtri;",
  "8884": "trianglelefteq;",
  "8885": "trianglerighteq;",
  "8886": "origof;",
  "8887": "imof;",
  "8888": "mumap;",
  "8889": "hercon;",
  "8890": "intercal;",
  "8891": "veebar;",
  "8893": "barvee;",
  "8894": "angrtvb;",
  "8895": "lrtri;",
  "8896": "xwedge;",
  "8897": "xvee;",
  "8898": "xcap;",
  "8899": "xcup;",
  "8900": "diamond;",
  "8901": "sdot;",
  "8902": "Star;",
  "8903": "divonx;",
  "8904": "bowtie;",
  "8905": "ltimes;",
  "8906": "rtimes;",
  "8907": "lthree;",
  "8908": "rthree;",
  "8909": "bsime;",
  "8910": "cuvee;",
  "8911": "cuwed;",
  "8912": "Subset;",
  "8913": "Supset;",
  "8914": "Cap;",
  "8915": "Cup;",
  "8916": "pitchfork;",
  "8917": "epar;",
  "8918": "ltdot;",
  "8919": "gtrdot;",
  "8920": "Ll;",
  "8921": "ggg;",
  "8922": "LessEqualGreater;",
  "8923": "gtreqless;",
  "8926": "curlyeqprec;",
  "8927": "curlyeqsucc;",
  "8928": "nprcue;",
  "8929": "nsccue;",
  "8930": "nsqsube;",
  "8931": "nsqsupe;",
  "8934": "lnsim;",
  "8935": "gnsim;",
  "8936": "prnsim;",
  "8937": "succnsim;",
  "8938": "ntriangleleft;",
  "8939": "ntriangleright;",
  "8940": "ntrianglelefteq;",
  "8941": "ntrianglerighteq;",
  "8942": "vellip;",
  "8943": "ctdot;",
  "8944": "utdot;",
  "8945": "dtdot;",
  "8946": "disin;",
  "8947": "isinsv;",
  "8948": "isins;",
  "8949": "isindot;",
  "8950": "notinvc;",
  "8951": "notinvb;",
  "8953": "isinE;",
  "8954": "nisd;",
  "8955": "xnis;",
  "8956": "nis;",
  "8957": "notnivc;",
  "8958": "notnivb;",
  "8965": "barwedge;",
  "8966": "doublebarwedge;",
  "8968": "LeftCeiling;",
  "8969": "RightCeiling;",
  "8970": "lfloor;",
  "8971": "RightFloor;",
  "8972": "drcrop;",
  "8973": "dlcrop;",
  "8974": "urcrop;",
  "8975": "ulcrop;",
  "8976": "bnot;",
  "8978": "profline;",
  "8979": "profsurf;",
  "8981": "telrec;",
  "8982": "target;",
  "8988": "ulcorner;",
  "8989": "urcorner;",
  "8990": "llcorner;",
  "8991": "lrcorner;",
  "8994": "sfrown;",
  "8995": "ssmile;",
  "9005": "cylcty;",
  "9006": "profalar;",
  "9014": "topbot;",
  "9021": "ovbar;",
  "9023": "solbar;",
  "9084": "angzarr;",
  "9136": "lmoustache;",
  "9137": "rmoustache;",
  "9140": "tbrk;",
  "9141": "UnderBracket;",
  "9142": "bbrktbrk;",
  "9180": "OverParenthesis;",
  "9181": "UnderParenthesis;",
  "9182": "OverBrace;",
  "9183": "UnderBrace;",
  "9186": "trpezium;",
  "9191": "elinters;",
  "9251": "blank;",
  "9416": "oS;",
  "9472": "HorizontalLine;",
  "9474": "boxv;",
  "9484": "boxdr;",
  "9488": "boxdl;",
  "9492": "boxur;",
  "9496": "boxul;",
  "9500": "boxvr;",
  "9508": "boxvl;",
  "9516": "boxhd;",
  "9524": "boxhu;",
  "9532": "boxvh;",
  "9552": "boxH;",
  "9553": "boxV;",
  "9554": "boxdR;",
  "9555": "boxDr;",
  "9556": "boxDR;",
  "9557": "boxdL;",
  "9558": "boxDl;",
  "9559": "boxDL;",
  "9560": "boxuR;",
  "9561": "boxUr;",
  "9562": "boxUR;",
  "9563": "boxuL;",
  "9564": "boxUl;",
  "9565": "boxUL;",
  "9566": "boxvR;",
  "9567": "boxVr;",
  "9568": "boxVR;",
  "9569": "boxvL;",
  "9570": "boxVl;",
  "9571": "boxVL;",
  "9572": "boxHd;",
  "9573": "boxhD;",
  "9574": "boxHD;",
  "9575": "boxHu;",
  "9576": "boxhU;",
  "9577": "boxHU;",
  "9578": "boxvH;",
  "9579": "boxVh;",
  "9580": "boxVH;",
  "9600": "uhblk;",
  "9604": "lhblk;",
  "9608": "block;",
  "9617": "blk14;",
  "9618": "blk12;",
  "9619": "blk34;",
  "9633": "square;",
  "9642": "squf;",
  "9643": "EmptyVerySmallSquare;",
  "9645": "rect;",
  "9646": "marker;",
  "9649": "fltns;",
  "9651": "xutri;",
  "9652": "utrif;",
  "9653": "utri;",
  "9656": "rtrif;",
  "9657": "triangleright;",
  "9661": "xdtri;",
  "9662": "dtrif;",
  "9663": "triangledown;",
  "9666": "ltrif;",
  "9667": "triangleleft;",
  "9674": "lozenge;",
  "9675": "cir;",
  "9708": "tridot;",
  "9711": "xcirc;",
  "9720": "ultri;",
  "9721": "urtri;",
  "9722": "lltri;",
  "9723": "EmptySmallSquare;",
  "9724": "FilledSmallSquare;",
  "9733": "starf;",
  "9734": "star;",
  "9742": "phone;",
  "9792": "female;",
  "9794": "male;",
  "9824": "spadesuit;",
  "9827": "clubsuit;",
  "9829": "heartsuit;",
  "9830": "diams;",
  "9834": "sung;",
  "9837": "flat;",
  "9838": "natural;",
  "9839": "sharp;",
  "10003": "checkmark;",
  "10007": "cross;",
  "10016": "maltese;",
  "10038": "sext;",
  "10072": "VerticalSeparator;",
  "10098": "lbbrk;",
  "10099": "rbbrk;",
  "10184": "bsolhsub;",
  "10185": "suphsol;",
  "10214": "lobrk;",
  "10215": "robrk;",
  "10216": "LeftAngleBracket;",
  "10217": "RightAngleBracket;",
  "10218": "Lang;",
  "10219": "Rang;",
  "10220": "loang;",
  "10221": "roang;",
  "10229": "xlarr;",
  "10230": "xrarr;",
  "10231": "xharr;",
  "10232": "xlArr;",
  "10233": "xrArr;",
  "10234": "xhArr;",
  "10236": "xmap;",
  "10239": "dzigrarr;",
  "10498": "nvlArr;",
  "10499": "nvrArr;",
  "10500": "nvHarr;",
  "10501": "Map;",
  "10508": "lbarr;",
  "10509": "rbarr;",
  "10510": "lBarr;",
  "10511": "rBarr;",
  "10512": "RBarr;",
  "10513": "DDotrahd;",
  "10514": "UpArrowBar;",
  "10515": "DownArrowBar;",
  "10518": "Rarrtl;",
  "10521": "latail;",
  "10522": "ratail;",
  "10523": "lAtail;",
  "10524": "rAtail;",
  "10525": "larrfs;",
  "10526": "rarrfs;",
  "10527": "larrbfs;",
  "10528": "rarrbfs;",
  "10531": "nwarhk;",
  "10532": "nearhk;",
  "10533": "searhk;",
  "10534": "swarhk;",
  "10535": "nwnear;",
  "10536": "toea;",
  "10537": "tosa;",
  "10538": "swnwar;",
  "10547": "rarrc;",
  "10549": "cudarrr;",
  "10550": "ldca;",
  "10551": "rdca;",
  "10552": "cudarrl;",
  "10553": "larrpl;",
  "10556": "curarrm;",
  "10557": "cularrp;",
  "10565": "rarrpl;",
  "10568": "harrcir;",
  "10569": "Uarrocir;",
  "10570": "lurdshar;",
  "10571": "ldrushar;",
  "10574": "LeftRightVector;",
  "10575": "RightUpDownVector;",
  "10576": "DownLeftRightVector;",
  "10577": "LeftUpDownVector;",
  "10578": "LeftVectorBar;",
  "10579": "RightVectorBar;",
  "10580": "RightUpVectorBar;",
  "10581": "RightDownVectorBar;",
  "10582": "DownLeftVectorBar;",
  "10583": "DownRightVectorBar;",
  "10584": "LeftUpVectorBar;",
  "10585": "LeftDownVectorBar;",
  "10586": "LeftTeeVector;",
  "10587": "RightTeeVector;",
  "10588": "RightUpTeeVector;",
  "10589": "RightDownTeeVector;",
  "10590": "DownLeftTeeVector;",
  "10591": "DownRightTeeVector;",
  "10592": "LeftUpTeeVector;",
  "10593": "LeftDownTeeVector;",
  "10594": "lHar;",
  "10595": "uHar;",
  "10596": "rHar;",
  "10597": "dHar;",
  "10598": "luruhar;",
  "10599": "ldrdhar;",
  "10600": "ruluhar;",
  "10601": "rdldhar;",
  "10602": "lharul;",
  "10603": "llhard;",
  "10604": "rharul;",
  "10605": "lrhard;",
  "10606": "UpEquilibrium;",
  "10607": "ReverseUpEquilibrium;",
  "10608": "RoundImplies;",
  "10609": "erarr;",
  "10610": "simrarr;",
  "10611": "larrsim;",
  "10612": "rarrsim;",
  "10613": "rarrap;",
  "10614": "ltlarr;",
  "10616": "gtrarr;",
  "10617": "subrarr;",
  "10619": "suplarr;",
  "10620": "lfisht;",
  "10621": "rfisht;",
  "10622": "ufisht;",
  "10623": "dfisht;",
  "10629": "lopar;",
  "10630": "ropar;",
  "10635": "lbrke;",
  "10636": "rbrke;",
  "10637": "lbrkslu;",
  "10638": "rbrksld;",
  "10639": "lbrksld;",
  "10640": "rbrkslu;",
  "10641": "langd;",
  "10642": "rangd;",
  "10643": "lparlt;",
  "10644": "rpargt;",
  "10645": "gtlPar;",
  "10646": "ltrPar;",
  "10650": "vzigzag;",
  "10652": "vangrt;",
  "10653": "angrtvbd;",
  "10660": "ange;",
  "10661": "range;",
  "10662": "dwangle;",
  "10663": "uwangle;",
  "10664": "angmsdaa;",
  "10665": "angmsdab;",
  "10666": "angmsdac;",
  "10667": "angmsdad;",
  "10668": "angmsdae;",
  "10669": "angmsdaf;",
  "10670": "angmsdag;",
  "10671": "angmsdah;",
  "10672": "bemptyv;",
  "10673": "demptyv;",
  "10674": "cemptyv;",
  "10675": "raemptyv;",
  "10676": "laemptyv;",
  "10677": "ohbar;",
  "10678": "omid;",
  "10679": "opar;",
  "10681": "operp;",
  "10683": "olcross;",
  "10684": "odsold;",
  "10686": "olcir;",
  "10687": "ofcir;",
  "10688": "olt;",
  "10689": "ogt;",
  "10690": "cirscir;",
  "10691": "cirE;",
  "10692": "solb;",
  "10693": "bsolb;",
  "10697": "boxbox;",
  "10701": "trisb;",
  "10702": "rtriltri;",
  "10703": "LeftTriangleBar;",
  "10704": "RightTriangleBar;",
  "10716": "iinfin;",
  "10717": "infintie;",
  "10718": "nvinfin;",
  "10723": "eparsl;",
  "10724": "smeparsl;",
  "10725": "eqvparsl;",
  "10731": "lozf;",
  "10740": "RuleDelayed;",
  "10742": "dsol;",
  "10752": "xodot;",
  "10753": "xoplus;",
  "10754": "xotime;",
  "10756": "xuplus;",
  "10758": "xsqcup;",
  "10764": "qint;",
  "10765": "fpartint;",
  "10768": "cirfnint;",
  "10769": "awint;",
  "10770": "rppolint;",
  "10771": "scpolint;",
  "10772": "npolint;",
  "10773": "pointint;",
  "10774": "quatint;",
  "10775": "intlarhk;",
  "10786": "pluscir;",
  "10787": "plusacir;",
  "10788": "simplus;",
  "10789": "plusdu;",
  "10790": "plussim;",
  "10791": "plustwo;",
  "10793": "mcomma;",
  "10794": "minusdu;",
  "10797": "loplus;",
  "10798": "roplus;",
  "10799": "Cross;",
  "10800": "timesd;",
  "10801": "timesbar;",
  "10803": "smashp;",
  "10804": "lotimes;",
  "10805": "rotimes;",
  "10806": "otimesas;",
  "10807": "Otimes;",
  "10808": "odiv;",
  "10809": "triplus;",
  "10810": "triminus;",
  "10811": "tritime;",
  "10812": "iprod;",
  "10815": "amalg;",
  "10816": "capdot;",
  "10818": "ncup;",
  "10819": "ncap;",
  "10820": "capand;",
  "10821": "cupor;",
  "10822": "cupcap;",
  "10823": "capcup;",
  "10824": "cupbrcap;",
  "10825": "capbrcup;",
  "10826": "cupcup;",
  "10827": "capcap;",
  "10828": "ccups;",
  "10829": "ccaps;",
  "10832": "ccupssm;",
  "10835": "And;",
  "10836": "Or;",
  "10837": "andand;",
  "10838": "oror;",
  "10839": "orslope;",
  "10840": "andslope;",
  "10842": "andv;",
  "10843": "orv;",
  "10844": "andd;",
  "10845": "ord;",
  "10847": "wedbar;",
  "10854": "sdote;",
  "10858": "simdot;",
  "10861": "congdot;",
  "10862": "easter;",
  "10863": "apacir;",
  "10864": "apE;",
  "10865": "eplus;",
  "10866": "pluse;",
  "10867": "Esim;",
  "10868": "Colone;",
  "10869": "Equal;",
  "10871": "eDDot;",
  "10872": "equivDD;",
  "10873": "ltcir;",
  "10874": "gtcir;",
  "10875": "ltquest;",
  "10876": "gtquest;",
  "10877": "LessSlantEqual;",
  "10878": "GreaterSlantEqual;",
  "10879": "lesdot;",
  "10880": "gesdot;",
  "10881": "lesdoto;",
  "10882": "gesdoto;",
  "10883": "lesdotor;",
  "10884": "gesdotol;",
  "10885": "lessapprox;",
  "10886": "gtrapprox;",
  "10887": "lneq;",
  "10888": "gneq;",
  "10889": "lnapprox;",
  "10890": "gnapprox;",
  "10891": "lesseqqgtr;",
  "10892": "gtreqqless;",
  "10893": "lsime;",
  "10894": "gsime;",
  "10895": "lsimg;",
  "10896": "gsiml;",
  "10897": "lgE;",
  "10898": "glE;",
  "10899": "lesges;",
  "10900": "gesles;",
  "10901": "eqslantless;",
  "10902": "eqslantgtr;",
  "10903": "elsdot;",
  "10904": "egsdot;",
  "10905": "el;",
  "10906": "eg;",
  "10909": "siml;",
  "10910": "simg;",
  "10911": "simlE;",
  "10912": "simgE;",
  "10913": "LessLess;",
  "10914": "GreaterGreater;",
  "10916": "glj;",
  "10917": "gla;",
  "10918": "ltcc;",
  "10919": "gtcc;",
  "10920": "lescc;",
  "10921": "gescc;",
  "10922": "smt;",
  "10923": "lat;",
  "10924": "smte;",
  "10925": "late;",
  "10926": "bumpE;",
  "10927": "preceq;",
  "10928": "succeq;",
  "10931": "prE;",
  "10932": "scE;",
  "10933": "prnE;",
  "10934": "succneqq;",
  "10935": "precapprox;",
  "10936": "succapprox;",
  "10937": "prnap;",
  "10938": "succnapprox;",
  "10939": "Pr;",
  "10940": "Sc;",
  "10941": "subdot;",
  "10942": "supdot;",
  "10943": "subplus;",
  "10944": "supplus;",
  "10945": "submult;",
  "10946": "supmult;",
  "10947": "subedot;",
  "10948": "supedot;",
  "10949": "subseteqq;",
  "10950": "supseteqq;",
  "10951": "subsim;",
  "10952": "supsim;",
  "10955": "subsetneqq;",
  "10956": "supsetneqq;",
  "10959": "csub;",
  "10960": "csup;",
  "10961": "csube;",
  "10962": "csupe;",
  "10963": "subsup;",
  "10964": "supsub;",
  "10965": "subsub;",
  "10966": "supsup;",
  "10967": "suphsub;",
  "10968": "supdsub;",
  "10969": "forkv;",
  "10970": "topfork;",
  "10971": "mlcp;",
  "10980": "DoubleLeftTee;",
  "10982": "Vdashl;",
  "10983": "Barv;",
  "10984": "vBar;",
  "10985": "vBarv;",
  "10987": "Vbar;",
  "10988": "Not;",
  "10989": "bNot;",
  "10990": "rnmid;",
  "10991": "cirmid;",
  "10992": "midcir;",
  "10993": "topcir;",
  "10994": "nhpar;",
  "10995": "parsim;",
  "11005": "parsl;",
  "64256": "fflig;",
  "64257": "filig;",
  "64258": "fllig;",
  "64259": "ffilig;",
  "64260": "ffllig;"
};

var reversed$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': reversed
});

var revEntities = getCjsExportFromNamespace(reversed$1);

var encode_1$1 = encode$1;

function encode$1 (str, opts) {
    if (typeof str !== 'string') {
        throw new TypeError('Expected a String');
    }
    if (!opts) opts = {};

    var numeric = true;
    if (opts.named) numeric = false;
    if (opts.numeric !== undefined) numeric = opts.numeric;

    var special = opts.special || {
        '"': true, "'": true,
        '<': true, '>': true,
        '&': true
    };

    var codePoints = punycode.ucs2.decode(str);
    var chars = [];
    for (var i = 0; i < codePoints.length; i++) {
        var cc = codePoints[i];
        var c = punycode.ucs2.encode([ cc ]);
        var e = revEntities[cc];
        if (e && (cc >= 127 || special[c]) && !numeric) {
            chars.push('&' + (/;$/.test(e) ? e : e + ';'));
        }
        else if (cc < 32 || cc >= 127 || special[c]) {
            chars.push('&#' + cc + ';');
        }
        else {
            chars.push(c);
        }
    }
    return chars.join('');
}

const Aacute$4 = "Á";
const aacute$4 = "á";
const Acirc$4 = "Â";
const acirc$4 = "â";
const acute$4 = "´";
const AElig$4 = "Æ";
const aelig$4 = "æ";
const Agrave$4 = "À";
const agrave$4 = "à";
const AMP$4 = "&";
const amp$6 = "&";
const Aring$4 = "Å";
const aring$4 = "å";
const Atilde$4 = "Ã";
const atilde$4 = "ã";
const Auml$4 = "Ä";
const auml$4 = "ä";
const brvbar$4 = "¦";
const Ccedil$4 = "Ç";
const ccedil$4 = "ç";
const cedil$4 = "¸";
const cent$4 = "¢";
const COPY$4 = "©";
const copy$4 = "©";
const curren$4 = "¤";
const deg$4 = "°";
const divide$4 = "÷";
const Eacute$4 = "É";
const eacute$4 = "é";
const Ecirc$4 = "Ê";
const ecirc$4 = "ê";
const Egrave$4 = "È";
const egrave$4 = "è";
const ETH$4 = "Ð";
const eth$4 = "ð";
const Euml$4 = "Ë";
const euml$4 = "ë";
const frac12$4 = "½";
const frac14$4 = "¼";
const frac34$4 = "¾";
const GT$4 = ">";
const gt$6 = ">";
const Iacute$4 = "Í";
const iacute$4 = "í";
const Icirc$4 = "Î";
const icirc$4 = "î";
const iexcl$4 = "¡";
const Igrave$4 = "Ì";
const igrave$4 = "ì";
const iquest$4 = "¿";
const Iuml$4 = "Ï";
const iuml$4 = "ï";
const laquo$4 = "«";
const LT$4 = "<";
const lt$6 = "<";
const macr$4 = "¯";
const micro$4 = "µ";
const middot$4 = "·";
const nbsp$4 = " ";
const not$4 = "¬";
const Ntilde$4 = "Ñ";
const ntilde$4 = "ñ";
const Oacute$4 = "Ó";
const oacute$4 = "ó";
const Ocirc$4 = "Ô";
const ocirc$4 = "ô";
const Ograve$4 = "Ò";
const ograve$4 = "ò";
const ordf$4 = "ª";
const ordm$4 = "º";
const Oslash$4 = "Ø";
const oslash$4 = "ø";
const Otilde$4 = "Õ";
const otilde$4 = "õ";
const Ouml$4 = "Ö";
const ouml$4 = "ö";
const para$4 = "¶";
const plusmn$4 = "±";
const pound$4 = "£";
const QUOT$4 = "\"";
const quot$6 = "\"";
const raquo$4 = "»";
const REG$4 = "®";
const reg$4 = "®";
const sect$4 = "§";
const shy$4 = "­";
const sup1$4 = "¹";
const sup2$4 = "²";
const sup3$4 = "³";
const szlig$4 = "ß";
const THORN$4 = "Þ";
const thorn$4 = "þ";
const times$4 = "×";
const Uacute$4 = "Ú";
const uacute$4 = "ú";
const Ucirc$4 = "Û";
const ucirc$4 = "û";
const Ugrave$4 = "Ù";
const ugrave$4 = "ù";
const uml$4 = "¨";
const Uuml$4 = "Ü";
const uuml$4 = "ü";
const Yacute$4 = "Ý";
const yacute$4 = "ý";
const yen$4 = "¥";
const yuml$4 = "ÿ";
var entities$4 = {
  "Aacute;": "Á",
  Aacute: Aacute$4,
  "aacute;": "á",
  aacute: aacute$4,
  "Abreve;": "Ă",
  "abreve;": "ă",
  "ac;": "∾",
  "acd;": "∿",
  "acE;": "∾̳",
  "Acirc;": "Â",
  Acirc: Acirc$4,
  "acirc;": "â",
  acirc: acirc$4,
  "acute;": "´",
  acute: acute$4,
  "Acy;": "А",
  "acy;": "а",
  "AElig;": "Æ",
  AElig: AElig$4,
  "aelig;": "æ",
  aelig: aelig$4,
  "af;": "⁡",
  "Afr;": "𝔄",
  "afr;": "𝔞",
  "Agrave;": "À",
  Agrave: Agrave$4,
  "agrave;": "à",
  agrave: agrave$4,
  "alefsym;": "ℵ",
  "aleph;": "ℵ",
  "Alpha;": "Α",
  "alpha;": "α",
  "Amacr;": "Ā",
  "amacr;": "ā",
  "amalg;": "⨿",
  "AMP;": "&",
  AMP: AMP$4,
  "amp;": "&",
  amp: amp$6,
  "And;": "⩓",
  "and;": "∧",
  "andand;": "⩕",
  "andd;": "⩜",
  "andslope;": "⩘",
  "andv;": "⩚",
  "ang;": "∠",
  "ange;": "⦤",
  "angle;": "∠",
  "angmsd;": "∡",
  "angmsdaa;": "⦨",
  "angmsdab;": "⦩",
  "angmsdac;": "⦪",
  "angmsdad;": "⦫",
  "angmsdae;": "⦬",
  "angmsdaf;": "⦭",
  "angmsdag;": "⦮",
  "angmsdah;": "⦯",
  "angrt;": "∟",
  "angrtvb;": "⊾",
  "angrtvbd;": "⦝",
  "angsph;": "∢",
  "angst;": "Å",
  "angzarr;": "⍼",
  "Aogon;": "Ą",
  "aogon;": "ą",
  "Aopf;": "𝔸",
  "aopf;": "𝕒",
  "ap;": "≈",
  "apacir;": "⩯",
  "apE;": "⩰",
  "ape;": "≊",
  "apid;": "≋",
  "apos;": "'",
  "ApplyFunction;": "⁡",
  "approx;": "≈",
  "approxeq;": "≊",
  "Aring;": "Å",
  Aring: Aring$4,
  "aring;": "å",
  aring: aring$4,
  "Ascr;": "𝒜",
  "ascr;": "𝒶",
  "Assign;": "≔",
  "ast;": "*",
  "asymp;": "≈",
  "asympeq;": "≍",
  "Atilde;": "Ã",
  Atilde: Atilde$4,
  "atilde;": "ã",
  atilde: atilde$4,
  "Auml;": "Ä",
  Auml: Auml$4,
  "auml;": "ä",
  auml: auml$4,
  "awconint;": "∳",
  "awint;": "⨑",
  "backcong;": "≌",
  "backepsilon;": "϶",
  "backprime;": "‵",
  "backsim;": "∽",
  "backsimeq;": "⋍",
  "Backslash;": "∖",
  "Barv;": "⫧",
  "barvee;": "⊽",
  "Barwed;": "⌆",
  "barwed;": "⌅",
  "barwedge;": "⌅",
  "bbrk;": "⎵",
  "bbrktbrk;": "⎶",
  "bcong;": "≌",
  "Bcy;": "Б",
  "bcy;": "б",
  "bdquo;": "„",
  "becaus;": "∵",
  "Because;": "∵",
  "because;": "∵",
  "bemptyv;": "⦰",
  "bepsi;": "϶",
  "bernou;": "ℬ",
  "Bernoullis;": "ℬ",
  "Beta;": "Β",
  "beta;": "β",
  "beth;": "ℶ",
  "between;": "≬",
  "Bfr;": "𝔅",
  "bfr;": "𝔟",
  "bigcap;": "⋂",
  "bigcirc;": "◯",
  "bigcup;": "⋃",
  "bigodot;": "⨀",
  "bigoplus;": "⨁",
  "bigotimes;": "⨂",
  "bigsqcup;": "⨆",
  "bigstar;": "★",
  "bigtriangledown;": "▽",
  "bigtriangleup;": "△",
  "biguplus;": "⨄",
  "bigvee;": "⋁",
  "bigwedge;": "⋀",
  "bkarow;": "⤍",
  "blacklozenge;": "⧫",
  "blacksquare;": "▪",
  "blacktriangle;": "▴",
  "blacktriangledown;": "▾",
  "blacktriangleleft;": "◂",
  "blacktriangleright;": "▸",
  "blank;": "␣",
  "blk12;": "▒",
  "blk14;": "░",
  "blk34;": "▓",
  "block;": "█",
  "bne;": "=⃥",
  "bnequiv;": "≡⃥",
  "bNot;": "⫭",
  "bnot;": "⌐",
  "Bopf;": "𝔹",
  "bopf;": "𝕓",
  "bot;": "⊥",
  "bottom;": "⊥",
  "bowtie;": "⋈",
  "boxbox;": "⧉",
  "boxDL;": "╗",
  "boxDl;": "╖",
  "boxdL;": "╕",
  "boxdl;": "┐",
  "boxDR;": "╔",
  "boxDr;": "╓",
  "boxdR;": "╒",
  "boxdr;": "┌",
  "boxH;": "═",
  "boxh;": "─",
  "boxHD;": "╦",
  "boxHd;": "╤",
  "boxhD;": "╥",
  "boxhd;": "┬",
  "boxHU;": "╩",
  "boxHu;": "╧",
  "boxhU;": "╨",
  "boxhu;": "┴",
  "boxminus;": "⊟",
  "boxplus;": "⊞",
  "boxtimes;": "⊠",
  "boxUL;": "╝",
  "boxUl;": "╜",
  "boxuL;": "╛",
  "boxul;": "┘",
  "boxUR;": "╚",
  "boxUr;": "╙",
  "boxuR;": "╘",
  "boxur;": "└",
  "boxV;": "║",
  "boxv;": "│",
  "boxVH;": "╬",
  "boxVh;": "╫",
  "boxvH;": "╪",
  "boxvh;": "┼",
  "boxVL;": "╣",
  "boxVl;": "╢",
  "boxvL;": "╡",
  "boxvl;": "┤",
  "boxVR;": "╠",
  "boxVr;": "╟",
  "boxvR;": "╞",
  "boxvr;": "├",
  "bprime;": "‵",
  "Breve;": "˘",
  "breve;": "˘",
  "brvbar;": "¦",
  brvbar: brvbar$4,
  "Bscr;": "ℬ",
  "bscr;": "𝒷",
  "bsemi;": "⁏",
  "bsim;": "∽",
  "bsime;": "⋍",
  "bsol;": "\\",
  "bsolb;": "⧅",
  "bsolhsub;": "⟈",
  "bull;": "•",
  "bullet;": "•",
  "bump;": "≎",
  "bumpE;": "⪮",
  "bumpe;": "≏",
  "Bumpeq;": "≎",
  "bumpeq;": "≏",
  "Cacute;": "Ć",
  "cacute;": "ć",
  "Cap;": "⋒",
  "cap;": "∩",
  "capand;": "⩄",
  "capbrcup;": "⩉",
  "capcap;": "⩋",
  "capcup;": "⩇",
  "capdot;": "⩀",
  "CapitalDifferentialD;": "ⅅ",
  "caps;": "∩︀",
  "caret;": "⁁",
  "caron;": "ˇ",
  "Cayleys;": "ℭ",
  "ccaps;": "⩍",
  "Ccaron;": "Č",
  "ccaron;": "č",
  "Ccedil;": "Ç",
  Ccedil: Ccedil$4,
  "ccedil;": "ç",
  ccedil: ccedil$4,
  "Ccirc;": "Ĉ",
  "ccirc;": "ĉ",
  "Cconint;": "∰",
  "ccups;": "⩌",
  "ccupssm;": "⩐",
  "Cdot;": "Ċ",
  "cdot;": "ċ",
  "cedil;": "¸",
  cedil: cedil$4,
  "Cedilla;": "¸",
  "cemptyv;": "⦲",
  "cent;": "¢",
  cent: cent$4,
  "CenterDot;": "·",
  "centerdot;": "·",
  "Cfr;": "ℭ",
  "cfr;": "𝔠",
  "CHcy;": "Ч",
  "chcy;": "ч",
  "check;": "✓",
  "checkmark;": "✓",
  "Chi;": "Χ",
  "chi;": "χ",
  "cir;": "○",
  "circ;": "ˆ",
  "circeq;": "≗",
  "circlearrowleft;": "↺",
  "circlearrowright;": "↻",
  "circledast;": "⊛",
  "circledcirc;": "⊚",
  "circleddash;": "⊝",
  "CircleDot;": "⊙",
  "circledR;": "®",
  "circledS;": "Ⓢ",
  "CircleMinus;": "⊖",
  "CirclePlus;": "⊕",
  "CircleTimes;": "⊗",
  "cirE;": "⧃",
  "cire;": "≗",
  "cirfnint;": "⨐",
  "cirmid;": "⫯",
  "cirscir;": "⧂",
  "ClockwiseContourIntegral;": "∲",
  "CloseCurlyDoubleQuote;": "”",
  "CloseCurlyQuote;": "’",
  "clubs;": "♣",
  "clubsuit;": "♣",
  "Colon;": "∷",
  "colon;": ":",
  "Colone;": "⩴",
  "colone;": "≔",
  "coloneq;": "≔",
  "comma;": ",",
  "commat;": "@",
  "comp;": "∁",
  "compfn;": "∘",
  "complement;": "∁",
  "complexes;": "ℂ",
  "cong;": "≅",
  "congdot;": "⩭",
  "Congruent;": "≡",
  "Conint;": "∯",
  "conint;": "∮",
  "ContourIntegral;": "∮",
  "Copf;": "ℂ",
  "copf;": "𝕔",
  "coprod;": "∐",
  "Coproduct;": "∐",
  "COPY;": "©",
  COPY: COPY$4,
  "copy;": "©",
  copy: copy$4,
  "copysr;": "℗",
  "CounterClockwiseContourIntegral;": "∳",
  "crarr;": "↵",
  "Cross;": "⨯",
  "cross;": "✗",
  "Cscr;": "𝒞",
  "cscr;": "𝒸",
  "csub;": "⫏",
  "csube;": "⫑",
  "csup;": "⫐",
  "csupe;": "⫒",
  "ctdot;": "⋯",
  "cudarrl;": "⤸",
  "cudarrr;": "⤵",
  "cuepr;": "⋞",
  "cuesc;": "⋟",
  "cularr;": "↶",
  "cularrp;": "⤽",
  "Cup;": "⋓",
  "cup;": "∪",
  "cupbrcap;": "⩈",
  "CupCap;": "≍",
  "cupcap;": "⩆",
  "cupcup;": "⩊",
  "cupdot;": "⊍",
  "cupor;": "⩅",
  "cups;": "∪︀",
  "curarr;": "↷",
  "curarrm;": "⤼",
  "curlyeqprec;": "⋞",
  "curlyeqsucc;": "⋟",
  "curlyvee;": "⋎",
  "curlywedge;": "⋏",
  "curren;": "¤",
  curren: curren$4,
  "curvearrowleft;": "↶",
  "curvearrowright;": "↷",
  "cuvee;": "⋎",
  "cuwed;": "⋏",
  "cwconint;": "∲",
  "cwint;": "∱",
  "cylcty;": "⌭",
  "Dagger;": "‡",
  "dagger;": "†",
  "daleth;": "ℸ",
  "Darr;": "↡",
  "dArr;": "⇓",
  "darr;": "↓",
  "dash;": "‐",
  "Dashv;": "⫤",
  "dashv;": "⊣",
  "dbkarow;": "⤏",
  "dblac;": "˝",
  "Dcaron;": "Ď",
  "dcaron;": "ď",
  "Dcy;": "Д",
  "dcy;": "д",
  "DD;": "ⅅ",
  "dd;": "ⅆ",
  "ddagger;": "‡",
  "ddarr;": "⇊",
  "DDotrahd;": "⤑",
  "ddotseq;": "⩷",
  "deg;": "°",
  deg: deg$4,
  "Del;": "∇",
  "Delta;": "Δ",
  "delta;": "δ",
  "demptyv;": "⦱",
  "dfisht;": "⥿",
  "Dfr;": "𝔇",
  "dfr;": "𝔡",
  "dHar;": "⥥",
  "dharl;": "⇃",
  "dharr;": "⇂",
  "DiacriticalAcute;": "´",
  "DiacriticalDot;": "˙",
  "DiacriticalDoubleAcute;": "˝",
  "DiacriticalGrave;": "`",
  "DiacriticalTilde;": "˜",
  "diam;": "⋄",
  "Diamond;": "⋄",
  "diamond;": "⋄",
  "diamondsuit;": "♦",
  "diams;": "♦",
  "die;": "¨",
  "DifferentialD;": "ⅆ",
  "digamma;": "ϝ",
  "disin;": "⋲",
  "div;": "÷",
  "divide;": "÷",
  divide: divide$4,
  "divideontimes;": "⋇",
  "divonx;": "⋇",
  "DJcy;": "Ђ",
  "djcy;": "ђ",
  "dlcorn;": "⌞",
  "dlcrop;": "⌍",
  "dollar;": "$",
  "Dopf;": "𝔻",
  "dopf;": "𝕕",
  "Dot;": "¨",
  "dot;": "˙",
  "DotDot;": "⃜",
  "doteq;": "≐",
  "doteqdot;": "≑",
  "DotEqual;": "≐",
  "dotminus;": "∸",
  "dotplus;": "∔",
  "dotsquare;": "⊡",
  "doublebarwedge;": "⌆",
  "DoubleContourIntegral;": "∯",
  "DoubleDot;": "¨",
  "DoubleDownArrow;": "⇓",
  "DoubleLeftArrow;": "⇐",
  "DoubleLeftRightArrow;": "⇔",
  "DoubleLeftTee;": "⫤",
  "DoubleLongLeftArrow;": "⟸",
  "DoubleLongLeftRightArrow;": "⟺",
  "DoubleLongRightArrow;": "⟹",
  "DoubleRightArrow;": "⇒",
  "DoubleRightTee;": "⊨",
  "DoubleUpArrow;": "⇑",
  "DoubleUpDownArrow;": "⇕",
  "DoubleVerticalBar;": "∥",
  "DownArrow;": "↓",
  "Downarrow;": "⇓",
  "downarrow;": "↓",
  "DownArrowBar;": "⤓",
  "DownArrowUpArrow;": "⇵",
  "DownBreve;": "̑",
  "downdownarrows;": "⇊",
  "downharpoonleft;": "⇃",
  "downharpoonright;": "⇂",
  "DownLeftRightVector;": "⥐",
  "DownLeftTeeVector;": "⥞",
  "DownLeftVector;": "↽",
  "DownLeftVectorBar;": "⥖",
  "DownRightTeeVector;": "⥟",
  "DownRightVector;": "⇁",
  "DownRightVectorBar;": "⥗",
  "DownTee;": "⊤",
  "DownTeeArrow;": "↧",
  "drbkarow;": "⤐",
  "drcorn;": "⌟",
  "drcrop;": "⌌",
  "Dscr;": "𝒟",
  "dscr;": "𝒹",
  "DScy;": "Ѕ",
  "dscy;": "ѕ",
  "dsol;": "⧶",
  "Dstrok;": "Đ",
  "dstrok;": "đ",
  "dtdot;": "⋱",
  "dtri;": "▿",
  "dtrif;": "▾",
  "duarr;": "⇵",
  "duhar;": "⥯",
  "dwangle;": "⦦",
  "DZcy;": "Џ",
  "dzcy;": "џ",
  "dzigrarr;": "⟿",
  "Eacute;": "É",
  Eacute: Eacute$4,
  "eacute;": "é",
  eacute: eacute$4,
  "easter;": "⩮",
  "Ecaron;": "Ě",
  "ecaron;": "ě",
  "ecir;": "≖",
  "Ecirc;": "Ê",
  Ecirc: Ecirc$4,
  "ecirc;": "ê",
  ecirc: ecirc$4,
  "ecolon;": "≕",
  "Ecy;": "Э",
  "ecy;": "э",
  "eDDot;": "⩷",
  "Edot;": "Ė",
  "eDot;": "≑",
  "edot;": "ė",
  "ee;": "ⅇ",
  "efDot;": "≒",
  "Efr;": "𝔈",
  "efr;": "𝔢",
  "eg;": "⪚",
  "Egrave;": "È",
  Egrave: Egrave$4,
  "egrave;": "è",
  egrave: egrave$4,
  "egs;": "⪖",
  "egsdot;": "⪘",
  "el;": "⪙",
  "Element;": "∈",
  "elinters;": "⏧",
  "ell;": "ℓ",
  "els;": "⪕",
  "elsdot;": "⪗",
  "Emacr;": "Ē",
  "emacr;": "ē",
  "empty;": "∅",
  "emptyset;": "∅",
  "EmptySmallSquare;": "◻",
  "emptyv;": "∅",
  "EmptyVerySmallSquare;": "▫",
  "emsp;": " ",
  "emsp13;": " ",
  "emsp14;": " ",
  "ENG;": "Ŋ",
  "eng;": "ŋ",
  "ensp;": " ",
  "Eogon;": "Ę",
  "eogon;": "ę",
  "Eopf;": "𝔼",
  "eopf;": "𝕖",
  "epar;": "⋕",
  "eparsl;": "⧣",
  "eplus;": "⩱",
  "epsi;": "ε",
  "Epsilon;": "Ε",
  "epsilon;": "ε",
  "epsiv;": "ϵ",
  "eqcirc;": "≖",
  "eqcolon;": "≕",
  "eqsim;": "≂",
  "eqslantgtr;": "⪖",
  "eqslantless;": "⪕",
  "Equal;": "⩵",
  "equals;": "=",
  "EqualTilde;": "≂",
  "equest;": "≟",
  "Equilibrium;": "⇌",
  "equiv;": "≡",
  "equivDD;": "⩸",
  "eqvparsl;": "⧥",
  "erarr;": "⥱",
  "erDot;": "≓",
  "Escr;": "ℰ",
  "escr;": "ℯ",
  "esdot;": "≐",
  "Esim;": "⩳",
  "esim;": "≂",
  "Eta;": "Η",
  "eta;": "η",
  "ETH;": "Ð",
  ETH: ETH$4,
  "eth;": "ð",
  eth: eth$4,
  "Euml;": "Ë",
  Euml: Euml$4,
  "euml;": "ë",
  euml: euml$4,
  "euro;": "€",
  "excl;": "!",
  "exist;": "∃",
  "Exists;": "∃",
  "expectation;": "ℰ",
  "ExponentialE;": "ⅇ",
  "exponentiale;": "ⅇ",
  "fallingdotseq;": "≒",
  "Fcy;": "Ф",
  "fcy;": "ф",
  "female;": "♀",
  "ffilig;": "ﬃ",
  "fflig;": "ﬀ",
  "ffllig;": "ﬄ",
  "Ffr;": "𝔉",
  "ffr;": "𝔣",
  "filig;": "ﬁ",
  "FilledSmallSquare;": "◼",
  "FilledVerySmallSquare;": "▪",
  "fjlig;": "fj",
  "flat;": "♭",
  "fllig;": "ﬂ",
  "fltns;": "▱",
  "fnof;": "ƒ",
  "Fopf;": "𝔽",
  "fopf;": "𝕗",
  "ForAll;": "∀",
  "forall;": "∀",
  "fork;": "⋔",
  "forkv;": "⫙",
  "Fouriertrf;": "ℱ",
  "fpartint;": "⨍",
  "frac12;": "½",
  frac12: frac12$4,
  "frac13;": "⅓",
  "frac14;": "¼",
  frac14: frac14$4,
  "frac15;": "⅕",
  "frac16;": "⅙",
  "frac18;": "⅛",
  "frac23;": "⅔",
  "frac25;": "⅖",
  "frac34;": "¾",
  frac34: frac34$4,
  "frac35;": "⅗",
  "frac38;": "⅜",
  "frac45;": "⅘",
  "frac56;": "⅚",
  "frac58;": "⅝",
  "frac78;": "⅞",
  "frasl;": "⁄",
  "frown;": "⌢",
  "Fscr;": "ℱ",
  "fscr;": "𝒻",
  "gacute;": "ǵ",
  "Gamma;": "Γ",
  "gamma;": "γ",
  "Gammad;": "Ϝ",
  "gammad;": "ϝ",
  "gap;": "⪆",
  "Gbreve;": "Ğ",
  "gbreve;": "ğ",
  "Gcedil;": "Ģ",
  "Gcirc;": "Ĝ",
  "gcirc;": "ĝ",
  "Gcy;": "Г",
  "gcy;": "г",
  "Gdot;": "Ġ",
  "gdot;": "ġ",
  "gE;": "≧",
  "ge;": "≥",
  "gEl;": "⪌",
  "gel;": "⋛",
  "geq;": "≥",
  "geqq;": "≧",
  "geqslant;": "⩾",
  "ges;": "⩾",
  "gescc;": "⪩",
  "gesdot;": "⪀",
  "gesdoto;": "⪂",
  "gesdotol;": "⪄",
  "gesl;": "⋛︀",
  "gesles;": "⪔",
  "Gfr;": "𝔊",
  "gfr;": "𝔤",
  "Gg;": "⋙",
  "gg;": "≫",
  "ggg;": "⋙",
  "gimel;": "ℷ",
  "GJcy;": "Ѓ",
  "gjcy;": "ѓ",
  "gl;": "≷",
  "gla;": "⪥",
  "glE;": "⪒",
  "glj;": "⪤",
  "gnap;": "⪊",
  "gnapprox;": "⪊",
  "gnE;": "≩",
  "gne;": "⪈",
  "gneq;": "⪈",
  "gneqq;": "≩",
  "gnsim;": "⋧",
  "Gopf;": "𝔾",
  "gopf;": "𝕘",
  "grave;": "`",
  "GreaterEqual;": "≥",
  "GreaterEqualLess;": "⋛",
  "GreaterFullEqual;": "≧",
  "GreaterGreater;": "⪢",
  "GreaterLess;": "≷",
  "GreaterSlantEqual;": "⩾",
  "GreaterTilde;": "≳",
  "Gscr;": "𝒢",
  "gscr;": "ℊ",
  "gsim;": "≳",
  "gsime;": "⪎",
  "gsiml;": "⪐",
  "GT;": ">",
  GT: GT$4,
  "Gt;": "≫",
  "gt;": ">",
  gt: gt$6,
  "gtcc;": "⪧",
  "gtcir;": "⩺",
  "gtdot;": "⋗",
  "gtlPar;": "⦕",
  "gtquest;": "⩼",
  "gtrapprox;": "⪆",
  "gtrarr;": "⥸",
  "gtrdot;": "⋗",
  "gtreqless;": "⋛",
  "gtreqqless;": "⪌",
  "gtrless;": "≷",
  "gtrsim;": "≳",
  "gvertneqq;": "≩︀",
  "gvnE;": "≩︀",
  "Hacek;": "ˇ",
  "hairsp;": " ",
  "half;": "½",
  "hamilt;": "ℋ",
  "HARDcy;": "Ъ",
  "hardcy;": "ъ",
  "hArr;": "⇔",
  "harr;": "↔",
  "harrcir;": "⥈",
  "harrw;": "↭",
  "Hat;": "^",
  "hbar;": "ℏ",
  "Hcirc;": "Ĥ",
  "hcirc;": "ĥ",
  "hearts;": "♥",
  "heartsuit;": "♥",
  "hellip;": "…",
  "hercon;": "⊹",
  "Hfr;": "ℌ",
  "hfr;": "𝔥",
  "HilbertSpace;": "ℋ",
  "hksearow;": "⤥",
  "hkswarow;": "⤦",
  "hoarr;": "⇿",
  "homtht;": "∻",
  "hookleftarrow;": "↩",
  "hookrightarrow;": "↪",
  "Hopf;": "ℍ",
  "hopf;": "𝕙",
  "horbar;": "―",
  "HorizontalLine;": "─",
  "Hscr;": "ℋ",
  "hscr;": "𝒽",
  "hslash;": "ℏ",
  "Hstrok;": "Ħ",
  "hstrok;": "ħ",
  "HumpDownHump;": "≎",
  "HumpEqual;": "≏",
  "hybull;": "⁃",
  "hyphen;": "‐",
  "Iacute;": "Í",
  Iacute: Iacute$4,
  "iacute;": "í",
  iacute: iacute$4,
  "ic;": "⁣",
  "Icirc;": "Î",
  Icirc: Icirc$4,
  "icirc;": "î",
  icirc: icirc$4,
  "Icy;": "И",
  "icy;": "и",
  "Idot;": "İ",
  "IEcy;": "Е",
  "iecy;": "е",
  "iexcl;": "¡",
  iexcl: iexcl$4,
  "iff;": "⇔",
  "Ifr;": "ℑ",
  "ifr;": "𝔦",
  "Igrave;": "Ì",
  Igrave: Igrave$4,
  "igrave;": "ì",
  igrave: igrave$4,
  "ii;": "ⅈ",
  "iiiint;": "⨌",
  "iiint;": "∭",
  "iinfin;": "⧜",
  "iiota;": "℩",
  "IJlig;": "Ĳ",
  "ijlig;": "ĳ",
  "Im;": "ℑ",
  "Imacr;": "Ī",
  "imacr;": "ī",
  "image;": "ℑ",
  "ImaginaryI;": "ⅈ",
  "imagline;": "ℐ",
  "imagpart;": "ℑ",
  "imath;": "ı",
  "imof;": "⊷",
  "imped;": "Ƶ",
  "Implies;": "⇒",
  "in;": "∈",
  "incare;": "℅",
  "infin;": "∞",
  "infintie;": "⧝",
  "inodot;": "ı",
  "Int;": "∬",
  "int;": "∫",
  "intcal;": "⊺",
  "integers;": "ℤ",
  "Integral;": "∫",
  "intercal;": "⊺",
  "Intersection;": "⋂",
  "intlarhk;": "⨗",
  "intprod;": "⨼",
  "InvisibleComma;": "⁣",
  "InvisibleTimes;": "⁢",
  "IOcy;": "Ё",
  "iocy;": "ё",
  "Iogon;": "Į",
  "iogon;": "į",
  "Iopf;": "𝕀",
  "iopf;": "𝕚",
  "Iota;": "Ι",
  "iota;": "ι",
  "iprod;": "⨼",
  "iquest;": "¿",
  iquest: iquest$4,
  "Iscr;": "ℐ",
  "iscr;": "𝒾",
  "isin;": "∈",
  "isindot;": "⋵",
  "isinE;": "⋹",
  "isins;": "⋴",
  "isinsv;": "⋳",
  "isinv;": "∈",
  "it;": "⁢",
  "Itilde;": "Ĩ",
  "itilde;": "ĩ",
  "Iukcy;": "І",
  "iukcy;": "і",
  "Iuml;": "Ï",
  Iuml: Iuml$4,
  "iuml;": "ï",
  iuml: iuml$4,
  "Jcirc;": "Ĵ",
  "jcirc;": "ĵ",
  "Jcy;": "Й",
  "jcy;": "й",
  "Jfr;": "𝔍",
  "jfr;": "𝔧",
  "jmath;": "ȷ",
  "Jopf;": "𝕁",
  "jopf;": "𝕛",
  "Jscr;": "𝒥",
  "jscr;": "𝒿",
  "Jsercy;": "Ј",
  "jsercy;": "ј",
  "Jukcy;": "Є",
  "jukcy;": "є",
  "Kappa;": "Κ",
  "kappa;": "κ",
  "kappav;": "ϰ",
  "Kcedil;": "Ķ",
  "kcedil;": "ķ",
  "Kcy;": "К",
  "kcy;": "к",
  "Kfr;": "𝔎",
  "kfr;": "𝔨",
  "kgreen;": "ĸ",
  "KHcy;": "Х",
  "khcy;": "х",
  "KJcy;": "Ќ",
  "kjcy;": "ќ",
  "Kopf;": "𝕂",
  "kopf;": "𝕜",
  "Kscr;": "𝒦",
  "kscr;": "𝓀",
  "lAarr;": "⇚",
  "Lacute;": "Ĺ",
  "lacute;": "ĺ",
  "laemptyv;": "⦴",
  "lagran;": "ℒ",
  "Lambda;": "Λ",
  "lambda;": "λ",
  "Lang;": "⟪",
  "lang;": "⟨",
  "langd;": "⦑",
  "langle;": "⟨",
  "lap;": "⪅",
  "Laplacetrf;": "ℒ",
  "laquo;": "«",
  laquo: laquo$4,
  "Larr;": "↞",
  "lArr;": "⇐",
  "larr;": "←",
  "larrb;": "⇤",
  "larrbfs;": "⤟",
  "larrfs;": "⤝",
  "larrhk;": "↩",
  "larrlp;": "↫",
  "larrpl;": "⤹",
  "larrsim;": "⥳",
  "larrtl;": "↢",
  "lat;": "⪫",
  "lAtail;": "⤛",
  "latail;": "⤙",
  "late;": "⪭",
  "lates;": "⪭︀",
  "lBarr;": "⤎",
  "lbarr;": "⤌",
  "lbbrk;": "❲",
  "lbrace;": "{",
  "lbrack;": "[",
  "lbrke;": "⦋",
  "lbrksld;": "⦏",
  "lbrkslu;": "⦍",
  "Lcaron;": "Ľ",
  "lcaron;": "ľ",
  "Lcedil;": "Ļ",
  "lcedil;": "ļ",
  "lceil;": "⌈",
  "lcub;": "{",
  "Lcy;": "Л",
  "lcy;": "л",
  "ldca;": "⤶",
  "ldquo;": "“",
  "ldquor;": "„",
  "ldrdhar;": "⥧",
  "ldrushar;": "⥋",
  "ldsh;": "↲",
  "lE;": "≦",
  "le;": "≤",
  "LeftAngleBracket;": "⟨",
  "LeftArrow;": "←",
  "Leftarrow;": "⇐",
  "leftarrow;": "←",
  "LeftArrowBar;": "⇤",
  "LeftArrowRightArrow;": "⇆",
  "leftarrowtail;": "↢",
  "LeftCeiling;": "⌈",
  "LeftDoubleBracket;": "⟦",
  "LeftDownTeeVector;": "⥡",
  "LeftDownVector;": "⇃",
  "LeftDownVectorBar;": "⥙",
  "LeftFloor;": "⌊",
  "leftharpoondown;": "↽",
  "leftharpoonup;": "↼",
  "leftleftarrows;": "⇇",
  "LeftRightArrow;": "↔",
  "Leftrightarrow;": "⇔",
  "leftrightarrow;": "↔",
  "leftrightarrows;": "⇆",
  "leftrightharpoons;": "⇋",
  "leftrightsquigarrow;": "↭",
  "LeftRightVector;": "⥎",
  "LeftTee;": "⊣",
  "LeftTeeArrow;": "↤",
  "LeftTeeVector;": "⥚",
  "leftthreetimes;": "⋋",
  "LeftTriangle;": "⊲",
  "LeftTriangleBar;": "⧏",
  "LeftTriangleEqual;": "⊴",
  "LeftUpDownVector;": "⥑",
  "LeftUpTeeVector;": "⥠",
  "LeftUpVector;": "↿",
  "LeftUpVectorBar;": "⥘",
  "LeftVector;": "↼",
  "LeftVectorBar;": "⥒",
  "lEg;": "⪋",
  "leg;": "⋚",
  "leq;": "≤",
  "leqq;": "≦",
  "leqslant;": "⩽",
  "les;": "⩽",
  "lescc;": "⪨",
  "lesdot;": "⩿",
  "lesdoto;": "⪁",
  "lesdotor;": "⪃",
  "lesg;": "⋚︀",
  "lesges;": "⪓",
  "lessapprox;": "⪅",
  "lessdot;": "⋖",
  "lesseqgtr;": "⋚",
  "lesseqqgtr;": "⪋",
  "LessEqualGreater;": "⋚",
  "LessFullEqual;": "≦",
  "LessGreater;": "≶",
  "lessgtr;": "≶",
  "LessLess;": "⪡",
  "lesssim;": "≲",
  "LessSlantEqual;": "⩽",
  "LessTilde;": "≲",
  "lfisht;": "⥼",
  "lfloor;": "⌊",
  "Lfr;": "𝔏",
  "lfr;": "𝔩",
  "lg;": "≶",
  "lgE;": "⪑",
  "lHar;": "⥢",
  "lhard;": "↽",
  "lharu;": "↼",
  "lharul;": "⥪",
  "lhblk;": "▄",
  "LJcy;": "Љ",
  "ljcy;": "љ",
  "Ll;": "⋘",
  "ll;": "≪",
  "llarr;": "⇇",
  "llcorner;": "⌞",
  "Lleftarrow;": "⇚",
  "llhard;": "⥫",
  "lltri;": "◺",
  "Lmidot;": "Ŀ",
  "lmidot;": "ŀ",
  "lmoust;": "⎰",
  "lmoustache;": "⎰",
  "lnap;": "⪉",
  "lnapprox;": "⪉",
  "lnE;": "≨",
  "lne;": "⪇",
  "lneq;": "⪇",
  "lneqq;": "≨",
  "lnsim;": "⋦",
  "loang;": "⟬",
  "loarr;": "⇽",
  "lobrk;": "⟦",
  "LongLeftArrow;": "⟵",
  "Longleftarrow;": "⟸",
  "longleftarrow;": "⟵",
  "LongLeftRightArrow;": "⟷",
  "Longleftrightarrow;": "⟺",
  "longleftrightarrow;": "⟷",
  "longmapsto;": "⟼",
  "LongRightArrow;": "⟶",
  "Longrightarrow;": "⟹",
  "longrightarrow;": "⟶",
  "looparrowleft;": "↫",
  "looparrowright;": "↬",
  "lopar;": "⦅",
  "Lopf;": "𝕃",
  "lopf;": "𝕝",
  "loplus;": "⨭",
  "lotimes;": "⨴",
  "lowast;": "∗",
  "lowbar;": "_",
  "LowerLeftArrow;": "↙",
  "LowerRightArrow;": "↘",
  "loz;": "◊",
  "lozenge;": "◊",
  "lozf;": "⧫",
  "lpar;": "(",
  "lparlt;": "⦓",
  "lrarr;": "⇆",
  "lrcorner;": "⌟",
  "lrhar;": "⇋",
  "lrhard;": "⥭",
  "lrm;": "‎",
  "lrtri;": "⊿",
  "lsaquo;": "‹",
  "Lscr;": "ℒ",
  "lscr;": "𝓁",
  "Lsh;": "↰",
  "lsh;": "↰",
  "lsim;": "≲",
  "lsime;": "⪍",
  "lsimg;": "⪏",
  "lsqb;": "[",
  "lsquo;": "‘",
  "lsquor;": "‚",
  "Lstrok;": "Ł",
  "lstrok;": "ł",
  "LT;": "<",
  LT: LT$4,
  "Lt;": "≪",
  "lt;": "<",
  lt: lt$6,
  "ltcc;": "⪦",
  "ltcir;": "⩹",
  "ltdot;": "⋖",
  "lthree;": "⋋",
  "ltimes;": "⋉",
  "ltlarr;": "⥶",
  "ltquest;": "⩻",
  "ltri;": "◃",
  "ltrie;": "⊴",
  "ltrif;": "◂",
  "ltrPar;": "⦖",
  "lurdshar;": "⥊",
  "luruhar;": "⥦",
  "lvertneqq;": "≨︀",
  "lvnE;": "≨︀",
  "macr;": "¯",
  macr: macr$4,
  "male;": "♂",
  "malt;": "✠",
  "maltese;": "✠",
  "Map;": "⤅",
  "map;": "↦",
  "mapsto;": "↦",
  "mapstodown;": "↧",
  "mapstoleft;": "↤",
  "mapstoup;": "↥",
  "marker;": "▮",
  "mcomma;": "⨩",
  "Mcy;": "М",
  "mcy;": "м",
  "mdash;": "—",
  "mDDot;": "∺",
  "measuredangle;": "∡",
  "MediumSpace;": " ",
  "Mellintrf;": "ℳ",
  "Mfr;": "𝔐",
  "mfr;": "𝔪",
  "mho;": "℧",
  "micro;": "µ",
  micro: micro$4,
  "mid;": "∣",
  "midast;": "*",
  "midcir;": "⫰",
  "middot;": "·",
  middot: middot$4,
  "minus;": "−",
  "minusb;": "⊟",
  "minusd;": "∸",
  "minusdu;": "⨪",
  "MinusPlus;": "∓",
  "mlcp;": "⫛",
  "mldr;": "…",
  "mnplus;": "∓",
  "models;": "⊧",
  "Mopf;": "𝕄",
  "mopf;": "𝕞",
  "mp;": "∓",
  "Mscr;": "ℳ",
  "mscr;": "𝓂",
  "mstpos;": "∾",
  "Mu;": "Μ",
  "mu;": "μ",
  "multimap;": "⊸",
  "mumap;": "⊸",
  "nabla;": "∇",
  "Nacute;": "Ń",
  "nacute;": "ń",
  "nang;": "∠⃒",
  "nap;": "≉",
  "napE;": "⩰̸",
  "napid;": "≋̸",
  "napos;": "ŉ",
  "napprox;": "≉",
  "natur;": "♮",
  "natural;": "♮",
  "naturals;": "ℕ",
  "nbsp;": " ",
  nbsp: nbsp$4,
  "nbump;": "≎̸",
  "nbumpe;": "≏̸",
  "ncap;": "⩃",
  "Ncaron;": "Ň",
  "ncaron;": "ň",
  "Ncedil;": "Ņ",
  "ncedil;": "ņ",
  "ncong;": "≇",
  "ncongdot;": "⩭̸",
  "ncup;": "⩂",
  "Ncy;": "Н",
  "ncy;": "н",
  "ndash;": "–",
  "ne;": "≠",
  "nearhk;": "⤤",
  "neArr;": "⇗",
  "nearr;": "↗",
  "nearrow;": "↗",
  "nedot;": "≐̸",
  "NegativeMediumSpace;": "​",
  "NegativeThickSpace;": "​",
  "NegativeThinSpace;": "​",
  "NegativeVeryThinSpace;": "​",
  "nequiv;": "≢",
  "nesear;": "⤨",
  "nesim;": "≂̸",
  "NestedGreaterGreater;": "≫",
  "NestedLessLess;": "≪",
  "NewLine;": "\n",
  "nexist;": "∄",
  "nexists;": "∄",
  "Nfr;": "𝔑",
  "nfr;": "𝔫",
  "ngE;": "≧̸",
  "nge;": "≱",
  "ngeq;": "≱",
  "ngeqq;": "≧̸",
  "ngeqslant;": "⩾̸",
  "nges;": "⩾̸",
  "nGg;": "⋙̸",
  "ngsim;": "≵",
  "nGt;": "≫⃒",
  "ngt;": "≯",
  "ngtr;": "≯",
  "nGtv;": "≫̸",
  "nhArr;": "⇎",
  "nharr;": "↮",
  "nhpar;": "⫲",
  "ni;": "∋",
  "nis;": "⋼",
  "nisd;": "⋺",
  "niv;": "∋",
  "NJcy;": "Њ",
  "njcy;": "њ",
  "nlArr;": "⇍",
  "nlarr;": "↚",
  "nldr;": "‥",
  "nlE;": "≦̸",
  "nle;": "≰",
  "nLeftarrow;": "⇍",
  "nleftarrow;": "↚",
  "nLeftrightarrow;": "⇎",
  "nleftrightarrow;": "↮",
  "nleq;": "≰",
  "nleqq;": "≦̸",
  "nleqslant;": "⩽̸",
  "nles;": "⩽̸",
  "nless;": "≮",
  "nLl;": "⋘̸",
  "nlsim;": "≴",
  "nLt;": "≪⃒",
  "nlt;": "≮",
  "nltri;": "⋪",
  "nltrie;": "⋬",
  "nLtv;": "≪̸",
  "nmid;": "∤",
  "NoBreak;": "⁠",
  "NonBreakingSpace;": " ",
  "Nopf;": "ℕ",
  "nopf;": "𝕟",
  "Not;": "⫬",
  "not;": "¬",
  not: not$4,
  "NotCongruent;": "≢",
  "NotCupCap;": "≭",
  "NotDoubleVerticalBar;": "∦",
  "NotElement;": "∉",
  "NotEqual;": "≠",
  "NotEqualTilde;": "≂̸",
  "NotExists;": "∄",
  "NotGreater;": "≯",
  "NotGreaterEqual;": "≱",
  "NotGreaterFullEqual;": "≧̸",
  "NotGreaterGreater;": "≫̸",
  "NotGreaterLess;": "≹",
  "NotGreaterSlantEqual;": "⩾̸",
  "NotGreaterTilde;": "≵",
  "NotHumpDownHump;": "≎̸",
  "NotHumpEqual;": "≏̸",
  "notin;": "∉",
  "notindot;": "⋵̸",
  "notinE;": "⋹̸",
  "notinva;": "∉",
  "notinvb;": "⋷",
  "notinvc;": "⋶",
  "NotLeftTriangle;": "⋪",
  "NotLeftTriangleBar;": "⧏̸",
  "NotLeftTriangleEqual;": "⋬",
  "NotLess;": "≮",
  "NotLessEqual;": "≰",
  "NotLessGreater;": "≸",
  "NotLessLess;": "≪̸",
  "NotLessSlantEqual;": "⩽̸",
  "NotLessTilde;": "≴",
  "NotNestedGreaterGreater;": "⪢̸",
  "NotNestedLessLess;": "⪡̸",
  "notni;": "∌",
  "notniva;": "∌",
  "notnivb;": "⋾",
  "notnivc;": "⋽",
  "NotPrecedes;": "⊀",
  "NotPrecedesEqual;": "⪯̸",
  "NotPrecedesSlantEqual;": "⋠",
  "NotReverseElement;": "∌",
  "NotRightTriangle;": "⋫",
  "NotRightTriangleBar;": "⧐̸",
  "NotRightTriangleEqual;": "⋭",
  "NotSquareSubset;": "⊏̸",
  "NotSquareSubsetEqual;": "⋢",
  "NotSquareSuperset;": "⊐̸",
  "NotSquareSupersetEqual;": "⋣",
  "NotSubset;": "⊂⃒",
  "NotSubsetEqual;": "⊈",
  "NotSucceeds;": "⊁",
  "NotSucceedsEqual;": "⪰̸",
  "NotSucceedsSlantEqual;": "⋡",
  "NotSucceedsTilde;": "≿̸",
  "NotSuperset;": "⊃⃒",
  "NotSupersetEqual;": "⊉",
  "NotTilde;": "≁",
  "NotTildeEqual;": "≄",
  "NotTildeFullEqual;": "≇",
  "NotTildeTilde;": "≉",
  "NotVerticalBar;": "∤",
  "npar;": "∦",
  "nparallel;": "∦",
  "nparsl;": "⫽⃥",
  "npart;": "∂̸",
  "npolint;": "⨔",
  "npr;": "⊀",
  "nprcue;": "⋠",
  "npre;": "⪯̸",
  "nprec;": "⊀",
  "npreceq;": "⪯̸",
  "nrArr;": "⇏",
  "nrarr;": "↛",
  "nrarrc;": "⤳̸",
  "nrarrw;": "↝̸",
  "nRightarrow;": "⇏",
  "nrightarrow;": "↛",
  "nrtri;": "⋫",
  "nrtrie;": "⋭",
  "nsc;": "⊁",
  "nsccue;": "⋡",
  "nsce;": "⪰̸",
  "Nscr;": "𝒩",
  "nscr;": "𝓃",
  "nshortmid;": "∤",
  "nshortparallel;": "∦",
  "nsim;": "≁",
  "nsime;": "≄",
  "nsimeq;": "≄",
  "nsmid;": "∤",
  "nspar;": "∦",
  "nsqsube;": "⋢",
  "nsqsupe;": "⋣",
  "nsub;": "⊄",
  "nsubE;": "⫅̸",
  "nsube;": "⊈",
  "nsubset;": "⊂⃒",
  "nsubseteq;": "⊈",
  "nsubseteqq;": "⫅̸",
  "nsucc;": "⊁",
  "nsucceq;": "⪰̸",
  "nsup;": "⊅",
  "nsupE;": "⫆̸",
  "nsupe;": "⊉",
  "nsupset;": "⊃⃒",
  "nsupseteq;": "⊉",
  "nsupseteqq;": "⫆̸",
  "ntgl;": "≹",
  "Ntilde;": "Ñ",
  Ntilde: Ntilde$4,
  "ntilde;": "ñ",
  ntilde: ntilde$4,
  "ntlg;": "≸",
  "ntriangleleft;": "⋪",
  "ntrianglelefteq;": "⋬",
  "ntriangleright;": "⋫",
  "ntrianglerighteq;": "⋭",
  "Nu;": "Ν",
  "nu;": "ν",
  "num;": "#",
  "numero;": "№",
  "numsp;": " ",
  "nvap;": "≍⃒",
  "nVDash;": "⊯",
  "nVdash;": "⊮",
  "nvDash;": "⊭",
  "nvdash;": "⊬",
  "nvge;": "≥⃒",
  "nvgt;": ">⃒",
  "nvHarr;": "⤄",
  "nvinfin;": "⧞",
  "nvlArr;": "⤂",
  "nvle;": "≤⃒",
  "nvlt;": "<⃒",
  "nvltrie;": "⊴⃒",
  "nvrArr;": "⤃",
  "nvrtrie;": "⊵⃒",
  "nvsim;": "∼⃒",
  "nwarhk;": "⤣",
  "nwArr;": "⇖",
  "nwarr;": "↖",
  "nwarrow;": "↖",
  "nwnear;": "⤧",
  "Oacute;": "Ó",
  Oacute: Oacute$4,
  "oacute;": "ó",
  oacute: oacute$4,
  "oast;": "⊛",
  "ocir;": "⊚",
  "Ocirc;": "Ô",
  Ocirc: Ocirc$4,
  "ocirc;": "ô",
  ocirc: ocirc$4,
  "Ocy;": "О",
  "ocy;": "о",
  "odash;": "⊝",
  "Odblac;": "Ő",
  "odblac;": "ő",
  "odiv;": "⨸",
  "odot;": "⊙",
  "odsold;": "⦼",
  "OElig;": "Œ",
  "oelig;": "œ",
  "ofcir;": "⦿",
  "Ofr;": "𝔒",
  "ofr;": "𝔬",
  "ogon;": "˛",
  "Ograve;": "Ò",
  Ograve: Ograve$4,
  "ograve;": "ò",
  ograve: ograve$4,
  "ogt;": "⧁",
  "ohbar;": "⦵",
  "ohm;": "Ω",
  "oint;": "∮",
  "olarr;": "↺",
  "olcir;": "⦾",
  "olcross;": "⦻",
  "oline;": "‾",
  "olt;": "⧀",
  "Omacr;": "Ō",
  "omacr;": "ō",
  "Omega;": "Ω",
  "omega;": "ω",
  "Omicron;": "Ο",
  "omicron;": "ο",
  "omid;": "⦶",
  "ominus;": "⊖",
  "Oopf;": "𝕆",
  "oopf;": "𝕠",
  "opar;": "⦷",
  "OpenCurlyDoubleQuote;": "“",
  "OpenCurlyQuote;": "‘",
  "operp;": "⦹",
  "oplus;": "⊕",
  "Or;": "⩔",
  "or;": "∨",
  "orarr;": "↻",
  "ord;": "⩝",
  "order;": "ℴ",
  "orderof;": "ℴ",
  "ordf;": "ª",
  ordf: ordf$4,
  "ordm;": "º",
  ordm: ordm$4,
  "origof;": "⊶",
  "oror;": "⩖",
  "orslope;": "⩗",
  "orv;": "⩛",
  "oS;": "Ⓢ",
  "Oscr;": "𝒪",
  "oscr;": "ℴ",
  "Oslash;": "Ø",
  Oslash: Oslash$4,
  "oslash;": "ø",
  oslash: oslash$4,
  "osol;": "⊘",
  "Otilde;": "Õ",
  Otilde: Otilde$4,
  "otilde;": "õ",
  otilde: otilde$4,
  "Otimes;": "⨷",
  "otimes;": "⊗",
  "otimesas;": "⨶",
  "Ouml;": "Ö",
  Ouml: Ouml$4,
  "ouml;": "ö",
  ouml: ouml$4,
  "ovbar;": "⌽",
  "OverBar;": "‾",
  "OverBrace;": "⏞",
  "OverBracket;": "⎴",
  "OverParenthesis;": "⏜",
  "par;": "∥",
  "para;": "¶",
  para: para$4,
  "parallel;": "∥",
  "parsim;": "⫳",
  "parsl;": "⫽",
  "part;": "∂",
  "PartialD;": "∂",
  "Pcy;": "П",
  "pcy;": "п",
  "percnt;": "%",
  "period;": ".",
  "permil;": "‰",
  "perp;": "⊥",
  "pertenk;": "‱",
  "Pfr;": "𝔓",
  "pfr;": "𝔭",
  "Phi;": "Φ",
  "phi;": "φ",
  "phiv;": "ϕ",
  "phmmat;": "ℳ",
  "phone;": "☎",
  "Pi;": "Π",
  "pi;": "π",
  "pitchfork;": "⋔",
  "piv;": "ϖ",
  "planck;": "ℏ",
  "planckh;": "ℎ",
  "plankv;": "ℏ",
  "plus;": "+",
  "plusacir;": "⨣",
  "plusb;": "⊞",
  "pluscir;": "⨢",
  "plusdo;": "∔",
  "plusdu;": "⨥",
  "pluse;": "⩲",
  "PlusMinus;": "±",
  "plusmn;": "±",
  plusmn: plusmn$4,
  "plussim;": "⨦",
  "plustwo;": "⨧",
  "pm;": "±",
  "Poincareplane;": "ℌ",
  "pointint;": "⨕",
  "Popf;": "ℙ",
  "popf;": "𝕡",
  "pound;": "£",
  pound: pound$4,
  "Pr;": "⪻",
  "pr;": "≺",
  "prap;": "⪷",
  "prcue;": "≼",
  "prE;": "⪳",
  "pre;": "⪯",
  "prec;": "≺",
  "precapprox;": "⪷",
  "preccurlyeq;": "≼",
  "Precedes;": "≺",
  "PrecedesEqual;": "⪯",
  "PrecedesSlantEqual;": "≼",
  "PrecedesTilde;": "≾",
  "preceq;": "⪯",
  "precnapprox;": "⪹",
  "precneqq;": "⪵",
  "precnsim;": "⋨",
  "precsim;": "≾",
  "Prime;": "″",
  "prime;": "′",
  "primes;": "ℙ",
  "prnap;": "⪹",
  "prnE;": "⪵",
  "prnsim;": "⋨",
  "prod;": "∏",
  "Product;": "∏",
  "profalar;": "⌮",
  "profline;": "⌒",
  "profsurf;": "⌓",
  "prop;": "∝",
  "Proportion;": "∷",
  "Proportional;": "∝",
  "propto;": "∝",
  "prsim;": "≾",
  "prurel;": "⊰",
  "Pscr;": "𝒫",
  "pscr;": "𝓅",
  "Psi;": "Ψ",
  "psi;": "ψ",
  "puncsp;": " ",
  "Qfr;": "𝔔",
  "qfr;": "𝔮",
  "qint;": "⨌",
  "Qopf;": "ℚ",
  "qopf;": "𝕢",
  "qprime;": "⁗",
  "Qscr;": "𝒬",
  "qscr;": "𝓆",
  "quaternions;": "ℍ",
  "quatint;": "⨖",
  "quest;": "?",
  "questeq;": "≟",
  "QUOT;": "\"",
  QUOT: QUOT$4,
  "quot;": "\"",
  quot: quot$6,
  "rAarr;": "⇛",
  "race;": "∽̱",
  "Racute;": "Ŕ",
  "racute;": "ŕ",
  "radic;": "√",
  "raemptyv;": "⦳",
  "Rang;": "⟫",
  "rang;": "⟩",
  "rangd;": "⦒",
  "range;": "⦥",
  "rangle;": "⟩",
  "raquo;": "»",
  raquo: raquo$4,
  "Rarr;": "↠",
  "rArr;": "⇒",
  "rarr;": "→",
  "rarrap;": "⥵",
  "rarrb;": "⇥",
  "rarrbfs;": "⤠",
  "rarrc;": "⤳",
  "rarrfs;": "⤞",
  "rarrhk;": "↪",
  "rarrlp;": "↬",
  "rarrpl;": "⥅",
  "rarrsim;": "⥴",
  "Rarrtl;": "⤖",
  "rarrtl;": "↣",
  "rarrw;": "↝",
  "rAtail;": "⤜",
  "ratail;": "⤚",
  "ratio;": "∶",
  "rationals;": "ℚ",
  "RBarr;": "⤐",
  "rBarr;": "⤏",
  "rbarr;": "⤍",
  "rbbrk;": "❳",
  "rbrace;": "}",
  "rbrack;": "]",
  "rbrke;": "⦌",
  "rbrksld;": "⦎",
  "rbrkslu;": "⦐",
  "Rcaron;": "Ř",
  "rcaron;": "ř",
  "Rcedil;": "Ŗ",
  "rcedil;": "ŗ",
  "rceil;": "⌉",
  "rcub;": "}",
  "Rcy;": "Р",
  "rcy;": "р",
  "rdca;": "⤷",
  "rdldhar;": "⥩",
  "rdquo;": "”",
  "rdquor;": "”",
  "rdsh;": "↳",
  "Re;": "ℜ",
  "real;": "ℜ",
  "realine;": "ℛ",
  "realpart;": "ℜ",
  "reals;": "ℝ",
  "rect;": "▭",
  "REG;": "®",
  REG: REG$4,
  "reg;": "®",
  reg: reg$4,
  "ReverseElement;": "∋",
  "ReverseEquilibrium;": "⇋",
  "ReverseUpEquilibrium;": "⥯",
  "rfisht;": "⥽",
  "rfloor;": "⌋",
  "Rfr;": "ℜ",
  "rfr;": "𝔯",
  "rHar;": "⥤",
  "rhard;": "⇁",
  "rharu;": "⇀",
  "rharul;": "⥬",
  "Rho;": "Ρ",
  "rho;": "ρ",
  "rhov;": "ϱ",
  "RightAngleBracket;": "⟩",
  "RightArrow;": "→",
  "Rightarrow;": "⇒",
  "rightarrow;": "→",
  "RightArrowBar;": "⇥",
  "RightArrowLeftArrow;": "⇄",
  "rightarrowtail;": "↣",
  "RightCeiling;": "⌉",
  "RightDoubleBracket;": "⟧",
  "RightDownTeeVector;": "⥝",
  "RightDownVector;": "⇂",
  "RightDownVectorBar;": "⥕",
  "RightFloor;": "⌋",
  "rightharpoondown;": "⇁",
  "rightharpoonup;": "⇀",
  "rightleftarrows;": "⇄",
  "rightleftharpoons;": "⇌",
  "rightrightarrows;": "⇉",
  "rightsquigarrow;": "↝",
  "RightTee;": "⊢",
  "RightTeeArrow;": "↦",
  "RightTeeVector;": "⥛",
  "rightthreetimes;": "⋌",
  "RightTriangle;": "⊳",
  "RightTriangleBar;": "⧐",
  "RightTriangleEqual;": "⊵",
  "RightUpDownVector;": "⥏",
  "RightUpTeeVector;": "⥜",
  "RightUpVector;": "↾",
  "RightUpVectorBar;": "⥔",
  "RightVector;": "⇀",
  "RightVectorBar;": "⥓",
  "ring;": "˚",
  "risingdotseq;": "≓",
  "rlarr;": "⇄",
  "rlhar;": "⇌",
  "rlm;": "‏",
  "rmoust;": "⎱",
  "rmoustache;": "⎱",
  "rnmid;": "⫮",
  "roang;": "⟭",
  "roarr;": "⇾",
  "robrk;": "⟧",
  "ropar;": "⦆",
  "Ropf;": "ℝ",
  "ropf;": "𝕣",
  "roplus;": "⨮",
  "rotimes;": "⨵",
  "RoundImplies;": "⥰",
  "rpar;": ")",
  "rpargt;": "⦔",
  "rppolint;": "⨒",
  "rrarr;": "⇉",
  "Rrightarrow;": "⇛",
  "rsaquo;": "›",
  "Rscr;": "ℛ",
  "rscr;": "𝓇",
  "Rsh;": "↱",
  "rsh;": "↱",
  "rsqb;": "]",
  "rsquo;": "’",
  "rsquor;": "’",
  "rthree;": "⋌",
  "rtimes;": "⋊",
  "rtri;": "▹",
  "rtrie;": "⊵",
  "rtrif;": "▸",
  "rtriltri;": "⧎",
  "RuleDelayed;": "⧴",
  "ruluhar;": "⥨",
  "rx;": "℞",
  "Sacute;": "Ś",
  "sacute;": "ś",
  "sbquo;": "‚",
  "Sc;": "⪼",
  "sc;": "≻",
  "scap;": "⪸",
  "Scaron;": "Š",
  "scaron;": "š",
  "sccue;": "≽",
  "scE;": "⪴",
  "sce;": "⪰",
  "Scedil;": "Ş",
  "scedil;": "ş",
  "Scirc;": "Ŝ",
  "scirc;": "ŝ",
  "scnap;": "⪺",
  "scnE;": "⪶",
  "scnsim;": "⋩",
  "scpolint;": "⨓",
  "scsim;": "≿",
  "Scy;": "С",
  "scy;": "с",
  "sdot;": "⋅",
  "sdotb;": "⊡",
  "sdote;": "⩦",
  "searhk;": "⤥",
  "seArr;": "⇘",
  "searr;": "↘",
  "searrow;": "↘",
  "sect;": "§",
  sect: sect$4,
  "semi;": ";",
  "seswar;": "⤩",
  "setminus;": "∖",
  "setmn;": "∖",
  "sext;": "✶",
  "Sfr;": "𝔖",
  "sfr;": "𝔰",
  "sfrown;": "⌢",
  "sharp;": "♯",
  "SHCHcy;": "Щ",
  "shchcy;": "щ",
  "SHcy;": "Ш",
  "shcy;": "ш",
  "ShortDownArrow;": "↓",
  "ShortLeftArrow;": "←",
  "shortmid;": "∣",
  "shortparallel;": "∥",
  "ShortRightArrow;": "→",
  "ShortUpArrow;": "↑",
  "shy;": "­",
  shy: shy$4,
  "Sigma;": "Σ",
  "sigma;": "σ",
  "sigmaf;": "ς",
  "sigmav;": "ς",
  "sim;": "∼",
  "simdot;": "⩪",
  "sime;": "≃",
  "simeq;": "≃",
  "simg;": "⪞",
  "simgE;": "⪠",
  "siml;": "⪝",
  "simlE;": "⪟",
  "simne;": "≆",
  "simplus;": "⨤",
  "simrarr;": "⥲",
  "slarr;": "←",
  "SmallCircle;": "∘",
  "smallsetminus;": "∖",
  "smashp;": "⨳",
  "smeparsl;": "⧤",
  "smid;": "∣",
  "smile;": "⌣",
  "smt;": "⪪",
  "smte;": "⪬",
  "smtes;": "⪬︀",
  "SOFTcy;": "Ь",
  "softcy;": "ь",
  "sol;": "/",
  "solb;": "⧄",
  "solbar;": "⌿",
  "Sopf;": "𝕊",
  "sopf;": "𝕤",
  "spades;": "♠",
  "spadesuit;": "♠",
  "spar;": "∥",
  "sqcap;": "⊓",
  "sqcaps;": "⊓︀",
  "sqcup;": "⊔",
  "sqcups;": "⊔︀",
  "Sqrt;": "√",
  "sqsub;": "⊏",
  "sqsube;": "⊑",
  "sqsubset;": "⊏",
  "sqsubseteq;": "⊑",
  "sqsup;": "⊐",
  "sqsupe;": "⊒",
  "sqsupset;": "⊐",
  "sqsupseteq;": "⊒",
  "squ;": "□",
  "Square;": "□",
  "square;": "□",
  "SquareIntersection;": "⊓",
  "SquareSubset;": "⊏",
  "SquareSubsetEqual;": "⊑",
  "SquareSuperset;": "⊐",
  "SquareSupersetEqual;": "⊒",
  "SquareUnion;": "⊔",
  "squarf;": "▪",
  "squf;": "▪",
  "srarr;": "→",
  "Sscr;": "𝒮",
  "sscr;": "𝓈",
  "ssetmn;": "∖",
  "ssmile;": "⌣",
  "sstarf;": "⋆",
  "Star;": "⋆",
  "star;": "☆",
  "starf;": "★",
  "straightepsilon;": "ϵ",
  "straightphi;": "ϕ",
  "strns;": "¯",
  "Sub;": "⋐",
  "sub;": "⊂",
  "subdot;": "⪽",
  "subE;": "⫅",
  "sube;": "⊆",
  "subedot;": "⫃",
  "submult;": "⫁",
  "subnE;": "⫋",
  "subne;": "⊊",
  "subplus;": "⪿",
  "subrarr;": "⥹",
  "Subset;": "⋐",
  "subset;": "⊂",
  "subseteq;": "⊆",
  "subseteqq;": "⫅",
  "SubsetEqual;": "⊆",
  "subsetneq;": "⊊",
  "subsetneqq;": "⫋",
  "subsim;": "⫇",
  "subsub;": "⫕",
  "subsup;": "⫓",
  "succ;": "≻",
  "succapprox;": "⪸",
  "succcurlyeq;": "≽",
  "Succeeds;": "≻",
  "SucceedsEqual;": "⪰",
  "SucceedsSlantEqual;": "≽",
  "SucceedsTilde;": "≿",
  "succeq;": "⪰",
  "succnapprox;": "⪺",
  "succneqq;": "⪶",
  "succnsim;": "⋩",
  "succsim;": "≿",
  "SuchThat;": "∋",
  "Sum;": "∑",
  "sum;": "∑",
  "sung;": "♪",
  "Sup;": "⋑",
  "sup;": "⊃",
  "sup1;": "¹",
  sup1: sup1$4,
  "sup2;": "²",
  sup2: sup2$4,
  "sup3;": "³",
  sup3: sup3$4,
  "supdot;": "⪾",
  "supdsub;": "⫘",
  "supE;": "⫆",
  "supe;": "⊇",
  "supedot;": "⫄",
  "Superset;": "⊃",
  "SupersetEqual;": "⊇",
  "suphsol;": "⟉",
  "suphsub;": "⫗",
  "suplarr;": "⥻",
  "supmult;": "⫂",
  "supnE;": "⫌",
  "supne;": "⊋",
  "supplus;": "⫀",
  "Supset;": "⋑",
  "supset;": "⊃",
  "supseteq;": "⊇",
  "supseteqq;": "⫆",
  "supsetneq;": "⊋",
  "supsetneqq;": "⫌",
  "supsim;": "⫈",
  "supsub;": "⫔",
  "supsup;": "⫖",
  "swarhk;": "⤦",
  "swArr;": "⇙",
  "swarr;": "↙",
  "swarrow;": "↙",
  "swnwar;": "⤪",
  "szlig;": "ß",
  szlig: szlig$4,
  "Tab;": "\t",
  "target;": "⌖",
  "Tau;": "Τ",
  "tau;": "τ",
  "tbrk;": "⎴",
  "Tcaron;": "Ť",
  "tcaron;": "ť",
  "Tcedil;": "Ţ",
  "tcedil;": "ţ",
  "Tcy;": "Т",
  "tcy;": "т",
  "tdot;": "⃛",
  "telrec;": "⌕",
  "Tfr;": "𝔗",
  "tfr;": "𝔱",
  "there4;": "∴",
  "Therefore;": "∴",
  "therefore;": "∴",
  "Theta;": "Θ",
  "theta;": "θ",
  "thetasym;": "ϑ",
  "thetav;": "ϑ",
  "thickapprox;": "≈",
  "thicksim;": "∼",
  "ThickSpace;": "  ",
  "thinsp;": " ",
  "ThinSpace;": " ",
  "thkap;": "≈",
  "thksim;": "∼",
  "THORN;": "Þ",
  THORN: THORN$4,
  "thorn;": "þ",
  thorn: thorn$4,
  "Tilde;": "∼",
  "tilde;": "˜",
  "TildeEqual;": "≃",
  "TildeFullEqual;": "≅",
  "TildeTilde;": "≈",
  "times;": "×",
  times: times$4,
  "timesb;": "⊠",
  "timesbar;": "⨱",
  "timesd;": "⨰",
  "tint;": "∭",
  "toea;": "⤨",
  "top;": "⊤",
  "topbot;": "⌶",
  "topcir;": "⫱",
  "Topf;": "𝕋",
  "topf;": "𝕥",
  "topfork;": "⫚",
  "tosa;": "⤩",
  "tprime;": "‴",
  "TRADE;": "™",
  "trade;": "™",
  "triangle;": "▵",
  "triangledown;": "▿",
  "triangleleft;": "◃",
  "trianglelefteq;": "⊴",
  "triangleq;": "≜",
  "triangleright;": "▹",
  "trianglerighteq;": "⊵",
  "tridot;": "◬",
  "trie;": "≜",
  "triminus;": "⨺",
  "TripleDot;": "⃛",
  "triplus;": "⨹",
  "trisb;": "⧍",
  "tritime;": "⨻",
  "trpezium;": "⏢",
  "Tscr;": "𝒯",
  "tscr;": "𝓉",
  "TScy;": "Ц",
  "tscy;": "ц",
  "TSHcy;": "Ћ",
  "tshcy;": "ћ",
  "Tstrok;": "Ŧ",
  "tstrok;": "ŧ",
  "twixt;": "≬",
  "twoheadleftarrow;": "↞",
  "twoheadrightarrow;": "↠",
  "Uacute;": "Ú",
  Uacute: Uacute$4,
  "uacute;": "ú",
  uacute: uacute$4,
  "Uarr;": "↟",
  "uArr;": "⇑",
  "uarr;": "↑",
  "Uarrocir;": "⥉",
  "Ubrcy;": "Ў",
  "ubrcy;": "ў",
  "Ubreve;": "Ŭ",
  "ubreve;": "ŭ",
  "Ucirc;": "Û",
  Ucirc: Ucirc$4,
  "ucirc;": "û",
  ucirc: ucirc$4,
  "Ucy;": "У",
  "ucy;": "у",
  "udarr;": "⇅",
  "Udblac;": "Ű",
  "udblac;": "ű",
  "udhar;": "⥮",
  "ufisht;": "⥾",
  "Ufr;": "𝔘",
  "ufr;": "𝔲",
  "Ugrave;": "Ù",
  Ugrave: Ugrave$4,
  "ugrave;": "ù",
  ugrave: ugrave$4,
  "uHar;": "⥣",
  "uharl;": "↿",
  "uharr;": "↾",
  "uhblk;": "▀",
  "ulcorn;": "⌜",
  "ulcorner;": "⌜",
  "ulcrop;": "⌏",
  "ultri;": "◸",
  "Umacr;": "Ū",
  "umacr;": "ū",
  "uml;": "¨",
  uml: uml$4,
  "UnderBar;": "_",
  "UnderBrace;": "⏟",
  "UnderBracket;": "⎵",
  "UnderParenthesis;": "⏝",
  "Union;": "⋃",
  "UnionPlus;": "⊎",
  "Uogon;": "Ų",
  "uogon;": "ų",
  "Uopf;": "𝕌",
  "uopf;": "𝕦",
  "UpArrow;": "↑",
  "Uparrow;": "⇑",
  "uparrow;": "↑",
  "UpArrowBar;": "⤒",
  "UpArrowDownArrow;": "⇅",
  "UpDownArrow;": "↕",
  "Updownarrow;": "⇕",
  "updownarrow;": "↕",
  "UpEquilibrium;": "⥮",
  "upharpoonleft;": "↿",
  "upharpoonright;": "↾",
  "uplus;": "⊎",
  "UpperLeftArrow;": "↖",
  "UpperRightArrow;": "↗",
  "Upsi;": "ϒ",
  "upsi;": "υ",
  "upsih;": "ϒ",
  "Upsilon;": "Υ",
  "upsilon;": "υ",
  "UpTee;": "⊥",
  "UpTeeArrow;": "↥",
  "upuparrows;": "⇈",
  "urcorn;": "⌝",
  "urcorner;": "⌝",
  "urcrop;": "⌎",
  "Uring;": "Ů",
  "uring;": "ů",
  "urtri;": "◹",
  "Uscr;": "𝒰",
  "uscr;": "𝓊",
  "utdot;": "⋰",
  "Utilde;": "Ũ",
  "utilde;": "ũ",
  "utri;": "▵",
  "utrif;": "▴",
  "uuarr;": "⇈",
  "Uuml;": "Ü",
  Uuml: Uuml$4,
  "uuml;": "ü",
  uuml: uuml$4,
  "uwangle;": "⦧",
  "vangrt;": "⦜",
  "varepsilon;": "ϵ",
  "varkappa;": "ϰ",
  "varnothing;": "∅",
  "varphi;": "ϕ",
  "varpi;": "ϖ",
  "varpropto;": "∝",
  "vArr;": "⇕",
  "varr;": "↕",
  "varrho;": "ϱ",
  "varsigma;": "ς",
  "varsubsetneq;": "⊊︀",
  "varsubsetneqq;": "⫋︀",
  "varsupsetneq;": "⊋︀",
  "varsupsetneqq;": "⫌︀",
  "vartheta;": "ϑ",
  "vartriangleleft;": "⊲",
  "vartriangleright;": "⊳",
  "Vbar;": "⫫",
  "vBar;": "⫨",
  "vBarv;": "⫩",
  "Vcy;": "В",
  "vcy;": "в",
  "VDash;": "⊫",
  "Vdash;": "⊩",
  "vDash;": "⊨",
  "vdash;": "⊢",
  "Vdashl;": "⫦",
  "Vee;": "⋁",
  "vee;": "∨",
  "veebar;": "⊻",
  "veeeq;": "≚",
  "vellip;": "⋮",
  "Verbar;": "‖",
  "verbar;": "|",
  "Vert;": "‖",
  "vert;": "|",
  "VerticalBar;": "∣",
  "VerticalLine;": "|",
  "VerticalSeparator;": "❘",
  "VerticalTilde;": "≀",
  "VeryThinSpace;": " ",
  "Vfr;": "𝔙",
  "vfr;": "𝔳",
  "vltri;": "⊲",
  "vnsub;": "⊂⃒",
  "vnsup;": "⊃⃒",
  "Vopf;": "𝕍",
  "vopf;": "𝕧",
  "vprop;": "∝",
  "vrtri;": "⊳",
  "Vscr;": "𝒱",
  "vscr;": "𝓋",
  "vsubnE;": "⫋︀",
  "vsubne;": "⊊︀",
  "vsupnE;": "⫌︀",
  "vsupne;": "⊋︀",
  "Vvdash;": "⊪",
  "vzigzag;": "⦚",
  "Wcirc;": "Ŵ",
  "wcirc;": "ŵ",
  "wedbar;": "⩟",
  "Wedge;": "⋀",
  "wedge;": "∧",
  "wedgeq;": "≙",
  "weierp;": "℘",
  "Wfr;": "𝔚",
  "wfr;": "𝔴",
  "Wopf;": "𝕎",
  "wopf;": "𝕨",
  "wp;": "℘",
  "wr;": "≀",
  "wreath;": "≀",
  "Wscr;": "𝒲",
  "wscr;": "𝓌",
  "xcap;": "⋂",
  "xcirc;": "◯",
  "xcup;": "⋃",
  "xdtri;": "▽",
  "Xfr;": "𝔛",
  "xfr;": "𝔵",
  "xhArr;": "⟺",
  "xharr;": "⟷",
  "Xi;": "Ξ",
  "xi;": "ξ",
  "xlArr;": "⟸",
  "xlarr;": "⟵",
  "xmap;": "⟼",
  "xnis;": "⋻",
  "xodot;": "⨀",
  "Xopf;": "𝕏",
  "xopf;": "𝕩",
  "xoplus;": "⨁",
  "xotime;": "⨂",
  "xrArr;": "⟹",
  "xrarr;": "⟶",
  "Xscr;": "𝒳",
  "xscr;": "𝓍",
  "xsqcup;": "⨆",
  "xuplus;": "⨄",
  "xutri;": "△",
  "xvee;": "⋁",
  "xwedge;": "⋀",
  "Yacute;": "Ý",
  Yacute: Yacute$4,
  "yacute;": "ý",
  yacute: yacute$4,
  "YAcy;": "Я",
  "yacy;": "я",
  "Ycirc;": "Ŷ",
  "ycirc;": "ŷ",
  "Ycy;": "Ы",
  "ycy;": "ы",
  "yen;": "¥",
  yen: yen$4,
  "Yfr;": "𝔜",
  "yfr;": "𝔶",
  "YIcy;": "Ї",
  "yicy;": "ї",
  "Yopf;": "𝕐",
  "yopf;": "𝕪",
  "Yscr;": "𝒴",
  "yscr;": "𝓎",
  "YUcy;": "Ю",
  "yucy;": "ю",
  "Yuml;": "Ÿ",
  "yuml;": "ÿ",
  yuml: yuml$4,
  "Zacute;": "Ź",
  "zacute;": "ź",
  "Zcaron;": "Ž",
  "zcaron;": "ž",
  "Zcy;": "З",
  "zcy;": "з",
  "Zdot;": "Ż",
  "zdot;": "ż",
  "zeetrf;": "ℨ",
  "ZeroWidthSpace;": "​",
  "Zeta;": "Ζ",
  "zeta;": "ζ",
  "Zfr;": "ℨ",
  "zfr;": "𝔷",
  "ZHcy;": "Ж",
  "zhcy;": "ж",
  "zigrarr;": "⇝",
  "Zopf;": "ℤ",
  "zopf;": "𝕫",
  "Zscr;": "𝒵",
  "zscr;": "𝓏",
  "zwj;": "‍",
  "zwnj;": "‌"
};

var entities$5 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Aacute: Aacute$4,
    aacute: aacute$4,
    Acirc: Acirc$4,
    acirc: acirc$4,
    acute: acute$4,
    AElig: AElig$4,
    aelig: aelig$4,
    Agrave: Agrave$4,
    agrave: agrave$4,
    AMP: AMP$4,
    amp: amp$6,
    Aring: Aring$4,
    aring: aring$4,
    Atilde: Atilde$4,
    atilde: atilde$4,
    Auml: Auml$4,
    auml: auml$4,
    brvbar: brvbar$4,
    Ccedil: Ccedil$4,
    ccedil: ccedil$4,
    cedil: cedil$4,
    cent: cent$4,
    COPY: COPY$4,
    copy: copy$4,
    curren: curren$4,
    deg: deg$4,
    divide: divide$4,
    Eacute: Eacute$4,
    eacute: eacute$4,
    Ecirc: Ecirc$4,
    ecirc: ecirc$4,
    Egrave: Egrave$4,
    egrave: egrave$4,
    ETH: ETH$4,
    eth: eth$4,
    Euml: Euml$4,
    euml: euml$4,
    frac12: frac12$4,
    frac14: frac14$4,
    frac34: frac34$4,
    GT: GT$4,
    gt: gt$6,
    Iacute: Iacute$4,
    iacute: iacute$4,
    Icirc: Icirc$4,
    icirc: icirc$4,
    iexcl: iexcl$4,
    Igrave: Igrave$4,
    igrave: igrave$4,
    iquest: iquest$4,
    Iuml: Iuml$4,
    iuml: iuml$4,
    laquo: laquo$4,
    LT: LT$4,
    lt: lt$6,
    macr: macr$4,
    micro: micro$4,
    middot: middot$4,
    nbsp: nbsp$4,
    not: not$4,
    Ntilde: Ntilde$4,
    ntilde: ntilde$4,
    Oacute: Oacute$4,
    oacute: oacute$4,
    Ocirc: Ocirc$4,
    ocirc: ocirc$4,
    Ograve: Ograve$4,
    ograve: ograve$4,
    ordf: ordf$4,
    ordm: ordm$4,
    Oslash: Oslash$4,
    oslash: oslash$4,
    Otilde: Otilde$4,
    otilde: otilde$4,
    Ouml: Ouml$4,
    ouml: ouml$4,
    para: para$4,
    plusmn: plusmn$4,
    pound: pound$4,
    QUOT: QUOT$4,
    quot: quot$6,
    raquo: raquo$4,
    REG: REG$4,
    reg: reg$4,
    sect: sect$4,
    shy: shy$4,
    sup1: sup1$4,
    sup2: sup2$4,
    sup3: sup3$4,
    szlig: szlig$4,
    THORN: THORN$4,
    thorn: thorn$4,
    times: times$4,
    Uacute: Uacute$4,
    uacute: uacute$4,
    Ucirc: Ucirc$4,
    ucirc: ucirc$4,
    Ugrave: Ugrave$4,
    ugrave: ugrave$4,
    uml: uml$4,
    Uuml: Uuml$4,
    uuml: uuml$4,
    Yacute: Yacute$4,
    yacute: yacute$4,
    yen: yen$4,
    yuml: yuml$4,
    'default': entities$4
});

var entities$6 = getCjsExportFromNamespace(entities$5);

var decode_1$1 = decode$5;

function decode$5 (str) {
    if (typeof str !== 'string') {
        throw new TypeError('Expected a String');
    }

    return str.replace(/&(#?[^;\W]+;?)/g, function (_, match) {
        var m;
        if (m = /^#(\d+);?$/.exec(match)) {
            return punycode.ucs2.encode([ parseInt(m[1], 10) ]);
        } else if (m = /^#[Xx]([A-Fa-f0-9]+);?/.exec(match)) {
            return punycode.ucs2.encode([ parseInt(m[1], 16) ]);
        } else {
            // named entity
            var hasSemi = /;$/.test(match);
            var withoutSemi = hasSemi ? match.replace(/;$/, '') : match;
            var target = entities$6[withoutSemi] || (hasSemi && entities$6[match]);

            if (typeof target === 'number') {
                return punycode.ucs2.encode([ target ]);
            } else if (typeof target === 'string') {
                return target;
            } else {
                return '&' + match;
            }
        }
    });
}

var encode$2 = encode_1$1;
var decode$6 = decode_1$1;

var ent = {
	encode: encode$2,
	decode: decode$6
};

/**
 * Expose `isEmpty`.
 */

var isEmpty_1 = isEmpty;


/**
 * Has.
 */

var has = Object.prototype.hasOwnProperty;


/**
 * Test whether a value is "empty".
 *
 * @param {Mixed} val
 * @return {Boolean}
 */

function isEmpty (val) {
  if (null == val) return true;
  if ('number' == typeof val) return 0 === val;
  if (undefined !== val.length) return 0 === val.length;
  for (var key in val) if (has.call(val, key)) return false;
  return true;
}

/*
 Adapted from https://github.com/Matt-Esch/virtual-dom/blob/master/virtual-hyperscript/svg-attribute-namespace.js
 */

var DEFAULT_NAMESPACE = null;
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
var EV_NAMESPACE = 'http://www.w3.org/2001/xml-events';
var XLINK_NAMESPACE = 'http://www.w3.org/1999/xlink';
var XML_NAMESPACE = 'http://www.w3.org/XML/1998/namespace';

// http://www.w3.org/TR/SVGTiny12/elementTable.html
// http://www.w3.org/TR/SVG/eltindex.html
var SVG_ELEMENTS = {
    'listener': SVG_NAMESPACE,
//    'a': SVG_NAMESPACE,
    'animate': SVG_NAMESPACE,
    'altGlyph': SVG_NAMESPACE,
    'altGlyphDef': SVG_NAMESPACE,
    'altGlyphItem': SVG_NAMESPACE,
    'animateColor': SVG_NAMESPACE,
    'animateMotion': SVG_NAMESPACE,
    'animateTransform': SVG_NAMESPACE,
    'animation': SVG_NAMESPACE,
//    'audio': SVG_NAMESPACE,
    'circle': SVG_NAMESPACE,
    'defs': SVG_NAMESPACE,
    'desc': SVG_NAMESPACE,
    'discard': SVG_NAMESPACE,
    'ellipse': SVG_NAMESPACE,
    'feBlend': SVG_NAMESPACE,
    'feColorMatrix': SVG_NAMESPACE,
    'feComponentTransfer': SVG_NAMESPACE,
    'feComposite': SVG_NAMESPACE,
    'feConvolveMatrix': SVG_NAMESPACE,
    'feDiffuseLighting': SVG_NAMESPACE,
    'feDisplacementMap': SVG_NAMESPACE,
    'feDistantLight': SVG_NAMESPACE,
    'feFlood': SVG_NAMESPACE,
    'feFuncA': SVG_NAMESPACE,
    'feFuncB': SVG_NAMESPACE,
    'feFuncG': SVG_NAMESPACE,
    'feFuncR': SVG_NAMESPACE,
    'feGaussianBlur': SVG_NAMESPACE,
    'feImage': SVG_NAMESPACE,
    'feMerge': SVG_NAMESPACE,
    'feMergeNode': SVG_NAMESPACE,
    'feMorphology': SVG_NAMESPACE,
    'feOffset': SVG_NAMESPACE,
    'fePointLight': SVG_NAMESPACE,
    'feSpecularLighting': SVG_NAMESPACE,
    'feSpotLight': SVG_NAMESPACE,
    'feTile': SVG_NAMESPACE,
    'feTurbulence': SVG_NAMESPACE,
    'filter': SVG_NAMESPACE,
    'font': SVG_NAMESPACE,
    'font-face': SVG_NAMESPACE,
    'font-face-format': SVG_NAMESPACE,
    'font-face-name': SVG_NAMESPACE,
    'font-face-src': SVG_NAMESPACE,
    'font-face-uri': SVG_NAMESPACE,
    'foreignObject': SVG_NAMESPACE,
    'g': SVG_NAMESPACE,
    'glyph': SVG_NAMESPACE,
    'glyphRef': SVG_NAMESPACE,
    'handler': SVG_NAMESPACE,
    'hkern': SVG_NAMESPACE,
    'image': SVG_NAMESPACE,
    'line': SVG_NAMESPACE,
    'linearGradient': SVG_NAMESPACE,
    'metadata': SVG_NAMESPACE,
    'missing-glyph': SVG_NAMESPACE,
    'mpath': SVG_NAMESPACE,
    'path': SVG_NAMESPACE,
    'polygon': SVG_NAMESPACE,
    'polyline': SVG_NAMESPACE,
    'prefetch': SVG_NAMESPACE,
    'radialGradient': SVG_NAMESPACE,
    'rect': SVG_NAMESPACE,
//    'script': SVG_NAMESPACE,
    'set': SVG_NAMESPACE,
    'solidColor': SVG_NAMESPACE,
    'stop': SVG_NAMESPACE,
    'svg': SVG_NAMESPACE,
    'switch': SVG_NAMESPACE,
    'symbol': SVG_NAMESPACE,
    'tbreak': SVG_NAMESPACE,
    'text': SVG_NAMESPACE,
//    'textArea': SVG_NAMESPACE,
    'title': SVG_NAMESPACE,
    'tspan': SVG_NAMESPACE,
    'tref': SVG_NAMESPACE,
    'use': SVG_NAMESPACE,
    'vkern': SVG_NAMESPACE,
//    'video': SVG_NAMESPACE,
};

// http://www.w3.org/TR/SVGTiny12/attributeTable.html
// http://www.w3.org/TR/SVG/attindex.html
var SVG_PROPERTIES = {
    'about': DEFAULT_NAMESPACE,
    'accent-height': DEFAULT_NAMESPACE,
    'accumulate': DEFAULT_NAMESPACE,
    'additive': DEFAULT_NAMESPACE,
    'alignment-baseline': DEFAULT_NAMESPACE,
    'alphabetic': DEFAULT_NAMESPACE,
    'amplitude': DEFAULT_NAMESPACE,
    'arabic-form': DEFAULT_NAMESPACE,
    'ascent': DEFAULT_NAMESPACE,
    'attributeName': DEFAULT_NAMESPACE,
    'attributeType': DEFAULT_NAMESPACE,
    'azimuth': DEFAULT_NAMESPACE,
    'bandwidth': DEFAULT_NAMESPACE,
    'baseFrequency': DEFAULT_NAMESPACE,
    'baseProfile': DEFAULT_NAMESPACE,
    'baseline-shift': DEFAULT_NAMESPACE,
    'bbox': DEFAULT_NAMESPACE,
    'begin': DEFAULT_NAMESPACE,
    'bias': DEFAULT_NAMESPACE,
    'by': DEFAULT_NAMESPACE,
    'calcMode': DEFAULT_NAMESPACE,
    'cap-height': DEFAULT_NAMESPACE,
    'class': DEFAULT_NAMESPACE,
    'clip': DEFAULT_NAMESPACE,
    'clip-path': DEFAULT_NAMESPACE,
    'clip-rule': DEFAULT_NAMESPACE,
    'clipPathUnits': DEFAULT_NAMESPACE,
    'color': DEFAULT_NAMESPACE,
    'color-interpolation': DEFAULT_NAMESPACE,
    'color-interpolation-filters': DEFAULT_NAMESPACE,
    'color-profile': DEFAULT_NAMESPACE,
    'color-rendering': DEFAULT_NAMESPACE,
    'content': DEFAULT_NAMESPACE,
    'contentScriptType': DEFAULT_NAMESPACE,
    'contentStyleType': DEFAULT_NAMESPACE,
    'cursor': DEFAULT_NAMESPACE,
    'cx': DEFAULT_NAMESPACE,
    'cy': DEFAULT_NAMESPACE,
    'd': DEFAULT_NAMESPACE,
    'datatype': DEFAULT_NAMESPACE,
    'defaultAction': DEFAULT_NAMESPACE,
    'descent': DEFAULT_NAMESPACE,
    'diffuseConstant': DEFAULT_NAMESPACE,
    'direction': DEFAULT_NAMESPACE,
    'display': DEFAULT_NAMESPACE,
    'divisor': DEFAULT_NAMESPACE,
    'dominant-baseline': DEFAULT_NAMESPACE,
    'dur': DEFAULT_NAMESPACE,
    'dx': DEFAULT_NAMESPACE,
    'dy': DEFAULT_NAMESPACE,
    'edgeMode': DEFAULT_NAMESPACE,
    'editable': DEFAULT_NAMESPACE,
    'elevation': DEFAULT_NAMESPACE,
    'enable-background': DEFAULT_NAMESPACE,
    'end': DEFAULT_NAMESPACE,
    'ev:event': EV_NAMESPACE,
    'event': DEFAULT_NAMESPACE,
    'exponent': DEFAULT_NAMESPACE,
    'externalResourcesRequired': DEFAULT_NAMESPACE,
    'fill': DEFAULT_NAMESPACE,
    'fill-opacity': DEFAULT_NAMESPACE,
    'fill-rule': DEFAULT_NAMESPACE,
    'filter': DEFAULT_NAMESPACE,
    'filterRes': DEFAULT_NAMESPACE,
    'filterUnits': DEFAULT_NAMESPACE,
    'flood-color': DEFAULT_NAMESPACE,
    'flood-opacity': DEFAULT_NAMESPACE,
    'focusHighlight': DEFAULT_NAMESPACE,
    'focusable': DEFAULT_NAMESPACE,
    'font-family': DEFAULT_NAMESPACE,
    'font-size': DEFAULT_NAMESPACE,
    'font-size-adjust': DEFAULT_NAMESPACE,
    'font-stretch': DEFAULT_NAMESPACE,
    'font-style': DEFAULT_NAMESPACE,
    'font-variant': DEFAULT_NAMESPACE,
    'font-weight': DEFAULT_NAMESPACE,
    'format': DEFAULT_NAMESPACE,
    'from': DEFAULT_NAMESPACE,
    'fx': DEFAULT_NAMESPACE,
    'fy': DEFAULT_NAMESPACE,
    'g1': DEFAULT_NAMESPACE,
    'g2': DEFAULT_NAMESPACE,
    'glyph-name': DEFAULT_NAMESPACE,
    'glyph-orientation-horizontal': DEFAULT_NAMESPACE,
    'glyph-orientation-vertical': DEFAULT_NAMESPACE,
    'glyphRef': DEFAULT_NAMESPACE,
    'gradientTransform': DEFAULT_NAMESPACE,
    'gradientUnits': DEFAULT_NAMESPACE,
    'handler': DEFAULT_NAMESPACE,
    'hanging': DEFAULT_NAMESPACE,
    'height': DEFAULT_NAMESPACE,
    'horiz-adv-x': DEFAULT_NAMESPACE,
    'horiz-origin-x': DEFAULT_NAMESPACE,
    'horiz-origin-y': DEFAULT_NAMESPACE,
    'id': DEFAULT_NAMESPACE,
    'ideographic': DEFAULT_NAMESPACE,
    'image-rendering': DEFAULT_NAMESPACE,
    'in': DEFAULT_NAMESPACE,
    'in2': DEFAULT_NAMESPACE,
    'initialVisibility': DEFAULT_NAMESPACE,
    'intercept': DEFAULT_NAMESPACE,
    'k': DEFAULT_NAMESPACE,
    'k1': DEFAULT_NAMESPACE,
    'k2': DEFAULT_NAMESPACE,
    'k3': DEFAULT_NAMESPACE,
    'k4': DEFAULT_NAMESPACE,
    'kernelMatrix': DEFAULT_NAMESPACE,
    'kernelUnitLength': DEFAULT_NAMESPACE,
    'kerning': DEFAULT_NAMESPACE,
    'keyPoints': DEFAULT_NAMESPACE,
    'keySplines': DEFAULT_NAMESPACE,
    'keyTimes': DEFAULT_NAMESPACE,
    'lang': DEFAULT_NAMESPACE,
    'lengthAdjust': DEFAULT_NAMESPACE,
    'letter-spacing': DEFAULT_NAMESPACE,
    'lighting-color': DEFAULT_NAMESPACE,
    'limitingConeAngle': DEFAULT_NAMESPACE,
    'local': DEFAULT_NAMESPACE,
    'marker-end': DEFAULT_NAMESPACE,
    'marker-mid': DEFAULT_NAMESPACE,
    'marker-start': DEFAULT_NAMESPACE,
    'markerHeight': DEFAULT_NAMESPACE,
    'markerUnits': DEFAULT_NAMESPACE,
    'markerWidth': DEFAULT_NAMESPACE,
    'mask': DEFAULT_NAMESPACE,
    'maskContentUnits': DEFAULT_NAMESPACE,
    'maskUnits': DEFAULT_NAMESPACE,
    'mathematical': DEFAULT_NAMESPACE,
    'max': DEFAULT_NAMESPACE,
    'media': DEFAULT_NAMESPACE,
    'mediaCharacterEncoding': DEFAULT_NAMESPACE,
    'mediaContentEncodings': DEFAULT_NAMESPACE,
    'mediaSize': DEFAULT_NAMESPACE,
    'mediaTime': DEFAULT_NAMESPACE,
    'method': DEFAULT_NAMESPACE,
    'min': DEFAULT_NAMESPACE,
    'mode': DEFAULT_NAMESPACE,
    'name': DEFAULT_NAMESPACE,
    'nav-down': DEFAULT_NAMESPACE,
    'nav-down-left': DEFAULT_NAMESPACE,
    'nav-down-right': DEFAULT_NAMESPACE,
    'nav-left': DEFAULT_NAMESPACE,
    'nav-next': DEFAULT_NAMESPACE,
    'nav-prev': DEFAULT_NAMESPACE,
    'nav-right': DEFAULT_NAMESPACE,
    'nav-up': DEFAULT_NAMESPACE,
    'nav-up-left': DEFAULT_NAMESPACE,
    'nav-up-right': DEFAULT_NAMESPACE,
    'numOctaves': DEFAULT_NAMESPACE,
    'observer': DEFAULT_NAMESPACE,
    'offset': DEFAULT_NAMESPACE,
    'opacity': DEFAULT_NAMESPACE,
    'operator': DEFAULT_NAMESPACE,
    'order': DEFAULT_NAMESPACE,
    'orient': DEFAULT_NAMESPACE,
    'orientation': DEFAULT_NAMESPACE,
    'origin': DEFAULT_NAMESPACE,
    'overflow': DEFAULT_NAMESPACE,
    'overlay': DEFAULT_NAMESPACE,
    'overline-position': DEFAULT_NAMESPACE,
    'overline-thickness': DEFAULT_NAMESPACE,
    'panose-1': DEFAULT_NAMESPACE,
    'path': DEFAULT_NAMESPACE,
    'pathLength': DEFAULT_NAMESPACE,
    'patternContentUnits': DEFAULT_NAMESPACE,
    'patternTransform': DEFAULT_NAMESPACE,
    'patternUnits': DEFAULT_NAMESPACE,
    'phase': DEFAULT_NAMESPACE,
    'playbackOrder': DEFAULT_NAMESPACE,
    'pointer-events': DEFAULT_NAMESPACE,
    'points': DEFAULT_NAMESPACE,
    'pointsAtX': DEFAULT_NAMESPACE,
    'pointsAtY': DEFAULT_NAMESPACE,
    'pointsAtZ': DEFAULT_NAMESPACE,
    'preserveAlpha': DEFAULT_NAMESPACE,
    'preserveAspectRatio': DEFAULT_NAMESPACE,
    'primitiveUnits': DEFAULT_NAMESPACE,
    'propagate': DEFAULT_NAMESPACE,
    'property': DEFAULT_NAMESPACE,
    'r': DEFAULT_NAMESPACE,
    'radius': DEFAULT_NAMESPACE,
    'refX': DEFAULT_NAMESPACE,
    'refY': DEFAULT_NAMESPACE,
    'rel': DEFAULT_NAMESPACE,
    'rendering-intent': DEFAULT_NAMESPACE,
    'repeatCount': DEFAULT_NAMESPACE,
    'repeatDur': DEFAULT_NAMESPACE,
    'requiredExtensions': DEFAULT_NAMESPACE,
    'requiredFeatures': DEFAULT_NAMESPACE,
    'requiredFonts': DEFAULT_NAMESPACE,
    'requiredFormats': DEFAULT_NAMESPACE,
    'resource': DEFAULT_NAMESPACE,
    'restart': DEFAULT_NAMESPACE,
    'result': DEFAULT_NAMESPACE,
    'rev': DEFAULT_NAMESPACE,
    'role': DEFAULT_NAMESPACE,
    'rotate': DEFAULT_NAMESPACE,
    'rx': DEFAULT_NAMESPACE,
    'ry': DEFAULT_NAMESPACE,
    'scale': DEFAULT_NAMESPACE,
    'seed': DEFAULT_NAMESPACE,
    'shape-rendering': DEFAULT_NAMESPACE,
    'slope': DEFAULT_NAMESPACE,
    'snapshotTime': DEFAULT_NAMESPACE,
    'spacing': DEFAULT_NAMESPACE,
    'specularConstant': DEFAULT_NAMESPACE,
    'specularExponent': DEFAULT_NAMESPACE,
    'spreadMethod': DEFAULT_NAMESPACE,
    'startOffset': DEFAULT_NAMESPACE,
    'stdDeviation': DEFAULT_NAMESPACE,
    'stemh': DEFAULT_NAMESPACE,
    'stemv': DEFAULT_NAMESPACE,
    'stitchTiles': DEFAULT_NAMESPACE,
    'stop-color': DEFAULT_NAMESPACE,
    'stop-opacity': DEFAULT_NAMESPACE,
    'strikethrough-position': DEFAULT_NAMESPACE,
    'strikethrough-thickness': DEFAULT_NAMESPACE,
    'string': DEFAULT_NAMESPACE,
    'stroke': DEFAULT_NAMESPACE,
    'stroke-dasharray': DEFAULT_NAMESPACE,
    'stroke-dashoffset': DEFAULT_NAMESPACE,
    'stroke-linecap': DEFAULT_NAMESPACE,
    'stroke-linejoin': DEFAULT_NAMESPACE,
    'stroke-miterlimit': DEFAULT_NAMESPACE,
    'stroke-opacity': DEFAULT_NAMESPACE,
    'stroke-width': DEFAULT_NAMESPACE,
    'surfaceScale': DEFAULT_NAMESPACE,
    'syncBehavior': DEFAULT_NAMESPACE,
    'syncBehaviorDefault': DEFAULT_NAMESPACE,
    'syncMaster': DEFAULT_NAMESPACE,
    'syncTolerance': DEFAULT_NAMESPACE,
    'syncToleranceDefault': DEFAULT_NAMESPACE,
    'systemLanguage': DEFAULT_NAMESPACE,
    'tableValues': DEFAULT_NAMESPACE,
    'target': DEFAULT_NAMESPACE,
    'targetX': DEFAULT_NAMESPACE,
    'targetY': DEFAULT_NAMESPACE,
    'text-anchor': DEFAULT_NAMESPACE,
    'text-decoration': DEFAULT_NAMESPACE,
    'text-rendering': DEFAULT_NAMESPACE,
    'textLength': DEFAULT_NAMESPACE,
    'timelineBegin': DEFAULT_NAMESPACE,
    'title': DEFAULT_NAMESPACE,
    'to': DEFAULT_NAMESPACE,
    'transform': DEFAULT_NAMESPACE,
    'transformBehavior': DEFAULT_NAMESPACE,
    'type': DEFAULT_NAMESPACE,
    'typeof': DEFAULT_NAMESPACE,
    'u1': DEFAULT_NAMESPACE,
    'u2': DEFAULT_NAMESPACE,
    'underline-position': DEFAULT_NAMESPACE,
    'underline-thickness': DEFAULT_NAMESPACE,
    'unicode': DEFAULT_NAMESPACE,
    'unicode-bidi': DEFAULT_NAMESPACE,
    'unicode-range': DEFAULT_NAMESPACE,
    'units-per-em': DEFAULT_NAMESPACE,
    'v-alphabetic': DEFAULT_NAMESPACE,
    'v-hanging': DEFAULT_NAMESPACE,
    'v-ideographic': DEFAULT_NAMESPACE,
    'v-mathematical': DEFAULT_NAMESPACE,
    'values': DEFAULT_NAMESPACE,
    'version': DEFAULT_NAMESPACE,
    'vert-adv-y': DEFAULT_NAMESPACE,
    'vert-origin-x': DEFAULT_NAMESPACE,
    'vert-origin-y': DEFAULT_NAMESPACE,
    'viewBox': DEFAULT_NAMESPACE,
    'viewTarget': DEFAULT_NAMESPACE,
    'visibility': DEFAULT_NAMESPACE,
    'width': DEFAULT_NAMESPACE,
    'widths': DEFAULT_NAMESPACE,
    'word-spacing': DEFAULT_NAMESPACE,
    'writing-mode': DEFAULT_NAMESPACE,
    'x': DEFAULT_NAMESPACE,
    'x-height': DEFAULT_NAMESPACE,
    'x1': DEFAULT_NAMESPACE,
    'x2': DEFAULT_NAMESPACE,
    'xChannelSelector': DEFAULT_NAMESPACE,
    'xlink:actuate': XLINK_NAMESPACE,
    'xlink:arcrole': XLINK_NAMESPACE,
    'xlink:href': XLINK_NAMESPACE,
    'xlink:role': XLINK_NAMESPACE,
    'xlink:show': XLINK_NAMESPACE,
    'xlink:title': XLINK_NAMESPACE,
    'xlink:type': XLINK_NAMESPACE,
    'xml:base': XML_NAMESPACE,
    'xml:id': XML_NAMESPACE,
    'xml:lang': XML_NAMESPACE,
    'xml:space': XML_NAMESPACE,
    'y': DEFAULT_NAMESPACE,
    'y1': DEFAULT_NAMESPACE,
    'y2': DEFAULT_NAMESPACE,
    'yChannelSelector': DEFAULT_NAMESPACE,
    'z': DEFAULT_NAMESPACE,
    'zoomAndPan': DEFAULT_NAMESPACE
};

function thisIsSVGTag(tag) {
    return SVG_ELEMENTS.hasOwnProperty(tag);
}

function getSVGNamespace() {
    return SVG_NAMESPACE;
}

function getSVGAttributeNamespace(value) {
    if (SVG_PROPERTIES.hasOwnProperty(value)) {
        return SVG_PROPERTIES[value];
    }
}

var thisIsSVGTag_1 = thisIsSVGTag;

var getSVGNamespace_1 = getSVGNamespace;

var getSVGAttributeNamespace_1 = getSVGAttributeNamespace;

var svgNamespaces = {
	thisIsSVGTag: thisIsSVGTag_1,
	getSVGNamespace: getSVGNamespace_1,
	getSVGAttributeNamespace: getSVGAttributeNamespace_1
};

// code pulled from https://www.npmjs.com/package/html2hyperscript
var Parser$1 = lib$2.Parser;



var thisIsSVGTag$1 = svgNamespaces.thisIsSVGTag,
    getSVGNamespace$1 = svgNamespaces.getSVGNamespace,
    getSVGAttributeNamespace$1 = svgNamespaces.getSVGAttributeNamespace;

var elementStack = [];

function ItemList(parent) {
    this.parent = parent;
    this.content = '';
    this.spacer = '';
    this.indent = parent ? parent.indent : '';
    this.isFirstItem = true;
}

ItemList.prototype.addSpace = function (space) {
    this.spacer += space;

    if (space.indexOf("\n") !== -1) {
        // reset indent when there are new lines
        this.indent = /[^\n]*$/.exec(space)[0];
    } else {
        // otherwise keep appending to current indent
        this.indent += space;
    }
};

ItemList.prototype.add = function (data, ignoreComma) {
    if (!ignoreComma) {
        if (!this.isFirstItem) {
            this.content += this.spacer.length ? ',' : ', ';
        }

        this.isFirstItem = false;
    }

    this.content += this.spacer;
    this.spacer = '';

    this.content += data;
};

var html2hscript = function(html, cb) {
    var currentItemList = new ItemList(null);

    var parser = new Parser$1({
        onopentag: function (name, attribs) {
            currentItemList = new ItemList(currentItemList);
            elementStack.unshift([ name, attribs ]);
        },
        ontext: function (text) {
            currentItemList.add(JSON.stringify(ent.decode(text)));
            /*var lines = text.split("\n");

             var isFirst = true;

             lines.forEach(function (line) {
             var lineMatch = /^(\s*)(.*?)(\s*)$/.exec(line);

             var preSpace = lineMatch[1],
             mainText = lineMatch[2],
             postSpace = lineMatch[3];

             if (!isFirst) {
             currentItemList.addSpace("\n");
             }

             currentItemList.addSpace(preSpace);

             if (mainText.length > 0) {
             currentItemList.add(JSON.stringify(mainText));
             }

             isFirst = false;
             });*/
        },
        onclosetag: function (tagname) {
            var element = elementStack.shift();
            var elementContent = currentItemList.content + currentItemList.spacer;

            currentItemList = currentItemList.parent;

            var indent = currentItemList.indent;

            var attribs = element[1];

            var id = attribs['id'];

            var idSuffix = id !== undefined ? '#' + id : '';
            delete attribs['id'];

            var classNames = attribs['class'];
            var classSuffix;
            if ( !thisIsSVGTag$1( element[ 0 ] ) ) {
                classSuffix = (classNames !== undefined ? classNames : '').split(/\s+/g).filter(function(v) {
                    return v.length > 0;
                }).map(function(cls) {
                    return '.' + cls;
                }).join('');
                delete attribs['class'];
            } else {
                classSuffix = '';
            }
            // Convert inline CSS style attribute to an object
            if(attribs['style']){
                var rules = attribs["style"].split(";");
                attribs["style"] = {};
                rules.forEach(function(rule){
                    var split = rule.split(":");
                    if(split.length == 2){
                        attribs["style"][split[0].trim()] = split[1].trim();
                    }
                });
            }

            var style = attribs['style'];
            delete attribs['style'];

            var dataset = {};
            var datasetKey;
            Object.keys(attribs).forEach(function (k) {
                if (k.slice(0, 5) === 'data-') {
                    datasetKey = toCamelCase_1(k.slice(5));
                    dataset[datasetKey] = attribs[k];
                    delete attribs[k];
                }
            });

            var attrPairs = Object.keys( attribs ).map( function ( k ) {
                return JSON.stringify( k ) + ': ' + JSON.stringify( attribs[ k ] )
            } );
            var datasetPairs = Object.keys( dataset ).map( function ( k ) {
                return JSON.stringify( k ) + ': ' + JSON.stringify( dataset[ k ] )
            } );

            var objects = {};
            if (attribs.value) {
                objects.value = attribs.value;
                delete attribs.value;
            }
            if ( !isEmpty_1( style ) ) objects.style = style;
            if ( !isEmpty_1( attribs ) ) objects.attributes = attribs;
            if ( !isEmpty_1( dataset ) ) objects.dataset = dataset;
            if ( thisIsSVGTag$1( element[ 0 ] ) ) {
                objects.namespace = getSVGNamespace$1();

                Object.keys(attribs).forEach(function (k) {
                    var namespace = getSVGAttributeNamespace$1(k);

                    if (namespace === void 0) { // not a svg attribute
                        return;
                    }

                    var value = objects.attributes[ k ];

                    if (typeof value !== 'string' &&
                        typeof value !== 'number' &&
                        typeof value !== 'boolean'
                    ) {
                        return;
                    }

                    if (namespace !== null) { // namespaced attribute
                        objects[ k ] = 'SVGAttributeHook(\'' + namespace + '\',\'' + value + '\')';
                    }
                });
            }
            var objectStr = !isEmpty_1(objects) ? JSON.stringify(objects) : "";

            var item = 'h(' + JSON.stringify(element[0] + idSuffix + classSuffix) + (
                    (objectStr !== "") ? ", " + objectStr : ""
                )
                    //     attrPairs.length || datasetPairs.length
                    //         ? ", { \"attributes\": { "
                    //         : ''
                    // ) + (
                    //     attrPairs.length
                    //         ? attrPairs.join(",\n" + indent + '    ')
                    //         : ''
                    // ) + (
                    //     datasetPairs.length && attrPairs.length
                    //         ? ",\n" + indent + '    '
                    //         : ''
                    // ) + (
                    //     datasetPairs.length
                    //         ? "\"dataset\": { " + datasetPairs.join(",\n" + indent + '    ') + "}"
                    //         : ''
                    // ) + (
                    //     attrPairs.length || datasetPairs.length
                    //         ? "}}"
                    //         : ''
                    // )

                + (
                    elementContent.length
                        ? ', [' + (elementContent[0] === "\n" ? '' : ' ') + elementContent + (elementContent.match(/\s$/) ? '' : ' ') + ']'
                        : ''
                ) + ')';

            currentItemList.add(item);
        },
        oncomment: function (text) {
            currentItemList.add('/*' + text + '*/', false); // @todo comment-safety
        },
        onend: function () {
            cb(null, currentItemList.content);
        }
    }, {decodeEntities: true, xmlMode: true});

    parser.write(html);
    parser.end();
};

export default html2hscript;
