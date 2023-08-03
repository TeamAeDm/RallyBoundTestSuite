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
    "California",
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
    null,
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
    null,
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
    null,
    "1234567890",
    "999-999-9999"
]

// now for the negative values, one for each field

static negFirstName = [
    "Le' @-M@rie",
    "L3' a-Mari3",
    "",
    "Hi",
    "L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3",
    "Hi",
    "L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3"
]

static negLastName = [
    "O' ¢onn-el",
    "0' Conn-31",
    null,
    "Hi",
    "0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31",
    "Hi",
    "0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31"
]

static negEmail = [
    "Le'a-Marie.0'¢onn-31@autest.net@",
    "@Le'a-Marie.0'¢onn-31@autest.net",
    null,
    "Le' a-Marie. 0'¢onn-31@autest.net",
    "a@k.st",
    "Le'a-Marie.0'¢onn-31@autest.net Le'a-Marie.0'¢onn-31@autest.net Le'",
    "a@k.st",
    "Le'a-Marie.0'¢onn-31@autest.net Le'a-Marie.0'¢onn-31@autest.net Le'"
]

static negPassword = [
    "p@ss w0rd",
    "P@SS W0RD",
    "Le' a-Marie",
    "O’ Conn-él",
    "Le'a-Marie.0'¢onn-31@autest.net",
    "p@ssw",
    "p@ss w0rd p@ss w0rd p@ss w0rd p@ss w0rd p@ss w0rd p@ss w0rd p@ss",
    null,
    "p@ssw",
    "p@ss w0rd p@ss w0rd p@ss w0rd p@ss w0rd p@ss w0rd p@ss w0rd p@ss"
]

static negConfirmPassword = [
    "p@SS W0Rd"
]

static negPhysAddress = [
    "Rue de l’Égli$e",
    "Rue",
    "Rue de l’Église Rue de l’Église Rue de l’Église Rue de l’Église Rue d",
    null,
    "Rue",
    "Rue de l’Église Rue de l’Église Rue de l’Église Rue de l’Église Rue d"
]

static negAptSuiteUnit = [
    "@pt 86",
    "0 Apt",
    "86",
    "Apartment 86",
    "86",
    "Apartment 86"
]

static negCountry =[
    "Select a country"
]

static negCity = [
    "B@den-Württemberg",
    "Bad3n-Württ3mb3rg",
    "Ode",
    "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu",
    null,
    "Ode",
    "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"
]
//these ones are country specific. 
static negStateUS = [
    "State"
]

static negProvinceCA = [
    "Province"
]

static negZipUS = [
    "9021Ω",
    "9012Ö",
    "9021O",
    "9 210",
    "9021",
    "902101"
]

static negPostalCA = [
    "X1M 1M",
    "X1M 1M7",
    "X1M 1M7",
    "XM1 1M7",
    "Z1M 1M7",
    "X1M 1D7",
    "X1M 1M",
    "X1M 1M7A",
]

static negPostalOther = [
    "SW1SℴNY",
    "01",
    "12345678901"
]

// but not this one. this one is the last one.
static negPhone = [
    "5s5-555-0123",
    "5 5-555-0123",
    "5§5-555-0123",
    "555-555-ℴ123",
    "555-555-012",
    "555-555-01234",
    "555-555-012",
    "555-555-01234"
]
}