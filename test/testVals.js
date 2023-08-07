//first, the positive tests, starting with the equivalence partitions
export class testVals {
static posEPus = [
    "Le' a-Marie",
    "O’ Conn-él",
    "Le'a-Marie.0'¢onn-31@autest.net",
    "P@ss w0rD",
    "P@ss w0rD",
    "Rue de l’Église",
    "Apt #86",
    "UNITED STATES",
    "Baden-Württemberg",
    "CA",
    "90210",
    "555-555-0123"
]

static posEPca = [
    "Le' a-Marie",
    "O’ Conn-él",
    "Le'a-Marie.0'¢onn-31@autest.net",
    "P@ss w0rD",
    "P@ss w0rD",
    "Rue de l’Église",
    "Apt #86",
    "CANADA",
    "Baden-Württemberg",
    "BC",
    "X1M 1M7",
    "555-555-0123"
]

static posEPuk = [
    "Le' a-Marie",
    "O’ Conn-él",
    "Le'a-Marie.0'¢onn-31@autest.net",
    "P@ss w0rD",
    "P@ss w0rD",
    "Rue de l’Église",
    "Apt #86",
    "UNITED KINGDOM",
    "Baden-Württemberg",
    "",
    "SW1W 0NY",
    "555-555-0123"
]

//now the boundary values, the low ones

static posBVALus = [
    "Lea",
    "Con",
    "ai@k.st",
    "N0 pa$",
    "N0 pa$",
    "Rued",
    "#86",
    "UNITED STATES",
    "Hull",
    "CA",
    "00000",
    "000-000-0000",
]

static posBVALca = [
    "Lea",
    "Con",
    "ai@k.st",
    "N0 pa$",
    "N0 pa$",
    "Rued",
    "#86",
    "CANADA",
    "Hull",
    "BC",
    "A1A 1A1",
    "000-000-0000"
]

static posBVALuk = [
    "Lea",
    "Con",
    "ai@k.st",
    "N0 pa$",
    "N0 pa$",
    "Rued",
    "#86",
    "UNITED KINGDOM",
    "Hull",
    "",
    "A1A 1A1",
    "000-000-0000"
]

//and the high ones
static posBVAHus = [
    "Le' a-Marie Le' a-Marie Le' a-Marie Le' a-Marie Le' a-Marie Le' a-Marie Le' a",
    "O’ Conn-él O’ Conn-él O’ Conn-él O’ Conn-él O’ Conn-él O’ Conn-él O’ Conn-él O",
    "12345678901234567890123456789012345678901234567890123@autest.net",
    "P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss",
    "P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss",
    "Rue de l’Église Rue de l’Église Rue de l’Église Rue de l’Église Rued",
    "Apartment 7",
    "UNITED STATES",
    "Llanfairpwllgwyngyllgogerychwndrobwllllantysiliogogogoch",
    "CA",
    "99999",
    "999-999-9999"
]

static posBVAHca = [
    "Le' a-Marie Le' a-Marie Le' a-Marie Le' a-Marie Le' a-Marie Le' a-Marie Le' a",
    "O’ Conn-él O’ Conn-él O’ Conn-él O’ Conn-él O’ Conn-él O’ Conn-él O’ Conn-él O",
    "12345678901234567890123456789012345678901234567890123@autest.net",
    "P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss",
    "P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss",
    "Rue de l’Église Rue de l’Église Rue de l’Église Rue de l’Église Rued",
    "Apartment 7",
    "CANADA",
    "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu",
    "BC",
    "1234567890",
    "999-999-9999"
]

static posBVAHuk = [
    "Le' a-Marie Le' a-Marie Le' a-Marie Le' a-Marie Le' a-Marie Le' a-Marie Le' a",
    "O’ Conn-él O’ Conn-él O’ Conn-él O’ Conn-él O’ Conn-él O’ Conn-él O’ Conn-él O",
    "12345678901234567890123456789012345678901234567890123@autest.net",
    "P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss",
    "P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss",
    "Rue de l’Église Rue de l’Église Rue de l’Église Rue de l’Église Rued",
    "Apartment 7",
    "UNITED KINGDOM",
    "Llanfairpwllgwyngyllgogerychwndrobwllllantysiliogogogoch",
    "",
    "1234567890",
    "999-999-9999"
]

// now for the negative values, one for each field

static negFirstName = [
    ["Le' @-M@rie",                                                                                                                             "X1"],
    ["L3' a-Mari3",                                                                                                                             "X2"],
    ["",                                                                                                                                        "X3"],
    ["Hi",                                                                                                                                      "X4"],
    ["L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3",     "X5"],
    ["Hi",                                                                                                                                      "D1"],
    ["L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3",     "D2"]
]

static negLastName = [
    ["O' ¢onn-el",                                                                                  "X6"],
    ["0' Conn-31",                                                                                  "X7"],
    ["",                                                                                            "X8"],
    ["Hi",                                                                                          "X9"],
    ["0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31",     "X10"],
    ["Hi",                                                                                          "D3"],
    ["0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31",     "D4"],
]

static negEmail = [
    ["Le'a-Marie.0'¢onn-31@autest.net@",                                        "X11"]
    ["@Le'a-Marie.0'¢onn-31@autest.net",                                        "X12"]
    ["",                                                                        "X13"]
    ["Le' a-Marie. 0'¢onn-31@autest.net",                                       "X14"]
    ["a@k.st",                                                                  "X15"]
    ["Le'a-Marie.0'¢onn-31@autest.net Le'a-Marie.0'¢onn-31@autest.net Le'",     "X16"]
    ["a@k.st",                                                                  "D5"]
    ["Le'a-Marie.0'¢onn-31@autest.net Le'a-Marie.0'¢onn-31@autest.net Le'",     "D6"]
]

static negPassword = [
    ["p@ss w0rd",                                                           "X17"],
    ["P@SS W0RD",                                                           "X18"],
    ["Le' a-Marie",                                                         "X19"],
    ["O’ Conn-él",                                                          "X20"],
    ["Le'a-Marie.0'¢onn-31@autest.net",                                     "X21"],
    ["p@ssw",                                                               "X22"],
    ["p@ss w0rd p@ss w0rd p@ss w0rd p@ss w0rd p@ss w0rd p@ss w0rd p@ss",    "X23"],
    ["",                                                                    "X24"],
    ["p@ssw",                                                               "D7"],
    ["p@ss w0rd p@ss w0rd p@ss w0rd p@ss w0rd p@ss w0rd p@ss w0rd p@ss",    "D8"],
]

static negConfirmPassword = [
    ["p@SS W0Rd",   "X25"],
    ["",            "X26"]
]

static negPhysAddress = [
    ["Rue de l’Égli$e",                                                         "X27"],
    ["Rue",                                                                     "X28"],
    ["Rue de l’Église Rue de l’Église Rue de l’Église Rue de l’Église Rue d",   "X29"],
    ["",                                                                        "X30"],
    ["Rue",                                                                     "D9"],
    ["Rue de l’Église Rue de l’Église Rue de l’Église Rue de l’Église Rue d",   "D10"],
]

static negAptSuiteUnit = [
    ["@pt 86",          "X31"],
    ["0 Apt",           "X32"],
    ["86",              "X33"],
    ["Apartment 86",    "X34"],
    ["86",              "D11"],
    ["Apartment 86",    "D12"],

]

static negCountry =[
    ["Select a country", "X35"]
]

static negCity = [
    ["B@den-Württemberg",                                                                       "X36"],
    ["Bad3n-Württ3mb3rg",                                                                       "X37"],
    ["Ode",                                                                                     "X38"],
    ["Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu",   "X39"],
    ["",                                                                                        "X40"],
    ["Ode",                                                                                     "D13"],
    ["Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu",   "D14"]
]
//these ones are country specific. 
static negStateUS = [
    ["State", "X41"]
]

static negProvinceCA = [
    ["Province", "X42"]
]

static negZipUS = [
    ["9021Ω",   "X43"],
    ["9012Ö",   "X44"],
    ["9021O",   "X45"],
    ["9 210",   "X46"],
    ["",        "X47"],
    ["9021",    "D15"],
    ["902101",  "D16"],
]

static negPostalCA = [
    ["X1M 1M",      "X48"],
    ["X1M 1M7A",    "X49"],
    ["X!M 1M7",     "X50"],
    ["XM1 1M7",     "X51"],
    ["Z1M 1M7",     "X52"],
    ["X1M 1D7",     "X53"],
    ["X1M 1M",      "D17"],
    ["X1M 1M7A",    "D18"],
]

static negPostalOther = [
    ["SW1SℴNY",         "X54"],
    ["01",              "D19"],
    ["12345678901",     "D20"]
]

// but not this one. this one is the last one.
static negPhone = [
    ["5s5-555-0123",    "X55"],
    ["5 5-555-0123",    "X56"],
    ["5§5-555-0123",    "X57"],
    ["555-555-ℴ123",    "X58"],
    ["555-555-012",     "X59"],
    ["555-555-01234",   "X60"],
    ["555-555-012",     "D21"],
    ["555-555-01234",   "D22"]
]
}