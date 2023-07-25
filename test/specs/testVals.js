//first, the positive tests, starting with the equivalence partitions

posEPus = [
    "Le' a-Marie",
    "O’ Conn-él",
    "Le'a-Marie.0'¢onn-31@autest.net",
    "P@ss w0rD",
    "P@ss w0rD",
    "Rue de l’Église",
    "Apt #86",
    "United States",
    "Baden-Württemberg",
    "California",
    "90210",
    "555-555-0123"
]

posEPca = [
    "Le' a-Marie",
    "O’ Conn-él",
    "Le'a-Marie.0'¢onn-31@autest.net",
    "P@ss w0rD",
    "P@ss w0rD",
    "Rue de l’Église",
    "Apt #86",
    "Canada",
    "Baden-Württemberg",
    "BC",
    "X1M 1M7",
    "555-555-0123"
]

posEPuk = [
    "Le' a-Marie",
    "O’ Conn-él",
    "Le'a-Marie.0'¢onn-31@autest.net",
    "P@ss w0rD",
    "P@ss w0rD",
    "Rue de l’Église",
    "Apt #86",
    "United Kingdom",
    "Baden-Württemberg",
    null,
    "SW1W 0NY",
    "555-555-0123"
]

//now the boundary values, the low ones

posBVALus = [
    "Lea",
    "Con",
    "ai@k.st",
    "N0 pa$",
    "N0 pa$",
    "Rued",
    "#86",
    "United States",
    "Hull",
    "CA",
    "00000",
    "000-000-0000",
]

posBVALca = [
    "Lea",
    "Con",
    "ai@k.st",
    "N0 pa$",
    "N0 pa$",
    "Rued",
    "#86",
    "Canada",
    "Hull",
    "BC",
    "A1A 1A1",
    "000-000-0000"
]

posBVALuk = [
    "Lea",
    "Con",
    "ai@k.st",
    "N0 pa$",
    "N0 pa$",
    "Rued",
    "#86",
    "United Kingdom",
    "Hull",
    null,
    "A1A 1A1",
    "000-000-0000"
]

//and the high ones
posBVAHus = [
    "Le' a-Marie Le' a-Marie Le' a-Marie Le' a-Marie Le' a-Marie Le' a-Marie Le' a",
    "O’ Conn-él O’ Conn-él O’ Conn-él O’ Conn-él O’ Conn-él O’ Conn-él O’ Conn-él O",
    "12345678901234567890123456789012345678901234567890123@autest.net",
    "P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss",
    "P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss",
    "Rue de l’Église Rue de l’Église Rue de l’Église Rue de l’Église Rued",
    "Apartment 7",
    "United States",
    "Llanfairpwllgwyngyllgogerychwndrobwllllantysiliogogogoch",
    "CA",
    "99999",
    "999-999-9999"
]

posBVAHca = [
    "Le' a-Marie Le' a-Marie Le' a-Marie Le' a-Marie Le' a-Marie Le' a-Marie Le' a",
    "O’ Conn-él O’ Conn-él O’ Conn-él O’ Conn-él O’ Conn-él O’ Conn-él O’ Conn-él O",
    "12345678901234567890123456789012345678901234567890123@autest.net",
    "P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss",
    "P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss",
    "Rue de l’Église Rue de l’Église Rue de l’Église Rue de l’Église Rued",
    "Apartment 7",
    "Canada",
    "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu",
    "BC",
    "1234567890",
    "999-999-9999"
]

posBVAHuk = [
    "Le' a-Marie Le' a-Marie Le' a-Marie Le' a-Marie Le' a-Marie Le' a-Marie Le' a",
    "O’ Conn-él O’ Conn-él O’ Conn-él O’ Conn-él O’ Conn-él O’ Conn-él O’ Conn-él O",
    "12345678901234567890123456789012345678901234567890123@autest.net",
    "P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss",
    "P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss",
    "Rue de l’Église Rue de l’Église Rue de l’Église Rue de l’Église Rued",
    "Apartment 7",
    "United Kingdom",
    "Llanfairpwllgwyngyllgogerychwndrobwllllantysiliogogogoch",
    null,
    "1234567890",
    "999-999-9999"
]

// now for the negative values, one for each field

negFirstName = [
    "Le' @-M@rie",
    "L3' a-Mari3",
    "",
    "Hi",
    "L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3",
    "Hi",
    "L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3 L3' @-M@ri3"
]

negLastName = [
    "O' ¢onn-el",
    "0' Conn-31",
    null,
    "Hi",
    "0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31",
    "Hi",
    "0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31 0' ¢onn-31"
]

negEmail = [
    "Le'a-Marie.0'¢onn-31@autest.net@",
    "@Le'a-Marie.0'¢onn-31@autest.net",
    null,
    "Le' a-Marie. 0'¢onn-31@autest.net",
    "a@k.st",
    "Le'a-Marie.0'¢onn-31@autest.net Le'a-Marie.0'¢onn-31@autest.net Le'",
    "a@k.st",
    "Le'a-Marie.0'¢onn-31@autest.net Le'a-Marie.0'¢onn-31@autest.net Le'"
]

negPassword = [
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

negConfirmPassword = [
    "p@SS W0Rd"
]

negPhysAddress = [
    "Rue de l’Égli$e",
    "Rue",
    "Rue de l’Église Rue de l’Église Rue de l’Église Rue de l’Église Rue d",
    null,
    "Rue",
    "Rue de l’Église Rue de l’Église Rue de l’Église Rue de l’Église Rue d"
]

negAptSuiteUnit = [
    "@pt 86",
    "0 Apt",
    "86",
    "Apartment 86",
    "86",
    "Apartment 86"
]

negCountry =[
    "Select a country"
]

negCity = [
    "B@den-Württemberg",
    "Bad3n-Württ3mb3rg",
    "Ode",
    "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu",
    null,
    "Ode",
    "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"
]
//these ones are country specific. 
negStateUS = [
    "State"
]

negProvinceCA = [
    "Province"
]

negZipUS = [
    "9021Ω",
    "9012Ö",
    "9021O",
    "9 210",
    "9021",
    "902101"
]

negPostalCA = [
    "X1M 1M",
    "X1M 1M7",
    "X1M 1M7",
    "XM1 1M7",
    "Z1M 1M7",
    "X1M 1D7",
    "X1M 1M",
    "X1M 1M7A",
]

negPostalOther = [
    "SW1SℴNY",
    "01",
    "12345678901"
]

// but not this one. this one is the last one.
negPhone = [
    "5s5-555-0123",
    "5 5-555-0123",
    "5§5-555-0123",
    "555-555-ℴ123",
    "555-555-012",
    "555-555-01234",
    "555-555-012",
    "555-555-01234"
]