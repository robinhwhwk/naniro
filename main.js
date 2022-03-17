document.addEventListener("DOMContentLoaded", () => {

    // In local storage
    let guessedCodes = [[]];
    let availableSpace = 1;
    let guessedCodeCount = 0;
    let currentCodeIndex = 0;

    const keys = document.querySelectorAll('.keyboard-row button');

    const codes = [
        "1A7B1C", "339397", "BF7F0A", "C97DF5", "FCD364", "2FD2B8", "2A829B", "ACBF34", "E5F550", "208EFA", "E0D548", "D040A1", "8BCC96", "361D72", "43C489", "A64BE0", "BEFDBD", "4D9230", "F98BD3", "967982", "6ED9ED", "B412CD", "6C1FF1", "4A4EB4", "96A806", "BA8D6E", "499F54", "2FE717", "2B0B3C", "E4BE40", "933C18", "74E2AB", "7D59CC", "7619A4", "3B454E", "C77EC8", "52C591", "472DED", "F51F1A", "C89CCE", "EBD76E", "8EC068", "D6FED2", "F187F6", "3D8461", "3B3D51", "E54F4E", "6D868E", "65AA23", "8B3DD8", "412A0D", "48AF10", "5FAA38", "39DC2A", "93157D", "CE3943", "ED9840", "B61C02", "D3046A", "CA9364", "450C3C", "4F7B17", "54157E", "20E687", "9A5BFF", "D43C80", "79C5B5", "3A490", "3BF8C0", "E05AA0", "4775BC", "29F2BE", "82C639", "257FFC", "4BEA4F", "675A5B", "D62D2D", "351A26", "4A8243", "39F040", "90F62D", "BAAD81", "14C29E", "491C19", "98D34E", "CA1081", "E79794", "DD8897", "37FE45", "B40510", "2A0185", "6DC975", "40A4D1", "7EE456", "E4A120", "657DB3", "4E8D55", "76BDB2", "B7E572", "9CE7C8",
        "D1006D", "E8B1ED", "A5AEE0", "EE95A6", "2C6B52", "C0283D", "C7FDAF", "C1BC58", "D9E1EC", "86C1C0", "7F7C6E", "BE2B2C", "F36305", "EF85B6", "F7FBCC", "EB3CE2", "CE0C40", "FD7B60", "5FD9C0", "929868", "89B1EC", "E65F0F", "8AA2FF", "3A61EE", "16F6B5", "417240", "28A5F2", "1B83E0", "13F61E", "37D448", "2452E1", "73B806", "267206", "FB6374", "2629E7", "ED49E3", "6DF7FE", "740D7F", "ACF94E", "DE5825", "E6FA6C", "181D8E", "868D0E", "600553", "A86ADD", "4B9D80", "FB6819", "EAF3BF", "AD5D00", "1A995E", "670389", "6C2459", "DB65A0", "3AF214", "AD95B0", "EF8720", "42F8BB", "B47587", "4D568B", "C2D257", "4C35C7", "D02A6F", "9AA54B", "CC26A6", "6E11FE", "4DB273", "921604", "455E90", "129F8E", "F09DB2", "5745B3", "8572D1", "98A167", "A767FE", "73AD96", "119B81", "8A7BC9", "379073", "3B1E2E", "B8FEA4", "660605", "3A2FCF", "900E95", "2A1174", "789B3F", "B4834B", "479E8A", "D25A87", "8A988F", "E80040", "384E4E", "85DC8A", "5F4475", "CD3930", "D1FB7A", "F9519D", "CD8B26", "608AFE", "36F125", "6EDB88",
        "9E3094", "F56FD0", "4AC15D", "F0C25B", "9F904D", "CFF9E6", "D3B16C", "264252", "75EC94", "C88AD4", "DB0B41", "5317D2", "1B84AB", "DAD3C0", "928DF6", "8FD6EE", "F2D722", "8151E5", "EAAD10", "C95118", "5E4CE2", "C097C5", "A85D1B", "B1E06F", "EA794E", "F622FC", "13C748", "D32945", "2307BF", "7B614A", "A29D55", "F7ADD1", "DB9638", "6A4754", "C4F6BA", "5AAC4B", "BB4983", "922318", "C0C039", "63B483", "7CBC05", "709E3A", "3D26F8", "F40154", "BB63BC", "AEB97F", "6FCD1A", "73FA10", "71A10B", "F566EA", "96F29B", "15D3E2", "153D09", "320274", "85ECBE", "D539F3", "DBE2DE", "D33F4C", "A1ADDE", "A799A0", "3B4EC8", "BAFC2A", "E5856D", "73D77C", "2FE59B", "96B270", "144137", "372AB5", "3EC693", "2DA280", "D053E5", "34A8BD", "C2E679", "47BDDF", "2C8E8B", "CE8216", "B71AFD", "B8522E", "5C7112", "773EDA", "C95018", "CFF0B6", "A2C784", "A9D4B0", "30D922", "575D01", "3CE320", "51CAA3", "882681", "975C80", "BB1EC4", "DA653F", "90BA01", "8625AD", "48646A", "DA7930", "9A7061", "30C581", "F69EED", "468ECA",
        "D5B009", "4AB470", "5235F0", "F7130C", "6F7B10", "F5DCBF", "CDA2F1", "323C8F", "12E721", "3866E0", "2AD232", "325690", "161992", "7DD884", "E2130E", "9192C1", "47183C", "D0CD13", "BADF65", "F08DB2", "D8A268", "D02E20", "2C4C27", "71C87E", "1FA8B6", "897207", "A93841", "5B43F2", "C92E3F", "98AEBB", "5D006B", "775372", "B7BC4E", "D0EBCF", "BA27E0", "588DC4", "DF74A8", "FD7171", "5589F6", "10E913", "158550", "AFC9E6", "4DD299", "AEDD9F", "C60855", "82D1DB", "BA3BA7", "89F5D8", "C1F67B", "84C981", "922D43", "96CFA4", "F9FA59", "30BE46", "411BF8", "7EA26B", "E746DC", "7C9B03", "D68EB7", "2AEBB6", "9911D0", "61C2F8", "63FBB5", "457FFF", "54F034", "7E01D6", "49C116", "913BB6", "8989C2", "9A1346", "3985C6", "46FFB9", "17E718", "817B3F", "F914A1", "5FD80F", "911323", "44A99A", "A5E0C6", "9151F0", "EB7A02", "4769A0", "787B70", "B2F4BB", "C3FD06", "59EC95", "F5A623", "35D8AE", "7927FA", "639C5D", "8A3244", "A82883", "A78226", "9718E0", "30AFE3", "CE866C", "50D7C7", "973479", "4D7A58", "B53050",
        "1D28ED", "E4FA35", "13DB67", "8CDAF8", "7DE57D", "34A741", "C51258", "B15D47", "E2A60E", "955778", "532ACD", "E439A1", "378198", "8E6FDC", "4F5819", "3E215F", "81B307", "50A3D9", "D90201", "68753F", "9C4749", "9809C0", "9AAB00", "628ADD", "9A2883", "B4CC0F", "3C2F65", "85E2FD", "49418B", "56E28E", "9A420C", "47ADEC", "AD1982", "F2818D", "5CBA81", "4D71F1", "BE2102", "D1883D", "3F827E", "90E8C2", "5944C1", "99D414", "E37F65", "9B3D21", "53DD82", "CB84DB", "9D3837", "1172E4", "C098AD", "D3B25B", "A8BAB4", "B60984", "2A4736", "8EE033", "69D5D9", "AFCBE9", "4DD9B0", "15F6CF", "E4E8FF", "24DB17", "897642", "7D13ED", "3D338B", "B6D9A5", "5A19D6", "A3F637", "95962A", "93549C", "7D05FE", "1D2917", "3346B2", "3934D1", "ED235A", "8709E2", "6E9657", "A592CD", "AB55B0", "3CE908", "5B3CBD", "587FEE", "B9485C", "9AD6C0", "6B6102", "B540BD", "7BF906", "D3960D", "CC3A43", "A3F400", "56C9B0", "3EA15B", "EDC010", "D88E79", "A8CCA0", "CB9BB7", "D697C1", "5C8D16", "8F3A6B", "43511C", "B52A84", "707A5E",
        "565A1A", "2338CB", "D45F3A", "A70D3D", "77A260", "579FF0", "2153A2", "5F26F2", "A6CC91", "B06A27", "853968", "9BA1D4", "4382D8", "954266", "DF1AEB", "1BEC28", "A523EE", "92805F", "F2FFF2", "504A76", "B9313F", "88BA1A", "BEA448", "F641AC", "F2472E", "BFAD5C", "E0497A", "C6CE6C", "B7A0C4", "47EF8E", "E09E01", "31C282", "303EFF", "7F82E0", "751080", "C3ABE6", "DB8E17", "AC28C2", "7709FD", "9335F7", "575F97", "424AC0", "E14217", "8F4D93", "E8133A", "C46256", "A89A40", "EC8169", "9283D0", "7FF68E", "4825D4", "BAC560", "F9CDD1", "330CBA", "D7B249", "EC0947", "7C5488", "52D2EF", "658DCA", "82E572", "501D09", "2409E7", "85633F", "B6EB30", "FE8F19", "C2DC36", "BC456E", "EE38F2", "1154EA", "9AC350", "5B941C", "A8F547", "C6BE77", "6730B7", "87A683", "ACBF50", "5BA6AF", "5859AF", "C03426", "C70F7F", "900E92", "B2AA8B", "393BA0", "21EA1A", "A02AE6", "9E31BD", "38949F", "B9E025", "E6D325", "3BE094", "1ECDF1", "7FAD68", "B2C7D0", "C8E6DF", "3D88F4", "E0D8B7", "CDA395", "83D088", "B422B5", "4F8BD2",
        "3480A3", "F95097", "6C1110", "CA8ED1", "55936C", "71A541", "983B94", "59FC5B", "F102CD", "7233D3", "ABB23F", "F157F9", "3163A2", "DAA317", "F13333", "D3D2B9", "54CDD0", "311CBD", "5411CA", "FF9758", "FCAF0D", "AFBA6C", "DC8060", "271920", "2C1243", "8F5E78", "E26F0B", "7A04A1", "65B511", "9FD3C8", "5244E0", "BC1680", "7A6C20", "48CE04", "2B1F50", "D25E56", "9193DE", "CAE7D8", "BF8AD7", "2D4720", "E87E2B", "3567B5", "1898AD", "71A7EC", "43F79C", "68E2E4", "959988", "66779E", "52F29C", "F32B7C", "7C078F", "18F831", "273E8A", "9C0BE6", "F66595", "691B25", "56D611", "FB443E", "34D0BC", "20A37F", "9D0D4E", "788ED5", "4F51DF", "F77A9B", "18047E", "228767", "239CD2", "31E500", "61CB00", "41F3C3", "884368", "260957", "834647", "35DDFA", "8396CD", "832433", "6E35DE", "C09D4F", "7C43A3", "8CEF4B", "22DF89", "2C4968", "823A16", "5F6E21", "3D6575", "C1AE40", "85A950", "4F0110", "62238D", "6E6B97", "2987A0", "4F9841", "170620", "E5D40A", "6907D8", "DEF76D", "445625", "117BB1", "7B19AD", "A9FA20",
        "552D16", "840340", "A4316F", "C4723C", "ED957A", "94C854", "z3AB47C", "A90AA9", "5C312F", "F10477", "7976B5", "28070D", "D38A56", "71F182", "E30899", "95ABCB", "EEA4A8", "F68374", "484BD6", "9993DD", "B33536", "160252", "74D24D", "1D5B58", "224F20", "283BCE", "7F3018", "F9F0F2", "5D5BB1", "46BC1B", "5AA2D2", "499234", "8B8746", "18878D", "46EC45", "186FF8", "698AEC", "33EA52", "EE1AC0", "3000FD", "29B5C0", "483220", "1ECA9C", "B558D3", "68F5FF", "1C16BF", "FFD5A8", "891D6E", "19B42A", "C6B9FF", "EAD3ED", "39B28F", "553178", "3B3AEA", "1E1648", "DCF5D7", "8CFDDA", "BBD80F", "6B0FFC", "230AFB", "B05ABB", "A903C1", "4261DE", "73BB50", "742AAD", "CC0A1E", "CF546A", "C9EFA4", "7B5270", "DC6BD3", "E7FECD", "6C9E14", "9B580D", "EE366F", "CC826C", "889AB2", "6D1FE0", "5BA4F5", "692425", "68CF54", "C62AC8", "CCA1A7", "AA5406", "359FE8", "6E3909", "F78312", "F1F993", "9EB1C8", "5DC840", "1171E7", "2B6EF8", "39EF00", "6092BC", "D3DF26", "E62583", "661256", "B49F31", "658F0D", "59CBB2", "7CF0E0",
        "F3EB72", "F1CD6E", "B7C3FC", "953F33", "20F6FD", "EA8AB7", "6BE494", "F4FD71", "21F2E9", "8F43B4", "9B6193", "825DF8", "C6F4EC", "EC5A08", "CD7BE3", "4BD5E4", "4449E3", "FDD250", "3E42D6", "37B8E7", "20AC94", "1369FB", "631784", "CE9E2C", "FF1BE7", "AE1312", "8EE9E5", "98AA94", "29DA9E", "3D4FF8", "C842D4", "160BDB", "BB57F8", "5F97FD", "66DF8E", "789BF8", "FA1286", "12F64B", "F28B1B", "B7E44F", "F29C36", "F2237C", "89E5C0", "4B50B1", "4A58FF", "CE6908", "726437", "E7B0B7", "9BD893", "F755E6", "9A20C1", "3DF8E0", "3780B0", "E8879C", "49E0EC", "EE02C7", "763837", "4F41D3", "BBC78A", "709630", "166970", "40470E", "F00F9C", "E4D799", "B99836", "F87DF6", "42D11F", "3DF4DA", "CD58EA", "DC9FE7", "B4CD02", "68AD51", "AD9008", "D6EC95", "B2D9BA", "10227E", "C2E921", "310959", "522C8C", "FBC8D6", "968245", "6806A5", "9F6490", "3E1E46", "EE42F8", "B5823A", "77E903", "B2F0D6", "5C050E", "A16E95", "9D46BE", "8A7C1A", "B7085C", "F975A2", "B85A17", "68EF13", "D77D37", "4E972F", "591F33", "A6CDA8",
        "3DE403", "11358F", "2933CF", "5F2FF8", "9492A0", "64665D", "208612", "33193A", "EBB3AF", "8F424A", "161AA2", "A3C14D", "7A65D5", "68924C", "522B66", "D320BD", "EEC2C7", "B5E0DA", "58DD19", "312A27", "9C09EB", "80C22B", "9047A4", "7B5EE6", "BBE435", "92B990", "BBCD82", "AEB422", "181CD4", "695FBD", "51540D", "B0651A", "F929D3", "592979", "FEB0AF", "53950B", "89EDE3", "B94E0A", "1FC2CA", "A68987", "B7547B", "D7827C", "5EAB6E", "CF4EB7", "203750", "C7C701", "37210F", "824584", "CB44AE", "9BEEBF", "408229", "10A897", "723611", "2141BE", "F313A2", "C58357", "16F504", "139769", "BF2F26", "636C89", "E119BB", "12D357", "2B72C9", "2F502C", "B4B1E8", "6EF00D", "13B087", "2982D8", "A7A1B0", "20062D", "6E1F45", "10F458", "BF4CA2", "FCC9D0", "2085A4", "7041A0", "F4CCF4", "14EAAF", "868000", "C776EF", "A2A8D9", "A310F4", "5E0C7A", "F1A8EB", "120885", "F809FB", "188C8F", "83D9D0", "9B8391", "385C1C", "AE8A65", "A2DCCF", "7C35AE", "5A4D22", "20CFE5", "83D89D", "79B6B1", "AF2C21", "FC7049", "78DA91",
        "54CF55", "AC3C09", "1D6245", "63828B", "870D80", "6CAAE3", "72699B", "AF7D82", "A1DE9C", "473E6A", "1D26D5", "822031", "63A627", "6B67A8", "CC3258", "4E3AB5", "14AED0", "E156EE", "8A2064", "56D070", "84BA1C", "47D190", "651E03", "B08202", "AAD670", "7B35F3", "381FAE", "D4EC22", "C2865D", "13E199", "F34DED", "C8D09D", "479F9C", "AA04D9", "F08D8F", "45A927", "374708", "9337CD", "6BC2A7", "696568", "F8A250", "538ED9", "4F27CD", "67ED98", "2DB92F", "D644AE", "96901A", "FA5226", "96FF39", "AF40F2", "987C00", "E58EB3", "DA499F", "1D9A06", "713FDA", "7AF419", "408D46", "FE01BE", "995A73", "802949", "C7BBBC", "B4353F", "208C54", "6F91A8", "27F1C0", "34A28E", "5611BC", "C9A820", "6937BB", "2E3048", "BD04AB", "B41A31", "A9A078", "185647", "CF74E4", "E228CD", "C1E3A1", "ABD246", "DBAC00", "F7E4CA", "E38E3E", "4873C8", "CC013C", "D48FA5", "9DAB2A", "420125", "EB4C01", "5FEEE7", "B1FCE3", "FB2293", "72CA00", "C24CE5", "FDF577", "E37924", "F50A62", "48760E", "EF4F10", "9E21E5", "2C0F3D", "7CFA0B",
        "301E72", "313162", "E9263E", "9DC827", "8DBDC0", "761493", "8D5CAF", "53700E", "E6EA31", "4F9F67", "2EDCDA", "DD5118", "FDCC75", "3F1C2B", "707570", "F8F7F0", "DF8FA5", "975ACA", "E33A1C", "A4C17A", "894861", "978104", "11244C", "F59DE1", "34DDC9", "2A3875", "8B9C14", "6610A9", "D4AE3D", "37FC80", "DC1C11", "6780DA", "E8AA01", "4AA831", "BD0C11", "33BC17", "3B57C7", "E877F0", "EEDBDE", "761028", "7D1BC3", "ED0336", "2D0BF7", "320063", "4E791A", "2FC8BC", "2AF4CE", "D429E2", "B09CBD", "D40CD4", "8466F5", "F270EC", "E913DA", "D2E2E0", "C16401", "1DA6EF", "7D869C", "8E6C41", "711360", "626034", "561492", "9C5C2C", "A28376", "71ED2D", "C54405", "8C27F0", "EC7C65", "4E0907", "DF758A", "104CAA", "25D91F", "8A3DBE", "C68B96", "46873B", "39072B", "A0A515", "2BDE21", "B799BF", "511CB1", "DD9095", "B927DD", "3DD4B0", "A07C63", "358E15", "4B0A05", "D56570", "3C9E8F", "567B09", "7E0CF1", "9283AE", "DC24CF", "DF7BE4", "6F8F78", "2BE87D", "F52AA8", "D6FC99", "8B81B4", "244760", "BA9DE9", "72F410",
        "601916", "8A43A8", "D5F8D9", "554C47", "5BA297", "FECFAA", "C15D1A", "4546FE", "4B78D5", "7DCA0C", "9F949E", "19EDE3", "9CBA37", "11450B", "E37DB7", "8AC7D6", "8E6505", "F67320", "235C54", "F40519", "F9A855", "A7BACA", "9D5692", "BF3A16", "9F5440", "116F90", "C24A25", "484CAA", "F5B076", "123085", "DD9310", "DE3174", "754F98", "4952B0", "112C36", "39D2E0", "39105C", "5D345C", "45F45F", "45F2E2", "6DCE24", "F1E57A", "4E1FA1", "E3A495", "D969EE", "4252C4", "D92173", "9751F0", "D16F30", "98A748", "50C611", "53439C", "197AA4", "57C2C5", "CB7B3E", "3ADF67", "9A74C0", "77FA65", "1169C5", "E5D7A8", "2C43A9", "39C2C9", "6926C6", "54C5DA", "91D696", "57D592", "281913", "C83410", "1C9E8F", "5A3646", "6B01C3", "69E7CE", "1C7AE8", "11CC66", "B86356", "C0747C", "618AFD", "AD173B", "123117", "4CC8C7", "762A0", "FCB128", "6EAACE", "FE4BF1", "991587", "173548", "247C2B", "3B3493", "AE495A", "E76D51", "BC8300", "99D714", "198C02", "DE34CB", "B5BD50", "77E8C7", "5B03C6", "6768E4", "1FA0C0", "53A8AC",
        "7D59D1", "9FC8AA", "1A6B05", "1E8797", "791DBA", "ABB3BE", "CE3170", "F8E99F", "3C3697", "23B755", "4890D8", "6CF34D", "498AC0", "D178C2", "989DD0", "FD4867", "7EF42A", "888EDD", "ACAF6A", "D5BC15", "70226B", "FC84B1", "72FA8B", "F6DA3D", "2AFEAB", "45CF9E", "E1FC30", "75492F", "ABB26D", "990AA7", "46D954", "6B0530", "8CF3FD", "8DED83", "711AB2", "FE7857", "6AF927", "B522AD", "BD2EB0", "3FEEA0", "8605CF", "281F89", "9431CF", "5BD0D5", "45A5E2", "ADCEA0", "9B10C1", "7C3B57", "869F6A", "D3180B", "CC5696", "30FDEC", "F36DD5", "3B52E7", "11F999", "44A22C", "DFBD64", "406B89", "258CB3", "AC704C", "D17029", "41F42C", "F90807", "317D90", "A5EECD", "949B9B", "C94B55", "AFA9D9", "B917B5", "B8686E", "F85088", "D2736E", "405898", "978FD1", "AAF658", "E46552", "6829F5", "BF966F", "8E509C", "6C3000", "FC4617", "CA2A2B", "48F9C0", "F87909", "D039A5", "880F56", "BB0020", "D589A9", "7D229A", "A189FB", "50F078", "362A33", "7F587B", "9B7869", "2C5CC5", "CFF724", "B4F823", "C5C7E2", "1FD636", "992A81"
    ]
    let currentCode = codes[currentCodeIndex]

    initLocalStorage();
    createSquares();
    fillLeftPallete();
    updateStats();
    loadLocalStorage();

    function updateStats() {
        const currentStreak = window.localStorage.getItem('currentStreak');
        const totalWins = window.localStorage.getItem('totalWins'); 
        const totalGames = window.localStorage.getItem('totalPlayed');

        document.getElementById("total-wins").textContent = totalWins;
        document.getElementById("total-played").textContent = totalGames;
        document.getElementById("current-streak").textContent = currentStreak;

        const winpct = Math.round(Number(totalWins) / Number(totalGames) * 100) || 0;
        document.getElementById("win-pct").textContent = winpct + "%";
    }

    function initLocalStorage() {
        const storedCurrentCodeIndex = window.localStorage.getItem("currentCodeIndex")

        if (!storedCurrentCodeIndex) {
            window.localStorage.setItem('currentCodeIndex', currentCodeIndex);
            openModal(helpModal)
        } else {
            currentCodeIndex = Number(storedCurrentCodeIndex)
            currentCode = codes[currentCodeIndex]
        }
    }

    function loadLocalStorage() {
        currentCodeIndex = Number(window.localStorage.getItem('currentCodeIndex')) || currentCodeIndex;
        guessedCodeCount = Number(window.localStorage.getItem('guessedCodeCount')) || guessedCodeCount;
        availableSpace = Number(window.localStorage.getItem('availableSpace')) || availableSpace;
        guessedCodes = JSON.parse(window.localStorage.getItem('guessedCodes')) || guessedCodes;

        currentCode = codes[currentCodeIndex];

        const storedBoardContainer = window.localStorage.getItem('boardContainer');
        const storedKeyboardContainer = window.localStorage.getItem('keyboardContainer');

        if (storedBoardContainer) {
            document.getElementById("board-container").innerHTML = storedBoardContainer;
        }
        if (storedKeyboardContainer) {
            document.getElementById("keyboard-container").innerHTML = storedKeyboardContainer;
        }
    }

    function preserveGameState() {
        window.localStorage.setItem('guessedCodes', JSON.stringify(guessedCodes));

        const keyboardContainer = document.getElementById('keyboard-container');
        window.localStorage.setItem('keyboardContainer', keyboardContainer.innerHTML);

        const boardContainer = document.getElementById('board-container');
        window.localStorage.setItem('boardContainer', boardContainer.innerHTML);
    }

    // Getter for current code array.
    function getCurrentCodeArr() {
        const numberOfGuessedCodes = guessedCodes.length;
        return guessedCodes[numberOfGuessedCodes - 1];
    }

    function updateGuessedCodes(letter) {
        const currentCodeArr = getCurrentCodeArr();

        if (currentCodeArr && currentCodeArr.length < 6) {
            currentCodeArr.push(letter);
            // Get the square with id of available space
            const availableSpaceEl = document.getElementById(String(availableSpace));
            availableSpace = availableSpace + 1;

            availableSpaceEl.textContent = letter;
        }
    }


    function getTileColor(letter, index) {
        const isCorrectLetter = currentCode.includes(letter);
        const letterInThatPosition = currentCode.charAt(index);
        const isCorrectPosition = letter === letterInThatPosition;

        if (isCorrectPosition) {
            return "rgb(83, 141, 78)";
        }

        // change tile to yellow if letter is +- 1 off
        if (Math.abs(currentCode.charCodeAt(index) - letter.charCodeAt()) <= 1 || (letter == "9" && letterInThatPosition == "A") || (letter == "A" && letterInThatPosition == "9")) {
            return "rgb(181, 159, 59)";
            // change tile to gray if letter is not in the code
        } else if (!isCorrectLetter) {
            return "#787C7E";
        }
        // change tile to green if right position and right letter

        return "#787C7E";
    }

    function isHexColor(hex) {
        return typeof hex === 'string'
            && hex.length === 6
            && !isNaN(Number('0x' + hex))
    }

    function updateCodeIndex() {
        window.localStorage.setItem('currentCodeIndex', currentCodeIndex + 1)
    }

    function handleSubmitCode() {
        const currentCodeArr = getCurrentCodeArr();
        if (currentCodeArr.length !== 6) {
            window.alert("Code must be 6 letters");
            return;
        }

        const guessedCode = currentCodeArr.join('');

        if (!isHexColor(guessedCode)) {
            window.alert("Not a hexcode");
            return;
        }

        const firstLetterId = guessedCodeCount * 6 + 1;
        const interval = 200;
        currentCodeArr.forEach((letter, index) => {
            setTimeout(() => {
                const tileColor = getTileColor(letter, index);
                const letterId = firstLetterId + index;
                const letterEl = document.getElementById(letterId);
                letterEl.classList.add("animate__animated", "animate__flipInX");
                letterEl.style = `background-color:${tileColor};border-color:${tileColor}`;
                if (index == 5) {
                    preserveGameState();
                }
            }, interval * index);
        });

        currentCodeArr.forEach((letter, index) => { 
            setTimeout(() => {
                const tileColor = getTileColor(letter, index);
                const keyboardEl = document.getElementById("key" + letter);
                keyboardEl.style = `background-color:${tileColor};border-color:${tileColor}`;
            }, interval * currentCodeArr.length + 500);          
        });

        fillRightPallete(guessedCode);
        window.localStorage.setItem('availableSpace', availableSpace);

        guessedCodeCount += 1;
        window.localStorage.setItem('guessedCodeCount', guessedCodeCount);

        // Win
        if (guessedCode === currentCode) {
            showResult(guessedCodes.length);
            updateCodeIndex();
            setTimeout(() => {
                resetGameState();
            }, 2000);          
        }
        // Lose
        if (guessedCodes.length === 6) {
            showLosingResult();
            updateCodeIndex();
            setTimeout(() => {
                resetGameState();
            }, 2000);  
        }

        guessedCodes.push([]);
    }

    function resetGameState() {
        window.localStorage.removeItem('guessedCodeCount');
        window.localStorage.removeItem('guessedCodes');
        window.localStorage.removeItem('availableSpace');
        window.localStorage.removeItem('keyboardContainer');
        window.localStorage.removeItem('boardContainer');
    }

    function createSquares() {
        const gameBoard = document.getElementById("board");

        for (let index = 0; index < 42; index++) {
            let square = document.createElement("div");
            square.classList.add("square");

            if (index % 7 == 0) {
                gameBoard.appendChild(square);
                square.textContent = "#";
            } else {
                square.classList.add("square");
                square.classList.add("animate_animated");
                square.setAttribute("id", index - Math.floor(index / 7));
                gameBoard.appendChild(square);
            }
        }
    }

    function handleDeleteLetter() {
        const currentCodeArr = getCurrentCodeArr();
        const removedLetter = currentCodeArr.pop();

        if (removedLetter == null) return;

        guessedCodes[guessedCodes.length - 1] = currentCodeArr;

        const lastLetterEl = document.getElementById(String(availableSpace - 1));

        lastLetterEl.textContent = '';
        availableSpace = availableSpace - 1;
    }

    function fillLeftPallete() {
        const leftPallete = document.getElementById("left-pallete");
        const palleteColorCode = "#" + currentCode;
        leftPallete.style = `background-color:${palleteColorCode}`;
    }

    function fillRightPallete(guessedCode) {
        const rightPallete = document.getElementById("right-pallete");
        const palleteColorCode = "#" + guessedCode;
        rightPallete.style = `background-color:${palleteColorCode}`;
    }

    document.addEventListener('keydown', (event) => {
        let key = event.key.toUpperCase();
        if ("0123456789ABCDEF".includes(key)) {
            updateGuessedCodes(key);

        }

        if (key === "ENTER") {
            handleSubmitCode();
        }

        if (key === "BACKSPACE") {
            handleDeleteLetter();
        }
    })

    async function showResult(tries) {
        const finalResultEl = document.getElementById("final-score");
        finalResultEl.classList.add("active")
        switch (tries) {
            case 1:
                finalResultEl.textContent = "Perfect";
                break;
            case 2:
                finalResultEl.textContent = "Wow";
                break;
            case 3:
                finalResultEl.textContent = "Eazy";
                break;
            case 4:
                finalResultEl.textContent = "Nice";
                break;
            case 5:
                finalResultEl.textContent = "Good";
                break;
            case 6:
                finalResultEl.textContent = "Whew";
                break;
            default:
                finalResultEl.textContent = "Whamp whamp";
        }

        const totalWins = window.localStorage.getItem('totalWins') || 0;
        window.localStorage.setItem('totalWins', Number(totalWins) + 1);

        const currentStreak = window.localStorage.getItem('currentStreak') || 0;
        window.localStorage.setItem('currentStreak', Number(currentStreak) + 1);

        const totalPlayed = window.localStorage.getItem('totalPlayed') || 0;
        window.localStorage.setItem('totalPlayed', Number(totalPlayed) + 1);

        updateStats();
        
        setTimeout(() => {
            const statModal = document.querySelector(".stats");
            openModal(statModal);
        }, 3000);
        
    }

    function showLosingResult() {
        const finalResultEl = document.getElementById("final-score");
        finalResultEl.textContent = "#" + currentCode
        finalResultEl.classList.add("active")

        window.localStorage.setItem('currentStreak', 0);    

        const totalPlayed = window.localStorage.getItem('totalPlayed') || 0;
        window.localStorage.setItem('totalPlayed', Number(totalPlayed) + 1);

        updateStats();
        const statModal = document.querySelector('stats');
        openModal(statModal);
    }

    for (let i = 0; i < keys.length; ++i) {
        keys[i].setAttribute("id", "key" + keys[i].getAttribute("data-key"));
        keys[i].onclick = ({ target }) => {
            const letter = target.getAttribute("data-key");

            if (letter === "enter") {
                handleSubmitCode();
                return;
            }

            if (letter === "del") {
                handleDeleteLetter();
                return;
            }

            updateGuessedCodes(letter);
        };
    }
})

