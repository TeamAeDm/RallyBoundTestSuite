/* static posTemplate = [
    ["first name",                          "tags"],
    ["last name",                           "tags"],
    ["email address",                       "tags"],
    ["password",                            "tags"],
    ["confirm password",                    "tags"],
    ["address",                             "tags"],
    ["apt suite or space num",              "tags"],
    ["country name",                        "tags"],
    ["city name",                           "tags"],
    ["state/prov abbreviation",             "tags"],
    ["postal or zip code",                  "tags"],
    ["phone number",                        "tags"]
]
*/
//first, the positive tests, starting with the equivalence partitions
export class testVals {
    static posEPus = [
        ["Le' a-Marie",                         "V1-5"],
        ["O' Conn-el",                          "V6-10"],
        ["Le'a-Marie.0'Conn-31@autest.net",     "V11-15"],
        ["P@ss w0rD",                           "V16-21"],
        ["P@ss w0rD",                           "V22"],
        ["Rue de l'eglise",                     "V23-25"],
        ["Apt #86",                             "V26-28"],
        ["UNITED STATES",                       "V29-30"],
        ["Baden-Wurttemberg",                   "V33-35"],
        ["CA",                                  "V36"],
        ["90210",                               "V38-39"],
        ["555-555-0123",                        "V50-51"]
    ]
    
    static posEPca = [
        ["Le' a-Marie",                         "V1-5"],
        ["O' Conn-el",                          "V6-10"],
        ["Le'a-Marie.0'Conn-31@autest.net",     "11-15"],
        ["P@ss w0rD",                           "V16-21"],
        ["P@ss w0rD",                           "V22"],
        ["Rue de l'eglise",                     "V23-25"],
        ["Apt #86",                             "V26-28"],
        ["CANADA",                              "V31"],
        ["Baden-Wurttemberg",                   "V33-35"],
        ["BC",                                  "V37"],
        ["X1M 1M7",                             "V40-43"],
        ["555-555-0123",                        "V50-51"]
    ]
    
    static posEPuk = [
        ["Le' a-Marie",                         "V50-51"],
        ["O' Conn-el",                          "V6-10"],
        ["Le'a-Marie.0'Conn-31@autest.net",     "V11-15"],
        ["P@ss w0rD",                           "V16-21"], 
        ["P@ss w0rD",                           "V22"],
        ["Rue de l'eglise",                     "V23-25"],
        ["Apt #86",                             "V26-28"],
        ["UNITED KINGDOM",                      "V32"],
        ["Baden-Wurttemberg",                   "V33-35"],
        ["",                                    "V32"],
        ["SW1W 0NY",                            "V44-48"],
        ["555-555-0123",                        "V50-51"]
    ]
    
    //now the boundary values, the low ones
    
    static posBVALus = [
        ["Lea",             "B1"],
        ["Con",             "B3"],
        ["ai@k.st",         "B5"],
        ["N0 pa$",          "B7"],
        ["N0 pa$",          "V22"],
        ["Rued",            "B9"],
        ["#86",             "B11"],
        ["UNITED STATES",   "V29-30"],
        ["Hull",            "B13"],
        ["CA",              "V36"],
        ["00000",           "B15"],
        ["000-000-0000",    "B21"]
    ]
    
    static posBVALca = [
        ["Lea",             "B1"],
        ["Con",             "B3"],
        ["ai@k.st",         "B5"],
        ["N0 pa$",          "B7"],
        ["N0 pa$",          "V22"],
        ["Rued",            "B9"],
        ["#86",             "B11"],
        ["CANADA",          "V31"],
        ["Hull",            "B13"],
        ["BC",              "V37"],
        ["A1A 1A1",         "B17"],
        ["000-000-0000",    "B21"]
    ]
    
    static posBVALuk = [
        ["Lea",                 "B1"],
        ["Con",                 "B3"],
        ["ai@k.st",             "B5"],
        ["N0 pa$",              "B7"],
        ["N0 pa$",              "V22"],
        ["Rued",                "B9"],
        ["#86",                 "B11"],
        ["UNITED KINGDOM",      "V32"],
        ["Hull",                "B13"],
        ["",                    "V32"],
        ["A1A 1A1",             "B17"],
        ["000-000-0000",        "B21"]
    ]
    
    //and the high ones
    static posBVAHus = [
        ["Le' a-Marie Le' a-Marie Le' a-Marie Le' a-Marie Le' a-Marie Le' ",   "B2"],
        ["O' Conn-el O' Conn-el O' Conn-el O' Conn-el O' Conn-el O' Conn-e", "B4"],
        ["12345678901234567890123456789012345678901234567890123@autest.net",                "B6"],
        ["P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss",                "B8"],
        ["P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss",                "V22"],
        ["Rue de l'eglise Rue de l'eglise Rue de l'eglise Rue de l'eglise ",            "B10"],
        ["Apartment 7",                                                                     "B12"],
        ["UNITED STATES",                                                                   "V29"],
        ["Llanfairpwllgwyngyllgogerychwndrobwllllantysiliogogogoch",                        "B14"],
        ["CA",                                                                              "V36"],
        ["99999",                                                                           "B16"],
        ["999-999-9999",                                                                    "B22"]
    ]
    
    static posBVAHca = [
        ["Le' a-Marie Le' a-Marie Le' a-Marie Le' a-Marie Le' a-Marie Le' ",            "B2"],
        ["O' Conn-el O' Conn-el O' Conn-el O' Conn-el O' Conn-el O' Conn-e",           "B4"],
        ["12345678901234567890123456789012345678901234567890123@autest.net",                         "B6"],
        ["P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss",                         "B8"],
        ["P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss",                         "V22"],
        ["Rue de l'eglise Rue de l'eglise Rue de l'eglise Rue de l'eglise ",                     "D10"],
        ["Apartment 7",                                                                              "B12"],
        ["CANADA",                                                                                   "V31"],
        ["Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronuku",    "B14"],
        ["BC",                                                                                       "V37"],
        ["1234567890",                                                                               "B20"],
        ["999-999-9999",                                                                             "B22"]
    ]
    
    static posBVAHuk = [
        ["Le' a-Marie Le' a-Marie Le' a-Marie Le' a-Marie Le' a-Marie Le' ",       "B2"],
        ["O' Conn-el O' Conn-el O' Conn-el O' Conn-el O' Conn-el O' Conn-e",      "B4"],
        ["12345678901234567890123456789012345678901234567890123@autest.net",                    "B6"],
        ["P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss",                    "B8"],
        ["P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss w0rD P@ss",                    "V22"],
        ["Rue de l'eglise Rue de l'eglise Rue de l'eglise Rue de l'eglise ",                "B10"],
        ["Apartment 7",                                                                         "B12"],
        ["UNITED KINGDOM",                                                                      "V32"],
        ["Llanfairpwllgwyngyllgogerychwndrobwllllantysiliogogogoch",                            "B14"],
        ["",                                                                                    "V32"],
        ["1234567890",                                                                          "B20"],
        ["999-999-9999",                                                                        "B22"]
    ]
    
    // now for the negative values, one for each field
    /* static negTemplate = [
        ["case1",                           "tags"],
        ["case2",                           "tags"],
        ["case3",                           "tags"],
        and so on until
        ["caseN"],                          "tags"]
    ]
    */
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
        ["O' conn-el",                                                                                  "X6"],
        ["0' Conn-31",                                                                                  "X7"],
        ["",                                                                                            "X8"],
        ["Hi",                                                                                          "X9"],
        ["0'conn-31 0'conn-31 0'conn-31 0'conn-31 0'conn-31 0'conn-31 0'conn-31 0'conn-31",     "X10"],
        ["Hi",                                                                                          "D3"],
        ["0'conn-31 0'conn-31 0'conn-31 0'conn-31 0'conn-31 0'conn-31 0'conn-31 0'conn-31",     "D4"]
    ]
    
    static negEmail = [
        ["Le'a-Marie.0'Conn-31@autest.net@",                                        "X11"],
        ["@Le'a-Marie.0'Conn-31@autest.net",                                        "X12"],
        ["",                                                                        "X13"],
        ["Le' a-Marie. 0'conn-31@autest.net",                                       "X14"],
        ["a@k.st",                                                                  "X15"],
        ["Le'a-Marie.0'Conn-31@autest.net Le'a-Marie.0'Conn-31@autest.net Le'",     "X16"],
        ["a@k.st",                                                                  "D5"],
        ["Le'a-Marie.0'Conn-31@autest.net Le'a-Marie.0'Conn-31@autest.net Le'",     "D6"]
    ]
    
    static negPassword = [
        ["p@ss w0rd",                                                           "X17"],
        ["P@SS W0RD",                                                           "X18"],
        ["Le' a-Marie",                                                         "X19"],
        ["O' Conn-el",                                                          "X20"],
        ["Le'a-Marie.0'Conn-31@autest.net",                                     "X21"],
        ["p@ssw",                                                               "X22"],
        ["p@ss w0rd p@ss w0rd p@ss w0rd p@ss w0rd p@ss w0rd p@ss w0rd p@ss",    "X23"],
        ["",                                                                    "X24"],
        ["p@ssw",                                                               "D7"],
        ["p@ss w0rd p@ss w0rd p@ss w0rd p@ss w0rd p@ss w0rd p@ss w0rd p@ss",    "D8"]
    ]
    
    static negConfirmPassword = [
        ["p@SS W0Rd",   "X25"],
        ["",            "X26"]
    ]
    
    static negPhysAddress = [
        ["Rue de l'egli$e",                                                         "X27"],
        ["Rue",                                                                     "X28"],
        ["Rue de l'eglise Rue de l'eglise Rue de l'eglise Rue de l'eglise Rue d",   "X29"],
        ["",                                                                        "X30"],
        ["Rue",                                                                     "D9"],
        ["Rue de l'eglise Rue de l'eglise Rue de l'eglise Rue de l'eglise Rue d",   "D10"]
    ]
    
    static negAptSuiteUnit = [
        ["@pt 86",          "X31"],
        ["0 Apt",           "X32"],
        ["86",              "X33"],
        ["Apartment 86",    "X34"],
        ["86",              "D11"],
        ["Apartment 86",    "D12"]
    
    ]
    
    static negCountry =[
        ["Select a country", "X35"]
    ]
    
    static negCity = [
        ["B@den-Wurttemberg",                                                                       "X36"],
        ["Bad3n-Wurtt3mb3rg",                                                                       "X37"],
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
        ["9021@",   "X43"],
        ["9021ô",   "X44"],
        ["9021O",   "X45"],
        ["9 210",   "X46"],
        ["",        "X47"],
        ["9021",    "D15"],
        ["902101",  "D16"]
    ]
    
    static negPostalCA = [
        ["X1M 1M",      "X48"],
        ["X1M 1M7A",    "X49"],
        ["X!M 1M7",     "X50"],
        ["XM1 1M7",     "X51"],
        ["Z1M 1M7",     "X52"],
        ["X1M 1D7",     "X53"],
        ["X1M 1M",      "D17"],
        ["X1M 1M7A",    "D18"]
    ]
    
    static negPostalOther = [
        ["SW1SôNY",         "X54"],
        ["01",              "D19"],
        ["12345678901",     "D20"]
    ]
    
    // but not this one. this one is the last one.
    static negPhone = [
        ["5s5-555-0123",    "X55"],
        ["5 5-555-0123",    "X56"],
        ["5Â5-555-0123",    "X57"],
        ["555-555-Â123",    "X58"],
        ["555-555-012",     "X59"],
        ["555-555-01234",   "X60"],
        ["555-555-012",     "D21"],
        ["555-555-01234",   "D22"]
    ]
    }